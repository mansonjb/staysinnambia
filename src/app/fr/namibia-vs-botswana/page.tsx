import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibie vs Botswana";
const DESCRIPTION =
  "La Namibie et le Botswana sont associés dans les mêmes guides de voyage, et ce n'est pas un hasard : voici la différence honnête pour un premier safari en Afrique.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-vs-botswana",
    languages: {
      en: "/namibia-vs-botswana",
      de: "/de/namibia-vs-botswana",
      nl: "/nl/namibia-vs-botswana", fr: "/fr/namibia-vs-botswana",
        it: "/it/namibia-vs-botswana",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges de Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Où séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Où séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité & santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const COMPARISON = [
  {
    axis: "Autotour",
    namibia:
      "Vraiment accessible : un bon réseau routier, une signalisation claire et un marché de la location bien établi font de la Namibie l'un des pays africains les plus faciles à parcourir en autotour. Les parcs nationaux comme Etosha et Namib-Naukluft délivrent permis et accès aux portes sur place, sans réservation de camp à l'avance nécessaire juste pour entrer.",
    botswana:
      "Beaucoup plus limité : l'entrée en autotour dans la réserve de Moremi nécessite une réservation de camping confirmée avant que le DWNP (le service des parcs) ne laisse passer la porte, et il n'existe qu'une poignée de campings publics à l'intérieur (Xakanxa, Third Bridge, Moremi, Okuti), souvent complets plusieurs mois à l'avance en haute saison. À cela s'ajoutent des pistes de sable profond du Kalahari qui nécessitent une vraie expérience du 4x4 et des rapports courts, et une grande partie du delta de l'Okavango lui-même n'est accessible que par avion léger, ce qui explique pourquoi la plupart des visiteurs du Botswana arrivent avec un opérateur plutôt qu'en autotour.",
  },
  {
    axis: "Densité de la faune",
    namibia:
      "Excellente mais plus dispersée : les points d'eau d'Etosha concentrent bien les animaux, mais les observations ailleurs (Damaraland, Kaokoland) sont plus sauvages et moins garanties.",
    botswana:
      "Une observation plus dense, plus classique du safari : le delta et Chobe sont réputés pour des observations fréquentes et rapprochées, avec une activité fiable de buffles et de prédateurs.",
  },
  {
    axis: "Paysage",
    namibia:
      "L'attrait principal pour beaucoup de primo-visiteurs : des dunes rouges immenses, une faune adaptée au désert, un littoral atlantique sauvage, introuvables ailleurs sur le continent sous cette forme.",
    botswana:
      "Aquatique et vert : les chenaux et plaines inondables du delta de l'Okavango offrent le paysage opposé aux déserts namibiens, avec l'observation des oiseaux et la faune aquatique (hippopotame, éléphant, crocodile) comme expérience emblématique.",
  },
  {
    axis: "Niveau de prix habituel",
    namibia: (
      <>
        Peut se faire à des niveaux réellement économiques à moyens (environ 225-250 €/jour en
        autotour, 325 €/jour en milieu de gamme) via des guesthouses et une voiture de location,
        aux côtés d'une véritable offre de luxe au-delà de 700 €/jour. Voir notre{" "}
        <Link href="/fr/namibia-trip-cost" className="font-semibold text-rust hover:text-rust-dark">
          détail complet des coûts
        </Link>
        .
      </>
    ),
    botswana:
      "Systématiquement plus élevé : le modèle touristique du Botswana, à forte valeur et faible volume, se traduit par moins de camps au total et moins d'options économiques, les camps accessibles uniquement par avion étant la norme plutôt que l'exception.",
  },
  {
    axis: "Droits d'entrée des parcs",
    namibia:
      "Namibia Wildlife Resorts facture aux visiteurs internationaux 280 N$/jour (environ 17,50 $) dans les parcs premium comme Etosha, Namib-Naukluft et la Skeleton Coast, plus des frais de véhicule séparés, en vigueur depuis avril 2026.",
    botswana:
      "Le DWNP facture aux visiteurs internationaux 270 BWP/jour (environ 20 $) à Chobe et Moremi, et 500 BWP/jour au Kalahari central, à Makgadikgadi et à Nxai Pan, plus des frais de véhicule séparés, également mis à jour en avril 2026. Les droits d'entrée quotidiens des parcs sont en fait similaires entre les deux pays ; le véritable écart de coût vient des camps et des vols, pas des portes des parcs.",
  },
  {
    axis: "Visa et entrée",
    namibia:
      "Un visa est requis pour la plupart des nationalités, bien que beaucoup puissent l'obtenir à l'arrivée ou en faire la demande en ligne à l'avance ; en 2026, les frais de visa touristique standard s'élèvent à environ 30 $, valable pour des séjours jusqu'à 90 jours.",
    botswana:
      "Plus ouvert sur le papier : la plupart des visiteurs d'Amérique du Nord, d'Europe, du Commonwealth et de la région SADC (Namibie incluse) entrent sans visa pour le tourisme, généralement pour des séjours jusqu'à 90 jours sur une période de 12 mois.",
  },
];

const FAQS = [
  {
    q: "Faut-il visiter la Namibie ou le Botswana pour un premier safari en Afrique ?",
    a: "Si vous souhaitez conduire vous-même, contrôler votre propre rythme et privilégier le paysage et la faune adaptée au désert, la Namibie est le premier voyage le plus simple et généralement le plus abordable : son réseau routier, sa signalisation et son marché de la location sont conçus pour ça, et les permis de parc se gèrent directement à la porte. Si l'observation classique et dense de la faune est la priorité et que le budget permet 600 $+ par personne et par nuit dans des camps accessibles uniquement par avion, le Botswana offre cela de façon plus fiable, en particulier dans le delta de l'Okavango et à Chobe.",
  },
  {
    q: "Puis-je visiter la Namibie et le Botswana en un seul voyage ?",
    a: "Oui, c'est une combinaison bien établie, et notre région de la bande de Caprivi borde directement le parc national de Chobe au Botswana, ce qui en fait un lien naturel entre les deux plutôt qu'un détour séparé accessible uniquement par avion. Consultez notre guide des prolongations de voyage pour savoir comment cela fonctionne généralement.",
  },
  {
    q: "Le Botswana est-il plus cher que la Namibie ?",
    a: "Nettement, oui. La politique touristique du Botswana, à forte valeur et faible volume, limite délibérément le nombre de camps pour préserver des zones peu fréquentées : les lodges établis tournent généralement entre 600 et 1 500 $+ par personne et par nuit, et les camps les plus exclusifs du delta de l'Okavango accessibles uniquement par avion atteignent souvent 1 500 à 4 000 $+. L'offre réellement économique de la Namibie tourne autour de 225-250 €/jour en autotour. Les droits d'entrée des parcs eux-mêmes sont en fait similaires entre les deux pays en 2026 (environ 17-20 $/jour dans les deux cas) ; l'écart se joue sur les camps, le guidage et les vols intérieurs, pas sur le prix des portes.",
  },
  {
    q: "Quel pays est le meilleur pour l'autotour ?",
    a: "La Namibie, clairement. Les meilleures zones fauniques du Botswana sont largement inaccessibles sans un 4x4 solide et une expérience de la conduite hors piste : l'entrée en autotour dans la réserve de Moremi, par exemple, nécessite une réservation de camping DWNP confirmée avant de pouvoir franchir la porte, et ces campings se réservent des mois à l'avance. Le pays n'est pas conçu pour le type de road trip indépendant qui fait la réputation de la Namibie.",
  },
  {
    q: "Faut-il un visa pour la Namibie ou le Botswana ?",
    a: "Le Botswana est sans visa pour la plupart des nationalités occidentales et de la SADC, pour des séjours touristiques jusqu'à 90 jours. La Namibie exige généralement un visa, bien que la plupart des visiteurs puissent l'obtenir à l'arrivée ou en faire la demande en ligne à l'avance ; les frais de visa touristique standard s'élèvent à environ 30 $ en 2026, également valable jusqu'à 90 jours.",
  },
];

export default function VsBotswanaPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Namibie vs Botswana", url: `${SITE_URL}/fr/namibia-vs-botswana` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibie vs Botswana
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Les guides de voyage associent constamment ces deux pays, et pour de bonnes raisons : ce
          sont des voisins aux expériences de safari presque opposées. Voici la différence
          honnête, sans parti pris pour l&apos;un ou l&apos;autre.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {COMPARISON.map((row, i) => (
            <Reveal
              key={row.axis}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {row.axis}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-olive">
                    Namibie
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.namibia}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Botswana
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.botswana}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Ne choisissez pas, combinez-les</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            La bande de Caprivi en Namibie borde directement le parc national de Chobe au
            Botswana, ce qui explique pourquoi tant d&apos;itinéraires plus longs traitent cette
            zone comme une seule région plutôt que deux voyages distincts. Si vous disposez de
            trois semaines ou plus, ajouter une étape au Botswana à un autotour en Namibie est
            plus simple qu&apos;il n&apos;y paraît.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-charcoal/60">
            <MetaIcon name="check" className="h-4 w-4 text-olive" />
            Consultez notre{" "}
            <Link
              href="/fr/namibia-trip-extensions"
              className="ml-1 font-semibold text-rust hover:text-rust-dark"
            >
              guide des prolongations de voyage
            </Link>{" "}
            pour savoir comment cela fonctionne généralement.
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {FAQS.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-charcoal">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          {POPULAR_GUIDES_NL.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
        </Reveal>
      </section>
    </>
  );
}
