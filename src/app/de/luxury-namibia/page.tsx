import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Luxus in Namibia";
const DESCRIPTION =
  "Wie eine Luxusreise durch Namibia tatsächlich aussieht: Fly-in-Rundreisen, private Guides und die erstklassigen Lodges, die den Aufpreis wert sind.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia", fr: "/fr/luxury-namibia", it: "/it/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "Fly-in statt Selbstfahrer",
    text: (
      <>
        Die besten Lodges erreicht man oft eher mit dem Kleinflugzeug als über die Straße. Fly-in-Camps
        in der Palmwag Concession und im Hoanib Valley sind gezielt auf das Tracking von Wüstenlöwen,
        Elefanten und Nashörnern ausgerichtet und normalerweise nur per Charterflug erreichbar. Lodges
        im NamibRand Nature Reserve bei Sossusvlei liegen typischerweise rund 45 Flugminuten entfernt,
        statt der etwa 5-stündigen Fahrt, die unser{" "}
        <Link
          href="/de/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          Selbstfahrer-Guide
        </Link>{" "}
        für dieselbe Schotterstrecke veranschlagt. Am anderen Ende des Spektrums liegt Serra Cafema
        allein am Kunene-Fluss im Hartmann Valley und ist nur per Kleinflugzeug zur eigenen Landepiste
        erreichbar: die wohl abgelegenste Lodge des Landes.
      </>
    ),
  },
  {
    title: "Private Reservate, nicht nur private Zimmer",
    text: "Luxus in Namibia bedeutet meist Zugang, nicht Fadenzahl. Die Ongava Reserve, direkt am Anderson Gate von Etosha gelegen, erlaubt Nachtfahrten und Offroad-Tracking, die im Nationalpark selbst nicht gestattet sind. In Damaraland beherbergt die Palmwag Concession eine der größten frei lebenden Spitzmaulnashorn-Populationen der Erde und ist einer der wenigen Orte Afrikas, an denen man sie zu Fuß mit einem Spezialisten-Guide statt vom Fahrzeug aus verfolgen kann.",
  },
  {
    title: "Weniger, dafür bessere Nächte",
    text: "Eine Luxus-Reiseroute ist oft kürzer als eine Budget-Selbstfahrer-Tour: drei oder vier Camps über 8-10 Tage, mit jeweils zwei vollen Nächten statt eines kurzen Zwischenstopps. Shipwreck Lodge an der Skeleton Coast erhielt einen Michelin Key in der ersten Global Michelin Keys Selection (2025) des Guides, ein guter Anhaltspunkt dafür, was „den Flug wert“ auf diesem Niveau bedeutet.",
  },
  {
    title: "Was der Aufpreis tatsächlich bringt",
    text: "Auf oberster Ebene bekommt jede Unterkunft meist ihren eigenen Guide und oft auch einen eigenen Koch, statt eines geteilten Game-Drive-Fahrzeugs und einer festen Speisekarte. Das gesamte Namib-Naukluft-Gebiet rund um Sossusvlei ist ein International Dark Sky Reserve (Gold-Status seit 2012), weshalb Sternenbeobachtung in vielen Lodges der Region fest zum Programm gehört, vom Dachfenster im Zimmer bis zur offenen Schlafplattform unter freiem Himmel, und nicht bloß eine klare Nacht ist, die man zufällig bemerkt. Eine private Heißluftballonfahrt bei Sonnenaufgang über den Dünen (Namib Sky Balloon Safaris, rund N$9.900/US$550 pro Person, mit anschließendem Champagnerfrühstück) ist genau die Art von einmaligem Luxus, die sich leicht in eine Luxusreiseroute einbauen lässt, bei einer Budgetreise aber schwer zu rechtfertigen ist.",
  },
];

export default function LuxuryPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Luxus in Namibia", url: `${SITE_URL}/de/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Luxus in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Eine Luxusreise durch Namibia sieht weniger nach Fünf-Sterne-Hotel aus als nach
          vollständigem, privatem Zugang zur Landschaft. Hier erfahren Sie, was sich tatsächlich
          ändert, wenn Sie mehr ausgeben: durch welche Tore Sie fahren dürfen, in wessen Fahrzeug
          Sie sitzen, und wie viele andere Gäste sich überhaupt in Ihrer Nähe aufhalten.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <MetaIcon name="compass" className="h-6 w-6 text-rust" />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{p.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/de/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Die besten Luxus-Lodges ansehen
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
