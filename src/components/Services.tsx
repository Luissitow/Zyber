import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { services, siteConfig } from "@/lib/site";

export default function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="container-zyber">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Soluciones digitales que dan resultados reales
          </h2>
          <p className="mt-4 text-content/75">
            Todo lo que tu negocio necesita para crecer en línea, bajo un mismo techo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.slug}
              className="card-neu group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-2 ring-1 ring-line">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-heading">{service.title}</h3>
              <p className="mt-2 text-sm text-content/70">{service.summary}</p>

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
            </article>
          ))}
        </div>

        {/* Banda de solución personalizada */}
        <div className="card-neu mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-heading">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="mt-1 text-content/75">
              Creamos estrategias adaptadas a tu negocio.
            </p>
          </div>
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary-bright"
          >
            Solicita una llamada gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
