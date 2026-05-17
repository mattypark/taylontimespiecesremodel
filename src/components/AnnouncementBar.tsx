export function AnnouncementBar() {
  const messages = [
    "JOIN VIP TEXT LIST — DAILY DROPS",
    "FREE INSURED SHIPPING ON ALL ORDERS",
    "EBAY LIVE AUCTIONS — TUESDAYS & THURSDAYS 8PM ET",
    "AUTHENTICATED IN-HOUSE BY EXPERTS",
  ];
  const loop = [...messages, ...messages, ...messages, ...messages];
  return (
    <div className="bg-[#121212] text-white text-[11px] tracking-[2px] uppercase font-semibold py-2.5 overflow-hidden">
      <div className="ticker-track inline-flex whitespace-nowrap">
        {loop.map((m, i) => (
          <span key={i} className="px-8 inline-flex items-center gap-8">
            {m}
            <span className="text-white/40">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
