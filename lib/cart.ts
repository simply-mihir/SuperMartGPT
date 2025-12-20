"use server";

import { supabaseAdmin } from "./supabaseAdmin";
import type { CartItem, Product } from "@/types";

// Fetch full cart for a given user, including product details.
export async function getCartByUser(userId: string): Promise<CartItem[]> {
  const { data, error } = await supabaseAdmin
    .from("cart_items")
    .select("id, user_id, product_id, quantity, created_at, products(*)")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row: any) => ({
    id: row.id,
    user_id: row.user_id,
    product_id: row.product_id,
    quantity: row.quantity,
    created_at: row.created_at,
    product: row.products as Product,
  }));
}

// Add or update a cart item.
export async function addToCart(params: {
  userId: string;
  productId: number;
  quantity: number;
}): Promise<CartItem[]> {
  const { userId, productId, quantity } = params;

  if (quantity <= 0) {
    throw new Error("Quantity must be greater than zero.");
  }

  // Upsert cart item
  const { error } = await supabaseAdmin.from("cart_items").upsert(
    {
      user_id: userId,
      product_id: productId,
      quantity,
    },
    {
      onConflict: "user_id,product_id",
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  return getCartByUser(userId);
}

// Remove item from cart.
export async function removeFromCart(params: {
  userId: string;
  productId: number;
}): Promise<void> {
  const { userId, productId } = params;

  const { error } = await supabaseAdmin
    .from("cart_items")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId);

  if (error) {
    throw new Error(error.message);
  }
}
















