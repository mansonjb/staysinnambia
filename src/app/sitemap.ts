import type { MetadataRoute } from "next";
import { lodges, regions, selfDriveRoutes } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

/** Builds the reciprocal en/de/nl hreflang block from a single EN-style path. */
function withLocales(enPath: string) {
  const dePath = enPath === "/" ? "/de" : `/de${enPath}`;
  const nlPath = enPath === "/" ? "/nl" : `/nl${enPath}`;
  return {
    languages: {
      en: `${SITE_URL}${enPath}`,
      de: `${SITE_URL}${dePath}`,
      nl: `${SITE_URL}${nlPath}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1, alternates: withLocales("/") },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.4, alternates: withLocales("/about") },
    {
      url: `${SITE_URL}/where-to-stay/namibia`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: withLocales("/where-to-stay/namibia"),
    },
    {
      url: `${SITE_URL}/best-lodges-in-namibia`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: withLocales("/best-lodges-in-namibia"),
    },
    {
      url: `${SITE_URL}/itineraries`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: withLocales("/itineraries"),
    },
    { url: `${SITE_URL}/guides`, changeFrequency: "monthly", priority: 0.6, alternates: withLocales("/guides") },
  ];

  const GUIDE_SLUGS: { slug: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { slug: "best-luxury-lodges", changeFrequency: "monthly", priority: 0.7 },
    { slug: "best-safari-lodges", changeFrequency: "monthly", priority: 0.7 },
    { slug: "best-desert-lodges", changeFrequency: "monthly", priority: 0.7 },
    { slug: "best-family-lodges", changeFrequency: "monthly", priority: 0.7 },
    { slug: "best-romantic-stays", changeFrequency: "monthly", priority: 0.7 },
    { slug: "most-remote-lodges", changeFrequency: "monthly", priority: 0.7 },
    { slug: "namibia-glamping", changeFrequency: "monthly", priority: 0.7 },
    { slug: "namibia-farm-stays", changeFrequency: "monthly", priority: 0.5 },
    { slug: "best-safari-areas", changeFrequency: "monthly", priority: 0.7 },
    { slug: "best-time-to-visit-namibia", changeFrequency: "monthly", priority: 0.8 },
    { slug: "namibia-without-4x4", changeFrequency: "monthly", priority: 0.6 },
    { slug: "namibia-with-kids", changeFrequency: "monthly", priority: 0.6 },
    { slug: "namibia-honeymoon", changeFrequency: "monthly", priority: 0.6 },
    { slug: "luxury-namibia", changeFrequency: "monthly", priority: 0.6 },
    { slug: "namibia-visa-requirements", changeFrequency: "monthly", priority: 0.8 },
    { slug: "namibia-self-drive-guide", changeFrequency: "monthly", priority: 0.8 },
    { slug: "namibia-safety-and-health", changeFrequency: "monthly", priority: 0.8 },
    { slug: "namibia-trip-cost", changeFrequency: "monthly", priority: 0.8 },
    { slug: "namibia-wildlife-guide", changeFrequency: "monthly", priority: 0.8 },
    { slug: "namibia-vs-botswana", changeFrequency: "monthly", priority: 0.7 },
    { slug: "namibia-connectivity", changeFrequency: "monthly", priority: 0.6 },
    { slug: "namibia-stargazing-photography", changeFrequency: "monthly", priority: 0.6 },
    { slug: "himba-culture-namibia", changeFrequency: "monthly", priority: 0.6 },
    { slug: "namibia-trip-extensions", changeFrequency: "monthly", priority: 0.6 },
    { slug: "namibia-packing-list", changeFrequency: "monthly", priority: 0.6 },
    { slug: "self-drive-vs-guided-namibia", changeFrequency: "monthly", priority: 0.7 },
  ];

  const guideRoutes: MetadataRoute.Sitemap = GUIDE_SLUGS.map((g) => ({
    url: `${SITE_URL}/${g.slug}`,
    changeFrequency: g.changeFrequency,
    priority: g.priority,
    alternates: withLocales(`/${g.slug}`),
  }));

  const regionRoutes: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${SITE_URL}/where-to-stay/${r.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: withLocales(`/where-to-stay/${r.slug}`),
  }));

  const lodgeRoutes: MetadataRoute.Sitemap = lodges.map((l) => ({
    url: `${SITE_URL}/lodges/${l.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: withLocales(`/lodges/${l.slug}`),
  }));

  const itineraryRoutes: MetadataRoute.Sitemap = selfDriveRoutes.map((r) => ({
    url: `${SITE_URL}/itineraries/${r.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: withLocales(`/itineraries/${r.slug}`),
  }));

  function localizedStaticRoutes(locale: "de" | "nl", priorityScale: number): MetadataRoute.Sitemap {
    return [
      { url: `${SITE_URL}/${locale}`, changeFrequency: "weekly", priority: 0.95, alternates: withLocales("/") },
      { url: `${SITE_URL}/${locale}/about`, changeFrequency: "monthly", priority: 0.4, alternates: withLocales("/about") },
      {
        url: `${SITE_URL}/${locale}/where-to-stay/namibia`,
        changeFrequency: "weekly",
        priority: 0.9 * priorityScale,
        alternates: withLocales("/where-to-stay/namibia"),
      },
      {
        url: `${SITE_URL}/${locale}/best-lodges-in-namibia`,
        changeFrequency: "weekly",
        priority: 0.9 * priorityScale,
        alternates: withLocales("/best-lodges-in-namibia"),
      },
      {
        url: `${SITE_URL}/${locale}/itineraries`,
        changeFrequency: "monthly",
        priority: 0.8 * priorityScale,
        alternates: withLocales("/itineraries"),
      },
      {
        url: `${SITE_URL}/${locale}/guides`,
        changeFrequency: "monthly",
        priority: 0.6 * priorityScale,
        alternates: withLocales("/guides"),
      },
    ];
  }

  function localizedGuideRoutes(locale: "de" | "nl", priorityScale: number): MetadataRoute.Sitemap {
    return GUIDE_SLUGS.map((g) => ({
      url: `${SITE_URL}/${locale}/${g.slug}`,
      changeFrequency: g.changeFrequency,
      priority: g.priority * priorityScale,
      alternates: withLocales(`/${g.slug}`),
    }));
  }

  function localizedRegionRoutes(locale: "de" | "nl", priorityScale: number): MetadataRoute.Sitemap {
    return regions.map((r) => ({
      url: `${SITE_URL}/${locale}/where-to-stay/${r.slug}`,
      changeFrequency: "weekly",
      priority: 0.9 * priorityScale,
      alternates: withLocales(`/where-to-stay/${r.slug}`),
    }));
  }

  function localizedLodgeRoutes(locale: "de" | "nl", priorityScale: number): MetadataRoute.Sitemap {
    return lodges.map((l) => ({
      url: `${SITE_URL}/${locale}/lodges/${l.slug}`,
      changeFrequency: "monthly",
      priority: 0.7 * priorityScale,
      alternates: withLocales(`/lodges/${l.slug}`),
    }));
  }

  function localizedItineraryRoutes(locale: "de" | "nl", priorityScale: number): MetadataRoute.Sitemap {
    return selfDriveRoutes.map((r) => ({
      url: `${SITE_URL}/${locale}/itineraries/${r.slug}`,
      changeFrequency: "monthly",
      priority: 0.7 * priorityScale,
      alternates: withLocales(`/itineraries/${r.slug}`),
    }));
  }

  return [
    ...staticRoutes,
    ...guideRoutes,
    ...regionRoutes,
    ...lodgeRoutes,
    ...itineraryRoutes,
    ...localizedStaticRoutes("de", 0.9),
    ...localizedGuideRoutes("de", 0.9),
    ...localizedRegionRoutes("de", 0.9),
    ...localizedLodgeRoutes("de", 0.9),
    ...localizedItineraryRoutes("de", 0.9),
    ...localizedStaticRoutes("nl", 0.9),
    ...localizedGuideRoutes("nl", 0.9),
    ...localizedRegionRoutes("nl", 0.9),
    ...localizedLodgeRoutes("nl", 0.9),
    ...localizedItineraryRoutes("nl", 0.9),
  ];
}
