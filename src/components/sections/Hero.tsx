import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Video de fondo (bien visible, como en el original) */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/img/video/videofondotecnologia.mp4" type="video/mp4" />
      </video>

      {/* Oscurecido ligero: solo lo justo para legibilidad; el video se ve a través */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 py-20 sm:px-10 lg:px-14">
        <div className="max-w-[64rem] text-left">
          <h1 className="heading-fade-mask text-balance text-[2.5rem] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
            <WordReveal
              text="Impulsa Tu Negocio con Tecnología, Estrategia y Creatividad"
              wordClassName="heading-fill-glass"
              startDelay={150}
              stagger={70}
            />
          </h1>

          <Reveal animation="up" delay={900}>
            <p className="mt-6 max-w-xl text-base text-content/85 sm:text-lg">
              {siteConfig.name} ayuda a las empresas a crecer en línea con estrategias de
              automatización digital basadas en datos y soluciones enfocadas en resultados.
              ¡Confía en nosotros para que dejes de perder tiempo, dinero o clientes!
            </p>
          </Reveal>

          <Reveal animation="up" delay={1050}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* CTA neumórfico con flecha en círculo (como el original) */}
              <a
                href={siteConfig.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-full border border-line bg-bg-deep py-2 pl-7 pr-2 shadow-[var(--shadow-neu)] transition-all duration-300 hover:shadow-[var(--shadow-neu-hover)]"
              >
                <span className="text-base font-semibold text-heading">Cotiza ahora</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={18} />
                </span>
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-line bg-surface/30 px-8 py-4 text-base font-semibold text-content backdrop-blur-sm transition-colors hover:border-primary hover:text-primary-bright"
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
