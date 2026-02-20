import type { Metadata } from "next";
import { cormorant, inter } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MDNT Construction — Charpente & Menuiserie sur Mesure",
    template: "%s | MDNT Construction",
  },
  description:
    "Maxence Donate, charpentier-menuisier artisan. Charpente traditionnelle et moderne, menuiseries sur mesure, agencements. Devis gratuit — MDNT Construction.",
  keywords: [
    "charpentier",
    "menuisier",
    "charpente",
    "menuiserie",
    "sur mesure",
    "artisan",
    "charpente traditionnelle",
    "charpente moderne",
    "extension bois",
    "ossature bois",
    "agencement",
    "MDNT Construction",
    "Maxence Donate",
  ],
  authors: [{ name: "MDNT Construction" }],
  creator: "Agence Celexia",
  metadataBase: new URL("https://mdntconstruction.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mdntconstruction.fr",
    siteName: "MDNT Construction",
    title: "MDNT Construction — Charpente & Menuiserie sur Mesure",
    description:
      "Charpente et menuiserie artisanales. Charpente traditionnelle, extensions bois, menuiseries sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDNT Construction — Charpente & Menuiserie",
    description:
      "Charpentier-menuisier artisan. Charpente traditionnelle et moderne, menuiseries sur mesure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
