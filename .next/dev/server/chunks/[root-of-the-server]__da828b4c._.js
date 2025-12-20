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
"[project]/lib/translate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6071d8c90d0eb3dc46da10a8ae4cbd0598a7835845":"batchTranslate","60b110c6f54255b4e2ed05a84849235098f9f71933":"safeTranslate","60b8e174ed38f8e14d3a9c114376dd1568a2abce90":"translateTextStrict"},"",""] */ __turbopack_context__.s([
    "batchTranslate",
    ()=>batchTranslate,
    "safeTranslate",
    ()=>safeTranslate,
    "translateTextStrict",
    ()=>translateTextStrict
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
// Language code to full name mapping
const languageNames = {
    "en-US": "English",
    "en": "English",
    "hi-IN": "Hindi",
    "hi": "Hindi",
    "mr-IN": "Marathi",
    "mr": "Marathi",
    "bn-IN": "Bengali",
    "bn": "Bengali",
    "te-IN": "Telugu",
    "te": "Telugu",
    "ta-IN": "Tamil",
    "ta": "Tamil",
    "gu-IN": "Gujarati",
    "gu": "Gujarati",
    "kn-IN": "Kannada",
    "kn": "Kannada",
    "ml-IN": "Malayalam",
    "ml": "Malayalam",
    "pa-IN": "Punjabi",
    "pa": "Punjabi",
    "or-IN": "Odia",
    "or": "Odia",
    "ur-PK": "Urdu",
    "ur": "Urdu",
    "ne-NP": "Nepali",
    "ne": "Nepali",
    "si-LK": "Sinhala",
    "si": "Sinhala",
    "ar-SA": "Arabic",
    "ar": "Arabic"
};
// Get full language name from code
function getLanguageName(langCode) {
    return languageNames[langCode] || languageNames[langCode.split("-")[0]] || langCode;
}
async function translateTextStrict(text, targetLanguage) {
    const trimmed = text?.trim();
    if (!trimmed) return "";
    // Skip translation if target is English
    if (targetLanguage.toLowerCase().startsWith("en")) {
        return trimmed;
    }
    const langName = getLanguageName(targetLanguage);
    const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GPT_TRANSLATE_MODEL"],
        messages: [
            {
                role: "system",
                content: "You are a translation engine. Return only the translated text with no extra commentary."
            },
            {
                role: "user",
                content: `Translate this text to ${langName}: """${trimmed}"""`
            }
        ],
        temperature: 0.2
    });
    return completion.choices[0]?.message?.content?.trim() ?? trimmed;
}
async function safeTranslate(text, targetLanguage) {
    try {
        if (!text || !text.trim()) return text || "";
        // Skip translation if target is English
        if (targetLanguage.toLowerCase().startsWith("en")) {
            return text;
        }
        const translated = await translateTextStrict(text, targetLanguage);
        return translated || text;
    } catch (error) {
        console.error("[safeTranslate] Translation failed, returning original:", error);
        return text || "";
    }
}
async function batchTranslate(texts, targetLanguage) {
    // Skip translation if target is English
    if (targetLanguage.toLowerCase().startsWith("en")) {
        return texts;
    }
    return Promise.all(texts.map((text)=>safeTranslate(text, targetLanguage)));
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    translateTextStrict,
    safeTranslate,
    batchTranslate
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(translateTextStrict, "60b8e174ed38f8e14d3a9c114376dd1568a2abce90", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(safeTranslate, "60b110c6f54255b4e2ed05a84849235098f9f71933", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(batchTranslate, "6071d8c90d0eb3dc46da10a8ae4cbd0598a7835845", null);
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translate.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
// Language name to code mapping
const languageCodeMap = {
    english: "en-US",
    hindi: "hi-IN",
    marathi: "mr-IN",
    bengali: "bn-IN",
    telugu: "te-IN",
    tamil: "ta-IN",
    gujarati: "gu-IN",
    kannada: "kn-IN",
    malayalam: "ml-IN",
    punjabi: "pa-IN",
    odia: "or-IN",
    urdu: "ur-PK",
    nepali: "ne-NP",
    sinhala: "si-LK",
    arabic: "ar-SA"
};
// Admin mode trigger keywords
const ADMIN_KEYWORDS = [
    "admin",
    "sales analysis",
    "show analytics",
    "analytics",
    "sales report",
    "revenue report"
];
const DEFAULT_USER_ID = "user1";
// Check if message is an admin query
function isAdminQuery(message) {
    const lowerMessage = message.toLowerCase();
    return ADMIN_KEYWORDS.some((keyword)=>lowerMessage.includes(keyword));
}
// Detect category from message for user preferences
function detectCategory(message) {
    const lowerMessage = message.toLowerCase();
    const categoryMap = {
        fruit: "Fruits",
        fruits: "Fruits",
        apple: "Fruits",
        banana: "Fruits",
        mango: "Fruits",
        orange: "Fruits",
        vegetable: "Vegetables",
        vegetables: "Vegetables",
        tomato: "Vegetables",
        potato: "Vegetables",
        onion: "Vegetables",
        carrot: "Vegetables",
        milk: "Daily Essentials",
        bread: "Daily Essentials",
        eggs: "Daily Essentials",
        dairy: "Daily Essentials",
        snack: "Snacks",
        snacks: "Snacks",
        chips: "Snacks",
        cookies: "Snacks",
        shampoo: "Personal Care",
        soap: "Personal Care",
        toothpaste: "Personal Care",
        detergent: "Household",
        cleaner: "Household",
        household: "Household"
    };
    for (const [keyword, category] of Object.entries(categoryMap)){
        if (lowerMessage.includes(keyword)) {
            return category;
        }
    }
    return null;
}
// Fetch user profile from demo_user_history
async function getUserProfile(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_user_history").select("*").eq("user_id", userId).single();
        if (error && error.code !== "PGRST116") {
            console.error("[CHAT] Error fetching user profile:", error);
            return null;
        }
        if (data) {
            return data;
        }
        // Create new profile if not exists
        const newProfile = {
            user_id: userId,
            recent_searches: [],
            liked_categories: [],
            recommended_products: [],
            last_active: new Date().toISOString(),
            created_at: new Date().toISOString()
        };
        const { data: created, error: createError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_user_history").insert([
            newProfile
        ]).select().single();
        if (createError) {
            console.error("[CHAT] Error creating user profile:", createError);
            return newProfile;
        }
        return created;
    } catch (err) {
        console.error("[CHAT] getUserProfile error:", err);
        return null;
    }
}
// Update user profile with new search
async function updateUserSearch(userId, search, category) {
    try {
        const profile = await getUserProfile(userId);
        if (!profile) return;
        const recentSearches = profile.recent_searches || [];
        const likedCategories = profile.liked_categories || [];
        // Add search to recent (max 10)
        if (!recentSearches.includes(search)) {
            recentSearches.unshift(search);
            if (recentSearches.length > 10) recentSearches.pop();
        }
        // Add category if detected
        if (category && !likedCategories.includes(category)) {
            likedCategories.unshift(category);
            if (likedCategories.length > 10) likedCategories.pop();
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_user_history").update({
            recent_searches: recentSearches,
            liked_categories: likedCategories,
            last_active: new Date().toISOString()
        }).eq("user_id", userId);
    } catch (err) {
        console.error("[CHAT] updateUserSearch error:", err);
    }
}
// Fetch frequently bought together associations
async function getAssociations(productNames) {
    try {
        if (productNames.length === 0) return [];
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_associations").select("*").or(productNames.map((name)=>`product_name.ilike.%${name}%`).join(",")).order("frequency", {
            ascending: false
        }).limit(5);
        if (error) {
            console.error("[CHAT] Error fetching associations:", error);
            return [];
        }
        return data || [];
    } catch (err) {
        console.error("[CHAT] getAssociations error:", err);
        return [];
    }
}
// Generate admin analytics response from Supabase data only (NO OpenAI)
async function generateAdminResponse() {
    try {
        // Fetch sales data
        const { data: salesData, error: salesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("demo_sales_data").select("product_id, product_name, category, quantity_sold, revenue").order("revenue", {
            ascending: false
        });
        if (salesError) {
            console.error("[CHAT] Admin sales fetch error:", salesError);
        }
        const sales = salesData || [];
        if (sales.length === 0) {
            return `📊 **Sales Analytics Report**\n\nNo sales data available yet. Once you have sales recorded in the demo_sales_data table, I'll be able to show you:\n• Top selling products\n• Revenue leaders\n• Category performance\n• Strategic recommendations\n\nWould you like help setting up demo data?`;
        }
        // Aggregate data
        const productMap = new Map();
        const categoryMap = new Map();
        let totalRevenue = 0;
        let totalQuantity = 0;
        for (const sale of sales){
            const key = String(sale.product_id);
            totalRevenue += sale.revenue || 0;
            totalQuantity += sale.quantity_sold || 0;
            const existing = productMap.get(key);
            if (existing) {
                existing.quantity += sale.quantity_sold || 0;
                existing.revenue += sale.revenue || 0;
            } else {
                productMap.set(key, {
                    name: sale.product_name || "Unknown",
                    category: sale.category || "Other",
                    quantity: sale.quantity_sold || 0,
                    revenue: sale.revenue || 0
                });
            }
            const cat = sale.category || "Other";
            const catExisting = categoryMap.get(cat);
            if (catExisting) {
                catExisting.revenue += sale.revenue || 0;
                catExisting.quantity += sale.quantity_sold || 0;
            } else {
                categoryMap.set(cat, {
                    revenue: sale.revenue || 0,
                    quantity: sale.quantity_sold || 0
                });
            }
        }
        const allProducts = Array.from(productMap.values());
        const topSellers = [
            ...allProducts
        ].sort((a, b)=>b.quantity - a.quantity).slice(0, 5);
        const revenueLeaders = [
            ...allProducts
        ].sort((a, b)=>b.revenue - a.revenue).slice(0, 5);
        const categoryTrends = Array.from(categoryMap.entries()).map(([name, data])=>({
                name,
                ...data
            })).sort((a, b)=>b.revenue - a.revenue);
        // Build formatted report
        let report = `📊 **Sales Analytics Report**\n\n`;
        report += `💵 **Overall Performance**\n`;
        report += `• Total Revenue: ₹${totalRevenue.toFixed(2)}\n`;
        report += `• Total Units Sold: ${totalQuantity}\n`;
        report += `• Products Tracked: ${allProducts.length}\n\n`;
        report += `🏆 **Top 5 Best Sellers**\n`;
        topSellers.forEach((p, i)=>{
            report += `${i + 1}. ${p.name} - ${p.quantity} units sold\n`;
        });
        report += `\n`;
        report += `💰 **Revenue Leaders**\n`;
        revenueLeaders.forEach((p, i)=>{
            report += `${i + 1}. ${p.name} - ₹${p.revenue.toFixed(2)}\n`;
        });
        report += `\n`;
        report += `📦 **Category Trends**\n`;
        categoryTrends.slice(0, 5).forEach((c)=>{
            report += `• ${c.name}: ₹${c.revenue.toFixed(2)} (${c.quantity} units)\n`;
        });
        report += `\n`;
        report += `💡 **Recommendations**\n`;
        if (topSellers.length > 0) {
            report += `• Keep "${topSellers[0].name}" well-stocked - it's your top performer!\n`;
        }
        if (categoryTrends.length > 0) {
            report += `• Focus on "${categoryTrends[0].name}" category for maximum revenue.\n`;
        }
        const lowPerformers = [
            ...allProducts
        ].sort((a, b)=>a.quantity - b.quantity).slice(0, 2);
        if (lowPerformers.length > 0 && lowPerformers[0].quantity < 10) {
            report += `• Consider promotions for "${lowPerformers[0].name}" to boost sales.\n`;
        }
        return report;
    } catch (err) {
        console.error("[CHAT] Admin response error:", err);
        return "Sorry, I couldn't fetch the analytics data. Please make sure the demo_sales_data table is set up correctly.";
    }
}
async function POST(req) {
    try {
        // Parse request body safely
        let body;
        try {
            body = await req.json();
        } catch (parseError) {
            console.error("CHAT ROUTE ERROR: Failed to parse request body", parseError);
            return Response.json({
                success: false,
                reply: "Sorry, I couldn't understand your request.",
                relatedProducts: []
            }, {
                status: 400
            });
        }
        const { message, language: rawLanguage } = body;
        const userMessage = message?.trim() || "";
        // Convert language name to code if needed
        const language = rawLanguage ? languageCodeMap[rawLanguage.toLowerCase()] || rawLanguage : "en-US";
        if (!userMessage) {
            return Response.json({
                success: false,
                reply: "Please provide a message.",
                relatedProducts: []
            }, {
                status: 400
            });
        }
        console.log("[CHAT] Processing message:", userMessage, "Language:", language);
        // Check if this is an admin query - use Supabase data only, no OpenAI
        if (isAdminQuery(userMessage)) {
            console.log("[CHAT] Admin mode detected, generating analytics from Supabase");
            let adminReply = await generateAdminResponse();
            // Translate if not English
            const isEnglish = !language || language.toLowerCase().startsWith("en");
            if (!isEnglish) {
                try {
                    adminReply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(adminReply, language);
                } catch (translateError) {
                    console.error("[CHAT] Admin response translation error:", translateError);
                }
            }
            return Response.json({
                success: true,
                reply: adminReply,
                relatedProducts: [],
                isAdminMode: true
            });
        }
        // Regular chat mode - personalized AI
        const userId = DEFAULT_USER_ID;
        // Fetch user profile for personalization
        const userProfile = await getUserProfile(userId);
        const detectedCategory = detectCategory(userMessage);
        // Update user search history (non-blocking)
        updateUserSearch(userId, userMessage, detectedCategory).catch(()=>{});
        // Initialize variables with safe defaults
        let reply = "I'm not sure how to answer that yet, but I'm learning more about our catalog every day!";
        let relatedProducts = [];
        // Try to fetch related products from database
        try {
            const { data: matchedProducts } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, description, price, category").or(`name.ilike.%${userMessage}%,description.ilike.%${userMessage}%`).limit(5);
            if (matchedProducts && matchedProducts.length > 0) {
                relatedProducts = matchedProducts.map((p)=>({
                        name: p.name || "Unknown Product",
                        price: typeof p.price === "number" ? p.price : 0
                    }));
            }
        } catch (dbError) {
            console.error("CHAT ROUTE ERROR: Database query failed", dbError);
        }
        // Fetch associations for "frequently bought together" suggestions
        let associations = [];
        if (relatedProducts.length > 0) {
            associations = await getAssociations(relatedProducts.map((p)=>p.name));
        }
        // Build personalization context
        let personalizationContext = "";
        if (userProfile) {
            const recentSearches = userProfile.recent_searches || [];
            const likedCategories = userProfile.liked_categories || [];
            if (recentSearches.length > 0 || likedCategories.length > 0) {
                personalizationContext = `\n\nUser Preferences:
- Recent searches: ${recentSearches.slice(0, 5).join(", ") || "None"}
- Favorite categories: ${likedCategories.slice(0, 5).join(", ") || "None"}`;
            }
        }
        // Build associations context
        let associationsContext = "";
        if (associations.length > 0) {
            associationsContext = `\n\nFrequently bought together with searched items:
${associations.map((a)=>`- ${a.product_name} is often bought with ${a.associated_product_name}`).join("\n")}`;
        }
        // Try to get AI response
        try {
            const systemPrompt = `You are SuperMartGPT, a helpful and friendly grocery shopping assistant for an online supermarket.
      
Your role is to:
- Help customers find products they're looking for
- Answer questions about products, prices, and availability
- Provide helpful suggestions and recommendations based on user preferences
- Be concise and friendly in your responses
- When the user has preferences, acknowledge them naturally: "Since you often browse [category], here are some suggestions..."

${personalizationContext}
${associationsContext}

Available products context: Use only products from the supermarket inventory for recommendations.
Keep responses brief and helpful. Don't use markdown formatting.`;
            const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
                model: "gpt-3.5-turbo",
                temperature: 0.7,
                max_tokens: 300,
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ]
            });
            reply = completion.choices[0]?.message?.content?.trim() || reply;
        } catch (aiError) {
            console.error("CHAT ROUTE ERROR: OpenAI API call failed", aiError);
            reply = "I'm having a bit of trouble connecting to my brain right now. Could you try asking again?";
        }
        // If no related products from DB, provide some defaults
        if (relatedProducts.length === 0) {
            try {
                // Try to get products matching user's favorite categories
                let categoryFilter = "";
                if (userProfile?.liked_categories && userProfile.liked_categories.length > 0) {
                    categoryFilter = userProfile.liked_categories[0];
                }
                const { data: defaultProducts } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("name, price, category").limit(3);
                if (defaultProducts && defaultProducts.length > 0) {
                    relatedProducts = defaultProducts.map((p)=>({
                            name: p.name || "Product",
                            price: typeof p.price === "number" ? p.price : 0
                        }));
                }
            } catch (fallbackError) {
                console.error("CHAT ROUTE ERROR: Fallback product query failed", fallbackError);
            }
        }
        // Ensure relatedProducts is always an array
        relatedProducts = relatedProducts || [];
        // Translate reply and products if language is not English
        const isEnglish = !language || language.toLowerCase().startsWith("en");
        let finalReply = reply;
        if (!isEnglish && language) {
            try {
                finalReply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(reply, language);
            } catch (translateError) {
                console.error("CHAT ROUTE ERROR: Reply translation failed", translateError);
                finalReply = reply;
            }
        }
        // Translate related product names if not English
        let translatedProducts = relatedProducts;
        if (!isEnglish && language && relatedProducts.length > 0) {
            try {
                translatedProducts = await Promise.all(relatedProducts.map(async (p)=>({
                        name: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(p.name, language),
                        price: p.price
                    })));
            } catch (productTranslateError) {
                console.error("CHAT ROUTE ERROR: Product translation failed", productTranslateError);
                translatedProducts = relatedProducts;
            }
        }
        // Always return a valid response
        return Response.json({
            success: true,
            reply: finalReply,
            relatedProducts: translatedProducts
        });
    } catch (err) {
        console.error("CHAT ROUTE ERROR:", err);
        return Response.json({
            success: false,
            reply: "Sorry, I'm having trouble responding right now. Please try again!",
            relatedProducts: []
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__da828b4c._.js.map