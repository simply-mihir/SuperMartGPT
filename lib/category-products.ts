import type { Product } from "@/lib/api"

// Category products without images - text-only UI
export const categoryProducts: Record<string, Product[]> = {
  Fruits: [
    { id: "f1", name: "Red Apple", price: 249 },
    { id: "f2", name: "Banana", price: 49 },
    { id: "f3", name: "Orange", price: 99 },
    { id: "f4", name: "Mango", price: 149 },
    { id: "f5", name: "Grapes", price: 199 },
  ],
  Vegetables: [
    { id: "v1", name: "Tomato", price: 40 },
    { id: "v2", name: "Potato", price: 30 },
    { id: "v3", name: "Onion", price: 35 },
    { id: "v4", name: "Carrot", price: 45 },
    { id: "v5", name: "Spinach", price: 25 },
  ],
  "Daily Essentials": [
    { id: "d1", name: "Milk 1L", price: 65 },
    { id: "d2", name: "Bread", price: 45 },
    { id: "d3", name: "Eggs 12pc", price: 85 },
    { id: "d4", name: "Butter", price: 55 },
    { id: "d5", name: "Cheese", price: 199 },
  ],
  Snacks: [
    { id: "s1", name: "Chips", price: 30 },
    { id: "s2", name: "Cookies", price: 45 },
    { id: "s3", name: "Popcorn", price: 99 },
    { id: "s4", name: "Nuts Mix", price: 299 },
    { id: "s5", name: "Crackers", price: 60 },
  ],
  "Personal Care": [
    { id: "p1", name: "Shampoo", price: 299 },
    { id: "p2", name: "Soap Bar", price: 45 },
    { id: "p3", name: "Toothpaste", price: 99 },
    { id: "p4", name: "Lotion", price: 349 },
    { id: "p5", name: "Deodorant", price: 199 },
  ],
  Household: [
    { id: "h1", name: "Detergent", price: 399 },
    { id: "h2", name: "Dish Soap", price: 99 },
    { id: "h3", name: "Paper Towels", price: 149 },
    { id: "h4", name: "Trash Bags", price: 199 },
    { id: "h5", name: "Cleaner", price: 129 },
  ],
}

// Popular products without images - text-only UI
export const popularProducts: (Product & { discount?: number })[] = [
  { id: "pop1", name: "Organic Milk", price: 85, discount: 15 },
  { id: "pop2", name: "Fresh Bread", price: 49, discount: 10 },
  { id: "pop3", name: "Premium Eggs", price: 120, discount: 20 },
  { id: "pop4", name: "Greek Yogurt", price: 75 },
  { id: "pop5", name: "Orange Juice", price: 99, discount: 25 },
  { id: "pop6", name: "Avocados", price: 199 },
]
