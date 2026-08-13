import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië wildlife gids";
const DESCRIPTION =
  "Namibië's wildlife checklist per regio: woestijnaangepaste olifanten, zwarte neushoorn, de soorten bij Etosha's waterpoelen, en de kustwildlife die de meeste reisroutes missen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide", fr: "/fr/namibia-wildlife-guide", it: "/it/namibia-wildlife-guide" },
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

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/nl/where-to-stay/etosha",
    animals:
      "Leeuw, olifant, giraffe, zebra, springbok, en de zwartneusimpala, een ondersoort die nergens anders voorkomt dan in Etosha en het noordwestelijke Kaokoland. De verlichte waterpoelen bij Okaukuejo en Halali bieden de betrouwbaarste zwarte-neushoornwaarnemingen van het land: neushoorns komen doorgaans tussen 19.00 en 23.00 uur opdagen gedurende het droge seizoen (ruwweg mei-oktober), vaak dezelfde avond samen met olifant en leeuw bij de waterpoel. Voor cheeta zijn de open vlaktes ten westen van Okaukuejo en de Okondeka-waterpoel een betere kans dan de oostelijke pannen.",
  },
  {
    region: "Damaraland",
    href: "/nl/where-to-stay/damaraland",
    animals:
      "Thuisbasis van de woestijnaangepaste olifant, een populatie die zich heeft hersteld van minder dan 30 dieren in de jaren tachtig tot ruwweg 600-700 vandaag, vrijwel volledig dankzij Namibië's model van gemeenschapsreservaten. Deze olifanten trekken door territoria tot wel 700 km en kunnen vijf dagen zonder drinken, aanpassingen die vrijwel nergens anders op aarde voorkomen. De Torra Conservancy, in de Huab-riviervallei, is de meest betrouwbare uitvalsbasis om ze te volgen. Verderop naar het noorden herbergt de Palmwag Concession de grootste vrij rondzwervende populatie zwarte neushoorn ter wereld, ongeveer 200 dieren die dagelijks worden gemonitord door rangers van Save the Rhino Trust; ze zien betekent een volledige dag begeleid tracken te voet met een erkende gids, geen zelfrijstop.",
  },
  {
    region: "Skeleton Coast",
    href: "/nl/where-to-stay/skeleton-coast",
    animals:
      "Kolonies Kaapse pelsrobben (Cape Cross alleen al telt ruim 100.000 dieren op het hoogtepunt van het seizoen), bruine hyena die de vloedlijn afspeurt naar aas, en, voor de kust, Heaviside's dolfijn, een kleine dolfijnsoort die alleen langs de Namibische en Zuid-Afrikaanse kust voorkomt. Dit is eerder landschap-en-zeeleven-terrein dan een stop voor groot wild.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/nl/where-to-stay/caprivi",
    animals: (
      <>
        Namibië&apos;s meest waterrijke wildlife, geconcentreerd in Bwabwata National Park langs
        de overstromingsvlaktes van de Kwando en de Zambezi: nijlpaard, krokodil, aanzienlijke
        olifanten- en buffelkuddes, sabel- en bastergemsbokantilope, en een van Namibië&apos;s
        laatste overgebleven wilde-hondenpopulaties, gevolgd door het Kwando Carnivore Project.
        Het is ook de beste vogelspotregio van het land en de enige plek waar een echte
        Big Five-waarneming, buffel inbegrepen, realistisch is, een volledig ander ecosysteem
        dan de soorten uit de droge gebieden elders. Het is bovendien de regio van Namibië met het
        hoogste malariarisico: bekijk onze{" "}
        <Link
          href="/nl/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          gids over veiligheid en gezondheid
        </Link>{" "}
        voordat u vertrekt.
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/nl/where-to-stay/sossusvlei",
    animals:
      "Oryx (gemsbok) die zich aftekent op de duinruggen is de bepalende waarneming, en de meest recente wildtelling van het aangrenzende NamibRand Nature Reserve telde ruwweg 3.200 oryx en 12.400 springbok over de 172.000 hectare. Bruine hyena, zwartrugjakhals en luipaard komen voor maar zijn werkelijk schuw; NamibRand voert ook een actief herintroductieprogramma voor karakal en cheeta, dus beide zijn een bonuswaarneming, geen verwachting.",
  },
];

const TIMING = [
  "Zonsopgang (ruwweg 05.30-08.00 uur): roofdieren zijn het meest actief, het beste venster voor leeuw-, cheeta- en luipaardbewegingen voordat de hitte toeslaat.",
  "Middag: wildlife concentreert zich bij waterpoelen in plaats van rond te trekken, vooral in het droge seizoen van mei tot oktober. Parkeren bij Okaukuejo, Halali of Olifantsrus en wachten werkt beter dan rondrijden op zoek naar waarnemingen.",
  "Schemering tot de eerste uren van het donker, bij verlichte kampwaterpoelen: zwarte-neushoorn- en olifantactiviteit piekt, doorgaans tussen 19.00 en 23.00 uur in het droge seizoen.",
  "Nat seizoen (november-april): wildlife verspreidt zich wijd naarmate tijdelijke pannen vollopen, waardoor waarnemingen minder voorspelbaar worden, maar de vogelspotting, pasgeboren dieren en groene landschappen aanzienlijk verbeteren.",
];

const FAQS = [
  {
    q: "Heeft Namibië de Big Five?",
    a: "Niet overal, en niet de klassieke versie inclusief buffel die de meeste safarimarketing suggereert. Etosha heeft betrouwbaar leeuw, olifant, zwarte neushoorn en luipaard; buffel maakt geen deel uit van Etosha's ecosysteem. Bwabwata National Park in de Caprivi (Zambezi)-regio is de enige plek met een echte kans op alle vijf, buffel inbegrepen, naast sabel- en bastergemsbokantilope en een van de laatste wilde-hondenroedels van het land.",
  },
  {
    q: "Wat maakt Namibië's wildlife anders dan die van Kenia of Tanzania?",
    a: "Namibië's kenmerkende wildlife is woestijnaangepast: olifanten en zwarte neushoorns die overleven op een fractie van het water dat hun soortgenoten in de savanne nodig hebben. Damaraland's populatie woestijnolifanten is gestegen van minder dan 30 dieren in de jaren tachtig naar ruwweg 600-700 vandaag, en de Palmwag Concession herbergt de grootste vrij rondzwervende populatie woestijnaangepaste zwarte neushoorn ter wereld, ongeveer 200 dieren. Het is een andere, kalere vorm van wildlife-ontmoeting dan de dichte kuddes van Oost-Afrika, gebouwd rond schaarse waarnemingen in plaats van volume.",
  },
  {
    q: "Waar is de beste plek om zwarte neushoorns te zien in Namibië?",
    a: "De verlichte waterpoelen van Etosha bij Okaukuejo en Halali voor de betrouwbaarste kans, waarbij neushoorns doorgaans tussen 19.00 en 23.00 uur opdagen in het droge seizoen; en de Palmwag Concession in Damaraland voor begeleid rhino-tracken te voet met door Save the Rhino Trust gemonitorde dieren, een van de weinige plekken in Afrika waar dit op verantwoorde wijze wordt aangeboden, in samenwerking met gemeenschapsreservaten.",
  },
  {
    q: "Kunt u wildlife zien tijdens een zelfrijreis, of heeft u een gids nodig?",
    a: "Etosha is werkelijk uitstekend voor wildlife spotten tijdens zelf rijden: waterpoelen zijn bereikbaar met een gewone huurauto en wildlife concentreert zich daar voorspelbaar, vooral in het droge seizoen van mei tot oktober. Het tracken van woestijnaangepaste olifanten in de Torra Conservancy in Damaraland en zwarte-neushoorntracking in de Palmwag Concession vereisen beide een gespecialiseerde, erkende gids; het zijn geen waarnemingen langs de weg.",
  },
  {
    q: "Waar kan ik cheeta zien in Namibië?",
    a: "Namibië herbergt de grootste vrij rondzwervende cheetapopulatie ter wereld, geschat op ongeveer 1.500 dieren, en Otjiwarongo, bij de Waterberg, wordt vaak de cheeta-hoofdstad van de wereld genoemd. Het onderzoekscentrum van het Cheetah Conservation Fund daar is de meest betrouwbare waarneming, samen met de AfriCat Foundation bij Okonjima. In Etosha zijn de open vlaktes ten westen van Okaukuejo en de Okondeka-waterpoel uw beste kans tijdens een gamedrive, al blijven cheetawaarnemingen overal opportunistisch en niet gegarandeerd.",
  },
  {
    q: "Wat is de beste tijd van het jaar voor wildlife spotten in Namibië?",
    a: "Het droge seizoen, ruwweg mei tot oktober, wanneer schaars water dieren dwingt zich te concentreren bij waterpoelen en waarnemingen veel voorspelbaarder worden, vooral in Etosha. Het natte seizoen (november-april) verspreidt wildlife wijder en waarnemingen worden lastiger te voorspellen, maar het is het betere venster voor vogelspotting, pasgeboren dieren en groene landschappen.",
  },
];

export default function WildlifeGuidePageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Wildlife gids", url: `${SITE_URL}/nl/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië's wildlife: wat u zult zien, en waar
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië's wildlife is verspreid, niet geconcentreerd zoals in Oost-Afrika. In welke
          regio u verblijft, bepaalt wat u daadwerkelijk te zien krijgt.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SIGHTINGS.map((s, i) => (
            <Reveal
              key={s.region}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.region}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Verblijven in {s.region} →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.animals}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Beste tijdstip van de dag, per soort</h2>
          <ul className="mt-5 space-y-3">
            {TIMING.map((item) => (
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
            href="/nl/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste safari gebieden
          </Link>
        </Reveal>
      </section>
    </>
  );
}
