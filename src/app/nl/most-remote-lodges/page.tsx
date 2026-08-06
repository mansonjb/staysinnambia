import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibië's meest afgelegen lodges";
const DESCRIPTION = "Een nacht op een plek zonder andere gasten in een straal van honderd kilometer: Namibië's meest afgelegen, moeilijkst bereikbare verblijven.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/most-remote-lodges",
    languages: { en: "/most-remote-lodges", de: "/de/most-remote-lodges", nl: "/nl/most-remote-lodges" },
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
      locale="nl"
      category="remote"
      title="Namibië's meest afgelegen lodges"
      intro="Dit zijn de verblijven met echte afstand eromheen: alleen per vliegtuig bereikbare kampen, kustlijnen met slechts één lodge, en omwegen ver genoeg van de hoofdroute dat de meeste reisroutes ze volledig overslaan."
      path="/most-remote-lodges"
    />
  );
}
