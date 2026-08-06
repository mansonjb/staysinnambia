import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getRegionDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Beste Safari-Gebiete in Namibia";
const DESCRIPTION =
  "Etosha, Damaraland und Caprivi im Vergleich: welche namibische Safari-Region wirklich zu Ihrer Reise passt.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-safari-areas",
    languages: { en: "/best-safari-areas", de: "/de/best-safari-areas", nl: "/nl/best-safari-areas" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COMPARISON = [
  {
    slug: "etosha",
    style: "Klassische Safari an Wasserlöchern",
    wildlife:
      "Verlässlich: Elefant, Löwe, Spitzmaulnashorn, große Herden konzentriert um beleuchtete Wasserlöcher",
    pace: "Strukturierte Pirschfahrten von einer festen Unterkunft aus",
  },
  {
    slug: "damaraland",
    style: "Tracking, zu Fuß oder mit dem Fahrzeug",
    wildlife:
      "Wüstenangepasste Elefanten und, mit einem Spezialguide ab Palmwag, aufgespürte Spitzmaulnashörner, nie garantiert, aber umso lohnender bei Erfolg",
    pace: "Langsamer, geführt, auf Basis von Conservancies",
  },
  {
    slug: "caprivi",
    style: "Tierwelt an Fluss und Überschwemmungsebene",
    wildlife: "Flusspferd, Krokodil, starke Vogelbeobachtung: ein völlig anderes Ökosystem",
    pace: "Bootsausflüge neben Pirschfahrten",
  },
];

export default function SafariAreasPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Beste Safari-Gebiete in Namibia", url: `${SITE_URL}/de/best-safari-areas` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Beste Safari-Gebiete in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          „Safari" bedeutet in jeder dieser drei Regionen etwas anderes. Sehen Sie sich unseren{" "}
          <Link
            href="/de/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Tierwelt-Guide
          </Link>{" "}
          an, um zu erfahren, was Sie in jeder erwarten können. Keine ist grundsätzlich besser: sie
          passen zu unterschiedlichen Prioritäten.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {COMPARISON.map((c, i) => {
            const region = getRegionDe(c.slug);
            if (!region) return null;
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <h2 className="font-serif text-2xl italic text-charcoal">{region.name}</h2>
                  <dl className="mt-4 space-y-4 border-t border-charcoal/10 pt-4">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Safari-Stil
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.style}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Tierwelt
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.wildlife}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Tempo
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.pace}</dd>
                    </div>
                  </dl>
                  <Link
                    href={`/de/where-to-stay/${region.slug}`}
                    className="group mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4 text-[13px] font-medium text-charcoal/60 hover:text-rust"
                  >
                    Unterkünfte in {region.name}
                    <CardArrow />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
