import { NextRequest, NextResponse } from "next/server";
import { addToCart, getCartByUser } from "@/lib/cart";
import type { CartItem } from "@/types";

export const runtime = "nodejs";

// POST /api/cart/add
// Body: { userId: string, productId: number, quantity: number }
export async function POST(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();

    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      );
    }

    if (!productId || typeof productId !== "number") {
      return NextResponse.json(
        { success: false, error: "productId must be a number" },
        { status: 400 }
      );
    }

    if (!quantity || typeof quantity !== "number" || quantity <= 0) {
      return NextResponse.json(
        { success: false, error: "quantity must be a positive number" },
        { status: 400 }
      );
    }

    const cart = await addToCart({ userId, productId, quantity });

    return NextResponse.json({
      success: true,
      data: cart,
    });
  } catch (error) {
    console.error("/api/cart/add error", error);
    return NextResponse.json(
      { success: false, error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
















