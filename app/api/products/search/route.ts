import { NextRequest, NextResponse } from "next/server";
import { searchProducts } from "@/lib/supabase";
import { normalizeLanguage, languageLabel } from "@/lib/language";
import { translateText } from "@/lib/openai";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { query, language } = await req.json();
    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { success: false, error: "Query is required." },
        { status: 400 }
      );
    }

    const normalizedLanguage = normalizeLanguage(language);
    const englishQuery =
      normalizedLanguage === "en"
        ? query
        : await translateText({ text: query, targetLanguage: "English" });

    const products = await searchProducts(englishQuery);

    const summaryMessage = `Found ${products.length} product(s) for your search.`;
    const localizedSummary =
      normalizedLanguage === "en"
        ? summaryMessage
        : await translateText({
            text: summaryMessage,
            targetLanguage: languageLabel(normalizedLanguage),
          });

    return NextResponse.json({
      success: true,
      data: {
        summary: localizedSummary,
        products,
      },
    });
  } catch (error) {
    console.error("/api/products/search error", error);
    return NextResponse.json(
      { success: false, error: "Unable to search products." },
      { status: 500 }
    );
  }
}

