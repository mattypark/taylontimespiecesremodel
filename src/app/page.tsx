import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getFeatured, getJustListed, getProduct } from "@/lib/products";

/* ============================================================================
 * TAYLON TIMEPIECES — Homepage
 *
 * Sections:
 *  1. Hero
 *  2. Featured Inventory (4-up grid)
 *  3. Buy / Sell / Trade
 *  4. Authenticity Guarantee
 *  5. Current Inventory (8-up grid)
 *  6. Newsletter
 *
 * Shell (header, footer, announcement bar, fade-up observer) lives in layout.tsx
 * ========================================================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedInventory />
      <BuySellTrade />
      <Authenticity />
      <CurrentInventory />
      <Newsletter />
    </>
  );
}

function Hero() {
  const hero = getProduct("rolex-datejust-41-wimbledon") ?? getFeatured()[0];
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Split background — white left, gold right */}
      <div className="absolute inset-0 flex" aria-hidden>
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#c8a96a]" />
      </div>

      {/* Huge backdrop T — straddles the split */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-serif-display leading-[0.8]"
          style={{
            fontSize: "clamp(420px, 64vw, 1100px)",
            letterSpacing: "-0.06em",
            color: "rgba(18,18,18,0.08)",
            transform: "translateX(-33px)",
            fontWeight: 500,
          }}
        >
          T
        </span>
      </div>

      {/* TAY / LON wordmark */}
      <div
        className="absolute inset-0 grid grid-cols-2 items-center pointer-events-none select-none"
        aria-hidden
      >
        <div
          className="text-right pr-[10vw] font-serif-display leading-[0.85]"
          style={{
            fontSize: "clamp(180px, 19vw, 340px)",
            color: "#121212",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          TAY
        </div>
        <div
          className="text-left pl-[10vw] font-serif-display leading-[0.85]"
          style={{
            fontSize: "clamp(180px, 19vw, 340px)",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          LON
        </div>
      </div>

      {/* Centered watch over the gap */}
      {hero && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
          style={{ transform: "translateX(13px)" }}
        >
          <img
            src={hero.img}
            alt=""
            className="h-[58%] md:h-[72%] w-auto object-contain"
            style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35))" }}
          />
        </div>
      )}

      {/* Timepieces wordmark below watch */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-28 flex justify-center pointer-events-none z-10">
        <span className="text-[11px] md:text-[13px] tracking-[8px] md:tracking-[12px] uppercase text-[#6b6b6b] font-medium">
          Timepieces
        </span>
      </div>

      {/* CTA — right side */}
      <div className="absolute bottom-10 md:bottom-14 right-6 md:right-16 lg:right-24 z-10">
        <Link href="/shop" className="btn-solid !bg-white !text-[#121212] !border-white shadow-lg">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

function FeaturedInventory() {
  const featured = getFeatured();
  return (
    <section className="py-20 md:py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12 fade-up">
          <div>
            <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-2">Just Listed</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Featured Inventory</h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[2px] uppercase font-semibold border-b border-[#121212] pb-1 hover:text-[#6b6b6b] hover:border-[#6b6b6b] transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BuySellTrade() {
  const cards = [
    {
      title: "Buy",
      desc: "Browse our hand-curated collection of authenticated luxury timepieces. Every watch insured, every purchase guaranteed.",
      cta: "Shop Inventory",
      href: "/shop",
    },
    {
      title: "Sell",
      desc: "Get a free, no-obligation offer in 24 hours. We pay top dollar for Rolex, AP, Patek, and other premium brands.",
      cta: "Get an Offer",
      href: "/sell",
    },
    {
      title: "Trade",
      desc: "Upgrade your collection. Trade your current watch toward any piece in our inventory — quick, fair, transparent.",
      cta: "Start a Trade",
      href: "/sell#trade",
    },
  ];
  return (
    <section className="bg-[#f7f6f3] py-20 md:py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 fade-up">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-2">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Buy. Sell. Trade.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="bg-white p-10 md:p-12 border border-[#e6e6e6] fade-up text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="block text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-4">
                0{i + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">{c.title}</h3>
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8 max-w-xs mx-auto">
                {c.desc}
              </p>
              <Link href={c.href} className="btn-outline">{c.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Authenticity() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="fade-up">
          <img
            src="https://images.unsplash.com/photo-1495856458515-0637185db551?w=1400&q=85"
            alt="In-house watch authentication"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="fade-up">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3">Authenticity Guaranteed</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Inspected in-house by our experts.
          </h2>
          <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed mb-6">
            Every watch on this site is authenticated by our in-house team of certified
            watchmakers. We inspect the movement, the case, the dial, the bracelet, and
            every component down to the screws.
          </p>
          <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed mb-10">
            If we can&apos;t guarantee it&apos;s 100% authentic, it doesn&apos;t go up
            for sale. Period.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Certified by master watchmakers",
              "Movement, case, dial, and bracelet inspection",
              "Lifetime authenticity guarantee",
              "Free insured shipping in the US",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px]">
                <span className="mt-1 w-1.5 h-1.5 bg-[#121212] rounded-full shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <Link href="/about#authenticity" className="btn-solid">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

function CurrentInventory() {
  const inventory = getJustListed();
  return (
    <section id="current-inventory" className="bg-[#fafafa] py-20 md:py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12 fade-up">
          <div>
            <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-2">Browse the Collection</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Current Inventory</h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[2px] uppercase font-semibold border-b border-[#121212] pb-1 hover:text-[#6b6b6b] hover:border-[#6b6b6b] transition-colors"
          >
            See All Watches →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {inventory.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="text-center mt-14 fade-up">
          <Link href="/shop" className="btn-solid">View All Inventory</Link>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-[#121212] text-white py-20 md:py-24 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <p className="text-[11px] tracking-[4px] uppercase text-white/60 mb-3">VIP Access</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-[1.05]">
          First dibs on new arrivals.
        </h2>
        <p className="text-base md:text-lg text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
          Join our VIP list to get text alerts before watches go live on the site. Best
          deals, first chance.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent border border-white/30 px-5 py-3.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
          />
          <button type="submit" className="btn-solid !bg-white !text-[#121212] !border-white hover:!bg-transparent hover:!text-white">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
