import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Les séjours les plus romantiques en Namibie";
const DESCRIPTION = "Terrasses privées, nuits à la belle étoile et lodges pensés pour deux : les séjours les plus romantiques de Namibie, pas de prix, pas de faux avis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-romantic-stays",
    languages: { en: "/best-romantic-stays", de: "/de/best-romantic-stays", nl: "/nl/best-romantic-stays", fr: "/fr/best-romantic-stays", it: "/it/best-romantic-stays" },
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
      category="romantic"
      title="Les séjours les plus romantiques en Namibie"
      intro="L'immensité et le silence de la Namibie en font une destination vraiment romantique : piscines privées, lits sous les étoiles sur le toit et lodges où les autres voyageurs se trouvent à une réelle distance."
      path="/best-romantic-stays"
    />
  );
}
