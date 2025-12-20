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
"[project]/lib/products.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findProductsByQuery",
    ()=>findProductsByQuery,
    "getSuggestedProducts",
    ()=>getSuggestedProducts,
    "hasAddToCartIntent",
    ()=>hasAddToCartIntent,
    "parseAddToCartIntent",
    ()=>parseAddToCartIntent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
;
function parseAddToCartIntent(query) {
    const lowerQuery = query.toLowerCase().trim();
    // Remove common cart-related phrases to isolate product
    const cleanQuery = lowerQuery.replace(/add\s+/gi, "").replace(/put\s+/gi, "").replace(/place\s+/gi, "").replace(/i\s+want\s+to\s+buy\s+/gi, "").replace(/buy\s+/gi, "").replace(/to\s+(my\s+)?cart/gi, "").replace(/in\s+(my\s+)?cart/gi, "").replace(/into\s+(my\s+)?cart/gi, "").replace(/packets?\s+of\s+/gi, "").replace(/pieces?\s+of\s+/gi, "").replace(/kg\s+of\s+/gi, "").replace(/liters?\s+of\s+/gi, "").trim();
    // Try to extract quantity
    let quantity = 1;
    let productQuery = cleanQuery;
    // Pattern: "2 maggi" or "3 bread"
    const numFirstMatch = cleanQuery.match(/^(\d+)\s+(.+)$/);
    if (numFirstMatch) {
        quantity = parseInt(numFirstMatch[1], 10) || 1;
        productQuery = numFirstMatch[2].trim();
    }
    // Pattern: "maggi x 2" or "bread x3"
    const numLastMatch = cleanQuery.match(/^(.+?)\s*x\s*(\d+)$/i);
    if (numLastMatch) {
        productQuery = numLastMatch[1].trim();
        quantity = parseInt(numLastMatch[2], 10) || 1;
    }
    // Pattern: "two maggi" or "three bread" (word numbers)
    const wordNumbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10
    };
    for (const [word, num] of Object.entries(wordNumbers)){
        const wordMatch = cleanQuery.match(new RegExp(`^${word}\\s+(.+)$`, "i"));
        if (wordMatch) {
            quantity = num;
            productQuery = wordMatch[1].trim();
            break;
        }
    }
    // Ensure quantity is reasonable
    quantity = Math.max(1, Math.min(quantity, 99));
    return {
        quantity,
        productQuery
    };
}
async function findProductsByQuery(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) {
        return [];
    }
    console.log("[findProductsByQuery] Searching for:", searchTerm);
    try {
        // Step 1: Try exact match on name (case-insensitive)
        const { data: exactMatches, error: exactError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, price, description").ilike("name", searchTerm).limit(5);
        if (exactError) {
            console.error("[findProductsByQuery] Exact match error:", exactError);
        }
        console.log("[findProductsByQuery] Exact match result:", {
            count: exactMatches?.length,
            error: exactError?.message
        });
        if (exactMatches && exactMatches.length > 0) {
            console.log("[findProductsByQuery] Found exact matches:", exactMatches.length);
            return exactMatches.map((p)=>({
                    id: p.id,
                    name: p.name,
                    price: p.price || 0,
                    description: p.description || undefined,
                    category: undefined,
                    score: 100
                }));
        }
        // Step 2: Try fuzzy match using ILIKE with wildcards
        const { data: fuzzyMatches, error: fuzzyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, price, description").ilike("name", `%${searchTerm}%`).limit(10);
        if (fuzzyError) {
            console.error("[findProductsByQuery] Fuzzy match error:", fuzzyError);
        }
        console.log("[findProductsByQuery] Fuzzy match result:", {
            count: fuzzyMatches?.length,
            error: fuzzyError?.message
        });
        if (fuzzyMatches && fuzzyMatches.length > 0) {
            console.log("[findProductsByQuery] Found fuzzy matches:", fuzzyMatches.length);
            // Score fuzzy matches by how well they match
            const scoredMatches = fuzzyMatches.map((p)=>{
                const nameLower = p.name?.toLowerCase() || "";
                let score = 50; // Base fuzzy score
                // Boost score if search term is at the start
                if (nameLower.startsWith(searchTerm)) {
                    score += 30;
                }
                // Boost score based on similarity ratio
                const similarity = searchTerm.length / nameLower.length;
                score += Math.round(similarity * 20);
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price || 0,
                    description: p.description || undefined,
                    category: undefined,
                    score
                };
            });
            // Sort by score descending and return top 5
            return scoredMatches.sort((a, b)=>b.score - a.score).slice(0, 5);
        }
        // Step 3: Try matching against description as last resort
        const { data: descMatches, error: descError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, price, description").ilike("description", `%${searchTerm}%`).limit(5);
        if (descError) {
            console.error("[findProductsByQuery] Description match error:", descError);
        }
        console.log("[findProductsByQuery] Description match result:", {
            count: descMatches?.length,
            error: descError?.message
        });
        if (descMatches && descMatches.length > 0) {
            console.log("[findProductsByQuery] Found description matches:", descMatches.length);
            return descMatches.map((p)=>({
                    id: p.id,
                    name: p.name,
                    price: p.price || 0,
                    description: p.description || undefined,
                    category: undefined,
                    score: 30
                }));
        }
        // No matches found - let's try getting all products and matching manually
        console.log("[findProductsByQuery] No matches found with ILIKE, trying manual search");
        const { data: allProducts, error: allError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, price, description").limit(100);
        if (allError) {
            console.error("[findProductsByQuery] All products error:", allError);
        } else if (allProducts) {
            console.log("[findProductsByQuery] Loaded all products:", allProducts.length);
            // Manual fuzzy search
            const manualMatches = allProducts.filter((p)=>{
                const nameLower = (p.name || "").toLowerCase();
                return nameLower.includes(searchTerm) || searchTerm.includes(nameLower.split(" ")[0]);
            });
            if (manualMatches.length > 0) {
                console.log("[findProductsByQuery] Found manual matches:", manualMatches.length);
                return manualMatches.slice(0, 5).map((p)=>({
                        id: p.id,
                        name: p.name,
                        price: p.price || 0,
                        description: p.description || undefined,
                        category: undefined,
                        score: 40
                    }));
            }
        }
        // No matches found
        console.log("[findProductsByQuery] No matches found for:", searchTerm);
        return [];
    } catch (err) {
        console.error("[findProductsByQuery] Error:", err);
        return [];
    }
}
async function getSuggestedProducts(limit = 3) {
    try {
        console.log("[getSuggestedProducts] Fetching suggestions, limit:", limit);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, price, description").limit(limit);
        if (error) {
            console.error("[getSuggestedProducts] Error:", error);
            return [];
        }
        console.log("[getSuggestedProducts] Fetched:", data?.length || 0, "products");
        return (data || []).map((p)=>({
                id: p.id,
                name: p.name,
                price: p.price || 0,
                description: p.description || undefined,
                category: undefined,
                score: 0
            }));
    } catch (err) {
        console.error("[getSuggestedProducts] Error:", err);
        return [];
    }
}
function hasAddToCartIntent(message) {
    const lowerMessage = message.toLowerCase();
    // Must contain at least one action word and one cart-related word
    const actionWords = [
        "add",
        "put",
        "place",
        "buy",
        "want",
        "need",
        "get"
    ];
    const cartWords = [
        "cart",
        "basket",
        "bag",
        "order"
    ];
    const hasAction = actionWords.some((word)=>lowerMessage.includes(word));
    const hasCart = cartWords.some((word)=>lowerMessage.includes(word));
    // Also match patterns like "add <product>" without explicit cart mention
    const addPatterns = [
        /^add\s+\d*\s*\w+/i,
        /^put\s+\d*\s*\w+/i,
        /^buy\s+\d*\s*\w+/i,
        /i\s+want\s+(to\s+)?buy\s+/i,
        /add\s+.+\s+to\s+(my\s+)?cart/i,
        /put\s+.+\s+in\s+(my\s+)?cart/i
    ];
    const matchesPattern = addPatterns.some((pattern)=>pattern.test(lowerMessage));
    return hasAction && hasCart || matchesPattern;
}
}),
"[project]/app/api/cart/intent-add/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = "nodejs";
async function POST(req) {
    console.log("[/api/cart/intent-add] POST request received");
    try {
        const body = await req.json();
        const { userId = "user1", query, language = "en-US" } = body;
        if (!query || typeof query !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                intent: "add_to_cart",
                message: "No query provided"
            });
        }
        console.log("[/api/cart/intent-add] Processing query:", query, "for user:", userId);
        // Parse the intent to extract quantity and product name
        const { quantity, productQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAddToCartIntent"])(query);
        console.log("[/api/cart/intent-add] Parsed:", {
            quantity,
            productQuery
        });
        if (!productQuery) {
            const message = await translateMessage("I couldn't understand which product you want to add. Please specify a product name.", language);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                intent: "add_to_cart",
                message
            });
        }
        // Find matching products
        const matches = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findProductsByQuery"])(productQuery);
        console.log("[/api/cart/intent-add] Found matches:", matches.length);
        if (matches.length === 0) {
            // No product found - get suggestions
            const suggestions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSuggestedProducts"])(3);
            const suggestionNames = suggestions.map((s)=>s.name).join(", ");
            const message = await translateMessage(`Sorry, I couldn't find '${productQuery}'. Did you mean: ${suggestionNames || "another product"}?`, language);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                intent: "add_to_cart",
                message,
                suggestions
            });
        }
        // Use the best match
        const bestMatch = matches[0];
        console.log("[/api/cart/intent-add] Best match:", bestMatch.name, "Score:", bestMatch.score);
        // Add to cart in Supabase (cart_items table)
        try {
            // Check if item already exists in cart
            const { data: existingItem, error: checkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("cart_items").select("id, quantity").eq("user_id", userId).eq("product_id", bestMatch.id).single();
            if (checkError && checkError.code !== "PGRST116") {
                console.error("[/api/cart/intent-add] Cart check error:", checkError);
            }
            if (existingItem) {
                // Update existing cart item
                const newQuantity = (existingItem.quantity || 0) + quantity;
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("cart_items").update({
                    quantity: newQuantity
                }).eq("id", existingItem.id);
                if (updateError) {
                    console.error("[/api/cart/intent-add] Cart update error:", updateError);
                } else {
                    console.log("[/api/cart/intent-add] Updated cart item quantity to:", newQuantity);
                }
            } else {
                // Insert new cart item
                const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("cart_items").insert([
                    {
                        user_id: userId,
                        product_id: bestMatch.id,
                        quantity: quantity,
                        created_at: new Date().toISOString()
                    }
                ]);
                if (insertError) {
                    console.error("[/api/cart/intent-add] Cart insert error:", insertError);
                // Don't fail - we'll still return success as the intent was understood
                } else {
                    console.log("[/api/cart/intent-add] Added new cart item");
                }
            }
        } catch (cartError) {
            console.error("[/api/cart/intent-add] Cart operation failed:", cartError);
        // Continue - don't fail the whole request
        }
        // Generate success message
        const successMessageEn = quantity > 1 ? `Added ${quantity} x ${bestMatch.name} to your cart.` : `Added ${bestMatch.name} to your cart.`;
        const message = await translateMessage(successMessageEn, language);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            intent: "add_to_cart",
            message,
            product: {
                id: bestMatch.id,
                name: bestMatch.name,
                price: bestMatch.price
            },
            quantity
        });
    } catch (err) {
        console.error("[/api/cart/intent-add] Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            intent: "add_to_cart",
            message: "Sorry, something went wrong. Please try again."
        }, {
            status: 500
        });
    }
}
// Helper to translate message if not English
async function translateMessage(message, language) {
    if (!language || language.toLowerCase().startsWith("en")) {
        return message;
    }
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(message, language);
    } catch (err) {
        console.error("[/api/cart/intent-add] Translation error:", err);
        return message;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6041cde._.js.map