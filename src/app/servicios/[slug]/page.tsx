import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services, whyChooseUs, siteConfig } from "@/lib/site";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";

type Params = { slug: string };

// Genera una página estática por cada servicio en site.ts.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const url = `/servicios/${service.slug}`;
  // Sin esto, cada servicio hereda el Open Graph genérico del layout y al
  // compartirlo sale el título de la home en vez del del servicio.
  const title = `${service.title} | ${siteConfig.name}`;

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: service.summary,
      siteName: siteConfig.legalName,
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.summary,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const pageUrl = `${siteConfig.url}/servicios/${service.slug}/`;

  // Le dice a Google qué servicio concreto es esta página y dónde vive dentro
  // del sitio. Sin esto las 8 páginas se ven casi idénticas entre sí.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        description: service.summary,
        serviceType: service.title,
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.url,
        },
        areaServed: {
          "@type": "Place",
          name: siteConfig.location,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Qué incluye ${service.title}`,
          itemListElement: service.features.map((feature) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: feature },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${siteConfig.url}/#servicios` },
          { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={service.title}
        subtitle={service.summary}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/#servicios" },
          { label: service.title },
        ]}
      />

      {/* Qué incluye el servicio */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Qué incluye"
            title={`Nuestro servicio de ${service.title}`}
            description="Todo lo que necesitas, con estrategia y acompañamiento en cada paso."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <Reveal key={feature} animation="up" delay={(i % 2) * 90}>
                <Card className="flex h-full items-start gap-4 p-6">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 ring-1 ring-line">
                    <Check size={20} className="text-primary" />
                  </span>
                  <p className="text-content/85">{feature}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Por qué Zyber */}
      <section className="relative overflow-hidden py-20">
        <div className="glow-teal absolute left-1/2 top-0 h-[440px] w-[900px] -translate-x-1/2 opacity-70" />
        <Container className="relative">
          <SectionHeading label="¿Por qué Zyber?" title="Lo que nos diferencia" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((benefit, i) => (
              <Reveal key={benefit.title} animation="up" delay={(i % 4) * 80}>
                <Card hover className="h-full p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-surface-2 to-bg-deep ring-1 ring-line">
                    <Icon
                      name={benefit.icon}
                      size={28}
                      strokeWidth={1.75}
                      className="text-primary-bright"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-content/70">{benefit.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
