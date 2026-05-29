"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";

const FALLBACK = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=85";

export function ProductCard({ product }: { product: Product }) {
  const [src, setSrc] = useState(product.img);
  return (
    <Link href={`/shop/${product.slug}`} className="product-card group block fade-up">
      <div className="aspect-square overflow-hidden bg-[#f5f5f5] mb-4 relative">
        <img
          src={src}
          alt={product.name}
          loading="lazy"
          onError={() => { if (src !== FALLBACK) setSrc(FALLBACK); }}
          className="product-img w-full h-full object-cover"
        />
        {product.justListed && (
          <span className="absolute top-3 left-3 bg-white text-[10px] tracking-[2px] uppercase font-semibold px-2 py-1 border border-[#121212]">
            Just Listed
          </span>
        )}
      </div>
      <div className="px-1">
        <p className="text-[11px] tracking-[2px] uppercase text-[#6b6b6b] mb-1.5">
          Ref. {product.ref}
        </p>
        <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#6b6b6b] transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-[15px] font-bold">{product.priceLabel}</p>
      </div>
    </Link>
  );
}
