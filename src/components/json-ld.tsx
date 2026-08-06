import { SITE_URL } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function lodgingBusinessJsonLd({
  name,
  description,
  url,
  image,
  regionName,
  lat,
  lng,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  regionName: string;
  lat?: number;
  lng?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name,
    description,
    url,
    image,
    address: {
      "@type": "PostalAddress",
      addressRegion: regionName,
      addressCountry: "NA",
    },
    ...(typeof lat === "number" && typeof lng === "number"
      ? { geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng } }
      : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Namibia Stays",
    url: SITE_URL,
    description:
      "Independent guides to Namibia's lodges, camps and hotels, organised by region.",
  };
}
