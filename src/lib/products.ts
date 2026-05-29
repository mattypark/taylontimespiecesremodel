/* ============================================================================
 * Product catalog — current in-stock inventory from taylontimepieces.com.
 *
 * Images are still Unsplash placeholders — drop real product photos into
 * /public/products/ and update each `img` + `gallery` field.
 * ========================================================================== */

export type Condition = "New" | "Like New" | "Excellent" | "Very Good";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  ref: string;
  price: number;        // USD
  priceLabel: string;   // pre-formatted display
  year: number;
  condition: Condition;
  case: string;
  dial: string;
  movement: string;
  waterResistance: string;
  bracelet: string;
  boxPapers: string;
  description: string;
  img: string;
  gallery: string[];
  featured?: boolean;
  justListed?: boolean;
};

const usd = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const make = (
  p: Omit<Product, "priceLabel" | "gallery"> & { gallery?: string[] }
): Product => ({
  ...p,
  priceLabel: usd(p.price),
  gallery: p.gallery ?? [p.img],
});

export const products: Product[] = [
  make({
    slug: "omega-seamaster-planet-ocean-600m-blue",
    name: "Omega Seamaster Planet Ocean 600M",
    brand: "Omega",
    ref: "215.30.44.21.03.001",
    price: 5450,
    year: 2021,
    condition: "Excellent",
    case: "43.5mm Stainless Steel",
    dial: "Blue Ceramic",
    movement: "Omega Cal. 8900 Co-Axial Master Chronometer",
    waterResistance: "600m",
    bracelet: "Stainless Steel",
    boxPapers: "Full Set",
    description:
      "Co-axial Master Chronometer movement, ceramic bezel, 600m of water resistance — the modern Planet Ocean does it all and wears it well.",
    img: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "omega-seamaster-planet-ocean-600m-orange",
    name: "Omega Seamaster Planet Ocean 600M",
    brand: "Omega",
    ref: "215.32.44.21.01.001",
    price: 5650,
    year: 2022,
    condition: "Excellent",
    case: "43.5mm Stainless Steel",
    dial: "Black with Orange Accents",
    movement: "Omega Cal. 8900 Co-Axial Master Chronometer",
    waterResistance: "600m",
    bracelet: "Black & Orange Rubber",
    boxPapers: "Full Set",
    description:
      "The dive-ready orange-accent Planet Ocean on a sport rubber strap. METAS-certified, magnetic-resistant, ready for the water.",
    img: "https://images.unsplash.com/photo-1611591437281-460914d36bf0?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "omega-seamaster-diver-300m-black-black",
    name: "Omega Seamaster Diver 300M 'Black Black'",
    brand: "Omega",
    ref: "210.92.44.20.01.001",
    price: 7950,
    year: 2023,
    condition: "Like New",
    case: "43.5mm Black Ceramic",
    dial: "Black Ceramic Wave",
    movement: "Omega Cal. 8806 Co-Axial Master Chronometer",
    waterResistance: "300m",
    bracelet: "Black Rubber",
    boxPapers: "Full Set",
    description:
      "Murdered-out from end to end. Full black ceramic case, wave-pattern black ceramic dial, and the Co-Axial Master Chronometer Cal. 8806.",
    img: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "rolex-datejust-41-wimbledon",
    name: "Rolex Datejust 41 'Wimbledon'",
    brand: "Rolex",
    ref: "126334",
    price: 12950,
    year: 2023,
    condition: "Like New",
    case: "41mm Oystersteel & White Gold Bezel",
    dial: "Slate Roman 'Wimbledon'",
    movement: "Rolex Cal. 3235 Automatic",
    waterResistance: "100m",
    bracelet: "Oyster",
    boxPapers: "Full Set",
    description:
      "The fluted-bezel Datejust 41 with the slate Roman 'Wimbledon' dial — one of the most quietly iconic configurations in the Rolex catalog.",
    img: "/products/rolex-wimbledon-41.png",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "rolex-oyster-perpetual-celebration",
    name: "Rolex Oyster Perpetual 'Celebration'",
    brand: "Rolex",
    ref: "124300",
    price: 17500,
    year: 2023,
    condition: "Like New",
    case: "41mm Oystersteel",
    dial: "Turquoise with Bubble Motif",
    movement: "Rolex Cal. 3230 Automatic",
    waterResistance: "100m",
    bracelet: "Oyster",
    boxPapers: "Full Set",
    description:
      "The discontinued turquoise 'Celebration' OP — Rolex's playful bubble-motif dial, already collector-status the day it launched.",
    img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "hublot-classic-fusion-aerofusion-black-magic-2024",
    name: "Hublot Classic Fusion Aerofusion 'Black Magic'",
    brand: "Hublot",
    ref: "525.CM.0170.RX",
    price: 14200,
    year: 2024,
    condition: "New",
    case: "45mm Black Ceramic",
    dial: "Skeletonized",
    movement: "Hublot HUB1155 Automatic Chronograph",
    waterResistance: "50m",
    bracelet: "Black Rubber",
    boxPapers: "Full Set",
    description:
      "2024 production. The skeleton-dial Aerofusion in full black ceramic — 45mm of architectural watchmaking with the HUB1155 chronograph.",
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "panerai-submersible-bmg-tech-blue",
    name: "Panerai Submersible BMG-TECH Blue Dial",
    brand: "Panerai",
    ref: "PAM00692",
    price: 9450,
    year: 2020,
    condition: "Excellent",
    case: "47mm BMG-TECH",
    dial: "Blue Sun-Brushed",
    movement: "Panerai P.9010 Automatic",
    waterResistance: "300m",
    bracelet: "Black Rubber",
    boxPapers: "Full Set",
    description:
      "BMG-TECH bulk metallic glass case — lighter, harder, and shock-resistant. Sun-brushed blue dial, 3-day in-house P.9010.",
    img: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "breitling-chronospace-blacksteel-46",
    name: "Breitling Chronospace Blacksteel 46mm",
    brand: "Breitling",
    ref: "M7836522/BD39",
    price: 4250,
    year: 2019,
    condition: "Excellent",
    case: "46mm Blacksteel",
    dial: "Black Multi-Counter Chronograph",
    movement: "Breitling Cal. 78 SuperQuartz Thermocompensated",
    waterResistance: "200m",
    bracelet: "Black Ocean Racer Rubber",
    boxPapers: "Full Set",
    description:
      "Aviation tool watch from end to end. 46mm Blacksteel case, multi-function SuperQuartz movement, and full pilot's chronograph functionality.",
    img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
];

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const conditions: Condition[] = ["New", "Like New", "Excellent", "Very Good"];

export const priceBuckets: { label: string; min: number; max: number }[] = [
  { label: "Under $5K", min: 0, max: 5000 },
  { label: "$5K – $10K", min: 5000, max: 10000 },
  { label: "$10K – $25K", min: 10000, max: 25000 },
  { label: "$25K – $50K", min: 25000, max: 50000 },
  { label: "$50K+", min: 50000, max: Infinity },
];

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getFeatured = (): Product[] => products.filter((p) => p.featured).slice(0, 4);
export const getJustListed = (): Product[] =>
  products.filter((p) => p.justListed).slice(0, 8);

export const getRelated = (slug: string, n = 4): Product[] => {
  const p = getProduct(slug);
  if (!p) return [];
  return products
    .filter((x) => x.slug !== slug && x.brand === p.brand)
    .concat(products.filter((x) => x.slug !== slug && x.brand !== p.brand))
    .slice(0, n);
};
