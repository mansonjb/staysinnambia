import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibie sans 4x4";
const DESCRIPTION =
  "Vous n'avez pas besoin d'un 4x4 pour la majeure partie d'un road trip en autonomie en Namibie : ce qui passe très bien en berline classique, et où un 4x4 devient vraiment nécessaire.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-without-4x4",
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4", fr: "/fr/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek à Sossusvlei (Sesriem) : bitume et piste en gravier bien entretenue",
  "Windhoek à Swakopmund via la B1/B2 : entièrement bitumé",
  "Swakopmund aux principaux lodges du Damaraland : piste en gravier entretenue, sans souci en saison sèche",
  "Windhoek aux portes sud et est d'Etosha : bitume sur la majeure partie du trajet",
];

const NEED_4X4 = [
  "Les derniers 5 km environ de sable meuble entre le parking 2x4 de Sossusvlei et les dunes elles-mêmes",
  "La majeure partie de la Skeleton Coast au nord de Torra Bay",
  "Les pistes isolées du Kaokoveld, au nord du Damaraland",
  "Certaines pistes plus accidentées de réserves communautaires menant à des campings villageois, hors des grands axes de gravier",
];

export default function Without4x4PageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "La Namibie sans 4x4", url: `${SITE_URL}/fr/namibia-without-4x4` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibie sans 4x4
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Une idée reçue fréquente : la majeure partie d'un circuit classique en Namibie se
          conduit sans problème avec une berline ou un crossover ordinaire. Les principales
          pistes en gravier du pays (les routes &quot;C&quot; et &quot;D&quot;, détaillées dans
          notre{" "}
          <Link
            href="/fr/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            guide de la conduite en autonomie
          </Link>
          ) sont bien entretenues et praticables. Un 4x4 n'est réellement nécessaire que pour un
          nombre limité de tronçons bien précis.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Sans problème en voiture classique</h2>
            <ul className="mt-4 space-y-2.5">
              {CAN_2WD.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Où un 4x4 devient vraiment nécessaire</h2>
            <ul className="mt-4 space-y-2.5">
              {NEED_4X4.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Une solution intermédiaire :</span> à
            Sossusvlei, la navette du parc se charge elle-même du dernier tronçon de sable
            meuble, ce qui permet de garer un véhicule 2WD sur le parking public tout en
            atteignant les dunes, sans louer un 4x4 pour l'ensemble du voyage.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/fr/itineraries"
            className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Voir les itinéraires en autonomie
          </Link>
        </Reveal>
      </section>
    </>
  );
}
