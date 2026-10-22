import type { Metadata } from "next";
import { Fraunces, Poppins, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// Subset of Google's Material Symbols Outlined with only the icons the site uses.
const materialSymbols = localFont({
  src: "./fonts/material-symbols-outlined.woff2",
  variable: "--font-material-symbols",
  weight: "100 700",
  display: "block",
  adjustFontFallback: false,
  fallback: [],
});

const description =
  "Creative technology studio engineering custom software, autonomous AI, and spatial 3D.";

export const metadata: Metadata = {
  title: "CRON Technologies — Creative Engineering Studio",
  description,
  openGraph: {
    title: "CRON Technologies — Creative Engineering Studio",
    description,
    siteName: "CRON Technologies",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark scroll-smooth ${fraunces.variable} ${poppins.variable} ${spaceGrotesk.variable} ${materialSymbols.variable}`}
    >
      <body className="bg-ink text-cream selection:bg-bronze selection:text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
