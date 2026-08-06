import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste Safari-Lodges in Namibia";
const DESCRIPTION = "Die besten Safari-Lodges nahe Etosha und darüber hinaus: Lage am Wasserloch, Nachtfahrten und erfahrene Guides.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-safari-lodges",
    languages: { en: "/best-safari-lodges", de: "/de/best-safari-lodges", nl: "/nl/best-safari-lodges" },
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
      locale="de"
      category="safari"
      title="Beste Safari-Lodges in Namibia"
      intro="Lage am Wasserloch, Offroad-Tracking und erfahrene Guides: die Lodges, die wir für eine Reise mit Fokus auf Tierbeobachtung tatsächlich buchen würden."
      path="/best-safari-lodges"
    />
  );
}
