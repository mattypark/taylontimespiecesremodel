import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e6e6e6] py-16 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2">
            <p className="text-xl font-extrabold tracking-[4px] uppercase mb-4">
              Taylon Timepieces
            </p>
            <p className="text-[14px] text-[#6b6b6b] leading-relaxed max-w-sm mb-6">
              Authenticated luxury watches at the best prices. Family-owned. Trusted by
              collectors since 2009.
            </p>
            <div className="space-y-1.5 text-[14px] text-[#6b6b6b]">
              <p><span className="text-[#121212] font-semibold">Call:</span> (555) 867-5309</p>
              <p><span className="text-[#121212] font-semibold">Email:</span> sales@taylontimepieces.com</p>
              <p><span className="text-[#121212] font-semibold">Visit:</span> 218 Madison Ave, New York, NY 10016</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-semibold mb-4">Shop</p>
            <ul className="space-y-2.5 text-[14px] text-[#6b6b6b]">
              <li><Link href="/shop" className="hover:text-[#121212] transition-colors">Current Inventory</Link></li>
              <li><Link href="/shop?sort=new" className="hover:text-[#121212] transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?price=under-5k" className="hover:text-[#121212] transition-colors">Deals Under $5K</Link></li>
              <li><Link href="/shop?brand=Rolex" className="hover:text-[#121212] transition-colors">Rolex</Link></li>
              <li><Link href="/shop?brand=Audemars+Piguet" className="hover:text-[#121212] transition-colors">Audemars Piguet</Link></li>
              <li><Link href="/shop?brand=Patek+Philippe" className="hover:text-[#121212] transition-colors">Patek Philippe</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-semibold mb-4">Company</p>
            <ul className="space-y-2.5 text-[14px] text-[#6b6b6b]">
              <li><Link href="/about" className="hover:text-[#121212] transition-colors">About Us</Link></li>
              <li><Link href="/sell" className="hover:text-[#121212] transition-colors">Sell a Watch</Link></li>
              <li><Link href="/buy-smarter-guide" className="hover:text-[#121212] transition-colors">Buy Smarter Guide</Link></li>
              <li><Link href="/live-auctions" className="hover:text-[#121212] transition-colors">Live Auctions</Link></li>
              <li><Link href="/contact" className="hover:text-[#121212] transition-colors">Contact</Link></li>
              <li><Link href="/about#authenticity" className="hover:text-[#121212] transition-colors">Authenticity</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e6e6e6] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#6b6b6b]">
            © {new Date().getFullYear()} Taylon Timepieces. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { l: "Instagram", h: "#" },
              { l: "TikTok", h: "#" },
              { l: "YouTube", h: "#" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                className="text-[12px] tracking-[2px] uppercase text-[#6b6b6b] hover:text-[#121212] transition-colors"
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
