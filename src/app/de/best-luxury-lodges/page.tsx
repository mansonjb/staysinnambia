import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste Luxus-Lodges in Namibia";
const DESCRIPTION = "Namibias designorientierteste Lodges mit dem höchsten Serviceniveau: keine Preise, keine gefälschten Bewertungen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-luxury-lodges",
    languages: { en: "/best-luxury-lodges", de: "/de/best-luxury-lodges", nl: "/nl/best-luxury-lodges" },
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
      category="luxury"
      title="Beste Luxus-Lodges in Namibia"
      intro="Designorientierte Camps und Lodges mit höchstem Maß an Privatsphäre und Service: ausgewählt nach Lage und Handwerk, nicht danach, wer uns am meisten zahlt."
      path="/best-luxury-lodges"
    />
  );
}
