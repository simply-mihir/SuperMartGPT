import { NextRequest, NextResponse } from "next/server";
import { removeFromCart, getCartByUser } from "@/lib/cart";

export const runtime = "nodejs";

// DELETE /api/cart/remove
// Body: { userId: string, productId: number }
export async function DELETE(req: NextRequest) {
  try {
    const { userId, productId } = await req.json();

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

    await removeFromCart({ userId, productId });
    const cart = await getCartByUser(userId);

    return NextResponse.json({
      success: true,
      data: cart,
    });
  } catch (error) {
    console.error("/api/cart/remove error", error);
    return NextResponse.json(
      { success: false, error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}
















