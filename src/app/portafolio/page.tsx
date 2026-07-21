import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Clientes y alianzas que confían en Zyber, y los resultados reales que hemos logrado juntos.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  return (
    <main>
      <PageHeader
        title="Portafolio"
        subtitle="Algunos de nuestros clientes y alianzas, y los resultados que hemos logrado juntos."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Portafolio" }]}
      />
      <Clients />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
