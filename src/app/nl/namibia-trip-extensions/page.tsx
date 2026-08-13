import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Uw Namibië-reis verlengen";
const DESCRIPTION =
  "Namibië combineert van nature goed met een handvol naburige hoogtepunten: hier leest u hoe reizigers hun reis daadwerkelijk verlengen, en wat elke toevoeging aan extra tijd kost.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-trip-extensions",
    languages: {
      en: "/namibia-trip-extensions",
      de: "/de/namibia-trip-extensions",
      nl: "/nl/namibia-trip-extensions", fr: "/fr/namibia-trip-extensions",
        it: "/it/namibia-trip-extensions",
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
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const EXTENSIONS = [
  {
    place: "Victoriawatervallen (Zambia/Zimbabwe)",
    text: "De meest voorkomende Namibië-uitbreiding, meestal per vlucht in plaats van over de weg. Een directe vlucht van Windhoek naar Victoria Falls airport (VFA) duurt iets meer dan een uur in de lucht, al is de realistische deur-tot-deur-tijd met een overstap eerder een halve dag. Zelf rijden kan, maar is lang: het is ongeveer 1.228 km en een volle 12 uur rijden van Windhoek naar Katima Mulilo aan de oostpunt van de Zambezi Region (voorheen de Caprivi Strip); de meeste zelfrijders splitsen dit over 2 dagen met een overnachting in Rundu, waarna nog een grensovergang en een rit naar de watervallen zelf volgt. Reken eenmaal aangekomen op minimaal 2 nachten om zowel de Zambiaanse als de Zimbabwaanse kant goed te zien, werkelijk verschillende uitzichtpunten op dezelfde watervallen.",
    time: "minimaal +3–4 dagen",
  },
  {
    place: "Chobe National Park & de Okavangodelta (Botswana)",
    text: (
      <>
        Een natuurlijke aansluiting vanuit onze Zambezi Region (voorheen de Caprivi Strip), die
        direct aan Chobe grenst via de grensovergang Ngoma Bridge (dagelijks open van 07:00 tot
        18:00), zo&apos;n 55 km van Kasane en ongeveer 70 km van Katima Mulilo aan de Namibische
        kant. Voor de Okavangodelta en Maun steken de meeste zelfrijders in plaats daarvan verder
        westelijk over bij grensovergang Mohembo (open van 06:00 tot 18:00), ten zuiden van
        Divundu, om vervolgens zo&apos;n 580 km door de Okavango Panhandle naar Maun te rijden,
        deels over grind dat in het droge seizoen prima te doen is met een sedan maar na zware
        regenval zacht kan worden. Bekijk onze{" "}
        <Link href="/nl/namibia-vs-botswana" className="font-semibold text-rust hover:text-rust-dark">
          vergelijking Namibië vs. Botswana
        </Link>{" "}
        voor wat er verandert zodra u de grens oversteekt: verwacht vooral fly-in camps en een
        hoger prijssegment dan Namibië&apos;s zelfrijroute.
      </>
    ),
    time: "+4–7 dagen",
  },
  {
    place: "Kaapstad & de Garden Route (Zuid-Afrika)",
    text: "Meestal wordt dit aan het begin of einde toegevoegd in plaats van halverwege de reis gecombineerd: veel reizigers vliegen voor of na hun Namibië-rondreis naar Kaapstad, en behandelen dit als een apart stedentripje in plaats van een uitbreiding van de zelfrijroute zelf. Logistiek is het een makkelijke toevoeging: een directe vlucht van Windhoek naar Kaapstad duurt iets meer dan 2 uur, met meerdere vluchten per dag op deze route.",
    time: "+3–5 dagen",
  },
];

const FAQS = [
  {
    q: "Kan ik van Namibië naar de Victoriawatervallen rijden?",
    a: "Technisch gezien wel, via de Zambezi Region (de voormalige Caprivi Strip) en Zambia of Botswana in, maar het is een werkelijk lange rit van meerdere dagen die de meeste reizigers overslaan ten gunste van een binnenlandse vlucht vanaf Windhoek of Katima Mulilo. Ter referentie: Windhoek naar Katima Mulilo alleen al is ongeveer 1.228 km en 12 uur rijden, meestal gesplitst over 2 dagen met een overnachting in Rundu, en dat is nog vóórdat u een grens bent overgestoken. Vliegen is de praktische standaardkeuze voor deze specifieke uitbreiding, tenzij u toch al door de Zambezi Region rijdt als onderdeel van uw Namibië-route.",
  },
  {
    q: "Heb ik een apart visum nodig voor deze uitbreidingen?",
    a: "Ja, in alle gevallen: Zambia, Zimbabwe, Botswana en Zuid-Afrika hebben elk hun eigen inreisvereisten, los van die van Namibië (dat zelf op 1 april 2025 overstapte op een verplichte online aanvraag voor het Visa on Arrival, en de lijst met in aanmerking komende nationaliteiten sindsdien is blijven bijwerken). Als uw uitbreiding zowel Zambia als Zimbabwe omvat, is het gezamenlijke KAZA UniVisa (rond US$50, 30 dagen geldig in beide landen binnen een periode van 12 maanden) meestal de eenvoudigste optie en dekt het ook dagtrips naar Botswana via de grensovergang Kazungula, al is voor een overnachting in Botswana nog steeds de eigen, aparte inreistoestemming van dat land vereist. Controleer de vereisten voor uw specifieke nationaliteit en elk land ruim voordat u vluchten boekt, naast onze eigen gids over de Namibië visumvereisten.",
  },
  {
    q: "Hoeveel extra dagen moet ik budgetteren voor een uitbreiding naar de Victoriawatervallen?",
    a: "Minimaal 3–4 dagen in totaal, inclusief reistijd: dat dekt een vlucht heen en terug (iets meer dan een uur in de lucht van Windhoek naar Victoria Falls airport, langer deur-tot-deur met een overstap) plus 2 nachten om de watervallen goed te zien vanaf zowel het Zambiaanse als het Zimbabwaanse uitzichtpunt, wat werkelijk verschillende ervaringen zijn die de extra grensovergang waard zijn.",
  },
  {
    q: "Is het beter om uit te breiden naar Botswana of direct naar de Victoriawatervallen te vliegen?",
    a: "Dat hangt af van waar u meer van wilt. Botswana verlengt de safari-ervaring met dichtere wildlife-observaties, met name rond Chobe National Park, bereikbaar vanuit Namibië&apos;s Zambezi Region via de grensovergang Ngoma Bridge; de Victoriawatervallen zijn een op zichzelf staande bezienswaardigheid met weinig overlap met wat u al in Namibië heeft gezien. Veel langere reizen van 3 weken of meer combineren beide: over de weg naar Chobe en vervolgens doorvliegen naar de watervallen.",
  },
];

export default function TripExtensionsPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Reisverlenging", url: `${SITE_URL}/nl/namibia-trip-extensions` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Uw Namibië-reis verlengen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië grenst aan enkele van de grootste hoogtepunten van zuidelijk Afrika. Hier leest u
          hoe reizigers deze daadwerkelijk toevoegen, en wat elke uitbreiding werkelijk aan tijd
          kost.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Onze aanbeveling:</span> als uw route al
          eindigt in de Zambezi Region, voegt een korte fly-in-uitbreiding naar de
          Victoriawatervallen of een dagtrip naar Chobe via de Ngoma-grens relatief weinig extra
          reistijd toe voor een werkelijk ander landschap. Als uw Namibië-rondreis zich volledig in
          het zuiden en midden afspeelt (Sossusvlei, Etosha, de kust), is Kaapstad aan het begin of
          einde van de reis toevoegen logistiek de optie met de minste wrijving, omdat u dan niet
          hoeft terug te rijden door het hele land om een grens te bereiken.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {EXTENSIONS.map((e, i) => (
            <Reveal
              key={e.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{e.place}</h2>
                <span className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-semibold text-charcoal/70">
                  {e.time}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{e.text}</p>
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
          <Link
            href="/nl/namibia-vs-botswana"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibië vs. Botswana
          </Link>
        </Reveal>
      </section>
    </>
  );
}
