"use client"

import { X, ShoppingCart, Plus, Minus, Trash2, LogIn } from "lucide-react"
import { useContext, useState } from "react"
import { CartContext } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { type Language, t } from "@/lib/translations"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  language: Language
  onOpenLogin?: () => void
}

// Additional translation keys for cart
const cartTranslations: Record<Language, { 
  startAdding: string; 
  placing: string;
  loginRequired: string;
  loginToOrder: string;
}> = {
  english: { 
    startAdding: "Start adding products!", 
    placing: "Placing...",
    loginRequired: "Login Required",
    loginToOrder: "Please login first to place an order."
  },
  hindi: { 
    startAdding: "उत्पाद जोड़ना शुरू करें!", 
    placing: "ऑर्डर कर रहे हैं...",
    loginRequired: "लॉगिन आवश्यक",
    loginToOrder: "ऑर्डर देने के लिए पहले लॉगिन करें।"
  },
  marathi: { 
    startAdding: "उत्पाद जोडणे सुरू करा!", 
    placing: "ऑर्डर करत आहे...",
    loginRequired: "लॉगिन आवश्यक",
    loginToOrder: "ऑर्डर देण्यासाठी आधी लॉगिन करा।"
  },
  bengali: { 
    startAdding: "পণ্য যোগ করা শুরু করুন!", 
    placing: "অর্ডার করা হচ্ছে...",
    loginRequired: "লগইন প্রয়োজন",
    loginToOrder: "অর্ডার দিতে প্রথমে লগইন করুন।"
  },
  telugu: { 
    startAdding: "ఉత్పత్తులను జోడించడం ప్రారంభించండి!", 
    placing: "ఆర్డర్ చేస్తోంది...",
    loginRequired: "లాగిన్ అవసరం",
    loginToOrder: "ఆర్డర్ చేయడానికి ముందు లాగిన్ అవ్వండి।"
  },
  tamil: { 
    startAdding: "பொருட்களைச் சேர்க்க ஆரம்பியுங்கள்!", 
    placing: "ஆர்டர் செய்கிறது...",
    loginRequired: "உள்நுழைவு தேவை",
    loginToOrder: "ஆர்டர் செய்ய முதலில் உள்நுழையவும்।"
  },
  gujarati: { 
    startAdding: "ઉત્પાદનો ઉમેરવાનું શરૂ કરો!", 
    placing: "ઓર્ડર આપી રહ્યા છીએ...",
    loginRequired: "લૉગિન આવશ્યક",
    loginToOrder: "ઓર્ડર આપવા પહેલા લૉગિન કરો।"
  },
  kannada: { 
    startAdding: "ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಲು ಪ್ರಾರಂಭಿಸಿ!", 
    placing: "ಆರ್ಡರ್ ಮಾಡುತ್ತಿದೆ...",
    loginRequired: "ಲಾಗಿನ್ ಅಗತ್ಯ",
    loginToOrder: "ಆರ್ಡರ್ ಮಾಡಲು ಮೊದಲು ಲಾಗಿನ್ ಆಗಿ।"
  },
  malayalam: { 
    startAdding: "ഉൽപ്പന്നങ്ങൾ ചേർക്കാൻ ആരംഭിക്കുക!", 
    placing: "ഓർഡർ ചെയ്യുന്നു...",
    loginRequired: "ലോഗിൻ ആവശ്യമാണ്",
    loginToOrder: "ഓർഡർ ചെയ്യാൻ ആദ്യം ലോഗിൻ ചെയ്യുക।"
  },
  punjabi: { 
    startAdding: "ਉਤਪਾਦ ਜੋੜਨਾ ਸ਼ੁਰੂ ਕਰੋ!", 
    placing: "ਆਰਡਰ ਕਰ ਰਿਹਾ ਹੈ...",
    loginRequired: "ਲੌਗਇਨ ਲੋੜੀਂਦਾ",
    loginToOrder: "ਆਰਡਰ ਕਰਨ ਲਈ ਪਹਿਲਾਂ ਲੌਗਇਨ ਕਰੋ।"
  },
  odia: { 
    startAdding: "ଉତ୍ପାଦ ଯୋଡ଼ିବା ଆରମ୍ଭ କରନ୍ତୁ!", 
    placing: "ଅର୍ଡର କରୁଛି...",
    loginRequired: "ଲଗଇନ ଆବଶ୍ୟକ",
    loginToOrder: "ଅର୍ଡର କରିବାକୁ ପ୍ରଥମେ ଲଗଇନ କରନ୍ତୁ।"
  },
  urdu: { 
    startAdding: "مصنوعات ڈالنا شروع کریں!", 
    placing: "آرڈر کر رہے ہیں...",
    loginRequired: "لاگ ان ضروری ہے",
    loginToOrder: "آرڈر دینے کے لیے پہلے لاگ ان کریں۔"
  },
  nepali: { 
    startAdding: "उत्पाद थप्न सुरू गर्नुहोस्!", 
    placing: "अर्डर गर्दैछ...",
    loginRequired: "लगइन आवश्यक",
    loginToOrder: "अर्डर गर्न पहिले लगइन गर्नुहोस्।"
  },
  sinhala: { 
    startAdding: "නිෂ්පාදන එකතු කිරීම ආරම්භ කරන්න!", 
    placing: "ඇණවුම් කරමින්...",
    loginRequired: "පිවිසීම අවශ්‍යයි",
    loginToOrder: "ඇණවුම් කිරීමට පළමුව පිවිසෙන්න."
  },
  arabic: { 
    startAdding: "ابدأ بإضافة المنتجات!", 
    placing: "جاري تقديم الطلب...",
    loginRequired: "تسجيل الدخول مطلوب",
    loginToOrder: "يرجى تسجيل الدخول أولاً لتقديم الطلب."
  },
}

export function CartDrawer({ isOpen, onClose, language, onOpenLogin }: CartDrawerProps) {
  const cartContext = useContext(CartContext)
  const { session, isAuthenticated } = useAuth()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState<string>("")
  const [isPlacing, setIsPlacing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)

  // Safe access to cart context methods
  const cartItems = cartContext?.cartItems || []
  const removeFromCart = cartContext?.removeFromCart || (() => {})
  const updateQuantity = cartContext?.updateQuantity || (() => {})
  const clearCart = cartContext?.clearCart || (() => {})
  const getTotalPrice = cartContext?.getTotalPrice || (() => 0)

  const safeItems = cartItems || []
  const total = typeof getTotalPrice === "function" ? getTotalPrice() : 0

  const extraTranslations = cartTranslations[language] || cartTranslations.english

  const handlePlaceOrder = async () => {
    if (isPlacing || safeItems.length === 0) return
    setIsPlacing(true)
    setError(null)
    setShowLoginPrompt(false)

    try {
      // Prepare cart items for the API
      const orderItems = safeItems.map(item => ({
        productId: item.productId,
        name: item.name,
        price: item.price || 0,
        quantity: item.quantity
      }))

      console.log("[CartDrawer] Placing order with items:", orderItems)

      // Prepare headers - include auth token if available
      const headers: Record<string, string> = {
        "Content-Type": "application/json"
      }

      // Add authorization header if user is authenticated
      if (session?.access_token) {
        headers["Authorization"] = `Bearer ${session.access_token}`
      }

      // Only send userId if authenticated - otherwise let backend return 401
      const bodyPayload: any = {
        cartItems: orderItems,
        totalAmount: total
      }
      
      if (isAuthenticated && session?.user?.id) {
        bodyPayload.userId = session.user.id
      }
      // For demo purposes, allow "demo" userId for testing
      // Remove this in production
      // bodyPayload.userId = "demo"

      const res = await fetch("/api/orders/place", {
        method: "POST",
        headers,
        body: JSON.stringify(bodyPayload),
      })

      const data = await res.json()
      console.log("[CartDrawer] Order response:", data, "Status:", res.status)

      // ===== Handle 401 - User must be logged in =====
      if (res.status === 401) {
        setShowLoginPrompt(true)
        setError(extraTranslations.loginToOrder)
        return
      }

      if (data?.success && data?.orderId) {
        setOrderId(data.orderId)
        setOrderPlaced(true)
        clearCart()
        
        // Auto close after 3 seconds
        setTimeout(() => {
          setOrderPlaced(false)
          setOrderId("")
          onClose()
        }, 3000)
      } else {
        console.error("[CartDrawer] Place order failed:", data)
        setError(data?.error || "Failed to place order")
      }
    } catch (err) {
      console.error("[CartDrawer] Error placing order:", err)
      setError("Error placing order. Please try again.")
    } finally {
      setIsPlacing(false)
    }
  }

  const handleLoginClick = () => {
    setShowLoginPrompt(false)
    setError(null)
    onClose()
    if (onOpenLogin) {
      onOpenLogin()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">{t("cart", language)}</h2>
            {safeItems.length > 0 && (
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {safeItems.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-xl transition-all duration-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {orderPlaced ? (
            /* Order Success UI */
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-4xl">✔️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t("orderPlaced", language)}
              </h3>
              <p className="text-muted-foreground mb-1">
                {t("orderId", language)}: <span className="font-mono font-semibold text-primary">{orderId}</span>
              </p>
              <p className="text-sm text-muted-foreground">{t("orderConfirmation", language)}</p>
            </div>
          ) : safeItems.length === 0 ? (
            /* Empty Cart UI */
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-6xl mb-4 block">🛒</span>
              <p className="font-semibold text-lg text-foreground mb-2">{t("cartEmpty", language)}</p>
              <p className="text-sm text-muted-foreground">{extraTranslations.startAdding}</p>
            </div>
          ) : (
            /* Cart Items List */
            <div className="space-y-3">
              {/* Login Required Prompt */}
              {showLoginPrompt && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <LogIn className="w-5 h-5 text-amber-600" />
                    <h4 className="font-semibold text-amber-800">{extraTranslations.loginRequired}</h4>
                  </div>
                  <p className="text-amber-700 text-sm mb-3">{extraTranslations.loginToOrder}</p>
                  <button
                    onClick={handleLoginClick}
                    className="w-full py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Login to Continue
                  </button>
                </div>
              )}

              {/* Error Message */}
              {error && !showLoginPrompt && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-3">
                  {error}
                </div>
              )}

              {/* Cart Items */}
              {safeItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-white border border-border/50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground line-clamp-2">
                      {item.name}
                    </h4>
                    <p className="text-primary font-bold text-lg mt-1">
                      ₹{typeof item.price === "number" ? item.price.toFixed(2) : item.price ?? "-"}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="p-1.5 hover:bg-accent rounded-lg transition-colors border border-border/50"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="p-1.5 hover:bg-accent rounded-lg transition-colors border border-border/50"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="ml-auto p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Place Order */}
        {!orderPlaced && safeItems.length > 0 && (
          <div className="border-t border-border/50 p-4 shrink-0 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-foreground">{t("total", language)}:</span>
              <span className="text-primary font-bold text-xl">₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={isPlacing}
              className="w-full py-3 bg-gradient-to-r from-primary to-[#16A34A] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlacing ? extraTranslations.placing : t("placeOrder", language)}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
