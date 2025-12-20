"use client"

import { useContext } from "react"
import { ShoppingCart } from "lucide-react"
import { type Language, t } from "@/lib/translations"
import type { Product } from "@/lib/api"
import { CartContext } from "@/contexts/cart-context"

interface BestsellerCardProps {
  product: Product
  translatedName?: string
  translatedDescription?: string
  language: Language
}

export function BestsellerCard({
  product,
  translatedName,
  translatedDescription,
  language,
}: BestsellerCardProps) {
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
    <div className="bg-white border border-border/40 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
      {/* Text Content - No Images */}
      <div className="flex-1 flex flex-col">
        <h4 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 min-h-[2.5rem] leading-tight">
          {displayName}
        </h4>
        {displayDescription && (
          <p className="text-xs text-muted-foreground line-clamp-3 mb-3 flex-1 leading-relaxed">
            {displayDescription}
          </p>
        )}
        {!displayDescription && (
          <div className="flex-1 min-h-[2rem]" />
        )}
      </div>
      
      {/* Price */}
      <div className="mt-auto">
        <p className="text-primary font-bold text-lg mb-3">
          ₹{priceValue.toFixed(2)}
        </p>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2 text-sm rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{t("addToCart", language)}</span>
        </button>
      </div>
    </div>
  )
}

export default BestsellerCard
