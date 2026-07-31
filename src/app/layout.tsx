import type { Metadata } from "next";
import { Geist, Instrument_Serif, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Namibia Stays — Extraordinary places to stay across Namibia",
    template: "%s — Namibia Stays",
  },
  description:
    "Independent guides to Namibia's lodges, camps and hotels — where to stay in Etosha, Sossusvlei, Damaraland, the Skeleton Coast and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Script id="stay22-letmeallez" strategy="afterInteractive">
          {`
            (function (s, t, a, y, twenty, two) {
              s.Stay22 = s.Stay22 || {};
              s.Stay22.params = { lmaID: '6a6d1d818b07e110fe9e5539' };
              twenty = t.createElement(a);
              two = t.getElementsByTagName(a)[0];
              twenty.async = 1;
              twenty.src = y;
              two.parentNode.insertBefore(twenty, two);
            })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');
          `}
        </Script>
      </body>
    </html>
  );
}
