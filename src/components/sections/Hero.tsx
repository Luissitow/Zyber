import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Video de fondo (self-hosted) */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/img/video/videofondotecnologia.mp4" type="video/mp4" />
      </video>

      {/* Oscurecido + glow teal */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
      <div className="glow-teal absolute -top-32 left-1/2 h-[680px] w-[680px] -translate-x-1/2" />

      <Container className="relative z-10 py-32 text-center">
        <Reveal animation="down">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-bright backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
            Tecnología · Estrategia · Creatividad
          </span>
        </Reveal>

        <Reveal animation="left" delay={120}>
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
            <GradientText>Impulsa Tu Negocio con Tecnología, Estrategia y Creatividad</GradientText>
          </h1>
        </Reveal>

        <Reveal animation="right" delay={260}>
          <p className="mx-auto mt-8 max-w-2xl text-base text-content/85 sm:text-lg">
            {siteConfig.name} ayuda a las empresas a crecer en línea con estrategias de
            automatización digital basadas en datos y soluciones enfocadas en resultados.
            ¡Confía en nosotros para que dejes de perder tiempo, dinero o clientes!
          </p>
        </Reveal>

        <Reveal animation="up" delay={420}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.whatsappMessage} external size="lg" className="group">
              Cotiza ahora
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#servicios" variant="ghost" size="lg">
              Ver servicios
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
