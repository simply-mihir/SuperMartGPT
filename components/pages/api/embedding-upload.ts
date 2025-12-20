// pages/api/embedding-upload.ts (Next.js API route)
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const products = req.body.products; // array of { id, name, description }

    try {
        for (const p of products) {
            // compute embedding
            const emb = await openai.embeddings.create({
                model: "text-embedding-3-large",
                input: ${ p.name } — ${ p.description || "" }
      });
        const vector = emb.data[0].embedding; // array of floats

        // store embedding as JSON if pgvector unsupported
        await supabaseAdmin
            .from("products")
            .update({ metadata: { ...p.metadata, embedding: vector } })
            .eq("id", p.id);
    }
    res.status(200).json({ ok: true });
} catch (err) {
    console.error(err);
    res.status(500).json({ error: "Embedding upload failed" });
}
}