import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgeFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Lune de miel en Namibie";
const DESCRIPTION =
  "Les lodges et campements les plus romantiques pour une lune de miel en Namibie : intimes, paisibles et pensés pour deux.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-honeymoon",
    languages: { en: "/namibia-honeymoon", de: "/de/namibia-honeymoon", nl: "/nl/namibia-honeymoon", fr: "/fr/namibia-honeymoon" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HONEYMOON_SLUGS = ["little-kulala", "sossusvlei-desert-lodge", "doro-nawas-camp", "the-olive-exclusive"];

const ROMANTIC_ADD_ONS = [
  "Un dîner privé dans les dunes : la plupart des lodges du secteur de Sossusvlei dressent une table privée pour une soirée du séjour, sur la terrasse ou à même le sable. Demandez-le au moment de réserver la chambre, pas à l'arrivée, car cela demande du temps de préparation et une réservation de personnel dédiée.",
  "Les chambres-tours à ciel ouvert du Le Mirage Resort & Spa : ce complexe façon château propose des chambres pensées pour dormir à la belle étoile, et le ciel pur et sans pollution lumineuse du Namib-Naukluft rend presque toutes les nuits propices à l'exercice, alors demandez la nuit avec les meilleures prévisions météo de votre séjour.",
  "Un lever de soleil en montgolfière au-dessus des dunes : Namib Sky Balloon Safaris décolle de Sesriem la plupart des matins, selon la météo, et se termine par un petit-déjeuner au champagne en plein désert. Comptez environ 3h30 de porte à porte, à réserver bien à l'avance car les places sont limitées.",
  "Spa et bien-être en couple : Le Mirage dispose d'un spa complet sur place (le Mystique Spa), mais les cartes de soins des lodges désertiques namibiens restent plus réduites que celles d'un spa de resort. Vérifiez ce qui est réellement proposé plutôt que de présumer une carte de soins complète.",
];

export default function HoneymoonPageFr() {
  const lodges = HONEYMOON_SLUGS.map((slug) => getLodgeFr(slug)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "Lune de miel en Namibie", url: `${SITE_URL}/fr/namibia-honeymoon` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Lune de miel en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L'espace et le silence de la Namibie en font une destination sincèrement romantique :
          le ciel désertique très pur de la région du Namib-Naukluft fait de l'observation des
          étoiles un rituel presque quotidien, et les autres voyageurs les plus proches se
          trouvent souvent à bonne distance. Voici les quatre lodges vers
          lesquels nous orienterions une lune de miel en priorité : Le Mirage Resort & Spa et le
          Sossusvlei Lodge pour les dunes, le Camp Kipwe pour une base nichée dans les blocs de
          granit près de Twyfelfontein si vous voulez le paysage du Damaraland sans renoncer au
          romantisme, et The Olive Exclusive, un boutique-hôtel de sept suites à Windhoek avec
          piscine privée par suite, en escale avant ou après le circuit safari plutôt qu'une étape
          dessus. Pour la liste complète, consultez notre{" "}
          <Link
            href="/fr/best-romantic-stays"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            guide des meilleurs séjours romantiques
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lodges.map((lodge, i) => (
            <Reveal key={lodge!.slug} delay={i * 60}>
              <Link
                href={`/fr/lodges/${lodge!.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={lodge!.image}
                    alt={lodge!.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge!.region}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl italic text-charcoal">{lodge!.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {lodge!.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <AvailabilityBadge label="Vérifier la disponibilité" />
                    <CardCTA label="Voir le lodge" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Suppléments à réserver à l&apos;avance</h2>
        </Reveal>
        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {ROMANTIC_ADD_ONS.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-charcoal/10 pt-5 text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Sur le rythme :</span> une lune de miel
            fonctionne mieux sur un format plus court qu&apos;un premier circuit en Namibie. Deux
            lodges de trois à quatre nuits chacun, plutôt que la boucle à cinq étapes sur dix
            jours que montent souvent les primo-voyageurs, laisse le temps de vraiment ralentir,
            et permet d&apos;ajouter un dîner privé ou un vol en montgolfière sans que le voyage
            ressemble à une liste de cases à cocher.
          </p>
        </Reveal>
      </section>
    </>
  );
}
