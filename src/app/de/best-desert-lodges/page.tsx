import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste Wüsten-Lodges in Namibia";
const DESCRIPTION = "Die besten Wüsten-Lodges entlang des Namib-Dünengürtels und darüber hinaus.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-desert-lodges",
    languages: { en: "/best-desert-lodges", de: "/de/best-desert-lodges", nl: "/nl/best-desert-lodges" },
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
      category="desert"
      title="Beste Wüsten-Lodges in Namibia"
      intro="Von Suiten mit Dünenblick in Sossusvlei bis zu Chalets in Schiffswrack-Form an der Skeleton Coast: Namibias eindrucksvollste Wüsten-Unterkünfte."
      path="/best-desert-lodges"
    />
  );
}
