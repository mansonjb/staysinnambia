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
    languages: { en: "/best-safari-areas", de: "/de/best-safari-areas", nl: "/nl/best-safari-areas", fr: "/fr/best-safari-areas", it: "/it/best-safari-areas" },
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
      "Das verlässlichste der drei Gebiete. Schätzungsweise über 2.000 Elefanten, mehrere Hundert Löwen in rund zwei Dutzend Rudeln und eine der wichtigsten Spitzmaulnashorn-Populationen Afrikas versammeln sich an beleuchteten Wasserlöchern, besonders wenn die Trockenzeit fortschreitet.",
    pace: "Strukturierte Pirschfahrten von einer festen Unterkunft aus, oder Wasserloch-Beobachtung direkt vom Camp aus",
    bestMonths:
      "Juli bis Oktober, wenn die saisonalen Wasserstellen ausgetrocknet sind und sich die Tiere an den permanenten Wasserlöchern sammeln; in der Hauptsaison ist an den belebtesten Stellen mit mehr Besuchern zu rechnen",
  },
  {
    slug: "damaraland",
    style: "Tracking, zu Fuß oder mit dem Fahrzeug",
    wildlife:
      "Ein völlig anderes Erlebnis: wüstenangepasste Elefanten, die bis zu 700 km weit wandern und tagelang ohne Wasser auskommen, und, mit einem Spezialguide aus der Palmwag Concession, eine der letzten großen frei lebenden Spitzmaulnashorn-Populationen der Welt, zu Fuß aufgespürt. Hier ist nichts so garantiert wie an Etoshas Wasserlöchern: Eine Sichtung zählt gerade deshalb mehr, weil sie nicht inszeniert ist.",
    pace: "Langsamer, geführt, auf Basis von Conservancies, oft zu Fuß",
    bestMonths:
      "Mai bis Oktober (Trockenzeit); nach Regen verteilen sich die Tiere weiträumiger, weshalb die Erfolgschancen beim Tracking außerhalb dieses Zeitraums sinken",
  },
  {
    slug: "caprivi",
    style: "Tierwelt an Fluss und Überschwemmungsebene",
    wildlife:
      "Flusspferde und Krokodile im Flusssystem von Kwando und Linyanti, große Elefanten- und Büffelherden, die durch den Bwabwata-Nationalpark ziehen, sowie fast 450 registrierte Vogelarten: ein grundlegend anderes Ökosystem als der Wüstenkreis weiter südlich, keine schwächere Version davon.",
    pace: "Bootsausflüge neben Pirschfahrten",
    bestMonths:
      "April bis September, wenn die Trockenzeit die Tierwelt entlang der Flüsse und Überschwemmungsebenen konzentriert und die Straßenverhältnisse am besten sind",
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
          „Safari" bedeutet in jeder dieser drei Regionen etwas anderes: In Etosha geht es um
          Dichte und Verlässlichkeit, in Damaraland um den ganz eigenen Nervenkitzel, frei
          lebende, wüstenangepasste Arten aufzuspüren, die nirgendwo eingezäunt sind, und der
          Caprivi-Streifen fühlt sich kaum wie dasselbe Land an, ein Fluss- und
          Überschwemmungsökosystem, das mit dem Wüstenkreis weiter südlich fast nichts gemein hat.
          Sehen Sie sich unseren{" "}
          <Link
            href="/de/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Tierwelt-Guide
          </Link>{" "}
          an, um zu erfahren, was Sie in jeder Region erwarten können. Keine ist grundsätzlich
          besser: Sie passen zu unterschiedlichen Prioritäten.
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
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Beste Reisemonate
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.bestMonths}</dd>
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

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Unsere Empfehlung:</span> Wenn Sie sich
            nur für ein Gebiet entscheiden können, ist Etosha die sicherere Wahl für eine erste
            Safari, besonders von August bis Oktober, wenn die Aktivität an den Wasserlöchern
            ihren Höhepunkt erreicht. Damaraland verdient sich seinen Platz auf einer längeren
            Reise als die Region, die Geduld mit etwas belohnt, das Etosha nicht bieten kann: frei
            lebende, wüstenangepasste Tierwelt ohne jeden Zaun in Sicht. Der Caprivi-Streifen lohnt
            sich nur als Ergänzung, wenn Sie weiter in Botswanas Okavango-Delta oder nach Chobe
            reisen oder gezielt Vogelbeobachtung und Flusstierwelt suchen: als eigenständiger
            Stopp auf einer kurzen, rein namibischen Reise ist die rund zwölfstündige Fahrt (die
            meisten fliegen stattdessen nach Katima Mulilo) kaum zu rechtfertigen.
          </p>
        </Reveal>
      </section>
    </>
  );
}
