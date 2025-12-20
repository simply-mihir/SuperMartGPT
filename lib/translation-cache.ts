"use client"

import type { Language } from "./translations"
import { translateText } from "./api"

// Translation cache to avoid redundant API calls
const translationCache = new Map<string, string>()

export function getCacheKey(text: string, language: string): string {
  return `${text}::${language}`
}

export function getCachedTranslation(text: string, language: string): string | null {
  const key = getCacheKey(text, language)
  return translationCache.get(key) || null
}

export function setCachedTranslation(text: string, language: string, translated: string): void {
  const key = getCacheKey(text, language)
  translationCache.set(key, translated)
}

export async function getTranslatedField(
  productName: string,
  field: "name" | "description",
  language: Language,
  fallbackTranslations?: Record<string, string>
): Promise<string> {
  // Check cache first
  const cached = getCachedTranslation(productName, language)
  if (cached) return cached

  // Check fallback translations (from productNames in translations.ts)
  if (fallbackTranslations?.[productName]) {
    const translated = fallbackTranslations[productName]
    setCachedTranslation(productName, language, translated)
    return translated
  }

  // If language is English, return original
  if (language === "english") {
    setCachedTranslation(productName, language, productName)
    return productName
  }

  // Call translation API
  try {
    const languageMap: Record<Language, string> = {
      english: "English",
      hindi: "Hindi",
      bengali: "Bengali",
      tamil: "Tamil",
      telugu: "Telugu",
      kannada: "Kannada",
      gujarati: "Gujarati",
      marathi: "Marathi",
      malayalam: "Malayalam",
      punjabi: "Punjabi",
      odia: "Odia",
      urdu: "Urdu",
      nepali: "Nepali",
      sinhala: "Sinhala",
      arabic: "Arabic",
    }

    const targetLanguage = languageMap[language] || "English"
    const translated = await translateText(productName, targetLanguage)
    setCachedTranslation(productName, language, translated)
    return translated
  } catch (error) {
    console.error("Translation error:", error)
    return productName // Fallback to original
  }
}

















