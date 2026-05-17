"use client";

import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const list = images.length ? images : [];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {list.length > 1 && (
        <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:max-h-[640px]">
          {list.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[#f5f5f5] overflow-hidden border transition-colors ${
                active === i ? "border-[#121212]" : "border-[#e6e6e6] hover:border-[#9a9a9a]"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 aspect-square bg-[#f5f5f5] overflow-hidden">
        <img
          src={list[active]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
