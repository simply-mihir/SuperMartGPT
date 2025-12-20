import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { safeTranslate } from "@/lib/translate";

export const runtime = "nodejs";

function safeParseJson<T = any>(value: unknown): T | null {
  if (!value) return null;
  if (typeof value === "object") return value as T;
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch (err) {
      console.warn(
        "[/api/products/bestsellers] Failed to parse JSON value",
        err
      );
      return null;
    }
  }
  return null;
}

// GET /api/products/bestsellers?lang=xx-XX
export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const lang = url.searchParams.get("lang") || "en-US";
  const isEnglish = lang.toLowerCase().startsWith("en");

  console.log("[/api/products/bestsellers] incoming request", {
    lang,
    path: url.pathname,
    search: url.search,
  });

  try {
    // STEP 1: Fetch candidate products from Supabase (NO images)
    const { data, error } = await supabaseAdmin
      .from("products")
      .select(
        "id, name, description, price, discount_price, stock, translations, category_id, metadata, is_bestseller"
      )
      .limit(100);

    if (error) {
      console.error(
        "[/api/products/bestsellers] Supabase query error:",
        error
      );
      throw new Error(error.message);
    }

    const rows = (data ?? []) as any[];

    console.log("[/api/products/bestsellers] raw rows fetched", {
      count: rows.length,
    });

    // STEP 2: Determine which rows are bestsellers
    const filtered = rows.filter((row) => {
      const hasFlag = !!row.is_bestseller;

      let fromMetadata = false;
      if (row.metadata) {
        const meta = safeParseJson<any>(row.metadata) ?? row.metadata;
        try {
          fromMetadata =
            !!(meta as any)?.isBestseller ||
            !!(meta as any)?.is_bestseller ||
            !!(meta as any)?.bestseller;
        } catch {
          fromMetadata = false;
        }
      }

      return hasFlag || fromMetadata;
    });

    const candidates = (filtered.length > 0 ? filtered : rows).slice(0, 10);

    console.log("[/api/products/bestsellers] bestseller candidates", {
      total: rows.length,
      filtered: filtered.length,
      used: candidates.length,
    });

    // STEP 3: Map products with translations (NO images)
    // Use Promise.all for parallel translation
    const bestsellers = await Promise.all(
      candidates.map(async (row) => {
        const baseName: string = row.name ?? "";
        const baseDescription: string = row.description ?? "";

        // Check for cached translations first
        const translationsObj =
          safeParseJson<Record<string, any>>(row.translations) ??
          (row.translations || {});

        const langEntry =
          translationsObj && typeof translationsObj === "object"
            ? translationsObj[lang] ?? {}
            : {};

        let translatedName: string = baseName;
        let translatedDescription: string = baseDescription;

        if (!isEnglish) {
          // Try cached translation first, then fallback to live translation
          if (langEntry?.name) {
            translatedName = langEntry.name;
          } else if (baseName) {
            translatedName = await safeTranslate(baseName, lang);
          }

          if (langEntry?.description) {
            translatedDescription = langEntry.description;
          } else if (baseDescription) {
            translatedDescription = await safeTranslate(baseDescription, lang);
          }
        }

        const price =
          typeof row.discount_price === "number"
            ? row.discount_price
            : typeof row.price === "number"
            ? row.price
            : 0;

        return {
          id: row.id,
          name: translatedName, // Return translated name as primary
          translatedName,
          description: translatedDescription, // Return translated description as primary
          translatedDescription,
          price,
          // NO imageUrl - text-only UI
        };
      })
    );

    console.log("[/api/products/bestsellers] response summary", {
      lang,
      count: bestsellers.length,
    });

    return NextResponse.json({
      success: true,
      bestsellers,
    });
  } catch (err: any) {
    console.error("🔥 BESTSELLERS ROUTE ERROR:", err);
    const message =
      err instanceof Error ? err.message : "Failed to load bestsellers";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
