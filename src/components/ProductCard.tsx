import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="product-card group block fade-up">
      <div className="aspect-square overflow-hidden bg-[#f5f5f5] mb-4 relative">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
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
