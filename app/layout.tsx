import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Nunito,
  Spectral,
  Cinzel,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import UnderConstruction from "@/components/UnderConstruction";
import { UNDER_CONSTRUCTION } from "@/lib/site";
import { headers } from "next/headers";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rhythmsofkuchipudi.com"),
  title: "Rhythms of Kuchipudi | Where Every Step Tells a Story",
  description:
    "A classical Kuchipudi dance school carrying forward a 300-year-old living tradition with devotion, discipline, and joy.",
  // Keep the holding page out of search results; lifts automatically at launch.
  ...(UNDER_CONSTRUCTION ? { robots: { index: false, follow: false } } : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The admin area (gated by proxy.ts) bypasses the under-construction page.
  const isAdminArea = (await headers()).get("x-admin-area") === "1";
  const showConstruction = UNDER_CONSTRUCTION && !isAdminArea;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${nunito.variable} ${spectral.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        {/* Apply the saved (or system) theme before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-deep-navy">
        {showConstruction ? (
          <UnderConstruction />
        ) : (
          <>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFAB />
          </>
        )}
      </body>
    </html>
  );
}
