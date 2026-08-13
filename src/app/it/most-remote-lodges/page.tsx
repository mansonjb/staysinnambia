import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "I lodge più remoti della Namibia";
const DESCRIPTION = "Una notte in un luogo senza altri ospiti nel raggio di cento chilometri: i soggiorni più remoti e difficili da raggiungere della Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/most-remote-lodges",
    languages: { en: "/most-remote-lodges", de: "/de/most-remote-lodges", nl: "/nl/most-remote-lodges", fr: "/fr/most-remote-lodges", it: "/it/most-remote-lodges" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      locale="it"
      category="remote"
      title="I lodge più remoti della Namibia"
      intro="Questi sono soggiorni circondati da una distanza reale: camp raggiungibili solo in aereo, coste con un unico lodge e deviazioni così lontane dal circuito principale che la maggior parte degli itinerari le evita del tutto."
      path="/most-remote-lodges"
    />
  );
}
