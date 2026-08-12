/**
 * Configuración central del sitio de Zyber.
 * Edita aquí datos de marca, contacto, redes, servicios y precios:
 * los componentes leen todo desde este archivo.
 */

import type { IconName } from "@/components/ui/Icon";

export const siteConfig = {
  name: "Zyber",
  legalName: "Zyber Company",
  url: "https://zyber.com.mx",
  description:
    "Zyber ayuda a las empresas a crecer en línea con estrategias de automatización digital basadas en datos y soluciones enfocadas en resultados: desarrollo web, marketing, SEO, branding y transformación digital.",
  slogan: "Impulsa tu negocio con tecnología, estrategia y creatividad.",
  locale: "es-MX",

  phoneDisplay: "722 644 8900",
  phoneHref: "tel:+527226448900",
  whatsapp: "https://wa.me/5217226448900",
  whatsappMessage:
    "https://wa.me/5217226448900?text=Hola%20Zyber%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.",
  email: "contacto@zyber.company",
  location: "Toluca, Estado de México",

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
  icon: IconName; // nombre del icono (ver src/components/ui/Icon.tsx)
  summary: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    icon: "Megaphone",
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
    icon: "Code2",
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
    icon: "Cpu",
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
    icon: "Palette",
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
    icon: "MessagesSquare",
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
    icon: "BarChart3",
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
    icon: "Workflow",
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
    icon: "LayoutGrid",
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
  icon: IconName;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Análisis & Consultoría",
    description:
      "Evaluamos tus necesidades y objetivos para diseñar una estrategia digital personalizada.",
    icon: "Search",
  },
  {
    title: "Estrategia & Planificación",
    description:
      "Definimos un plan de acción claro para alcanzar tus metas de negocio.",
    icon: "PencilRuler",
  },
  {
    title: "Ejecución & Optimización",
    description:
      "Implementamos la estrategia y ajustamos continuamente para maximizar resultados.",
    icon: "Rocket",
  },
  {
    title: "Resultados & Crecimiento",
    description:
      "Medimos el impacto y escalamos tus esfuerzos para un crecimiento sostenible.",
    icon: "TrendingUp",
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

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "La inversión, aunque no fue barata, valió cada peso. Nuestro negocio no vendía y, gracias a la digitalización desde el sitio web, redes sociales, nueva imagen y logos, hasta la automatización de procesos de corte de metales y madera, hemos logrado entregar más y mejores resultados. Hoy nuestros clientes confían más en nosotros y eso nos ha permitido cerrar proyectos más grandes y rentables. Zyber no solo nos ayudó a tener presencia en línea, sino que impulsó la profesionalización de toda nuestra operación. Totalmente recomendados.",
    author: "Enrique Bartolo",
    role: "CEO · GRUMEX",
    logo: "/img/logos/logotipogrumex.png",
  },
  {
    quote:
      "Antes contraté otra agencia y solo me entregaron una web básica, sin asesoría ni seguimiento. Con Zyber fue completamente diferente: me explicaron la importancia del posicionamiento en Google y Maps, el SEO y la experiencia del cliente. Integraron herramientas clave como sistema de citas, políticas de garantía, manuales y FAQs, lo que me ayudó a evitar reclamos y verme más profesional. Mi negocio se fue posicionando cada vez más y aumenté mis ventas. Totalmente recomendado si quieres impulsar tu marca y vender más.",
    author: "Jerry Mendoza",
    role: "Fundador · MJ Wrap & Custom",
    logo: "/img/logos/logowhitemj.png",
  },
  {
    quote:
      "Estamos muy contentos con el trabajo de Zyber. A pesar de la distancia entre países, el nivel de atención, compromiso y seguimiento ha sido excepcional. Rediseñamos nuestro sitio con una imagen más moderna y funcional, y optimizamos nuestra estrategia digital. Nos ayudaron a implementar herramientas que facilitaron la comunicación con nuestros clientes y nos dieron una visión más estratégica para posicionarnos. Fue una excelente decisión confiar en Zyber; su trabajo ha marcado una diferencia real en el crecimiento de nuestro negocio.",
    author: "José Serna",
    role: "Presidente · Awaq",
    logo: "/img/logos/awaq.png",
  },
];

export type Benefit = { title: string; description: string; icon: IconName };

// Beneficios genéricos usados en las páginas de servicio ("¿Por qué Zyber?").
export const whyChooseUs: Benefit[] = [
  {
    title: "Estrategia basada en datos",
    description:
      "Cada decisión se apoya en métricas y análisis, no en corazonadas.",
    icon: "BarChart3",
  },
  {
    title: "Equipo cercano y comprometido",
    description:
      "Asesoría clara y acompañamiento constante en cada fase del proyecto.",
    icon: "MessagesSquare",
  },
  {
    title: "Resultados medibles",
    description:
      "Nos enfocamos en resultados reales: más clientes, más ventas, más crecimiento.",
    icon: "TrendingUp",
  },
  {
    title: "Soluciones a la medida",
    description:
      "Diseñamos estrategias adaptadas a tu negocio, no plantillas genéricas.",
    icon: "Workflow",
  },
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
  { label: "Portafolio", href: "/portafolio" },
  {
    label: "Servicios",
    href: "/#servicios",
    children: services.map((s) => ({
      label: s.title,
      href: `/servicios/${s.slug}`,
    })),
  },
  { label: "Contáctanos", href: siteConfig.whatsappMessage, external: true },
];
