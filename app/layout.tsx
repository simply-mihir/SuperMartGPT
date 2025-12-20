import type React from "react"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Static head - no dynamic content */}
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Providers>
          <CartProvider>{children}</CartProvider>
        </Providers>
      </body>
    </html>
  )
}
