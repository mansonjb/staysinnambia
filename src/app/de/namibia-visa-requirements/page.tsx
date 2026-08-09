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
    languages: { en: "/namibia-visa-requirements", de: "/de/namibia-visa-requirements", nl: "/nl/namibia-visa-requirements", fr: "/fr/namibia-visa-requirements" },
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
    a: "Das hängt von der Nationalität ab. Namibia befreit rund 55 Länder vollständig von der Visumspflicht für kurze touristische Aufenthalte, darunter die direkten SADC-Nachbarländer Südafrika, Botswana, Sambia und Simbabwe sowie 18 weitere Länder aufgrund gegenseitiger Visabefreiungsabkommen. Die meisten anderen Nationalitäten, darunter die Mehrheit der EU-Länder, Großbritannien und die USA, sind für ein Visa on Arrival (VoA) berechtigt. Seit dem 1. April 2025 muss dieses Visum jedoch vor dem Abflug online beantragt und genehmigt werden, statt am Flughafen vor Ort ausgestellt zu werden.",
  },
  {
    q: "Was hat sich am 1. April 2025 geändert, und hat sich seitdem noch etwas getan?",
    a: "Namibias Ministerium für Inneres, Einwanderung, Sicherheit (MHAISS) hat das Visa-on-Arrival-System auf eine verpflichtende Online-Beantragung vor der Anreise umgestellt, eingereicht über das eServices-Portal der Behörde. Reisende, die für das Visa on Arrival berechtigt sind, können nicht mehr einfach an der Einreise anstehen und bar bezahlen: Antrag, Zahlung und Genehmigung erfolgen jetzt vor der Abreise, ähnlich einer eTA. Das System entwickelt sich seit dem Start weiter: Im Oktober 2025 hat MHAISS 36 weitere Nationalitäten zur Liste der online-berechtigten Länder hinzugefügt, und der Berechtigungsrahmen wird auch 2026 laufend angepasst. Da sich die Liste ändern kann, sollten Sie Ihre Nationalität immer kurz vor der Reise auf dem offiziellen Portal prüfen, statt sich auf die Liste vom Vorjahr zu verlassen.",
  },
  {
    q: "Wie viel kostet das Namibia Visa on Arrival?",
    a: "Die veröffentlichte Gebühr liegt bei NAD 1.600 (umgerechnet etwa 90 US-Dollar zum aktuellen Wechselkurs) für die meisten nicht-afrikanischen Nationalitäten und bei vergünstigten NAD 1.200 (etwa 65 bis 70 US-Dollar) für Angehörige anderer Mitgliedsstaaten der Afrikanischen Union. Sie wird online, in namibischen Dollar, zum Zeitpunkt der Beantragung bezahlt. Das Visum ist ab Ausstellungsdatum 3 Monate gültig und erlaubt einen Aufenthalt von bis zu 30 Tagen pro Einreise.",
  },
  {
    q: "Welche Dokumente benötige ich für die Beantragung?",
    a: "Ein Reisepass, der noch mindestens 6 Monate über Ihre Reisedaten hinaus gültig ist und leere Seiten für das Visum hat; ein kurzes Motivationsschreiben zum Zweck Ihrer Reise; eine bestätigte Unterkunftsbuchung oder ein Einladungsschreiben; ein Kontoauszug oder ein anderer Nachweis ausreichender finanzieller Mittel für Ihren Aufenthalt; sowie ein Nachweis über eine Reise- oder Krankenversicherung, die Ihre Reise abdeckt. Manche Antragsteller werden zusätzlich um eine Bestätigung des Weiter- oder Rückflugs gebeten. Die Anforderungen können sich ändern, prüfen Sie die aktuelle Liste daher vor der Beantragung auf Namibias offiziellem eServices-Einwanderungsportal.",
  },
  {
    q: "Wie lange dauert die Genehmigung tatsächlich?",
    a: "MHAISS gibt in den eigenen Richtlinien etwa 7 bis 10 Werktage für Online-Anträge an, wobei unabhängige Einwanderungsberater von allem berichten, von Genehmigungen am selben Tag bis zu längeren Wartezeiten bei Wartungsarbeiten am Portal oder hoher Nachfrage. Rechnen Sie mit 7 bis 10 Werktagen als Richtwert, beantragen Sie mindestens 2 bis 3 Wochen vor der Abreise, und planen Sie einen zusätzlichen Puffer ein, wenn Sie in der Hauptsaison (Juli bis September) reisen, wenn die Zahl der Anträge am höchsten ist.",
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
          ausgestellt: es muss über das eServices-Portal des Innenministeriums vor dem Abflug
          online beantragt, bezahlt und genehmigt werden. Die Liste der berechtigten
          Nationalitäten wächst seitdem stetig weiter, zuletzt im Oktober 2025 um 36 Länder. Viele
          ältere Ratgeber beschreiben noch das alte System mit Barzahlung am Flughafen. Hier ist,
          was jetzt gilt, und wie die Gebühr von rund 90 US-Dollar in den Rest Ihres{" "}
          <Link href="/de/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            Reisebudgets
          </Link>{" "}
          passt.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Diese Seite fasst öffentlich berichtete Änderungen der Einreisebestimmungen und
          Einschätzungen von Einwanderungsberatern zusammen und ist keine Einwanderungsberatung.
          Regeln, Gebühren und Listen berechtigter Nationalitäten haben sich seit April 2025
          mehrfach geändert und können sich erneut ändern. Bestätigen Sie die aktuellen
          Anforderungen für Ihre Nationalität immer direkt bei Namibias offizieller
          Einwanderungsbehörde (MHAISS, über das eServices-Portal), bevor Sie Flüge buchen oder
          eine Visagebühr bezahlen.
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
              "Ein kurzes Motivationsschreiben zum Zweck Ihrer Reise",
              "Bestätigte Unterkunftsbuchung (oder ein formelles Einladungsschreiben, falls Sie bei Kontakten übernachten)",
              "Kontoauszug oder ein anderer Nachweis ausreichender finanzieller Mittel für Ihren Aufenthalt",
              "Nachweis einer Reise- oder Krankenversicherung, die Ihre Reise abdeckt",
              "Bestätigung des Weiter- oder Rückflugs, falls während der Beantragung angefordert",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-charcoal/50">
            Anträge werden über Namibias offizielles Regierungsportal unter{" "}
            <span className="font-medium text-charcoal/70">eservices.mhaiss.gov.na</span> eingereicht,
            betrieben vom Ministerium für Inneres, Einwanderung, Sicherheit. Vermeiden Sie
            Drittanbieter-Websites, die für denselben Antrag einen Aufpreis verlangen.
          </p>
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
