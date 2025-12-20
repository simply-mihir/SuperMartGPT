// pages/api/products.ts
import { supabase } from "../../lib/supabaseClient"; // uses anon key

export default async function handler(req, res) {
    const { data, error } = await supabase.from("products").select("id,name,price,images,translations").limit(100);
    if (error) return res.status(500).json({ error });
    res.json(data);
}