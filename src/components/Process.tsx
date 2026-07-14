import Image from "next/image";
import { processSteps, siteConfig } from "@/lib/site";

export default function Process() {
  return (
    <section id="proceso" className="relative py-24">
      <div className="glow-primary absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-60" />
      <div className="container-zyber relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Pasos para tu éxito digital
          </h2>
          <p className="mt-4 text-content/75">
            Un proceso optimizado que asegura un crecimiento digital fluido y efectivo,
            con estrategias personalizadas para maximizar tu impacto.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="card-neu relative flex flex-col items-start rounded-2xl p-6"
            >
              <span className="absolute right-5 top-4 text-5xl font-extrabold text-line/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-2 ring-1 ring-line">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm text-content/75">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary-bright"
          >
            Comienza ahora
          </a>
        </div>
      </div>
    </section>
  );
}
