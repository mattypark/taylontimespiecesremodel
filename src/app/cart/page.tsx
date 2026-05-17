"use client";

import Link from "next/link";
import { useCart, type CartLine } from "@/lib/cart";
import { getProduct, type Product } from "@/lib/products";

export default function CartPage() {
  const { lines, remove, setQty, clear } = useCart();

  const items: { line: CartLine; product: Product }[] = lines.flatMap((line) => {
    const product = getProduct(line.slug);
    return product ? [{ line, product }] : [];
  });

  const subtotal = items.reduce((sum, { line, product }) => sum + line.qty * product.price, 0);
  const fmt = (n: number) =>
    "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <section className="px-6 lg:px-10 py-16 md:py-24 min-h-[60vh]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3">
          Your Bag
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-12">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="border border-[#e6e6e6] p-16 text-center">
            <p className="text-lg text-[#6b6b6b] mb-8">Your cart is empty.</p>
            <Link href="/shop" className="btn-solid">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            <div>
              <div className="hidden md:grid grid-cols-[1fr_120px_120px_40px] gap-4 pb-4 border-b border-[#121212] text-[11px] tracking-[2px] uppercase text-[#6b6b6b]">
                <p>Item</p>
                <p>Quantity</p>
                <p className="text-right">Price</p>
                <span />
              </div>
              {items.map(({ line, product }) => (
                <div
                  key={line.slug}
                  className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_120px_120px_40px] gap-4 md:gap-6 py-6 border-b border-[#e6e6e6] items-center"
                >
                  <Link href={`/shop/${product.slug}`} className="block w-20 h-20 md:w-[120px] md:h-[120px] bg-[#f5f5f5] overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div>
                    <p className="text-[11px] tracking-[2px] uppercase text-[#6b6b6b] mb-1">
                      Ref. {product.ref}
                    </p>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="text-[15px] font-semibold hover:text-[#6b6b6b] transition-colors"
                    >
                      {product.name}
                    </Link>
                    <p className="md:hidden mt-2 text-[15px] font-bold">
                      {fmt(line.qty * product.price)}
                    </p>
                  </div>
                  <div className="flex items-center border border-[#e6e6e6] w-fit">
                    <button
                      onClick={() => setQty(line.slug, line.qty - 1)}
                      className="w-9 h-9 hover:bg-[#f5f5f5] transition-colors"
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className="w-10 text-center text-[14px] font-semibold">{line.qty}</span>
                    <button
                      onClick={() => setQty(line.slug, line.qty + 1)}
                      className="w-9 h-9 hover:bg-[#f5f5f5] transition-colors"
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                  <p className="hidden md:block text-right text-[15px] font-bold">
                    {fmt(line.qty * product.price)}
                  </p>
                  <button
                    onClick={() => remove(line.slug)}
                    aria-label="Remove"
                    className="text-[#6b6b6b] hover:text-[#121212] transition-colors hidden md:inline-flex justify-end"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    </svg>
                  </button>
                </div>
              ))}

              <button
                onClick={clear}
                className="mt-6 text-[11px] tracking-[2px] uppercase text-[#6b6b6b] hover:text-[#121212] underline underline-offset-4"
              >
                Clear Cart
              </button>
            </div>

            <aside className="bg-[#f7f6f3] p-8 lg:sticky lg:top-32 lg:self-start">
              <p className="text-[11px] tracking-[3px] uppercase font-semibold mb-6">
                Order Summary
              </p>
              <div className="space-y-3 text-[14px] mb-6 pb-6 border-b border-[#e6e6e6]">
                <Row label="Subtotal" value={fmt(subtotal)} />
                <Row label="Shipping" value="Free · Insured" />
                <Row label="Tax" value="Calculated at checkout" />
              </div>
              <div className="flex items-baseline justify-between mb-8">
                <p className="text-[12px] tracking-[2px] uppercase font-semibold">Total</p>
                <p className="text-2xl font-extrabold">{fmt(subtotal)}</p>
              </div>
              <button className="btn-solid w-full mb-3">Checkout</button>
              <Link href="/shop" className="btn-outline w-full">
                Continue Shopping
              </Link>
              <p className="mt-8 text-[11px] tracking-[2px] uppercase text-[#6b6b6b] leading-relaxed">
                Every watch authenticated in-house. Free insured shipping. 14-day return policy.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-[#6b6b6b]">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
