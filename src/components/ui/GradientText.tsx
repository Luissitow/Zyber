import { cn } from "@/lib/cn";

type GradientTextProps = {
  children: React.ReactNode;
  /** "silver" = degradado metálico (como el .text_fill original); "teal" = acento. */
  tone?: "silver" | "teal";
  className?: string;
};

/** Texto con degradado recortado, reutilizable en títulos. */
export default function GradientText({
  children,
  tone = "silver",
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(tone === "teal" ? "heading-fill-teal" : "heading-fill", className)}
    >
      {children}
    </span>
  );
}
