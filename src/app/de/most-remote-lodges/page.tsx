import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibias abgelegenste Lodges";
const DESCRIPTION = "Eine Nacht an einem Ort ohne andere Gäste im Umkreis von hundert Kilometern: Namibias abgelegenste, am schwersten erreichbare Unterkünfte.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/most-remote-lodges",
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
      locale="de"
      category="remote"
      title="Namibias abgelegenste Lodges"
      intro="Das sind die Unterkünfte mit echter Distanz um sich herum: nur per Flug erreichbare Camps, Küstenabschnitte mit nur einer Lodge und Abstecher weit genug abseits der Hauptroute, dass die meisten Reiserouten sie komplett auslassen."
      path="/most-remote-lodges"
    />
  );
}
