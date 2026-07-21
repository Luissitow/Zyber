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

  // Carga solo los iconos usados de lucide-react (acelera mucho el dev).
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // No frenamos el build por ESLint (no lo usamos en producción del sitio).
  eslint: {
    ignoreDuringBuilds: true,
  },

  // En desarrollo, el file-watcher ignora carpetas pesadas que NO son parte de
  // la app (el sitio viejo en legacy/, el export en build/out y node_modules).
  // Esto evita escaneos enormes y arranques lentos.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...(config.watchOptions || {}),
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/legacy/**",
          "**/build/**",
          "**/out/**",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
