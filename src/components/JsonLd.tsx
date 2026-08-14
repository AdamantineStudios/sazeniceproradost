import { SITE, absoluteUrl } from "@/config";

/** Strukturovaná data LocalBusiness pro vyhledávače. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    email: SITE.email,
    url: absoluteUrl("/"),
    image: absoluteUrl("/og.png"),
    sameAs: [SITE.instagram],
    areaServed: "Plzeňský kraj",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Plzeňský kraj",
      addressCountry: "CZ",
    },
    priceRange: "cena na dotaz",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
