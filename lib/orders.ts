"use server";

import { supabaseAdmin } from "./supabaseAdmin";
import type { CartItem, Order, Product } from "@/types";
import { getCartByUser } from "./cart";

// Place an order for the given user.
export async function placeOrder(userId: string): Promise<Order> {
  // 1. Fetch cart items
  const cartItems: CartItem[] = await getCartByUser(userId);

  if (cartItems.length === 0) {
    throw new Error("Cart is empty.");
  }

  // 2. Calculate total amount
  const totalAmount = cartItems.reduce((sum, item) => {
    const price =
      typeof item.product?.price === "number"
        ? item.product.price
        : parseFloat((item.product?.price as any) ?? "0");
    return sum + price * item.quantity;
  }, 0);

  const orderId = `ORD${Date.now()}`;

  // 3. Create order record
  const orderPayload = {
    user_id: userId,
    order_id: orderId,
    total_amount: totalAmount,
    items_json: cartItems.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity,
      product: item.product,
    })) as unknown,
  };

  const { data, error } = await supabaseAdmin
    .from("orders")
    .insert(orderPayload)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  // 4. Clear cart
  const { error: cartError } = await supabaseAdmin
    .from("cart_items")
    .delete()
    .eq("user_id", userId);

  if (cartError) {
    console.error("Failed to clear cart after order:", cartError);
  }

  return data as Order;
}
















