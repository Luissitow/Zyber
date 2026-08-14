import type { MetadataRoute } from "next";
import { siteConfig, services } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // El sitio usa `trailingSlash: true`, así que la URL real de cada ruta lleva
  // barra final. Debe coincidir exacto con el canonical o Google recibe señales
  // contradictorias y gasta rastreo en redirecciones.
  const url = (path: string) => `${siteConfig.url}${path}/`;

  const staticRoutes = ["", "/portafolio", "/partner"].map((path) => ({
    url: url(path),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: url(`/servicios/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
