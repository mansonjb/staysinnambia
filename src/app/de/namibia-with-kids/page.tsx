import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategoryDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia mit Kindern";
const DESCRIPTION =
  "Planungshinweise für eine Namibia-Familienreise: welche Lodges gut für Kinder geeignet sind und was Sie vor der Abreise wissen sollten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-with-kids",
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Viele Safari-Lodges legen ein Mindestalter (oft 6–8 Jahre) für Pirschfahrten fest: Prüfen Sie das vor der Buchung, nicht erst bei der Ankunft.",
  "Das Malariarisiko konzentriert sich auf den Norden (Etosha und den Caprivi-Streifen) und ist in der Regenzeit (etwa November bis April) am höchsten; im übrigen Land ist das Risiko größtenteils gering, aber bestätigen Sie die aktuellen Empfehlungen bei einer reisemedizinischen Beratungsstelle.",
  "Selbstfahrer-Tage sind lang: Planen Sie Pausen ein und halten Sie einzelne Fahrstrecken mit kleinen Kindern unter 4–5 Stunden.",
  "In Etoshas beleuchteten Wasserloch-Camps können Kinder Tiere sicher von der Lodge aus beobachten, ganz ohne Pirschfahrt.",
];

export default function KidsPageDe() {
  const familyLodges = getLodgesByCategoryDe("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Namibia mit Kindern", url: `${SITE_URL}/de/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia mit Kindern
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia eignet sich gut als Familien-Safariziel:{" "}
          <Link
            href="/de/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            Selbstfahren im eigenen Tempo
          </Link>{" "}
          bedeutet kürzere, flexible Fahrtage, und viele Lodges bieten miteinander verbundene
          Familienzimmer. Ein paar praktische Dinge, darunter{" "}
          <Link
            href="/de/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            wo Malaria ein Thema ist und wo nicht
          </Link>
          , sollten Sie vor der Buchung kennen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Lodges, die gut für Familien geeignet sind</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/de/lodges/${lodge.slug}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-serif text-xl italic text-charcoal">{lodge.name}</p>
                  <p className="mt-1 text-[13px] text-charcoal/50">{lodge.region}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
