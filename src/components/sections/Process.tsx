import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps, siteConfig } from "@/lib/site";

export default function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden py-24">
      <div className="glow-teal absolute left-1/2 top-0 h-[520px] w-[940px] -translate-x-1/2 opacity-70" />
      <Container className="relative">
        <SectionHeading
          label="Cómo funciona"
          title="Pasos para tu éxito digital"
          description="Un proceso optimizado que asegura un crecimiento digital fluido y efectivo, con estrategias personalizadas para maximizar tu impacto."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} animation="up" delay={i * 110} as="li">
              <Card className="relative flex h-full flex-col items-start p-6">
                <span className="absolute right-5 top-4 text-5xl font-extrabold text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-gradient-to-br from-surface-2 to-bg-deep ring-1 ring-line">
                  <Icon
                    name={step.icon}
                    size={38}
                    strokeWidth={1.75}
                    className="text-primary-bright"
                  />
                </div>
                <h3 className="text-xl font-semibold text-heading">{step.title}</h3>
                <p className="mt-2 text-sm text-content/75">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </ol>

        <Reveal animation="up" className="mt-12 flex justify-center">
          <Button href={siteConfig.whatsappMessage} external size="lg">
            Comienza ahora
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
