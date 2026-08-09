import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Liste de bagages pour la Namibie";
const DESCRIPTION =
  "Ce que la chaleur, la poussière et les écarts de température jour/nuit de la Namibie exigent vraiment : une liste de bagages pratique pour un voyage en autotour.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-packing-list",
    languages: {
      en: "/namibia-packing-list",
      de: "/de/namibia-packing-list",
      nl: "/nl/namibia-packing-list", fr: "/fr/namibia-packing-list",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges en Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité et santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const malariaItem = (
  <>
    Prophylaxie antipaludique si votre itinéraire passe par le nord (Etosha, Caprivi) pendant la
    saison des pluies : consultez notre{" "}
    <Link href="/fr/namibia-safety-and-health" className="font-semibold text-rust hover:text-rust-dark">
      guide sécurité et santé
    </Link>
  </>
);

const CATEGORIES = [
  {
    title: "Vêtements",
    items: [
      "Des vêtements en couches : les journées désertiques peuvent dépasser 35 °C alors que les nuits descendent sous 10 °C, parfois proches du gel en hiver (juin à août)",
      "Des vêtements de couleurs neutres pour les game drives (évitez le blanc vif ou le noir, qui montrent la poussière et retiennent la chaleur)",
      "Un vrai chapeau et des lunettes de soleil : le soleil est implacable, même pendant la saison verte",
      "Une veste chaude ou une polaire pour les game drives matinaux et les nuits du désert, même en été",
    ],
  },
  {
    title: "Santé et pratique",
    items: [
      "Une crème solaire à indice élevé et un baume à lèvres : l'air sec et l'altitude augmentent tous deux l'exposition aux UV",
      "Une trousse de premiers secours de base et vos médicaments personnels, certains lodges étant très éloignés d'une pharmacie",
      malariaItem,
      "Des gourdes réutilisables : prévoyez 2 à 5 litres par personne sur les tronçons isolés en autotour",
    ],
  },
  {
    title: "Spécifique à l'autotour",
    items: [
      "Une carte physique, imprimée ou téléchargée hors ligne : consultez notre guide de connectivité pour comprendre pourquoi vous ne pouvez pas compter sur le réseau",
      "Une trousse à outils de base et un kit de réparation de pneu si votre location n'en inclut pas déjà un",
      "Des espèces (dollars namibiens ou rands sud-africains) pour les stations-service et les droits d'entrée des parcs dans les zones où les cartes ne fonctionnent pas",
      "Des sacs anti-poussière pour le matériel photo et l'électronique lors des trajets sur pistes en gravier",
    ],
  },
  {
    title: "Photographie",
    items: [
      "Un trépied si vous prévoyez de l'observation d'étoiles ou de l'astrophotographie : consultez notre guide dédié",
      "Des batteries et cartes mémoire de rechange : les possibilités de recharge sont limitées dans les camps isolés",
      "Un chiffon pour objectif et une poire soufflante : la poussière des pistes en gravier s'infiltre partout",
    ],
  },
];

const FAQS = [
  {
    q: "Combien d'eau dois-je emporter pour un autotour en Namibie ?",
    a: "Prévoyez au moins 2 à 5 litres par personne pour tout tronçon isolé, davantage pendant les mois les plus chauds. Ce n'est pas qu'une question de confort : les stations-service et les services sont réellement très espacés, et emporter de l'eau est un conseil standard en cas de panne, pas une exagération.",
  },
  {
    q: "Faut-il des vêtements chauds dans un pays désertique ?",
    a: "Oui, et cela surprend beaucoup de voyageurs pour leur premier séjour. Les régions désertiques de Namibie peuvent passer de plus de 35 °C le jour à moins de 10 °C la nuit, et en hiver (juin à août) les nuits peuvent frôler le gel dans des endroits comme Sossusvlei. Les couches ne sont pas facultatives, elles sont indispensables.",
  },
  {
    q: "Quelles couleurs porter pendant les game drives ?",
    a: "Des tons neutres et discrets (kaki, olive, sable) plutôt que du blanc vif, du noir ou des couleurs très foncées, qui montrent vite la poussière et peuvent attirer davantage l'attention des animaux à courte distance.",
  },
  {
    q: "Faut-il prévoir un traitement antipaludique dans mes bagages ?",
    a: "Cela dépend de votre itinéraire et de vos dates précises : le risque de paludisme en Namibie se concentre dans le nord (Etosha, Caprivi) et est le plus élevé pendant la saison des pluies (environ de novembre à avril). Consultez notre guide sécurité et santé pour le détail région par région, et faites confirmer votre besoin par un médecin de voyage plutôt que de présumer dans un sens ou dans l'autre.",
  },
];

export default function PackingListPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Liste de bagages", url: `${SITE_URL}/fr/namibia-packing-list` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Liste de bagages pour la Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La chaleur du désert namibien passe de plus de 35 °C le jour à moins de 10 °C la nuit
          (parfois proche du gel en hiver), et la poussière des pistes en gravier s&apos;infiltre
          partout. C&apos;est ce qui façonne réellement cette liste, pas une checklist safari
          générique.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{cat.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                    <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
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
            href="/fr/namibia-connectivity"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Cartes SIM, eSIM et connectivité
          </Link>
        </Reveal>
      </section>
    </>
  );
}
