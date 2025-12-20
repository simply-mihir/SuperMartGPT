"use client"

import { useContext } from "react"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/api"
import type { Language } from "@/lib/translations"
import { t, translateProductName } from "@/lib/translations"
import { CartContext } from "@/contexts/cart-context"

interface ProductPreviewProps {
  products: Product[]
  language: Language
  onAskAbout: (product: Product) => void
}

export function ProductPreview({ products, language, onAskAbout }: ProductPreviewProps) {
  const cartContext = useContext(CartContext)
  const addToCart = cartContext?.addToCart || (() => {})
  
  if (!products || products.length === 0) return null

  return (
    <div className="mt-3 pt-3 border-t border-border/30">
      <p className="text-xs text-muted-foreground/70 mb-2 font-medium">{t("relatedProducts", language)}</p>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {products.map((product, index) => {
          const displayName = translateProductName(product.name, language)
          const priceValue = typeof product.price === "number" 
            ? product.price 
            : parseFloat(product.price?.toString() || "0")
          
          return (
            <div
              key={product.id}
              onClick={() => onAskAbout(product)}
              className="flex-shrink-0 p-3 rounded-xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer animate-fade-in-up min-w-[150px] max-w-[180px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="font-semibold text-sm text-foreground line-clamp-2 min-h-[2.5rem]">
                {displayName}
              </h4>
              <p className="text-primary font-bold text-base mt-1">₹{priceValue.toFixed(2)}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  addToCart({ 
                    id: String(product.id), 
                    name: product.name, 
                    price: priceValue 
                  })
                }}
                className="mt-2 py-1.5 text-sm rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-1.5"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                {t("addToCart", language)}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
