import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: "Live Auctions | Taylon Timepieces",
  description: "Weekly eBay Live auctions every Tuesday & Thursday at 8PM ET.",
};

const lots = products.slice(0, 6);

export default function LiveAuctionsPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] text-white px-6 lg:px-10 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=2000&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[4px] uppercase text-white/60 mb-4 fade-up">
            eBay Live
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-8 fade-up">
            Live auctions,
            <br />
            twice a week.
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10 fade-up">
            Join us live every Tuesday and Thursday at 8PM ET for unreserved auctions on
            select inventory. Watches go to the highest bidder — and there&apos;s always
            a deal in the room.
          </p>
          <div className="flex flex-wrap gap-3 fade-up">
            <a
              href="https://ebay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid !bg-white !text-[#121212] !border-white hover:!bg-transparent hover:!text-white"
            >
              Watch Live on eBay
            </a>
            <Link href="/contact" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-[#121212]">
              Register to Bid
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10 fade-up">
            <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-2">Schedule</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Upcoming Sales
            </h2>
          </div>

          <div className="border-t border-[#e6e6e6]">
            {[
              { date: "Tue · Nov 18", time: "8:00 PM ET", title: "Sport Rolex Spotlight", lots: 22 },
              { date: "Thu · Nov 20", time: "8:00 PM ET", title: "Independent Watchmakers Night", lots: 14 },
              { date: "Tue · Nov 25", time: "8:00 PM ET", title: "Patek Philippe & AP", lots: 9 },
              { date: "Thu · Nov 27", time: "Off", title: "Closed for the Holiday", lots: 0 },
              { date: "Tue · Dec 2", time: "8:00 PM ET", title: "Year-End Deals Under $10K", lots: 30 },
            ].map((row) => (
              <div
                key={row.date}
                className="grid grid-cols-[140px_1fr_auto] md:grid-cols-[180px_140px_1fr_120px] items-center gap-4 py-6 border-b border-[#e6e6e6] fade-up"
              >
                <p className="text-[13px] font-semibold tracking-wider uppercase">
                  {row.date}
                </p>
                <p className="hidden md:block text-[12px] tracking-[2px] uppercase text-[#6b6b6b]">
                  {row.time}
                </p>
                <p className="text-[15px] md:text-[17px] font-semibold">{row.title}</p>
                <p className="text-[12px] tracking-[2px] uppercase text-[#6b6b6b] text-right">
                  {row.lots > 0 ? `${row.lots} Lots` : "—"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-end justify-between mb-12 fade-up">
            <div>
              <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-2">Coming Up</p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Featured Lots
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex text-[12px] tracking-[2px] uppercase font-semibold border-b border-[#121212] pb-1 hover:text-[#6b6b6b] hover:border-[#6b6b6b] transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {lots.map((p, i) => (
              <Link
                key={p.slug}
                href={`/shop/${p.slug}`}
                className="group border border-[#e6e6e6] bg-white p-5 fade-up flex gap-5"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="w-24 h-24 shrink-0 bg-[#f5f5f5] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[2px] uppercase text-[#6b6b6b] mb-1">
                    Lot · Ref. {p.ref}
                  </p>
                  <h3 className="text-[15px] font-semibold leading-snug mb-2 group-hover:text-[#6b6b6b] transition-colors truncate">
                    {p.name}
                  </h3>
                  <p className="text-[14px] font-bold">Est. {p.priceLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
