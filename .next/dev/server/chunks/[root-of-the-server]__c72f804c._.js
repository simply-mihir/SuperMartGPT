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

/* __next_internal_action_entry_do_not_use__ [{"60b8e174ed38f8e14d3a9c114376dd1568a2abce90":"translateTextStrict"},"",""] */ __turbopack_context__.s([
    "translateTextStrict",
    ()=>translateTextStrict
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
async function translateTextStrict(text, targetLanguage) {
    const trimmed = text?.trim();
    if (!trimmed) return "";
    const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GPT_TRANSLATE_MODEL"],
        messages: [
            {
                role: "system",
                content: "You are a translation engine. Return only the translated text with no extra commentary."
            },
            {
                role: "user",
                content: `Translate this text to ${targetLanguage}: """${trimmed}"""`
            }
        ],
        temperature: 0.2
    });
    return completion.choices[0]?.message?.content?.trim() ?? trimmed;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    translateTextStrict
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(translateTextStrict, "60b8e174ed38f8e14d3a9c114376dd1568a2abce90", null);
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
"[project]/lib/bestsellers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e04729bd2f1048bd8fdbba85a3b9f448f19db45e":"getBestsellers"},"",""] */ __turbopack_context__.s([
    "getBestsellers",
    ()=>getBestsellers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
async function getBestsellers(params) {
    const { language, limit = 10 } = params;
    console.log("[getBestsellers] params", {
        language,
        limit
    });
    // First, try querying by explicit is_bestseller flag.
    let products = [];
    const primaryQuery = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, description, price, category, translations, is_bestseller").eq("is_bestseller", true).limit(limit);
    const { data: primaryData, error: primaryError } = await primaryQuery;
    if (primaryError) {
        // Fallback if the is_bestseller column does not exist.
        const message = primaryError.message || "";
        console.error("[getBestsellers] primary query error", primaryError);
        const missingColumn = message.toLowerCase().includes("column") && message.toLowerCase().includes("is_bestseller") && message.toLowerCase().includes("does not exist");
        if (!missingColumn) {
            throw new Error(primaryError.message);
        }
        console.warn("[getBestsellers] 'is_bestseller' column missing, falling back to top products by id");
        const { data: fallbackData, error: fallbackError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, description, price, category, translations").order("id", {
            ascending: true
        }).limit(limit);
        if (fallbackError) {
            console.error("[getBestsellers] fallback query error", fallbackError);
            throw new Error(fallbackError.message);
        }
        products = fallbackData ?? [];
    } else {
        products = primaryData ?? [];
    }
    console.log("[getBestsellers] products fetched", {
        count: products.length
    });
    const langKey = language;
    const needsTranslation = !!language && !language.toLowerCase().startsWith("en");
    const updated = [];
    for (const product of products){
        console.log("[getBestsellers] processing product", {
            id: product.id,
            hasTranslations: !!product.translations
        });
        // Optionally translate
        if (needsTranslation && langKey) {
            let translations = product.translations ?? {};
            // Handle case where translations might be stored as JSON string.
            if (typeof translations === "string") {
                try {
                    translations = JSON.parse(translations);
                } catch (e) {
                    console.warn("[getBestsellers] Failed to parse translations JSON for product", product.id, e);
                    translations = {};
                }
            }
            const existing = translations[langKey] ?? {};
            let name = existing.name;
            let description = existing.description;
            let changed = false;
            if (!name && product.name) {
                try {
                    name = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["translateTextStrict"])(product.name, language);
                    changed = true;
                } catch (e) {
                    console.error("[getBestsellers] name translation failed, falling back to English", {
                        id: product.id,
                        language,
                        error: e instanceof Error ? e.message : String(e)
                    });
                    name = product.name;
                }
            }
            if (!description && product.description) {
                try {
                    description = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["translateTextStrict"])(product.description, language);
                    changed = true;
                } catch (e) {
                    console.error("[getBestsellers] description translation failed, falling back to English", {
                        id: product.id,
                        language,
                        error: e instanceof Error ? e.message : String(e)
                    });
                    description = product.description ?? undefined;
                }
            }
            if (changed) {
                const newTranslations = {
                    ...translations,
                    [langKey]: {
                        name: name ?? existing.name,
                        description: description ?? existing.description
                    }
                };
                // Persist back to DB (best-effort, non-blocking for other items)
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").update({
                        translations: newTranslations
                    }).eq("id", product.id);
                } catch (e) {
                    console.warn("[getBestsellers] Failed to persist product translation", product.id, e);
                }
                product.translations = newTranslations;
            }
            // Override base fields for the response
            if (name) product.name = name;
            if (description) product.description = description;
            console.log("[getBestsellers] translations applied", {
                id: product.id,
                language,
                hasName: !!name,
                hasDescription: !!description
            });
        }
        updated.push(product);
    }
    console.log("[getBestsellers] final product count", updated.length);
    return updated;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBestsellers
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBestsellers, "40e04729bd2f1048bd8fdbba85a3b9f448f19db45e", null);
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bestsellers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/bestsellers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseAdmin.ts [app-route] (ecmascript)");
;
;
;
;
;
const runtime = "nodejs";
async function POST(req) {
    try {
        const { message, language, userId } = await req.json();
        if (!message || typeof message !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Message is required."
            }, {
                status: 400
            });
        }
        const userLanguage = typeof language === "string" && language.length > 0 ? language : "en";
        // 1. Translate user message to English (internal working language)
        const messageInEnglish = userLanguage.toLowerCase().startsWith("en") ? message : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["translateTextStrict"])(message, "English");
        // 2. Fetch some relevant products for context
        const { data: matchedProducts } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("products").select("id, name, description, price, category").ilike("name", `%${messageInEnglish}%`).limit(5);
        const productsForContext = matchedProducts ?? [];
        // 3. Fetch bestsellers for context
        const bestsellers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bestsellers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBestsellers"])({
            language: "en",
            limit: 5
        });
        // 4. Build system prompt with lightweight tool-like context
        const systemPrompt = `
You are SuperMartGPT, an AI shopping assistant for an online supermarket.

You have access to:
- A product catalog (partial) with fields: id, name, description, price, category.
- The user's cart and order functions (managed by the backend, you only suggest actions).

Current matched products (may be empty):
${JSON.stringify(productsForContext.map((p)=>({
                id: p.id,
                name: p.name,
                price: p.price,
                category: p.category
            })))}

Current bestsellers:
${JSON.stringify(bestsellers.map((p)=>({
                id: p.id,
                name: p.name,
                price: p.price,
                category: p.category
            })))}

Instructions:
- Answer in a concise, friendly tone.
- When helpful, recommend specific products by name.
- Do not invent real brand names; use the names provided above.
- Do NOT write JSON in your reply, just natural language.`;
        // 5. Call OpenAI chat completion in English
        const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
            model: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GPT_CHAT_MODEL"],
            temperature: 0.5,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: messageInEnglish
                }
            ]
        });
        const replyInEnglish = completion.choices[0]?.message?.content?.trim() ?? "I'm not sure how to answer that yet, but I'm learning more about our catalog every day!";
        // 6. Translate reply back to user's language
        const replyInUserLanguage = userLanguage.toLowerCase().startsWith("en") ? replyInEnglish : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["translateTextStrict"])(replyInEnglish, userLanguage);
        // 7. Build relatedProducts in the format expected by frontend
        // Frontend expects: relatedProducts: Array<{ name: string, price: string | number }>
        const relatedProducts = productsForContext.length > 0 ? productsForContext.map((p)=>({
                name: p.name,
                price: p.price ?? 0
            })) : bestsellers.slice(0, 3).map((p)=>({
                name: p.name,
                price: p.price ?? 0
            }));
        // 8. Shape response to match frontend expectations
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                reply: replyInUserLanguage,
                relatedProducts
            }
        });
    } catch (error) {
        console.error("/api/chat error", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Unable to generate AI response."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c72f804c._.js.map