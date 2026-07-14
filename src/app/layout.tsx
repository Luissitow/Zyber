import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} — Tecnología, Estrategia y Creatividad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "agencia digital",
    "desarrollo web",
    "marketing digital",
    "SEO",
    "branding",
    "chatbots",
    "transformación digital",
    "automatización",
    "México",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} — Impulsa tu negocio digital`,
    description: siteConfig.description,
    images: [
      {
        url: "/img/logos/zyberlogo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.legalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} — Impulsa tu negocio digital`,
    description: siteConfig.description,
    images: ["/img/logos/zyberlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/img/logos/zyberlogo.png`,
  description: siteConfig.description,
  slogan: siteConfig.slogan,
  email: siteConfig.email,
  telephone: "+527226448900",
  areaServed: "MX",
  sameAs: Object.values(siteConfig.social).filter((u) => u && u !== "#"),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+527226448900",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
