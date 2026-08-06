import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste luxe lodges in Namibië";
const DESCRIPTION = "Namibië's meest designgerichte lodges met het hoogste serviceniveau: geen prijzen, geen nepbeoordelingen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-luxury-lodges",
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
      locale="nl"
      category="luxury"
      title="Beste luxe lodges in Namibië"
      intro="Designgerichte kampen en lodges met het hoogste niveau van privacy en service: gekozen op ligging en vakmanschap, niet op wie ons het meest betaalt."
      path="/best-luxury-lodges"
    />
  );
}
