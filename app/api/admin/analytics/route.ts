import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { openai } from "@/lib/openai";

export const runtime = "nodejs";

interface TopProduct {
  product_name: string;
  units_sold: number;
  revenue: number;
}

interface CategoryBreakdown {
  category: string;
  units_sold: number;
  revenue: number;
}

interface AnalyticsResponse {
  success: boolean;
  totalRevenue: number;
  totalUnits: number;
  unitsSold: number; // Alias for totalUnits
  topProducts: TopProduct[];
  categoryBreakdown: CategoryBreakdown[];
  recommendations: string[];
}

// GET /api/admin/analytics
export async function GET(req: NextRequest): Promise<NextResponse<AnalyticsResponse>> {
  console.log("[/api/admin/analytics] GET request received");

  try {
    // ===== A. Fetch ALL real orders (NO .single(), NO .limit(1)) =====
    const { data: realOrders, error: ordersError } = await supabaseAdmin
      .from("orders")
      .select("total_amount");

    if (ordersError) {
      console.error("[/api/admin/analytics] Orders fetch error:", ordersError);
    }

    // ===== B. Fetch ALL real order items (NO .single(), NO .limit(1)) =====
    const { data: realItems, error: itemsError } = await supabaseAdmin
      .from("order_items")
      .select("quantity, product_id, price_at_purchase");

    if (itemsError) {
      console.error("[/api/admin/analytics] Order items fetch error:", itemsError);
    }

    // ===== C. Sum real data safely =====
    const realRevenue = realOrders?.reduce(
      (sum, row) => sum + Number(row.total_amount || 0),
      0
    ) || 0;

    // Sum quantities from order_items (if no errors fetching)
    const realUnits = (!itemsError && realItems) 
      ? realItems.reduce((sum, row) => sum + Number(row.quantity || 0), 0)
      : 0;

    console.log("REAL revenue:", realRevenue);
    console.log("REAL units:", realUnits);

    // ===== D. Fetch ALL demo sales data (NO .single(), NO .limit(1)) =====
    const { data: demoData, error: demoError } = await supabaseAdmin
      .from("demo_sales_data")
      .select("revenue, units_sold, product_name");

    if (demoError) {
      console.error("[/api/admin/analytics] Demo data fetch error:", demoError);
    }

    // ===== E. Sum demo data safely =====
    const demoRevenue = demoData?.reduce(
      (sum, row) => sum + Number(row.revenue || 0),
      0
    ) || 0;

    const demoUnits = demoData?.reduce(
      (sum, row) => sum + Number(row.units_sold || 0),
      0
    ) || 0;

    console.log("DEMO revenue:", demoRevenue);
    console.log("DEMO units:", demoUnits);

    // ===== F. Combine final results =====
    const totalRevenue = realRevenue + demoRevenue;
    const unitsSold = realUnits + demoUnits;

    console.log("FINAL combined:", { totalRevenue, unitsSold });

    // ===== Build top products from demo data =====
    const productMap = new Map<string, { units_sold: number; revenue: number }>();

    // Add demo data to product map
    if (demoData && demoData.length > 0) {
      for (const row of demoData) {
        const productName = row.product_name || "Unknown";
        const units = Number(row.units_sold || 0);
        const revenue = Number(row.revenue || 0);

        const existing = productMap.get(productName);
        if (existing) {
          existing.units_sold += units;
          existing.revenue += revenue;
        } else {
          productMap.set(productName, { units_sold: units, revenue: revenue });
        }
      }
    }

    // Add real order items to product map
    if (realItems && realItems.length > 0) {
      for (const item of realItems) {
        const productId = item.product_id || "Unknown";
        const units = Number(item.quantity || 0);
        const itemRevenue = Number(item.price_at_purchase || 0) * units;

        const existing = productMap.get(`Product ${productId}`);
        if (existing) {
          existing.units_sold += units;
          existing.revenue += itemRevenue;
        } else {
          productMap.set(`Product ${productId}`, { units_sold: units, revenue: itemRevenue });
        }
      }
    }

    // Build top products list (sorted by units_sold descending, top 5)
    const topProducts: TopProduct[] = Array.from(productMap.entries())
      .map(([product_name, stats]) => ({
        product_name,
        units_sold: stats.units_sold,
        revenue: stats.revenue
      }))
      .sort((a, b) => b.units_sold - a.units_sold)
      .slice(0, 5);

    // Build category breakdown
    const categoryMap = new Map<string, { units_sold: number; revenue: number }>();

    // Add demo data to "Demo Products" category
    if (demoData && demoData.length > 0 && demoRevenue > 0) {
      categoryMap.set("Demo Products", { units_sold: demoUnits, revenue: demoRevenue });
    }

    // Add real orders to "Orders" category
    if (realRevenue > 0 || realUnits > 0) {
      const ordersCategory = categoryMap.get("Orders");
      if (ordersCategory) {
        ordersCategory.units_sold += realUnits;
        ordersCategory.revenue += realRevenue;
      } else {
        categoryMap.set("Orders", { units_sold: realUnits, revenue: realRevenue });
      }
    }

    const categoryBreakdown: CategoryBreakdown[] = Array.from(categoryMap.entries())
      .map(([category, stats]) => ({
        category,
        units_sold: stats.units_sold,
        revenue: stats.revenue
      }))
      .sort((a, b) => b.revenue - a.revenue);

    // ===== Generate AI recommendations =====
    let recommendations: string[] = [];
    try {
      const topProductNames = topProducts.map(p => p.product_name).join(", ");
      const topCategory = categoryBreakdown.length > 0 ? categoryBreakdown[0].category : "N/A";
      
      const prompt = `Based on these sales analytics:
- Total Revenue: ₹${totalRevenue.toFixed(2)}
- Total Units Sold: ${unitsSold}
- Top Selling Products: ${topProductNames || "None"}
- Top Category: ${topCategory}

Give exactly 3 short business recommendations. Each should be one sentence. Do not use markdown, bullet points, or numbering. Separate each recommendation with a pipe character (|).`;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 250,
        messages: [
          { role: "system", content: "You are a retail analytics expert. Give concise recommendations separated by | character. No markdown. Use ₹ for currency." },
          { role: "user", content: prompt }
        ]
      });

      const content = completion.choices[0]?.message?.content?.trim() || "";
      
      if (content.includes("|")) {
        recommendations = content
          .split("|")
          .map(r => r.trim())
          .filter(r => r.length > 0)
          .slice(0, 3);
      } else {
        recommendations = content
          .split(/[\n\r]+/)
          .map(line => line.replace(/^[\d\.\-\*\•]+\s*/, "").trim())
          .filter(line => line.length > 10)
          .slice(0, 3);
      }
      
      if (recommendations.length === 0) {
        throw new Error("No valid recommendations parsed");
      }
    } catch (aiError) {
      console.error("[/api/admin/analytics] AI recommendation error:", aiError);
      // Fallback recommendations
      if (topProducts.length > 0) {
        recommendations = [
          `Keep "${topProducts[0].product_name}" well-stocked - it's your top seller with ${topProducts[0].units_sold} units sold!`,
          `Focus marketing on your ${categoryBreakdown[0]?.category || "top"} category which generated ₹${(categoryBreakdown[0]?.revenue || totalRevenue).toFixed(2)} in revenue.`,
          `Consider bundle deals combining "${topProducts[0].product_name}" with other popular items to increase average order value.`
        ];
      } else {
        recommendations = [
          "Start tracking sales to get personalized recommendations.",
          "Add demo data to demo_sales_data table to see analytics.",
          "Create orders to see real-time performance metrics."
        ];
      }
    }

    console.log("[/api/admin/analytics] Analytics computed:", {
      totalRevenue,
      unitsSold,
      topProductsCount: topProducts.length,
      categoriesCount: categoryBreakdown.length
    });

    // ===== G. Return the final JSON =====
    return NextResponse.json({
      success: true,
      totalRevenue,
      totalUnits: unitsSold,
      unitsSold, // Alias for compatibility
      topProducts,
      categoryBreakdown,
      recommendations
    });

  } catch (err) {
    console.error("[/api/admin/analytics] Error:", err);
    return NextResponse.json({
      success: false,
      totalRevenue: 0,
      totalUnits: 0,
      unitsSold: 0,
      topProducts: [],
      categoryBreakdown: [],
      recommendations: ["An error occurred while fetching analytics."]
    });
  }
}

// POST endpoint for chat integration
export async function POST(req: NextRequest): Promise<NextResponse> {
  return GET(req);
}
