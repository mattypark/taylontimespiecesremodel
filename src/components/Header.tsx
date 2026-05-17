"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "Sell a Watch", href: "/sell" },
  { label: "Live Auctions", href: "/live-auctions" },
  { label: "Buy Smarter", href: "/buy-smarter-guide" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b transition-shadow ${
        scrolled ? "border-[#e6e6e6] shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between relative">
        {/* Left: country selector / mobile menu */}
        <div className="flex items-center gap-3 text-xs tracking-wide text-[#6b6b6b]">
          <button
            aria-label="Menu"
            className="md:hidden p-1"
            onClick={() => setOpen((s) => !s)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-2">
            <span className="inline-block w-4 h-3 bg-gradient-to-b from-[#3c3b6e] via-white to-[#b22234]" />
            <span>USD</span>
          </div>
        </div>

        {/* Center: logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none"
        >
          <span className="text-[22px] md:text-[26px] font-extrabold tracking-[6px] uppercase">
            Taylon
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[5px] uppercase text-[#6b6b6b] mt-1">
            Timepieces
          </span>
        </Link>

        {/* Right: icons */}
        <div className="flex items-center gap-5 text-[#121212]">
          <button aria-label="Search" className="hover:opacity-60 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button aria-label="Account" className="hover:opacity-60 transition-opacity hidden sm:inline-flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
          </button>
          <Link href="/cart" aria-label="Cart" className="hover:opacity-60 transition-opacity relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1 -right-2 bg-[#121212] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {count}
            </span>
          </Link>
        </div>
      </div>

      {/* Sub-nav (desktop) */}
      <nav className="hidden md:block border-t border-[#e6e6e6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[48px] flex items-center justify-center gap-10 text-[12px] tracking-[2px] uppercase font-semibold text-[#121212]">
          <Link href="/" className="hover:text-[#6b6b6b] transition-colors">Home</Link>
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#6b6b6b] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[#e6e6e6] bg-white">
          <div className="px-6 py-4 flex flex-col gap-3 text-[13px] tracking-[2px] uppercase font-semibold">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
