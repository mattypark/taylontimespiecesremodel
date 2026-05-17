"use client";

import { useEffect, useState, useCallback } from "react";

export type CartLine = {
  slug: string;
  qty: number;
};

const KEY = "taylon_cart_v1";

function read(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartLine[]) : [];
  } catch {
    return [];
  }
}

function write(lines: CartLine[]) {
  localStorage.setItem(KEY, JSON.stringify(lines));
  window.dispatchEvent(new CustomEvent("taylon:cart"));
}

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    setLines(read());
    const onChange = () => setLines(read());
    window.addEventListener("taylon:cart", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("taylon:cart", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const add = useCallback((slug: string) => {
    const next = read();
    const existing = next.find((l) => l.slug === slug);
    if (existing) existing.qty += 1;
    else next.push({ slug, qty: 1 });
    write(next);
  }, []);

  const remove = useCallback((slug: string) => {
    write(read().filter((l) => l.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    const next = read()
      .map((l) => (l.slug === slug ? { ...l, qty: Math.max(0, qty) } : l))
      .filter((l) => l.qty > 0);
    write(next);
  }, []);

  const clear = useCallback(() => write([]), []);

  const count = lines.reduce((sum, l) => sum + l.qty, 0);

  return { lines, count, add, remove, setQty, clear };
}
