import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Himba-Gemeinschaften besuchen";
const DESCRIPTION =
  "Wer die Himba sind, wo sie leben, und wie man sie respektvoll besucht: der eigentliche Unterschied zwischen einem inszenierten Stopp am 'lebenden Museum' und gemeinschaftlich geführtem Tourismus.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/himba-culture-namibia",
    languages: { en: "/himba-culture-namibia", de: "/de/himba-culture-namibia", nl: "/nl/himba-culture-namibia", fr: "/fr/himba-culture-namibia", it: "/it/himba-culture-namibia" },
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

const PRINCIPLES = [
  {
    title: "Vor dem Fotografieren fragen",
    text: "Fragen Sie immer eine Person direkt, bevor Sie sie fotografieren, auch an einem Ort, an dem Fotografieren grundsätzlich erlaubt ist. Ein Nicken des Guides ersetzt nicht die Zustimmung der Person im Bild, und von einem Vermittler durchgewunken zu werden, ersetzt nicht das eigene Ja der Person.",
  },
  {
    title: "Verpflegung mitbringen, kein Bargeld",
    text: "Bargeld ist Tagesreisen vom nächsten Laden entfernt fast nutzlos und auch kein traditioneller Teil davon, wie die Himba Handel treiben, weshalb es sich schlecht eignet, um eine Gemeinschaft für ihre Zeit zu entschädigen. Der stärkere Standard, dem gemeinschaftlich geführte Guides in Opuwo folgen, ist, vor dem Besuch gemeinsam mit dem Guide an einem Supermarkt zu halten und Grundnahrungsmittel zu kaufen, die der Guide auswählt: Maismehl, Zucker, Speiseöl, Tee oder Kaffee. Rechnen Sie mit etwa N$500 an Lebensmitteln für zwei Besucher, mehr bei größeren Gruppen, und überlassen Sie Ihrem Guide die Einschätzung der richtigen Menge, statt zu knausern.",
  },
  {
    title: "Den Unterschied zwischen einem 'lebenden Museum' und einem echten Dorf kennen",
    text: "Manche Stopps sind inszenierte Vorführungen, die eigens für den Tourismus eingerichtet wurden, getrennt von dem Ort, an dem die Menschen tatsächlich alltäglich leben. Keines von beidem ist von Natur aus falsch, und ein lebendes Museum kann durchaus eine legitime, der Gemeinschaft gehörende Einkommensquelle sein, aber Sie sollten wissen, welches der beiden Sie besuchen, und Ihren Guide direkt danach fragen, statt es anzunehmen.",
  },
  {
    title: "Der Führung der Gemeinschaft folgen, was geteilt wird",
    text: "Heilige Feuer, bestimmte Rituale und bestimmte Bereiche eines Gehöfts sind möglicherweise nicht für Besucher gedacht, unabhängig davon, was anderswo angeboten wird. Ein respektvoller Besuch folgt den Grenzen der Gemeinschaft, nicht dem Reiseplan, und ein guter Guide sagt Ihnen vorab, was tabu ist, statt es im Moment zu improvisieren.",
  },
];

const FAQS = [
  {
    q: "Wer sind die Himba?",
    a: "Die Himba sind ein halbnomadisches Hirtenvolk, das hauptsächlich in Kaokoland lebt, in Namibias nördlicher Kunene-Region, bekannt für Viehhaltung und eine unverwechselbare optische Identität: allen voran die Otjize-Paste (eine Mischung aus Butterfett und Ocker), die viele Frauen auf Haut und Haar auftragen. Sie sind eine von Namibias kleineren ethnischen Gruppen und eine der meistfotografierten des Landes, was selbst eine echte ethische Spannung erzeugt, derer man sich vor einem Besuch bewusst sein sollte.",
  },
  {
    q: "Ist es in Ordnung, als Tourist ein Himba-Dorf zu besuchen?",
    a: "Es kann sein, wenn respektvoll und über den richtigen Weg: ein Guide mit einer echten Beziehung zur Gemeinschaft, informierte Zustimmung für jede Fotografie, und Entschädigung, die die Menschen, die Sie besuchen, in einer Form erreicht, die sie tatsächlich wollen, was in der Praxis meist bedeutet: Lebensmittel, die gemeinsam mit Ihrem Guide gekauft werden, statt Bargeld. Es lohnt sich, ehrlich zu sich selbst zu sein, ob ein bestimmter Stopp echter kultureller Austausch oder eine inszenierte Fotogelegenheit ist, und danach zu entscheiden.",
  },
  {
    q: "Was ist der Unterschied zwischen einem 'lebenden Museum' und dem Besuch eines echten Himba-Gehöfts?",
    a: "Ein lebendes Museum ist eine Vorführung, die eigens eingerichtet wurde, um Besuchern traditionelles Himba-Leben zu zeigen, oft getrennt von dem Ort, an dem dieselbe Gemeinschaft tatsächlich alltäglich lebt. Es kann trotzdem eine legitime, gemeinschaftlich geführte Einkommensquelle sein, aber es ist eine andere Erfahrung als ein organischer Besuch eines aktiven Gehöfts, und Anbieter sollten offen sagen, welches der beiden Sie buchen.",
  },
  {
    q: "Wo in Namibia kann ich Himba-Gemeinschaften besuchen, und über wen sollte ich buchen?",
    a: "Hauptsächlich in und um Kaokoland und die weitere Kunene-Region, in Namibias Nordwesten, erreichbar als Erweiterung ab Damaraland für Reisende mit den zusätzlichen Tagen und, meist, einem 4x4. Die Stadt Opuwo ist der praktische Ausgangspunkt: Hier sitzen Guide-Dienste wie das Kaoko Information Centre, geführt von Himba für Himba, wo ein Guide Sie vor dem eigentlichen Besuch zum Einkauf von Vorräten vor Ort mitnimmt. Es ist ein echter Abstecher, kein Stopp auf der klassischen Route, und braucht daher bewusste Planung statt nur eingeschoben zu werden.",
  },
  {
    q: "Was sollte ich für einen Besuch bei einer Himba-Gemeinschaft mitbringen oder kaufen?",
    a: "Praktische Grundnahrungsmittel statt Bargeld oder westliche Mitbringsel: Maismehl, Zucker, Speiseöl, Tee oder Kaffee sind die Dinge, um die die Gemeinschaften selbst bitten, da sie halbnomadisch leben und diese Güter nicht immer leicht nachzukaufen sind. Der Standard, dem gemeinschaftlich geführte Guides folgen, ist, diese unmittelbar vor dem Besuch gemeinsam an einem Supermarkt in Opuwo zu kaufen, sodass die Gemeinschaft genau sieht, was mitgebracht wird, und der Guide faire Mengen für die Gruppengröße einschätzen kann.",
  },
];

export default function HimbaCulturePageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Himba-Kultur", url: `${SITE_URL}/de/himba-culture-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Himba-Gemeinschaften in Namibia besuchen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Das ist einer der wirklich sensibleren Aspekte bei der Planung einer Namibia-Reise, und
          wir sprechen ihn lieber direkt an, als ihn wegzulassen. Hier ist, wer die Himba sind, und
          wie man sie (falls man sie besucht) mit echtem Respekt besucht.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h2 className="text-[14px] font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Unsere Empfehlung</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Nichts davon ist ein Grund, Kaokoland oder die Kunene-Region zu meiden: Es ist ein Grund,
            über Anbieter und Guides zu gehen, die echte, dauerhafte Beziehungen zu bestimmten
            Gemeinschaften pflegen, statt über einen generischen Stopp im Reiseplan. In der Praxis
            bedeutet das, sich in Opuwo niederzulassen oder darüber zu reisen und einen von Himba
            geführten Guide-Dienst wie das Kaoko Information Centre zu nutzen, statt einen
            Dorfbesuch als anonymen Zusatz über einen Reiseschalter an der Küste zu buchen. Die
            meisten Besuche werden als Erweiterung ab{" "}
            <Link
              href="/de/where-to-stay/damaraland"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              Aufenthalten in Damaraland
            </Link>
            {" "}organisiert, was mindestens einen zusätzlichen Fahrtag pro Richtung bedeutet,
            größtenteils auf Schotterpisten. Fragen Sie Ihren Guide direkt, was der Besuch
            beinhaltet, ob Sie gemeinsam vorab Vorräte kaufen und wie die Zustimmung zur
            Fotografie am Tag selbst gehandhabt wird, bevor Sie buchen, nicht erst, wenn Sie am
            Gehöft stehen.
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
          <Link
            href="/de/where-to-stay/damaraland"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Unterkünfte in Damaraland
          </Link>
        </Reveal>
      </section>
    </>
  );
}
