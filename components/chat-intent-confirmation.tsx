"use client";

import { useContext } from "react";
import { ShoppingCart, Check, X, Plus } from "lucide-react";
import { type Language, t } from "@/lib/translations";
import { CartContext } from "@/contexts/cart-context";

interface Product {
  id: string | number;
  name: string;
  price: number;
}

interface IntentPayload {
  intent: "add_to_cart";
  success: boolean;
  product?: Product;
  quantity?: number;
  query?: string;
  suggestions?: Product[];
}

interface ChatIntentConfirmationProps {
  intentPayload: IntentPayload;
  language: Language;
  onViewCart?: () => void;
  onAddSuggestion?: (product: Product) => void;
}

export function ChatIntentConfirmation({
  intentPayload,
  language,
  onViewCart,
  onAddSuggestion,
}: ChatIntentConfirmationProps) {
  const cartContext = useContext(CartContext);
  const addToCart = cartContext?.addToCart || (() => {});

  const handleAddSuggestion = (product: Product) => {
    addToCart({
      id: String(product.id),
      name: product.name,
      price: product.price,
    });
    onAddSuggestion?.(product);
  };

  // Success state - product was added
  if (intentPayload.success && intentPayload.product) {
    const { product, quantity = 1 } = intentPayload;
    
    return (
      <div className="mt-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 animate-fade-in-up">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-100 rounded-full">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-green-800">
              {quantity > 1 ? `${quantity} x ` : ""}{product.name}
            </p>
            <p className="text-sm text-green-600">
              ₹{(product.price * quantity).toFixed(2)} added to cart
            </p>
          </div>
          {onViewCart && (
            <button
              onClick={onViewCart}
              className="px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1.5"
            >
              <ShoppingCart className="w-4 h-4" />
              View Cart
            </button>
          )}
        </div>
      </div>
    );
  }

  // Failure state - product not found, show suggestions
  if (!intentPayload.success && intentPayload.suggestions && intentPayload.suggestions.length > 0) {
    return (
      <div className="mt-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 animate-fade-in-up">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-amber-100 rounded-full">
            <X className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-amber-800">
              Couldn't find "{intentPayload.query}"
            </p>
            <p className="text-sm text-amber-600">
              Did you mean one of these?
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
          {intentPayload.suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleAddSuggestion(suggestion)}
              className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 hover:border-green-400 hover:bg-green-50 transition-all group"
            >
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800 line-clamp-1">
                  {suggestion.name}
                </p>
                <p className="text-xs text-gray-500">₹{suggestion.price.toFixed(2)}</p>
              </div>
              <div className="p-1.5 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4 text-green-600" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Generic failure state
  return (
    <div className="mt-3 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-gray-500" />
        </div>
        <p className="text-gray-600 text-sm">
          Sorry, I couldn't process that request. Please try again with a specific product name.
        </p>
      </div>
    </div>
  );
}

export default ChatIntentConfirmation;




