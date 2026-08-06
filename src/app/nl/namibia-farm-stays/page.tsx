import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibië boerderijverblijven";
const DESCRIPTION = "Werkende boerderijen omgebouwd tot rustige, ongekunstelde gastenhuizen in heel Namibië.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-farm-stays",
    languages: { en: "/namibia-farm-stays", de: "/de/namibia-farm-stays", nl: "/nl/namibia-farm-stays" },
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
      category="farm"
      title="Namibië boerderijverblijven"
      intro="Echte werkboerderijen die zijn omgebouwd tot gastenhuizen zijn een van Namibië's rustigere accommodatietradities. We onderzoeken nog verblijven die aan onze norm voldoen voordat we er een met naam aanbevelen."
      path="/namibia-farm-stays"
    />
  );
}
