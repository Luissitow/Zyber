# Zyber

Sitio web de **Zyber Company** — agencia de tecnología, estrategia y creatividad.
Reconstruido en **Next.js 15 + TypeScript + Tailwind CSS v4** con exportación estática.

## Requisitos

- Node.js 20+ (probado con Node 24)
- pnpm

## Comandos

```bash
pnpm install      # instala dependencias
pnpm dev          # servidor de desarrollo -> http://localhost:3000
pnpm build        # genera el sitio estatico en la carpeta build/
pnpm preview      # sirve la carpeta build/ localmente para revisarla
```

## Despliegue

`pnpm build` genera una carpeta **`build/`** con HTML, CSS y JS estáticos.

- **Hostinger (hosting compartido):** sube el contenido de `build/` a `public_html/`.
- **AWS:** sube `build/` a S3 + CloudFront, o usa AWS Amplify apuntando al repo.

> La configuración usa `output: "export"` (Next.js estático), por lo que **no**
> requiere un servidor Node en producción.

## Estructura

```
src/
  app/           # rutas (App Router), layout, metadata, sitemap, robots
  components/    # componentes de UI (Header, Hero, Services, Pricing, ...)
  lib/site.ts    # configuracion central: marca, contacto, servicios, precios
public/img/      # assets propios (logos, iconos, video)
legacy/          # sitio anterior (WordPress/Elementor exportado) — solo referencia
```

## Antes de publicar

Edita `src/lib/site.ts`:

- `siteConfig.url` → tu dominio real (afecta canonical, sitemap y SEO).
- `siteConfig.social` → URLs reales de tus redes sociales.
- Verifica teléfono, WhatsApp y correo.
