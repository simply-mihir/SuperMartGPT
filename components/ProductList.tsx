// components/ProductsList.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ProductsList() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        async function load() {
            setLoading(true);
            const { data, error } = await supabase
                .from("products")
                .select("id, name, price, translations")
                .order("created_at", { ascending: false })
                .limit(50);

            if (error) {
                console.error("Supabase fetch error:", error);
            } else if (mounted) {
                setProducts(data || []);
            }
            setLoading(false);
        }
        load();
        return () => {
            mounted = false;
        };
    }, []);

    if (loading) return <div>Loading products...</div>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
                <div key={p.id} className="rounded-xl border border-gray-200 shadow-md p-4 bg-white">
                    {/* Text-only card - no image */}
                    <div className="w-full h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-2xl">📦</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <div className="text-green-600 font-bold mt-1">₹{p.price}</div>
                </div>
            ))}
        </div>
    );
}
