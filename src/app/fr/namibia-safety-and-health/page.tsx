import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibie est-elle sûre ? Sécurité & santé";
const DESCRIPTION =
  "Un regard honnête sur les risques réels de la Namibie : petite délinquance, sécurité routière, et les endroits où le paludisme est vraiment un sujet de préoccupation, par rapport aux régions du pays où il ne l'est pas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-safety-and-health",
    languages: {
      en: "/namibia-safety-and-health",
      de: "/de/namibia-safety-and-health",
      nl: "/nl/namibia-safety-and-health", fr: "/fr/namibia-safety-and-health",
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

const SAFETY_POINTS = [
  {
    title: "Petite délinquance",
    text: "Concentrée dans les zones urbaines (surtout Windhoek et Swakopmund) et soumise aux règles habituelles de toute ville : ne pas exhiber d'objets de valeur, utiliser le coffre-fort de l'hôtel, prendre un taxi la nuit plutôt que de marcher. En dehors des villes, sur les itinéraires en lodge ou en autotour, ce n'est pas un sujet de préoccupation.",
  },
  {
    title: "Sécurité routière",
    text: (
      <>
        Le risque réel le plus important pour la plupart des visiteurs. Les longues distances, les
        pistes en gravier et la faune qui traverse les routes au crépuscule et la nuit font des
        accidents de la route l'incident grave le plus fréquent chez les voyageurs, bien plus que
        la délinquance. Consultez notre{" "}
        <Link
          href="/fr/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guide de l'autotour
        </Link>{" "}
        pour le détail.
      </>
    ),
  },
  {
    title: "Voyage en solo et voyageuses seules",
    text: "Largement décrit comme agréable par les voyageurs en solo, y compris les femmes seules, surtout sur des itinéraires organisés et en lodge. Les précautions habituelles s'appliquent en ville après la tombée de la nuit, comme partout ailleurs.",
  },
  {
    title: "Rencontres avec la faune",
    text: (
      <>
        Un risque réel mais maîtrisable en suivant les consignes des guides : rester dans le
        véhicule dans les zones à gibier sauf indication contraire, ne jamais s'approcher des
        animaux près des points d'eau à proximité des lodges, et suivre les recommandations du
        personnel du camp concernant les déplacements à pied après la tombée de la nuit, là où
        éléphants ou hyènes sont connus pour passer. Consultez notre{" "}
        <Link
          href="/fr/namibia-wildlife-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guide de la faune
        </Link>{" "}
        pour savoir à quoi s'attendre région par région.
      </>
    ),
  },
];

const FAQS = [
  {
    q: "La Namibie est-elle sûre à visiter ?",
    a: "Oui, selon les standards régionaux, la Namibie est considérée comme l'un des pays les plus sûrs d'Afrique australe pour les touristes. Ses risques réels sont la sécurité routière (longues distances, gravier, faune sur les routes la nuit) et la petite délinquance urbaine ordinaire, pas la criminalité violente visant les voyageurs.",
  },
  {
    q: "Faut-il prendre un traitement antipaludéen pour la Namibie ?",
    a: "Cela dépend d'où vous allez et à quelle période. Le risque de paludisme en Namibie se concentre dans le nord (les zones nord d'Etosha, la région du Zambèze (Caprivi)) et il est maximal pendant la saison des pluies (environ novembre à avril). Le centre et le sud de la Namibie, dont Sossusvlei, Swakopmund et Windhoek, présentent un risque faible ou nul toute l'année. Consultez un médecin du voyage avec votre itinéraire et vos dates précises. Ceci est une information générale, pas un avis médical.",
  },
  {
    q: "La Namibie est-elle sûre pour les femmes voyageant seules ?",
    a: "Généralement décrite comme agréable, en particulier pour les séjours en lodge ou les autotours organisés. Les précautions urbaines habituelles s'appliquent à Windhoek et Swakopmund après la tombée de la nuit, comme dans toute ville.",
  },
  {
    q: "Quels vaccins faut-il faire pour la Namibie ?",
    a: "Il n'existe pas de liste universelle : les exigences dépendent de votre pays d'origine, de votre itinéraire et de vos antécédents médicaux personnels. Un certificat de vaccination contre la fièvre jaune peut être exigé en cas d'arrivée depuis un pays où le risque de transmission existe. Renseignez-vous bien avant le départ auprès d'un centre de médecine des voyages.",
  },
];

export default function SafetyHealthPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Sécurité & santé", url: `${SITE_URL}/fr/namibia-safety-and-health` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibie est-elle sûre ? Sécurité & santé
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibie compte parmi les pays les plus sûrs où voyager en Afrique australe, mais
          &quot;sûr&quot; n&apos;est pas synonyme de &quot;sans risque.&quot; Voici où se situent
          réellement les risques.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Informations générales uniquement, ceci n&apos;est ni un avis médical ni un avis de
          sécurité. Consultez un professionnel de la médecine des voyages et les conseils aux
          voyageurs de votre gouvernement avant de partir.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SAFETY_POINTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{p.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Paludisme : la réalité région par région</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Risque plus élevé : le nord d'Etosha, la région du Zambèze (Caprivi), surtout pendant la saison des pluies (nov.-avr.)",
              "Risque faible ou nul : Windhoek, Swakopmund, Sossusvlei, Fish River Canyon, la majeure partie du centre et du sud de la Namibie",
              "Le besoin de prophylaxie dépend de votre itinéraire et de vos dates : c'est à un médecin du voyage de le confirmer, pas à un guide général",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
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
