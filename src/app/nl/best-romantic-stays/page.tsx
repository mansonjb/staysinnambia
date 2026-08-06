import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Meest romantische verblijven in Namibië";
const DESCRIPTION = "Privéterrassen, slaapplekken onder de sterrenhemel en lodges voor twee: Namibië's meest romantische verblijven, geen prijzen, geen nepbeoordelingen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-romantic-stays",
    languages: { en: "/best-romantic-stays", de: "/de/best-romantic-stays", nl: "/nl/best-romantic-stays" },
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
      category="romantic"
      title="Meest romantische verblijven in Namibië"
      intro="Namibië's ruimte en stilte maken het een oprecht romantische bestemming: privéplunge pools, sterrenbedden op het dak en lodges waar de dichtstbijzijnde andere gasten echt ver weg zijn."
      path="/best-romantic-stays"
    />
  );
}
