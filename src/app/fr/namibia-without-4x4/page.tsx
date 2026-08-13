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
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4", fr: "/fr/namibia-without-4x4", it: "/it/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek à Sossusvlei (Sesriem) via la B1 et le col de Remhoogte (C24, puis D1275/C19) : bitume jusqu'à Rehoboth, puis piste en gravier bien nivelée sur le reste du trajet. C'est l'itinéraire que la plupart des loueurs recommandent aux conducteurs en 2WD.",
  "Windhoek à Swakopmund via la B1/B2 : entièrement bitumé, aucune piste en gravier.",
  "Uis à Twyfelfontein au Damaraland (C35 vers D2612) : une piste en gravier très fréquentée, généralement en bon état, que les berlines classiques gèrent sans problème par temps sec, même si le dernier tronçon de la D2612 devient plus sableux que le reste.",
  "Windhoek à la porte sud d'Etosha (Anderson) près d'Okaukuejo : bitume sur la majeure partie du trajet, et les routes à l'intérieur du parc lui-même sont nivelées et adaptées à un 2WD classique en saison sèche.",
  "La descente vers les points de vue du Fish River Canyon près de Hobas, dans le sud : bitume et piste entretenue, aucun 4x4 nécessaire pour les points de vue eux-mêmes.",
];

const NEED_4X4 = [
  "Les derniers 5 km environ de sable meuble entre le parking 2x4 de Sossusvlei et les dunes et Deadvlei eux-mêmes, désormais accessibles uniquement par navette pour tous les véhicules, quel que soit le mode de transmission (voir ci-dessous).",
  "Le col de Spreetshoogte, le plus raide de Namibie (des pentes atteignant environ 1:4,5), sur l'itinéraire panoramique alternatif vers Sossusvlei : réservé aux 4x4, caravanes et remorques totalement interdites. Prenez plutôt le col de Remhoogte, plus doux, si vous êtes en 2WD.",
  "La majeure partie de la Skeleton Coast au nord de Torra Bay, ainsi que des lodges phares du nord comme Shipwreck Lodge, normalement accessibles uniquement par avion léger et pas du tout par la route.",
  "Les pistes isolées du Kaokoveld, au nord du Damaraland, notamment les itinéraires vers Serra Cafema et la vallée de Hartmann.",
  "Les routes « D » du Damaraland et du Kaokoland en général : nivelées mais plus accidentées et plus isolées que les routes « C », et réellement affectées par les pluies en saison humide (environ novembre à avril), période où même des pistes en gravier habituellement en bon état peuvent se dégrader rapidement.",
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
          conduit sans problème avec une berline ou un crossover ordinaire. Les routes «&nbsp;C&nbsp;»
          namibiennes, le principal réseau de pistes en gravier du pays (détaillé dans notre{" "}
          <Link
            href="/fr/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            guide de la conduite en autonomie
          </Link>
          ), sont larges, bien nivelées et suffisamment entretenues pour que la plupart des
          loueurs les autorisent en 2WD à une vitesse raisonnable. Les routes «&nbsp;D&nbsp;»,
          plus accidentées, sont une autre histoire, et un 4x4 devient réellement nécessaire pour
          un ensemble plus restreint et précis de tronçons, pas pour l&apos;ensemble du voyage.
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
            Sossusvlei, un service officiel de navette/excursion couvre le dernier tronçon de
            sable meuble jusqu&apos;aux dunes et à Deadvlei, ce qui permet de garer un véhicule
            2WD au parking public tout en les atteignant sans louer un 4x4 pour l&apos;ensemble du
            voyage. Depuis 2026, ce n&apos;est plus optionnel, même pour les conducteurs en 4x4 :
            les véhicules privés sont désormais interdits sur ces derniers 5 km environ, et les
            indications officielles du parc évoquent environ 260 N$ par adulte et 130 N$ par
            enfant de moins de 12 ans, même si le point de prise en charge et les tarifs ont
            changé plus d&apos;une fois ces dernières années. Confirmez donc l&apos;organisation
            actuelle à Sesriem ou auprès de votre lodge avant de partir.
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
