import { supabaseAdmin } from "./supabaseAdmin";

export interface ProductMatch {
  id: string | number;
  name: string;
  price: number;
  description?: string;
  category?: string;
  score: number; // Match score for ranking
}

/**
 * Parse quantity and product name from a natural language query
 * Examples:
 *   "add 2 maggi to cart" => { quantity: 2, productQuery: "maggi" }
 *   "put bread in my cart" => { quantity: 1, productQuery: "bread" }
 *   "add 3 packets of milk" => { quantity: 3, productQuery: "milk" }
 */
export function parseAddToCartIntent(query: string): { quantity: number; productQuery: string } {
  const lowerQuery = query.toLowerCase().trim();
  
  // Remove common cart-related phrases to isolate product
  const cleanQuery = lowerQuery
    .replace(/add\s+/gi, "")
    .replace(/put\s+/gi, "")
    .replace(/place\s+/gi, "")
    .replace(/i\s+want\s+to\s+buy\s+/gi, "")
    .replace(/buy\s+/gi, "")
    .replace(/to\s+(my\s+)?cart/gi, "")
    .replace(/in\s+(my\s+)?cart/gi, "")
    .replace(/into\s+(my\s+)?cart/gi, "")
    .replace(/packets?\s+of\s+/gi, "")
    .replace(/pieces?\s+of\s+/gi, "")
    .replace(/kg\s+of\s+/gi, "")
    .replace(/liters?\s+of\s+/gi, "")
    .trim();

  // Try to extract quantity
  let quantity = 1;
  let productQuery = cleanQuery;

  // Pattern: "2 maggi" or "3 bread"
  const numFirstMatch = cleanQuery.match(/^(\d+)\s+(.+)$/);
  if (numFirstMatch) {
    quantity = parseInt(numFirstMatch[1], 10) || 1;
    productQuery = numFirstMatch[2].trim();
  }

  // Pattern: "maggi x 2" or "bread x3"
  const numLastMatch = cleanQuery.match(/^(.+?)\s*x\s*(\d+)$/i);
  if (numLastMatch) {
    productQuery = numLastMatch[1].trim();
    quantity = parseInt(numLastMatch[2], 10) || 1;
  }

  // Pattern: "two maggi" or "three bread" (word numbers)
  const wordNumbers: Record<string, number> = {
    one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  };
  
  for (const [word, num] of Object.entries(wordNumbers)) {
    const wordMatch = cleanQuery.match(new RegExp(`^${word}\\s+(.+)$`, "i"));
    if (wordMatch) {
      quantity = num;
      productQuery = wordMatch[1].trim();
      break;
    }
  }

  // Ensure quantity is reasonable
  quantity = Math.max(1, Math.min(quantity, 99));

  return { quantity, productQuery };
}

/**
 * Find products matching a query using exact and fuzzy matching
 * Returns up to 5 matches sorted by relevance
 */
export async function findProductsByQuery(query: string): Promise<ProductMatch[]> {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    return [];
  }

  console.log("[findProductsByQuery] Searching for:", searchTerm);

  try {
    // Step 1: Try exact match on name (case-insensitive)
    const { data: exactMatches, error: exactError } = await supabaseAdmin
      .from("products")
      .select("id, name, price, description")
      .ilike("name", searchTerm)
      .limit(5);

    if (exactError) {
      console.error("[findProductsByQuery] Exact match error:", exactError);
    }

    console.log("[findProductsByQuery] Exact match result:", { count: exactMatches?.length, error: exactError?.message });

    if (exactMatches && exactMatches.length > 0) {
      console.log("[findProductsByQuery] Found exact matches:", exactMatches.length);
      return exactMatches.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price || 0,
        description: p.description || undefined,
        category: undefined,
        score: 100, // Exact match score
      }));
    }

    // Step 2: Try fuzzy match using ILIKE with wildcards
    const { data: fuzzyMatches, error: fuzzyError } = await supabaseAdmin
      .from("products")
      .select("id, name, price, description")
      .ilike("name", `%${searchTerm}%`)
      .limit(10);

    if (fuzzyError) {
      console.error("[findProductsByQuery] Fuzzy match error:", fuzzyError);
    }

    console.log("[findProductsByQuery] Fuzzy match result:", { count: fuzzyMatches?.length, error: fuzzyError?.message });

    if (fuzzyMatches && fuzzyMatches.length > 0) {
      console.log("[findProductsByQuery] Found fuzzy matches:", fuzzyMatches.length);
      
      // Score fuzzy matches by how well they match
      const scoredMatches = fuzzyMatches.map((p) => {
        const nameLower = p.name?.toLowerCase() || "";
        let score = 50; // Base fuzzy score
        
        // Boost score if search term is at the start
        if (nameLower.startsWith(searchTerm)) {
          score += 30;
        }
        
        // Boost score based on similarity ratio
        const similarity = searchTerm.length / nameLower.length;
        score += Math.round(similarity * 20);
        
        return {
          id: p.id,
          name: p.name,
          price: p.price || 0,
          description: p.description || undefined,
          category: undefined,
          score,
        };
      });

      // Sort by score descending and return top 5
      return scoredMatches
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    }

    // Step 3: Try matching against description as last resort
    const { data: descMatches, error: descError } = await supabaseAdmin
      .from("products")
      .select("id, name, price, description")
      .ilike("description", `%${searchTerm}%`)
      .limit(5);

    if (descError) {
      console.error("[findProductsByQuery] Description match error:", descError);
    }

    console.log("[findProductsByQuery] Description match result:", { count: descMatches?.length, error: descError?.message });

    if (descMatches && descMatches.length > 0) {
      console.log("[findProductsByQuery] Found description matches:", descMatches.length);
      return descMatches.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price || 0,
        description: p.description || undefined,
        category: undefined,
        score: 30, // Lower score for description matches
      }));
    }

    // No matches found - let's try getting all products and matching manually
    console.log("[findProductsByQuery] No matches found with ILIKE, trying manual search");
    const { data: allProducts, error: allError } = await supabaseAdmin
      .from("products")
      .select("id, name, price, description")
      .limit(100);

    if (allError) {
      console.error("[findProductsByQuery] All products error:", allError);
    } else if (allProducts) {
      console.log("[findProductsByQuery] Loaded all products:", allProducts.length);
      
      // Manual fuzzy search
      const manualMatches = allProducts.filter((p) => {
        const nameLower = (p.name || "").toLowerCase();
        return nameLower.includes(searchTerm) || searchTerm.includes(nameLower.split(" ")[0]);
      });

      if (manualMatches.length > 0) {
        console.log("[findProductsByQuery] Found manual matches:", manualMatches.length);
        return manualMatches.slice(0, 5).map((p) => ({
          id: p.id,
          name: p.name,
          price: p.price || 0,
          description: p.description || undefined,
          category: undefined,
          score: 40,
        }));
      }
    }

    // No matches found
    console.log("[findProductsByQuery] No matches found for:", searchTerm);
    return [];
  } catch (err) {
    console.error("[findProductsByQuery] Error:", err);
    return [];
  }
}

/**
 * Get suggested products when no exact match is found
 * Returns popular or random products as suggestions
 */
export async function getSuggestedProducts(limit: number = 3): Promise<ProductMatch[]> {
  try {
    console.log("[getSuggestedProducts] Fetching suggestions, limit:", limit);
    const { data, error } = await supabaseAdmin
      .from("products")
      .select("id, name, price, description")
      .limit(limit);

    if (error) {
      console.error("[getSuggestedProducts] Error:", error);
      return [];
    }

    console.log("[getSuggestedProducts] Fetched:", data?.length || 0, "products");
    
    return (data || []).map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price || 0,
      description: p.description || undefined,
      category: undefined,
      score: 0,
    }));
  } catch (err) {
    console.error("[getSuggestedProducts] Error:", err);
    return [];
  }
}

/**
 * Check if a message contains add-to-cart intent
 */
export function hasAddToCartIntent(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  
  // Must contain at least one action word and one cart-related word
  const actionWords = ["add", "put", "place", "buy", "want", "need", "get"];
  const cartWords = ["cart", "basket", "bag", "order"];
  
  const hasAction = actionWords.some((word) => lowerMessage.includes(word));
  const hasCart = cartWords.some((word) => lowerMessage.includes(word));
  
  // Also match patterns like "add <product>" without explicit cart mention
  const addPatterns = [
    /^add\s+\d*\s*\w+/i,
    /^put\s+\d*\s*\w+/i,
    /^buy\s+\d*\s*\w+/i,
    /i\s+want\s+(to\s+)?buy\s+/i,
    /add\s+.+\s+to\s+(my\s+)?cart/i,
    /put\s+.+\s+in\s+(my\s+)?cart/i,
  ];
  
  const matchesPattern = addPatterns.some((pattern) => pattern.test(lowerMessage));
  
  return (hasAction && hasCart) || matchesPattern;
}

