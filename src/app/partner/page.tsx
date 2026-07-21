import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Clients from "@/components/sections/Clients";
import FinalCTA from "@/components/sections/FinalCTA";
import { whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alianzas & Partners",
  description:
    "Crecemos junto a las marcas que confían en Zyber. Conoce por qué aliarte con nosotros.",
  alternates: { canonical: "/partner" },
};

export default function PartnerPage() {
  return (
    <main>
      <PageHeader
        title="Alianzas & Partners"
        subtitle="Alianzas sólidas, resultados comprobados. Crecemos junto a las marcas que confían en nosotros."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Partners" }]}
      />

      <Clients />

      <section className="relative overflow-hidden py-24">
        <div className="glow-teal absolute left-1/2 top-0 h-[440px] w-[900px] -translate-x-1/2 opacity-70" />
        <Container className="relative">
          <SectionHeading
            label="Programa de partners"
            title="¿Por qué aliarte con Zyber?"
            description="Sumamos tecnología, estrategia y creatividad para hacer crecer proyectos juntos."
          />
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
