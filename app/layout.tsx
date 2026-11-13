import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "Aamod Sathe", template: "%s — Aamod Sathe" },
  description:
    "Data & AI leader with 20+ years at Google, Meta, PayPal, and Vanta. Builder of AI products.",
  authors: [{ name: "Aamod Sathe" }],
  metadataBase: new URL("https://aamodsathe.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aamodsathe.com",
    siteName: "Aamod Sathe",
    title: "Aamod Sathe — Data & AI Leader",
    description:
      "Data & AI leader with 20+ years at Google, Meta, PayPal, and Vanta. Builder of AI products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamod Sathe — Data & AI Leader",
    description:
      "Data & AI leader with 20+ years at Google, Meta, PayPal, and Vanta.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
