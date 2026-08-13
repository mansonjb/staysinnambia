import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getRegionIt } from "@/lib/data.it";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Le migliori zone safari della Namibia";
const DESCRIPTION =
  "Etosha, Damaraland e Caprivi a confronto: quale regione safari namibiana si adatta davvero al vostro viaggio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-safari-areas",
    languages: { en: "/best-safari-areas", de: "/de/best-safari-areas", nl: "/nl/best-safari-areas", fr: "/fr/best-safari-areas", it: "/it/best-safari-areas" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COMPARISON = [
  {
    slug: "etosha",
    style: "Classico safari alle pozze d'acqua",
    wildlife:
      "La più affidabile delle tre regioni. Si stimano oltre 2.000 elefanti, alcune centinaia di leoni distribuiti in circa una ventina di gruppi, e una delle popolazioni di rinoceronte nero più importanti d'Africa, che si radunano attorno alle pozze d'acqua illuminate, soprattutto man mano che la stagione secca avanza.",
    pace: "Game drive strutturati da una base fissa, oppure osservazione alle pozze d'acqua illuminate senza lasciare il campo",
    bestMonths:
      "Da luglio a ottobre, quando le pozze stagionali si prosciugano e gli animali si radunano attorno alle pozze d'acqua permanenti; aspettatevi affollamento alle pozze più frequentate in alta stagione",
  },
  {
    slug: "damaraland",
    style: "Tracking, a piedi o in veicolo",
    wildlife:
      "Un'esperienza completamente diversa: elefanti adattati al deserto che percorrono fino a 700 km e possono restare giorni senza bere, e, con una guida specializzata dalla concessione di Palmwag, una delle più grandi popolazioni di rinoceronte nero in libertà rimaste sulla Terra, tracciata a piedi. Qui nulla è garantito come alle pozze d'acqua di Etosha: un avvistamento conta di più proprio perché non era previsto.",
    pace: "Più lento, guidato, basato sulle conservancy, spesso a piedi",
    bestMonths:
      "Da maggio a ottobre (stagione secca); la fauna si disperde maggiormente dopo la pioggia, riducendo le probabilità di successo nel tracking al di fuori di questo periodo",
  },
  {
    slug: "caprivi",
    style: "Fauna di fiume e pianura alluvionale",
    wildlife:
      "Ippopotami e coccodrilli nel sistema fluviale del Kwando-Linyanti, grandi mandrie di elefanti e bufali che attraversano il Parco Nazionale di Bwabwata, e quasi 450 specie di uccelli censite: un ecosistema autenticamente diverso dal circuito desertico più a sud, non una versione minore di esso.",
    pace: "Escursioni in barca ad affiancare i game drive",
    bestMonths:
      "Da aprile a settembre, quando la stagione secca concentra la fauna lungo i fiumi e le pianure alluvionali e le condizioni di guida sono ottimali",
  },
];

export default function SafariAreasPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guides", url: `${SITE_URL}/it/guides` },
          { name: "Le migliori zone safari della Namibia", url: `${SITE_URL}/it/best-safari-areas` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Le migliori zone safari della Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          &quot;Safari&quot; non significa la stessa cosa in queste tre regioni: Etosha è densità e
          affidabilità, il Damaraland è il brivido particolare di tracciare specie adattate al
          deserto che non sono recintate da nessuna parte, e la Caprivi Strip è quasi un altro
          paese, un ecosistema di fiumi e pianure alluvionali che non ha quasi nulla in comune con
          il circuito desertico più a sud. Consultate la nostra{" "}
          <Link
            href="/it/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            guida alla fauna
          </Link>{" "}
          per sapere cosa aspettarvi da ciascuna. Nessuna è in assoluto la migliore: rispondono a
          priorità diverse.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {COMPARISON.map((c, i) => {
            const region = getRegionIt(c.slug);
            if (!region) return null;
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <h2 className="font-serif text-2xl italic text-charcoal">{region.name}</h2>
                  <dl className="mt-4 space-y-4 border-t border-charcoal/10 pt-4">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Stile di safari
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.style}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Fauna
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.wildlife}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Ritmo
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.pace}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Mesi migliori
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.bestMonths}</dd>
                    </div>
                  </dl>
                  <Link
                    href={`/it/where-to-stay/${region.slug}`}
                    className="group mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4 text-[13px] font-medium text-charcoal/60 hover:text-rust"
                  >
                    Dove alloggiare a {region.name}
                    <CardArrow />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">La nostra raccomandazione:</span> se
            potete sceglierne solo una, Etosha resta la scelta più sicura per un primo safari,
            soprattutto tra agosto e ottobre, quando l&apos;attività alle pozze d&apos;acqua è al
            massimo. Il Damaraland trova il suo posto in un viaggio più lungo, come la regione che
            ricompensa la pazienza con qualcosa che Etosha non può offrire: fauna adattata al
            deserto in totale libertà, senza un recinto in vista. La Caprivi Strip vale la pena
            aggiungerla solo se proseguite verso il Delta dell&apos;Okavango o Chobe in Botswana,
            o se cercate specificamente il birdwatching e la fauna fluviale: come tappa isolata in
            un viaggio breve dedicato solo alla Namibia, il tragitto di circa 12 ore (la maggior
            parte delle persone preferisce volare fino a Katima Mulilo) è difficile da
            giustificare.
          </p>
        </Reveal>
      </section>
    </>
  );
}
