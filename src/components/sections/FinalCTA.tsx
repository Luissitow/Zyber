import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-24">
      <Container>
        <Reveal animation="zoom">
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface p-10 text-center md:p-16">
            <div className="glow-teal absolute inset-0" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-extrabold sm:text-4xl md:text-5xl">
                <GradientText>¿Listo para impulsar tu crecimiento digital?</GradientText>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-content/80">
                Transformamos negocios con soluciones digitales personalizadas: sitios web,
                posicionamiento SEO, automatización, redes sociales y mucho más.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={siteConfig.whatsappMessage} external size="lg" className="group">
                  Cotiza ahora
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href={siteConfig.phoneHref} variant="neu" size="lg">
                  Llámanos: {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
