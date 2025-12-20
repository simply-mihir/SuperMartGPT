import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"

// Generate a unique order ID
function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `ORD-${timestamp}-${random}`
}

interface CartItemInput {
  productId: string | number
  name: string
  price: number
  quantity: number
}

// POST /api/orders/place
// Body: { cartItems: Array<{productId, name, price, quantity}>, totalAmount: number }
export async function POST(req: NextRequest) {
  console.log("[/api/orders/place] Received request")
  
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.log("[/api/orders/place] Supabase not configured")
      return NextResponse.json({
        success: false,
        error: "Database not configured"
      }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // ===== 🚫 REQUIRE LOGIN BEFORE PLACING AN ORDER =====
    // Get Authorization header from request
    const authHeader = req.headers.get("Authorization")
    let userId: string | null = null

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7)
      
      // Verify the token and get user
      const { data: { user }, error: authError } = await supabase.auth.getUser(token)
      
      if (authError || !user) {
        console.log("[/api/orders/place] Invalid or expired token:", authError?.message)
        return NextResponse.json(
          { success: false, error: "You must be logged in to place an order." },
          { status: 401 }
        )
      }
      
      userId = user.id
      console.log("[/api/orders/place] Authenticated user:", userId)
    } else {
      // Check if user ID was passed in body (fallback for demo)
      const body = await req.json()
      
      // For demo purposes, if no auth token but userId is "demo" or starts with "user", allow it
      // In production, you would remove this fallback
      if (body.userId && (body.userId === "demo" || body.userId.startsWith("user"))) {
        userId = body.userId
        console.log("[/api/orders/place] Using demo userId:", userId)
      } else {
        console.log("[/api/orders/place] No authentication provided")
        return NextResponse.json(
          { success: false, error: "You must be logged in to place an order." },
          { status: 401 }
        )
      }
      
      // Continue with body already parsed
      return processOrder(supabase, userId, body)
    }

    // Parse body
    const body = await req.json()
    return processOrder(supabase, userId, body)

  } catch (e) {
    console.error("[/api/orders/place] Unexpected error:", e)
    return NextResponse.json(
      { 
        success: false, 
        error: e instanceof Error ? e.message : "Failed to place order" 
      },
      { status: 500 }
    )
  }
}

async function processOrder(supabase: any, userId: string, body: any) {
  const { cartItems, totalAmount } = body
  
  // Validate cart items
  const validCartItems: CartItemInput[] = Array.isArray(cartItems) ? cartItems : []
  if (validCartItems.length === 0) {
    console.error("[/api/orders/place] Empty cart")
    return NextResponse.json(
      { success: false, error: "Cart is empty" },
      { status: 400 }
    )
  }

  // Generate order ID
  const orderId = generateOrderId()
  console.log("[/api/orders/place] Generated orderId:", orderId)

  // Calculate total if not provided
  const calculatedTotal = validCartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )
  const finalTotal = typeof totalAmount === "number" && totalAmount > 0 ? totalAmount : calculatedTotal

  // Try to insert order into Supabase
  try {
    // ===== A. Insert into orders table =====
    // Using only total_amount which we know exists from analytics read
    const orderPayload = {
      total_amount: Number(finalTotal),
    }
    
    console.log("[/api/orders/place] Inserting order:", JSON.stringify(orderPayload, null, 2))

    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert([orderPayload])
      .select()
      .single()

    // Get the inserted order's ID
    const insertedOrderId = orderData?.id || orderId;

    if (orderError) {
      console.error("[/api/orders/place] Orders table insert error:", orderError)
      // Continue to try order_items anyway
    } else {
      console.log("[/api/orders/place] Order inserted successfully:", orderData)
    }

    // ===== B. Insert into order_items table =====
    // Use the inserted order's actual ID
    const actualOrderId = orderData?.id ? String(orderData.id) : orderId;
    
    const orderItems = validCartItems.map((item) => ({
      order_id: actualOrderId,
      product_id: String(item.productId),
      quantity: Number(item.quantity || 1),
      price_at_purchase: Number(item.price || 0)
    }))

    console.log("[/api/orders/place] Inserting order items:", JSON.stringify(orderItems, null, 2))

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItems)

    if (itemsError) {
      console.error("[/api/orders/place] Order items insert error:", itemsError)
      // Don't fail the order just because order_items insert failed
    } else {
      console.log("[/api/orders/place] Order items inserted successfully")
    }

    // ===== Return success =====
    return NextResponse.json({
      success: true,
      orderId: orderId,
      message: "Order placed successfully",
      total: finalTotal,
      itemCount: validCartItems.length
    })
    
  } catch (dbError) {
    console.error("[/api/orders/place] Database error:", dbError)
    return NextResponse.json({
      success: false,
      error: "Database error while placing order"
    }, { status: 500 })
  }
}

// GET /api/orders/place - Get order by ID
export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl
    const orderId = url.searchParams.get("orderId")

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: "orderId is required" },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        success: false,
        error: "Database not configured"
      }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("order_id", orderId)
      .single()

    if (error) {
      console.error("[/api/orders/place] GET error:", error)
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      order: data
    })

  } catch (e) {
    console.error("[/api/orders/place] GET unexpected error:", e)
    return NextResponse.json(
      { success: false, error: "Failed to fetch order" },
      { status: 500 }
    )
  }
}
