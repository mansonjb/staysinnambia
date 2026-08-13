import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "I soggiorni più romantici in Namibia";
const DESCRIPTION = "Terrazze private, notti sotto le stelle e lodge pensati per due: i soggiorni più romantici della Namibia, senza prezzi, senza recensioni false.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-romantic-stays",
    languages: { en: "/best-romantic-stays", de: "/de/best-romantic-stays", nl: "/nl/best-romantic-stays", fr: "/fr/best-romantic-stays", it: "/it/best-romantic-stays" },
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
      category="romantic"
      title="I soggiorni più romantici in Namibia"
      intro="Gli spazi immensi e il silenzio della Namibia la rendono una meta autenticamente romantica: piscine private, letti sul tetto sotto le stelle e lodge dove gli altri ospiti si trovano a una distanza reale."
      path="/best-romantic-stays"
    />
  );
}
