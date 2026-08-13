import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Glamping in Namibia";
const DESCRIPTION = "Il comfort sotto la tela, senza rinunciare a un vero letto e a un bagno: i migliori campi tendati della Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-glamping",
    languages: { en: "/namibia-glamping", de: "/de/namibia-glamping", nl: "/nl/namibia-glamping", fr: "/fr/namibia-glamping", it: "/it/namibia-glamping" },
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
      locale="it"
      category="glamping"
      title="Glamping in Namibia: i migliori campi tendati"
      intro="Pareti di tela, letti veri e bagni privati: questi campi tendati vi avvicinano al paesaggio e ai suoi suoni notturni, senza rinunciare al comfort."
      path="/namibia-glamping"
    />
  );
}
