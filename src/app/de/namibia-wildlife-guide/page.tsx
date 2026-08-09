import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Tierwelt-Guide";
const DESCRIPTION =
  "Namibias Tierwelt nach Region: wüstenangepasste Elefanten, Spitzmaulnashörner, die Arten an Etoshas Wasserlöchern und die Küstentierwelt, die die meisten Reiserouten verpassen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide", fr: "/fr/namibia-wildlife-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_DE = [
  { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
  { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
  { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
  { title: "Namibia Selbstfahrer-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Namibia Visabestimmungen", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Wie viel kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/de/where-to-stay/etosha",
    animals:
      "Löwe, Elefant, Giraffe, Zebra, Springbock und die Schwarznasenimpala, eine Unterart, die außerhalb Etoshas und des nordwestlichen Kaokolands nirgendwo vorkommt. Die beleuchteten Wasserlöcher bei den Camps Okaukuejo und Halali bieten die verlässlichste Spitzmaulnashorn-Beobachtung des Landes: Nashörner erscheinen in der Trockenzeit (etwa Mai bis Oktober) typischerweise zwischen 19 und 23 Uhr, oft zusammen mit Elefant und Löwe am selben Wasserloch. Für Geparden sind die offenen Ebenen westlich von Okaukuejo und das Okondeka-Wasserloch die bessere Wahl als die östlichen Pfannen.",
  },
  {
    region: "Damaraland",
    href: "/de/where-to-stay/damaraland",
    animals:
      "Heimat des wüstenangepassten Elefanten, dessen Population sich von unter 30 Tieren in den 1980er Jahren auf heute etwa 600 bis 700 erholt hat, fast ausschließlich dank Namibias Gemeinde-Schutzgebietsmodell. Diese Elefanten durchstreifen Reviere von bis zu 700 km und kommen bis zu fünf Tage ohne Wasser aus, Anpassungen, die es fast nirgendwo sonst auf der Erde gibt. Das Torra-Schutzgebiet im Huab-Flusstal ist die verlässlichste Basis, um sie aufzuspüren. Weiter nördlich beherbergt die Palmwag-Konzession die weltweit größte frei lebende Population von Spitzmaulnashörnern, rund 200 Tiere, die täglich von den Rangern des Save the Rhino Trust überwacht werden. Sie zu sehen bedeutet eine ganztägige geführte Tracking-Tour zu Fuß mit einem lizenzierten Guide, kein Selbstfahrer-Stopp.",
  },
  {
    region: "Skeleton Coast",
    href: "/de/where-to-stay/skeleton-coast",
    animals:
      "Kolonien von Kap-Pelzrobben (allein Cape Cross beherbergt in der Hochsaison weit über 100.000 Tiere), Schabrackenhyänen, die den Gezeitensaum nach Aas absuchen, und, vor der Küste, Heaviside-Delfine, eine kleine Delfinart, die nur entlang der namibischen und südafrikanischen Küste vorkommt. Hier stehen Landschaft und Meeresleben stärker im Vordergrund als klassische Großwildbeobachtung.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/de/where-to-stay/caprivi",
    animals: (
      <>
        Namibias wasserreichste Tierwelt, konzentriert im Bwabwata-Nationalpark entlang der
        Flussauen von Kwando und Zambezi: Flusspferd, Krokodil, ansehnliche Elefanten- und
        Büffelherden, Rappen- und Pferdeantilope sowie eine der letzten verbliebenen
        Wildhundpopulationen Namibias, verfolgt vom Kwando Carnivore Project. Es ist zudem die
        beste Vogelbeobachtungsregion des Landes und der einzige Ort, an dem eine echte
        Big-Five-Sichtung, Büffel eingeschlossen, realistisch ist, ein völlig anderes Ökosystem als
        die Trockenland-Arten anderswo. Es ist außerdem die Region Namibias mit dem höheren
        Malariarisiko: Werfen Sie vor der Reise einen Blick in unseren{" "}
        <Link
          href="/de/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Guide zu Sicherheit und Gesundheit
        </Link>
        .
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/de/where-to-stay/sossusvlei",
    animals:
      "Oryx (Spießbock), die sich als Silhouette auf den Dünenkämmen abzeichnen, sind die typische Sichtung. Die jüngste Wildzählung des benachbarten NamibRand Nature Reserve verzeichnete auf seinen 172.000 Hektar rund 3.200 Oryx und 12.400 Springböcke. Schabrackenhyäne, Schabrackenschakal und Leopard kommen vor, sind aber wirklich scheu; NamibRand betreibt zudem ein aktives Wiederansiedlungsprogramm für Karakal und Gepard, beide sind also eine Zusatzsichtung, keine Erwartung.",
  },
];

const TIMING = [
  "Morgendämmerung (etwa 05:30 bis 08:00 Uhr): Raubtiere sind am aktivsten, das beste Zeitfenster für Löwen-, Geparden- und Leopardenbewegungen, bevor die Hitze einsetzt.",
  "Mittags: Wild konzentriert sich eher an Wasserlöchern, statt sich zu bewegen, besonders in der Trockenzeit von Mai bis Oktober. Bei Okaukuejo, Halali oder Olifantsrus zu parken und zu warten funktioniert besser, als auf der Suche nach Sichtungen herumzufahren.",
  "In der Dämmerung und den ersten Dunkelstunden an beleuchteten Camp-Wasserlöchern: Die Aktivität von Spitzmaulnashorn und Elefant erreicht ihren Höhepunkt, typischerweise zwischen 19 und 23 Uhr in der Trockenzeit.",
  "Regenzeit (November bis April): Wild verteilt sich weiträumig, sobald sich temporäre Pfannen füllen, Sichtungen werden also weniger vorhersehbar, dafür verbessern sich Vogelbeobachtung, Jungtiere und die grüne Landschaft deutlich.",
];

const FAQS = [
  {
    q: "Gibt es in Namibia die Big Five?",
    a: "Nicht überall, und nicht in der klassischen Version inklusive Büffel, die die meisten Safari-Werbetexte suggerieren. Etosha bietet zuverlässig Löwe, Elefant, Spitzmaulnashorn und Leopard; Büffel gehören nicht zu Etoshas Ökosystem. Der Bwabwata-Nationalpark in der Region Caprivi (Zambezi) ist der einzige Ort mit einer echten Chance auf alle fünf, Büffel eingeschlossen, zusammen mit Rappen- und Pferdeantilope und einem der letzten Wildhundrudel des Landes.",
  },
  {
    q: "Was unterscheidet Namibias Tierwelt von Kenia oder Tansania?",
    a: "Namibias Markenzeichen ist wüstenangepasste Tierwelt: Elefanten und Spitzmaulnashörner, die mit einem Bruchteil des Wassers auskommen, das ihre Verwandten in der Savanne brauchen. Damaralands Population wüstenangepasster Elefanten ist von unter 30 Tieren in den 1980er Jahren auf heute etwa 600 bis 700 gestiegen, und die Palmwag-Konzession beherbergt mit rund 200 Tieren die weltweit größte frei lebende Population wüstenangepasster Spitzmaulnashörner. Das ist eine andere, kargere Art der Tierbegegnung als die dichten Herden Ostafrikas, geprägt von seltenen Sichtungen statt von Masse.",
  },
  {
    q: "Wo sieht man in Namibia am besten Spitzmaulnashörner?",
    a: "Etoshas beleuchtete Wasserlöcher bei Okaukuejo und Halali bieten die verlässlichste Chance, Nashörner erscheinen in der Trockenzeit typischerweise zwischen 19 und 23 Uhr; dazu die Palmwag-Konzession in Damaraland für geführtes Rhino-Tracking zu Fuß bei Tieren, die vom Save the Rhino Trust überwacht werden, einer der wenigen Orte in Afrika, an dem das verantwortungsvoll angeboten wird, in Partnerschaft mit gemeindeeigenen Schutzgebieten.",
  },
  {
    q: "Kann man auf einer Selbstfahrer-Reise Tiere sehen, oder braucht man einen Guide?",
    a: "Etosha eignet sich wirklich hervorragend für Tierbeobachtung im Selbstfahrer-Modus: Die Wasserlöcher sind mit einem normalen Mietwagen erreichbar, und die Tierwelt konzentriert sich dort verlässlich, besonders in der Trockenzeit von Mai bis Oktober. Wüstenangepasstes Elefanten-Tracking im Torra-Schutzgebiet in Damaraland und Spitzmaulnashorn-Tracking in der Palmwag-Konzession erfordern beide einen spezialisierten, lizenzierten Guide; das sind keine Sichtungen vom Straßenrand aus.",
  },
  {
    q: "Wo kann ich in Namibia Geparden sehen?",
    a: "Namibia beherbergt die weltweit größte frei lebende Gepardenpopulation, geschätzt auf rund 1.500 Tiere, und Otjiwarongo, nahe dem Waterberg, wird oft die Gepardenhauptstadt der Welt genannt. Das dortige Forschungszentrum des Cheetah Conservation Fund bietet die verlässlichsten Sichtungen, ebenso die AfriCat Foundation in Okonjima. In Etosha stehen Ihre Chancen bei einer Pirschfahrt am besten auf den offenen Ebenen westlich von Okaukuejo und am Okondeka-Wasserloch, auch wenn Gepardensichtungen überall Glückssache bleiben und nicht garantiert sind.",
  },
  {
    q: "Wann ist die beste Jahreszeit für Tierbeobachtungen in Namibia?",
    a: "Die Trockenzeit, etwa von Mai bis Oktober, wenn knappes Wasser die Tiere dazu zwingt, sich an Wasserlöchern zu konzentrieren, und Sichtungen deutlich vorhersehbarer werden, besonders in Etosha. Die Regenzeit (November bis April) verteilt das Wild weiträumiger, sodass Sichtungen schwerer vorherzusagen sind, dafür ist sie das bessere Zeitfenster für Vogelbeobachtung, Jungtiere und grüne Landschaften.",
  },
];

export default function WildlifeGuidePageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Tierwelt-Guide", url: `${SITE_URL}/de/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibias Tierwelt: Was Sie sehen werden, und wo
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibias Tierwelt ist weit verstreut, nicht so konzentriert wie in Ostafrika. Welche
          Region Sie wählen, entscheidet, was Sie tatsächlich zu sehen bekommen.
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
                  Unterkünfte in {s.region} →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.animals}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Beste Tageszeit, nach Tierart</h2>
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
            Häufig gestellte Fragen
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
          {POPULAR_GUIDES_DE.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/de/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste Safari-Gebiete
          </Link>
        </Reveal>
      </section>
    </>
  );
}
