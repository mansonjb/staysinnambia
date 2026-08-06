import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië zelfrijgids";
const DESCRIPTION =
  "Wat zelf rijden in Namibië in de praktijk inhoudt: wegtypes, planning van tankstops, addertjes onder het gras bij huurautoverzekeringen, en waarom nooit 's nachts rijden de regel is die iedereen herhaalt.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-self-drive-guide",
    languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
  { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste tijd om Namibië te bezoeken", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Hoeveel kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const ROAD_TYPES = [
  { code: "A-/B-wegen", desc: "Geasfalteerde hoofdroutes tussen grote steden, normaal rijden." },
  {
    code: "C-wegen",
    desc: "Gegradeerde grindwegen, over het algemeen goed onderhouden. De ruggengraat van de meeste zelfrijroutes.",
  },
  {
    code: "D-wegen",
    desc: "Kleinere grindwegen, smaller en ruwer. Rem af bij wasbordpatronen en losse zandvlakken.",
  },
  {
    code: "F-wegen",
    desc: "4x4-tracks, vaak ruw of seizoensgebonden onbegaanbaar. Niet geschikt voor een gewone huursedan.",
  },
];

const RULES = [
  "Rijd nooit na donker buiten steden en dorpen: vee, wild en onverlichte voetgangers op de weg zijn de belangrijkste oorzaak van ernstige ongevallen.",
  "In het noordwesten en zuiden liggen tankstations ver uit elkaar. Tank altijd bij als u onder een halve tank zit, en neem extra water mee voor het geval van pech.",
  "Band- en voorruitschade op grindwegen is de meest voorkomende schadeclaim bij huurauto's: controleer precies wat uw eigen risico dekt voordat u tekent.",
  "De wettelijke alcohollimiet is 0,05%, op sommige routes gehandhaafd met controles langs de weg.",
  "Rem af in grindbochten en op losse zandvlakken: de meeste zelfrijongevallen zijn omslagen van één voertuig door te hard remmen of overcorrigeren op snelheid.",
];

const FAQS = [
  {
    q: "Heb ik een 4x4 nodig om zelf door Namibië te rijden?",
    a: "Voor de meeste klassieke routes niet. Etosha, Sossusvlei, Swakopmund en het C-wegennetwerk zijn goed te doen met een goed uitgeruste 2x4 met hoge bodemvrijheid. Een 4x4 wordt de moeite waard voor Damaraland, het Kaokoland, en overal waar u op D- of F-wegen terechtkomt. Bekijk onze aparte gids over reizen zonder 4x4 voor de specifieke routes die dat mogelijk maken.",
  },
  {
    q: "Zelf rijden of begeleide safari: wat is beter voor een eerste reis?",
    a: "Zelf rijden geeft u volledige controle over tempo en kosten, en Namibië's wegennetwerk maakt het toegankelijker dan de meeste andere safarilanden. Een begeleide reis ruilt die vrijheid in voor lokale kennis, geen logistiek om te regelen, en betere wildlifewaarnemingen tijdens gamedrives. Veel mensen die voor het eerst gaan, kiezen een hybride: zelf rijden tussen regio's, begeleide gamedrives binnen de parken.",
  },
  {
    q: "Hoe ver liggen tankstations in Namibië uit elkaar?",
    a: "Op de hoofdroutes elke 100-200 km. Op afgelegen trajecten (de Skeleton Coast, delen van het Kaokoland, de weg naar Fish River Canyon) kunnen de afstanden oplopen tot meer dan 250 km zonder enige voorziening. Plan tankstops voordat u elke stad verlaat, niet pas als de meter laag staat.",
  },
  {
    q: "Wat dekt de huurautoverzekering eigenlijk op grindwegen?",
    a: "Standaard cascodekking sluit voorruitschade en bandenschade door grind vaak uit of belast deze zwaar met eigen risico, terwijl dit de twee meest voorkomende schadeclaims in Namibië zijn. Vraag specifiek naar het eigen risico voor grindwegen en overweeg een nul-eigen-risico-optie als die wordt aangeboden.",
  },
];

export default function SelfDriveGuidePageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Zelfrijgids", url: `${SITE_URL}/nl/namibia-self-drive-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië zelfrijgids
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Zelf rijden is hoe de meeste onafhankelijke reizigers Namibië ontdekken. Het
          wegennetwerk is echt goed, maar de afstanden, het wegdek en het kleine lettertje van
          huurautoverzekeringen verrassen mensen vaak. Dit is waar u werkelijk rekening mee moet
          houden, inclusief hoeveel het bespaart ten opzichte van een{" "}
          <Link href="/nl/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            begeleide reis
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Wegtypes ontcijferd</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROAD_TYPES.map((r, i) => (
            <Reveal
              key={r.code}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {r.code}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">
            Regels die ervaren zelfrijders blijven herhalen
          </h2>
          <ul className="mt-5 space-y-3">
            {RULES.map((item) => (
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
            Veelgestelde vragen
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
          <Link
            href="/nl/namibia-without-4x4"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibië zonder 4x4
          </Link>
        </Reveal>
      </section>
    </>
  );
}
