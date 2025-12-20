import { NextRequest, NextResponse } from "next/server";
import { getProductRecommendations } from "@/lib/supabase";
import { normalizeLanguage, languageLabel } from "@/lib/language";
import { translateText } from "@/lib/openai";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { context, language } = await req.json();
    if (!context || typeof context !== "string") {
      return NextResponse.json(
        { success: false, error: "Context text is required." },
        { status: 400 }
      );
    }

    const normalizedLanguage = normalizeLanguage(language);

    const recommendations = await getProductRecommendations(context);

    const summaryMessage =
      recommendations.length > 0
        ? "Here are some recommendations based on your latest conversation."
        : "No strong matches yet, but we are expanding the catalog daily.";

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
        products: recommendations,
      },
    });
  } catch (error) {
    console.error("/api/products/recommend error", error);
    return NextResponse.json(
      { success: false, error: "Unable to fetch recommendations." },
      { status: 500 }
    );
  }
}

