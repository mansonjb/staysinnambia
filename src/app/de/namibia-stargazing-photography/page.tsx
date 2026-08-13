import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
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
    languages: { en: "/namibia-stargazing-photography", de: "/de/namibia-stargazing-photography", nl: "/nl/namibia-stargazing-photography", fr: "/fr/namibia-stargazing-photography", it: "/it/namibia-stargazing-photography" },
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
        Namibias führendes Dark-Sky-Ziel. NamibRand wurde 2012 als Gold-Tier International Dark
        Sky Reserve ausgezeichnet, die strengste der drei Stufen, und war damals erst das zweite
        Gold-Tier-Reservat weltweit. Sky-Quality-Meter-Messungen im Reservat liegen regelmäßig
        über 21,0 Magnituden pro Quadratbogensekunde, nahe der theoretischen Dunkelheitsgrenze von
        etwa 22, und entsprechen Bortle-Klasse 1 bis 2, der dunkelsten Einstufung, die Astronomen
        verwenden. In einer klaren, mondlosen Nacht lassen sich die Staubbänder der Milchstraße mit
        bloßem Auge erkennen, dazu die Magellanschen Wolken und gelegentlich Zodiakallicht, ein
        schwacher Lichtkegel von Sonnenlicht, das an interplanetarem Staub reflektiert wird und
        praktisch nirgendwo mit künstlichem Licht in der Nähe sichtbar ist. Mehrere Lodges am Rand
        des Reservats, darunter Wolwedans und NamibRand Family Hideout, bieten geführte
        Astronomie-Abende mit echten Teleskopen an, nicht nur eine Decke im Sand. Am besten in der
        Trockenzeit (Mai bis September), wenn der Himmel am trockensten und die Wolkendecke am
        geringsten ist. Siehe unseren{" "}
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
    text: "Dieselbe klare Wüstenluft, die den Nachthimmel so besonders macht, macht auch die Sonnenaufgangsfotografie hier zu einer der besten in ganz Afrika: Das 20 bis 45 Minuten lange Fenster nach Toröffnung zeigt die dramatischste Dünenfärbung, bevor der Hitzedunst einsetzt. Für Astrofotografie liefern die Dünen selbst einen eindrucksvollen Vordergrund für die Milchstraße: Gehen Sie ein Stück von den Lichtern des Camps weg und lassen Sie Ihre Augen mindestens 15 bis 20 Minuten an die Dunkelheit gewöhnen, bevor Sie fotografieren.",
  },
  {
    place: "Spitzkoppe",
    href: "/de/where-to-stay/spitzkoppe",
    text: "Eine Gruppe von Granit-Inselbergen, die bis zu 1.728 m aufragen, mit einer Schartenhöhe von rund 670 m über der umliegenden Kiesebene, etwa 180 km von Swakopmund und 280 km von Windhoek entfernt. Ihre Silhouette vor der Milchstraße gehört zu den meistfotografierten Motiven Namibias, und anders als NamibRand ist es ein einfacher Self-Drive-Stopp statt einer Reservatsbuchung. Der von der Gemeinde betriebene Campingplatz bietet rund 30 einfache, weit auseinanderliegende Stellplätze direkt zwischen den Felsen, sodass Sie ganz ohne Lichtverschmutzung direkt vom eigenen Zeltplatz aus fotografieren können; buchen Sie in der Hochsaison von Juli bis September einige Monate im Voraus.",
  },
];

const GEAR_TIPS = [
  "Planen Sie um Neumond herum: Ein mondloser Himmel ist um ein Vielfaches dunkler als selbst bei zunehmendem Halbmond, und das ist der größte Einzelfaktor dafür, wie viel von der Milchstraße Sie tatsächlich sehen. Prüfen Sie den Mondkalender, bevor Sie Termine festlegen, wenn Sternenbeobachtung eine Priorität der Reise ist.",
  "Ein Stativ ist unverzichtbar; ein Weitwinkelobjektiv (14 bis 24 mm bei Vollformat) lässt Sie mehr Himmel und Vordergrund in einer Aufnahme einfangen.",
  "Als Ausgangspunkt: die größtmögliche Blende Ihres Objektivs (f/2.8 oder schneller, falls vorhanden), ISO 1600 bis 6400 und eine Verschlusszeit unter etwa 500 geteilt durch die Brennweite in mm, damit Sterne als Punkte statt als Striche erscheinen (zum Beispiel etwa 20 Sekunden bei 24 mm).",
  "Nehmen Sie eine Stirnlampe mit Rotlichtmodus mit, um die Nachtsicht zu schonen, sowie einen Fernauslöser oder den Selbstauslöser Ihrer Kamera, um Verwacklungen durch das Drücken des Auslösers zu vermeiden.",
  "Kommen Sie an Ihrem Standort an, solange noch etwas Licht vorhanden ist, um die Aufnahme zu komponieren und das Objektiv auf Beschlag zu prüfen, der sich schnell bildet, sobald die Wüstentemperaturen nach Sonnenuntergang fallen.",
];

const FAQS = [
  {
    q: "Was macht NamibRands Nachthimmel anders als andere dunkle Orte?",
    a: "NamibRand trägt seit 2012 den Gold-Status als International Dark Sky Reserve, die höchste der drei von DarkSky International vergebenen Stufen, und war damals erst das zweite Gold-Tier-Reservat weltweit. Sky-Quality-Meter-Messungen im Reservat liegen regelmäßig über 21 Magnituden pro Quadratbogensekunde, gegenüber einem theoretischen Maximum von etwa 22, was Bortle-Klasse 1 bis 2 entspricht, der dunkelsten Einstufung, die Astronomen verwenden. Das spiegelt sowohl die nahezu vollständige Abwesenheit von künstlichem Licht als auch aktive, laufende Maßnahmen des Reservats und der angrenzenden Lodges wider, darunter abgeschirmte, nach unten gerichtete Beleuchtung, um das so zu erhalten.",
  },
  {
    q: "Brauche ich spezielle Ausrüstung für Astrofotografie in Namibia?",
    a: "Ein Stativ und eine Kamera mit manueller Langzeitbelichtung bringen Sie schon sehr weit; ein Weitwinkelobjektiv (14 bis 24 mm entsprechend) hilft bei Milchstraßenaufnahmen, dazu eine lichtstarke Blende (f/2.8 oder offener) und eine Stirnlampe mit Rotlichtmodus, um Ihre Nachtsicht zu schonen. Mehrere Lodges nahe NamibRand und Sossusvlei, darunter Wolwedans und NamibRand Family Hideout, bieten geführte Astronomie-Abende mit echten Teleskopen an, wenn Sie mehr wollen als eine Weitaufnahme des Himmels.",
  },
  {
    q: "Wann ist die beste Jahreszeit für Sternenbeobachtung in Namibia?",
    a: "Die Trockenzeit (Mai bis September) bringt die klarste, trockenste Luft und die geringste Wolkenbedeckung, weshalb sie sich auch mit der besten Zeit für Tierbeobachtungen überschneidet. Innerhalb dieses Zeitraums lohnt sich ein Blick auf den Mondkalender: Eine Nacht nahe Neumond ergibt den dunkelsten möglichen Himmel, während einige Nächte um Vollmond herum alle außer den hellsten Sternen auswaschen, weshalb es sich lohnt, die Mondphase zu prüfen, bevor Sie Reisetermine festlegen, wenn Ihnen Sternenbeobachtung wichtig ist.",
  },
  {
    q: "Ist Sossusvlei oder Spitzkoppe besser für Fotografie?",
    a: "Unterschiedliche Motive, keine Entweder-oder-Frage. Sossusvlei steht für Dünenfarbe und Weite bei Sonnenaufgang; Spitzkoppe, eine Gruppe von Granit-Inselbergen rund 180 km von Swakopmund entfernt, die bis zu 1.728 m aufragen, steht für dramatische Felssilhouetten vor der Milchstraße nach Einbruch der Dunkelheit, mit einem von der Gemeinde betriebenen Campingplatz, der Sie direkt zwischen die Felsen bringt. Mehrere Reiserouten kombinieren beide als einen Ein-Nacht-Abstecher zwischen den beiden.",
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
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Unsere Empfehlung:</span> Wenn
          Sternenbeobachtung für Sie eine echte Priorität der Reise ist und nicht nur ein netter
          Bonus, planen Sie Ihre Termine zuerst um die Mondphase und erst danach um die
          Jahreszeit. Eine Nacht in der Trockenzeit (Mai bis September) nahe Neumond in NamibRand
          schlägt eine Vollmondnacht in jedem Monat.
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

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Timing und Ausrüstung in der Praxis</h2>
          <ul className="mt-5 space-y-3">
            {GEAR_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {tip}
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
