"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { localeFromPathname, withLocale } from "@/lib/i18n";

const COLUMNS_EN = [
  {
    title: "Regions",
    links: [
      { label: "Etosha", href: "/where-to-stay/etosha" },
      { label: "Sossusvlei", href: "/where-to-stay/sossusvlei" },
      { label: "Swakopmund", href: "/where-to-stay/swakopmund" },
      { label: "Damaraland", href: "/where-to-stay/damaraland" },
      { label: "Skeleton Coast", href: "/where-to-stay/skeleton-coast" },
      { label: "Windhoek", href: "/where-to-stay/windhoek" },
      { label: "Fish River Canyon", href: "/where-to-stay/fish-river-canyon" },
      { label: "Caprivi Strip", href: "/where-to-stay/caprivi" },
      { label: "Spitzkoppe", href: "/where-to-stay/spitzkoppe" },
    ],
  },
  {
    title: "Lodges",
    links: [
      { label: "Best Lodges in Namibia", href: "/best-lodges-in-namibia" },
      { label: "Best Luxury Lodges", href: "/best-luxury-lodges" },
      { label: "Best Safari Lodges", href: "/best-safari-lodges" },
      { label: "Best Desert Lodges", href: "/best-desert-lodges" },
      { label: "Best Family Lodges", href: "/best-family-lodges" },
    ],
  },
  {
    title: "Itineraries",
    links: [
      { label: "7-day Namibia", href: "/itineraries/7-days" },
      { label: "10-day Namibia", href: "/itineraries/10-days" },
      { label: "14-day Namibia", href: "/itineraries/14-days" },
      { label: "Namibia Self-Drive Guide", href: "/namibia-self-drive-guide" },
      { label: "Namibia Without 4x4", href: "/namibia-without-4x4" },
    ],
  },
  {
    title: "Trip Planning",
    links: [
      { label: "Visa Requirements", href: "/namibia-visa-requirements" },
      { label: "Safety & Health", href: "/namibia-safety-and-health" },
      { label: "Trip Cost", href: "/namibia-trip-cost" },
      { label: "Self-Drive vs Guided", href: "/self-drive-vs-guided-namibia" },
      { label: "Namibia vs Botswana", href: "/namibia-vs-botswana" },
      { label: "Connectivity & eSIM", href: "/namibia-connectivity" },
      { label: "Packing List", href: "/namibia-packing-list" },
      { label: "Trip Extensions", href: "/namibia-trip-extensions" },
      { label: "Himba Culture", href: "/himba-culture-namibia" },
    ],
  },
  {
    title: "More Guides",
    links: [
      { label: "Why Visit Namibia in 2027", href: "/why-visit-namibia-2027" },
      { label: "Namibia with Kids", href: "/namibia-with-kids" },
      { label: "Namibia Honeymoon", href: "/namibia-honeymoon" },
      { label: "Luxury Namibia", href: "/luxury-namibia" },
      { label: "Best Time to Visit", href: "/best-time-to-visit-namibia" },
      { label: "Best Safari Areas", href: "/best-safari-areas" },
      { label: "Wildlife Guide", href: "/namibia-wildlife-guide" },
      { label: "Stargazing & Photography", href: "/namibia-stargazing-photography" },
    ],
  },
];

const COLUMNS_DE = [
  {
    title: "Regionen",
    links: [
      { label: "Etosha", href: "/where-to-stay/etosha" },
      { label: "Sossusvlei", href: "/where-to-stay/sossusvlei" },
      { label: "Swakopmund", href: "/where-to-stay/swakopmund" },
      { label: "Damaraland", href: "/where-to-stay/damaraland" },
      { label: "Skeleton Coast", href: "/where-to-stay/skeleton-coast" },
      { label: "Windhoek", href: "/where-to-stay/windhoek" },
      { label: "Fish River Canyon", href: "/where-to-stay/fish-river-canyon" },
      { label: "Caprivi Strip", href: "/where-to-stay/caprivi" },
      { label: "Spitzkoppe", href: "/where-to-stay/spitzkoppe" },
    ],
  },
  {
    title: "Lodges",
    links: [
      { label: "Beste Lodges in Namibia", href: "/best-lodges-in-namibia" },
      { label: "Beste Luxus-Lodges", href: "/best-luxury-lodges" },
      { label: "Beste Safari-Lodges", href: "/best-safari-lodges" },
      { label: "Beste Wüsten-Lodges", href: "/best-desert-lodges" },
      { label: "Beste Familien-Lodges", href: "/best-family-lodges" },
    ],
  },
  {
    title: "Reiserouten",
    links: [
      { label: "7-Tage-Namibia", href: "/itineraries/7-days" },
      { label: "10-Tage-Namibia", href: "/itineraries/10-days" },
      { label: "14-Tage-Namibia", href: "/itineraries/14-days" },
      { label: "Namibia Selbstfahrer-Guide", href: "/namibia-self-drive-guide" },
      { label: "Namibia ohne 4x4", href: "/namibia-without-4x4" },
    ],
  },
  {
    title: "Reiseplanung",
    links: [
      { label: "Visabestimmungen", href: "/namibia-visa-requirements" },
      { label: "Sicherheit & Gesundheit", href: "/namibia-safety-and-health" },
      { label: "Reisekosten", href: "/namibia-trip-cost" },
      { label: "Selbstfahrer vs. geführt", href: "/self-drive-vs-guided-namibia" },
      { label: "Namibia vs. Botswana", href: "/namibia-vs-botswana" },
      { label: "Konnektivität & eSIM", href: "/namibia-connectivity" },
      { label: "Packliste", href: "/namibia-packing-list" },
      { label: "Reiseverlängerung", href: "/namibia-trip-extensions" },
      { label: "Himba-Kultur", href: "/himba-culture-namibia" },
    ],
  },
  {
    title: "Weitere Ratgeber",
    links: [
      { label: "Namibia mit Kindern", href: "/namibia-with-kids" },
      { label: "Namibia Flitterwochen", href: "/namibia-honeymoon" },
      { label: "Luxus-Namibia", href: "/luxury-namibia" },
      { label: "Beste Reisezeit", href: "/best-time-to-visit-namibia" },
      { label: "Beste Safari-Gebiete", href: "/best-safari-areas" },
      { label: "Tierwelt-Guide", href: "/namibia-wildlife-guide" },
      { label: "Sternenbeobachtung & Fotografie", href: "/namibia-stargazing-photography" },
    ],
  },
];

const COLUMNS_NL = [
  {
    title: "Regio's",
    links: [
      { label: "Etosha", href: "/where-to-stay/etosha" },
      { label: "Sossusvlei", href: "/where-to-stay/sossusvlei" },
      { label: "Swakopmund", href: "/where-to-stay/swakopmund" },
      { label: "Damaraland", href: "/where-to-stay/damaraland" },
      { label: "Skeleton Coast", href: "/where-to-stay/skeleton-coast" },
      { label: "Windhoek", href: "/where-to-stay/windhoek" },
      { label: "Fish River Canyon", href: "/where-to-stay/fish-river-canyon" },
      { label: "Caprivi Strip", href: "/where-to-stay/caprivi" },
      { label: "Spitzkoppe", href: "/where-to-stay/spitzkoppe" },
    ],
  },
  {
    title: "Lodges",
    links: [
      { label: "Beste Lodges in Namibië", href: "/best-lodges-in-namibia" },
      { label: "Beste Luxe Lodges", href: "/best-luxury-lodges" },
      { label: "Beste Safari Lodges", href: "/best-safari-lodges" },
      { label: "Beste Woestijn Lodges", href: "/best-desert-lodges" },
      { label: "Beste Familie Lodges", href: "/best-family-lodges" },
    ],
  },
  {
    title: "Reisroutes",
    links: [
      { label: "7-daagse Namibië", href: "/itineraries/7-days" },
      { label: "10-daagse Namibië", href: "/itineraries/10-days" },
      { label: "14-daagse Namibië", href: "/itineraries/14-days" },
      { label: "Namibië Zelfrijgids", href: "/namibia-self-drive-guide" },
      { label: "Namibië zonder 4x4", href: "/namibia-without-4x4" },
    ],
  },
  {
    title: "Reisplanning",
    links: [
      { label: "Visumvereisten", href: "/namibia-visa-requirements" },
      { label: "Veiligheid & Gezondheid", href: "/namibia-safety-and-health" },
      { label: "Reiskosten", href: "/namibia-trip-cost" },
      { label: "Zelf rijden vs. begeleid", href: "/self-drive-vs-guided-namibia" },
      { label: "Namibië vs. Botswana", href: "/namibia-vs-botswana" },
      { label: "Connectiviteit & eSIM", href: "/namibia-connectivity" },
      { label: "Paklijst", href: "/namibia-packing-list" },
      { label: "Reis verlengen", href: "/namibia-trip-extensions" },
      { label: "Himba-cultuur", href: "/himba-culture-namibia" },
    ],
  },
  {
    title: "Meer Gidsen",
    links: [
      { label: "Namibië met Kinderen", href: "/namibia-with-kids" },
      { label: "Namibië Huwelijksreis", href: "/namibia-honeymoon" },
      { label: "Luxe Namibië", href: "/luxury-namibia" },
      { label: "Beste Reistijd", href: "/best-time-to-visit-namibia" },
      { label: "Beste Safari-gebieden", href: "/best-safari-areas" },
      { label: "Wildlife Gids", href: "/namibia-wildlife-guide" },
      { label: "Sterrenkijken & Fotografie", href: "/namibia-stargazing-photography" },
    ],
  },
];

const COLUMNS_FR = [
  {
    title: "Régions",
    links: [
      { label: "Etosha", href: "/where-to-stay/etosha" },
      { label: "Sossusvlei", href: "/where-to-stay/sossusvlei" },
      { label: "Swakopmund", href: "/where-to-stay/swakopmund" },
      { label: "Damaraland", href: "/where-to-stay/damaraland" },
      { label: "Skeleton Coast", href: "/where-to-stay/skeleton-coast" },
      { label: "Windhoek", href: "/where-to-stay/windhoek" },
      { label: "Fish River Canyon", href: "/where-to-stay/fish-river-canyon" },
      { label: "Caprivi Strip", href: "/where-to-stay/caprivi" },
      { label: "Spitzkoppe", href: "/where-to-stay/spitzkoppe" },
    ],
  },
  {
    title: "Lodges",
    links: [
      { label: "Meilleurs lodges de Namibie", href: "/best-lodges-in-namibia" },
      { label: "Meilleurs lodges de luxe", href: "/best-luxury-lodges" },
      { label: "Meilleurs lodges safari", href: "/best-safari-lodges" },
      { label: "Meilleurs lodges du désert", href: "/best-desert-lodges" },
      { label: "Meilleurs lodges familiaux", href: "/best-family-lodges" },
    ],
  },
  {
    title: "Itinéraires",
    links: [
      { label: "Namibie en 7 jours", href: "/itineraries/7-days" },
      { label: "Namibie en 10 jours", href: "/itineraries/10-days" },
      { label: "Namibie en 14 jours", href: "/itineraries/14-days" },
      { label: "Guide autotour Namibie", href: "/namibia-self-drive-guide" },
      { label: "Namibie sans 4x4", href: "/namibia-without-4x4" },
    ],
  },
  {
    title: "Préparer son voyage",
    links: [
      { label: "Conditions de visa", href: "/namibia-visa-requirements" },
      { label: "Sécurité & santé", href: "/namibia-safety-and-health" },
      { label: "Budget du voyage", href: "/namibia-trip-cost" },
      { label: "Autotour ou circuit guidé", href: "/self-drive-vs-guided-namibia" },
      { label: "Namibie vs Botswana", href: "/namibia-vs-botswana" },
      { label: "Connectivité & eSIM", href: "/namibia-connectivity" },
      { label: "Liste de bagages", href: "/namibia-packing-list" },
      { label: "Prolonger son voyage", href: "/namibia-trip-extensions" },
      { label: "Culture Himba", href: "/himba-culture-namibia" },
    ],
  },
  {
    title: "Autres guides",
    links: [
      { label: "Namibie en famille", href: "/namibia-with-kids" },
      { label: "Lune de miel en Namibie", href: "/namibia-honeymoon" },
      { label: "Namibie de luxe", href: "/luxury-namibia" },
      { label: "Meilleure période", href: "/best-time-to-visit-namibia" },
      { label: "Meilleures zones safari", href: "/best-safari-areas" },
      { label: "Guide de la faune", href: "/namibia-wildlife-guide" },
      { label: "Observation des étoiles & photo", href: "/namibia-stargazing-photography" },
    ],
  },
];

const COLUMNS_IT = [
  {
    title: "Regioni",
    links: [
      { label: "Etosha", href: "/where-to-stay/etosha" },
      { label: "Sossusvlei", href: "/where-to-stay/sossusvlei" },
      { label: "Swakopmund", href: "/where-to-stay/swakopmund" },
      { label: "Damaraland", href: "/where-to-stay/damaraland" },
      { label: "Skeleton Coast", href: "/where-to-stay/skeleton-coast" },
      { label: "Windhoek", href: "/where-to-stay/windhoek" },
      { label: "Fish River Canyon", href: "/where-to-stay/fish-river-canyon" },
      { label: "Caprivi Strip", href: "/where-to-stay/caprivi" },
      { label: "Spitzkoppe", href: "/where-to-stay/spitzkoppe" },
    ],
  },
  {
    title: "Lodge",
    links: [
      { label: "Migliori lodge in Namibia", href: "/best-lodges-in-namibia" },
      { label: "Migliori lodge di lusso", href: "/best-luxury-lodges" },
      { label: "Migliori lodge safari", href: "/best-safari-lodges" },
      { label: "Migliori lodge nel deserto", href: "/best-desert-lodges" },
      { label: "Migliori lodge per famiglie", href: "/best-family-lodges" },
    ],
  },
  {
    title: "Itinerari",
    links: [
      { label: "Namibia in 7 giorni", href: "/itineraries/7-days" },
      { label: "Namibia in 10 giorni", href: "/itineraries/10-days" },
      { label: "Namibia in 14 giorni", href: "/itineraries/14-days" },
      { label: "Guida all'autotour in Namibia", href: "/namibia-self-drive-guide" },
      { label: "Namibia senza 4x4", href: "/namibia-without-4x4" },
    ],
  },
  {
    title: "Pianificazione del viaggio",
    links: [
      { label: "Requisiti visto", href: "/namibia-visa-requirements" },
      { label: "Sicurezza e salute", href: "/namibia-safety-and-health" },
      { label: "Costo del viaggio", href: "/namibia-trip-cost" },
      { label: "Autotour o viaggio guidato", href: "/self-drive-vs-guided-namibia" },
      { label: "Namibia vs Botswana", href: "/namibia-vs-botswana" },
      { label: "Connettività ed eSIM", href: "/namibia-connectivity" },
      { label: "Lista bagagli", href: "/namibia-packing-list" },
      { label: "Estensioni del viaggio", href: "/namibia-trip-extensions" },
      { label: "Cultura Himba", href: "/himba-culture-namibia" },
    ],
  },
  {
    title: "Altre guide",
    links: [
      { label: "Perché visitare la Namibia nel 2027", href: "/why-visit-namibia-2027" },
      { label: "Namibia con i bambini", href: "/namibia-with-kids" },
      { label: "Luna di miele in Namibia", href: "/namibia-honeymoon" },
      { label: "Namibia di lusso", href: "/luxury-namibia" },
      { label: "Periodo migliore per visitarla", href: "/best-time-to-visit-namibia" },
      { label: "Migliori zone safari", href: "/best-safari-areas" },
      { label: "Guida alla fauna selvatica", href: "/namibia-wildlife-guide" },
      { label: "Osservazione delle stelle e fotografia", href: "/namibia-stargazing-photography" },
    ],
  },
];

const COLUMNS: Record<string, typeof COLUMNS_EN> = {
  en: COLUMNS_EN,
  de: COLUMNS_DE,
  nl: COLUMNS_NL,
  fr: COLUMNS_FR,
  it: COLUMNS_IT,
};

const TAGLINE: Record<string, string> = {
  en: "Independent guides to Namibia's lodges, camps and hotels. We earn a commission when you book through our recommendations. It never affects what we recommend.",
  de: "Unabhängige Guides zu Namibias Lodges, Camps und Hotels. Wir erhalten eine Provision, wenn Sie über unsere Empfehlungen buchen. Das beeinflusst nie, was wir empfehlen.",
  nl: "Onafhankelijke gidsen over Namibië's lodges, kampen en hotels. Wij ontvangen een commissie wanneer u boekt via onze aanbevelingen. Dat beïnvloedt nooit wat wij aanbevelen.",
  fr: "Guides indépendants sur les lodges, camps et hôtels de Namibie. Nous touchons une commission quand vous réservez via nos recommandations. Cela n'influence jamais ce que nous recommandons.",
  it: "Guide indipendenti sui lodge, campi e hotel della Namibia. Riceviamo una commissione quando prenoti tramite i nostri consigli. Questo non influenza mai ciò che consigliamo.",
};

const ABOUT_LABEL: Record<string, string> = {
  en: "How this site works",
  de: "So funktioniert diese Seite",
  nl: "Hoe deze site werkt",
  fr: "Comment fonctionne ce site",
  it: "Come funziona questo sito",
};

export function SiteFooter() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname ?? "/");
  const rawColumns = COLUMNS[locale];
  const columns = rawColumns.map((col) => ({
    title: col.title,
    links: col.links.map((l) => ({ label: l.label, href: withLocale(l.href, locale) })),
  }));
  const homeHref = withLocale("/", locale);
  const aboutHref = withLocale("/about", locale);
  const tagline = TAGLINE[locale];
  const aboutLabel = ABOUT_LABEL[locale];

  return (
    <footer className="relative bg-charcoal pt-16">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute -top-[1px] h-16 w-full sm:h-24"
        aria-hidden="true"
      >
        <path
          d="M0,60 C200,20 380,80 560,50 C740,20 920,70 1100,45 C1260,25 1360,50 1440,45 L1440,0 L0,0 Z"
          fill="#f4efe4"
        />
      </svg>

      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-8 sm:px-10 sm:pb-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[13px] uppercase tracking-[0.14em] text-rust">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href={homeHref}
              className="flex items-center gap-2.5 font-serif text-3xl italic text-ivory"
            >
              <LogoMark className="h-8 w-8" />
              Namibia Stays
            </Link>
            <p className="mt-3 max-w-sm text-sm text-ivory/60">{tagline}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <Link href={aboutHref} className="text-sm text-ivory/70 transition-colors hover:text-ivory">
              {aboutLabel}
            </Link>
            <p className="text-xs uppercase tracking-[0.14em] text-ivory/40">
              © {new Date().getFullYear()} Namibia Stays
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
