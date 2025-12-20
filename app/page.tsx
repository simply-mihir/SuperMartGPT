"use client"

import { useState, useEffect } from "react"
import { Menu, ShoppingBag, ShoppingCart, User, LogIn } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { t } from "@/lib/translations"
import type { Product } from "@/lib/api"
import { LanguageSelector } from "@/components/language-selector"
import { SearchSidebar } from "@/components/search-sidebar"
import { ChatPanel, type Message } from "@/components/chat-panel"
import { CartDrawer } from "@/components/cart-drawer"
import { AuthModal } from "@/components/auth-modal"
import { X } from "lucide-react"

export default function SuperMartGPT() {
  const { language, setLanguage } = useLanguage()
  const { getTotalItems } = useCart()
  const { isAuthenticated, getUserInitials, isLoading: authLoading } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null)

  // Generate welcome message function
  const generateWelcomeMessage = async (lang: string) => {
    const welcomeMessages: Message[] = [
      {
        id: "demo-1",
        role: "bot",
        content: t("welcome", lang as any),
        relatedProducts: [],
      },
      {
        id: "demo-2",
        role: "bot",
        content: t("demoMessage", lang as any),
        relatedProducts: [],
      },
    ]
    setMessages(welcomeMessages)
  }

  // Initialize welcome message on mount
  useEffect(() => {
    if (messages.length === 0) {
      generateWelcomeMessage(language)
    }
  }, [])

  // Regenerate welcome messages when language changes
  useEffect(() => {
    if (messages.length > 0 && messages[0]?.id === "demo-1") {
      generateWelcomeMessage(language)
    }
  }, [language])

  const handleAskAboutProduct = (product: Product) => {
    setPendingProduct(product)
  }

  const clearPendingProduct = () => {
    setPendingProduct(null)
  }

  const cartItemCount = getTotalItems()

  return (
    <div className="h-screen flex flex-col overflow-hidden w-full">
      <header className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border/50 shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-30">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-accent rounded-xl transition-all duration-200"
            aria-label={t("menu", language)}
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#22C55E] to-[#16A34A] shadow-md">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-foreground tracking-tight">{t("appName", language)}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector (Desktop) */}
          <div className="hidden sm:block">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} compact />
          </div>

          {/* User Profile / Login Button */}
          {!authLoading && (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                isAuthenticated 
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {isAuthenticated ? (
                <>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                    {getUserInitials()}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">Account</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-medium">Login</span>
                </>
              )}
            </button>
          )}

          {/* Cart Icon with Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-accent rounded-xl transition-all duration-200"
            aria-label={t("cart", language)}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartItemCount > 9 ? "9+" : cartItemCount}
              </span>
            )}
          </button>

          {/* Language Selector (Mobile - Icon Only) */}
          <div className="sm:hidden">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} compact />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden w-full relative">
        {/* Chat Panel */}
        <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <ChatPanel
            language={language}
            messages={messages}
            setMessages={setMessages}
            pendingProduct={pendingProduct}
            clearPendingProduct={clearPendingProduct}
            onOpenCart={() => setIsCartOpen(true)}
          />
        </main>
      </div>

      {/* Sliding Sidebar Panel */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-md z-50 shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-border/50 shrink-0">
              <h2 className="font-semibold text-foreground">{t("menu", language)}</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-accent rounded-xl transition-all duration-200"
              >
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
                  setLanguage(lang)
                }}
              />
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pb-6">
              <SearchSidebar
                language={language}
                onAskAboutProduct={(product) => {
                  handleAskAboutProduct(product)
                  setIsSidebarOpen(false)
                }}
              />
            </div>
          </div>
        </>
      )}

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        language={language}
        onOpenLogin={() => setIsAuthModalOpen(true)}
      />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        language={language} 
      />
    </div>
  )
}
