import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, getRelated, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductActions } from "./ProductActions";
import { ProductGallery } from "./ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(slug, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[#e6e6e6] px-6 lg:px-10 py-4 text-[11px] tracking-[2px] uppercase text-[#6b6b6b]">
        <div className="max-w-[1400px] mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#121212]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#121212]">Shop</Link>
          <span>/</span>
          <span className="text-[#121212] truncate max-w-[60vw]">{product.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.gallery} name={product.name} />

          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-3">
              {product.brand}
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
              {product.name}
            </h1>
            <p className="text-[12px] tracking-[2px] uppercase text-[#6b6b6b] mb-8">
              Ref. {product.ref}
            </p>

            <div className="flex items-baseline gap-4 mb-10">
              <p className="text-3xl md:text-4xl font-extrabold">{product.priceLabel}</p>
              <p className="text-[12px] tracking-[2px] uppercase text-[#6b6b6b]">USD</p>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-10">
              <Spec label="Year" value={String(product.year)} />
              <Spec label="Condition" value={product.condition} />
              <Spec label="Case" value={product.case} />
              <Spec label="Dial" value={product.dial} />
              <Spec label="Movement" value={product.movement} />
              <Spec label="Water Res." value={product.waterResistance} />
              <Spec label="Bracelet" value={product.bracelet} />
              <Spec label="Box & Papers" value={product.boxPapers} />
            </div>

            <ProductActions slug={product.slug} />

            <p className="text-base text-[#6b6b6b] leading-relaxed mt-10">
              {product.description}
            </p>

            <div className="mt-10 pt-8 border-t border-[#e6e6e6] grid grid-cols-2 gap-4 text-[12px] tracking-[1.5px] uppercase text-[#6b6b6b]">
              <div>✓ Authenticated in-house</div>
              <div>✓ Free insured shipping</div>
              <div>✓ 14-day return policy</div>
              <div>✓ Lifetime authenticity guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#fafafa] py-20 md:py-24 px-6 lg:px-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-10 fade-up">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                You May Also Like
              </h2>
              <Link
                href="/shop"
                className="hidden md:inline-flex text-[12px] tracking-[2px] uppercase font-semibold border-b border-[#121212] pb-1 hover:text-[#6b6b6b] hover:border-[#6b6b6b] transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[2px] uppercase text-[#6b6b6b] mb-1">{label}</p>
      <p className="text-[14px] font-semibold leading-snug">{value}</p>
    </div>
  );
}
