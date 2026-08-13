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
        it: "/it/namibia-packing-list",
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
    Une prophylaxie antipaludique (doxycycline ou l&apos;association atovaquone-proguanil/Malarone
    sont les deux options les plus souvent prescrites) si votre itinéraire traverse les régions à
    risque : Kavango, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa et
    Zambezi, avec un risque plus élevé pendant la saison des pluies. Consultez notre{" "}
    <Link href="/fr/namibia-safety-and-health" className="font-semibold text-rust hover:text-rust-dark">
      guide sécurité et santé
    </Link>{" "}
    pour le détail région par région, et faites confirmer le médicament avec un médecin de voyage
  </>
);

const CATEGORIES = [
  {
    title: "Vêtements",
    items: [
      "Des vêtements en couches : les journées désertiques peuvent dépasser 35 °C alors que les nuits descendent sous 10 °C, parfois proches du gel en hiver (juin à août)",
      "Des vêtements de couleurs neutres pour les game drives (évitez le blanc vif ou le noir, qui montrent la poussière et retiennent la chaleur)",
      "Un vrai chapeau à larges bords et des lunettes de soleil polarisantes : le soleil est implacable, même pendant la saison verte",
      "Une veste chaude ou une polaire pour les game drives matinaux et les nuits du désert, même en été",
      "Un buff ou tour de cou : le vêtement le plus utile sur les pistes en gravier, à la fois masque anti-poussière, protection solaire et chaleur à l'aube",
      "Un pantalon à séchage rapide et des chaussures fermées plutôt que des sandales dès que vous quittez le bitume : gravier, épines et sable meuble punissent les pieds à découvert",
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
      "Une trousse à outils de base et un kit de réparation de pneu si votre location n'en inclut pas déjà un, les crevaisons et impacts de pare-brise sur pistes en gravier étant le sinistre le plus fréquent en location",
      "Des espèces (dollars namibiens ou rands sud-africains) pour les stations-service et les droits d'entrée des parcs (N$280/personne/jour à Etosha et Namib-Naukluft), les terminaux de carte y étant peu fiables",
      "Des sacs anti-poussière ou des sacs étanches pour le matériel photo et l'électronique lors des trajets sur pistes en gravier : la poussière fine namibienne s'infiltre dans les fermetures éclair, les ports et les montures d'objectif",
    ],
  },
  {
    title: "Électronique et énergie",
    items: [
      "Une lampe frontale avec piles de rechange : de nombreux lodges isolés et camps du désert fonctionnent au générateur ou au solaire sur des plages horaires fixes plutôt que sur un réseau 24h/24, et coupent l'électricité la nuit",
      "Un adaptateur universel pour les prises namibiennes de type D et M (220V), plus une batterie externe : les créneaux de recharge dans les camps isolés sont limités et partagés",
      "Un téléphone avec les cartes téléchargées à l'avance pour une utilisation hors ligne, et une carte papier de secours : le réseau mobile disparaît sur de longs tronçons en dehors des villes",
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
    a: "Prévoyez au moins 2 à 5 litres par personne pour tout tronçon isolé, davantage pendant les mois les plus chauds. Ce n'est pas qu'une question de confort : les stations-service et les services sont réellement très espacés, parfois plus de 250 km sur des tronçons comme la Skeleton Coast, le Kaokoland ou la route vers Fish River Canyon, et emporter de l'eau est un conseil standard en cas de panne, pas une exagération.",
  },
  {
    q: "Faut-il des vêtements chauds dans un pays désertique ?",
    a: "Oui, et cela surprend beaucoup de voyageurs pour leur premier séjour. Les régions désertiques de Namibie peuvent passer de plus de 35 °C le jour à moins de 10 °C la nuit, et en hiver (juin à août) les nuits peuvent frôler le gel dans des endroits comme Sossusvlei. Les couches ne sont pas facultatives, elles sont indispensables, et un buff ou tour de cou couvre à la fois la poussière et le froid de l'aube en un seul accessoire.",
  },
  {
    q: "Quelles couleurs porter pendant les game drives ?",
    a: "Des tons neutres et discrets (kaki, olive, sable) plutôt que du blanc vif, du noir ou des couleurs très foncées, qui montrent vite la poussière et peuvent attirer davantage l'attention des animaux à courte distance.",
  },
  {
    q: "Faut-il prévoir un traitement antipaludique dans mes bagages ?",
    a: "Cela dépend de votre itinéraire et de vos dates précises : les recommandations du CDC américain signalent un risque de paludisme dans les régions namibiennes de Kavango, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa et Zambezi, le plus élevé pendant la saison des pluies (environ de novembre à avril). La doxycycline et l'association atovaquone-proguanil (Malarone) sont les deux options de prophylaxie les plus couramment recommandées. Consultez notre guide sécurité et santé pour le détail région par région, et faites confirmer le médicament et le dosage par un médecin de voyage plutôt que de présumer dans un sens ou dans l'autre.",
  },
  {
    q: "Quel adaptateur de prise faut-il pour la Namibie ?",
    a: "La Namibie utilise des prises de type D et M en 220V/50Hz, les mêmes grosses prises rondes à trois broches qu'en Afrique du Sud. Un adaptateur universel couvre les deux. La plupart des chargeurs de téléphone, d'appareil photo et d'ordinateur portable sont bi-tension (repérez la mention « 100-240V » sur l'adaptateur), donc seul le format de la prise compte, pas besoin de convertisseur de tension.",
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
