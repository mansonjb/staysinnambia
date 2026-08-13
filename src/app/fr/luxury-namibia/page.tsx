import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibie de luxe";
const DESCRIPTION =
  "A quoi ressemble vraiment un voyage de luxe en Namibie : circuits en vol privé, guides personnels et les lodges haut de gamme qui valent le supplément.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia", fr: "/fr/luxury-namibia", it: "/it/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "L'avion plutôt que la voiture",
    text: (
      <>
        Les meilleurs lodges se rejoignent souvent en petit avion plutôt que par la route. Les
        camps en fly-in de la Palmwag Concession et de la Hoanib Valley sont pensés
        spécifiquement pour le suivi du lion du désert, de l&apos;éléphant et du rhinocéros, et ne
        sont généralement accessibles que par vol charter. Les lodges de la NamibRand Nature
        Reserve, près de Sossusvlei, se rejoignent en environ 45 minutes de vol, contre environ 5
        heures de piste pour le même trajet selon notre{" "}
        <Link
          href="/fr/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          guide de la conduite en autonomie
        </Link>
        . Plus au nord, le Serra Cafema est isolé sur les rives du fleuve Kunene, dans la Hartmann
        Valley, accessible uniquement par avion léger jusqu&apos;à sa propre piste d&apos;atterrissage :
        c&apos;est tout simplement le lodge le plus reculé du pays.
      </>
    ),
  },
  {
    title: "Des réserves privées, pas seulement des chambres privées",
    text: "En Namibie, le luxe se mesure surtout à l'accès, pas au nombre de fils au centimètre carré. La réserve d'Ongava, qui borde la porte Anderson d'Etosha, autorise les sorties de nuit et les excursions hors piste que le parc national lui-même interdit. Dans le Damaraland, la Palmwag Concession abrite l'une des plus grandes populations de rhinocéros noirs en liberté au monde, et c'est l'un des seuls endroits d'Afrique où l'on peut les suivre à pied avec un guide spécialisé plutôt que depuis un véhicule.",
  },
  {
    title: "Moins de nuits, mais de meilleure qualité",
    text: "Un itinéraire de luxe est souvent plus court qu'un circuit en autonomie économique : trois ou quatre campements répartis sur 8 à 10 jours, chacun mérite deux nuits complètes plutôt qu'une simple étape de passage. Le Shipwreck Lodge, sur la Skeleton Coast, a reçu une Michelin Key lors de la toute première sélection mondiale Michelin Keys (2025), un bon indicateur de ce que « mériter le vol » signifie à ce niveau de gamme.",
  },
  {
    title: "Ce que le supplément achète vraiment",
    text: "Au niveau le plus élevé, chaque unité dispose généralement de son propre guide, et souvent d'un chef dédié, plutôt que d'un véhicule de safari partagé et d'un menu unique. Toute la région du Namib-Naukluft autour de Sossusvlei est une réserve internationale de ciel étoilé (statut Gold Tier depuis 2012) : l'observation des étoiles y est donc une activité programmée dans beaucoup de ses lodges, entre verrière au-dessus du lit et plateforme de couchage à ciel ouvert, pas seulement une belle nuit claire remarquée par hasard. Un vol en montgolfière privé au lever du soleil au-dessus des dunes (Namib Sky Balloon Safaris, environ 9 900 N$ / 550 $ US par personne, petit-déjeuner au champagne inclus) est le genre d'extra ponctuel facile à ajouter à un itinéraire de luxe, et bien plus difficile à justifier sur un circuit économique.",
  },
];

export default function LuxuryPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "La Namibie de luxe", url: `${SITE_URL}/fr/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibie de luxe
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Un voyage de luxe en Namibie ressemble moins à un hôtel cinq étoiles qu'à un accès total
          et privé au paysage. Voici ce qui change réellement quand on met le prix : quelles
          portes vous pouvez franchir, dans quel véhicule vous montez, et combien de personnes se
          trouvent réellement autour de vous.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <MetaIcon name="compass" className="h-6 w-6 text-rust" />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{p.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/fr/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Voir les meilleurs lodges de luxe
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
