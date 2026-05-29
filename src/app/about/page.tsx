export const metadata = {
  title: "About | Taylon Timepieces",
  description: "Family-owned, collector-trusted since 2009.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-20 md:py-28 border-b border-[#e6e6e6]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-4 fade-up">
            About Taylon
          </p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] mb-8 fade-up">
            A family business
            <br />
            built on trust.
          </h1>
          <p className="text-lg md:text-2xl text-[#6b6b6b] max-w-3xl leading-relaxed fade-up">
            Taylon Timepieces was founded in 2009 to fix a broken corner of the watch
            market: the secondhand luxury trade, where authentication was an
            afterthought and condition was always overstated. We do the opposite.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="fade-up">
            <img
              src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1400&q=85"
              alt="Watchmaker at workbench"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="fade-up">
            <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
              From a Madison Ave. workbench to the country&apos;s most-trusted dealers.
            </h2>
            <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed mb-5">
              We started with a single workbench and a magnifying loupe. The first watch
              we sold was a Submariner — to a customer who became a friend, and is still
              buying from us fifteen years later.
            </p>
            <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed">
              Today we serve thousands of collectors across the country, but the rules
              haven&apos;t changed. Authenticate every watch. Disclose every detail. Stand
              behind every sale.
            </p>
          </div>
        </div>
      </section>

      <section id="authenticity" className="bg-[#0a0a0a] text-white px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-2xl mb-16 fade-up">
            <p className="text-[11px] tracking-[4px] uppercase text-white/60 mb-3">
              Authenticity Guaranteed
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Every watch inspected, in-house, by our master watchmakers.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { n: "01", t: "Movement", d: "We open every case. We inspect serial, caliber, finishing, and operation under a loupe and on a timegrapher." },
              { n: "02", t: "Case & Dial", d: "We check the case, dial, hands, crown, and crystal against factory references — verifying originality and condition." },
              { n: "03", t: "Bracelet & Papers", d: "We confirm bracelet links match, clasp codes line up, and any included papers cross-check with the brand archives." },
            ].map((b, i) => (
              <div key={b.n} className="fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <p className="text-[11px] tracking-[3px] uppercase text-white/50 mb-3">{b.n}</p>
                <h3 className="text-xl md:text-2xl font-extrabold mb-3">{b.t}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "15+", l: "Years in Business" },
            { n: "8,000+", l: "Watches Authenticated" },
            { n: "50 States", l: "Shipped Insured" },
            { n: "100%", l: "Authenticity Rate" },
          ].map((s, i) => (
            <div key={s.l} className="fade-up" style={{ transitionDelay: `${i * 0.05}s` }}>
              <p className="font-serif-display text-5xl md:text-7xl text-[#121212] mb-3 leading-none">
                {s.n}
              </p>
              <p className="text-[11px] tracking-[2px] uppercase text-[#6b6b6b]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
