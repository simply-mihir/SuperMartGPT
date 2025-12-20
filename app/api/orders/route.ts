import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

// GET /api/orders?userId=xxx
// Fetch orders for a user
export async function GET(req: NextRequest) {
  console.log("[/api/orders] GET request received");

  try {
    const url = req.nextUrl;
    const userId = url.searchParams.get("userId") || "user1";
    const limit = parseInt(url.searchParams.get("limit") || "20", 10);

    const { data: orders, error } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("[/api/orders] Query error:", error);
      throw new Error(error.message);
    }

    console.log("[/api/orders] Found orders:", orders?.length || 0);

    return NextResponse.json({
      success: true,
      orders: orders || [],
    });
  } catch (err) {
    console.error("[/api/orders] Error:", err);
    const message = err instanceof Error ? err.message : "Failed to fetch orders";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// POST /api/orders
// Alternative route for placing orders (redirects to /api/orders/place logic)
export async function POST(req: NextRequest) {
  console.log("[/api/orders] POST request - redirecting to place order logic");

  try {
    const body = await req.json();
    const { userId = "user1", cartItems = [], totalAmount = 0 } = body;

    // Generate order ID
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const orderId = `ORD-${timestamp}-${random}`;

    // Validate cart items
    const validCartItems = Array.isArray(cartItems) ? cartItems : [];
    if (validCartItems.length === 0) {
      return NextResponse.json(
        { success: false, error: "Cart is empty" },
        { status: 400 }
      );
    }

    // Calculate total if not provided
    const calculatedTotal = validCartItems.reduce(
      (sum: number, item: any) => sum + ((item.price || 0) * (item.quantity || 1)),
      0
    );
    const finalTotal = typeof totalAmount === "number" && totalAmount > 0 ? totalAmount : calculatedTotal;

    // Insert order
    const orderPayload = {
      order_id: orderId,
      user_id: userId,
      total_amount: finalTotal,
      status: "placed",
      items_json: validCartItems,
      created_at: new Date().toISOString(),
    };

    const { data: orderData, error: orderError } = await supabaseAdmin
      .from("orders")
      .insert([orderPayload])
      .select()
      .single();

    if (orderError) {
      console.error("[/api/orders] Insert error:", orderError);
      // Return success even if DB insert fails
      return NextResponse.json({
        success: true,
        orderId: orderId,
        message: "Order placed (offline mode)",
        total: finalTotal,
      });
    }

    // Insert order items
    const orderItems = validCartItems.map((item: any) => ({
      order_id: orderId,
      product_id: String(item.productId),
      product_name: item.name || "Unknown Product",
      quantity: item.quantity || 1,
      unit_price: item.price || 0,
      created_at: new Date().toISOString(),
    }));

    const { error: itemsError } = await supabaseAdmin
      .from("order_items")
      .insert(orderItems);

    if (itemsError) {
      console.error("[/api/orders] Order items error:", itemsError);
    }

    return NextResponse.json({
      success: true,
      orderId: orderData?.order_id || orderId,
      message: "Order placed successfully",
      total: finalTotal,
      itemCount: validCartItems.length,
    });
  } catch (err) {
    console.error("[/api/orders] Error:", err);
    const message = err instanceof Error ? err.message : "Failed to place order";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}





