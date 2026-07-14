import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/logos/zyberlogo.png"
      >
        <source src="/img/video/videofondotecnologia.mp4" type="video/mp4" />
      </video>

      {/* Capas de oscurecimiento + glow teal */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/80 to-bg" />
      <div className="glow-primary absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2" />

      <div className="container-zyber relative z-10 py-28 text-center">
        <span className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-bright backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
          Agencia de tecnología, estrategia y creatividad
        </span>

        <h1 className="animate-fade-up mx-auto max-w-4xl text-4xl font-extrabold sm:text-6xl md:text-7xl">
          Impulsa tu negocio con{" "}
          <span className="text-gradient">Tecnología, Estrategia y Creatividad</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-7 max-w-2xl text-base text-content/85 sm:text-lg">
          {siteConfig.name} ayuda a las empresas a crecer en línea con estrategias de
          automatización digital basadas en datos y soluciones enfocadas en resultados.
          Deja de perder tiempo, dinero o clientes.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-[0_12px_40px_-10px_rgba(0,151,167,0.8)] transition-all hover:bg-primary-bright"
          >
            Cotiza ahora
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-8 py-4 text-base font-semibold text-content backdrop-blur-sm transition-colors hover:border-primary hover:text-primary-bright"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
