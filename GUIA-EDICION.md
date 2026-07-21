# 🛠️ Guía de edición de Zyber

Guía práctica para cambiar el contenido del sitio **sin romper nada**.
Regla de oro: **casi todo se edita en un solo archivo → [`src/lib/site.ts`](src/lib/site.ts)**.
Los componentes solo "dibujan" lo que hay en ese archivo.

> Al guardar cualquier archivo, si tienes `pnpm dev` corriendo, la página se
> **actualiza sola** en el navegador (recarga en caliente). No necesitas reiniciar nada.

---

## 1. Las cards de Servicios

**Dónde está el contenido:** `src/lib/site.ts` → arreglo `services`.
**Qué componente las dibuja:** `src/components/sections/Services.tsx` (la card se llama `ServiceCard`).

Cada card = **un objeto** dentro del arreglo. Por ejemplo:

```ts
{
  slug: "marketing-digital",              // id único (sin espacios ni acentos)
  title: "Marketing Digital",             // título de la card
  icon: "Megaphone",                      // icono (ver lista abajo)
  summary: "Campañas que atraen...",      // frase corta bajo el título
  features: [                             // viñetas con ✓
    "Campañas en redes: Facebook, Instagram...",
    "SEO para mejorar tu posicionamiento",
  ],
},
```

### ➕ Agregar una card
Copia un bloque `{ ... }` completo y pégalo dentro de `services` (entre los `[` y `]`),
separado por coma. Cambia sus valores. **Listo** — aparece sola.

### ➖ Quitar una card
Borra su bloque `{ ... }` completo (incluida la coma). Desaparece sola.

### 🔀 Reordenar
Mueve el bloque hacia arriba o abajo en el arreglo. El orden en pantalla = el orden en la lista.

### 📐 ¿Cómo se acomodan solas?
La grilla es **responsiva automática** (en `Services.tsx`):
`grid sm:grid-cols-2 lg:grid-cols-4`

| Pantalla | Columnas |
|---|---|
| Celular | 1 |
| Tablet | 2 |
| Escritorio | 4 |

Pongas las que pongas (6, 8, 9…), se reacomodan solas en filas. No tienes que tocar nada de layout.

---

## 2. Iconos disponibles

Los iconos son **vectoriales** (nítidos en cualquier tamaño). Se ponen por **nombre** en `site.ts`
(campo `icon`). Los nombres válidos están en `src/components/ui/Icon.tsx`:

`Megaphone` · `Code2` · `Cpu` · `Palette` · `MessagesSquare` · `BarChart3` ·
`Workflow` · `LayoutGrid` · `Search` · `PencilRuler` · `Rocket` · `TrendingUp`

### ¿Quieres otro icono?
1. Búscalo en **https://lucide.dev** (hay cientos).
2. Ábrelo en `src/components/ui/Icon.tsx`, agrégalo al `import` y al `iconRegistry`.
3. Úsalo por su nombre en `site.ts`.

> Nota: antes los iconos eran PNGs en `/img/servicios/`, pero varios eran **capturas de
> cards completas** (no iconos), por eso se veían mal. Ahora son vectoriales y consistentes.

---

## 3. Los 4 pasos del Proceso
Igual que los servicios, pero en el arreglo `processSteps` de `site.ts`
(componente: `src/components/sections/Process.tsx`). Cada paso tiene `title`, `description` e `icon`.

## 4. Planes / Precios
Arreglo `plans` en `site.ts` (componente: `src/components/sections/Pricing.tsx`).
- `featured: true` marca el plan destacado ("Más popular").
- `price`, `period`, `target` y `features` se editan directo.

## 5. Menú, contacto y redes
Todo en `site.ts`:
- `navLinks` → los enlaces del menú (y el submenú de "Servicios").
- `siteConfig.phoneDisplay` / `phoneHref` / `whatsapp` → teléfono y WhatsApp.
- `siteConfig.social` → **pon aquí tus URLs reales** de redes (hoy son `#`).
- `siteConfig.url` → **tu dominio real** antes de publicar (afecta al SEO).

---

## 6. Colores y tipografía (diseño global)
Archivo: `src/app/globals.css`, bloque `@theme`.
- `--color-primary` (teal `#0097a7`), `--color-bg`, `--color-surface`, etc.
- Cambias un color ahí y se aplica en **todo** el sitio.
- La fuente (Plus Jakarta Sans) se configura en `src/app/layout.tsx`.

## 7. Mapa de componentes (dónde vive cada cosa)
```
src/
  app/
    layout.tsx        → <head>, SEO, fuente, JSON-LD
    page.tsx          → arma la home (ordena las secciones)
    globals.css       → colores, tipografía, animaciones
  components/
    ui/               → piezas reutilizables (Button, Card, Icon, SectionHeading,
                        Reveal, WordReveal, Container, GradientText)
    layout/           → Header, Footer, WhatsappFloat
    sections/         → Hero, Services, Process, Pricing, Clients, FinalCTA
  lib/
    site.ts           → ⭐ TODO el contenido editable
```

### ¿Quieres quitar/reordenar una sección entera de la home?
Edita `src/app/page.tsx`: quita o mueve el componente (`<Services />`, `<Pricing />`, etc.).

---

## 8. Ver los cambios
```bash
pnpm dev      # desarrollo (recarga en caliente) → http://localhost:3000
pnpm build    # genera la carpeta build/ para subir a Hostinger
```
⚠️ **No corras `dev` y `build` al mismo tiempo** — se pisan la carpeta `.next` y da error.
