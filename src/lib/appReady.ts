/**
 * Señal global "app lista": el Preloader la activa cuando termina, y las
 * animaciones de entrada (Reveal / WordReveal) esperan a que esté lista para
 * dispararse. Así lo visible arriba del fold anima cuando el preloader se va,
 * no detrás de él. Lo que está más abajo anima al hacer scroll con normalidad.
 */
let ready = false;
const listeners = new Set<() => void>();

export function markAppReady() {
  if (ready) return;
  ready = true;
  listeners.forEach((l) => l());
}

export function subscribeAppReady(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function getAppReadySnapshot() {
  return ready;
}

export function getAppReadyServerSnapshot() {
  return false;
}
