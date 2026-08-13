import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Les meilleurs lodges familiaux en Namibie";
const DESCRIPTION = "Des lodges adaptés aux familles dans toute la Namibie, choisis pour leur espace, leur confort et leur proximité.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-family-lodges",
    languages: { en: "/best-family-lodges", de: "/de/best-family-lodges", nl: "/nl/best-family-lodges", fr: "/fr/best-family-lodges", it: "/it/best-family-lodges" },
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
      locale="fr"
      category="family"
      title="Les meilleurs lodges familiaux en Namibie"
      intro="Chambres communicantes, logistique simplifiée et rythme plus doux : les lodges qui conviennent bien aux voyages en famille avec enfants."
      path="/best-family-lodges"
    />
  );
}
