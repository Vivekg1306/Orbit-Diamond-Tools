import { siteConfig, products } from "@/lib/seo";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

function Script({ data }: { data: JsonValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data: JsonValue = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    foundingDate: String(siteConfig.foundingYear),
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi", "mr"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
  return <Script data={data} />;
}

export function LocalBusinessJsonLd() {
  const data: JsonValue = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
  };
  return <Script data={data} />;
}

export function WebsiteJsonLd() {
  const data: JsonValue = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return <Script data={data} />;
}

export function ProductsItemListJsonLd() {
  const data: JsonValue = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Orbit Diamond Tools — Product Catalogue",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product-${p.slug}`,
        name: p.name,
        description: p.description,
        image: `${siteConfig.url}${p.image}`,
        brand: { "@type": "Brand", name: siteConfig.name },
        manufacturer: { "@type": "Organization", name: siteConfig.name },
        category: "Industrial Diamond Tools",
      },
    })),
  };
  return <Script data={data} />;
}
