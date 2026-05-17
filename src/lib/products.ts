/* ============================================================================
 * Product catalog — central source of truth for inventory.
 *
 * NOTE: Replace with real Taylon Timepieces inventory data when available.
 * The /exclusive-collection page on the live Wix site is client-rendered and
 * could not be scraped automatically. Once you have a real export (CSV/JSON
 * from Shopify/Wix), drop it in here.
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

const make = (p: Omit<Product, "priceLabel" | "gallery"> & { gallery?: string[] }): Product => ({
  ...p,
  priceLabel: usd(p.price),
  gallery: p.gallery ?? [p.img],
});

export const products: Product[] = [
  make({
    slug: "audemars-piguet-royal-oak-15500st",
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    ref: "15500ST.OO.1220ST.01",
    price: 48445,
    year: 2022,
    condition: "Like New",
    case: "41mm Stainless Steel",
    dial: "Blue Grande Tapisserie",
    movement: "Cal. 4302 Automatic",
    waterResistance: "50m",
    bracelet: "Integrated Stainless Steel",
    boxPapers: "Full Set — Box & Papers",
    description:
      "The 41mm Royal Oak reference 15500ST in stainless steel with the iconic blue Grande Tapisserie dial. Powered by the in-house Calibre 4302, this is the modern definition of luxury sport.",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1400&q=85",
    featured: true,
    justListed: true,
  }),
  make({
    slug: "breitling-avenger-b01",
    name: "Breitling Avenger B01",
    brand: "Breitling",
    ref: "AB0147101B1X1",
    price: 5595,
    year: 2023,
    condition: "New",
    case: "44mm Stainless Steel",
    dial: "Black Chronograph",
    movement: "Breitling B01 Automatic Chronograph",
    waterResistance: "300m",
    bracelet: "Stainless Steel",
    boxPapers: "Full Set",
    description:
      "Purpose-built pilot's chronograph with the in-house B01 movement and a no-nonsense black dial.",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1400&q=85",
    featured: true,
  }),
  make({
    slug: "breitling-colt-chronograph-ii",
    name: "Breitling Colt Chronograph II",
    brand: "Breitling",
    ref: "A7338710",
    price: 3600,
    year: 2019,
    condition: "Excellent",
    case: "44mm Stainless Steel",
    dial: "Black",
    movement: "Quartz Thermocompensated",
    waterResistance: "500m",
    bracelet: "Professional III Stainless Steel",
    boxPapers: "Watch Only",
    description:
      "Robust quartz chronograph — 500m water resistance and Breitling's bombproof case construction.",
    img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1400&q=85",
    featured: true,
  }),
  make({
    slug: "breitling-super-avenger",
    name: "Breitling Super Avenger",
    brand: "Breitling",
    ref: "A1337011",
    price: 6100,
    year: 2020,
    condition: "Excellent",
    case: "48mm Stainless Steel",
    dial: "Black",
    movement: "Breitling Cal. 13 Automatic",
    waterResistance: "300m",
    bracelet: "Stainless Steel",
    boxPapers: "Box Only",
    description:
      "A statement on the wrist. The 48mm Super Avenger pairs aggressive proportions with an in-house chronograph.",
    img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1400&q=85",
    featured: true,
  }),
  make({
    slug: "rolex-submariner-date-126610ln",
    name: "Rolex Submariner Date",
    brand: "Rolex",
    ref: "126610LN",
    price: 14950,
    year: 2023,
    condition: "Like New",
    case: "41mm Oystersteel",
    dial: "Black",
    movement: "Rolex Cal. 3235 Automatic",
    waterResistance: "300m",
    bracelet: "Oyster",
    boxPapers: "Full Set",
    description:
      "The modern 41mm Submariner Date with the upgraded Cal. 3235. The dive watch by which all others are measured.",
    img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1400&q=85",
    justListed: true,
  }),
  make({
    slug: "rolex-datejust-41-126334",
    name: "Rolex Datejust 41",
    brand: "Rolex",
    ref: "126334",
    price: 11200,
    year: 2022,
    condition: "Like New",
    case: "41mm Oystersteel & White Gold Bezel",
    dial: "Blue Sunray",
    movement: "Rolex Cal. 3235 Automatic",
    waterResistance: "100m",
    bracelet: "Jubilee",
    boxPapers: "Full Set",
    description:
      "Fluted bezel, Jubilee bracelet, blue dial. The Datejust 41 — Rolex's most versatile workhorse.",
    img: "https://images.unsplash.com/photo-1548171245-d5b6abf2c1f3?w=1400&q=85",
  }),
  make({
    slug: "patek-philippe-nautilus-5711-1a",
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    ref: "5711/1A-010",
    price: 132000,
    year: 2021,
    condition: "Like New",
    case: "40mm Stainless Steel",
    dial: "Blue Embossed Horizontal",
    movement: "Cal. 26-330 S C Automatic",
    waterResistance: "120m",
    bracelet: "Integrated Stainless Steel",
    boxPapers: "Full Set",
    description:
      "The Holy Grail. The discontinued blue-dial 5711/1A in collector-grade condition with full original paperwork.",
    img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1400&q=85",
    featured: true,
  }),
  make({
    slug: "omega-speedmaster-professional",
    name: "Omega Speedmaster Professional",
    brand: "Omega",
    ref: "310.30.42.50.01.001",
    price: 7250,
    year: 2023,
    condition: "New",
    case: "42mm Stainless Steel",
    dial: "Black Step",
    movement: "Omega Cal. 3861 Manual",
    waterResistance: "50m",
    bracelet: "Stainless Steel",
    boxPapers: "Full Set",
    description:
      "The Moonwatch. Current-generation Cal. 3861 with the historically faithful step dial.",
    img: "https://images.unsplash.com/photo-1639037687537-be8b95397074?w=1400&q=85",
    justListed: true,
  }),
  make({
    slug: "tudor-black-bay-58",
    name: "Tudor Black Bay 58",
    brand: "Tudor",
    ref: "M79030N-0001",
    price: 4150,
    year: 2022,
    condition: "Excellent",
    case: "39mm Stainless Steel",
    dial: "Black",
    movement: "Tudor MT5402 Automatic",
    waterResistance: "200m",
    bracelet: "Stainless Steel",
    boxPapers: "Full Set",
    description:
      "Vintage-inspired 39mm diver with the in-house MT5402. Possibly the most-recommended luxury dive watch of the last decade.",
    img: "https://images.unsplash.com/photo-1606155291298-49ed2bb20126?w=1400&q=85",
  }),
  make({
    slug: "cartier-santos-medium",
    name: "Cartier Santos Medium",
    brand: "Cartier",
    ref: "WSSA0029",
    price: 8400,
    year: 2022,
    condition: "Like New",
    case: "35.1mm Stainless Steel",
    dial: "Silver Opaline",
    movement: "Cartier Cal. 1847 MC Automatic",
    waterResistance: "100m",
    bracelet: "QuickSwitch Steel",
    boxPapers: "Full Set",
    description:
      "Refined and unmistakable. The Santos Medium with the QuickSwitch bracelet system.",
    img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1400&q=85",
  }),
  make({
    slug: "iwc-pilot-chronograph",
    name: "IWC Pilot Chronograph",
    brand: "IWC",
    ref: "IW377710",
    price: 5800,
    year: 2021,
    condition: "Excellent",
    case: "43mm Stainless Steel",
    dial: "Black",
    movement: "IWC Cal. 79320 Automatic",
    waterResistance: "60m",
    bracelet: "Black Calfskin",
    boxPapers: "Full Set",
    description:
      "Classic IWC pilot's chronograph. Highly legible dial, day-date complication, premium calfskin strap.",
    img: "https://images.unsplash.com/photo-1612529989259-cbe6e2c4cfc1?w=1400&q=85",
  }),
  make({
    slug: "panerai-luminor-marina",
    name: "Panerai Luminor Marina",
    brand: "Panerai",
    ref: "PAM01392",
    price: 6900,
    year: 2022,
    condition: "Excellent",
    case: "44mm Stainless Steel",
    dial: "Black Sandwich",
    movement: "Panerai P.9010 Automatic",
    waterResistance: "300m",
    bracelet: "Black Rubber",
    boxPapers: "Full Set",
    description:
      "Iconic Luminor case silhouette, sandwich dial construction, and the 3-day P.9010 in-house movement.",
    img: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=1400&q=85",
  }),
  make({
    slug: "rolex-gmt-master-ii-pepsi-126710blro",
    name: "Rolex GMT-Master II 'Pepsi'",
    brand: "Rolex",
    ref: "126710BLRO",
    price: 24500,
    year: 2023,
    condition: "Like New",
    case: "40mm Oystersteel",
    dial: "Black",
    movement: "Rolex Cal. 3285 Automatic",
    waterResistance: "100m",
    bracelet: "Jubilee",
    boxPapers: "Full Set",
    description:
      "The cult-favorite 'Pepsi' GMT on Jubilee. Cerachrom bezel, 70-hour reserve, true-GMT functionality.",
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1400&q=85",
    justListed: true,
  }),
  make({
    slug: "rolex-daytona-116500ln",
    name: "Rolex Cosmograph Daytona",
    brand: "Rolex",
    ref: "116500LN",
    price: 36500,
    year: 2021,
    condition: "Like New",
    case: "40mm Oystersteel",
    dial: "White",
    movement: "Rolex Cal. 4130 Automatic",
    waterResistance: "100m",
    bracelet: "Oyster",
    boxPapers: "Full Set",
    description:
      "The discontinued 116500LN with the panda-style white dial and black Cerachrom bezel. Sought-after configuration.",
    img: "https://images.unsplash.com/photo-1623998021446-45cd9b269c95?w=1400&q=85",
    featured: true,
  }),
  make({
    slug: "ap-royal-oak-offshore-26470st",
    name: "Audemars Piguet Royal Oak Offshore",
    brand: "Audemars Piguet",
    ref: "26470ST.OO.A027CA.01",
    price: 42000,
    year: 2020,
    condition: "Excellent",
    case: "42mm Stainless Steel",
    dial: "Black Méga Tapisserie",
    movement: "Cal. 3126/3840 Automatic Chronograph",
    waterResistance: "100m",
    bracelet: "Black Rubber",
    boxPapers: "Full Set",
    description:
      "The Offshore that built the legend. Méga Tapisserie dial, 42mm presence, chronograph caliber 3126/3840.",
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1400&q=85",
  }),
  make({
    slug: "patek-philippe-aquanaut-5167a",
    name: "Patek Philippe Aquanaut",
    brand: "Patek Philippe",
    ref: "5167A-001",
    price: 58000,
    year: 2020,
    condition: "Excellent",
    case: "40mm Stainless Steel",
    dial: "Black Embossed",
    movement: "Cal. 324 S C Automatic",
    waterResistance: "120m",
    bracelet: "Black Tropical Composite",
    boxPapers: "Full Set",
    description:
      "Sporty Patek elegance. The 5167A on the original tropical composite strap.",
    img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=1400&q=85",
  }),
  make({
    slug: "omega-seamaster-300m",
    name: "Omega Seamaster Diver 300M",
    brand: "Omega",
    ref: "210.30.42.20.03.001",
    price: 4950,
    year: 2023,
    condition: "Like New",
    case: "42mm Stainless Steel",
    dial: "Blue Wave",
    movement: "Omega Cal. 8800 Co-Axial Master Chronometer",
    waterResistance: "300m",
    bracelet: "Stainless Steel",
    boxPapers: "Full Set",
    description:
      "Laser-engraved wave dial, helium escape valve, Master Chronometer certification.",
    img: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=1400&q=85",
  }),
  make({
    slug: "tudor-pelagos-39",
    name: "Tudor Pelagos 39",
    brand: "Tudor",
    ref: "M25407N-0001",
    price: 4650,
    year: 2023,
    condition: "New",
    case: "39mm Titanium",
    dial: "Black",
    movement: "Tudor MT5400 Automatic",
    waterResistance: "200m",
    bracelet: "Titanium",
    boxPapers: "Full Set",
    description:
      "All-titanium 39mm professional diver. Lightweight, METAS-certified, daily-driver dimensions.",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1400&q=85",
    justListed: true,
  }),
  make({
    slug: "cartier-tank-must",
    name: "Cartier Tank Must",
    brand: "Cartier",
    ref: "WSTA0041",
    price: 3200,
    year: 2022,
    condition: "Excellent",
    case: "33.7 × 25.5mm Stainless Steel",
    dial: "Silver",
    movement: "High-Autonomy Quartz",
    waterResistance: "30m",
    bracelet: "Black Leather",
    boxPapers: "Full Set",
    description:
      "The modern Tank Must — an iconic silhouette with 8-year quartz autonomy.",
    img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1400&q=85",
  }),
  make({
    slug: "iwc-portugieser-automatic",
    name: "IWC Portugieser Automatic",
    brand: "IWC",
    ref: "IW500705",
    price: 9800,
    year: 2021,
    condition: "Excellent",
    case: "42.3mm Stainless Steel",
    dial: "Silver",
    movement: "IWC Cal. 52010 Automatic",
    waterResistance: "30m",
    bracelet: "Black Alligator",
    boxPapers: "Full Set",
    description:
      "Pure dress watch geometry, 7-day power reserve, and the in-house Pellaton-winding Cal. 52010.",
    img: "https://images.unsplash.com/photo-1612529989259-cbe6e2c4cfc1?w=1400&q=85",
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
