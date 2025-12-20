"use client"

import { ReactNode, useEffect } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"

function HydrationCleanup() {
  useEffect(() => {
    const html = document.documentElement
    const style = html.getAttribute("style")
    if (style && style.includes("--vsc-")) {
      html.removeAttribute("style")
    }

    // Remove any injected data- attributes that are not expected
    Array.from(html.attributes).forEach((attr) => {
      if (attr.name.startsWith("data-") && !["data-theme", "data-version"].includes(attr.name)) {
        html.removeAttribute(attr.name)
      }
    })
  }, [])

  return null
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <HydrationCleanup />
      <AuthProvider>
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </AuthProvider>
    </>
  )
}
