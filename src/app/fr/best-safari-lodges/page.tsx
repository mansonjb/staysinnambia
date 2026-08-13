import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Les meilleurs lodges safari en Namibie";
const DESCRIPTION = "Les meilleurs lodges safari près d'Etosha et au-delà : vue sur points d'eau, sorties nocturnes et guides expérimentés.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-safari-lodges",
    languages: { en: "/best-safari-lodges", de: "/de/best-safari-lodges", nl: "/nl/best-safari-lodges", fr: "/fr/best-safari-lodges", it: "/it/best-safari-lodges" },
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
      category="safari"
      title="Les meilleurs lodges safari en Namibie"
      intro="Vue sur points d'eau, pistage hors piste et guides expérimentés : les lodges que nous réserverions vraiment pour un voyage axé sur la faune."
      path="/best-safari-lodges"
    />
  );
}
