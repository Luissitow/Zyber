"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import {
  subscribeAppReady,
  getAppReadySnapshot,
  getAppReadyServerSnapshot,
} from "@/lib/appReady";

type WordRevealProps = {
  text: string;
  className?: string;
  /** Clase aplicada a cada palabra (p. ej. degradado). */
  wordClassName?: string;
  /** Retraso inicial en ms antes de la primera palabra. */
  startDelay?: number;
  /** Separación entre palabras en ms. */
  stagger?: number;
  as?: React.ElementType;
};

/**
 * Revela un texto palabra por palabra: cada palabra sube, aparece y se
 * desenfoca de forma escalonada. Se dispara al entrar en el viewport y cuando
 * la app está lista (preloader terminado).
 */
export default function WordReveal({
  text,
  className,
  wordClassName,
  startDelay = 120,
  stagger = 60,
  as: Tag = "span",
}: WordRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const ready = useSyncExternalStore(
    subscribeAppReady,
    getAppReadySnapshot,
    getAppReadyServerSnapshot,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const active = ready && inView;
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className={cn("inline-block will-change-transform", wordClassName)}
          style={{
            marginInlineEnd: "0.26em",
            // Espacio inferior para que el buffer del filtro no recorte las
            // colas de g, y, p, j (descendentes).
            paddingBottom: "0.18em",
            transform: active ? "translateY(0)" : "translateY(0.6em)",
            opacity: active ? 1 : 0,
            filter: active ? "blur(0)" : "blur(12px)",
            transition:
              "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease, filter 0.7s ease",
            transitionDelay: `${startDelay + i * stagger}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
