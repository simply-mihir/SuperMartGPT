export const SUPPORTED_LANGUAGES = [
  "en",
  "hi",
  "bn",
  "ta",
  "te",
  "kn",
  "gu",
  "mr",
  "ml",
  "pa",
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: "English",
  hi: "Hindi",
  bn: "Bengali",
  ta: "Tamil",
  te: "Telugu",
  kn: "Kannada",
  gu: "Gujarati",
  mr: "Marathi",
  ml: "Malayalam",
  pa: "Punjabi",
};

export function normalizeLanguage(lang?: string) {
  const normalized = lang?.trim().toLowerCase();
  if (!normalized) return "en";
  return SUPPORTED_LANGUAGES.includes(normalized as SupportedLanguage)
    ? (normalized as SupportedLanguage)
    : "en";
}

export function languageLabel(lang?: string) {
  const normalized = normalizeLanguage(lang);
  return LANGUAGE_LABELS[normalized];
}

