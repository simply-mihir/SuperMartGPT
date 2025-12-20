"use client"

import { ShoppingBag } from "lucide-react"

export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in-up">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center flex-shrink-0 shadow-md">
        <ShoppingBag className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white/90 backdrop-blur-sm border border-border/50 px-5 py-4 rounded-[20px] rounded-tl-[4px] shadow-sm">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 bg-primary/60 rounded-full typing-dot" />
          <span className="w-2 h-2 bg-primary/60 rounded-full typing-dot" />
          <span className="w-2 h-2 bg-primary/60 rounded-full typing-dot" />
        </div>
      </div>
    </div>
  )
}
