import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Sternenhimmel-Guide";
const DESCRIPTION =
  "Wo Namibias Nachthimmel am dunkelsten ist, und was ihn wirklich anders macht: NamibRands Gold-Dark-Sky-Reserve, Licht für Dünenfotografie, und wo Sie darunter schlafen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-stargazing-photography",
    languages: { en: "/namibia-stargazing-photography", de: "/de/namibia-stargazing-photography", nl: "/nl/namibia-stargazing-photography" },
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

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/de/where-to-stay/sossusvlei",
    text: (
      <>
        Namibias führendes Dark-Sky-Ziel, ein International Dark Sky Reserve mit Gold-Status,
        eine von nur einer Handvoll Reservate weltweit mit dieser Einstufung. Über hundert
        Kilometer in den meisten Richtungen tatsächlich keine Lichtverschmutzung. Lodges am Rand
        des Reservats bieten geführte Astronomie-Abende mit echten Teleskopen an, nicht nur eine
        Decke im Sand. Am besten in der Trockenzeit (Mai bis Oktober) für den klarsten Himmel. Siehe
        unseren{" "}
        <Link href="/de/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          Guide zur besten Reisezeit
        </Link>
        .
      </>
    ),
  },
  {
    place: "Sossusvlei-Dünen",
    href: "/de/where-to-stay/sossusvlei",
    text: "Dieselbe klare Wüstenluft, die den Nachthimmel so besonders macht, macht auch die Sonnenaufgangsfotografie hier zu einer der besten in ganz Afrika: Das 20 bis 45 Minuten lange Fenster nach Toröffnung zeigt die dramatischste Dünenfärbung, bevor der Hitzedunst einsetzt.",
  },
  {
    place: "Spitzkoppe",
    href: "/de/where-to-stay/spitzkoppe",
    text: "Granitdome, die direkt aus flachen Ebenen aufragen, ergeben einen markanten Vordergrund vor der Milchstraße, und es ist einer der wenigen Dark-Sky-Orte auf der Route mit dramatischen Felssilhouetten statt flachem Horizont.",
  },
];

const FAQS = [
  {
    q: "Was macht NamibRands Nachthimmel anders als andere dunkle Orte?",
    a: "NamibRand trägt den Gold-Status als International Dark Sky Reserve, die höchste vergebene Einstufung, die nur einer kleinen Zahl von Orten weltweit zuerkannt wird. Sie spiegelt sowohl die nahezu vollständige Abwesenheit von Lichtverschmutzung als auch aktive, laufende Maßnahmen von Reservat- und Lodge-Betreibern wider, das so zu erhalten.",
  },
  {
    q: "Brauche ich spezielle Ausrüstung für Astrofotografie in Namibia?",
    a: "Ein Stativ und eine Kamera mit manueller Langzeitbelichtung bringen Sie schon sehr weit; ein Weitwinkelobjektiv hilft bei Milchstraßenaufnahmen. Mehrere Lodges nahe NamibRand und Sossusvlei bieten geführte Astronomie-Abende mit echten Teleskopen, wenn Sie mehr wollen als eine Weitaufnahme des Himmels.",
  },
  {
    q: "Wann ist die beste Jahreszeit für Sternenbeobachtung in Namibia?",
    a: "Die Trockenzeit (Mai bis Oktober) bringt die klarste, trockenste Luft und die geringste Wolkenbedeckung. Dieselben Bedingungen, die sie zur besten Zeit für Tierbeobachtungen machen, machen sie auch zur besten Zeit für Sternenbeobachtung. Eine mondlose Nacht nahe einem Neumond ergibt den dunkelsten möglichen Himmel, eine Überlegung wert, wenn Ihnen das wichtig ist.",
  },
  {
    q: "Ist Sossusvlei oder Spitzkoppe besser für Fotografie?",
    a: "Unterschiedliche Motive, keine Entweder-oder-Frage. Sossusvlei steht für Dünenfarbe und Weite bei Sonnenaufgang; Spitzkoppe für dramatische Granitsilhouetten bei Sonnenuntergang und nach Einbruch der Dunkelheit. Mehrere Reiserouten kombinieren beide als einen Ein-Nacht-Abstecher zwischen den beiden.",
  },
];

export default function StargazingPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Sternenhimmel & Fotografie", url: `${SITE_URL}/de/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Sternenhimmel & Astrofotografie in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibias trockene Luft und die nahezu vollständige Abwesenheit von Lichtverschmutzung
          machen es zu einem der wenigen echten Dark-Sky-Ziele der Welt, nicht nur zu einem
          Werbeversprechen. Hier ist, wo es wirklich am besten ist, und warum.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SPOTS.map((s, i) => (
            <Reveal
              key={s.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.place}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Unterkünfte →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
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
