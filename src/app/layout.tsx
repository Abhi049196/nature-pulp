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
    default: "Nature Pulp | Sustainable Pulp & Eco-Friendly Paper Solutions",
    template: "%s | Nature Pulp",
  },
  description:
    "Nature Pulp transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
  keywords: [
    "eco friendly pulp",
    "agricultural waste paper",
    "sustainable packaging",
    "biodegradable paper",
    "pulp manufacturer India",
    "sugarcane bagasse pulp",
    "recycled pulp",
    "Nature Pulp",
  ],
  authors: [{ name: "Farm to Pulp Private Limited" }],
  creator: "Nature Pulp",
  publisher: "Farm to Pulp Private Limited",
  metadataBase: new URL("https://www.naturepulp.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.naturepulp.com",
    siteName: "Nature Pulp",
    title: "Nature Pulp",
    description:
      "Nature Pulp transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Pulp - Sustainable Pulp & Eco-Friendly Paper Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Pulp | Sustainable Pulp & Eco-Friendly Paper Solutions",
    description:
      "Nature Pulp transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
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
              url: "https://www.naturepulp.com",
              logo: "https://www.naturepulp.com/logo.png",
              description:
                "Nature Pulp transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
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
