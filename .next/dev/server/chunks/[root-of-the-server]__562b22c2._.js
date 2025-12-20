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
"[project]/app/api/products/bestsellers/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translate.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
function safeParseJson(value) {
    if (!value) return null;
    if (typeof value === "object") return value;
    if (typeof value === "string") {
        try {
            return JSON.parse(value);
        } catch (err) {
            console.warn("[/api/products/bestsellers] Failed to parse JSON value", err);
            return null;
        }
    }
    return null;
}
async function GET(req) {
    const url = req.nextUrl;
    const lang = url.searchParams.get("lang") || "en-US";
    const isEnglish = lang.toLowerCase().startsWith("en");
    console.log("[/api/products/bestsellers] incoming request", {
        lang,
        path: url.pathname,
        search: url.search
    });
    try {
        // STEP 1: Fetch candidate products from Supabase (NO images)
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, description, price, discount_price, stock, translations, category_id, metadata, is_bestseller").limit(100);
        if (error) {
            console.error("[/api/products/bestsellers] Supabase query error:", error);
            throw new Error(error.message);
        }
        const rows = data ?? [];
        console.log("[/api/products/bestsellers] raw rows fetched", {
            count: rows.length
        });
        // STEP 2: Determine which rows are bestsellers
        const filtered = rows.filter((row)=>{
            const hasFlag = !!row.is_bestseller;
            let fromMetadata = false;
            if (row.metadata) {
                const meta = safeParseJson(row.metadata) ?? row.metadata;
                try {
                    fromMetadata = !!meta?.isBestseller || !!meta?.is_bestseller || !!meta?.bestseller;
                } catch  {
                    fromMetadata = false;
                }
            }
            return hasFlag || fromMetadata;
        });
        const candidates = (filtered.length > 0 ? filtered : rows).slice(0, 10);
        console.log("[/api/products/bestsellers] bestseller candidates", {
            total: rows.length,
            filtered: filtered.length,
            used: candidates.length
        });
        // STEP 3: Map products with translations (NO images)
        // Use Promise.all for parallel translation
        const bestsellers = await Promise.all(candidates.map(async (row)=>{
            const baseName = row.name ?? "";
            const baseDescription = row.description ?? "";
            // Check for cached translations first
            const translationsObj = safeParseJson(row.translations) ?? (row.translations || {});
            const langEntry = translationsObj && typeof translationsObj === "object" ? translationsObj[lang] ?? {} : {};
            let translatedName = baseName;
            let translatedDescription = baseDescription;
            if (!isEnglish) {
                // Try cached translation first, then fallback to live translation
                if (langEntry?.name) {
                    translatedName = langEntry.name;
                } else if (baseName) {
                    translatedName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(baseName, lang);
                }
                if (langEntry?.description) {
                    translatedDescription = langEntry.description;
                } else if (baseDescription) {
                    translatedDescription = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTranslate"])(baseDescription, lang);
                }
            }
            const price = typeof row.discount_price === "number" ? row.discount_price : typeof row.price === "number" ? row.price : 0;
            return {
                id: row.id,
                name: translatedName,
                translatedName,
                description: translatedDescription,
                translatedDescription,
                price
            };
        }));
        console.log("[/api/products/bestsellers] response summary", {
            lang,
            count: bestsellers.length
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            bestsellers
        });
    } catch (err) {
        console.error("🔥 BESTSELLERS ROUTE ERROR:", err);
        const message = err instanceof Error ? err.message : "Failed to load bestsellers";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__562b22c2._.js.map