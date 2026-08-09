import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Meilleure période pour visiter la Namibie";
const DESCRIPTION =
  "Quand partir en Namibie : les compromis honnêtes entre la saison sèche, la saison verte et les mois intermédiaires.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-time-to-visit-namibia",
    languages: {
      en: "/best-time-to-visit-namibia",
      de: "/de/best-time-to-visit-namibia",
      nl: "/nl/best-time-to-visit-namibia", fr: "/fr/best-time-to-visit-namibia",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Saison sèche",
    months: "Mai – octobre",
    summary:
      "La saison safari classique, et l'air le plus clair et le plus sec de l'année en Namibie. La végétation s'éclaircit et les animaux se rassemblent autour des points d'eau, ce qui rend l'observation de la faune particulièrement fiable, surtout à Etosha.",
    tradeoffs: [
      "Meilleure observation de la faune de l'année, surtout de juillet à octobre",
      "Journées fraîches et sèches, nuits froides dans le désert (prévoir plusieurs couches)",
      "Tarifs de haute saison et affluence maximale de voyageurs",
    ],
  },
  {
    name: "Saison verte",
    months: "Novembre – avril",
    summary:
      "Après les pluies, la Namibie devient luxuriante et verdoyante, avec des ciels spectaculaires et une observation des oiseaux excellente, mais la faune se disperse loin des points d'eau, ce qui rend les observations moins concentrées.",
    tradeoffs: [
      "Meilleure période de l'année pour l'ornithologie, avec la présence d'espèces migratrices",
      "Paysages et lumière photographique à leur apogée",
      "La faune est plus dispersée et certaines routes peuvent être affectées par la pluie",
    ],
  },
  {
    name: "Ailes de saison",
    months: "Avril–mai & octobre–novembre",
    summary:
      "Un bon compromis : moins d'affluence qu'en pleine saison sèche, avec des paysages pas encore totalement asséchés (avril–mai) ou qui commencent tout juste à reverdir (octobre–novembre).",
    tradeoffs: [
      "Moins d'affluence qu'entre juillet et septembre",
      "Un climat généralement agréable et prévisible",
      "Octobre peut apporter une chaleur intense dans les régions désertiques avant l'arrivée des pluies",
    ],
  },
];

export default function BestTimePageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "Meilleure période pour visiter la Namibie", url: `${SITE_URL}/fr/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Meilleure période pour visiter la Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Il n&apos;existe pas un seul mois idéal : tout dépend si votre priorité est la{" "}
          <Link
            href="/fr/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            faune
          </Link>
          , la{" "}
          <Link
            href="/fr/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            photographie
          </Link>{" "}
          ou d&apos;éviter la foule. Voici le compromis honnête pour chaque période de l&apos;année.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-charcoal">{season.name}</h2>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">
                  {season.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-charcoal/10 pt-4">
                  {season.tradeoffs.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-[13px] text-charcoal/60"
                    >
                      <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
