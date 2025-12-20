"use client"

import { useContext } from "react"
import { MessageSquare, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/api"
import { type Language, t } from "@/lib/translations"
import { CartContext } from "@/contexts/cart-context"

interface ProductCardProps {
  product: Product
  language: Language
  onAskAbout: () => void
  translatedName?: string
  translatedDescription?: string
}

export function ProductCard({ 
  product, 
  language, 
  onAskAbout,
  translatedName,
  translatedDescription 
}: ProductCardProps) {
  const cartContext = useContext(CartContext)
  const addToCart = cartContext?.addToCart || (() => {})

  const displayName = translatedName || product.name || "Product"
  const displayDescription = translatedDescription || product.description || ""
  const priceValue = typeof product.price === "number" 
    ? product.price 
    : parseFloat(product.price?.toString() || "0")

  const handleAddToCart = () => {
    addToCart({ 
      id: String(product.id), 
      name: displayName, 
      price: priceValue 
    })
  }

  return (
    <div className="glass-card rounded-2xl p-4 hover:shadow-lg transition-all duration-200 animate-fade-in-up border border-border/40">
      {/* Text Content - No Images */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-sm text-foreground line-clamp-2 leading-tight">
          {displayName}
        </h4>
        {displayDescription && (
          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
            {displayDescription}
          </p>
        )}
        <p className="text-primary font-bold text-lg">
          ₹{priceValue.toFixed(2)}
        </p>
        {product.category && (
          <span className="inline-flex items-center px-2 py-0.5 text-xs text-muted-foreground bg-muted/50 rounded-full w-fit">
            {product.category}
          </span>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={onAskAbout}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">{t("askAboutThis", language)}</span>
          <span className="sm:hidden">Ask</span>
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">{t("addToCart", language)}</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
