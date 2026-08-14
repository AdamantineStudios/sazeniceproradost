import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SITE, absoluteUrl, withBase } from "@/config";
import { BasketProvider } from "@/lib/basket";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `${SITE.name} — sazenice ze zahrady na Plzeňsku`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "cs_CZ",
    title: `${SITE.name} — sazenice ze zahrady na Plzeňsku`,
    description: SITE.description,
    images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: SITE.name }],
  },
  icons: {
    apple: withBase("/apple-icon.png"),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-dvh bg-cream font-sans text-ink antialiased">
        <script
          // Gate pro scroll-reveal animace: bez JS zůstane obsah viditelný
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Přeskočit na obsah
        </a>
        <BasketProvider>
          <Header />
          <main id="obsah">{children}</main>
          <Footer />
        </BasketProvider>
        <JsonLd />
      </body>
    </html>
  );
}
