import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const glacial = {
  variable: "--font-glacial",
};

export const metadata: Metadata = {
  title: {
    default: "Nature Pulp | Eco-Friendly Pulp & Sustainable Paper Solutions",
    template: "%s | Nature Pulp",
  },
  description:
    "Sustainable pulp and paper made from agricultural waste. Eco-friendly packaging, virgin pulp, recycled pulp & biodegradable paper solutions by Farm to Pulp Private Limited.",
  keywords: [
    "eco-friendly packaging",
    "paper from agri waste",
    "zero waste solutions",
    "biodegradable paper manufacturers",
    "sustainable pulp",
    "recycled pulp India",
    "Nature Pulp",
    "Farm to Pulp",
  ],
  authors: [{ name: "Farm to Pulp Private Limited" }],
  creator: "Nature Pulp",
  publisher: "Farm to Pulp Private Limited",
  metadataBase: new URL("https://naturepulp.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://naturepulp.com",
    siteName: "Nature Pulp",
    title: "Nature Pulp | Eco-Friendly Pulp & Sustainable Paper Solutions",
    description:
      "Sustainable pulp and paper made from agricultural waste. Eco-friendly packaging, virgin pulp, recycled pulp & biodegradable paper solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Pulp - Sustainable Paper Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Pulp | Eco-Friendly Pulp & Sustainable Paper Solutions",
    description:
      "Sustainable pulp and paper made from agricultural waste.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${glacial.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nature Pulp",
              legalName: "Farm to Pulp Private Limited",
              url: "https://naturepulp.com",
              logo: "https://naturepulp.com/logo.png",
              description:
                "Sustainable pulp and paper made from agricultural waste.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9798973570",
                contactType: "customer service",
                email: "contact@naturepulp.com",
              },
              sameAs: [
                "https://www.instagram.com/naturepulp",
                "https://www.linkedin.com/company/naturepulp",
                "https://twitter.com/naturepulp",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
