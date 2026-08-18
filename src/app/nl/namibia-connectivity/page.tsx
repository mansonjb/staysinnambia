import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { EsimWidget } from "@/components/esim-widget";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Simkaarten en eSIM in Namibië";
const DESCRIPTION =
  "Welk netwerk u het beste kunt gebruiken, waar u daadwerkelijk bereik heeft, en waar echt niet: een praktische connectiviteitsgids voor het zelf rondrijden door Namibië.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-connectivity",
    languages: {
      en: "/namibia-connectivity",
      de: "/de/namibia-connectivity",
      nl: "/nl/namibia-connectivity", fr: "/fr/namibia-connectivity",
        it: "/it/namibia-connectivity",
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

const COVERAGE = [
  {
    area: "Windhoek, Swakopmund, Walvis Bay",
    signal: "Goed MTC 4G, betrouwbaar genoeg voor bellen, kaarten en streaming.",
  },
  {
    area: "Etosha (kampen en hoofdwegen)",
    signal: "Wisselend maar aanwezig: de meeste kampen (Okaukuejo, Halali, Namutoni) hebben wifi bij de receptie, zelfs waar het mobiele signaal zwak of afwezig is op de omliggende grindlussen.",
  },
  {
    area: "Sossusvlei, Damaraland, Spitzkoppe",
    signal: "Zwak tot afwezig over lange stukken, vooral buiten de C-wegen. Download offline kaarten voordat u de kust verlaat, niet pas op de D-weg naar Damaraland.",
  },
  {
    area: "Skeleton Coast, afgelegen Kaokoland (incl. omweg naar Opuwo)",
    signal: "Reken op helemaal geen MTC- of TN Mobile-bereik voor hele dagen: dit is normaal, geen netwerkstoring, en geldt ook voor eSIM's die over dezelfde zendmasten lopen.",
  },
];

const FAQS = [
  {
    q: "Welk netwerk is het beste voor toeristen in Namibië?",
    a: "MTC is het dominante netwerk van Namibië en heeft over het algemeen de breedste dekking langs de belangrijkste toeristenroutes en steden; Telecom Namibia (via TN Mobile) is het alternatief. Geen van beide heeft noemenswaardige dekking in de meest afgelegen woestijn- en kuststukken, waaronder de Skeleton Coast, de diepe Namib en het grootste deel van Kaokoland: dat is een beperking van terrein en infrastructuur, geen netwerkkeuze die u kunt oplossen door van provider te wisselen.",
  },
  {
    q: "Hoeveel kost een MTC-toeristensimkaart?",
    a: "MTC verkoopt twee specifieke toeristenpakketten, beide verkrijgbaar bij de kiosk op het vliegveld: een Leisure-pakket van N$349 voor 14 dagen met 10,1GB data plus wat internationaal bel- en sms-tegoed, en een Premium-pakket van N$659 voor 30 dagen met 20,1GB data en meer beltegoed. Een gewone prepaid simkaart met een losse databundel is meestal goedkoper als u het zelf wilt bijladen, maar de toeristenpakketten besparen u de moeite op dag één.",
  },
  {
    q: "Kan ik op het vliegveld een simkaart kopen?",
    a: "Ja, MTC heeft een kiosk in de aankomsthal van Hosea Kutako International Airport, en dat is de eenvoudigste manier om verbonden te zijn voordat u gaat rijden. Neem uw paspoort mee; voor lokale simregistratie is doorgaans een identiteitsbewijs vereist, en de toeristenpakketten worden ter plekke geregeld.",
  },
  {
    q: "Werkt eSIM goed in Namibië, en is het goedkoper dan een lokale simkaart?",
    a: "Het werkt, maar is zelden goedkoper. Internationale eSIM-providers maken gebruik van dezelfde MTC- of Telecom Namibia-zendmasten als een fysieke simkaart, dus de dekking is identiek, en pakketten beginnen doorgaans rond de $9,50 voor een week data. De adder zit in de prijs per gigabyte: eSIM-data kost vaak twee tot drie keer zoveel als eenzelfde hoeveelheid data in een MTC-prepaidbundel. Waarvoor u eigenlijk betaalt, is gemak, al verbonden landen in plaats van in de rij staan bij de vliegveldkiosk, niet een beter netwerk.",
  },
  {
    q: "Heb ik bereik op de hele zelfrijroute?",
    a: "Nee, en daar moet u niet op rekenen bij het plannen. Sossusvlei, Damaraland, Spitzkoppe, de Skeleton Coast en het afgelegen Kaokoland hebben allemaal lange stukken, soms hele rijdagen, zonder enig bereik op beide netwerken. Download offline Google Maps voor uw route, bewaar uw lodgeboekingen als pdf's, en beschouw connectiviteit als iets van steden en kampen, niet als iets tussen de stops.",
  },
];

export default function ConnectivityPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Connectiviteit", url: `${SITE_URL}/nl/namibia-connectivity` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Simkaarten, eSIM en connectiviteit in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          De eerlijke versie: in steden heeft u redelijk bereik, en overal elders wisselend tot
          helemaal geen bereik. Plan daarmee, in plaats van ertegen te vechten.
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
          <h2 className="text-xl font-bold text-charcoal">Voordat u de kust verlaat</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Koop een MTC-simkaart bij de kiosk op vliegveld Hosea Kutako (N$349 voor 14 dagen / 10,1GB, of N$659 voor 30 dagen / 20,1GB), of controleer specifiek of uw eSIM-provider Namibië dekt voordat u er voor data op vertrouwt in plaats van een fysieke simkaart",
              (
                <>
                  Download offline kaarten voor uw volledige zelfrijroute van tevoren. Onze{" "}
                  <Link href="/nl/namibia-self-drive-guide" className="font-semibold text-rust hover:text-rust-dark">
                    zelfrijgids
                  </Link>{" "}
                  behandelt de rest van de logistiek voor vertrek
                </>
              ),
              "Bewaar lodgebevestigingen en routebeschrijvingen als pdf's of screenshots, niet alleen als e-maillinks",
              "Vertel iemand uw ruwe dagroute als u alleen over afgelegen stukken rijdt",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-charcoal">Boek een eSIM voor Namibië</h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Kom al verbonden aan zonder in de rij te staan bij de kiosk op de luchthaven.
            Vergelijk en koop hieronder direct een eSIM.
          </p>
          <div className="mt-6">
            <EsimWidget locale="nl" />
          </div>
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
            href="/nl/namibia-packing-list"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Paklijst voor Namibië
          </Link>
        </Reveal>
      </section>
    </>
  );
}
