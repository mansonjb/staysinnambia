import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia SIM-Karten & eSIM-Guide";
const DESCRIPTION =
  "Welches Netz Sie nutzen sollten, wo Sie tatsächlich Empfang haben, und wo wirklich nicht: ein praktischer Konnektivitäts-Guide für die Selbstfahrer-Route durch Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-connectivity",
    languages: { en: "/namibia-connectivity", de: "/de/namibia-connectivity", nl: "/nl/namibia-connectivity", fr: "/fr/namibia-connectivity" },
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

const COVERAGE = [
  {
    area: "Windhoek, Swakopmund, Walvis Bay",
    signal: "Gutes 4G, zuverlässig genug für Anrufe, Karten und Streaming.",
  },
  {
    area: "Etosha (Camps und Hauptstraßen)",
    signal: "Lückenhaft, aber vorhanden: Die meisten Camps (Okaukuejo, Halali, Namutoni) haben WLAN an der Rezeption, selbst dort, wo der Mobilfunkempfang auf den umliegenden Schotterpisten schwach oder gar nicht vorhanden ist.",
  },
  {
    area: "Sossusvlei, Damaraland, Spitzkoppe",
    signal: "Schwach bis nicht vorhanden über weite Strecken, besonders abseits der C-Straßen. Laden Sie Offline-Karten herunter, bevor Sie die Küste verlassen, nicht erst auf der D-Straße nach Damaraland.",
  },
  {
    area: "Skeleton Coast, abgelegenes Kaokoland (inkl. Opuwo-Abstecher)",
    signal: "Rechnen Sie über ganze Tage hinweg mit gar keinem MTC- oder TN-Mobile-Empfang: Das ist normal, kein Netzfehler, und gilt auch für eSIMs, die über dieselben Masten laufen.",
  },
];

const FAQS = [
  {
    q: "Welches Netz ist für Touristen in Namibia am besten?",
    a: "MTC ist Namibias dominierendes Mobilfunknetz und hat auf den wichtigsten Touristenrouten und in den Städten in der Regel die beste Abdeckung; Telecom Namibia (über TN Mobile) ist die Alternative. Keines der beiden Netze bietet nennenswerten Empfang in den entlegensten Wüsten- und Küstenabschnitten, darunter die Skeleton Coast, die tiefe Namib und der Großteil Kaokolands: Das liegt am Gelände und an der fehlenden Infrastruktur, nicht an der Wahl des Anbieters, und lässt sich auch durch einen Netzwechsel nicht beheben.",
  },
  {
    q: "Was kostet eine MTC-Touristen-SIM-Karte?",
    a: "MTC verkauft zwei touristenspezifische Pakete, beide direkt am Flughafenkiosk erhältlich: ein Leisure-Paket für N$349 mit 14 Tagen Laufzeit und 10,1 GB Datenvolumen plus etwas internationalem Anruf- und SMS-Guthaben, sowie ein Premium-Paket für N$659 mit 30 Tagen Laufzeit, 20,1 GB Datenvolumen und mehr Gesprächsguthaben. Eine einfache Prepaid-SIM mit separatem Datenpaket ist meist günstiger, wenn Sie selbst aufladen möchten, aber die Touristenpakete ersparen Ihnen den Aufwand am ersten Tag.",
  },
  {
    q: "Kann ich am Flughafen eine SIM-Karte kaufen?",
    a: "Ja, MTC hat einen Kiosk im Ankunftsbereich des Hosea Kutako International Airport, und das ist der einfachste Weg, um noch vor Fahrtbeginn online zu sein. Bringen Sie Ihren Reisepass mit; die lokale SIM-Registrierung erfordert in der Regel einen Ausweis, und die Touristenpakete werden direkt vor Ort eingerichtet.",
  },
  {
    q: "Funktioniert eSIM gut in Namibia, und ist sie günstiger als eine lokale SIM-Karte?",
    a: "Sie funktioniert, ist aber selten günstiger. Internationale eSIM-Anbieter leiten über dieselben MTC- oder Telecom-Namibia-Masten wie eine physische SIM-Karte, die Abdeckung ist also identisch, und Tarife starten meist bei rund 9,50 US-Dollar für eine Woche Datenvolumen. Der Haken liegt beim Preis pro Gigabyte: eSIM-Datenvolumen kostet häufig das Zwei- bis Dreifache eines MTC-Prepaid-Pakets für dieselbe Menge. Bezahlt wird hier für Komfort, schon bei der Landung online zu sein statt am Flughafenkiosk anzustehen, nicht für ein besseres Netz.",
  },
  {
    q: "Habe ich auf der gesamten Selbstfahrer-Route Empfang?",
    a: "Nein, und Sie sollten nicht damit planen. Sossusvlei, Damaraland, Spitzkoppe, die Skeleton Coast und das abgelegene Kaokoland haben alle lange Abschnitte, teils ganze Fahrtage, ganz ohne Empfang auf beiden Netzen. Laden Sie Offline-Google-Maps für Ihre Route herunter, speichern Sie Ihre Lodge-Buchungen als PDF, und behandeln Sie Konnektivität als eine Sache von Städten und Camps, nicht als etwas zwischen den Stopps.",
  },
];

export default function ConnectivityPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Konnektivität", url: `${SITE_URL}/de/namibia-connectivity` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia SIM-Karten, eSIM & Konnektivität
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Die ehrliche Version: In Städten haben Sie ordentlichen Empfang, überall sonst
          lückenhaften bis gar keinen. Planen Sie damit, statt dagegen anzukämpfen.
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
          <h2 className="text-xl font-bold text-charcoal">Bevor Sie die Küste verlassen</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Kaufen Sie eine MTC-SIM-Karte am Kiosk im Flughafen Hosea Kutako (N$349 für 14 Tage / 10,1 GB, oder N$659 für 30 Tage / 20,1 GB), oder bestätigen Sie vorab, dass Ihr eSIM-Anbieter Namibia konkret abdeckt, bevor Sie sich für Daten darauf statt auf eine physische SIM verlassen",
              (
                <>
                  Laden Sie Offline-Karten für Ihre gesamte Selbstfahrer-Route im Voraus herunter.
                  Unser{" "}
                  <Link href="/de/namibia-self-drive-guide" className="font-semibold text-rust hover:text-rust-dark">
                    Self-Drive-Guide
                  </Link>{" "}
                  deckt den Rest der Vorbereitungslogistik ab
                </>
              ),
              "Speichern Sie Lodge-Bestätigungen und Wegbeschreibungen als PDF oder Screenshot, nicht nur als E-Mail-Links",
              "Teilen Sie jemandem Ihre grobe Tagesroute mit, wenn Sie abgelegene Strecken allein fahren",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
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
          <Link
            href="/de/namibia-packing-list"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Packliste
          </Link>
        </Reveal>
      </section>
    </>
  );
}
