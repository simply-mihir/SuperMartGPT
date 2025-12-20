"use client";

import { useEffect, useState } from "react";

export type BestsellerItem = {
  id: string | number;
  name?: string;
  translatedName?: string;
  description?: string;
  translatedDescription?: string;
  price?: number;
  // NO imageUrl - text-only UI
};

interface UseBestsellersResult {
  items: BestsellerItem[];
  isLoading: boolean;
  error: string | null;
}

export function useBestsellers(languageCode: string): UseBestsellersResult {
  const [items, setItems] = useState<BestsellerItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchBestsellers() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/products/bestsellers?lang=${encodeURIComponent(languageCode)}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        const bestsellers = Array.isArray(data?.bestsellers)
          ? (data.bestsellers as BestsellerItem[])
          : [];

        console.log("[useBestsellers] Loaded:", bestsellers.length, "items");

        if (!cancelled) {
          setItems(bestsellers);
        }
      } catch (e: any) {
        console.error("[useBestsellers] Error:", e);
        if (!cancelled) {
          setError(e.message || "Failed to load bestsellers");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchBestsellers();

    return () => {
      cancelled = true;
    };
  }, [languageCode]);

  return { items, isLoading, error };
}
