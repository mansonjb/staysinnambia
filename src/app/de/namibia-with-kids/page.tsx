import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategoryDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia mit Kindern";
const DESCRIPTION =
  "Planungshinweise für eine Namibia-Familienreise: welche Lodges gut für Kinder geeignet sind und was Sie vor der Abreise wissen sollten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-with-kids",
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids", fr: "/fr/namibia-with-kids", it: "/it/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Das Mindestalter ist von Lodge zu Lodge unterschiedlich und nicht landesweit einheitlich geregelt: Mushara Bush Camp am östlichen Etosha-Tor nimmt Kinder jeden Alters auf geführten Pirschfahrten mit, während viele andere Camps eine Altersgrenze von etwa 6 bis 8 Jahren (manche sogar bis 12) für gemeinsame Pirschfahrzeuge setzen. Klären Sie die genaue Altersregelung direkt mit der Lodge, die Sie buchen, da sie sich auch zwischen Schwesterunterkünften unterscheiden kann.",
  "Das Malariarisiko ist real, aber regional begrenzt und nicht überall gleich. Entlang der Flüsse Kunene, Sambesi und Okavango, also im Caprivi-Streifen und im äußersten Nordwesten, besteht es ganzjährig, saisonal, etwa von November bis Juni, auch in Etosha und den übrigen nördlichen Regionen Namibias. Auf der klassischen Route Sossusvlei–Swakopmund–Damaraland weiter im Süden und Westen ist das Risiko meist gering bis nicht vorhanden. Holen Sie vor der Entscheidung über eine Malariaprophylaxe aktuelle, regionsspezifische Informationen bei einer reisemedizinischen Beratungsstelle ein.",
  "Selbstfahrer-Tage sind lang: Planen Sie Pausen ein und halten Sie einzelne Fahrstrecken mit kleinen Kindern unter 4 bis 5 Stunden. Von Windhoek bis zu den Etosha-Toren sind es rund 4,5 Stunden, und die Schotterpisten in Damaraland können pro Etappe 3 bis 4 Stunden dauern, planen Sie diese also als volle Fahrtage ein und nicht als Lückenfüller zwischen Aktivitäten.",
  "In Etoshas beleuchteten Wasserloch-Camps, innerhalb des Parks in Okaukuejo und Halali oder auf den angrenzenden privaten Reservaten (Ongava, Onguma), können Kinder abends von der sicheren Lodge aus beobachten, wie Elefanten, Nashörner und Löwen zum Trinken kommen, ganz ohne Pirschfahrt.",
  "Geführte Wanderungen und kulturelle Besuche, etwa die Felsgravuren von Twyfelfontein oder ein Himba-Dorfbesuch weiter im Norden, eignen sich meist für eine breitere Altersspanne als eine holprige, mehrstündige Pirschfahrt auf Tiersuche. Fragen Sie die Lodge bei der Buchung, welche Aktivitäten für das Alter Ihrer Kinder realistisch sind, nicht erst vor Ort.",
];

export default function KidsPageDe() {
  const familyLodges = getLodgesByCategoryDe("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Namibia mit Kindern", url: `${SITE_URL}/de/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia mit Kindern
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia eignet sich gut als Familien-Safariziel:{" "}
          <Link
            href="/de/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            Selbstfahren im eigenen Tempo
          </Link>{" "}
          bedeutet kürzere, flexible Fahrtage, und viele Lodges bieten miteinander verbundene
          Familienzimmer. Ein paar praktische Dinge, darunter{" "}
          <Link
            href="/de/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            wo Malaria ein Thema ist und wo nicht
          </Link>
          , sollten Sie vor der Buchung kennen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Lodges, die gut für Familien geeignet sind</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Mushara Lodge liegt nahe dem östlichen Etosha-Tor mit familienfreundlichen Suiten und
            einer Schwesterunterkunft in der Nähe, falls Sie mehr Platz brauchen. Desert Quiver
            Camp liegt direkt am Sesriem-Tor mit Selbstversorger-Chalets und Preisen, bei denen
            Kinder kostenlos übernachten, eine unkomplizierte, günstige Basis für einen
            Dünen-Tag mit der Familie. Villa Violet ist ein kleines, inhabergeführtes Gästehaus
            in Windhoek mit Selbstversorger-Option, ein ruhiger Ausgangspunkt vor oder nach der
            Rundreise. Canyon Lodge, nahe dem Fish River Canyon, ist rustikal, aber komfortabel
            und eine gute Basis, wenn Wandern oder der Süden Teil Ihrer Route ist.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/de/lodges/${lodge.slug}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-serif text-xl italic text-charcoal">{lodge.name}</p>
                  <p className="mt-1 text-[13px] text-charcoal/50">{lodge.region}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
