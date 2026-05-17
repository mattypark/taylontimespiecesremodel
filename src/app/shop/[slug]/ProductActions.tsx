"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function ProductActions({ slug }: { slug: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex flex-col gap-3">
      <button onClick={onAdd} className="btn-solid w-full">
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
      <Link href="/contact?subject=inquiry" className="btn-outline w-full">
        Request a Video Walkthrough
      </Link>
    </div>
  );
}
