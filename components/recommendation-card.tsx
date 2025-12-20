"use client"

import React, { useContext } from "react"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/api"
import { CartContext } from "@/contexts/cart-context"
import { type Language, t } from "@/lib/translations"

interface RecommendationCardProps {
  product: Product
  language?: Language
}

export default function RecommendationCard({ product, language = "english" }: RecommendationCardProps) {
  const cartContext = useContext(CartContext)
  const addToCart = cartContext?.addToCart || (() => {})

  const displayName = product.name || "Product"
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
    <div className="p-3 border border-border/40 rounded-xl bg-white hover:shadow-md transition-all duration-200">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold text-foreground line-clamp-2">{displayName}</div>
        {product.description && (
          <div className="text-xs text-muted-foreground line-clamp-2">{product.description}</div>
        )}
        <div className="text-primary font-bold text-base mt-1">₹{priceValue.toFixed(2)}</div>
        <div className="mt-2">
          <button
            onClick={handleAddToCart}
            className="w-full text-sm px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            {t("addToCart", language)}
          </button>
        </div>
      </div>
    </div>
  )
}
