"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { markAppReady } from "@/lib/appReady";

const LETTERS = ["Z", "Y", "B", "E", "R"];

/**
 * Pantalla de carga inicial: las letras de ZYBER suben una por una (efecto
 * máscara + desenfoque) mientras una barra se llena. Luego se desvanece.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false); // inicia el fundido de salida
  const [removed, setRemoved] = useState(false); // se quita del DOM

  // Bloquea el scroll y programa el ocultado.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const hideTimer = setTimeout(() => {
      setHidden(true);
      markAppReady(); // avisa a las animaciones que ya pueden entrar
    }, 2000);
    return () => clearTimeout(hideTimer);
  }, []);

  // Tras el fundido, libera el scroll y retira el overlay.
  useEffect(() => {
    if (!hidden) return;
    document.body.style.overflow = "";
    const removeTimer = setTimeout(() => setRemoved(true), 700);
    return () => clearTimeout(removeTimer);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "zyber-preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition-opacity duration-700",
        hidden && "pointer-events-none opacity-0",
      )}
    >
      <div className="flex gap-1 sm:gap-2">
        {LETTERS.map((letter, i) => (
          <span
            key={letter}
            className="inline-block overflow-hidden pb-[0.1em] leading-none"
          >
            <span
              className="preloader-letter heading-fill text-6xl font-extrabold tracking-tight sm:text-8xl"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>

      <div className="mt-10 h-[3px] w-44 overflow-hidden rounded-full bg-surface-2">
        <div className="preloader-bar h-full w-full rounded-full bg-primary" />
      </div>
    </div>
  );
}
