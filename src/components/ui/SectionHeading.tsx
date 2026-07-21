import { cn } from "@/lib/cn";
import GradientText from "./GradientText";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Etiqueta pequeña tipo píldora (p. ej. "Nuestros servicios"). */
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Encabezado de sección reutilizable: etiqueta + título con degradado + texto. */
export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-4xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {label && (
        <Reveal animation="down" as="div">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
            {label}
          </span>
        </Reveal>
      )}
      <Reveal animation="up" delay={80}>
        <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
          <GradientText>{title}</GradientText>
        </h2>
      </Reveal>
      {description && (
        <Reveal animation="up" delay={160}>
          <p className={cn("mt-4 text-content/75", centered && "mx-auto")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
