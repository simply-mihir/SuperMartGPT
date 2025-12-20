"use client"

import { ShoppingBag, User, Globe } from "lucide-react"
import type { Message } from "./chat-panel"
import type { Language } from "@/lib/translations"
import { languages } from "@/lib/translations"
import type { Product } from "@/lib/api"
import { ProductPreview } from "./product-preview"

interface ChatMessageProps {
  message: Message
  currentLanguage?: Language
  originalLanguage?: Language
  relatedProducts?: Product[]
  onAskAboutProduct?: (product: Product) => void
  index?: number
}

export function ChatMessage({
  message,
  currentLanguage,
  originalLanguage,
  relatedProducts,
  onAskAboutProduct,
  index = 0,
}: ChatMessageProps) {
  const isBot = message.role === "bot"

  // Show translation badge if current language differs from English and message is from bot
  const showTranslationBadge = isBot && currentLanguage && currentLanguage !== "english"
  const fromLanguage = languages.find((l) => l.code === "english")

  return (
    <div
      className={`flex gap-3 animate-fade-in-up ${isBot ? "justify-start" : "justify-end"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {isBot && (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform duration-200">
          <ShoppingBag className="w-4 h-4 text-white" />
        </div>
      )}
      <div className="relative max-w-[85%] sm:max-w-2xl lg:max-w-3xl">
        {showTranslationBadge && (
          <div className="absolute -top-5 right-0 flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-medium border border-blue-100 animate-fade-in">
            <Globe className="w-3 h-3" />
            <span>Translated from {fromLanguage?.nativeName}</span>
          </div>
        )}
        <div
          className={`px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 w-full ${isBot
              ? "bg-white/90 backdrop-blur-sm border border-border/50 text-foreground rounded-[20px] rounded-tl-[4px]"
              : "bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white rounded-[20px] rounded-tr-[4px]"
            }`}
        >
          <p className="text-[15px] whitespace-pre-wrap leading-relaxed break-words">{message.content}</p>
          {isBot && relatedProducts && relatedProducts.length > 0 && onAskAboutProduct && (
            <ProductPreview
              products={relatedProducts}
              language={currentLanguage || "english"}
              onAskAbout={onAskAboutProduct}
            />
          )}
        </div>
      </div>
      {!isBot && (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform duration-200">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  )
}
