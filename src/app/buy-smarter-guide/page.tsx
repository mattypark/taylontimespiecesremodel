import Link from "next/link";

export const metadata = {
  title: "Buy Smarter Guide | Taylon Timepieces",
  description: "How to buy a luxury watch the right way — authentication, value, and longevity.",
};

const sections = [
  {
    num: "01",
    title: "Authentication First",
    body: "Before price, before condition, before anything — verify authenticity. Demand high-resolution photos of the movement, case back, serial, and bracelet. Never accept stock images. A reputable dealer will inspect every component in-house and certify the watch in writing.",
  },
  {
    num: "02",
    title: "Read the Reference Number",
    body: "Every luxury watch has a reference that encodes case material, dial, bracelet, and generation. Cross-check the seller's reference against the brand's own archives. Mismatched references, or a reference that doesn't exist, is a red flag.",
  },
  {
    num: "03",
    title: "Box, Papers, and Service History",
    body: "Original box, warranty card, and service receipts can add 10–20% to resale value. Full-set examples sell faster and command stronger offers. If the papers are missing, ask why — and price accordingly.",
  },
  {
    num: "04",
    title: "Condition Honestly Disclosed",
    body: "Polished, unpolished, lugs sharp or rounded, dial patina, hand luminescence. Demand condition notes in writing. Watches described as 'mint' should be examined as 'excellent' until proven otherwise.",
  },
  {
    num: "05",
    title: "Buy from a Dealer Who Stands Behind the Watch",
    body: "A 14-day return window, a lifetime authenticity guarantee, and insured shipping aren't optional — they're table stakes. If a seller can't offer all three, keep looking.",
  },
  {
    num: "06",
    title: "Buy the Best Example You Can Afford",
    body: "It is almost always better to stretch for one excellent watch than to settle for two compromised ones. The premium example holds value, the bargain example fights gravity.",
  },
];

export default function BuySmarterGuide() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=2000&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10 py-32 md:py-44 text-center">
          <p className="text-[11px] tracking-[4px] uppercase text-white/60 mb-5">
            The Taylon Guide
          </p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] mb-8">
            Buy Smarter.
            <br />
            Wear Forever.
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Six principles for collecting watches the right way — from a family-owned
            dealer that's authenticated thousands of timepieces since 2009.
          </p>
        </div>
      </section>

      {/* Intro lede */}
      <section className="py-20 md:py-28 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto fade-up">
          <p className="font-serif-display text-2xl md:text-3xl leading-relaxed text-[#121212]">
            A great watch is a 50-year decision. The market is loud, and the temptations
            are louder. This guide is what we tell our closest collectors before they
            sign anything — distilled to six rules that have never failed.
          </p>
        </div>
      </section>

      {/* Numbered sections */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-[1100px] mx-auto">
          {sections.map((s, i) => (
            <article
              key={s.num}
              className={`fade-up grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-14 md:py-16 ${
                i < sections.length - 1 ? "border-b border-[#e6e6e6]" : ""
              }`}
            >
              <div>
                <p className="font-serif-display text-5xl md:text-6xl text-[#121212] leading-none">
                  {s.num}
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-5 leading-[1.1]">
                  {s.title}
                </h2>
                <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#f7f6f3] py-24 md:py-32 px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto text-center fade-up">
          <p className="font-serif-display text-3xl md:text-5xl leading-[1.15] text-[#121212] mb-8">
            &ldquo;We only sell what we&apos;d wear ourselves — and we&apos;d only wear
            what we&apos;d stake our name on.&rdquo;
          </p>
          <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b]">
            — Taylon Family
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto text-center fade-up">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-4">
            Ready to Buy
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-[1.05]">
            Browse the collection.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn-solid">Shop All Watches</Link>
            <Link href="/contact" className="btn-outline">Talk to a Specialist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
