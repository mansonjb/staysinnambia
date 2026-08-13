import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Periodo migliore per visitare la Namibia";
const DESCRIPTION =
  "Quando andare in Namibia: i compromessi onesti tra la stagione secca, la stagione verde e i mesi intermedi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-time-to-visit-namibia",
    languages: {
      en: "/best-time-to-visit-namibia",
      de: "/de/best-time-to-visit-namibia",
      nl: "/nl/best-time-to-visit-namibia", fr: "/fr/best-time-to-visit-namibia",
        it: "/it/best-time-to-visit-namibia",
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
    name: "Stagione secca",
    months: "Maggio - ottobre",
    summary:
      "La classica finestra da safari. Le piogge si fermano praticamente da maggio, la vegetazione si dirada rapidamente e gli animali perdono le loro fonti d'acqua sparse, così si concentrano su una manciata di pozze permanenti. A Etosha questo significa avvistamenti prevedibili presso pan come Okaukuejo, Halali, Klein Namutoni e Rietfontein, a volte a vista dal campo. Luglio è il mese più secco mai registrato in Namibia; giugno e luglio sono anche i più freddi, con notti nell'entroterra desertico che scendono regolarmente a 5°C o meno (la brina è possibile sulle pianure ghiaiose intorno a Sossusvlei e nello Khomas Hochland), mentre le giornate restano piacevoli, tra 22 e 25°C.",
    tradeoffs: [
      "L'osservazione della fauna raggiunge il picco tra agosto e ottobre, quando la sete costringe gli animali a concentrarsi su un numero sempre più ridotto di pozze d'acqua",
      "Notti desertiche fredde, a volte vicine allo zero, da maggio ad agosto: portate un vero piumino, non solo un pile",
      "Tariffe da alta stagione e i campi più affollati dell'anno, soprattutto da luglio a settembre: prenotate i campi del parco di Etosha con 6-9 mesi di anticipo",
    ],
  },
  {
    name: "Stagione verde",
    months: "Novembre - aprile",
    summary:
      "Le piogge arrivano sotto forma di temporali sparsi già a novembre e raggiungono il picco tra gennaio e marzo, quando a Windhoek cadono in media circa 150 mm di pioggia nel mese più piovoso, contro circa 0,5 mm nel secco giugno. La polvere si deposita, il deserto rinverdisce quasi da un giorno all'altro, ed è il periodo in cui gli uccelli migratori paleartici (limicoli, nibbi, gruccioni europei) sono presenti insieme alle specie residenti, il che lo rende la finestra migliore dell'anno per il birdwatching. Il rovescio della medaglia: con l'acqua ovunque, la fauna non ha motivo di radunarsi presso le pozze, quindi gli avvistamenti a Etosha sono più dispersi e richiedono più spostamenti.",
    tradeoffs: [
      "Il miglior birdwatching dell'anno, da dicembre a marzo, con specie migratorie presenti insieme a quelle residenti",
      "Fotografia spettacolare di cieli e luce, e stagione dei parti per le antilopi (impala, springbok) tra dicembre e gennaio",
      "La fauna si disperde lontano dalle pozze d'acqua, e le strade sterrate della regione dello Zambesi e di parti del Kaokoland possono essere temporaneamente interrotte dalla pioggia",
    ],
  },
  {
    name: "Mesi di transizione",
    months: "Aprile-maggio e settembre-ottobre",
    summary:
      "Il miglior rapporto tra condizioni e affluenza in Namibia. Aprile-maggio: le piogge sono appena terminate, i paesaggi sono ancora verdi dopo la stagione umida, ma la folla e il caldo non sono ancora arrivati, e le strade si sono per lo più asciugate. Settembre-ottobre: siamo ancora in piena stagione secca per l'osservazione della fauna, probabilmente il periodo migliore dell'anno perché ottobre spinge le riserve d'acqua rimaste al limite, ma prima del reset delle tariffe di gennaio e con campi decisamente meno pieni rispetto ad agosto. L'insidia è il caldo di ottobre: le regioni desertiche come Sossusvlei e il Kaokoveld superano regolarmente i 35-38°C nel primo pomeriggio, motivo per cui alcune guide, mezzo scherzando, lo definiscono il mese più duro per stare all'aperto.",
    tradeoffs: [
      "Aprile-maggio: paesaggi verdi, strade in fase di asciugatura e tariffe ben al di sotto del picco della stagione secca",
      "Settembre-ottobre: qualità di osservazione della stagione secca senza i livelli di affluenza di agosto",
      "Ottobre porta caldo vero prima dell'arrivo delle piogge: pianificate i game drive al mattino presto e nel tardo pomeriggio",
    ],
  },
];

const MONTHS = [
  { m: "Gen", temp: "32-34° / 17-19°", rain: "La stagione delle piogge si intensifica", note: "Caldo, umido, frequenti temporali pomeridiani; paesaggi rigogliosi" },
  { m: "Feb", temp: "31-33° / 17-19°", rain: "Mese più piovoso", note: "A Windhoek cadono in media ~154mm; picco della stagione verde e del birdwatching" },
  { m: "Mar", temp: "30-32° / 16-18°", rain: "Piogge in calo", note: "Ancora umido, paesaggi al massimo del verde" },
  { m: "Apr", temp: "28-30° / 13-15°", rain: "Le piogge si fermano quasi del tutto", note: "Mese di transizione sottovalutato: verde, strade in asciugatura, poca folla" },
  { m: "Mag", temp: "25-27° / 8-10°", rain: "Quasi nulle", note: "Inizia la stagione secca; la vegetazione comincia a diradarsi" },
  { m: "Giu", temp: "22-24° / 5-7°", rain: "Periodo più secco", note: "Notti più fredde dell'anno; cieli più tersi per l'osservazione delle stelle" },
  { m: "Lug", temp: "22-24° / 5-7°", rain: "Mese più secco", note: "Massima limpidezza dell'aria; la concentrazione di fauna alle pozze aumenta" },
  { m: "Ago", temp: "25-27° / 8-10°", rain: "Praticamente nulle", note: "Alta stagione turistica; prenotate i campi di Etosha con largo anticipo" },
  { m: "Set", temp: "29-32° / 11-14°", rain: "Praticamente nulle", note: "Osservazione eccellente e meno affollata prima del caldo di ottobre" },
  { m: "Ott", temp: "33-36° / 16-18°", rain: "Ultimo mese secco", note: "Migliore attività alle pozze d'acqua dell'anno, ma davvero caldo nel pomeriggio" },
  { m: "Nov", temp: "33-35° / 18-19°", rain: "Primi temporali", note: "Iniziano le piogge; la fauna comincia a disperdersi, arrivano gli uccelli migratori" },
  { m: "Dic", temp: "31-33° / 17-19°", rain: "Inizia la stagione verde", note: "Caldo e umido; molto trafficato per le vacanze regionali verso la costa" },
];

export default function BestTimePageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guide", url: `${SITE_URL}/it/guides` },
          { name: "Periodo migliore per visitare la Namibia", url: `${SITE_URL}/it/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Periodo migliore per visitare la Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Non esiste un unico mese ideale: dipende da cosa avete come priorità, la{" "}
          <Link
            href="/it/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            fauna
          </Link>
          , la{" "}
          <Link
            href="/it/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            fotografia
          </Link>{" "}
          o evitare la folla. Ecco il compromesso onesto per ogni periodo dell&apos;anno.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Il nostro consiglio:</span> se si tratta
          di un primo viaggio incentrato sull&apos;osservazione della fauna, puntate a settembre o
          inizio ottobre. Otterrete le condizioni della stagione secca al loro massimo, prima che
          il vero caldo e la folla di agosto raggiungano entrambi il picco. Se paesaggi verdi a
          perdita d&apos;occhio e birdwatching contano più degli avvistamenti garantiti, febbraio
          e marzo offrono entrambi, al prezzo di più spostamenti tra un animale e l&apos;altro.
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
            Mese per mese
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Le temperature diurne / notturne indicate sono medie per la Namibia centrale e
            meridionale (zona di Windhoek). L&apos;entroterra desertico del Namib e i pan di
            Etosha sono di alcuni gradi più caldi nel pomeriggio durante i mesi di transizione, e
            più freddi di notte a giugno e luglio.
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
