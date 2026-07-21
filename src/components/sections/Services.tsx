import { Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, siteConfig, type Service } from "@/lib/site";

export default function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <Container>
        <SectionHeading
          label="Nuestros servicios"
          title="Soluciones Digitales Que Dan Soluciones Reales"
          description="Todo lo que tu negocio necesita para crecer en línea, bajo un mismo techo."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} animation="up" delay={(i % 4) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Banda de solución personalizada */}
        <Reveal animation="up" className="mt-10 block">
          <Card className="flex flex-col items-center justify-between gap-6 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-semibold text-heading">
                ¿Necesitas una solución personalizada?
              </h3>
              <p className="mt-1 text-content/75">
                Creamos estrategias adaptadas a tu negocio.
              </p>
            </div>
            <Button
              href={siteConfig.whatsappMessage}
              external
              variant="neu"
              className="shrink-0"
            >
              Solicita una llamada gratuita
            </Button>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card hover className="flex h-full flex-col p-6">
      <div className="mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-gradient-to-br from-surface-2 to-bg-deep ring-1 ring-line">
        <Icon
          name={service.icon}
          size={38}
          strokeWidth={1.75}
          className="text-primary-bright"
        />
      </div>

      <h3 className="text-xl font-semibold text-heading">{service.title}</h3>
      <p className="mt-2 text-[15px] text-content/70">{service.summary}</p>

      <ul className="mt-4 flex-1 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-content/80">
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={siteConfig.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-bright transition-colors hover:text-white"
      >
        Cotiza ahora
        <ArrowUpRight size={16} />
      </a>
    </Card>
  );
}
