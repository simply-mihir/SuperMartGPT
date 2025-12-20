"use client"

import type React from "react"
import { useState, useContext } from "react"
import { Apple, Carrot, Milk, Cookie, Heart, Home, ChevronDown, ShoppingCart } from "lucide-react"
import { type Language, t, type TranslationKey, translateProductName } from "@/lib/translations"
import { categoryProducts } from "@/lib/category-products"
import type { Product } from "@/lib/api"
import { CartContext } from "@/contexts/cart-context"

interface CategoryFiltersProps {
  language: Language
  selectedCategory: string | null
  onCategoryClick: (category: TranslationKey) => void
  onAskAboutProduct: (product: Product) => void
}

const categories: { key: TranslationKey; icon: React.ReactNode }[] = [
  { key: "fruits", icon: <Apple className="w-3.5 h-3.5" /> },
  { key: "vegetables", icon: <Carrot className="w-3.5 h-3.5" /> },
  { key: "dailyEssentials", icon: <Milk className="w-3.5 h-3.5" /> },
  { key: "snacks", icon: <Cookie className="w-3.5 h-3.5" /> },
  { key: "personalCare", icon: <Heart className="w-3.5 h-3.5" /> },
  { key: "household", icon: <Home className="w-3.5 h-3.5" /> },
]

export function CategoryFilters({
  language,
  selectedCategory,
  onCategoryClick,
  onAskAboutProduct,
}: CategoryFiltersProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const cartContext = useContext(CartContext)
  const addToCart = cartContext?.addToCart || (() => {})

  const handleCategoryClick = (key: TranslationKey) => {
    const categoryName = t(key, "english")
    if (expandedCategory === categoryName) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(categoryName)
    }
    onCategoryClick(key)
  }

  return (
    <div className="p-4 border-b border-sidebar-border/50">
      <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
        {t("categories", language)}
      </h3>
      <div className="space-y-2">
        {categories.map(({ key, icon }, index) => {
          const categoryName = t(key, "english")
          const isExpanded = expandedCategory === categoryName
          const products = categoryProducts[categoryName] || []

          return (
            <div key={key} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
              <button
                onClick={() => handleCategoryClick(key)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  isExpanded
                    ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white shadow-md"
                    : "bg-white border border-border/60 hover:border-primary/40 hover:shadow-md"
                }`}
              >
                <span className="flex items-center gap-2">
                  {icon}
                  {t(key, language)}
                </span>
                <span className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isExpanded && products.length > 0 && (
                <div className="flex flex-col gap-2 p-2 bg-muted/30 rounded-xl animate-fade-in">
                  {products.slice(0, 6).map((product, productIndex) => {
                    const displayName = translateProductName(product.name, language)
                    const priceValue = typeof product.price === "number" 
                      ? product.price 
                      : parseFloat(product.price?.toString() || "0")
                    
                    return (
                      <div
                        key={product.id}
                        onClick={() => onAskAboutProduct(product)}
                        className="p-3 rounded-xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer animate-fade-in-up"
                        style={{ animationDelay: `${productIndex * 50}ms` }}
                      >
                        <h4 className="font-semibold text-sm text-foreground line-clamp-2">
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
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
