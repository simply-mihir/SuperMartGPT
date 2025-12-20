"use client"

import { useState, useEffect, useCallback } from "react"
import { Search } from "lucide-react"
import { type Language, t, type TranslationKey } from "@/lib/translations"
import { searchProducts, type Product } from "@/lib/api"
import { ProductCard } from "./product-card"
import { CategoryFilters } from "./category-filters"
import { PopularProducts } from "./popular-products"

interface SearchSidebarProps {
  language: Language
  onAskAboutProduct: (product: Product) => void
}

export function SearchSidebar({ language, onAskAboutProduct }: SearchSidebarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    try {
      const products = await searchProducts(searchQuery, language)
      setResults(products)
    } catch {
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }, [language])

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(query)
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [query, handleSearch])

  const handleCategoryClick = (category: TranslationKey) => {
    const categoryName = t(category, language)
    setSelectedCategory(categoryName)
    setQuery(categoryName)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-sidebar-border/50 shrink-0">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchProducts", language)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-border/60 rounded-xl focus:outline-none focus:border-primary/40 input-modern transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 pb-24">
        <PopularProducts language={language} onAskAboutProduct={onAskAboutProduct} />

        {/* Category Filters with product thumbnails */}
        <CategoryFilters
          language={language}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
          onAskAboutProduct={onAskAboutProduct}
        />

        {/* Search Results */}
        <div className="p-4">
          {isSearching ? (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-sm">{t("searching", language)}</span>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  language={language}
                  onAskAbout={() => onAskAboutProduct(product)}
                />
              ))}
            </div>
          ) : query ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-muted-foreground text-sm">{t("noResults", language)}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
              <p className="text-sm">{t("sidebarFooterText", language)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
