import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Les meilleurs lodges de luxe en Namibie";
const DESCRIPTION = "Les lodges namibiens les plus design et au service le plus soigné : pas de prix, pas de faux avis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-luxury-lodges",
    languages: { en: "/best-luxury-lodges", de: "/de/best-luxury-lodges", nl: "/nl/best-luxury-lodges", fr: "/fr/best-luxury-lodges" },
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
      category="luxury"
      title="Les meilleurs lodges de luxe en Namibie"
      intro="Des camps et lodges au design soigné offrant le plus haut niveau d'intimité et de service : choisis pour leur cadre et leur savoir-faire, pas pour qui nous paie le plus."
      path="/best-luxury-lodges"
    />
  );
}
