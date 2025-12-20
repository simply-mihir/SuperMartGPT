module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
// Server-only Supabase admin client using service role key.
// Prefer SUPABASE_URL, but fall back to NEXT_PUBLIC_SUPABASE_URL to match the rest of the app.
const supabaseUrl = process.env.SUPABASE_URL || ("TURBOPACK compile-time value", "https://rwrfszbfvlywjzhdjdjt.supabase.co");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceRoleKey) {
    console.error("[supabaseAdmin] Missing Supabase env vars. Expected SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
    throw new Error("Supabase environment variables are missing for admin client. Please set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY.");
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, serviceRoleKey, {
    auth: {
        persistSession: false,
        detectSessionInUrl: false
    }
});
}),
"[project]/app/api/admin/analytics/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
;
;
const runtime = "nodejs";
async function GET(req) {
    console.log("[/api/admin/analytics] GET request received");
    try {
        // Fetch all sales data
        const { data: salesData, error: salesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_sales_data").select("product_id, product_name, category, quantity_sold, revenue, sale_date").order("sale_date", {
            ascending: false
        });
        if (salesError) {
            console.error("[/api/admin/analytics] Sales data fetch error:", salesError);
        }
        const sales = salesData || [];
        // Handle empty data case
        if (sales.length === 0) {
            console.log("[/api/admin/analytics] No sales data found");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                summary: {
                    top_sellers: [],
                    revenue_by_date: [],
                    total_revenue: 0,
                    total_units: 0,
                    message: "No sales data available yet. Please add records to demo_sales_data table."
                },
                raw: []
            });
        }
        // Aggregate by product for top sellers
        const productMap = new Map();
        // Aggregate by date for revenue trend
        const dateMap = new Map();
        let totalRevenue = 0;
        let totalUnits = 0;
        for (const sale of sales){
            const productKey = sale.product_name || "Unknown";
            const date = sale.sale_date ? sale.sale_date.split("T")[0] : "Unknown";
            const units = sale.quantity_sold || 0;
            const revenue = sale.revenue || 0;
            totalRevenue += revenue;
            totalUnits += units;
            // Product aggregation
            const existing = productMap.get(productKey);
            if (existing) {
                existing.total_units += units;
                existing.total_revenue += revenue;
            } else {
                productMap.set(productKey, {
                    product_name: productKey,
                    total_units: units,
                    total_revenue: revenue
                });
            }
            // Date aggregation
            const dateExisting = dateMap.get(date);
            if (dateExisting !== undefined) {
                dateMap.set(date, dateExisting + revenue);
            } else {
                dateMap.set(date, revenue);
            }
        }
        // Sort top sellers by total_units descending
        const topSellers = Array.from(productMap.values()).sort((a, b)=>b.total_units - a.total_units).slice(0, 10);
        // Sort revenue by date ascending for trend
        const revenueByDate = Array.from(dateMap.entries()).map(([date, revenue])=>({
                date,
                revenue
            })).sort((a, b)=>a.date.localeCompare(b.date)).slice(-30); // Last 30 days
        const summary = {
            top_sellers: topSellers,
            revenue_by_date: revenueByDate,
            total_revenue: totalRevenue,
            total_units: totalUnits
        };
        console.log("[/api/admin/analytics] Generated summary:", {
            topSellersCount: topSellers.length,
            revenueByDateCount: revenueByDate.length,
            totalRevenue,
            totalUnits
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            summary,
            raw: sales
        });
    } catch (err) {
        console.error("[/api/admin/analytics] Error:", err);
        const message = err instanceof Error ? err.message : "Failed to fetch analytics";
        // Always return valid JSON even on error
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: message,
            summary: {
                top_sellers: [],
                revenue_by_date: [],
                total_revenue: 0,
                total_units: 0,
                message: "Error loading analytics data."
            },
            raw: []
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    console.log("[/api/admin/analytics] POST request received");
    try {
        // Reuse GET logic internally
        const getResponse = await GET(req);
        const data = await getResponse.json();
        if (!data.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                report: "Unable to load analytics data at this time."
            });
        }
        const { summary } = data;
        // Handle no data case
        if (!summary.top_sellers || summary.top_sellers.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                report: `📊 **Sales Analytics Report**\n\n${summary.message || "No sales data available yet."}\n\nOnce sales are recorded in demo_sales_data, you'll see:\n• Top selling products\n• Revenue trends\n• Performance insights`
            });
        }
        // Build formatted text report
        let report = `📊 **Sales Analytics Report**\n\n`;
        report += `💵 **Overall Performance**\n`;
        report += `• Total Revenue: ₹${summary.total_revenue.toFixed(2)}\n`;
        report += `• Total Units Sold: ${summary.total_units}\n\n`;
        report += `🏆 **Top Sellers**\n`;
        summary.top_sellers.slice(0, 5).forEach((item, i)=>{
            report += `${i + 1}. ${item.product_name} - ${item.total_units} units (₹${item.total_revenue.toFixed(2)})\n`;
        });
        report += `\n`;
        if (summary.revenue_by_date && summary.revenue_by_date.length > 0) {
            report += `📈 **Recent Revenue Trend**\n`;
            summary.revenue_by_date.slice(-5).forEach((item)=>{
                report += `• ${item.date}: ₹${item.revenue.toFixed(2)}\n`;
            });
            report += `\n`;
        }
        report += `💡 **Insights**\n`;
        if (summary.top_sellers.length > 0) {
            report += `• "${summary.top_sellers[0].product_name}" is your best seller!\n`;
        }
        if (summary.total_revenue > 0) {
            const avgOrderValue = summary.total_revenue / (summary.total_units || 1);
            report += `• Average order value: ₹${avgOrderValue.toFixed(2)}\n`;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            report,
            summary
        });
    } catch (err) {
        console.error("[/api/admin/analytics] POST Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            report: "Sorry, I couldn't generate the analytics report right now."
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef7d237e._.js.map