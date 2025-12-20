import { NextRequest, NextResponse } from "next/server";
import { getCategories } from "@/lib/supabase";
import { normalizeLanguage, languageLabel } from "@/lib/language";
import { translateText } from "@/lib/openai";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const language = normalizeLanguage(
      req.nextUrl.searchParams.get("language") ?? undefined
    );

    const categories = await getCategories();
    const summaryMessage =
      categories.length > 0
        ? "Categories loaded successfully."
        : "No categories available yet.";

    const localizedSummary =
      language === "en"
        ? summaryMessage
        : await translateText({
            text: summaryMessage,
            targetLanguage: languageLabel(language),
          });

    return NextResponse.json({
      success: true,
      data: {
        summary: localizedSummary,
        categories,
      },
    });
  } catch (error) {
    console.error("/api/categories error", error);
    return NextResponse.json(
      { success: false, error: "Unable to load categories." },
      { status: 500 }
    );
  }
}

