import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container-zyber">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface p-10 text-center md:p-16">
          <div className="glow-primary absolute inset-0" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
              ¿Listo para impulsar tu crecimiento digital?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-content/80">
              Transformamos negocios con soluciones digitales personalizadas: sitios web,
              posicionamiento SEO, automatización, redes sociales y mucho más.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary-bright"
              >
                Cotiza ahora
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-semibold text-content transition-colors hover:border-primary hover:text-primary-bright"
              >
                Llámanos: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
