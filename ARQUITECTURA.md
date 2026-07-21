# 🏗️ Arquitectura del front (Next.js App Router)

Guía pensada para quien ya sabe **React clásico** (Create React App / Vite:
`index.html` → montas `<App>` → dentro pones páginas y componentes).
Aquí usamos **Next.js 15 con App Router**, que cambia algunas piezas.

---

## 1. Tu modelo mental vs este

| React clásico (CRA/Vite) | Next.js App Router (este proyecto) |
|---|---|
| `public/index.html` con `<div id="root">` | **No existe.** Lo genera Next. El "cascarón" es `src/app/layout.tsx` |
| `main.jsx` monta `<App/>` en el root | Next monta todo automáticamente. No hay `ReactDOM.render` |
| `<App/>` con las rutas (react-router) | **Rutas por carpetas**: cada `page.tsx` es una ruta |
| `<Routes><Route path="/services">` | Carpeta `app/servicios/page.tsx` → ruta `/servicios` |
| Todo corre en el navegador (client) | Por defecto corre en **servidor/build** (mejor SEO) |
| Componentes en `src/components` | Igual: `src/components` (aquí en `ui/`, `layout/`, `sections/`) |

**La idea clave:** en CRA TÚ armas el HTML y montas React. En Next.js, **Next arma el HTML por ti** a partir de tus archivos, y decide qué se renderiza en el servidor y qué en el navegador.

---

## 2. ¿Dónde está el `index.html`?

No hay uno que edites a mano. Su equivalente es **[`src/app/layout.tsx`](src/app/layout.tsx)**:
es el "cascarón" que envuelve TODAS las páginas. Ahí van `<html>`, `<body>`, el `<head>`
(metadata/SEO), la fuente, el JSON-LD y el `<Preloader/>`.

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>
        <Preloader />
        {children}   {/* ← aquí se inserta la página actual */}
      </body>
    </html>
  );
}
```
`{children}` es donde Next mete el contenido de la ruta que estás visitando.

---

## 3. ¿Dónde está el "App" y las rutas?

No hay un `<App/>` con react-router. El **enrutado es por archivos** dentro de `src/app/`:

```
src/app/
  layout.tsx     → cascarón global (envuelve todo)
  page.tsx       → ruta  "/"            (la home)
  globals.css    → estilos globales
  sitemap.ts     → /sitemap.xml
  robots.ts      → /robots.txt
```

Regla: **una carpeta = una ruta**, y el archivo se llama siempre `page.tsx`.
Cuando hagamos las páginas internas quedará así:

```
src/app/
  page.tsx                       → "/"
  servicios/
    desarrollo-web/page.tsx      → "/servicios/desarrollo-web"
    marketing-digital/page.tsx   → "/servicios/marketing-digital"
  portafolio/page.tsx            → "/portafolio"
```

No configuras rutas en ningún lado: **creas la carpeta con su `page.tsx` y la ruta existe.**

---

## 4. Server Components vs Client Components (lo más distinto de CRA)

En CRA, **todo** es cliente (corre en el navegador). En Next hay dos tipos:

- **Server Component (por defecto):** se renderiza en el servidor/build → llega HTML
  ya hecho → **mejor SEO y más rápido**. No puede usar `useState`, `onClick`, `useEffect`.
  Ejemplos aquí: `Hero`, `Services`, `Pricing`, `Footer`.

- **Client Component:** lleva `"use client"` en la primera línea. Corre en el navegador,
  puede tener interactividad (estado, eventos, efectos).
  Ejemplos aquí: `Header` (menú), `Reveal`/`WordReveal` (animaciones), `Preloader`.

> Regla práctica: hazlo Server Component salvo que necesites clicks, estado o efectos.
> En ese caso, pon `"use client"` arriba.

---

## 5. Componentes reutilizables (esto sí es como ya lo conoces)

Igual que en React: componentes que importas y reutilizas. Los organizamos en 3 capas:

```
src/components/
  ui/         → piezas base reutilizables (Button, Card, Icon, Container,
                SectionHeading, Reveal, WordReveal, GradientText)
  layout/     → estructura del sitio (Header, Footer, WhatsappFloat, Preloader)
  sections/   → bloques de la home (Hero, Services, Process, Pricing, Clients, FinalCTA)
```

`ui/` son los "ladrillos" (un botón, una tarjeta). `sections/` los combina para formar
bloques grandes. `page.tsx` combina las secciones para formar la página.

---

## 6. El flujo completo (de archivo a pantalla)

```
layout.tsx  (cascarón: html, body, head, preloader)
   └─ page.tsx  (la home: ordena las secciones)
        ├─ <Hero/>       ─┐
        ├─ <Services/>    │  cada sección usa primitivos de ui/
        ├─ <Pricing/>     │  (Button, Card, Icon, SectionHeading, Reveal...)
        └─ ...           ─┘
                └─ los datos (textos, servicios, precios) salen de src/lib/site.ts
```

1. Visitas `/` → Next usa `layout.tsx` + `page.tsx`.
2. `page.tsx` importa las secciones; las secciones usan los primitivos de `ui/`.
3. El contenido sale de `src/lib/site.ts` (no del código de los componentes).
4. Next pre-renderiza todo a **HTML estático** (por `output: "export"`) en la carpeta `build/`.

---

## 7. ¿Por qué HTML estático?

En `next.config.mjs` está `output: "export"`: Next genera HTML/CSS/JS puro en `build/`,
sin necesitar un servidor Node. Por eso se puede subir tal cual a Hostinger. Los Client
Components (animaciones, menú) siguen funcionando: su JS se "hidrata" en el navegador.

---

## TL;DR
- `index.html` ➜ **`layout.tsx`**
- `<App/>` + react-router ➜ **carpetas con `page.tsx`** (rutas por archivos)
- Todo cliente ➜ **Server Components por defecto**, `"use client"` solo cuando hay interacción
- Componentes reutilizables ➜ **igual**, en `components/ui · layout · sections`
- Contenido ➜ **`src/lib/site.ts`**
