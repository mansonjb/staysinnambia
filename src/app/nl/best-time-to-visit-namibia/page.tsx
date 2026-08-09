import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Beste reistijd voor Namibië";
const DESCRIPTION =
  "Wanneer u Namibië moet bezoeken: de eerlijke afwegingen tussen het droge seizoen, het groene seizoen en de tussenliggende schoudermaanden.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-time-to-visit-namibia",
    languages: {
      en: "/best-time-to-visit-namibia",
      de: "/de/best-time-to-visit-namibia",
      nl: "/nl/best-time-to-visit-namibia", fr: "/fr/best-time-to-visit-namibia",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Droog seizoen",
    months: "Mei – oktober",
    summary:
      "Het klassieke safariseizoen. De regen stopt vanaf mei vrijwel volledig, de vegetatie dunt snel uit en dieren verliezen hun verspreide waterbronnen, waardoor ze zich concentreren bij een handvol permanente waterpoelen. In Etosha betekent dat voorspelbare waarnemingen bij pannen zoals Okaukuejo, Halali, Klein Namutoni en Rietfontein, soms zelfs vanuit het kamp zichtbaar. Juli is de droogste maand die ooit in Namibië is gemeten; juni en juli zijn ook de koudste maanden, met nachten in het woestijnbinnenland die regelmatig zakken tot 5°C of lager (vorst is mogelijk op de grindvlaktes rond Sossusvlei en in het Khomas Hochland), terwijl de dagen een aangename, frisse 22–25°C blijven.",
    tradeoffs: [
      "Het beste dieren spotten valt in augustus–oktober, wanneer dorst dieren dwingt zich bij steeds minder waterpoelen te concentreren",
      "Koude, soms bijna vriezende woestijnnachten van mei tot augustus: neem een echte donsjas mee, niet alleen een fleece",
      "Hoogseizoentarieven en de drukste kampen van het jaar, vooral juli–september; boek de kampen in Etosha National Park 6 tot 9 maanden van tevoren",
    ],
  },
  {
    name: "Groen seizoen",
    months: "November – april",
    summary:
      "De regens beginnen met verspreide onweersbuien in november en bouwen op naar een piek in januari–maart, wanneer Windhoek in de natste maand alleen al gemiddeld zo'n 150 mm regen krijgt, tegenover ongeveer 0,5 mm in de droge-seizoensmaand juni. Het stof legt zich neer, de woestijn wordt bijna van de ene op de andere dag groen, en dit is de periode waarin Palearctische trekvogels (steltlopers, wouwen, Europese bijeneters) aanwezig zijn naast de standvogels, wat er de sterkste vogelspotperiode van het jaar van maakt. Het nadeel: met water overal heeft wildlife geen reden om zich bij waterpoelen te verzamelen, waardoor waarnemingen in Etosha meer verspreid zijn en meer rijden vereisen.",
    tradeoffs: [
      "Beste vogelspotting van het jaar, december–maart, met trekvogels aanwezig naast standvogels",
      "Spectaculaire wolken- en lichtfotografie en werptijd voor antilopen (impala, springbok) in december–januari",
      "Wildlife verspreidt zich weg van de waterpoelen, en onverharde wegen in de Zambeziregio en delen van Kaokoland kunnen tijdelijk onbegaanbaar worden door regen",
    ],
  },
  {
    name: "Schoudermaanden",
    months: "April–mei & september–oktober",
    summary:
      "De beste prijs-kwaliteitsverhouding qua omstandigheden in Namibië. April–mei: de regens zijn net gestopt, de landschappen zijn nog groen van het natte seizoen, maar de drukte en de hitte zijn nog niet aangebroken, en de wegen zijn grotendeels opgedroogd. September–oktober: nog volledig droge-seizoenkwaliteit qua dieren spotten, wellicht de beste van het jaar, aangezien oktober de resterende waterbronnen tot hun uiterste duwt, maar vóór de prijsreset van januari en met merkbaar minder drukke kampen dan in augustus. De valkuil is de hitte in oktober: woestijnregio's zoals Sossusvlei en de Kaokoveld halen tegen het midden van de middag regelmatig 35–38°C, waarom sommige gidsen het half schertsend de zwaarste maand noemen om buiten te zijn.",
    tradeoffs: [
      "April–mei: groene landschappen, opdrogende wegen en tarieven ruim onder het hoogseizoen van het droge seizoen",
      "September–oktober: kwaliteit van dieren spotten van het droge seizoen, zonder de drukte van augustus",
      "Oktober brengt echte hitte voordat de regens losbarsten; plan gamedrives voor de vroege ochtend en late namiddag",
    ],
  },
];

const MONTHS = [
  { m: "Jan", temp: "32–34° / 17–19°", rain: "Natte seizoen bouwt op", note: "Heet, vochtig, regelmatig onweer in de middag; weelderige landschappen" },
  { m: "Feb", temp: "31–33° / 17–19°", rain: "Natste maand", note: "Windhoek krijgt gemiddeld ~154 mm; hoogtepunt van het groene seizoen en vogelspotting" },
  { m: "Mrt", temp: "30–32° / 16–18°", rain: "Regen neemt af", note: "Nog vochtig, landschappen op hun groenst" },
  { m: "Apr", temp: "28–30° / 13–15°", rain: "Regen stopt grotendeels", note: "Ondergewaardeerde schoudermaand: groen, opdrogende wegen, weinig drukte" },
  { m: "Mei", temp: "25–27° / 8–10°", rain: "Vrijwel nihil", note: "Droog seizoen begint; vegetatie begint uit te dunnen" },
  { m: "Jun", temp: "22–24° / 5–7°", rain: "Droogste periode", note: "Koudste nachten van het jaar; helderste luchten om te sterrenkijken" },
  { m: "Jul", temp: "22–24° / 5–7°", rain: "Droogste maand", note: "Helderste lucht van het jaar; dieren concentreren zich steeds meer bij waterpoelen" },
  { m: "Aug", temp: "25–27° / 8–10°", rain: "Vrijwel geen", note: "Drukste toeristenseizoen; boek Etosha-kampen ruim van tevoren" },
  { m: "Sep", temp: "29–32° / 11–14°", rain: "Vrijwel geen", note: "Uitstekend, minder druk dieren spotten vóór de hitte van oktober" },
  { m: "Okt", temp: "33–36° / 16–18°", rain: "Laatste droge maand", note: "Beste waterpoel-actie van het jaar, maar écht heet tegen de middag" },
  { m: "Nov", temp: "33–35° / 18–19°", rain: "Eerste onweersbuien", note: "Regens beginnen; wildlife begint zich te verspreiden, trekvogels arriveren" },
  { m: "Dec", temp: "31–33° / 17–19°", rain: "Groene seizoen begint", note: "Heet en vochtig; druk door regionaal vakantieverkeer naar de kust" },
];

export default function BestTimePageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Beste reistijd voor Namibië", url: `${SITE_URL}/nl/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Beste reistijd voor Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Er is niet één beste maand: het hangt ervan af of uw prioriteit{" "}
          <Link
            href="/nl/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            wildlife
          </Link>
          ,{" "}
          <Link
            href="/nl/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            fotografie
          </Link>{" "}
          of het vermijden van drukte is. Hier is de eerlijke afweging voor elk deel van het jaar.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Onze aanbeveling:</span> als dit een
          eerste reis is die draait om dieren spotten, mik dan op september of begin oktober. U
          krijgt de meest geconcentreerde omstandigheden van het droge seizoen, vóór de echte
          hitte en de drukte van augustus allebei pieken. Als weidse groene landschappen en
          vogelspotting belangrijker zijn dan gegarandeerde waarnemingen, bieden februari en maart
          beide, ten koste van meer rijden tussen de dieren door.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-charcoal">{season.name}</h2>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">
                  {season.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-charcoal/10 pt-4">
                  {season.tradeoffs.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-[13px] text-charcoal/60"
                    >
                      <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
            Maand voor maand
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            De getoonde dagtemperaturen / nachttemperaturen zijn gemiddelden voor centraal en
            zuidelijk Namibië (regio Windhoek). Het woestijnbinnenland van de Namib en de pannen
            van Etosha lopen in de schoudermaanden &apos;s middags enkele graden warmer op, en
            zijn &apos;s nachts kouder in juni en juli.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {MONTHS.map((mo, i) => (
            <Reveal
              key={mo.m}
              delay={i * 30}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-charcoal">
                  {mo.m}
                </h3>
                <span className="text-[11px] font-medium text-rust">{mo.temp}C</span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                {mo.rain}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug text-charcoal/60">{mo.note}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
