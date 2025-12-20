"use client"

import { X } from "lucide-react"
import { type Language, t } from "@/lib/translations"
import type { Product } from "@/lib/api"
import { SearchSidebar } from "./search-sidebar"
import { LanguageSelector } from "./language-selector"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  language: Language
  onLanguageChange: (language: Language) => void
  onAskAboutProduct: (product: Product) => void
}

export function MobileSidebar({ isOpen, onClose, language, onLanguageChange, onAskAboutProduct }: MobileSidebarProps) {
  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />

      <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-md z-50 lg:hidden shadow-2xl animate-slide-in-left flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-border/50 shrink-0">
          <h2 className="font-semibold text-foreground">{t("menu", language)}</h2>
          <button onClick={onClose} className="p-2 hover:bg-accent rounded-xl transition-all duration-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 border-b border-border/50 shrink-0">
          <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
            {t("language", language)}
          </label>
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={(lang) => {
              onLanguageChange(lang)
            }}
          />
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pb-6">
          <SearchSidebar
            language={language}
            onAskAboutProduct={(product) => {
              onAskAboutProduct(product)
              onClose()
            }}
          />
        </div>
      </div>
    </>
  )
}
