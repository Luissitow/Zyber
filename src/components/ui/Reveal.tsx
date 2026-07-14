"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Animation = "up" | "down" | "left" | "right" | "zoom";

type RevealProps = {
  children: React.ReactNode;
  /** Dirección de entrada, equivalente a fadeInUp/Down/Left/Right del original. */
  animation?: Animation;
  /** Retraso en ms (como el _animation_delay de Elementor). */
  delay?: number;
  className?: string;
  as?: React.ElementType;
  /** Solo anima una vez (por defecto true). */
  once?: boolean;
};

/**
 * Anima su contenido cuando entra en el viewport (IntersectionObserver).
 * Reemplaza las animaciones de entrada de Elementor de forma reutilizable.
 */
export default function Reveal({
  children,
  animation = "up",
  delay = 0,
  className,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", `reveal-${animation}`, visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
