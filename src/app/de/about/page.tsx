import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Über Namibia Stays";
const DESCRIPTION =
  "Wie Namibia Stays aufgebaut ist: wie wir Lodges auswählen, warum es keine Preise oder Sternebewertungen gibt, und wie wir Fakten aktuell halten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/de/about", languages: { en: "/about", de: "/de/about", nl: "/nl/about" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function AboutPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Über uns", url: `${SITE_URL}/de/about` },
        ])}
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Über uns
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Wie Namibia Stays aufgebaut ist
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Wir sind kein Reisebüro und haben nicht persönlich in jeder Lodge auf dieser Seite
          übernachtet. Hier ist genau, was wir stattdessen tun, damit Sie wissen, was Sie lesen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Wie wir auswählen, was wir aufnehmen</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Jede Lodge und Region auf Namibia Stays wird anhand echter, öffentlicher Quellen
              recherchiert: Betreiber- und Lodge-Websites, nationale und regionale
              Tourismusbehörden, etablierte Reiseführer und unabhängige Reiseberichterstattung. Wir
              fassen diese Informationen zusammen und prüfen sie gegeneinander, um zu entscheiden,
              was wirklich erwähnenswert ist, statt eine Erlebnisbewertung eines eigenen
              Aufenthalts zu veröffentlichen.
            </p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Warum es keine Preise oder Sternebewertungen gibt</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Preise ändern sich ständig, und wir können Gästebewertungen für Unterkünfte, in
              denen wir selbst nicht übernachtet haben, nicht unabhängig verifizieren, deshalb
              veröffentlichen wir keine von beiden. Wo Echtzeit-Verfügbarkeit und -Preise
              existieren, verlinken wir zu unserem Buchungspartner Stay22, statt eine Zahl auf
              dieser Seite zu zeigen, die beim Lesen bereits veraltet sein könnte. Die
              €&ndash;€€€€-Markierungen auf den Lodge-Karten zeigen eine allgemeine Preiskategorie
              basierend auf der Positionierung des Betreibers, keinen aktuellen Tarif: Den
              tatsächlichen Preis erfahren Sie bei der Lodge oder bei Stay22.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Keine bezahlte Platzierung</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Wir erhalten eine Provision, wenn Sie über einen Link auf dieser Seite eine
              Unterkunft buchen. Das beeinflusst nie, welche Lodges wir vorstellen oder wie wir sie
              beschreiben. Nichts hier ist enthalten, weil eine Unterkunft dafür bezahlt hat.
            </p>
          </Reveal>
          <Reveal delay={180} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Fakten aktuell halten</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Regeln, die Reisen nach Namibia betreffen, ändern sich: Parkgebühren,
              Einreisebestimmungen, Straßenzugang, Wandergenehmigungen. Wenn wir eine Seite wegen
              einer echten Änderung aktualisieren, sagen wir das auf der Seite selbst, mit Datum.
              Wir markieren lieber etwas als zeitkritisch, als es still veralten zu lassen.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <div className="flex items-start gap-3">
            <MetaIcon name="check" className="mt-1 h-5 w-5 shrink-0 text-olive" />
            <p className="text-[14px] leading-relaxed text-charcoal/70">
              Etwas Veraltetes entdeckt, oder eine Lodge, die geschlossen hat oder den Besitzer
              gewechselt hat? Wir würden es gerne wissen. Sehen Sie sich{" "}
              <Link href="/de/best-lodges-in-namibia" className="font-semibold text-rust hover:text-rust-dark">
                die besten Lodges in Namibia
              </Link>{" "}
              an oder beginnen Sie mit{" "}
              <Link href="/de/where-to-stay/namibia" className="font-semibold text-rust hover:text-rust-dark">
                Unterkünfte in Namibia
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
