import {
  Megaphone,
  Code2,
  Cpu,
  Palette,
  MessagesSquare,
  BarChart3,
  Workflow,
  LayoutGrid,
  Search,
  PencilRuler,
  Rocket,
  TrendingUp,
  type LucideProps,
} from "lucide-react";

/**
 * Registro de iconos disponibles (vectoriales, nítidos y responsivos).
 * Para usar uno, pon su NOMBRE (la clave) en src/lib/site.ts.
 * ¿Quieres otro? Búscalo en https://lucide.dev, impórtalo aquí y agrégalo al registro.
 */
export const iconRegistry = {
  Megaphone, // marketing
  Code2, // desarrollo web
  Cpu, // tecnología / IA
  Palette, // branding / diseño
  MessagesSquare, // experiencia / chatbots
  BarChart3, // datos / analítica
  Workflow, // transformación / automatización
  LayoutGrid, // servicios varios
  Search, // análisis / investigación
  PencilRuler, // estrategia / planificación
  Rocket, // ejecución / lanzamiento
  TrendingUp, // resultados / crecimiento
} as const;

export type IconName = keyof typeof iconRegistry;

type IconProps = LucideProps & { name: IconName };

/** Renderiza un icono del registro por su nombre. */
export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconRegistry[name];
  return <LucideIcon {...props} />;
}
