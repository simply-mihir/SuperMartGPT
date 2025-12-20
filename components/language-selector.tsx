"use client"

import { ChevronDown, Globe } from "lucide-react"
import { type Language, languages } from "@/lib/translations"
import { useState, useRef, useEffect } from "react"

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  compact?: boolean
}

export function LanguageSelector({ currentLanguage, onLanguageChange, compact = false }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === currentLanguage)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 hover:border-primary/40 hover:shadow-[0_0_12px_rgba(34,197,94,0.15)] transition-all duration-200 ${compact ? "text-sm" : ""}`}
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="font-medium">{currentLang?.nativeName}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 glass-card rounded-2xl shadow-xl z-50 min-w-52 overflow-hidden animate-fade-in-up">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-3 text-left hover:bg-accent/50 transition-all duration-150 flex items-center justify-between ${
                currentLanguage === lang.code ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <span className="font-medium">{lang.nativeName}</span>
              <span className="text-muted-foreground text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
