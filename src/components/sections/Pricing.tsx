import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { plans, siteConfig, type Plan } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="planes" className="relative py-24">
      <Container>
        <SectionHeading
          label="Nuestros planes"
          title="Precios Flexibles para cada negocio"
          description="Encuentra la estrategia perfecta para tu negocio. Solicita una consulta gratuita."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} animation="up" delay={i * 120}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl p-8",
        plan.featured
          ? "border border-primary bg-surface shadow-[var(--shadow-glow)] lg:-translate-y-3"
          : "surface-neu",
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Más popular
        </span>
      )}

      <h3 className="text-xl font-semibold text-heading">{plan.name}</h3>
      <p className="mt-2 min-h-[60px] text-sm text-content/70">{plan.target}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-xs text-content/60">Desde</span>
        <span className="text-4xl font-extrabold text-heading">{plan.price}</span>
        {plan.period && <span className="mb-1 text-sm text-content/60">{plan.period}</span>}
      </div>

      <Button
        href={siteConfig.whatsappMessage}
        external
        variant={plan.featured ? "primary" : "neu"}
        className="mt-6 w-full"
      >
        Contratar plan
      </Button>

      <ul className="mt-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-content/85">
            <Check size={18} className="mt-0.5 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
