"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("english")
  const [mounted, setMounted] = useState(false)

  // ✅ CRITICAL: Only apply language after hydration
  useEffect(() => {
    // Get saved language from localStorage
    const saved = localStorage.getItem("preferred-language") as Language | null
    if (saved) {
      setLanguage(saved)
    }
    setMounted(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("preferred-language", lang)
    // ❌ DO NOT modify <html> element here
  }

  // ✅ Return children immediately - no hydration mismatch
  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "english", setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}


















