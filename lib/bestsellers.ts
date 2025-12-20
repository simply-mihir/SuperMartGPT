"use server";

import { supabaseAdmin } from "./supabaseAdmin";
import type { Product } from "@/types";
import { translateTextStrict } from "./translate";

// Fetch bestseller products with optional translation (NO image processing)
export async function getBestsellers(params: {
  language?: string;
  limit?: number;
}): Promise<Product[]> {
  const { language, limit = 10 } = params;

  console.log("[getBestsellers] params", { language, limit });

  // First, try querying by explicit is_bestseller flag.
  let products: Product[] = [];

  const primaryQuery = supabaseAdmin
    .from("products")
    .select("id, name, description, price, category, translations, is_bestseller")
    .eq("is_bestseller", true)
    .limit(limit);

  const { data: primaryData, error: primaryError } = await primaryQuery;

  if (primaryError) {
    // Fallback if the is_bestseller column does not exist.
    const message = primaryError.message || "";
    console.error("[getBestsellers] primary query error", primaryError);

    const missingColumn =
      message.toLowerCase().includes("column") &&
      message.toLowerCase().includes("is_bestseller") &&
      message.toLowerCase().includes("does not exist");

    if (!missingColumn) {
      throw new Error(primaryError.message);
    }

    console.warn(
      "[getBestsellers] 'is_bestseller' column missing, falling back to top products by id"
    );

    const { data: fallbackData, error: fallbackError } = await supabaseAdmin
      .from("products")
      .select("id, name, description, price, category, translations")
      .order("id", { ascending: true })
      .limit(limit);

    if (fallbackError) {
      console.error("[getBestsellers] fallback query error", fallbackError);
      throw new Error(fallbackError.message);
    }

    products = (fallbackData ?? []) as Product[];
  } else {
    products = (primaryData ?? []) as Product[];
  }

  console.log("[getBestsellers] products fetched", {
    count: products.length,
  });

  const langKey = language;
  const needsTranslation = !!language && !language.toLowerCase().startsWith("en");

  const updated: Product[] = [];

  for (const product of products) {
    console.log("[getBestsellers] processing product", {
      id: product.id,
      hasTranslations: !!product.translations,
    });

    // Optionally translate
    if (needsTranslation && langKey) {
      let translations: Product["translations"] | Record<string, any> =
        product.translations ?? {};

      // Handle case where translations might be stored as JSON string.
      if (typeof translations === "string") {
        try {
          translations = JSON.parse(translations);
        } catch (e) {
          console.warn(
            "[getBestsellers] Failed to parse translations JSON for product",
            product.id,
            e
          );
          translations = {};
        }
      }

      const existing = (translations as any)[langKey] ?? {};

      let name: string | undefined = existing.name;
      let description: string | undefined = existing.description;

      let changed = false;

      if (!name && product.name) {
        try {
          name = await translateTextStrict(product.name, language);
          changed = true;
        } catch (e) {
          console.error(
            "[getBestsellers] name translation failed, falling back to English",
            {
              id: product.id,
              language,
              error: e instanceof Error ? e.message : String(e),
            }
          );
          name = product.name;
        }
      }

      if (!description && product.description) {
        try {
          description = await translateTextStrict(
            product.description,
            language
          );
          changed = true;
        } catch (e) {
          console.error(
            "[getBestsellers] description translation failed, falling back to English",
            {
              id: product.id,
              language,
              error: e instanceof Error ? e.message : String(e),
            }
          );
          description = product.description ?? undefined;
        }
      }

      if (changed) {
        const newTranslations = {
          ...(translations as any),
          [langKey]: {
            name: name ?? existing.name,
            description: description ?? existing.description,
          },
        };

        // Persist back to DB (best-effort, non-blocking for other items)
        try {
          await supabaseAdmin
            .from("products")
            .update({ translations: newTranslations })
            .eq("id", product.id);
        } catch (e) {
          console.warn(
            "[getBestsellers] Failed to persist product translation",
            product.id,
            e
          );
        }

        product.translations = newTranslations as any;
      }

      // Override base fields for the response
      if (name) product.name = name;
      if (description) product.description = description;

      console.log("[getBestsellers] translations applied", {
        id: product.id,
        language,
        hasName: !!name,
        hasDescription: !!description,
      });
    }

    updated.push(product);
  }

  console.log("[getBestsellers] final product count", updated.length);

  return updated;
}
