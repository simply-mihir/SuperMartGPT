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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-route] (ecmascript)");
;
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
    "revenue report",
    "i am admin"
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
        maggi: "Snacks",
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
        if (data) return data;
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
        if (!recentSearches.includes(search)) {
            recentSearches.unshift(search);
            if (recentSearches.length > 10) recentSearches.pop();
        }
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
// Handle add-to-cart intent
async function handleAddToCartIntent(userMessage, userId, language) {
    console.log("[CHAT] Processing add-to-cart intent:", userMessage);
    try {
        const { quantity, productQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAddToCartIntent"])(userMessage);
        console.log("[CHAT] Parsed intent:", {
            quantity,
            productQuery
        });
        if (!productQuery) {
            const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])("I couldn't understand which product you want to add. Please specify a product name like 'add Maggi to cart'.", language);
            return {
                success: false,
                reply,
                relatedProducts: []
            };
        }
        // Find matching products
        const matches = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findProductsByQuery"])(productQuery);
        console.log("[CHAT] Found matches:", matches.length);
        if (matches.length === 0) {
            // No product found - get suggestions
            const suggestions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSuggestedProducts"])(3);
            const suggestionNames = suggestions.map((s)=>s.name).join(", ");
            // Return friendly not-found message
            const replyEn = `Sorry, that product does not exist in SuperMartGPT. Did you mean: ${suggestionNames || "another product"}?`;
            const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(replyEn, language);
            return {
                success: false,
                reply,
                intentPayload: {
                    intent: "add_to_cart",
                    success: false,
                    query: productQuery,
                    suggestions: suggestions.map((s)=>({
                            name: s.name,
                            price: s.price,
                            id: s.id
                        }))
                },
                relatedProducts: suggestions.map((s)=>({
                        name: s.name,
                        price: s.price
                    }))
            };
        }
        // Use the best match
        const bestMatch = matches[0];
        console.log("[CHAT] Best match:", bestMatch.name);
        // Add to cart in Supabase
        try {
            const { data: existingItem } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("cart_items").select("id, quantity").eq("user_id", userId).eq("product_id", bestMatch.id).single();
            if (existingItem) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("cart_items").update({
                    quantity: (existingItem.quantity || 0) + quantity
                }).eq("id", existingItem.id);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("cart_items").insert([
                    {
                        user_id: userId,
                        product_id: bestMatch.id,
                        quantity: quantity,
                        created_at: new Date().toISOString()
                    }
                ]);
            }
        } catch (cartError) {
            console.error("[CHAT] Cart DB error (non-blocking):", cartError);
        }
        // Generate success reply with ₹ currency
        const replyEn = quantity > 1 ? `✅ Added ${quantity} x ${bestMatch.name} (₹${bestMatch.price.toFixed(2)} each) to your cart.` : `✅ Added ${bestMatch.name} (₹${bestMatch.price.toFixed(2)}) to your cart.`;
        const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(replyEn, language);
        return {
            success: true,
            reply,
            intentPayload: {
                intent: "add_to_cart",
                success: true,
                product: {
                    id: bestMatch.id,
                    name: bestMatch.name,
                    price: bestMatch.price
                },
                quantity
            },
            relatedProducts: [
                {
                    name: bestMatch.name,
                    price: bestMatch.price
                }
            ]
        };
    } catch (err) {
        console.error("[CHAT] Add-to-cart intent error:", err);
        const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])("Sorry, I couldn't process your request. Please try again.", language);
        return {
            success: false,
            reply,
            relatedProducts: []
        };
    }
}
async function POST(req) {
    try {
        let body;
        try {
            body = await req.json();
        } catch (parseError) {
            console.error("CHAT ROUTE: Failed to parse request body", parseError);
            return Response.json({
                success: true,
                reply: "Sorry, I couldn't understand your request. Please try again.",
                relatedProducts: []
            });
        }
        const { message, language: rawLanguage } = body;
        const userMessage = message?.trim() || "";
        const language = rawLanguage ? languageCodeMap[rawLanguage.toLowerCase()] || rawLanguage : "en-US";
        if (!userMessage) {
            return Response.json({
                success: true,
                reply: "Please provide a message.",
                relatedProducts: []
            });
        }
        console.log("[CHAT] Processing message:", userMessage, "Language:", language);
        const userId = DEFAULT_USER_ID;
        const isEnglish = !language || language.toLowerCase().startsWith("en");
        // ===== INTENT 1: Admin Analytics =====
        if (isAdminQuery(userMessage)) {
            console.log("[CHAT] Admin mode detected - showing analytics directly");
            // Return simple acknowledgment - analytics component will load separately
            const adminReplyEn = "📊 Opening Sales Analytics Dashboard...";
            const adminReply = isEnglish ? adminReplyEn : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(adminReplyEn, language);
            return Response.json({
                success: true,
                reply: adminReply,
                relatedProducts: [],
                isAdminMode: true
            });
        }
        // ===== INTENT 2: Add to Cart =====
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasAddToCartIntent"])(userMessage)) {
            console.log("[CHAT] Add-to-cart intent detected");
            const intentResult = await handleAddToCartIntent(userMessage, userId, language);
            return Response.json({
                success: true,
                reply: intentResult.reply,
                relatedProducts: intentResult.relatedProducts,
                intentPayload: intentResult.intentPayload
            });
        }
        // ===== INTENT 3: Regular Chat (with OpenAI) =====
        const userProfile = await getUserProfile(userId);
        const detectedCategory = detectCategory(userMessage);
        // Update user search history (non-blocking)
        updateUserSearch(userId, userMessage, detectedCategory).catch(()=>{});
        let reply = "I can help you find products! Try asking about fruits, vegetables, snacks, or say 'add [product name] to cart'.";
        let relatedProducts = [];
        // Fetch related products from database
        try {
            const searchTerms = userMessage.split(/\s+/).filter((w)=>w.length > 2);
            const searchQuery = searchTerms.length > 0 ? searchTerms.map((term)=>`name.ilike.%${term}%`).join(",") : `name.ilike.%${userMessage}%`;
            const { data: matchedProducts } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, description, price, category_id").or(searchQuery).limit(5);
            if (matchedProducts && matchedProducts.length > 0) {
                relatedProducts = matchedProducts.map((p)=>({
                        name: p.name || "Unknown Product",
                        price: typeof p.price === "number" ? p.price : 0
                    }));
            }
        } catch (dbError) {
            console.error("CHAT ROUTE: Database query failed", dbError);
        }
        // Fetch associations
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
        let associationsContext = "";
        if (associations.length > 0) {
            associationsContext = `\n\nFrequently bought together:
${associations.map((a)=>`- ${a.product_name} + ${a.associated_product_name}`).join("\n")}`;
        }
        // Call OpenAI
        try {
            const systemPrompt = `You are SuperMartGPT, a helpful Indian grocery shopping assistant.

Your role is to:
- Help customers find products
- Answer questions about products, prices, availability
- Provide personalized suggestions based on user preferences
- Be concise and friendly
- Always use ₹ (Indian Rupee) for prices, never $

${personalizationContext}
${associationsContext}

IMPORTANT: 
- If the user wants to add something to cart, they should say "add [product] to cart".
- Keep responses brief and helpful.
- Don't use markdown formatting.
- Use ₹ symbol for all prices.`;
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
            // Replace any $ with ₹ in the reply
            reply = reply.replace(/\$/g, "₹");
        } catch (aiError) {
            console.error("CHAT ROUTE: OpenAI API call failed", aiError);
            reply = "I can help you find products! Try asking about fruits, vegetables, or snacks. You can also say 'add banana to cart' to add items.";
        }
        // Get default products if none found
        if (relatedProducts.length === 0) {
            try {
                const { data: defaultProducts } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("name, price").limit(3);
                if (defaultProducts && defaultProducts.length > 0) {
                    relatedProducts = defaultProducts.map((p)=>({
                            name: p.name || "Product",
                            price: typeof p.price === "number" ? p.price : 0
                        }));
                }
            } catch (fallbackError) {
                console.error("CHAT ROUTE: Fallback product query failed", fallbackError);
            }
        }
        // Translate reply if needed
        let finalReply = reply;
        if (!isEnglish && language) {
            try {
                finalReply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(reply, language);
            } catch (translateError) {
                console.error("CHAT ROUTE: Translation failed", translateError);
                finalReply = reply;
            }
        }
        // Translate product names if needed
        let translatedProducts = relatedProducts;
        if (!isEnglish && language && relatedProducts.length > 0) {
            try {
                translatedProducts = await Promise.all(relatedProducts.map(async (p)=>({
                        name: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(p.name, language),
                        price: p.price
                    })));
            } catch (productTranslateError) {
                console.error("CHAT ROUTE: Product translation failed", productTranslateError);
                translatedProducts = relatedProducts;
            }
        }
        return Response.json({
            success: true,
            reply: finalReply,
            relatedProducts: translatedProducts
        });
    } catch (err) {
        // NEVER return 500 - always return valid JSON
        console.error("CHAT ROUTE ERROR:", err);
        return Response.json({
            success: true,
            reply: "I'm here to help! You can ask about products, prices, or say 'add [product] to cart' to add items.",
            relatedProducts: []
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d7139813._.js.map