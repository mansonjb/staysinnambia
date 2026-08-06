import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Sicherheits- & Gesundheitsguide";
const DESCRIPTION =
  "Ein ehrlicher Blick auf Namibias reale Risiken: Kleinkriminalität, Verkehrssicherheit, und wo Malaria tatsächlich ein Thema ist, im Vergleich zu den Landesteilen, die es nicht sind.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-safety-and-health",
    languages: { en: "/namibia-safety-and-health", de: "/de/namibia-safety-and-health", nl: "/nl/namibia-safety-and-health" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_DE = [
  { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
  { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
  { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
  { title: "Namibia Self-Drive-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Einreisebestimmungen für Namibia", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Was kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const SAFETY_POINTS = [
  {
    title: "Kleinkriminalität",
    text: "Konzentriert sich auf städtische Gebiete (vor allem Windhoek und Swakopmund) und folgt normalen Stadt-Regeln: Wertsachen nicht offen zeigen, den Hotelsafe nutzen, nachts ein Taxi statt zu Fuß gehen. Außerhalb der Städte, auf Lodge- und Selbstfahrer-Routen, spielt es keine Rolle.",
  },
  {
    title: "Verkehrssicherheit",
    text: (
      <>
        Das größere reale Risiko für die meisten Besucher. Lange Distanzen, Schotterstraßen und
        Wildwechsel in der Dämmerung und nachts bedeuten, dass Verkehrsunfälle der häufigste
        ernsthafte Zwischenfall für Reisende sind, nicht Kriminalität. Details dazu in unserem{" "}
        <Link
          href="/de/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Self-Drive-Guide
        </Link>
        .
      </>
    ),
  },
  {
    title: "Alleinreisende und alleinreisende Frauen",
    text: "Von Alleinreisenden, einschließlich alleinreisenden Frauen, vielfach als angenehm beschrieben, besonders auf organisierten Routen und in Lodges. In städtischen Gebieten gelten nach Einbruch der Dunkelheit die üblichen Vorsichtsmaßnahmen, wie überall.",
  },
  {
    title: "Begegnungen mit Wildtieren",
    text: (
      <>
        Real, aber mit Anleitung durch Guides gut zu handhaben: in Wildgebieten im Fahrzeug
        bleiben, sofern nichts anderes gesagt wird, sich Tieren an Wasserlöchern in Lodge-Nähe nie
        nähern, und den Hinweisen des Camp-Personals zum Laufen nach Einbruch der Dunkelheit
        folgen, wo bekanntermaßen Elefanten oder Hyänen durchziehen. Was Sie Region für Region
        erwarten können, steht in unserem{" "}
        <Link
          href="/de/namibia-wildlife-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Tierwelt-Guide
        </Link>
        .
      </>
    ),
  },
];

const FAQS = [
  {
    q: "Ist Namibia sicher zu bereisen?",
    a: "Ja, gemessen an regionalen Maßstäben gilt Namibia als eines der sichereren Länder im südlichen Afrika für Touristen. Die realen Risiken sind Verkehrssicherheit (lange Distanzen, Schotter, Wildwechsel nachts auf der Straße) und gewöhnliche städtische Kleinkriminalität, nicht Gewaltkriminalität gegen Reisende.",
  },
  {
    q: "Brauche ich Malariatabletten für Namibia?",
    a: "Das hängt davon ab, wohin und wann Sie reisen. Das Malariarisiko in Namibia konzentriert sich auf den Norden (die nördlichen Gebiete Etoshas, die Sambesi-Region (Caprivi)) und ist in der Regenzeit (etwa November bis April) am höchsten. Zentral- und Südnamibia, einschließlich Sossusvlei, Swakopmund und Windhoek, haben ganzjährig ein geringes oder kein Risiko. Besprechen Sie Ihre konkrete Reiseroute und Ihre Reisedaten mit einem Reisearzt. Das sind allgemeine Informationen, keine medizinische Beratung.",
  },
  {
    q: "Ist Namibia sicher für alleinreisende Frauen?",
    a: "Wird häufig als angenehm beschrieben, besonders bei Lodge-basierten oder organisierten Selbstfahrer-Reisen. In Windhoek und Swakopmund gelten nach Einbruch der Dunkelheit die üblichen städtischen Vorsichtsmaßnahmen, wie in jeder Stadt.",
  },
  {
    q: "Welche Impfungen brauche ich für Namibia?",
    a: "Es gibt keine universelle Liste: Die Anforderungen hängen von Ihrem Heimatland, Ihrer Reiseroute und Ihrer persönlichen Krankengeschichte ab. Ein Gelbfieber-Nachweis kann erforderlich sein, wenn Sie aus einem Land mit Übertragungsrisiko einreisen. Erkundigen Sie sich rechtzeitig vor der Abreise bei einer reisemedizinischen Stelle.",
  },
];

export default function SafetyHealthPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Sicherheit & Gesundheit", url: `${SITE_URL}/de/namibia-safety-and-health` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Ist Namibia sicher? Sicherheit & Gesundheit
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia zählt zu den sichereren Ländern im südlichen Afrika, aber „sicher“ bedeutet
          nicht „risikofrei“. Hier ist, wo die realen Risiken tatsächlich liegen.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Nur allgemeine Informationen, keine medizinische oder Sicherheitsberatung. Konsultieren
          Sie vor der Abreise einen reisemedizinischen Experten und die Reisehinweise Ihrer
          Regierung.
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
          <h2 className="text-xl font-bold text-charcoal">Malaria: die Realität Region für Region</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Höheres Risiko: nördliches Etosha, die Sambesi-Region (Caprivi), besonders in der Regenzeit (Nov–Apr)",
              "Geringes/kein Risiko: Windhoek, Swakopmund, Sossusvlei, Fish River Canyon, der Großteil von Zentral- und Südnamibia",
              "Der Prophylaxebedarf hängt von Ihrer Reiseroute und den Reisedaten ab: Das sollte ein Reisearzt bestätigen, kein allgemeiner Guide",
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
            Häufig gestellte Fragen
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
          {POPULAR_GUIDES_DE.map((g) => (
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
