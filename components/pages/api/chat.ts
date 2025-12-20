// pages/api/chat.ts
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
    const { message, language } = req.body;
    // 1. optional translate to English
    let enMessage = message;
    let translatedFrom = null;
    if (language && language !== "en") {
        const t = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "system", content: "Translate to English" }, { role: "user", content: message }]
        });
        enMessage = t.choices[0].message.content;
        translatedFrom = language;
    }

    // 2. Query relevant products via /api/search or local logic
    const searchRes = await fetch(${ process.env.NEXT_PUBLIC_BASE_URL } / api / search, { method: "POST", body: JSON.stringify({ query: enMessage }) });
    const recs = await searchRes.json();

    // 3. Ask GPT for final answer using recs context
    const prompt = You are SuperMartGPT.Use the following recommended products: ${ JSON.stringify(recs.map(r => r.product))
}. User asked: ${ enMessage }. Suggest 3 items and a short message.;
const replyRes = await openai.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }] });
let reply = replyRes.choices[0].message.content;

// 4. Translate reply back to user's language if needed
if (translatedFrom) {
    const back = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: Translate to ${ translatedFrom } preserving meaning.}, { role: "user", content: reply }]
    });
reply = back.choices[0].message.content;
  }

res.json({ reply, translatedFrom, recommendations: recs.slice(0, 3) });
}