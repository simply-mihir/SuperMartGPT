"use client"

import type React from "react"
import { useState, useRef, useEffect, useContext } from "react"
import { Send } from "lucide-react"
import { type Language, t } from "@/lib/translations"
import { sendChatMessage, type Product, type ChatResponse } from "@/lib/api"
import { ChatMessage } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"
import { VoiceInputButton } from "./voice-input-button"
import { categoryProducts } from "@/lib/category-products"
import { BestsellersSection } from "./bestsellers-section"
import { AdminAnalytics } from "./admin-analytics"
import { ChatIntentConfirmation } from "./chat-intent-confirmation"
import { AdminPasswordModal } from "./admin-password-modal"
import { CartContext } from "@/contexts/cart-context"

export interface Message {
  id: string
  role: "user" | "bot"
  content: string
  relatedProducts?: Product[]
  intentPayload?: any
  isAdminMode?: boolean
  hideContent?: boolean // Hide chat bubble for analytics
}

interface ChatPanelProps {
  language: Language
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  pendingProduct: Product | null
  clearPendingProduct: () => void
  onOpenCart?: () => void
}

function getRelatedProducts(message: string): Product[] {
  const lowerMessage = message.toLowerCase()

  const categoryKeywords: Record<string, string> = {
    fruit: "Fruits", fruits: "Fruits", apple: "Fruits", banana: "Fruits", mango: "Fruits", orange: "Fruits",
    vegetable: "Vegetables", vegetables: "Vegetables", tomato: "Vegetables", potato: "Vegetables", onion: "Vegetables", carrot: "Vegetables",
    milk: "Daily Essentials", bread: "Daily Essentials", eggs: "Daily Essentials", dairy: "Daily Essentials",
    snack: "Snacks", snacks: "Snacks", chips: "Snacks", cookies: "Snacks",
    shampoo: "Personal Care", soap: "Personal Care", toothpaste: "Personal Care",
    detergent: "Household", cleaner: "Household", household: "Household",
  }

  for (const [keyword, category] of Object.entries(categoryKeywords)) {
    if (lowerMessage.includes(keyword)) {
      return (categoryProducts[category] || []).slice(0, 3)
    }
  }

  return []
}

export function ChatPanel({ 
  language, 
  messages, 
  setMessages, 
  pendingProduct, 
  clearPendingProduct,
  onOpenCart 
}: ChatPanelProps) {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [isAdminVerified, setIsAdminVerified] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const cartContext = useContext(CartContext)
  const addToCart = cartContext?.addToCart || (() => {})

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
    return () => clearTimeout(timer)
  }, [messages])

  useEffect(() => {
    if (pendingProduct) {
      const productQuestion = `Tell me about ${pendingProduct.name}`
      setInput(productQuestion)
      textareaRef.current?.focus()
    }
  }, [pendingProduct])

  const handleVoiceTranscript = (transcript: string) => {
    setInput(transcript)
    textareaRef.current?.focus()
  }

  const handleAskAboutProduct = (product: Product) => {
    setInput(`Tell me about ${product.name}`)
    textareaRef.current?.focus()
  }

  const handleAdminPasswordSuccess = () => {
    setShowPasswordModal(false)
    setIsAdminVerified(true)
    setShowAnalytics(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    clearPendingProduct()
    setIsLoading(true)

    const botMessageId = (Date.now() + 1).toString()

    try {
      console.log("📤 Sending chat message:", userMessage.content)

      const response = await sendChatMessage(userMessage.content, language)
      console.log("📥 Response received:", response)

      const botReply = response?.reply || "I'm here to help! Ask me about products or say 'add [item] to cart'."

      // Check for intent payload (add-to-cart response)
      const intentPayload = response?.intentPayload || null
      const isAdminMode = response?.isAdminMode || false

      // If add-to-cart was successful, also add to local cart
      if (intentPayload?.success && intentPayload?.product) {
        addToCart({
          id: String(intentPayload.product.id),
          name: intentPayload.product.name,
          price: intentPayload.product.price,
        }, intentPayload.quantity || 1)
      }

      // Extract related products
      const responseProducts = response?.relatedProducts || []
      const relatedProducts: Product[] = responseProducts.map((p) => ({
        id: `product-${Date.now()}-${Math.random()}`,
        name: p.name || "Product",
        price: typeof p.price === "number" ? p.price : parseFloat(String(p.price)) || 0,
      }))

      const finalProducts = relatedProducts.length > 0 
        ? relatedProducts 
        : getRelatedProducts(userMessage.content)

      // For admin mode, show password modal if not verified
      if (isAdminMode && !isAdminVerified) {
        setShowPasswordModal(true)
        // Don't show the "opening analytics" message
        const botMessage: Message = {
          id: botMessageId,
          role: "bot",
          content: "🔐 Please enter the admin password to access analytics.",
          relatedProducts: [],
          isAdminMode: true,
          hideContent: true, // Hide this message
        }
        setMessages((prev) => [...prev, botMessage])
      } else if (isAdminMode && isAdminVerified) {
        // Already verified, show analytics directly
        setShowAnalytics(true)
        const botMessage: Message = {
          id: botMessageId,
          role: "bot",
          content: "",
          relatedProducts: [],
          isAdminMode: true,
          hideContent: true, // Hide chat bubble, show only analytics
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        // Regular message
        const botMessage: Message = {
          id: botMessageId,
          role: "bot",
          content: botReply,
          relatedProducts: finalProducts,
          intentPayload,
          isAdminMode: false,
        }
        setMessages((prev) => [...prev, botMessage])
      }

    } catch (error) {
      console.error("❌ Unexpected chat error:", error)
      
      const fallbackProducts = getRelatedProducts(userMessage.content)
      const fallbackMessage: Message = {
        id: botMessageId,
        role: "bot",
        content: "I'm here to help! Ask about products or try 'add banana to cart'.",
        relatedProducts: fallbackProducts,
      }
      setMessages((prev) => [...prev, fallbackMessage])
      
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleAddSuggestion = (product: { id: string | number; name: string; price: number }) => {
    addToCart({
      id: String(product.id),
      name: product.name,
      price: product.price,
    })
    
    // Add confirmation message
    const confirmMessage: Message = {
      id: Date.now().toString(),
      role: "bot",
      content: `✅ Added ${product.name} (₹${product.price.toFixed(2)}) to your cart.`,
      relatedProducts: [],
    }
    setMessages((prev) => [...prev, confirmMessage])
  }

  const showBestsellers = messages.length === 2 && messages[0]?.id === "demo-1"

  return (
    <div className="flex flex-col h-full overflow-hidden w-full">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 space-y-6 min-h-0 w-full scroll-smooth">
        {messages.map((message, index) => (
          <div key={message.id}>
            {/* Only show chat message if not hidden */}
            {!message.hideContent && (
              <ChatMessage
                message={message}
                currentLanguage={language}
                relatedProducts={message.relatedProducts}
                onAskAboutProduct={handleAskAboutProduct}
                index={index}
              />
            )}
            
            {/* Show intent confirmation for add-to-cart intents */}
            {message.role === "bot" && message.intentPayload && (
              <ChatIntentConfirmation
                intentPayload={message.intentPayload}
                language={language}
                onViewCart={onOpenCart}
                onAddSuggestion={handleAddSuggestion}
              />
            )}
            
            {/* Show analytics panel directly for admin mode (no chat bubble) */}
            {message.role === "bot" && message.isAdminMode && isAdminVerified && showAnalytics && (
              <div className="animate-fade-in-up">
                <AdminAnalytics language={language} />
              </div>
            )}
          </div>
        ))}
        
        {showBestsellers && (
          <div className="animate-fade-in-up">
            <BestsellersSection language={language} />
          </div>
        )}
        
        {isLoading && messages[messages.length - 1]?.role === "user" && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="shrink-0 p-4 sm:p-6 pt-2 pb-6 sm:pb-8 bg-gradient-to-t from-background via-background to-transparent w-full border-t border-border/30">
        <form onSubmit={handleSubmit} className="flex items-end gap-3 max-w-4xl mx-auto w-full">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("inputPlaceholder", language)}
              rows={1}
              className="w-full px-5 py-3.5 pr-20 bg-white border border-border/60 rounded-[30px] resize-none focus:outline-none focus:border-primary/40 focus:shadow-md input-modern transition-all duration-200 max-h-32 text-[16px]"
              style={{ minHeight: "52px" }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <VoiceInputButton language={language} onTranscript={handleVoiceTranscript} disabled={isLoading} />
            </div>
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3.5 btn-gradient text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none hover:scale-105 active:scale-95 transition-all duration-150 hover:shadow-lg"
            aria-label={t("send", language)}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Admin Password Modal */}
      <AdminPasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onSuccess={handleAdminPasswordSuccess}
        language={language}
      />
    </div>
  )
}
