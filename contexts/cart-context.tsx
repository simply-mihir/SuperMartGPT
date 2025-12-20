"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"

export type CartItem = {
  id: string
  productId: string
  name: string
  price?: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: { id: string; name: string; price?: number }, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart-items")
      if (raw) setCartItems(JSON.parse(raw))
    } catch {
      setCartItems([])
    } finally {
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("cart-items", JSON.stringify(cartItems))
      } catch {}
    }
  }, [cartItems, mounted])

  const addToCart = (
    product: { id: string; name: string; price?: number },
    quantity: number = 1,
  ) => {
    setCartItems((prev) => {
      const found = prev.find((i) => i.productId === product.id)
      if (found) {
        return prev.map((i) =>
          i.productId === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        )
      }
      const newItem: CartItem = {
        id: Date.now().toString(),
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
      }
      return [...prev, newItem]
    })

    // optional backend sync (non-blocking)
    fetch("/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, quantity }),
    }).catch((e) => console.warn("Cart sync failed:", e))
  }

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) =>
      prev.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
    try {
      localStorage.removeItem("cart-items")
    } catch {}
  }

  const getTotalItems = () => cartItems.reduce((s, i) => s + i.quantity, 0)

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + (item.price ? item.price * item.quantity : 0), 0)

  return (
    <CartContext.Provider
      value={{
        cartItems: mounted ? cartItems : [],
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
