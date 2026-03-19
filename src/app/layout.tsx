import type { Metadata } from "next";
import Script from "next/script";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
  preload: true,
});

const glacial = {
  variable: "--font-glacial",
};

export const metadata: Metadata = {
  title: {
    default: "JEEORIGIN PVT LTD",
    template: "%s | JEEORIGIN PVT LTD",
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
  metadataBase: new URL("https://jeeorigin.com"),
  alternates: {
    canonical: "https://jeeorigin.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeeorigin.com",
    siteName: "Jee Origin",
    title: "JEEORIGIN PVT LTD",
    description:
      "Jee Origin transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
    images: [
      {
        url: "/jeeorigin-og.png",
        width: 1200,
        height: 630,
        alt: "JEE ORIGIN - Sustainable Pulp & Eco-Friendly Paper Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEEORIGIN PVT LTD",
    description:
      "Jee Origin transforms agricultural waste into premium pulp, compostable packaging, and sustainable paper products for global industries.",
    images: ["/jeeorigin-og.png"],
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
        <title>JEEORIGIN PVT LTD</title>
        <meta name="title" content="JEEORIGIN PVT LTD" />
        <meta property="og:title" content="JEEORIGIN PVT LTD" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jeeorigin.com" />
        <link rel="canonical" href="https://jeeorigin.com" />

        {/* DNS Prefetch & Preconnect for third-party origins */}
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/GlacialIndifference-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GlacialIndifference-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Preload LCP hero image */}
        <link
          rel="preload"
          href="/assets/hero.webp"
          as="image"
          type="image/webp"
        />

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
                "@id": "https://www.jeeorigin.com/#address",
                "streetAddress": "H. No. 1198, Sector 16, Near Z Park",
                "addressLocality": "Haryana",
                "postalCode": "121002",
                "addressCountry": "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9798973570",
                contactType: "customer service",
                email: "support@jeeorigin.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/nature-pulp/",
                "https://www.instagram.com/jeeorigin?igsh=MWs4OWhyOHd1czloNg%3D%3D&utm_source=qr",
                "https://www.facebook.com/share/18BUifjPXL/?mibextid=wwXIfr",
                "https://x.com/JeeOrigin",
                "https://youtube.com/@jeeorigin?si=Hff9hzqBdbh_Gpoa"
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YPC5MR008P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YPC5MR008P');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
