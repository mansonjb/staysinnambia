import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibia senza 4x4";
const DESCRIPTION =
  "Non serve un 4x4 per gran parte di un viaggio in self-drive in Namibia: ecco cosa va bene con una normale berlina e dove il 4x4 diventa davvero necessario.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-without-4x4",
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4", fr: "/fr/namibia-without-4x4", it: "/it/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Da Windhoek a Sossusvlei (Sesriem) via la B1 e il passo di Remhoogte (C24, poi D1275/C19): asfalto fino a Rehoboth, poi ghiaia ben livellata per il resto del percorso. È l'itinerario che la maggior parte delle agenzie di noleggio consiglia ai conducenti in 2WD.",
  "Da Windhoek a Swakopmund via la B1/B2: interamente asfaltata, nessun tratto su ghiaia.",
  "Da Uis a Twyfelfontein nel Damaraland (C35 verso D2612): una strada su ghiaia molto frequentata, generalmente in buone condizioni, che le normali berline percorrono senza problemi con tempo asciutto, anche se l'ultimo tratto della D2612 diventa più sabbioso del resto.",
  "Da Windhoek al cancello sud di Etosha (Anderson) vicino a Okaukuejo: asfalto per gran parte del percorso, e le strade all'interno del parco stesso sono livellate e adatte a un normale 2WD nella stagione secca.",
  "La discesa verso i punti panoramici del Fish River Canyon vicino a Hobas, nel sud: asfalto e ghiaia mantenuta, nessun 4x4 necessario per i punti panoramici stessi.",
];

const NEED_4X4 = [
  "Gli ultimi circa 5 km di sabbia soffice tra il parcheggio 2x4 di Sossusvlei e le dune e Deadvlei stesse, ormai accessibili solo tramite navetta per tutti i veicoli, a prescindere dalla trazione (vedi sotto).",
  "Il passo di Spreetshoogte, il più ripido della Namibia (pendenze fino a circa 1:4,5), sull'itinerario panoramico alternativo verso Sossusvlei: riservato ai 4x4, con caravan e rimorchi vietati del tutto. Prendete invece il più dolce passo di Remhoogte se siete in 2WD.",
  "Gran parte della Skeleton Coast a nord di Torra Bay, oltre a lodge di punta del nord come Shipwreck Lodge, normalmente raggiungibili solo con piccoli aerei e non tramite alcuna strada.",
  "Le piste isolate del Kaokoveld, a nord del Damaraland, compresi gli itinerari verso Serra Cafema e la Hartmann Valley.",
  "Le strade di tipo \"D\" del Damaraland e del Kaokoland in generale: livellate ma più accidentate e più isolate delle strade di tipo \"C\", e davvero influenzate dalla pioggia nella stagione umida (circa da novembre ad aprile), quando anche piste in ghiaia solitamente in buone condizioni possono deteriorarsi rapidamente.",
];

export default function Without4x4PageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guides", url: `${SITE_URL}/it/guides` },
          { name: "La Namibia senza 4x4", url: `${SITE_URL}/it/namibia-without-4x4` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibia senza 4x4
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Un&apos;idea sbagliata comune: gran parte di un classico circuito in Namibia si percorre
          senza problemi con una normale berlina o crossover. Le strade &quot;C&quot; della
          Namibia, la rete principale di piste in ghiaia del paese (approfondita nella nostra{" "}
          <Link
            href="/it/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            guida al self-drive
          </Link>
          ), sono larghe, livellate e mantenute abbastanza bene da essere autorizzate in 2WD dalla
          maggior parte delle agenzie di noleggio, a una velocità ragionevole. Le strade
          &quot;D&quot;, più accidentate, sono un&apos;altra storia, e un 4x4 diventa davvero
          necessario per un insieme più ristretto e specifico di tratti, non per l&apos;intero viaggio.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Va bene con un&apos;auto normale</h2>
            <ul className="mt-4 space-y-2.5">
              {CAN_2WD.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Dove il 4x4 diventa davvero necessario</h2>
            <ul className="mt-4 space-y-2.5">
              {NEED_4X4.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Una via di mezzo:</span> a Sossusvlei,
            un servizio ufficiale di navetta/escursione copre l&apos;ultimo tratto di sabbia soffice
            fino alle dune e a Deadvlei, così potete parcheggiare un veicolo 2WD nel parcheggio
            pubblico e comunque raggiungerle senza noleggiare un 4x4 per l&apos;intero viaggio. Dal
            2026 non è più facoltativo, nemmeno per chi guida un 4x4: i veicoli privati sono ormai
            vietati su questi ultimi circa 5 km, e le indicazioni ufficiali del parco riportano
            circa 260 N$ per adulto e 130 N$ per bambino sotto i 12 anni, anche se il punto di
            partenza e le tariffe sono cambiati più di una volta negli ultimi anni. Confermate
            quindi l&apos;organizzazione attuale a Sesriem o con il vostro lodge prima di partire.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/it/itineraries"
            className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Vedi gli itinerari in self-drive
          </Link>
        </Reveal>
      </section>
    </>
  );
}
