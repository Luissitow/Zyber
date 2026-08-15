import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { localPages, services, siteConfig } from "@/lib/site";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";

type Params = { ciudad: string };

// Una página estática por ciudad definida en site.ts.
export function generateStaticParams() {
  return localPages.map((p) => ({ ciudad: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { ciudad } = await params;
  const page = localPages.find((p) => p.slug === ciudad);
  if (!page) return {};

  const url = `/automatizacion/${page.slug}`;
  const title = `${page.title} | ${siteConfig.name}`;

  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: page.summary,
      siteName: siteConfig.legalName,
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.summary,
    },
  };
}

export default async function LocalPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { ciudad } = await params;
  const page = localPages.find((p) => p.slug === ciudad);
  if (!page) notFound();

  const pageUrl = `${siteConfig.url}/automatizacion/${page.slug}/`;
  const automation = services.find((s) => s.slug === "automatizacion-procesos");

  // El `areaServed` apuntando a una sola ciudad es lo que diferencia esta
  // página de la de servicio general y la hace competir en búsquedas locales.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.title,
        description: page.summary,
        serviceType: "Automatización de procesos",
        url: pageUrl,
        provider: {
          "@type": "ProfessionalService",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.legalName,
          url: siteConfig.url,
          telephone: "+527226448900",
        },
        areaServed: { "@type": "City", name: page.city },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: page.title, item: pageUrl },
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
        title={page.title}
        subtitle={page.summary}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: page.city }]}
      />

      <section className="pt-16">
        <Container>
          <Reveal animation="up">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-content/85">
              {page.intro}
            </p>
          </Reveal>

          <div className="mx-auto mt-16 max-w-3xl space-y-12">
            {page.sections.map((block, i) => (
              <Reveal key={block.heading} animation="up" delay={i * 80}>
                <article>
                  <h2 className="text-2xl font-bold text-heading sm:text-3xl">
                    {block.heading}
                  </h2>
                  <p className="mt-4 leading-relaxed text-content/75">
                    {block.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {automation && (
        <section className="py-20">
          <Container>
            <SectionHeading
              label="Qué automatizamos"
              title={`Automatización de procesos en ${page.city}`}
              description="Los puntos donde con más frecuencia se recupera tiempo."
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
              {automation.features.map((feature, i) => (
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
      )}

      <section className="py-20">
        <Container>
          <SectionHeading
            label="Preguntas frecuentes"
            title={`Dudas si estás en ${page.city}`}
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {page.faq.map((item, i) => (
              <Reveal key={item.q} animation="up" delay={i * 70}>
                <details className="group surface-neu rounded-2xl p-6">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-heading marker:content-none">
                    {item.q}
                  </summary>
                  <p className="mt-3 leading-relaxed text-content/75">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
