import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Visabestimmungen";
const DESCRIPTION =
  "Was sich im April 2025 geändert hat: Namibias neues Online-Visa-on-Arrival-System, wer weiterhin eines benötigt, die Gebühr von 90 US-Dollar, und welche Dokumente Sie mitbringen müssen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-visa-requirements",
    languages: { en: "/namibia-visa-requirements", de: "/de/namibia-visa-requirements", nl: "/nl/namibia-visa-requirements" },
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
  { title: "Namibia Selbstfahrer-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Namibia Visabestimmungen", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Was kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const FAQS = [
  {
    q: "Brauche ich ein Visum für Namibia?",
    a: "Das hängt von der Nationalität ab. Nachbarländer aus der SADC-Region und eine Reihe weiterer Länder bleiben für Kurzaufenthalte visumsbefreit. Die meisten anderen Nationalitäten (einschließlich der Mehrheit der EU-Länder, Großbritanniens und der USA) sind für ein Visa on Arrival berechtigt, aber seit April 2025 muss dieses Visum vorab online beantragt werden, statt am Flughafen vor Ort ausgestellt zu werden.",
  },
  {
    q: "Was hat sich am 1. April 2025 geändert?",
    a: "Namibia hat sein Visa-on-Arrival-System auf eine verpflichtende Online-Beantragung vor der Anreise umgestellt. Reisende, die für das Visa on Arrival berechtigt sind, können nicht mehr einfach an der Einreise anstehen und bar bezahlen: Antrag, Zahlung und Genehmigung erfolgen jetzt vor der Abreise, ähnlich einer eTA.",
  },
  {
    q: "Wie viel kostet das Namibia Visa on Arrival?",
    a: "Die Gebühr für das Visa on Arrival beträgt 90 US-Dollar, zu zahlen online zum Zeitpunkt der Beantragung. Das Visum ist ab Ausstellungsdatum 3 Monate gültig und erlaubt einen einmaligen Aufenthalt von bis zu 30 Tagen.",
  },
  {
    q: "Welche Dokumente benötige ich für die Beantragung?",
    a: "Einen Reisepass, der noch mindestens 6 Monate über Ihre Reisedaten hinaus gültig ist und mindestens 3 leere Seiten hat, ein Einladungsschreiben oder eine bestätigte Unterkunftsbuchung sowie einen Nachweis über ausreichende finanzielle Mittel und eine Reise- bzw. Krankenversicherung für Ihren Aufenthalt. Die Anforderungen können sich ändern, prüfen Sie die aktuelle Liste daher vor der Beantragung bei Namibias offiziellen Einwanderungsbehörden.",
  },
  {
    q: "Wie weit im Voraus sollte ich den Antrag stellen?",
    a: "Beantragen Sie das Visum, sobald Ihre Reisedaten feststehen. Als neues Online-System waren die Bearbeitungszeiten in der frühen Einführungsphase uneinheitlich: planen Sie mehrere Wochen Puffer ein, statt erst in der Woche vor der Abreise zu beantragen.",
  },
];

export default function VisaPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Visabestimmungen", url: `${SITE_URL}/de/namibia-visa-requirements` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber · Aktualisiert für 2026
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia Visabestimmungen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Seit dem 1. April 2025 wird Namibias Visa on Arrival nicht mehr an der Grenze
          ausgestellt: es muss vor dem Abflug online beantragt und bezahlt werden. Viele ältere
          Ratgeber beschreiben noch das alte System. Hier ist, was jetzt gilt, und wie die Gebühr
          von 90 US-Dollar in den Rest Ihres{" "}
          <Link href="/de/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            Reisebudgets
          </Link>{" "}
          passt.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Diese Seite fasst öffentlich berichtete Änderungen der Einreisebestimmungen zusammen und
          ist keine Einwanderungsberatung. Bestätigen Sie die aktuellen Anforderungen für Ihre
          Nationalität bei Namibias offizieller Einwanderungsbehörde, bevor Sie buchen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Visa-on-Arrival-Gebühr", value: "US$90" },
            { label: "Gültigkeit ab Ausstellung", value: "3 Monate" },
            { label: "Maximale Aufenthaltsdauer", value: "30 Tage" },
          ].map((stat) => (
            <Reveal
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm"
            >
              <p className="font-serif text-4xl italic text-rust">{stat.value}</p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-charcoal/50">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Was Sie für die Beantragung brauchen</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Reisepass, der noch mindestens 6 Monate über Ihre Reisedaten hinaus gültig ist, mit mindestens 3 leeren Seiten",
              "Einladungsschreiben oder bestätigte Unterkunftsbuchung",
              "Nachweis ausreichender finanzieller Mittel für Ihren Aufenthalt",
              "Nachweis einer Reise- oder Krankenversicherung",
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
