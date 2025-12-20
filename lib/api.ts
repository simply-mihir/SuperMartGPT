const BASE_URL = ""

export interface Product {
  id: string
  name: string
  description?: string
  price?: number
  category?: string
}

export interface ChatMessage {
  role: "user" | "bot"
  content: string
}

export interface ChatResponse {
  success: boolean
  reply: string
  relatedProducts: Array<{
    name: string
    price: string | number
  }>
  intentPayload?: {
    intent: string
    success: boolean
    product?: { id: string | number; name: string; price: number }
    quantity?: number
    query?: string
    suggestions?: Array<{ id: string | number; name: string; price: number }>
  }
  isAdminMode?: boolean
}

export async function searchProducts(query: string, language: string = "english"): Promise<Product[]> {
  try {
    const res = await fetch(`/api/products/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, language }),
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? data.data?.products || [] : []
  } catch (error) {
    console.error("Search failed:", error)
    return []
  }
}

export async function recommendProducts(context: string): Promise<Product[]> {
  try {
    const res = await fetch(`/api/products/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ context }),
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? data.data?.products || [] : []
  } catch (error) {
    console.error("Recommend failed:", error)
    return []
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`/api/categories`)
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? data.data?.categories || [] : []
  } catch (error) {
    console.error("Categories failed:", error)
    return []
  }
}

// Language name to code mapping for API calls
const languageCodeMap: Record<string, string> = {
  english: "en-US",
  hindi: "hi-IN",
  marathi: "mr-IN",
  bengali: "bn-IN",
  telugu: "te-IN",
  tamil: "ta-IN",
  gujarati: "gu-IN",
  kannada: "kn-IN",
  malayalam: "ml-IN",
  punjabi: "pa-IN",
  odia: "or-IN",
  urdu: "ur-PK",
  nepali: "ne-NP",
  sinhala: "si-LK",
  arabic: "ar-SA",
};

/**
 * Send a chat message to the backend.
 * NEVER throws errors - always returns a valid ChatResponse.
 */
export async function sendChatMessage(
  message: string,
  language: string
): Promise<ChatResponse> {
  // Default fallback response
  const fallbackResponse: ChatResponse = {
    success: false,
    reply: "Unable to reach the server. Please try again.",
    relatedProducts: []
  }

  // Convert language name to code
  const langCode = languageCodeMap[language.toLowerCase()] || language

  try {
    const response = await fetch(`/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, language: langCode }),
    })

    // Handle non-OK responses
    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error")
      console.error(`Chat API error ${response.status}: ${errorText}`)
      return {
        success: false,
        reply: "Backend error. Please try again.",
        relatedProducts: []
      }
    }

    // Parse JSON response
    let data: any
    try {
      data = await response.json()
    } catch (parseError) {
      console.error("Failed to parse chat response:", parseError)
      return {
        success: false,
        reply: "Received invalid response from server.",
        relatedProducts: []
      }
    }

    // Handle old API format (with data wrapper)
    if (data.data) {
      return {
        success: true,
        reply: data.data.reply || "No response received.",
        relatedProducts: Array.isArray(data.data.relatedProducts) ? data.data.relatedProducts : []
      }
    }

    // Handle new API format (direct response)
    return {
      success: data.success !== false,
      reply: data.reply || "No response received.",
      relatedProducts: Array.isArray(data.relatedProducts) ? data.relatedProducts : [],
      intentPayload: data.intentPayload || undefined,
      isAdminMode: data.isAdminMode || undefined
    }

  } catch (error) {
    console.error("sendChatMessage failed:", error)
    return fallbackResponse
  }
}

export async function placeOrder(userId: string) {
  try {
    const res = await fetch(`/api/orders/place`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
    return await res.json()
  } catch (e) {
    console.error("Place order failed:", e)
    return { success: false, orderId: null }
  }
}
