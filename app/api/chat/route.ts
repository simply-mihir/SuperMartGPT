import { NextRequest } from "next/server";
import { openai } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { safeTranslate } from "@/lib/translate";
import { hasAddToCartIntent, parseAddToCartIntent, findProductsByQuery, getSuggestedProducts } from "@/lib/products";
import type { DemoUserHistory, DemoAssociation } from "@/types";

export const runtime = "nodejs";

interface RelatedProduct {
  name: string;
  price: number;
}

// Language name to code mapping
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

// Admin mode trigger keywords
const ADMIN_KEYWORDS = ["admin", "sales analysis", "show analytics", "analytics", "sales report", "revenue report", "i am admin"];

const DEFAULT_USER_ID = "user1";

// Check if message is an admin query
function isAdminQuery(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  return ADMIN_KEYWORDS.some((keyword) => lowerMessage.includes(keyword));
}

// Detect category from message for user preferences
function detectCategory(message: string): string | null {
  const lowerMessage = message.toLowerCase();
  const categoryMap: Record<string, string> = {
    fruit: "Fruits", fruits: "Fruits", apple: "Fruits", banana: "Fruits", mango: "Fruits", orange: "Fruits",
    vegetable: "Vegetables", vegetables: "Vegetables", tomato: "Vegetables", potato: "Vegetables", onion: "Vegetables", carrot: "Vegetables",
    milk: "Daily Essentials", bread: "Daily Essentials", eggs: "Daily Essentials", dairy: "Daily Essentials",
    snack: "Snacks", snacks: "Snacks", chips: "Snacks", cookies: "Snacks", maggi: "Snacks",
    shampoo: "Personal Care", soap: "Personal Care", toothpaste: "Personal Care",
    detergent: "Household", cleaner: "Household", household: "Household",
  };

  for (const [keyword, category] of Object.entries(categoryMap)) {
    if (lowerMessage.includes(keyword)) {
      return category;
    }
  }
  return null;
}

// Fetch user profile from demo_user_history
async function getUserProfile(userId: string): Promise<DemoUserHistory | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from("demo_user_history")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("[CHAT] Error fetching user profile:", error);
      return null;
    }

    if (data) return data as DemoUserHistory;

    // Create new profile if not exists
    const newProfile = {
      user_id: userId,
      recent_searches: [],
      liked_categories: [],
      recommended_products: [],
      last_active: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };

    const { data: created, error: createError } = await supabaseAdmin
      .from("demo_user_history")
      .insert([newProfile])
      .select()
      .single();

    if (createError) {
      console.error("[CHAT] Error creating user profile:", createError);
      return newProfile as DemoUserHistory;
    }

    return created as DemoUserHistory;
  } catch (err) {
    console.error("[CHAT] getUserProfile error:", err);
    return null;
  }
}

// Update user profile with new search
async function updateUserSearch(userId: string, search: string, category: string | null): Promise<void> {
  try {
    const profile = await getUserProfile(userId);
    if (!profile) return;

    const recentSearches = profile.recent_searches || [];
    const likedCategories = profile.liked_categories || [];

    if (!recentSearches.includes(search)) {
      recentSearches.unshift(search);
      if (recentSearches.length > 10) recentSearches.pop();
    }

    if (category && !likedCategories.includes(category)) {
      likedCategories.unshift(category);
      if (likedCategories.length > 10) likedCategories.pop();
    }

    await supabaseAdmin
      .from("demo_user_history")
      .update({
        recent_searches: recentSearches,
        liked_categories: likedCategories,
        last_active: new Date().toISOString(),
      })
      .eq("user_id", userId);
  } catch (err) {
    console.error("[CHAT] updateUserSearch error:", err);
  }
}

// Fetch frequently bought together associations
async function getAssociations(productNames: string[]): Promise<DemoAssociation[]> {
  try {
    if (productNames.length === 0) return [];

    const { data, error } = await supabaseAdmin
      .from("demo_associations")
      .select("*")
      .or(productNames.map((name) => `product_name.ilike.%${name}%`).join(","))
      .order("frequency", { ascending: false })
      .limit(5);

    if (error) {
      console.error("[CHAT] Error fetching associations:", error);
      return [];
    }

    return (data || []) as DemoAssociation[];
  } catch (err) {
    console.error("[CHAT] getAssociations error:", err);
    return [];
  }
}

// Handle add-to-cart intent
async function handleAddToCartIntent(
  userMessage: string,
  userId: string,
  language: string
): Promise<{ success: boolean; reply: string; intentPayload?: any; relatedProducts: RelatedProduct[] }> {
  console.log("[CHAT] Processing add-to-cart intent:", userMessage);

  try {
    const { quantity, productQuery } = parseAddToCartIntent(userMessage);
    console.log("[CHAT] Parsed intent:", { quantity, productQuery });

    if (!productQuery) {
      const reply = await safeTranslate(
        "I couldn't understand which product you want to add. Please specify a product name like 'add Maggi to cart'.",
        language
      );
      return { success: false, reply, relatedProducts: [] };
    }

    // Find matching products
    const matches = await findProductsByQuery(productQuery);
    console.log("[CHAT] Found matches:", matches.length);

    if (matches.length === 0) {
      // No product found - get suggestions
      const suggestions = await getSuggestedProducts(3);
      const suggestionNames = suggestions.map((s) => s.name).join(", ");
      
      // Return friendly not-found message
      const replyEn = `Sorry, that product does not exist in SuperMartGPT. Did you mean: ${suggestionNames || "another product"}?`;
      const reply = await safeTranslate(replyEn, language);

      return {
        success: false,
        reply,
        intentPayload: {
          intent: "add_to_cart",
          success: false,
          query: productQuery,
          suggestions: suggestions.map((s) => ({ name: s.name, price: s.price, id: s.id })),
        },
        relatedProducts: suggestions.map((s) => ({ name: s.name, price: s.price })),
      };
    }

    // Use the best match
    const bestMatch = matches[0];
    console.log("[CHAT] Best match:", bestMatch.name);

    // Add to cart in Supabase
    try {
      const { data: existingItem } = await supabaseAdmin
        .from("cart_items")
        .select("id, quantity")
        .eq("user_id", userId)
        .eq("product_id", bestMatch.id)
        .single();

      if (existingItem) {
        await supabaseAdmin
          .from("cart_items")
          .update({ quantity: (existingItem.quantity || 0) + quantity })
          .eq("id", existingItem.id);
      } else {
        await supabaseAdmin.from("cart_items").insert([{
          user_id: userId,
          product_id: bestMatch.id,
          quantity: quantity,
          created_at: new Date().toISOString(),
        }]);
      }
    } catch (cartError) {
      console.error("[CHAT] Cart DB error (non-blocking):", cartError);
    }

    // Generate success reply with ₹ currency
    const replyEn = quantity > 1
      ? `✅ Added ${quantity} x ${bestMatch.name} (₹${bestMatch.price.toFixed(2)} each) to your cart.`
      : `✅ Added ${bestMatch.name} (₹${bestMatch.price.toFixed(2)}) to your cart.`;
    
    const reply = await safeTranslate(replyEn, language);

    return {
      success: true,
      reply,
      intentPayload: {
        intent: "add_to_cart",
        success: true,
        product: { id: bestMatch.id, name: bestMatch.name, price: bestMatch.price },
        quantity,
      },
      relatedProducts: [{ name: bestMatch.name, price: bestMatch.price }],
    };
  } catch (err) {
    console.error("[CHAT] Add-to-cart intent error:", err);
    const reply = await safeTranslate(
      "Sorry, I couldn't process your request. Please try again.",
      language
    );
    return { success: false, reply, relatedProducts: [] };
  }
}

// POST /api/chat - ALWAYS returns success JSON, never 500 errors
export async function POST(req: NextRequest) {
  try {
    let body: { message?: string; language?: string };
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("CHAT ROUTE: Failed to parse request body", parseError);
      return Response.json({
        success: true,
        reply: "Sorry, I couldn't understand your request. Please try again.",
        relatedProducts: []
      });
    }

    const { message, language: rawLanguage } = body;
    const userMessage = message?.trim() || "";
    
    const language = rawLanguage 
      ? (languageCodeMap[rawLanguage.toLowerCase()] || rawLanguage)
      : "en-US";

    if (!userMessage) {
      return Response.json({
        success: true,
        reply: "Please provide a message.",
        relatedProducts: []
      });
    }

    console.log("[CHAT] Processing message:", userMessage, "Language:", language);

    const userId = DEFAULT_USER_ID;
    const isEnglish = !language || language.toLowerCase().startsWith("en");

    // ===== INTENT 1: Admin Analytics =====
    if (isAdminQuery(userMessage)) {
      console.log("[CHAT] Admin mode detected - showing analytics directly");
      
      // Return simple acknowledgment - analytics component will load separately
      const adminReplyEn = "📊 Opening Sales Analytics Dashboard...";
      const adminReply = isEnglish ? adminReplyEn : await safeTranslate(adminReplyEn, language);

      return Response.json({
        success: true,
        reply: adminReply,
        relatedProducts: [],
        isAdminMode: true
      });
    }

    // ===== INTENT 2: Add to Cart =====
    if (hasAddToCartIntent(userMessage)) {
      console.log("[CHAT] Add-to-cart intent detected");
      
      const intentResult = await handleAddToCartIntent(userMessage, userId, language);
      
      return Response.json({
        success: true,
        reply: intentResult.reply,
        relatedProducts: intentResult.relatedProducts,
        intentPayload: intentResult.intentPayload,
      });
    }

    // ===== INTENT 3: Regular Chat (with OpenAI) =====
    const userProfile = await getUserProfile(userId);
    const detectedCategory = detectCategory(userMessage);

    // Update user search history (non-blocking)
    updateUserSearch(userId, userMessage, detectedCategory).catch(() => {});

    let reply = "I can help you find products! Try asking about fruits, vegetables, snacks, or say 'add [product name] to cart'.";
    let relatedProducts: RelatedProduct[] = [];

    // Fetch related products from database
    try {
      const searchTerms = userMessage.split(/\s+/).filter(w => w.length > 2);
      const searchQuery = searchTerms.length > 0 
        ? searchTerms.map(term => `name.ilike.%${term}%`).join(",")
        : `name.ilike.%${userMessage}%`;

      const { data: matchedProducts } = await supabaseAdmin
        .from("products")
        .select("id, name, description, price, category_id")
        .or(searchQuery)
        .limit(5);

      if (matchedProducts && matchedProducts.length > 0) {
        relatedProducts = matchedProducts.map((p: any) => ({
          name: p.name || "Unknown Product",
          price: typeof p.price === "number" ? p.price : 0
        }));
      }
    } catch (dbError) {
      console.error("CHAT ROUTE: Database query failed", dbError);
    }

    // Fetch associations
    let associations: DemoAssociation[] = [];
    if (relatedProducts.length > 0) {
      associations = await getAssociations(relatedProducts.map((p) => p.name));
    }

    // Build personalization context
    let personalizationContext = "";
    if (userProfile) {
      const recentSearches = userProfile.recent_searches || [];
      const likedCategories = userProfile.liked_categories || [];
      
      if (recentSearches.length > 0 || likedCategories.length > 0) {
        personalizationContext = `\n\nUser Preferences:
- Recent searches: ${recentSearches.slice(0, 5).join(", ") || "None"}
- Favorite categories: ${likedCategories.slice(0, 5).join(", ") || "None"}`;
      }
    }

    let associationsContext = "";
    if (associations.length > 0) {
      associationsContext = `\n\nFrequently bought together:
${associations.map((a) => `- ${a.product_name} + ${a.associated_product_name}`).join("\n")}`;
    }

    // Call OpenAI
    try {
      const systemPrompt = `You are SuperMartGPT, a helpful Indian grocery shopping assistant.

Your role is to:
- Help customers find products
- Answer questions about products, prices, availability
- Provide personalized suggestions based on user preferences
- Be concise and friendly
- Always use ₹ (Indian Rupee) for prices, never $

${personalizationContext}
${associationsContext}

IMPORTANT: 
- If the user wants to add something to cart, they should say "add [product] to cart".
- Keep responses brief and helpful.
- Don't use markdown formatting.
- Use ₹ symbol for all prices.`;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 300,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ]
      });

      reply = completion.choices[0]?.message?.content?.trim() || reply;
      
      // Replace any $ with ₹ in the reply
      reply = reply.replace(/\$/g, "₹");
      
    } catch (aiError) {
      console.error("CHAT ROUTE: OpenAI API call failed", aiError);
      reply = "I can help you find products! Try asking about fruits, vegetables, or snacks. You can also say 'add banana to cart' to add items.";
    }

    // Get default products if none found
    if (relatedProducts.length === 0) {
      try {
        const { data: defaultProducts } = await supabaseAdmin
          .from("products")
          .select("name, price")
          .limit(3);

        if (defaultProducts && defaultProducts.length > 0) {
          relatedProducts = defaultProducts.map((p: any) => ({
            name: p.name || "Product",
            price: typeof p.price === "number" ? p.price : 0
          }));
        }
      } catch (fallbackError) {
        console.error("CHAT ROUTE: Fallback product query failed", fallbackError);
      }
    }

    // Translate reply if needed
    let finalReply = reply;
    if (!isEnglish && language) {
      try {
        finalReply = await safeTranslate(reply, language);
      } catch (translateError) {
        console.error("CHAT ROUTE: Translation failed", translateError);
        finalReply = reply;
      }
    }

    // Translate product names if needed
    let translatedProducts = relatedProducts;
    if (!isEnglish && language && relatedProducts.length > 0) {
      try {
        translatedProducts = await Promise.all(
          relatedProducts.map(async (p) => ({
            name: await safeTranslate(p.name, language),
            price: p.price
          }))
        );
      } catch (productTranslateError) {
        console.error("CHAT ROUTE: Product translation failed", productTranslateError);
        translatedProducts = relatedProducts;
      }
    }

    return Response.json({
      success: true,
      reply: finalReply,
      relatedProducts: translatedProducts
    });

  } catch (err) {
    // NEVER return 500 - always return valid JSON
    console.error("CHAT ROUTE ERROR:", err);
    return Response.json({
      success: true,
      reply: "I'm here to help! You can ask about products, prices, or say 'add [product] to cart' to add items.",
      relatedProducts: []
    });
  }
}
