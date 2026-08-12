"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { markAppReady } from "@/lib/appReady";

const LETTERS = ["Z", "Y", "B", "E", "R"];

/** Promesa de marca: se encadena frase a frase antes de revelar el logo. */
const PHRASES = [
  "Diseñado para vender.",
  "Construido para crecer.",
  "Hecho para durar.",
];

const TAGLINE = "Tu negocio, imparable.";

const PHRASE_MS = 560; // cada frase en pantalla (entrada + salida)
const BRAND_MS = 1150; // marca visible antes del fundido
const FADE_MS = 700;

const PHRASES_MS = PHRASES.length * PHRASE_MS;
const TOTAL_MS = PHRASES_MS + BRAND_MS;

/**
 * Pantalla de carga inicial: encadena las frases de venta y remata con las
 * letras de ZYBER subiendo una por una (efecto máscara + desenfoque) mientras
 * la barra se llena. Luego se desvanece.
 */
export default function Preloader() {
  const [step, setStep] = useState(0); // 0..PHRASES.length-1 = frase; PHRASES.length = marca
  const [hidden, setHidden] = useState(false); // inicia el fundido de salida
  const [removed, setRemoved] = useState(false); // se quita del DOM

  // Bloquea el scroll, encadena las frases y programa el ocultado.
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timers = PHRASES.map((_, i) =>
      setTimeout(() => setStep(i + 1), (i + 1) * PHRASE_MS),
    );
    timers.push(
      setTimeout(() => {
        setHidden(true);
        markAppReady(); // avisa a las animaciones que ya pueden entrar
      }, TOTAL_MS),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Tras el fundido, libera el scroll y retira el overlay.
  useEffect(() => {
    if (!hidden) return;
    document.body.style.overflow = "";
    const removeTimer = setTimeout(() => setRemoved(true), FADE_MS);
    return () => clearTimeout(removeTimer);
  }, [hidden]);

  if (removed) return null;

  const showBrand = step >= PHRASES.length;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "zyber-preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg px-6 transition-opacity duration-700",
        hidden && "pointer-events-none opacity-0",
      )}
    >
      {/* Altura fija: evita que la barra salte al cambiar de frase. */}
      <div className="flex min-h-[7.5rem] w-full max-w-4xl items-center justify-center sm:min-h-[10rem]">
        {showBrand ? (
          <div className="flex flex-col items-center">
            <div className="flex gap-1 sm:gap-2">
              {LETTERS.map((letter, i) => (
                <span
                  key={letter}
                  className="inline-block overflow-hidden pb-[0.1em] leading-none"
                >
                  <span
                    className="preloader-letter heading-fill text-6xl font-extrabold tracking-tight sm:text-8xl"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </div>

            <p className="preloader-tagline mt-4 text-sm font-medium tracking-[0.18em] text-content/70 uppercase sm:text-base">
              {TAGLINE}
            </p>
          </div>
        ) : (
          <p
            key={step}
            className="preloader-phrase heading-fill-glass text-balance text-center text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            style={{ animationDuration: `${PHRASE_MS}ms` }}
          >
            {PHRASES[step]}
          </p>
        )}
      </div>

      <div className="mt-10 h-[3px] w-44 overflow-hidden rounded-full bg-surface-2">
        <div
          className="preloader-bar h-full w-full rounded-full bg-primary"
          style={{ animationDuration: `${TOTAL_MS}ms` }}
        />
      </div>
    </div>
  );
}
