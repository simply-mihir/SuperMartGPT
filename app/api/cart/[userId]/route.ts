import { NextRequest, NextResponse } from "next/server";
import { getCartByUser } from "@/lib/cart";

export const runtime = "nodejs";

// GET /api/cart/:userId
export async function GET(
  _req: NextRequest,
  context: { params: { userId: string } }
) {
  try {
    const userId = context.params.userId;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      );
    }

    const cart = await getCartByUser(userId);

    return NextResponse.json({
      success: true,
      data: cart,
    });
  } catch (error) {
    console.error("/api/cart/[userId] error", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch cart" },
      { status: 500 }
    );
  }
}
















