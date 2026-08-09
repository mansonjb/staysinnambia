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
    languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide", fr: "/fr/namibia-self-drive-guide" },
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
  {
    code: "A-/B-wegen",
    desc: "Geasfalteerde hoofdroutes tussen grote steden (Windhoek–Okahandja, Windhoek–Swakopmund via de B2). Normaal rijden, maar let toch op koedoes en vee bij zonsopgang, schemer en 's nachts.",
  },
  {
    code: "C-wegen",
    desc: "Gegradeerde grindwegen, over het algemeen goed onderhouden en de ruggengraat van de meeste zelfrijroutes (de C28 Windhoek–Solitaire, de C39/C40 door Damaraland). Beperk uw snelheid tot 80 km/u en ga verder omlaag zodra het wegdek los aanvoelt of u een bocht nadert; laat de bandenspanning ongeveer 10 tot 20% zakken ten opzichte van asfaltdruk voor een soepelere rit en meer grip op wasbordpatroon.",
  },
  {
    code: "D-wegen",
    desc: "Kleinere grindwegen, smaller en ruwer (Kamanjab–Palmwag, Sesfontein–Purros). Het wasbordpatroon is hier erger en losse zandvlakken duiken onaangekondigd op. Houd een constante snelheid aan door wasbordgedeeltes in plaats van middenin te remmen, en rem vóór een bocht, niet erin.",
  },
  {
    code: "F-wegen",
    desc: "4x4-tracks, vaak ruw, zanderig of seizoensgebonden onbegaanbaar (het gebied rond Van Zyl's Pass, diep Kaokoland). Niet geschikt voor een gewone huursedan of een 2x4, en het best alleen te rijden met een tweede voertuig of een gids die de route kent.",
  },
];

const TYRE_PRESSURE = [
  { surface: "Asfalt / A-B-wegen", psi: "Fabrieksspecificatie (doorgaans ~32-36 psi)", note: "Pomp de banden hierop terug voordat u weer op asfalt rijdt; banden met lage druk oververhitten snel bij hoge snelheid." },
  { surface: "Gegradeerd grind (C-wegen)", psi: "Laat ~10-20% zakken t.o.v. asfaltdruk", note: "Verbetert de rit en het contactvlak op wasbordpatroon zonder overmatige flex in de zijwand." },
  { surface: "Ruw grind / D-wegen", psi: "Laat verder zakken, richting 25-28 psi", note: "Let op een sponzig gevoel; dat is de prijs voor minder stuiteren op wasbordpatroon." },
  { surface: "Diep zand (Kaokoland, duinsporen)", psi: "Zo laag als 1,8 bar (~26 psi), sommigen gaan nog lager", note: "Laat de druk zakken voordat u vastzit, niet erna. Neem een compressor mee om achteraf weer op te pompen." },
];

const RENTAL_COMPANIES = [
  {
    name: "Voor een eenvoudige 2x4",
    text: "Een goed uitgeruste 2x4 met echte bodemvrijheid (Toyota Corolla Cross, VW Polo Sedan, Hyundai Creta-klasse) van een in Windhoek gevestigde verhuurder kost ongeveer N$900-1.400 per dag en dekt ruim Etosha, Sossusvlei, Swakopmund en het belangrijkste C-wegennetwerk. Bekijk onze gids over reizen zonder 4x4 voor precies welke routes daarbinnen blijven.",
  },
  {
    name: "Voor een volledig uitgeruste 4x4-safariauto",
    text: "Bushlore en Asco Car Hire zijn de twee specialisten die de meeste zelfrijders uiteindelijk met elkaar vergelijken, beide standaard uitgerust met dakentent, kampeeruitrusting, gps en bergingsmateriaal. Reken op ongeveer N$2.500-4.000 per dag, afhankelijk van het seizoen, voor een uitgeruste 4x4 in de Hilux-klasse. Britz is vanuit Windhoek ook actief in Namibië, met een groter wagenpark als u een breder aanbod wilt.",
  },
  {
    name: "Over eigen risico en borgsommen: lees dit voor u tekent",
    text: "Het standaard eigen risico bij aanrijdingsschade op een 4x4 ligt doorgaans rond N$30.000-40.000, waarbij banden, voorruit, onderstel en enkelvoudige omslagen vaak apart, en hoger, worden uitgesloten. Verhuurders verkopen niveaus met verlaagd eigen risico als dagelijkse toeslag (meestal €8-25 per dag), waarmee het eigen risico terugvalt naar N$5.000-20.000; een kleine overdrachtsborg (bij sommige verhuurders rond N$5.000) is ook gebruikelijk voor boetes of uitgesloten schade. Vraag specifiek naar de uitsluitingen voor grindwegen en enkelvoudige ongevallen voordat u beslist welk niveau u koopt.",
  },
];

const RULES = [
  "Rijd nooit na donker buiten steden en dorpen: vee, koedoes en ander wild schieten vaak de weg over zodra ze door koplampen worden verlicht, en de meeste verhuurbedrijven sluiten nachtelijk rijden expliciet uit van hun verzekeringsdekking. Dit is niet voor niets de meest herhaalde regel.",
  "In het noordwesten en zuiden liggen tankstations al snel ver uit elkaar. Solitaire is het enige tankstation tussen Sesriem en de kust, een traject van ongeveer 340 km. Kamanjab en Khorixas vormen de start en het einde van het tankvrije traject door Damaraland richting Palmwag en Sesfontein. Tank bij zodra u onder een halve tank zit op een van deze trajecten, niet pas als de meter laag staat, en neem extra drinkwater mee voor het geval van pech.",
  "Band- en voorruitschade door grindwegen is de meest voorkomende schadeclaim bij huurauto's in Namibië. Lees het bedrag van het eigen risico in uw contract, niet alleen het dagtarief: het standaard eigen risico ligt tussen N$20.000-40.000, afhankelijk van de verhuurder, en toeslagen voor een verlaagd eigen risico kosten doorgaans €8-25 extra per dag.",
  "De wettelijke alcohollimiet is 0,05%, op sommige routes gehandhaafd met controles langs de weg.",
  "Rem af in grindbochten en op los zand: de meeste zelfrijongevallen in Namibië zijn enkelvoudige omslagen door te hard remmen of overcorrigeren op snelheid, niet botsingen met ander verkeer. Rem in een rechte lijn vóór de bocht, en neem gas terug terwijl u erdoorheen rijdt.",
];

const FAQS = [
  {
    q: "Heb ik een 4x4 nodig om zelf door Namibië te rijden?",
    a: "Voor de meeste klassieke routes niet. Etosha, Sossusvlei, Swakopmund en het C-wegennetwerk zijn goed te doen met een goed uitgeruste 2x4 met hoge bodemvrijheid, voor ongeveer N$900-1.400 per dag. Een 4x4 wordt de moeite waard voor de D-wegen van Damaraland, Kaokoland, en overal waar u op D- of F-wegen terechtkomt, en kost doorgaans N$2.500-4.000 per dag, volledig uitgerust met kampeermateriaal, bij een specialist zoals Bushlore of Asco Car Hire. Bekijk onze aparte gids over reizen zonder 4x4 voor de specifieke routes die dat mogelijk maken.",
  },
  {
    q: "Zelf rijden of begeleide safari: wat is beter voor een eerste reis?",
    a: "Zelf rijden geeft u volledige controle over tempo en kosten, en Namibië's wegennetwerk maakt het toegankelijker dan de meeste andere safarilanden. Een begeleide reis ruilt die vrijheid in voor lokale kennis, geen logistiek om te regelen, en betere wildlifewaarnemingen tijdens gamedrives. Veel mensen die voor het eerst gaan, kiezen een hybride: zelf rijden tussen regio's, begeleide gamedrives binnen de parken.",
  },
  {
    q: "Hoe ver liggen tankstations in Namibië uit elkaar?",
    a: "Op de hoofdroutes elke 100-200 km. Op afgelegen trajecten liggen de afstanden veel groter: Solitaire is het enige tankstation tussen Sesriem en de kust (ongeveer 340 km), en ook het traject Kamanjab-Khorixas-Palmwag door Damaraland kent lange tankvrije stukken. Op de weg naar Fish River Canyon in het zuiden kunnen de afstanden oplopen tot meer dan 250 km zonder enige voorziening. Plan tankstops voordat u elke stad verlaat, niet pas als de meter laag staat, en beschouw alles onder een halve tank als tijd om bij te tanken.",
  },
  {
    q: "Welke bandenspanning moet ik aanhouden op grind en zand in Namibië?",
    a: "Laat op gegradeerde C-wegen de bandenspanning ongeveer 10 tot 20% zakken ten opzichte van uw asfaltdruk, voor een soepelere rit en meer grip op wasbordpatroon. Op ruwere D-wegen laat u de druk verder zakken. In diep zand, vooral in Kaokoland of op duinsporen, is een druk van zo laag als 1,8 bar (ongeveer 26 psi) gangbare praktijk, verlaagd voordat u vastzit, niet erna. Pomp de banden altijd terug op naar de fabrieksdruk voordat u weer op asfalt rijdt, want snel rijden op asfalt met lage bandenspanning bouwt hitte op en verhoogt het risico op een klapband.",
  },
  {
    q: "Wat dekt de huurautoverzekering eigenlijk op grindwegen?",
    a: "Standaard cascodekking sluit steenslag op de voorruit, bandenschade en enkelvoudige omslagen door grind vaak uit of belast deze zwaar met eigen risico, terwijl dit de meest voorkomende schadeclaims in Namibië zijn. Het standaard eigen risico ligt doorgaans tussen N$20.000-40.000; niveaus met verlaagd eigen risico kosten €8-25 extra per dag en brengen dat terug naar N$5.000-20.000, met soms een optie voor volledig nul eigen risico in het hoogste niveau. Vraag specifiek naar de uitsluitingen voor grindwegen en enkelvoudige ongevallen, niet alleen naar het genoemde eigen-risicobedrag.",
  },
  {
    q: "Welke verhuurder moet ik eigenlijk gebruiken voor een zelfrijreis door Namibië?",
    a: "Voor een 2x4 op de hoofdroute volstaat elke betrouwbare, in Windhoek gevestigde verhuurder met een auto in de klasse Corolla Cross/Polo Sedan/Hyundai Creta. Voor een 4x4 met kampeeruitrusting zijn Bushlore en Asco Car Hire de twee namen die de meeste onafhankelijke zelfrijders met elkaar vergelijken, beide met een Namibië-specifiek wagenpark, dakentent en bergingsmateriaal; Britz is een alternatief met een groter wagenpark, eveneens gevestigd in Windhoek. Vergelijk de niveaus van eigen risico, niet alleen het dagtarief, want daar zit het echte kostenverschil bij een reisroute met veel grindwegen.",
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
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Bandenspanning per ondergrond</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            De meeste schadeclaims op grindwegen zijn terug te voeren op het rijden met asfaltdruk
            op wasbordpatroon. Pas de druk aan bij een wisseling van ondergrond, en pomp altijd
            weer op voordat u terugkeert naar asfalt.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TYRE_PRESSURE.map((t, i) => (
            <Reveal
              key={t.surface}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {t.surface}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-charcoal">{t.psi}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Welke verhuurder u eigenlijk moet gebruiken</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RENTAL_COMPANIES.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[14px] font-bold text-charcoal">{r.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.text}</p>
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
