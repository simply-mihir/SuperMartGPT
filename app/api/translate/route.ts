import { NextRequest, NextResponse } from "next/server";
import { translateTextStrict } from "@/lib/translate";

export const runtime = "nodejs";

// POST /api/translate
// Body: { text: string, targetLanguage: string }
export async function POST(req: NextRequest) {
  try {
    const { text, targetLanguage } = await req.json();
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { success: false, error: "Text is required." },
        { status: 400 }
      );
    }

    if (!targetLanguage || typeof targetLanguage !== "string") {
      return NextResponse.json(
        { success: false, error: "targetLanguage is required." },
        { status: 400 }
      );
    }

    const translatedText = await translateTextStrict(text, targetLanguage);

    // Keep backward-compatible shape for existing frontend while satisfying spec.
    return NextResponse.json({
      success: true,
      translatedText,
      data: { translated: translatedText },
    });
  } catch (error) {
    console.error("/api/translate error", error);
    return NextResponse.json(
      { success: false, error: "Unable to translate text." },
      { status: 500 }
    );
  }
}

