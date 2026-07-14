import { Check } from "lucide-react";
import { plans, siteConfig } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="planes" className="relative py-24">
      <div className="container-zyber">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros planes
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Precios flexibles para cada negocio
          </h2>
          <p className="mt-4 text-content/75">
            Encuentra la estrategia perfecta para tu negocio. Solicita una consulta gratuita.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-transform ${
                plan.featured
                  ? "border border-primary bg-surface shadow-[var(--shadow-glow)] lg:-translate-y-3"
                  : "card-neu"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Más popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-heading">{plan.name}</h3>
              <p className="mt-2 min-h-[48px] text-sm text-content/70">{plan.target}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-xs text-content/60">Desde</span>
                <span className="text-4xl font-extrabold text-heading">{plan.price}</span>
                {plan.period && (
                  <span className="mb-1 text-sm text-content/60">{plan.period}</span>
                )}
              </div>

              <a
                href={siteConfig.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 rounded-full px-6 py-3.5 text-center font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary-bright"
                    : "border border-line text-content hover:border-primary hover:text-primary-bright"
                }`}
              >
                Contratar plan
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-content/85">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
