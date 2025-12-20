import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set.");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const GPT_CHAT_MODEL = process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini";
export const GPT_TRANSLATE_MODEL =
  process.env.OPENAI_TRANSLATE_MODEL ?? "gpt-4o-mini";
export const GPT_EMBEDDING_MODEL =
  process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small";
export const WHISPER_MODEL = process.env.OPENAI_WHISPER_MODEL ?? "whisper-1";

export async function translateText({
  text,
  targetLanguage,
}: {
  text: string;
  targetLanguage: string;
}) {
  const trimmed = text?.trim();
  if (!trimmed) {
    return "";
  }

  const completion = await openai.chat.completions.create({
    model: GPT_TRANSLATE_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are a translation engine. Return only the translated text, without quotes.",
      },
      {
        role: "user",
        content: `Translate the following text to ${targetLanguage}. Text: """${trimmed}"""`,
      },
    ],
    temperature: 0.2,
  });

  return completion.choices[0]?.message?.content?.trim() ?? trimmed;
}

export async function createEmbedding(input: string) {
  const normalized = input?.trim();
  if (!normalized) {
    return [];
  }

  const response = await openai.embeddings.create({
    model: GPT_EMBEDDING_MODEL,
    input: normalized,
  });

  return response.data[0]?.embedding ?? [];
}

// Whisper transcription for voice input
export async function transcribeAudio(audioBuffer: Buffer, language?: string): Promise<string> {
  try {
    // Create a File-like object for the OpenAI API
    const file = new File([audioBuffer], "audio.webm", { type: "audio/webm" });
    
    const response = await openai.audio.transcriptions.create({
      file,
      model: WHISPER_MODEL,
      language: language ? getWhisperLanguageCode(language) : undefined,
    });
    
    return response.text || "";
  } catch (error) {
    console.error("Whisper transcription error:", error);
    throw error;
  }
}

// Map app language to Whisper language codes
function getWhisperLanguageCode(language: string): string {
  const langMap: Record<string, string> = {
    english: "en",
    hindi: "hi",
    marathi: "mr",
    bengali: "bn",
    telugu: "te",
    tamil: "ta",
    gujarati: "gu",
    kannada: "kn",
    malayalam: "ml",
    punjabi: "pa",
    odia: "or",
    urdu: "ur",
    nepali: "ne",
    sinhala: "si",
    arabic: "ar",
  };
  return langMap[language.toLowerCase()] || "en";
}

