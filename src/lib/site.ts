/**
 * Configuración central del sitio de Zyber.
 * Edita aquí datos de marca, contacto, redes, servicios y precios:
 * los componentes leen todo desde este archivo.
 */

export const siteConfig = {
  name: "Zyber",
  legalName: "Zyber Company",
  // TODO: cambia esta URL por tu dominio real antes de publicar (afecta al SEO/canonical).
  url: "https://zybercompany.com",
  description:
    "Zyber ayuda a las empresas a crecer en línea con estrategias de automatización digital basadas en datos y soluciones enfocadas en resultados: desarrollo web, marketing, SEO, branding y transformación digital.",
  slogan: "Impulsa tu negocio con tecnología, estrategia y creatividad.",
  locale: "es-MX",

  phoneDisplay: "722 644 8900",
  phoneHref: "tel:+527226448900",
  whatsapp: "https://wa.me/5217226448900",
  whatsappMessage:
    "https://wa.me/5217226448900?text=Hola%20Zyber%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.",
  email: "contacto@zybercompany.com",

  // TODO: reemplaza con tus URLs reales de redes sociales.
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    tiktok: "#",
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  icon: string; // ruta dentro de /public
  summary: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    icon: "/img/servicios/marketingdigital.png",
    summary: "Campañas que atraen, convierten y fidelizan clientes.",
    features: [
      "Campañas en redes: Facebook, Instagram, TikTok, LinkedIn",
      "Publicidad PPC: Google Ads, Bing Ads y retargeting",
      "SEO para mejorar tu posicionamiento orgánico",
      "Email marketing y automatización",
      "Marketing de contenidos (blogs, video, infografías)",
    ],
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    icon: "/img/servicios/desarrolloweb.png",
    summary: "Sitios modernos, rápidos y optimizados para SEO.",
    features: [
      "Diseño de sitios responsivos y optimizados",
      "E-commerce con pasarelas de pago e inventario",
      "Landing pages para campañas",
      "Sistemas de reservas para tu negocio",
    ],
  },
  {
    slug: "innovacion",
    title: "Innovación y Nuevas Tecnologías",
    icon: "/img/servicios/inteligenciaartificial.png",
    summary: "Inteligencia artificial y automatización de vanguardia.",
    features: [
      "Inteligencia artificial y análisis de datos",
      "Blockchain para seguridad y transparencia",
      "IoT: dispositivos inteligentes y monitoreo remoto",
      "Realidad aumentada para productos y servicios",
    ],
  },
  {
    slug: "branding-diseno",
    title: "Branding & Diseño",
    icon: "/img/servicios/branding.png",
    summary: "Una identidad de marca que te hace memorable.",
    features: [
      "Creación de logotipos únicos y personalizados",
      "Manual de identidad: colores, tipografías y estilo",
      "Remodelación de identidad de marca",
      "Diseño de materiales promocionales",
    ],
  },
  {
    slug: "experiencia-cliente",
    title: "Experiencia al Cliente",
    icon: "/img/servicios/chatbot.png",
    summary: "Atención y fidelización con asistentes inteligentes.",
    features: [
      "Chatbots y asistentes virtuales de atención",
      "Encuestas y sistemas de feedback",
      "Programas de fidelización de clientes",
    ],
  },
  {
    slug: "analisis-datos",
    title: "Análisis de Datos",
    icon: "/img/servicios/tablero.png",
    summary: "Decisiones basadas en datos, no en corazonadas.",
    features: [
      "Dashboards personalizados con tus métricas clave",
      "Análisis predictivo de tendencias",
      "Optimización de campañas en tiempo real",
    ],
  },
  {
    slug: "transformacion-digital",
    title: "Transformación Digital",
    icon: "/img/servicios/digitalizacion.png",
    summary: "Llevamos tus procesos manuales al mundo digital.",
    features: [
      "Digitalización de procesos y sistemas",
      "Capacitación tecnológica para tu equipo",
      "Consultoría tecnológica a la medida",
    ],
  },
  {
    slug: "servicios-adicionales",
    title: "Servicios Adicionales",
    icon: "/img/servicios/softwaredediseno.png",
    summary: "Todo lo que tu marca necesita, en un solo lugar.",
    features: [
      "Gestión de redes sociales",
      "Producción audiovisual y fotografía",
      "Consultoría en ciberseguridad",
    ],
  },
];

export type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Análisis & Consultoría",
    description:
      "Evaluamos tus necesidades y objetivos para diseñar una estrategia digital personalizada.",
    icon: "/img/servicios/investigacion.png",
  },
  {
    title: "Estrategia & Planificación",
    description:
      "Definimos un plan de acción claro para alcanzar tus metas de negocio.",
    icon: "/img/servicios/estrategiayplanificacion.png",
  },
  {
    title: "Ejecución & Optimización",
    description:
      "Implementamos la estrategia y ajustamos continuamente para maximizar resultados.",
    icon: "/img/servicios/ejecucionyoptimizacion.png",
  },
  {
    title: "Resultados & Crecimiento",
    description:
      "Medimos el impacto y escalamos tus esfuerzos para un crecimiento sostenible.",
    icon: "/img/servicios/marketing.png",
  },
];

export type Plan = {
  name: string;
  price: string;
  period?: string;
  target: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Esencial",
    price: "$999",
    period: "MXN",
    target:
      "Ideal para emprendedores y pequeñas empresas que quieren presencia online y empezar a posicionarse en Google.",
    features: [
      "Página web funcional (hasta 5 secciones)",
      "Optimización SEO básica (estructura, metaetiquetas, sitemap)",
      "Dominio + Hosting incluidos (1 año)",
      "Integración con redes sociales",
      "1 sesión de capacitación o soporte técnico mensual",
    ],
  },
  {
    name: "Crecimiento",
    price: "$3,499",
    period: "MXN",
    featured: true,
    target:
      "Para negocios que ya venden y quieren seguir creciendo con más alcance y ventas.",
    features: [
      "Tienda en línea o catálogo (hasta 25 productos)",
      "Cambios ilimitados al sitio web",
      "SEO funcional (palabras clave, velocidad, etiquetas)",
      "1 campaña mensual en la red social de tu elección",
      "Landing page promocional por campaña o servicio",
      "Ideas para vender nuevos productos y mejorar tu oferta",
    ],
  },
  {
    name: "Empresarial",
    price: "$7,999",
    period: "MXN",
    target:
      "Para empresas que quieren posicionarse como líderes y escalar resultados.",
    features: [
      "Todo lo del plan Crecimiento",
      "Soporte 24/7 y cambios ilimitados",
      "Diseño premium orientado a conversión",
      "Tienda en línea con pago seguro y categorización",
      "Campañas en Google y redes sociales (anuncios)",
      "Correos corporativos y Chatbot para WhatsApp o web",
      "Asesoría mensual personalizada por videollamada",
      "Google Analytics, Pixeles y Search Console",
    ],
  },
];

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "AWAQ", logo: "/img/logos/awaq.png" },
  { name: "Florería Lilis", logo: "/img/logos/logoflorerialilis.png" },
  { name: "Grumex", logo: "/img/logos/logotipogrumex.png" },
  { name: "MJ Wrap & Custom", logo: "/img/logos/logowhitemj.png" },
  { name: "U-Storage", logo: "/img/logos/u-storage.png" },
  { name: "Tec", logo: "/img/logos/tec.png" },
];

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string }[];
};

// Menú fiel al original: Inicio · Portafolio · Servicios (dropdown) · Contáctanos.
// TODO: cuando existan las páginas internas, apuntar cada servicio a /servicios/<slug>.
export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Portafolio", href: "/#clientes" },
  {
    label: "Servicios",
    href: "/#servicios",
    children: services.map((s) => ({ label: s.title, href: "/#servicios" })),
  },
  { label: "Contáctanos", href: siteConfig.whatsappMessage, external: true },
];
