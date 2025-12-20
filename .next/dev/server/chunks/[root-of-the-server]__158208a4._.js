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
"[project]/lib/openai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GPT_CHAT_MODEL",
    ()=>GPT_CHAT_MODEL,
    "GPT_EMBEDDING_MODEL",
    ()=>GPT_EMBEDDING_MODEL,
    "GPT_TRANSLATE_MODEL",
    ()=>GPT_TRANSLATE_MODEL,
    "WHISPER_MODEL",
    ()=>WHISPER_MODEL,
    "createEmbedding",
    ()=>createEmbedding,
    "openai",
    ()=>openai,
    "transcribeAudio",
    ()=>transcribeAudio,
    "translateText",
    ()=>translateText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set.");
}
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
const GPT_CHAT_MODEL = process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini";
const GPT_TRANSLATE_MODEL = process.env.OPENAI_TRANSLATE_MODEL ?? "gpt-4o-mini";
const GPT_EMBEDDING_MODEL = process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small";
const WHISPER_MODEL = process.env.OPENAI_WHISPER_MODEL ?? "whisper-1";
async function translateText({ text, targetLanguage }) {
    const trimmed = text?.trim();
    if (!trimmed) {
        return "";
    }
    const completion = await openai.chat.completions.create({
        model: GPT_TRANSLATE_MODEL,
        messages: [
            {
                role: "system",
                content: "You are a translation engine. Return only the translated text, without quotes."
            },
            {
                role: "user",
                content: `Translate the following text to ${targetLanguage}. Text: """${trimmed}"""`
            }
        ],
        temperature: 0.2
    });
    return completion.choices[0]?.message?.content?.trim() ?? trimmed;
}
async function createEmbedding(input) {
    const normalized = input?.trim();
    if (!normalized) {
        return [];
    }
    const response = await openai.embeddings.create({
        model: GPT_EMBEDDING_MODEL,
        input: normalized
    });
    return response.data[0]?.embedding ?? [];
}
async function transcribeAudio(audioBuffer, language) {
    try {
        // Create a File-like object for the OpenAI API
        const file = new File([
            audioBuffer
        ], "audio.webm", {
            type: "audio/webm"
        });
        const response = await openai.audio.transcriptions.create({
            file,
            model: WHISPER_MODEL,
            language: language ? getWhisperLanguageCode(language) : undefined
        });
        return response.text || "";
    } catch (error) {
        console.error("Whisper transcription error:", error);
        throw error;
    }
}
// Map app language to Whisper language codes
function getWhisperLanguageCode(language) {
    const langMap = {
        english: "en",
        hindi: "hi",
        marathi: "mr",
        bengali: "bn",
        telugu: "te",
        tamil: "ta",
        gujarati: "gu",
        kannada: "kn",
        malayalam: "ml",
        punjabi: "pa",
        odia: "or",
        urdu: "ur",
        nepali: "ne",
        sinhala: "si",
        arabic: "ar"
    };
    return langMap[language.toLowerCase()] || "en";
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
async function GET(req) {
    console.log("[/api/admin/analytics] GET request received");
    try {
        // ===== A. Fetch ALL real orders (NO .single(), NO .limit(1)) =====
        const { data: realOrders, error: ordersError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("orders").select("total_amount");
        if (ordersError) {
            console.error("[/api/admin/analytics] Orders fetch error:", ordersError);
        }
        // ===== B. Fetch ALL real order items (NO .single(), NO .limit(1)) =====
        const { data: realItems, error: itemsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("order_items").select("quantity, product_id, price_at_purchase");
        if (itemsError) {
            console.error("[/api/admin/analytics] Order items fetch error:", itemsError);
        }
        // ===== C. Sum real data safely =====
        const realRevenue = realOrders?.reduce((sum, row)=>sum + Number(row.total_amount || 0), 0) || 0;
        // Sum quantities from order_items (if no errors fetching)
        const realUnits = !itemsError && realItems ? realItems.reduce((sum, row)=>sum + Number(row.quantity || 0), 0) : 0;
        console.log("REAL revenue:", realRevenue);
        console.log("REAL units:", realUnits);
        // ===== D. Fetch ALL demo sales data (NO .single(), NO .limit(1)) =====
        const { data: demoData, error: demoError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_sales_data").select("revenue, units_sold, product_name");
        if (demoError) {
            console.error("[/api/admin/analytics] Demo data fetch error:", demoError);
        }
        // ===== E. Sum demo data safely =====
        const demoRevenue = demoData?.reduce((sum, row)=>sum + Number(row.revenue || 0), 0) || 0;
        const demoUnits = demoData?.reduce((sum, row)=>sum + Number(row.units_sold || 0), 0) || 0;
        console.log("DEMO revenue:", demoRevenue);
        console.log("DEMO units:", demoUnits);
        // ===== F. Combine final results =====
        const totalRevenue = realRevenue + demoRevenue;
        const unitsSold = realUnits + demoUnits;
        console.log("FINAL combined:", {
            totalRevenue,
            unitsSold
        });
        // ===== Build top products from demo data =====
        const productMap = new Map();
        // Add demo data to product map
        if (demoData && demoData.length > 0) {
            for (const row of demoData){
                const productName = row.product_name || "Unknown";
                const units = Number(row.units_sold || 0);
                const revenue = Number(row.revenue || 0);
                const existing = productMap.get(productName);
                if (existing) {
                    existing.units_sold += units;
                    existing.revenue += revenue;
                } else {
                    productMap.set(productName, {
                        units_sold: units,
                        revenue: revenue
                    });
                }
            }
        }
        // Add real order items to product map
        if (realItems && realItems.length > 0) {
            for (const item of realItems){
                const productId = item.product_id || "Unknown";
                const units = Number(item.quantity || 0);
                const itemRevenue = Number(item.price_at_purchase || 0) * units;
                const existing = productMap.get(`Product ${productId}`);
                if (existing) {
                    existing.units_sold += units;
                    existing.revenue += itemRevenue;
                } else {
                    productMap.set(`Product ${productId}`, {
                        units_sold: units,
                        revenue: itemRevenue
                    });
                }
            }
        }
        // Build top products list (sorted by units_sold descending, top 5)
        const topProducts = Array.from(productMap.entries()).map(([product_name, stats])=>({
                product_name,
                units_sold: stats.units_sold,
                revenue: stats.revenue
            })).sort((a, b)=>b.units_sold - a.units_sold).slice(0, 5);
        // Build category breakdown
        const categoryMap = new Map();
        // Add demo data to "Demo Products" category
        if (demoData && demoData.length > 0 && demoRevenue > 0) {
            categoryMap.set("Demo Products", {
                units_sold: demoUnits,
                revenue: demoRevenue
            });
        }
        // Add real orders to "Orders" category
        if (realRevenue > 0 || realUnits > 0) {
            const ordersCategory = categoryMap.get("Orders");
            if (ordersCategory) {
                ordersCategory.units_sold += realUnits;
                ordersCategory.revenue += realRevenue;
            } else {
                categoryMap.set("Orders", {
                    units_sold: realUnits,
                    revenue: realRevenue
                });
            }
        }
        const categoryBreakdown = Array.from(categoryMap.entries()).map(([category, stats])=>({
                category,
                units_sold: stats.units_sold,
                revenue: stats.revenue
            })).sort((a, b)=>b.revenue - a.revenue);
        // ===== Generate AI recommendations =====
        let recommendations = [];
        try {
            const topProductNames = topProducts.map((p)=>p.product_name).join(", ");
            const topCategory = categoryBreakdown.length > 0 ? categoryBreakdown[0].category : "N/A";
            const prompt = `Based on these sales analytics:
- Total Revenue: ₹${totalRevenue.toFixed(2)}
- Total Units Sold: ${unitsSold}
- Top Selling Products: ${topProductNames || "None"}
- Top Category: ${topCategory}

Give exactly 3 short business recommendations. Each should be one sentence. Do not use markdown, bullet points, or numbering. Separate each recommendation with a pipe character (|).`;
            const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
                model: "gpt-3.5-turbo",
                temperature: 0.7,
                max_tokens: 250,
                messages: [
                    {
                        role: "system",
                        content: "You are a retail analytics expert. Give concise recommendations separated by | character. No markdown. Use ₹ for currency."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            });
            const content = completion.choices[0]?.message?.content?.trim() || "";
            if (content.includes("|")) {
                recommendations = content.split("|").map((r)=>r.trim()).filter((r)=>r.length > 0).slice(0, 3);
            } else {
                recommendations = content.split(/[\n\r]+/).map((line)=>line.replace(/^[\d\.\-\*\•]+\s*/, "").trim()).filter((line)=>line.length > 10).slice(0, 3);
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            totalRevenue,
            totalUnits: unitsSold,
            unitsSold,
            topProducts,
            categoryBreakdown,
            recommendations
        });
    } catch (err) {
        console.error("[/api/admin/analytics] Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            totalRevenue: 0,
            totalUnits: 0,
            unitsSold: 0,
            topProducts: [],
            categoryBreakdown: [],
            recommendations: [
                "An error occurred while fetching analytics."
            ]
        });
    }
}
async function POST(req) {
    return GET(req);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__158208a4._.js.map