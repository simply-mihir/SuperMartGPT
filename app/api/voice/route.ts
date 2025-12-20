import { NextRequest, NextResponse } from "next/server";
import { toFile } from "openai/uploads";
import {
  openai,
  WHISPER_MODEL,
  translateText,
} from "@/lib/openai";
import { languageLabel, normalizeLanguage } from "@/lib/language";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get("file");
    const languageParam = formData.get("language") as string | null;

    if (!audioFile || !(audioFile instanceof File)) {
      return NextResponse.json(
        { success: false, error: "Audio file is required." },
        { status: 400 }
      );
    }

    const language = normalizeLanguage(languageParam ?? undefined);

    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const fileForWhisper = await toFile(buffer, audioFile.name || "audio.webm");

    const transcription = await openai.audio.transcriptions.create({
      file: fileForWhisper,
      model: WHISPER_MODEL,
      response_format: "text",
    });

    const text = transcription.trim();
    const translatedText =
      language === "en"
        ? text
        : await translateText({
            text,
            targetLanguage: languageLabel(language),
          });

    return NextResponse.json({
      success: true,
      data: {
        text: translatedText,
      },
    });
  } catch (error) {
    console.error("/api/voice error", error);
    return NextResponse.json(
      { success: false, error: "Unable to process audio." },
      { status: 500 }
    );
  }
}

