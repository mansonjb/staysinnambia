import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgeIt } from "@/lib/data.it";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Luna di miele in Namibia";
const DESCRIPTION =
  "I lodge e i campi più romantici per una luna di miele in Namibia: intimi, silenziosi e pensati per due.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-honeymoon",
    languages: { en: "/namibia-honeymoon", de: "/de/namibia-honeymoon", nl: "/nl/namibia-honeymoon", fr: "/fr/namibia-honeymoon", it: "/it/namibia-honeymoon" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HONEYMOON_SLUGS = ["little-kulala", "sossusvlei-desert-lodge", "doro-nawas-camp", "the-olive-exclusive"];

const ROMANTIC_ADD_ONS = [
  "Una cena privata tra le dune: la maggior parte dei lodge nell'area di Sossusvlei allestisce una tavola privata per una sera del soggiorno, sulla terrazza o direttamente sulla sabbia. Richiedetela al momento della prenotazione della camera, non all'arrivo, perché richiede tempo di preparazione e una prenotazione specifica del personale.",
  "Le camere a torre a cielo aperto del Le Mirage Resort & Spa: questa struttura in stile castello dispone di camere pensate per dormire sotto il cielo aperto, e i cieli tersi e privi di inquinamento luminoso del Namib-Naukluft rendono quasi ogni notte adatta a questa esperienza, quindi chiedete la notte con le previsioni meteo migliori del vostro soggiorno.",
  "Un'alba in mongolfiera sopra le dune: Namib Sky Balloon Safaris decolla da Sesriem quasi ogni mattina, meteo permettendo, e termina con una colazione a base di champagne nel deserto. Calcolate circa 3 ore e mezza dalla partenza al ritorno, da prenotare con largo anticipo perché i posti sono limitati.",
  "Spa e benessere di coppia: Le Mirage dispone di una spa completa in loco (la Mystique Spa), ma i menu dei lodge desertici namibiani restano più contenuti rispetto a quelli di una spa da resort. Verificate cosa è effettivamente offerto invece di presumere un elenco completo di trattamenti.",
];

export default function HoneymoonPageIt() {
  const lodges = HONEYMOON_SLUGS.map((slug) => getLodgeIt(slug)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guide", url: `${SITE_URL}/it/guides` },
          { name: "Luna di miele in Namibia", url: `${SITE_URL}/it/namibia-honeymoon` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Luna di miele in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Lo spazio e il silenzio della Namibia la rendono una destinazione sinceramente
          romantica: i cieli tersi del Namib-Naukluft, con il loro basso inquinamento luminoso,
          rendono l&apos;osservazione delle stelle un rituale quasi quotidiano invece di un colpo
          di fortuna, e gli altri ospiti più vicini si trovano spesso a notevole distanza. Questi
          quattro sono i lodge verso cui orienteremmo per primi una luna di miele: Le Mirage
          Resort &amp; Spa e il Sossusvlei Lodge per le dune, il Camp Kipwe come base tra i massi
          di granito vicino a Twyfelfontein se volete il paesaggio del Damaraland senza rinunciare
          al romanticismo, e The Olive Exclusive, un boutique hotel di sette suite a Windhoek con
          piscina privata per ogni suite, come tappa di apertura o chiusura prima o dopo il
          circuito safari piuttosto che una sosta al suo interno. Per l&apos;elenco completo,
          consultate la nostra{" "}
          <Link
            href="/it/best-romantic-stays"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            guida ai soggiorni più romantici
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lodges.map((lodge, i) => (
            <Reveal key={lodge!.slug} delay={i * 60}>
              <Link
                href={`/it/lodges/${lodge!.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={lodge!.image}
                    alt={lodge!.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge!.region}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl italic text-charcoal">{lodge!.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {lodge!.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <AvailabilityBadge label="Verifica disponibilità" />
                    <CardCTA label="Vedi il lodge" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Extra da prenotare in anticipo</h2>
        </Reveal>
        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {ROMANTIC_ADD_ONS.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-charcoal/10 pt-5 text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Sul ritmo del viaggio:</span> una luna
            di miele funziona meglio se più breve rispetto a un primo circuito in Namibia. Due
            lodge da tre o quattro notti ciascuno, invece del giro con cinque tappe in dieci
            giorni che spesso costruiscono i primi visitatori, lascia il tempo di rallentare
            davvero, e permette di aggiungere una cena privata o un volo in mongolfiera senza che
            il viaggio sembri una lista di cose da spuntare.
          </p>
        </Reveal>
      </section>
    </>
  );
}
