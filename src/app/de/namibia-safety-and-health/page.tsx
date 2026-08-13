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
    languages: { en: "/namibia-safety-and-health", de: "/de/namibia-safety-and-health", nl: "/nl/namibia-safety-and-health", fr: "/fr/namibia-safety-and-health", it: "/it/namibia-safety-and-health" },
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
    text: "Konzentriert sich auf Windhoek und, in geringerem Maße, Walvis Bay, meist nach Einbruch der Dunkelheit: Sowohl das US-Außenministerium als auch das britische FCDO nennen Taschendiebstahl, Handtaschenraub und Einbrüche in unbeaufsichtigte parkende Autos als die häufigsten Vorfälle, von denen Besucher betroffen sind. Beide stufen Namibia in ihre Kategorie „erhöhte Vorsicht” ein, dieselbe Stufe wie weite Teile Westeuropas, keine Einstufung als ernsthaftes Risiko. Vereinzelte bewaffnete Raubüberfälle und Einbrüche kommen vor, allerdings in Wohn- und Geschäftsvierteln, nicht auf touristischen Routen. Nutzen Sie den Hotelsafe, lassen Sie keine Taschen sichtbar im geparkten Auto liegen, und nehmen Sie abends in Stadtzentren lieber ein Taxi statt zu Fuß zu gehen. Außerhalb der Städte, auf Lodge- und Selbstfahrer-Routen, spielt es praktisch keine Rolle.",
  },
  {
    title: "Verkehrssicherheit",
    text: (
      <>
        Das reale Risiko für die meisten Besucher, und das mit deutlichem Abstand. Namibia hat rund
        12.000 km Schotterstraßen, und sowohl das FCDO als auch lokale Reiseveranstalter empfehlen
        unabhängig vom Tempolimit, auf Schotter unter 60 bis 80 km/h zu bleiben: Der häufigste
        ernsthafte Zwischenfall bei Selbstfahrer-Touristen ist ein Alleinunfall mit Überschlag,
        weil eine Wellblechpiste oder sandige Kurve zu schnell genommen wurde, nicht eine Kollision
        mit einem anderen Fahrzeug. Dazu kommen lange, service-freie Streckenabschnitte, Müdigkeit
        und Wildwechsel in der Dämmerung und im Morgengrauen: Die Konsequenz ist eindeutig,
        langsamer fahren, außerhalb der Städte nicht nach Einbruch der Dunkelheit fahren, und ein
        Ersatzrad sowie zusätzliches Wasser mitführen. Details dazu in unserem{" "}
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
    text: "Von Alleinreisenden, einschließlich alleinreisenden Frauen, vielfach als angenehm beschrieben, besonders auf organisierten Routen und in Lodges. Gewaltkriminalität gegen Touristen ist selten genug, dass sowohl die US- als auch die britischen Reisehinweise sie als Ausnahme behandeln, nicht als Muster. In Windhoek und Walvis Bay gelten nach Einbruch der Dunkelheit die üblichen Vorsichtsmaßnahmen, wie überall.",
  },
  {
    title: "Begegnungen mit Wildtieren",
    text: (
      <>
        Real, aber mit Anleitung durch Guides gut zu handhaben: in Wildgebieten im Fahrzeug
        bleiben, sofern nichts anderes gesagt wird, sich Tieren an Wasserlöchern in Lodge-Nähe nie
        nähern, und den Hinweisen des Camp-Personals zum Laufen nach Einbruch der Dunkelheit
        folgen, wo bekanntermaßen Elefanten oder Hyänen durchziehen. Ein Detail, das man kennen
        sollte: In Namibias Kaprobben-Kolonien, darunter Cape Cross, wurden dokumentierte
        Tollwutfälle bei den Robben festgestellt. Halten Sie also Abstand, und behandeln Sie jeden
        Biss oder Kratzer, so leicht er auch scheint, als Notfall, der sofortige medizinische
        Behandlung erfordert, unabhängig von einer vorherigen Impfung. Was Sie Region für Region
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
  {
    title: "Medizinische Versorgung & Evakuierung",
    text: "Lodges in der Namib, in Kaokoland oder in der Sambesi-Region können Stunden per Straße oder einen Kleinflugzeugflug vom nächsten traumaversorgenden Krankenhaus entfernt liegen, das ist also keine optionale Planung. Medical Rescue Africa (MRA) ist Namibias eigener Anbieter für Luftrettung und Krankenwagen, und viele Lodges und Veranstalter arbeiten bereits mit ihnen zusammen, aber die Rechnung übernimmt trotzdem Ihre Reiseversicherung. Wenn Sie von einer Ostafrika-Reise bereits eine AMREF-Flying-Doctors-Mitgliedschaft besitzen, beachten Sie: Diese deckt Namibia, Botswana oder Südafrika nicht ab. Bestätigen Sie vor dem Abflug ausdrücklich, dass Ihre Police eine im südlichen Afrika gültige medizinische Evakuierung einschließt.",
  },
];

const FAQS = [
  {
    q: "Ist Namibia sicher zu bereisen?",
    a: "Ja. Sowohl das US-Außenministerium als auch das britische FCDO stufen Namibia in ihre Kategorie „erhöhte Vorsicht” ein, dieselbe Stufe wie weite Teile Westeuropas, keine Einstufung als ernsthaftes Risiko. Die realen Risiken sind Verkehrssicherheit (lange Distanzen, Schotter, Alleinunfälle mit Überschlag und Wildwechsel in der Dämmerung) und gewöhnliche städtische Kleinkriminalität in Windhoek und Walvis Bay, nicht Gewaltkriminalität gegen Reisende.",
  },
  {
    q: "Brauche ich Malariatabletten für Namibia?",
    a: "Das hängt davon ab, wohin und wann Sie reisen. Die CDC führt Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa und Zambezi als Malaria-Risikogebiete, grob das nördliche Drittel des Landes einschließlich des nördlichen Etosha und der Sambesi-Region (Caprivi), mit dem höchsten Risiko in der Regenzeit (etwa November bis April). In Windhoek gibt es keine Malariaübertragung, und das Risiko ist in Sossusvlei, Swakopmund und im Großteil von Zentral- und Südnamibia ganzjährig gering. Namibia verzeichnete Anfang 2026 zudem einen deutlichen Anstieg der Fälle, konzentriert auf die Sambesi- und Kavango-Regionen. Prüfen Sie daher die aktuelle Lage bei einem Reisearzt zusammen mit Ihrer konkreten Route und Ihren Reisedaten. Das sind allgemeine Informationen, keine medizinische Beratung.",
  },
  {
    q: "Ist Namibia sicher für alleinreisende Frauen?",
    a: "Wird häufig als angenehm beschrieben, besonders bei Lodge-basierten oder organisierten Selbstfahrer-Reisen. Dieselben Reisehinweise, die Namibias Kleinkriminalität ansprechen, heben kein erhöhtes Risiko für alleinreisende Frauen hervor. In Windhoek und Walvis Bay gelten nach Einbruch der Dunkelheit die üblichen städtischen Vorsichtsmaßnahmen, wie in jeder Stadt.",
  },
  {
    q: "Welche Impfungen brauche ich für Namibia?",
    a: "Es gibt keine universelle Liste, aber die CDC empfiehlt für die meisten Namibia-Reisenden standardmäßig Hepatitis A, Hepatitis B und Typhus, zusätzlich zu den Routineimpfungen (MMR, Polio und so weiter). Eine Tollwut-Präexpositionsimpfung ist eine Überlegung wert, wenn Sie Rad fahren, Höhlen erkunden oder mit Tieren in Kontakt kommen, und ist besonders relevant angesichts dokumentierter Tollwutfälle in Namibias Kaprobben-Kolonien. Eine Gelbfieberimpfung ist für Direktreisen aus Europa oder Nordamerika nicht vorgeschrieben, ein Nachweis kann aber verlangt werden, wenn Sie aus einem Land mit Gelbfieberrisiko einreisen. Erkundigen Sie sich vier bis sechs Wochen vor der Abreise bei einer reisemedizinischen Stelle: Reiseroute und persönliche Krankengeschichte verändern die Antwort. Das sind allgemeine Informationen, keine medizinische Beratung.",
  },
  {
    q: "Wie sieht es mit einer Versicherung für medizinische Evakuierung aus?",
    a: "Nehmen Sie das ernst, angesichts dessen, wie abgelegen manche Lodges liegen. Namibia hat mit Medical Rescue Africa (MRA) einen eigenen Anbieter für Luftrettung, mit dem viele Lodges und Veranstalter bereits zusammenarbeiten, aber Sie brauchen trotzdem eine Reiseversicherung, die medizinische Evakuierung innerhalb Namibias ausdrücklich abdeckt. Wenn Sie diese Reise mit Ostafrika kombinieren und bereits eine AMREF-Flying-Doctors-Mitgliedschaft besitzen: Diese gilt nicht für Namibia, Botswana oder Südafrika. Bestätigen Sie die Deckung vor der Abreise, nicht danach.",
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
              "CDC- und WHO-gelistete Risikogebiete: Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa und Zambezi, also der nördliche Landesstreifen einschließlich des nördlichen Etosha und des Sambesi-Zipfels (Caprivi)",
              "Keine Malariaübertragung in Windhoek, und geringes oder seltenes Risiko in Sossusvlei, Fish River Canyon, an der Skeleton Coast und im Großteil von Zentral- und Südnamibia",
              "Das Risiko ist in der Regenzeit (Nov–Apr) am höchsten; Abschnitte entlang des Kunene, des Sambesi und des Okavango tragen ganzjährig ein gewisses Risiko",
              "Namibias Gesundheitsministerium verzeichnete Anfang 2026 einen deutlichen Anstieg der Fälle, konzentriert auf Zambezi, Kavango East und Kavango West, was eine WHO-unterstützte Reaktion auslöste: Wenn Ihre Route diese Regionen berührt, ist Prophylaxe nicht optional, sondern Pflicht",
              "Die Wahl der Prophylaxe (üblicherweise Atovaquon-Proguanil, Doxycyclin oder Mefloquin) hängt von Ihrer Reiseroute, den Reisedaten und Ihrer Krankengeschichte ab: Das sollte ein Reisearzt bestätigen, kein allgemeiner Guide",
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
