import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

/** Ancho máximo centrado y padding lateral consistente en todo el sitio. */
export default function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-6", className)}>
      {children}
    </Tag>
  );
}
