import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibia Farmaufenthalte";
const DESCRIPTION = "Arbeitende Gehöfte, die in ruhige, unprätentiöse Gästehäuser umgewandelt wurden, in ganz Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-farm-stays",
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
      locale="de"
      category="farm"
      title="Namibia Farmaufenthalte"
      intro="Echte Arbeitsfarmen und Gehöfte, die zu Gästehäusern umgebaut wurden, sind eine der ruhigeren Unterkunftstraditionen Namibias. Wir recherchieren noch Unterkünfte, die unseren Ansprüchen genügen, bevor wir eine namentlich empfehlen."
      path="/namibia-farm-stays"
    />
  );
}
