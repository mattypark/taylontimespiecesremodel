"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  brands,
  conditions,
  priceBuckets,
  products,
  type Condition,
} from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "year-desc";

export default function ShopPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([]);
  const [selectedBucket, setSelectedBucket] = useState<number | null>(null);
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedBrands.length) list = list.filter((p) => selectedBrands.includes(p.brand));
    if (selectedConditions.length)
      list = list.filter((p) => selectedConditions.includes(p.condition));
    if (selectedBucket !== null) {
      const b = priceBuckets[selectedBucket];
      list = list.filter((p) => p.price >= b.min && p.price < b.max);
    }
    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "year-desc": list.sort((a, b) => b.year - a.year); break;
      default:
        list.sort((a, b) =>
          (b.featured ? 1 : 0) - (a.featured ? 1 : 0) ||
          (b.justListed ? 1 : 0) - (a.justListed ? 1 : 0)
        );
    }
    return list;
  }, [selectedBrands, selectedConditions, selectedBucket, sort]);

  const toggle = <T,>(arr: T[], set: (v: T[]) => void, v: T) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const clearAll = () => {
    setSelectedBrands([]);
    setSelectedConditions([]);
    setSelectedBucket(null);
  };

  const totalFilters =
    selectedBrands.length + selectedConditions.length + (selectedBucket !== null ? 1 : 0);

  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e6e6e6] py-14 md:py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3">
            Current Inventory
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Shop the Collection
          </h1>
          <p className="text-base md:text-lg text-[#6b6b6b] mt-5 max-w-2xl leading-relaxed">
            Every piece authenticated in-house. Filter by brand, price, or condition —
            and request a video walkthrough on any watch.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
          {/* Sidebar filters */}
          <aside className="space-y-10">
            <div className="flex items-center justify-between">
              <p className="text-[11px] tracking-[3px] uppercase font-semibold">
                Filters {totalFilters > 0 && <span className="text-[#6b6b6b]">({totalFilters})</span>}
              </p>
              {totalFilters > 0 && (
                <button
                  onClick={clearAll}
                  className="text-[11px] tracking-[2px] uppercase text-[#6b6b6b] hover:text-[#121212] transition-colors underline underline-offset-4"
                >
                  Clear
                </button>
              )}
            </div>

            <FilterGroup title="Brand">
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <button
                    key={b}
                    className="filter-pill"
                    data-active={selectedBrands.includes(b)}
                    onClick={() => toggle(selectedBrands, setSelectedBrands, b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Price">
              <div className="flex flex-wrap gap-2">
                {priceBuckets.map((b, i) => (
                  <button
                    key={b.label}
                    className="filter-pill"
                    data-active={selectedBucket === i}
                    onClick={() => setSelectedBucket(selectedBucket === i ? null : i)}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Condition">
              <div className="flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <button
                    key={c}
                    className="filter-pill"
                    data-active={selectedConditions.includes(c)}
                    onClick={() => toggle(selectedConditions, setSelectedConditions, c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </FilterGroup>
          </aside>

          {/* Grid + sort */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#e6e6e6]">
              <p className="text-[12px] tracking-[2px] uppercase text-[#6b6b6b]">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
              </p>
              <div className="flex items-center gap-3">
                <label className="text-[11px] tracking-[2px] uppercase text-[#6b6b6b]">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="text-[12px] tracking-[1.5px] uppercase font-semibold bg-transparent border border-[#121212] px-3 py-2 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="year-desc">Newest First</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-lg text-[#6b6b6b] mb-6">No watches match those filters.</p>
                <button onClick={clearAll} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filtered.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-4">{title}</p>
      {children}
    </div>
  );
}
