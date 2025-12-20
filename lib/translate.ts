"use server";

import { openai, GPT_TRANSLATE_MODEL } from "./openai";

// Language code to full name mapping
const languageNames: Record<string, string> = {
  "en-US": "English",
  "en": "English",
  "hi-IN": "Hindi",
  "hi": "Hindi",
  "mr-IN": "Marathi",
  "mr": "Marathi",
  "bn-IN": "Bengali",
  "bn": "Bengali",
  "te-IN": "Telugu",
  "te": "Telugu",
  "ta-IN": "Tamil",
  "ta": "Tamil",
  "gu-IN": "Gujarati",
  "gu": "Gujarati",
  "kn-IN": "Kannada",
  "kn": "Kannada",
  "ml-IN": "Malayalam",
  "ml": "Malayalam",
  "pa-IN": "Punjabi",
  "pa": "Punjabi",
  "or-IN": "Odia",
  "or": "Odia",
  "ur-PK": "Urdu",
  "ur": "Urdu",
  "ne-NP": "Nepali",
  "ne": "Nepali",
  "si-LK": "Sinhala",
  "si": "Sinhala",
  "ar-SA": "Arabic",
  "ar": "Arabic",
};

// Get full language name from code
function getLanguageName(langCode: string): string {
  return languageNames[langCode] || languageNames[langCode.split("-")[0]] || langCode;
}

// Strict translation helper using OpenAI chat completions.
export async function translateTextStrict(
  text: string,
  targetLanguage: string
): Promise<string> {
  const trimmed = text?.trim();
  if (!trimmed) return "";

  // Skip translation if target is English
  if (targetLanguage.toLowerCase().startsWith("en")) {
    return trimmed;
  }

  const langName = getLanguageName(targetLanguage);

  const completion = await openai.chat.completions.create({
    model: GPT_TRANSLATE_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are a translation engine. Return only the translated text with no extra commentary.",
      },
      {
        role: "user",
        content: `Translate this text to ${langName}: """${trimmed}"""`,
      },
    ],
    temperature: 0.2,
  });

  return completion.choices[0]?.message?.content?.trim() ?? trimmed;
}

// Safe translation helper that never throws and always returns text
export async function safeTranslate(
  text: string,
  targetLanguage: string
): Promise<string> {
  try {
    if (!text || !text.trim()) return text || "";
    
    // Skip translation if target is English
    if (targetLanguage.toLowerCase().startsWith("en")) {
      return text;
    }
    
    const translated = await translateTextStrict(text, targetLanguage);
    return translated || text;
  } catch (error) {
    console.error("[safeTranslate] Translation failed, returning original:", error);
    return text || "";
  }
}

// Batch translate multiple texts
export async function batchTranslate(
  texts: string[],
  targetLanguage: string
): Promise<string[]> {
  // Skip translation if target is English
  if (targetLanguage.toLowerCase().startsWith("en")) {
    return texts;
  }

  return Promise.all(
    texts.map((text) => safeTranslate(text, targetLanguage))
  );
}








