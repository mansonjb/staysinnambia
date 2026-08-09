import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Beste Reisezeit für Namibia";
const DESCRIPTION =
  "Wann Sie Namibia besuchen sollten: die ehrlichen Kompromisse zwischen Trockenzeit, grüner Saison und den Übergangsmonaten dazwischen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-time-to-visit-namibia",
    languages: { en: "/best-time-to-visit-namibia", de: "/de/best-time-to-visit-namibia", nl: "/nl/best-time-to-visit-namibia", fr: "/fr/best-time-to-visit-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Trockenzeit",
    months: "Mai – Oktober",
    summary:
      "Das klassische Safari-Fenster. Ab Mai hört der Regen praktisch auf, die Vegetation lichtet sich schnell, und die Tiere verlieren ihre verstreuten Wasserquellen, sodass sie sich auf eine Handvoll permanenter Wasserlöcher konzentrieren. In Etosha bedeutet das verlässliche Sichtungen an Pfannen wie Okaukuejo, Halali, Klein Namutoni und Rietfontein, manchmal in Sichtweite des Camps. Der Juli ist Namibias trockenster Monat überhaupt; Juni und Juli sind zugleich die kältesten, mit Nächten im Wüsteninneren, die regelmäßig auf 5°C oder darunter fallen (Frost ist auf den Schotterebenen rund um Sossusvlei und im Khomas Hochland möglich), während die Tage angenehm frisch bei 22 bis 25°C bleiben.",
    tradeoffs: [
      "Beste Tierbeobachtung von August bis Oktober, wenn der Durst die Tiere an immer weniger Wasserlöchern zusammendrängt",
      "Kalte, teils nahezu frostige Wüstennächte von Mai bis August: eine richtige Daunenjacke einpacken, kein bloßes Fleece",
      "Hochsaison-Preise in den Lodges und die vollsten Camps des Jahres, besonders Juli bis September; Etoshas Nationalpark-Camps 6 bis 9 Monate im Voraus buchen",
    ],
  },
  {
    name: "Grüne Saison",
    months: "November – April",
    summary:
      "Der Regen setzt mit vereinzelten Gewittern im November ein und erreicht seinen Höhepunkt zwischen Januar und März, wenn in Windhoek allein im regenreichsten Monat durchschnittlich rund 150mm Niederschlag fallen, gegenüber nur etwa 0,5mm im trockenen Juni. Der Staub legt sich, die Wüste wird fast über Nacht grün, und genau dann sind paläarktische Zugvögel (Watvögel, Gleitaare, Bienenfresser) neben den Standvögeln unterwegs, was diese Zeit zum stärksten Vogelbeobachtungs-Fenster des Jahres macht. Der Nachteil: Bei Wasser überall haben die Tiere keinen Grund, sich an Wasserlöchern zu versammeln, weshalb Sichtungen in Etosha verstreuter sind und mehr Fahrzeit erfordern.",
    tradeoffs: [
      "Beste Vogelbeobachtung des Jahres, Dezember bis März, mit Zugvögeln neben den Standvögeln",
      "Dramatische Wolken- und Lichtstimmungen sowie Setzzeit für Antilopen (Impala, Springbock) im Dezember und Januar",
      "Die Tierwelt verteilt sich weg von den Wasserlöchern, und unbefestigte Straßen in der Sambesi-Region und Teilen des Kaokolands können durch Regen zeitweise unpassierbar werden",
    ],
  },
  {
    name: "Übergangsmonate",
    months: "April–Mai & September–Oktober",
    summary:
      "Das beste Preis-Leistungs-Verhältnis in Namibia. April bis Mai: Der Regen hat gerade aufgehört, die Landschaft ist noch grün von der Regenzeit, aber weder Andrang noch Hitze sind schon da, und die Straßen sind größtenteils abgetrocknet. September bis Oktober: noch immer volle Trockenzeit-Tierbeobachtung, wohl die beste des Jahres, da der Oktober die verbleibenden Wasserquellen bis an ihre Grenze bringt, aber noch vor der Preisumstellung im Januar und mit spürbar weniger vollen Camps als im August. Der Haken ist die Oktoberhitze: Wüstenregionen wie Sossusvlei und das Kaokoveld erreichen am frühen Nachmittag regelmäßig 35 bis 38°C, weshalb manche Guides ihn halb im Scherz als härtesten Monat für Aktivitäten im Freien bezeichnen.",
    tradeoffs: [
      "April bis Mai: grüne Landschaft, abtrocknende Straßen und Preise deutlich unter der Hochsaison",
      "September bis Oktober: Tierbeobachtung auf Trockenzeit-Niveau, aber ohne den Andrang des Augusts",
      "Der Oktober bringt echte Hitze, bevor der Regen einsetzt; Pirschfahrten für den frühen Morgen und späten Nachmittag planen",
    ],
  },
];

const MONTHS = [
  { m: "Jan", temp: "32–34° / 17–19°", rain: "Regenzeit baut sich auf", note: "Heiß, schwül, häufige Nachmittagsgewitter; Landschaft üppig grün" },
  { m: "Feb", temp: "31–33° / 17–19°", rain: "Regenreichster Monat", note: "Windhoek verzeichnet durchschnittlich ~154mm; Höhepunkt der grünen Saison und Vogelbeobachtung" },
  { m: "Mar", temp: "30–32° / 16–18°", rain: "Regen lässt nach", note: "Noch schwül, Landschaft am grünsten" },
  { m: "Apr", temp: "28–30° / 13–15°", rain: "Regen hört größtenteils auf", note: "Unterschätzter Übergangsmonat: grün, abtrocknende Straßen, wenig Andrang" },
  { m: "May", temp: "25–27° / 8–10°", rain: "Nahezu null", note: "Trockenzeit beginnt; Vegetation lichtet sich" },
  { m: "Jun", temp: "22–24° / 5–7°", rain: "Trockenste Phase", note: "Kälteste Nächte des Jahres; klarste Himmel zum Sternebeobachten" },
  { m: "Jul", temp: "22–24° / 5–7°", rain: "Trockenster Monat", note: "Klarste Luft des Jahres; Tierkonzentration an Wasserlöchern nimmt zu" },
  { m: "Aug", temp: "25–27° / 8–10°", rain: "Praktisch kein Regen", note: "Touristische Hochsaison; Etosha-Camps frühzeitig buchen" },
  { m: "Sep", temp: "29–32° / 11–14°", rain: "Praktisch kein Regen", note: "Ausgezeichnete, weniger überlaufene Tierbeobachtung vor der Oktoberhitze" },
  { m: "Oct", temp: "33–36° / 16–18°", rain: "Letzter trockener Monat", note: "Beste Wasserloch-Aktivität des Jahres, aber am Nachmittag wirklich heiß" },
  { m: "Nov", temp: "33–35° / 18–19°", rain: "Erste Gewitter", note: "Regen beginnt; Tierwelt verteilt sich, Zugvögel treffen ein" },
  { m: "Dec", temp: "31–33° / 17–19°", rain: "Grüne Saison beginnt", note: "Heiß und schwül; viel regionaler Ferienverkehr an die Küste" },
];

export default function BestTimePageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Beste Reisezeit für Namibia", url: `${SITE_URL}/de/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Beste Reisezeit für Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Es gibt nicht den einen besten Monat: es hängt davon ab, ob für Sie{" "}
          <Link
            href="/de/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Tierwelt
          </Link>
          ,{" "}
          <Link
            href="/de/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Fotografie
          </Link>{" "}
          oder das Vermeiden von Menschenmengen im Vordergrund steht. Hier ist der ehrliche
          Kompromiss für jeden Teil des Jahres.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Unsere Empfehlung:</span> Wenn dies eine
          erste Reise ist, die vor allem auf Tierbeobachtung ausgerichtet ist, zielen Sie auf
          September oder Anfang Oktober. Dann erleben Sie die Trockenzeit in ihrer
          konzentriertesten Form, noch bevor die eigentliche Hitze und der Andrang im August ihren
          Höhepunkt erreichen. Wenn Ihnen weite, grüne Landschaften und Vogelbeobachtung wichtiger
          sind als garantierte Sichtungen, bieten Februar und März beides, auf Kosten von mehr
          Fahrzeit zwischen den Tieren.
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
            Monat für Monat
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Die angegebenen Tageshöchst- und Nachttiefsttemperaturen sind Durchschnittswerte für
            Zentral- und Südnamibia (Raum Windhoek). Das Wüsteninnere der Namib und Etoshas
            Pfannen sind in den Übergangsmonaten am Nachmittag mehrere Grad heißer und in Juni und
            Juli nachts kälter.
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
