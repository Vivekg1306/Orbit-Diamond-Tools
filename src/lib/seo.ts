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
    slug: "single-point-diamond-dressers",
    name: "Single Point Diamond Dressers",
    image: "/products/singlePointDiamondDressers/Single Point Diamond Dresser1.png",
    images: [
      "/products/singlePointDiamondDressers/Single Point Diamond Dresser1.png",
      "/products/singlePointDiamondDressers/Single Point Diamond Dresser2.png",
      "/products/singlePointDiamondDressers/Single Point Diamond Dresser3.png",
    ],
    description:
      "Expertly manufactured single-point dressers fitted with select natural diamonds for accurate wheel truing and controlled surface generation.",
    details:
      "Each single-point dresser is built around a carefully oriented natural diamond secured in a hardened steel body. The tool produces a clean, precise wheel face that directly translates to better workpiece geometry and finish quality. We offer multiple carat sizes, shank diameters and nose angles to match your specific grinder configuration and material requirements.",
    tag: "",
  },
  {
    slug: "multi-point-diamond-dressers",
    name: "Multi Point Diamond Dressers",
    image: "/products/multipointDiamondDressers/Multi point Diamond DressersTools1.png",
    images: [
      "/products/multipointDiamondDressers/Multi point Diamond DressersTools1.png",
      "/products/multipointDiamondDressers/Multi point Diamond DressersTools2.png",
      "/products/multipointDiamondDressers/Multi point Diamond DressersTools3.png",
    ],
    description:
      "Robust multi-point dressers packed with several diamond elements for demanding, high-throughput wheel conditioning tasks.",
    details:
      "These dressers contain multiple natural or synthetic diamonds arranged within a sintered metal body, distributing the dressing load across many cutting points. This design extends service intervals and maintains a uniform wheel surface even under aggressive feed rates. Well suited for production-line grinding of aluminium oxide and silicon carbide wheels where uptime matters.",
    tag: "",
  },
  {
    slug: "blade-type-diamond-dressers",
    name: "Blade Type Diamond Dressers",
    image: "/products/bladeTypeDiamondDressers/Blade_Type_Diamond_Dressers1.png",
    images: [
      "/products/bladeTypeDiamondDressers/Blade_Type_Diamond_Dressers1.png",
      "/products/bladeTypeDiamondDressers/Blade_Type_Diamond_Dressers2.png",
      "/products/bladeTypeDiamondDressers/Blade_Type_Diamond_Dressers3.png",
    ],
    description:
      "Slim-profile blade dressers with diamonds set along the working edge for controlled wheel profiling and form correction.",
    details:
      "The blade-type dresser's thin, flat geometry allows it to create sharp wheel profiles and maintain form accuracy with minimal operator intervention. Diamonds are strategically placed along the full length of the dressing edge, ensuring even contact and predictable wear. A reliable, economical choice for centreless, cylindrical and surface grinding setups.",
    tag: "",
  },
  {
    slug: "diamond-needle-files",
    name: "Diamond Needle Files",
    image: "/products/diamondNeedles/Diamond Needle Files.png",
    images: ["/products/diamondNeedles/Diamond Needle Files.png"],
    description:
      "Precision diamond needle files for fine deburring, shaping and surface finishing of carbide, hardened steel, ceramic and glass components.",
    details:
      "Our diamond needle files are coated with industrial-grade diamond particles bonded to hardened steel shanks, enabling effective material removal on surfaces that conventional steel files cannot touch. Available in flat, round, half-round, square, triangular and barrette cross-sections, they are ideal for intricate work in die making, mould finishing, jewellery fabrication and electronics assembly. Each file is engineered for a controlled, even cut that minimises surface damage while achieving tight dimensional tolerances.",
    tag: "",
  },
  {
    slug: "diamond-lapping-paste",
    name: "Diamond Lapping Paste",
    image: "/products/diamondLappingPaste/Diamond Lapping Paste Tools.png",
    images: ["/products/diamondLappingPaste/Diamond Lapping Paste Tools.png"],
    description:
      "Accurately graded diamond lapping paste for achieving mirror-quality finishes on metals, ceramics, glass and composite surfaces.",
    details:
      "Our lapping paste is formulated with tightly classified diamond particles suspended in a stable, non-drying carrier medium. It provides consistent material removal and progressively finer finishes from rough lapping through to final polishing. Widely used for valve seat lapping, mechanical seal face preparation, gauge block finishing and optical component surfacing.",
    tag: "",
  },
  {
    slug: "chisel-type-diamond-dressers",
    name: "Chisel Type Diamond Dressers",
    image: "/products/chiselTypeDiamondDressers/Chisel Type Diamond Dresser 1.png",
    images: [
      "/products/chiselTypeDiamondDressers/Chisel Type Diamond Dresser 1.png",
      "/products/chiselTypeDiamondDressers/Chisel Type Diamond Dresser 2.png",
    ],
    description:
      "Chisel-edge diamond dressers ground to precise angles for profile generation and form correction on grinding wheels.",
    details:
      "A single natural diamond is ground to a defined chisel geometry, enabling the dresser to produce sharp angles, radii and complex profiles on conventional abrasive wheels. Commonly applied in tool-and-cutter grinding, thread grinding and any operation that demands a tightly controlled wheel form.",
    tag: "",
  },
  {
    slug: "cluster-type-diamond-dressers",
    name: "Cluster Type Diamond Dressers",
    image: "/products/clusterTypeDiamondDressers/Cluster Type Diamond Dresser 1.png",
    images: [
      "/products/clusterTypeDiamondDressers/Cluster Type Diamond Dresser 1.png",
      "/products/clusterTypeDiamondDressers/Cluster Type Diamond Dresser 2.png",
    ],
    description:
      "Compact cluster dressers loaded with multiple diamond points for rapid, even wheel conditioning in production environments.",
    details:
      "Cluster dressers group several small diamonds into a dense, compact head that spreads the dressing force across many cutting points simultaneously. This delivers fast stock removal and a uniform wheel surface without the localised wear patterns seen in single-point tools. Ideal for surface grinders and cylindrical grinders running at high cycle rates.",
    tag: "",
  },
  {
    slug: "electroplated-diamond-mounted-points",
    name: "Electroplated Diamond Mounted Points",
    image: "/products/electroplatedDiamondMountedPoints/Electroplated Diamond Mounted Points.png",
    images: ["/products/electroplatedDiamondMountedPoints/Electroplated Diamond Mounted Points.png"],
    description:
      "Single-layer electroplated diamond mounted points for fast internal grinding, contouring and finishing of hard substrates.",
    details:
      "A monolayer of diamond grit is electroplated onto precision-shaped steel mandrels, giving these mounted points maximum abrasive exposure and a free-cutting action. They generate minimal heat, reducing the risk of micro-cracking when working on carbide dies, ceramic inserts, glass moulds and other brittle workpieces. Available in cylindrical, conical, spherical and custom tip geometries.",
    tag: "",
  },
  {
    slug: "metal-bond-diamond-mounted-points",
    name: "Metal Bond Diamond Mounted Points",
    image: "/products/metalBondDiamondMountedPoints/Metal Bond Diamond Mounted Points.png",
    images: ["/products/metalBondDiamondMountedPoints/Metal Bond Diamond Mounted Points.png"],
    description:
      "Long-lasting metal bond mounted points built to maintain form and cutting ability on tungsten carbide, ceramics and glass.",
    details:
      "The sintered metal matrix in these mounted points grips diamond particles securely, releasing them gradually as the bond wears to expose fresh abrasive. This self-sharpening mechanism delivers consistent stock removal and stable geometry over extended production runs. Suited for precision internal and external grinding of hard, wear-resistant materials.",
    tag: "",
  },
  {
    slug: "resin-bond-diamond-wheels",
    name: "Resin Bond Diamond Wheels",
    image: "/products/resinBondDiamondWheels/Resin Bond Diamond Wheels 1.png",
    images: [
      "/products/resinBondDiamondWheels/Resin Bond Diamond Wheels 1.png",
      "/products/resinBondDiamondWheels/Resin Bond Diamond Cup Wheels.png",
      "/products/resinBondDiamondWheels/Resin Bond Diamond Cup Wheels1.png",
      "/products/resinBondDiamondWheels/Resin Bond Diamond Dish Wheels.png",
      "/products/resinBondDiamondWheels/Resin Bond Dimond Internal Grinding Wheels.png",
      "/products/resinBondDiamondWheels/Resin Bond Dimond Wheels.png",
      "/products/resinBondDiamondWheels/Resin Bond Diamond Wheels for Carbide Grinding.png",
      "/products/resinBondDiamondWheels/Centreless Grinding Wheels.png",
    ],
    description:
      "Free-cutting resin bond diamond wheels that combine low heat generation with fine surface finishes on carbide and hardened steel.",
    details:
      "The resilient resin matrix cushions the diamond grains during grinding, absorbing vibration and dissipating heat before it reaches the workpiece. This results in minimal thermal damage and consistently smooth surface finishes. Our resin bond wheels are available in cup, dish, flat and custom shapes to suit tool sharpening, insert grinding and general precision finishing.",
    tag: "",
  },
  {
    slug: "diamond-indenters",
    name: "Diamond Indenters",
    image: "/products/diamondIndenters/Diamond Indenters.png",
    images: ["/products/diamondIndenters/Diamond Indenters.png"],
    description:
      "Laboratory-grade diamond indenters ground and polished to tight geometric tolerances for dependable hardness test results.",
    details:
      "Every indenter is manufactured from a carefully selected natural diamond, ground to the precise cone angle or pyramid geometry required by international testing standards. Polished tip surfaces ensure clean, measurable impressions on the test specimen. We supply Rockwell (120° cone), Vickers (136° pyramid) and Knoop configurations compatible with all widely used testing platforms.",
    tag: "",
  },
  {
    slug: "vitrified-bond-diamond-wheels",
    name: "Vitrified Bond Diamond Wheels",
    image: "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels.jpg",
    images: [
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels.jpg",
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels-1.jpg",
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels-2.jpg",
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels-3.jpg",
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels-4.jpg",
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels-5.jpg",
      "/products/vitrifiedBondDiamondWheelsCBNGrindingWheels/vitrified-bond-diamond-wheels-cbn-grinding-wheels-6.jpg",
    ],
    description:
      "Rigid vitrified bond diamond and CBN wheels engineered for tight-tolerance grinding with outstanding form stability.",
    details:
      "The glass-ceramic bond structure provides exceptional stiffness, allowing these wheels to hold complex profiles over long production runs without significant shape loss. An open, porous matrix promotes efficient coolant flow and chip clearance, keeping grinding temperatures low. Ideal for finishing PCD and PCBN tools, carbide inserts, and precision-hardened shafts.",
    tag: "",
  },
  {
    slug: "pcd-inserts",
    name: "PCD Inserts",
    image: "/products/pcdInserts/pcd-inserts.jpg",
    images: ["/products/pcdInserts/pcd-inserts.jpg"],
    description:
      "High-performance PCD inserts offering exceptional edge life for machining aluminium alloys, copper, composites and other non-ferrous materials.",
    details:
      "Our PCD inserts are brazed with a polycrystalline diamond layer that resists abrasive wear far longer than conventional carbide. The result is fewer tool changes, tighter dimensional consistency and improved surface quality across high-volume CNC turning and milling operations. Available in standard ISO geometries as well as custom configurations tailored to your application.",
    tag: "",
  },
  {
    slug: "electroplated-wheels",
    name: "Electroplated Wheels",
    image: "/products/electroplatedWheels/electroplated-wheels.jpg",
    images: [
      "/products/electroplatedWheels/electroplated-wheels.jpg",
      "/products/electroplatedWheels/electroplated-wheels-1.jpg",
      "/products/electroplatedWheels/electroplated-wheels-2.jpg",
      "/products/electroplatedWheels/electroplated-wheels-3.jpg",
      "/products/electroplatedWheels/electroplated-wheels-4.jpg",
      "/products/electroplatedWheels/electroplated-wheels-5.jpg",
      "/products/electroplatedWheels/electroplated-wheels-6 (1).jpg",
      "/products/electroplatedWheels/electroplated-wheels-7 (1).jpg",
      "/products/electroplatedWheels/electroplated-wheels-8 (1).jpg",
      "/products/electroplatedWheels/electroplated-wheels-9.jpg",
    ],
    description:
      "Single-layer electroplated diamond and CBN wheels delivering maximum abrasive exposure for rapid material removal and complex profiling.",
    details:
      "With every diamond grain fully exposed on the working surface, electroplated wheels cut aggressively from the first pass and hold their profile without the need for truing or dressing. They can be manufactured in intricate custom shapes, making them well suited for form grinding, slot cutting, contour machining and prototype production where fast turnaround is essential.",
    tag: "",
  },
  {
    slug: "roller-type-diamond-dressers",
    name: "Roller Type Diamond Dressers",
    image: "/products/rollerTypeDiamondDressers/Roller_Type_Diamond_Dresser.png",
    images: ["/products/rollerTypeDiamondDressers/Roller_Type_Diamond_Dresser.png"],
    description:
      "CNC-ready roller dressers with sintered diamond segments for automated, repeatable wheel profiling at production speed.",
    details:
      "Designed for integration into CNC and automated dressing systems, our roller dressers carry sintered diamond segments arranged in a rotating disc that mirrors the target wheel profile. The continuous rotary contact ensures even diamond wear and highly repeatable form accuracy across thousands of dressing cycles, minimising machine downtime in high-output grinding lines.",
    tag: "",
  },
  {
    slug: "ball-indenters",
    name: "Ball Indenters",
    image: "/products/ballIndenters/Ball_Intenders_Image.png",
    images: ["/products/ballIndenters/Ball_Intenders_Image.png"],
    description:
      "Accurately finished ball indenters in tungsten carbide and hardened steel for reliable Brinell hardness measurements.",
    details:
      "Each ball indenter is precision-ground and polished to strict sphericity and surface roughness limits, ensuring clean, reproducible impressions on every test specimen. We supply standard diameters from 1 mm to 10 mm in both tungsten carbide and hardened steel grades, compatible with all major Brinell testing platforms and conforming to international testing standards.",
    tag: "",
  },
] as const;

export type Product = (typeof products)[number];
