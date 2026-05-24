export const siteConfig = {
  name: "Orbit Diamond Tools",
  shortName: "ODT",
  legalName: "Orbit Diamond Tools",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbitdiamondtools.com",
  description:
    "Manufacturer and exporter of precision diamond dressers, MCD blades, single-point diamond tools, lapping compounds and needle files for industrial grinding applications.",
  tagline: "Precision Diamond Tooling for Industrial Grinding",
  keywords: [
    "diamond dressers",
    "diamond tools manufacturer",
    "MCD dressing blades",
    "multipoint diamond dresser",
    "single point diamond dresser",
    "diamond lapping compound",
    "diamond needle files",
    "profile wheel dressing",
    "grinding wheel dressing tools",
    "industrial diamond tools India",
    "diamond tools exporter",
    "Ambernath diamond tools",
  ],
  contact: {
    phone: "+91-99605-19187",
    email: "sales@orbitdiamondtools.com",
    address: {
      street: "1st Floor, Plot No. K-1, Shop No. 109 I Wing, Udyog Bhawan-2, Near Godrej Industries Ltd, MIDC, Anand Nagar",
      locality: "Ambernath East",
      region: "Maharashtra",
      postalCode: "421506",
      country: "IN",
    },
    geo: {
      latitude: 19.2167,
      longitude: 73.1833,
    },
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },
  foundingYear: 1998,
} as const;

export const products = [
  {
    slug: "blade-type-dressers",
    name: "Blade-Type Dressers",
    image: "/products/download.jfif",
    description:
      "Wear-resistant blade-type diamond dressers for consistent, repeatable dressing of grinding wheels across thousands of cycles.",
    tag: "Best Seller",
  },
  {
    slug: "mcd-dressing-blades",
    name: "MCD Dressing Blades",
    image: "/products/MCD-Dressing-Blades-04-scaled.jpg",
    description:
      "Monocrystalline Diamond (MCD) dressing blades engineered for high-precision profile dressing and finish grinding.",
    tag: "New",
  },
  {
    slug: "single-point-dressers",
    name: "Single-Point Dressers",
    image: "/products/Single-Point-Diamond-Dresser-09-scaled.jpg",
    description:
      "Industrial single-point diamond dressers with hand-selected natural diamonds set in wear-resistant matrix.",
    tag: "",
  },
  {
    slug: "diamond-lapping-compounds",
    name: "Diamond Lapping Compounds",
    image: "/products/Diamond-Lapping-Compound-11-scaled.jpg",
    description:
      "Premium diamond lapping compounds available across the full grit range for fine finishing and polishing operations.",
    tag: "",
  },
  {
    slug: "diamond-needle-files",
    name: "Diamond Needle Files",
    image: "/products/Diamond-Needle-Files-12-scaled.jpg",
    description:
      "Diamond-coated needle files for precision deburring, polishing and finishing of hardened steels, carbides and ceramics.",
    tag: "",
  },
  {
    slug: "chisel-type-diamond-dressers",
    name: "Chisel-Type Diamond Dressers",
    image: "/products/Chisel-TypeProfile-Diamond-Dressers-01-scaled.jpg",
    description:
      "Chisel-type diamond dressers for accurate profile dressing of conventional grinding wheels.",
    tag: "Featured",
  },
] as const;

export type Product = (typeof products)[number];
