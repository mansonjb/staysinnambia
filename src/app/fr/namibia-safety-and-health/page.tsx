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
    text: "Concentrée à Windhoek et, dans une moindre mesure, à Walvis Bay, surtout après la tombée de la nuit : le Département d'État américain et le FCDO britannique signalent tous deux le vol à la tire, l'arrachage de sacs et les vols par bris de vitre sur des voitures garées et inoccupées comme les incidents les plus courants touchant les visiteurs. Les deux classent la Namibie dans leur niveau équivalent à « faites preuve d'une vigilance accrue », le même niveau que la majeure partie de l'Europe de l'Ouest, pas un niveau de risque sérieux. Des vols à main armée ou des invasions de domicile isolés se produisent, mais dans des zones résidentielles et d'affaires, pas sur les itinéraires touristiques. Utilisez le coffre-fort de l'hôtel, ne laissez pas de sacs visibles dans une voiture garée, et prenez un taxi plutôt que de marcher la nuit dans les centres-villes. En dehors des villes, sur les itinéraires en lodge ou en autotour, ce n'est quasiment jamais un sujet de préoccupation.",
  },
  {
    title: "Sécurité routière",
    text: (
      <>
        Le risque réel le plus important pour la plupart des visiteurs, et de loin. La Namibie
        compte environ 12 000 km de pistes en gravier, et la consigne du FCDO comme des loueurs
        locaux est de ne pas dépasser 60 à 80 km/h sur le gravier, quelle que soit la limite
        affichée : l&apos;incident grave le plus fréquent chez les voyageurs en autotour est le
        tonneau d&apos;un véhicule seul, pris dans un virage à tôle ondulée ou sableux à trop
        grande vitesse, pas une collision avec un autre véhicule. Ajoutez à cela de longs tronçons
        sans services, la fatigue et les animaux qui traversent au crépuscule et à l&apos;aube, et
        le schéma est clair : ralentissez, évitez de conduire la nuit en dehors des villes, et
        emportez une roue de secours et de l&apos;eau en plus. Consultez notre{" "}
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
    text: "Largement décrit comme agréable par les voyageurs en solo, y compris les femmes seules, surtout sur des itinéraires organisés et en lodge. La criminalité violente visant les touristes est assez rare pour que les autorités américaines et britanniques la traitent comme l'exception, pas la règle. Les précautions habituelles s'appliquent à Windhoek et à Walvis Bay après la tombée de la nuit, comme partout ailleurs.",
  },
  {
    title: "Rencontres avec la faune",
    text: (
      <>
        Un risque réel mais maîtrisable en suivant les consignes des guides : rester dans le
        véhicule dans les zones à gibier sauf indication contraire, ne jamais s'approcher des
        animaux près des points d'eau à proximité des lodges, et suivre les recommandations du
        personnel du camp concernant les déplacements à pied après la tombée de la nuit, là où
        éléphants ou hyènes sont connus pour passer. Un point précis à connaître : les colonies
        d&apos;otaries à fourrure du Cap de Namibie, dont celle de Cape Cross, ont enregistré des
        cas de rage documentés, donc gardez vos distances et traitez toute morsure ou griffure,
        même mineure, comme une urgence nécessitant une prise en charge médicale immédiate, quel
        que soit votre statut vaccinal. Consultez notre{" "}
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
  {
    title: "Soins médicaux et évacuation",
    text: "Les lodges du Namib, du Kaokoland ou de la région du Zambèze peuvent se trouver à plusieurs heures de route, voire à un vol en petit avion, de l'hôpital le plus proche capable de traiter un traumatisme : ce n'est pas un détail à négliger dans la préparation du voyage. Medical Rescue Africa (MRA) est le prestataire namibien d'évacuation aéromédicale et d'ambulances, et de nombreux lodges et opérateurs travaillent déjà avec eux, mais c'est votre assurance voyage qui prend en charge la facture. Si vous avez déjà une adhésion AMREF Flying Doctors d'un voyage en Afrique de l'Est, sachez qu'elle ne couvre pas la Namibie, le Botswana ni l'Afrique du Sud : vérifiez que votre police inclut explicitement une évacuation médicale valable en Afrique australe avant de partir.",
  },
];

const FAQS = [
  {
    q: "La Namibie est-elle sûre à visiter ?",
    a: "Oui. Le Département d'État américain et le FCDO britannique classent tous deux la Namibie dans leur niveau équivalent à « faites preuve d'une vigilance accrue », le même niveau que la majeure partie de l'Europe de l'Ouest, pas un niveau de risque sérieux. Ses risques réels sont la sécurité routière (longues distances, gravier, tonneaux de véhicules seuls, faune sur les routes au crépuscule) et la petite délinquance urbaine ordinaire à Windhoek et à Walvis Bay, pas la criminalité violente visant les voyageurs.",
  },
  {
    q: "Faut-il prendre un traitement antipaludéen pour la Namibie ?",
    a: "Cela dépend d'où vous allez et à quelle période. Le CDC recense le Kavango East, le Kavango West, le Kunene, l'Ohangwena, l'Omaheke, l'Omusati, l'Oshana, l'Oshikoto, l'Otjozondjupa et le Zambèze comme régions à risque, soit globalement le tiers nord du pays, y compris le nord d'Etosha et la région du Zambèze (Caprivi), et le risque est maximal pendant la saison des pluies (environ novembre à avril). Il n'y a aucune transmission du paludisme à Windhoek, et le risque est faible à Sossusvlei, Swakopmund et dans la majeure partie du centre et du sud de la Namibie toute l'année. La Namibie a aussi connu une forte hausse des cas début 2026, concentrée dans les régions du Zambèze et du Kavango, donc vérifiez la situation actuelle auprès d'un médecin du voyage en fonction de votre itinéraire et de vos dates précises. Ceci est une information générale, pas un avis médical.",
  },
  {
    q: "La Namibie est-elle sûre pour les femmes voyageant seules ?",
    a: "Généralement décrite comme agréable, en particulier pour les séjours en lodge ou les autotours organisés ; les mêmes avis de sécurité qui signalent la petite délinquance en Namibie ne relèvent aucun risque accru spécifique pour les femmes voyageant seules. Les précautions urbaines habituelles s'appliquent à Windhoek et à Walvis Bay après la tombée de la nuit, comme dans toute ville.",
  },
  {
    q: "Quels vaccins faut-il faire pour la Namibie ?",
    a: "Il n'existe pas de liste universelle, mais les recommandations standards du CDC pour la Namibie incluent l'hépatite A, l'hépatite B et la typhoïde pour la plupart des voyageurs, en plus des vaccins de routine (ROR, polio, etc.). La vaccination préventive contre la rage mérite d'être envisagée si vous prévoyez du vélo, de la spéléologie ou un contact avec des animaux, et elle est d'autant plus pertinente compte tenu des cas de rage documentés dans les colonies d'otaries à fourrure du Cap de Namibie. La vaccination contre la fièvre jaune n'est pas exigée pour un vol direct depuis l'Europe ou l'Amérique du Nord, mais une preuve de vaccination peut être demandée si vous arrivez d'un pays à risque de fièvre jaune. Renseignez-vous auprès d'un centre de médecine des voyages quatre à six semaines avant le départ : votre itinéraire et vos antécédents médicaux personnels peuvent changer la réponse. Ceci est une information générale, pas un avis médical.",
  },
  {
    q: "Faut-il une assurance évacuation médicale ?",
    a: "Prenez-la au sérieux, vu l'éloignement de certains lodges. La Namibie a son propre prestataire d'évacuation aéromédicale, Medical Rescue Africa (MRA), avec lequel de nombreux lodges et opérateurs travaillent déjà, mais il vous faut malgré tout une assurance voyage qui couvre explicitement l'évacuation médicale en Namibie. Si vous combinez ce voyage avec l'Afrique de l'Est et disposez déjà d'une adhésion AMREF Flying Doctors, sachez qu'elle ne s'étend pas à la Namibie, au Botswana ni à l'Afrique du Sud. Vérifiez votre couverture avant de partir, pas après.",
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
              "Régions à risque plus élevé signalées par le CDC et l'OMS : Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa et Zambezi, soit globalement la bande nord du pays, y compris le nord d'Etosha et la région du Zambèze (Caprivi)",
              "Aucune transmission du paludisme à Windhoek, et un risque faible ou rare à Sossusvlei, Fish River Canyon, la Skeleton Coast et dans la majeure partie du centre et du sud de la Namibie",
              "Le risque est le plus élevé pendant la saison des pluies (nov.-avr.) ; les tronçons le long des fleuves Kunene, Zambèze et Okavango présentent un certain risque toute l'année",
              "Le ministère namibien de la Santé a enregistré une forte hausse des cas début 2026, concentrée dans le Zambèze, le Kavango East et le Kavango West, ce qui a déclenché une réponse appuyée par l'OMS : si votre itinéraire traverse ces régions, considérez la prophylaxie comme non négociable, pas optionnelle",
              "Le choix de la prophylaxie (le plus souvent atovaquone-proguanil, doxycycline ou méfloquine) dépend de votre itinéraire, de vos dates et de vos antécédents médicaux : c'est à un médecin du voyage de le confirmer, pas à un guide général",
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
