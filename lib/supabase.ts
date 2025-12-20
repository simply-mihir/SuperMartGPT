import { createClient } from "@supabase/supabase-js";
import { createEmbedding } from "./openai";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Supabase environment variables are missing.");
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    detectSessionInUrl: false,
  },
});

export type ProductRecord = {
  id: string;
  name: string;
  description?: string;
  price?: number | string;
  category?: string;
  tags?: string[] | string | null;
};

export async function getProducts(limit = 20) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data as ProductRecord[];
}

export async function searchProducts(query: string, limit = 10) {
  const sanitized = query?.trim();
  if (!sanitized) {
    return [];
  }

  const pattern = `%${sanitized}%`;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .or(
      `name.ilike.${pattern},category.ilike.${pattern},tags.ilike.${pattern},description.ilike.${pattern}`
    )
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data as ProductRecord[];
}

export async function getCategories() {
  const { data, error } = await supabase
    .from("products")
    .select("category", { count: "exact", head: false })
    .not("category", "is", null)
    .order("category", { ascending: true })
    .limit(200);

  if (error) {
    throw new Error(error.message);
  }

  const categories = Array.from(
    new Set((data ?? []).map((row) => row.category).filter(Boolean))
  ) as string[];

  return categories;
}

export async function getProductRecommendations(text: string) {
  const embedding = await createEmbedding(text);
  if (!embedding.length) {
    return [];
  }

  try {
    const { data, error } = await supabase.rpc("match_products", {
      query_embedding: embedding,
      match_threshold: 0.35,
      match_count: 3,
    });

    if (error) {
      throw error;
    }

    return (data ?? []) as ProductRecord[];
  } catch (rpcError) {
    console.warn("match_products RPC failed, falling back to keyword search");
    return searchProducts(text, 3);
  }
}
