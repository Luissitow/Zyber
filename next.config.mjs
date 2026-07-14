/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporta un sitio 100% estático (HTML/CSS/JS) en la carpeta `build/`.
  // Listo para subir a Hostinger (hosting compartido) o a AWS S3/CloudFront/Amplify.
  output: "export",

  // El export estático no usa el optimizador de imágenes de Next en servidor,
  // así que servimos las imágenes tal cual (ya optimizadas manualmente si hace falta).
  images: {
    unoptimized: true,
  },

  // Genera cada ruta como carpeta/index.html (p. ej. /servicios/desarrollo-web/index.html).
  // Esto hace que los enlaces funcionen en hosting estático sin configuración extra.
  trailingSlash: true,

  // No frenamos el build por ESLint (no lo usamos en producción del sitio).
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
