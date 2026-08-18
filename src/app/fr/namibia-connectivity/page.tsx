import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { EsimWidget } from "@/components/esim-widget";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Cartes SIM et eSIM en Namibie";
const DESCRIPTION =
  "Quel opérateur utiliser, où vous aurez vraiment du réseau, et où vous n'en aurez vraiment pas : un guide pratique de la connectivité pour l'autotour en Namibie.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-connectivity",
    languages: {
      en: "/namibia-connectivity",
      de: "/de/namibia-connectivity",
      nl: "/nl/namibia-connectivity", fr: "/fr/namibia-connectivity",
        it: "/it/namibia-connectivity",
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
  { title: "Autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité & santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const COVERAGE = [
  {
    area: "Windhoek, Swakopmund, Walvis Bay",
    signal: "Bonne 4G MTC, suffisamment fiable pour les appels, les cartes et le streaming.",
  },
  {
    area: "Etosha (camps et routes principales)",
    signal: "Irrégulier mais présent : la plupart des camps (Okaukuejo, Halali, Namutoni) ont le wifi à la réception, même là où le signal mobile est faible ou absent sur les boucles de piste alentour.",
  },
  {
    area: "Sossusvlei, Damaraland, Spitzkoppe",
    signal: "Faible à inexistant sur de longs tronçons, surtout en dehors des routes C. Téléchargez des cartes hors ligne avant de quitter la côte, pas une fois sur la piste D qui mène au Damaraland.",
  },
  {
    area: "Skeleton Coast, Kaokoland reculé (dont le détour par Opuwo)",
    signal: "Attendez-vous à zéro réseau MTC ou TN Mobile pendant des journées entières : c'est normal, pas une panne, et ça vaut aussi pour les eSIM qui passent par les mêmes antennes.",
  },
];

const FAQS = [
  {
    q: "Quel opérateur est le meilleur pour les touristes en Namibie ?",
    a: "MTC est l'opérateur dominant en Namibie et offre globalement la couverture la plus large le long des principaux itinéraires touristiques et dans les villes ; Telecom Namibia (via TN Mobile) est l'alternative. Aucun des deux n'a de couverture significative dans les zones désertiques et côtières les plus reculées, y compris la Skeleton Coast, le Namib profond et la majeure partie du Kaokoland : c'est une limite liée au terrain et aux infrastructures, pas un choix d'opérateur que vous pourriez corriger.",
  },
  {
    q: "Combien coûte une carte SIM touriste MTC ?",
    a: "MTC vend deux forfaits spécifiques aux touristes, tous deux disponibles à son kiosque de l'aéroport : un forfait Leisure à 349 N$ pour 14 jours avec 10,1 Go de données plus un peu de crédit d'appels et de SMS internationaux, et un forfait Premium à 659 N$ pour 30 jours avec 20,1 Go de données et davantage de crédit d'appels. Une simple carte SIM prépayée avec un forfait data séparé revient généralement moins cher si vous êtes à l'aise pour recharger vous-même, mais les forfaits touristes vous évitent cette démarche dès le premier jour.",
  },
  {
    q: "Puis-je acheter une carte SIM à l'aéroport ?",
    a: "Oui, MTC tient un kiosque dans le hall des arrivées de l'aéroport international Hosea Kutako, et c'est le moyen le plus simple d'être connecté avant de prendre la route. Munissez-vous de votre passeport ; l'enregistrement d'une carte SIM locale exige généralement une pièce d'identité, et les forfaits touristes sont activés sur place.",
  },
  {
    q: "L'eSIM fonctionne-t-elle bien en Namibie, et est-elle moins chère qu'une carte SIM locale ?",
    a: "Elle fonctionne, mais elle est rarement moins chère. Les fournisseurs d'eSIM internationaux passent par les mêmes antennes MTC ou Telecom Namibia qu'une carte SIM physique, la couverture est donc identique, et les forfaits démarrent en général autour de 9,50 $ pour une semaine de données. Le hic, c'est le prix au gigaoctet : les données en eSIM coûtent souvent deux à trois fois plus cher qu'un forfait prépayé MTC pour le même volume. Ce que vous payez, c'est le confort d'arriver déjà connecté au lieu de faire la queue au kiosque de l'aéroport, pas un meilleur réseau.",
  },
  {
    q: "Aurai-je du réseau sur tout l'itinéraire en autotour ?",
    a: "Non, et il ne faut pas compter dessus dans la planification. Sossusvlei, le Damaraland, Spitzkoppe, la Skeleton Coast et le Kaokoland reculé comptent tous de longs tronçons, parfois des journées entières de conduite, totalement hors réseau sur les deux opérateurs. Téléchargez Google Maps hors ligne pour votre itinéraire, enregistrez vos réservations de lodges en PDF, et considérez la connectivité comme un phénomène de villes et de camps, pas d'entre-deux étapes.",
  },
];

export default function ConnectivityPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Connectivité", url: `${SITE_URL}/fr/namibia-connectivity` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Cartes SIM, eSIM et connectivité en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La version honnête : vous aurez un signal correct dans les villes, et irrégulier voire
          inexistant partout ailleurs. Planifiez en fonction de cela, au lieu de le combattre.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COVERAGE.map((c, i) => (
            <Reveal
              key={c.area}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h2 className="text-[14px] font-bold text-charcoal">{c.area}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{c.signal}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Avant de quitter la côte</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Achetez une carte SIM MTC au kiosque de l'aéroport Hosea Kutako (349 N$ pour 14 jours / 10,1 Go, ou 659 N$ pour 30 jours / 20,1 Go), ou vérifiez que votre fournisseur d'eSIM couvre spécifiquement la Namibie avant de vous y fier plutôt qu'à une carte SIM physique",
              (
                <>
                  Téléchargez à l'avance des cartes hors ligne pour l'intégralité de votre
                  itinéraire en autotour. Notre{" "}
                  <Link href="/fr/namibia-self-drive-guide" className="font-semibold text-rust hover:text-rust-dark">
                    guide de l'autotour
                  </Link>{" "}
                  couvre le reste de la logistique avant le départ
                </>
              ),
              "Enregistrez les confirmations de lodges et les itinéraires en PDF ou en captures d'écran, pas seulement en liens par e-mail",
              "Prévenez quelqu'un de votre itinéraire approximatif du jour si vous conduisez seul sur des tronçons isolés",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-charcoal">Réserver une eSIM pour la Namibie</h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Pour arriver déjà connecté sans faire la queue au kiosque de l&apos;aéroport, comparez
            et achetez une eSIM directement ci-dessous.
          </p>
          <div className="mt-6">
            <EsimWidget locale="fr" />
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
          <Link
            href="/fr/namibia-packing-list"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Liste de bagages pour la Namibie
          </Link>
        </Reveal>
      </section>
    </>
  );
}
