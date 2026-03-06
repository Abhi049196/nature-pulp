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
    default: "Jee Origin | Sustainable Pulp & Eco-Friendly Paper Solutions",
    template: "%s | Jee Origin",
  },
  description:
    "Jee Origin transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",

    icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
},

manifest: "/site.webmanifest",
  keywords: [
    "eco friendly pulp",
    "agricultural waste paper",
    "sustainable packaging",
    "biodegradable paper",
    "pulp manufacturer India",
    "sugarcane bagasse pulp",
    "recycled pulp",
    "Jee Origin",
  ],
  authors: [{ name: "Jee Origin Pvt Ltd" }],
  creator: "Jee Origin",
  publisher: "Jee Origin Pvt Ltd",
  metadataBase: new URL("https://www.jeeorigin.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.jeeorigin.com",
    siteName: "Jee Origin",
    title: "Jee Origin",
    description:
      "Jee Origin transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jee Origin - Sustainable Pulp & Eco-Friendly Paper Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jee Origin | Sustainable Pulp & Eco-Friendly Paper Solutions",
    description:
      "Jee Origin transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jee Origin",
              legalName: "Jee Origin Pvt Ltd",
              url: "https://www.jeeorigin.com",
              logo: "https://www.jeeorigin.com/logo.png",
              description:
                "Jee Origin transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9798973570",
                contactType: "customer service",
                email: "support@jeeorigin.com",
              },
              sameAs: [
                "https://www.instagram.com/jeeorigin",
                "https://www.linkedin.com/company/jeeorigin",
                "https://twitter.com/jeeorigin",
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
