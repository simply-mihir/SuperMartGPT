// pages/api/search.ts
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
    const q = req.body.query || "";
    if (!q) return res.status(400).json({ error: "Query missing" });

    // 1. compute embedding for query
    const emb = await openai.embeddings.create({ model: "text-embedding-3-large", input: q });
    const vector = emb.data[0].embedding;

    // 2. naive search: compute cosine similarity against product embeddings stored in metadata
    // If you stored embeddings as arrays in products.metadata.embedding, you can fetch all and compute similarity here
    // (for demo with small dataset; for production use pgvector or Pinecone)
    const { data: prods } = await supabaseAdmin.from("products").select("id,name,description,metadata,images").limit(200);
    // compute similarity in Node
    const cosine = (a, b) => {
        let dot = 0, aNorm = 0, bNorm = 0;
        for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; aNorm += a[i] * a[i]; bNorm += b[i] * b[i]; }
        return dot / (Math.sqrt(aNorm) * Math.sqrt(bNorm) + 1e-12);
    }
    const scored = prods.map(p => ({ product: p, score: cosine(vector, p.metadata?.embedding || []) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    res.json(scored);
}