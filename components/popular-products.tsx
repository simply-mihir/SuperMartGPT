"use client"

import { useContext } from "react"
import { Flame, Tag, ShoppingCart } from "lucide-react"
import { type Language, t, translateProductName } from "@/lib/translations"
import { popularProducts } from "@/lib/category-products"
import type { Product } from "@/lib/api"
import { CartContext } from "@/contexts/cart-context"

interface PopularProductsProps {
  language: Language
  onAskAboutProduct: (product: Product) => void
}

export function PopularProducts({ language, onAskAboutProduct }: PopularProductsProps) {
  const cartContext = useContext(CartContext)
  const addToCart = cartContext?.addToCart || (() => {})

  return (
    <div className="p-4 border-b border-sidebar-border/50">
      <div className="flex items-center gap-2 mb-3">
        <Flame className="w-4 h-4 text-orange-500" />
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {t("popularProducts", language)}
        </h3>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
        {popularProducts.map((product, index) => {
          const displayName = translateProductName(product.name, language)
          const priceValue = typeof product.price === "number" 
            ? product.price 
            : parseFloat(product.price?.toString() || "0")
          
          return (
            <div
              key={product.id}
              onClick={() => onAskAboutProduct(product)}
              className="flex-shrink-0 w-40 p-3 rounded-xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-sm text-foreground line-clamp-2 flex-1">
                  {displayName}
                </h4>
                {product.discount && (
                  <span className="flex-shrink-0 ml-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                    <Tag className="w-2.5 h-2.5" />
                    {product.discount}%
                  </span>
                )}
              </div>
              <p className="text-primary font-bold text-lg mt-2">₹{priceValue.toFixed(2)}</p>
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
