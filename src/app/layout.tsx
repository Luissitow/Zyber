import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig, services } from "@/lib/site";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/layout/WhatsappFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
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

// ProfessionalService en vez de Organization: describe a una agencia que da
// servicio en zonas concretas sin oficina abierta al público, que es el caso.
// `areaServed` es la señal que permite competir en búsquedas locales.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/img/logos/zyberlogo.png`,
  image: `${siteConfig.url}/img/logos/zyberlogo.png`,
  description: siteConfig.description,
  slogan: siteConfig.slogan,
  email: siteConfig.email,
  telephone: "+527226448900",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  // Refleja el horario declarado en Google Business Profile.
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  knowsLanguage: ["es-MX"],
  sameAs: Object.values(siteConfig.social).filter((u) => u && u !== "#"),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Zyber Company",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        url: `${siteConfig.url}/servicios/${s.slug}/`,
      },
    })),
  },
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
    <html lang="es-MX" className={jakarta.variable}>
      <head>
        {/* Sin JavaScript: no bloquear el sitio con el preloader ni ocultar contenido */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".zyber-preloader{display:none!important}.reveal{opacity:1!important;transform:none!important;filter:none!important}",
            }}
          />
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
