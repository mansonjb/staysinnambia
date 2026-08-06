import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Sterrenkijkgids voor Namibië";
const DESCRIPTION =
  "Waar de nachtelijke hemel boven Namibië het donkerst is, en wat deze plekken werkelijk anders maakt: het Gold-tier Dark Sky Reserve van NamibRand, het licht voor duinfotografie, en waar u eronder kunt slapen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-stargazing-photography",
    languages: {
      en: "/namibia-stargazing-photography",
      de: "/de/namibia-stargazing-photography",
      nl: "/nl/namibia-stargazing-photography",
    },
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
  { title: "Zelf rijden door Namibië", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Visumvereisten voor Namibië", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een reis naar Namibië?", href: "/nl/namibia-trip-cost" },
  { title: "Gids voor wilde dieren in Namibië", href: "/nl/namibia-wildlife-guide" },
];

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/nl/where-to-stay/sossusvlei",
    text: (
      <>
        De belangrijkste dark-sky-bestemming van Namibië, een International Dark Sky Reserve met
        Gold-status, een van de weinige plekken ter wereld met die classificatie. Werkelijk geen
        lichtvervuiling over honderd kilometer in de meeste richtingen. Lodges aan de rand van het
        reservaat organiseren begeleide astronomiesessies met echte telescopen, niet slechts een
        deken op het zand. Plan uw bezoek in het droge seizoen (mei–oktober) voor de helderste
        hemel. Bekijk onze{" "}
        <Link href="/nl/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          gids voor de beste reistijd
        </Link>
        .
      </>
    ),
  },
  {
    place: "Duinen van Sossusvlei",
    href: "/nl/where-to-stay/sossusvlei",
    text: "Dezelfde heldere woestijnlucht die de nachtelijke hemel uitzonderlijk maakt, zorgt hier ook voor zonsopgangfotografie die tot de beste van Afrika behoort: in het venster van 20 tot 45 minuten na het openen van de poort is de duinkleur het dramatischt, voordat de hittenevel intreedt.",
  },
  {
    place: "Spitzkoppe",
    href: "/nl/where-to-stay/spitzkoppe",
    text: "Granieten koepels die recht uit de vlakke vlaktes oprijzen, vormen een opvallende voorgrond tegen de Melkweg, en het is een van de weinige dark-sky-plekken op de route met dramatische rotssilhouetten in plaats van een vlakke horizon.",
  },
];

const FAQS = [
  {
    q: "Wat maakt de nachtelijke hemel van NamibRand anders dan andere donkere plekken?",
    a: "NamibRand heeft de Gold-status van International Dark Sky Reserve, de hoogste classificatie die wordt toegekend, verleend aan slechts een klein aantal plekken ter wereld. Die status weerspiegelt zowel de vrijwel volledige afwezigheid van lichtvervuiling als de actieve, voortdurende maatregelen van reservaat- en lodge-exploitanten om dat zo te houden.",
  },
  {
    q: "Heb ik speciale apparatuur nodig voor astrofotografie in Namibië?",
    a: "Een statief en een camera die handmatige lange sluitertijden aankan, brengen u al een heel eind; een groothoeklens helpt voor opnames van de Melkweg. Verschillende lodges bij NamibRand en Sossusvlei organiseren begeleide astronomiesessies met echte telescopen als u meer wilt dan een brede opname van de hemel.",
  },
  {
    q: "Wat is de beste tijd van het jaar om te sterrenkijken in Namibië?",
    a: "Het droge seizoen (mei–oktober) geeft de helderste, droogste lucht en de minste bewolking. Dezelfde omstandigheden die het tot het beste seizoen voor wildlife-spotten maken, maken het ook tot het beste seizoen om te sterrenkijken. Een maanloze nacht rond nieuwe maan geeft de donkerst mogelijke hemel, de moeite waard om uw reis rond te plannen als dit voor u een prioriteit is.",
  },
  {
    q: "Is Sossusvlei of Spitzkoppe beter voor fotografie?",
    a: "Verschillende onderwerpen, geen kwestie van beter of slechter. Sossusvlei draait om duinkleur en schaal bij zonsopgang; Spitzkoppe draait om dramatische granietsilhouetten bij zonsondergang en na donker. Verschillende reisroutes combineren beide als een overnachting onderweg.",
  },
];

export default function StargazingPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Sterrenkijken & fotografie", url: `${SITE_URL}/nl/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Sterrenkijken en astrofotografie in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          De droge lucht van Namibië en de vrijwel volledige afwezigheid van lichtvervuiling maken
          het land een van de weinige echte dark-sky-bestemmingen ter wereld, geen marketingpraat.
          Hier leest u waar het werkelijk het best is, en waarom.
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
                  Verblijven →
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
        </Reveal>
      </section>
    </>
  );
}
