import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Efecto de elevación al pasar el cursor. */
  hover?: boolean;
};

/** Tarjeta con superficie neumórfica reutilizable. */
export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "surface-neu rounded-2xl",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-neu-hover)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
