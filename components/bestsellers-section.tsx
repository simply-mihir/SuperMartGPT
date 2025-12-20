"use client";

import { Crown, RefreshCw } from "lucide-react";
import { type Language, t } from "@/lib/translations";
import { useLanguage } from "@/contexts/language-context";
import { BestsellerCard } from "./bestseller-card";
import { useBestsellers } from "@/hooks/useBestsellers";

interface BestsellersSectionProps {
  language?: Language;
}

export function BestsellersSection({ language: propLanguage }: BestsellersSectionProps) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;

  const langMap: Record<Language, string> = {
    english: "en-US",
    hindi: "hi-IN",
    marathi: "mr-IN",
    telugu: "te-IN",
    tamil: "ta-IN",
    bengali: "bn-IN",
    kannada: "kn-IN",
    malayalam: "ml-IN",
    gujarati: "gu-IN",
    punjabi: "pa-IN",
    odia: "or-IN",
    urdu: "ur-PK",
    nepali: "ne-NP",
    sinhala: "si-LK",
    arabic: "ar-SA",
  };

  const langCode = langMap[language] ?? "en-US";
  const { items, isLoading, error } = useBestsellers(langCode);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Crown className="w-5 h-5 text-yellow-500" />
        <h3 className="text-lg font-semibold text-foreground">
          {t("bestsellers", language)}
        </h3>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col items-center gap-2">
            <RefreshCw className="w-6 h-6 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground">{t("searching", language)}</p>
          </div>
        </div>
      )}

      {error && !isLoading && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-4">
          {error}
        </div>
      )}

      {!isLoading && !error && items.length === 0 && (
        <div className="p-4 bg-muted/30 rounded-lg text-center text-muted-foreground text-sm">
          {t("noResults", language)}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((product) => {
          const fallbackName = product.translatedName || product.name || "Product";
          const fallbackDescription = product.translatedDescription || product.description || "";
          const priceValue = typeof product.price === "number" ? product.price : Number(product.price ?? 0);

          return (
            <BestsellerCard
              key={product.id}
              product={{
                id: String(product.id),
                name: fallbackName,
                price: priceValue,
                description: fallbackDescription,
              }}
              translatedName={fallbackName}
              translatedDescription={fallbackDescription}
              language={language}
            />
          );
        })}
      </div>
    </div>
  );
}
