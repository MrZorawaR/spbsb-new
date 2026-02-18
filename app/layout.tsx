import type { Metadata, Viewport } from "next";
import { Zilla_Slab, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-zilla-slab",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#012E55",
};

export const metadata: Metadata = {
  title: "SPBSB — School of Planning and Business Studies in Business",
  description:
    "SPBSB is a premier business school with 70+ years of legacy, ranked #2 by IIRF. Offering MBA Full-Time, Executive MBA, and doctoral programmes with world-class faculty.",
  keywords: [
    "SPBSB",
    "business school",
    "MBA",
    "Executive MBA",
    "management studies",
    "top business school India",
  ],
  openGraph: {
    title: "SPBSB — Premier Business School",
    description:
      "70+ years of legacy in management education. Ranked #2 by IIRF with 12,000+ alumni worldwide.",
    type: "website",
    locale: "en_IN",
    siteName: "SPBSB",
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
    <html lang="en" className={`${zillaSlab.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
