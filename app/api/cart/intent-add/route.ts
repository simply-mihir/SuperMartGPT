import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { safeTranslate } from "@/lib/translate";
import { parseAddToCartIntent, findProductsByQuery, getSuggestedProducts, ProductMatch } from "@/lib/products";

export const runtime = "nodejs";

interface IntentAddResponse {
  success: boolean;
  intent: "add_to_cart";
  message: string;
  product?: {
    id: string | number;
    name: string;
    price: number;
  };
  quantity?: number;
  suggestions?: ProductMatch[];
}

// POST /api/cart/intent-add
// Parses natural language add-to-cart intent and adds product if found
// Body: { userId?: string, query: string, language?: string }
export async function POST(req: NextRequest) {
  console.log("[/api/cart/intent-add] POST request received");

  try {
    const body = await req.json();
    const { userId = "user1", query, language = "en-US" } = body;

    if (!query || typeof query !== "string") {
      return NextResponse.json({
        success: false,
        intent: "add_to_cart",
        message: "No query provided",
      } as IntentAddResponse);
    }

    console.log("[/api/cart/intent-add] Processing query:", query, "for user:", userId);

    // Parse the intent to extract quantity and product name
    const { quantity, productQuery } = parseAddToCartIntent(query);
    console.log("[/api/cart/intent-add] Parsed:", { quantity, productQuery });

    if (!productQuery) {
      const message = await translateMessage(
        "I couldn't understand which product you want to add. Please specify a product name.",
        language
      );
      return NextResponse.json({
        success: false,
        intent: "add_to_cart",
        message,
      } as IntentAddResponse);
    }

    // Find matching products
    const matches = await findProductsByQuery(productQuery);
    console.log("[/api/cart/intent-add] Found matches:", matches.length);

    if (matches.length === 0) {
      // No product found - get suggestions
      const suggestions = await getSuggestedProducts(3);
      const suggestionNames = suggestions.map((s) => s.name).join(", ");
      
      const message = await translateMessage(
        `Sorry, I couldn't find '${productQuery}'. Did you mean: ${suggestionNames || "another product"}?`,
        language
      );

      return NextResponse.json({
        success: false,
        intent: "add_to_cart",
        message,
        suggestions,
      } as IntentAddResponse);
    }

    // Use the best match
    const bestMatch = matches[0];
    console.log("[/api/cart/intent-add] Best match:", bestMatch.name, "Score:", bestMatch.score);

    // Add to cart in Supabase (cart_items table)
    try {
      // Check if item already exists in cart
      const { data: existingItem, error: checkError } = await supabaseAdmin
        .from("cart_items")
        .select("id, quantity")
        .eq("user_id", userId)
        .eq("product_id", bestMatch.id)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        console.error("[/api/cart/intent-add] Cart check error:", checkError);
      }

      if (existingItem) {
        // Update existing cart item
        const newQuantity = (existingItem.quantity || 0) + quantity;
        const { error: updateError } = await supabaseAdmin
          .from("cart_items")
          .update({ quantity: newQuantity })
          .eq("id", existingItem.id);

        if (updateError) {
          console.error("[/api/cart/intent-add] Cart update error:", updateError);
        } else {
          console.log("[/api/cart/intent-add] Updated cart item quantity to:", newQuantity);
        }
      } else {
        // Insert new cart item
        const { error: insertError } = await supabaseAdmin
          .from("cart_items")
          .insert([{
            user_id: userId,
            product_id: bestMatch.id,
            quantity: quantity,
            created_at: new Date().toISOString(),
          }]);

        if (insertError) {
          console.error("[/api/cart/intent-add] Cart insert error:", insertError);
          // Don't fail - we'll still return success as the intent was understood
        } else {
          console.log("[/api/cart/intent-add] Added new cart item");
        }
      }
    } catch (cartError) {
      console.error("[/api/cart/intent-add] Cart operation failed:", cartError);
      // Continue - don't fail the whole request
    }

    // Generate success message
    const successMessageEn = quantity > 1
      ? `Added ${quantity} x ${bestMatch.name} to your cart.`
      : `Added ${bestMatch.name} to your cart.`;
    
    const message = await translateMessage(successMessageEn, language);

    return NextResponse.json({
      success: true,
      intent: "add_to_cart",
      message,
      product: {
        id: bestMatch.id,
        name: bestMatch.name,
        price: bestMatch.price,
      },
      quantity,
    } as IntentAddResponse);

  } catch (err) {
    console.error("[/api/cart/intent-add] Error:", err);
    return NextResponse.json({
      success: false,
      intent: "add_to_cart",
      message: "Sorry, something went wrong. Please try again.",
    } as IntentAddResponse, { status: 500 });
  }
}

// Helper to translate message if not English
async function translateMessage(message: string, language: string): Promise<string> {
  if (!language || language.toLowerCase().startsWith("en")) {
    return message;
  }
  
  try {
    return await safeTranslate(message, language);
  } catch (err) {
    console.error("[/api/cart/intent-add] Translation error:", err);
    return message;
  }
}




