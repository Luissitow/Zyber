import { cn } from "@/lib/cn";

type Variant = "primary" | "neu" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";

const variants: Record<Variant, string> = {
  // CTA principal: teal sólido con glow
  primary:
    "bg-primary text-white shadow-[0_10px_34px_-10px_rgba(0,151,167,0.85)] hover:bg-primary-bright hover:shadow-[0_12px_40px_-8px_rgba(0,151,167,0.95)]",
  // Neumórfico oscuro con glow teal (estilo del original)
  neu: "bg-bg-deep text-content shadow-[var(--shadow-neu)] hover:text-primary-bright hover:shadow-[var(--shadow-neu-hover)]",
  // Contorno sutil
  ghost:
    "border border-line bg-surface/40 text-content backdrop-blur-sm hover:border-primary hover:text-primary-bright",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-base sm:text-lg",
};

/** Botón/enlace reutilizable con variantes y tamaños. */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  ...rest
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
}
