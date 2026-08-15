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

  // Dirección tal como está registrada en Google Business Profile.
  // Debe coincidir CARÁCTER POR CARÁCTER con la ficha: Google contrasta
  // nombre, dirección y teléfono (NAP) entre fuentes, y cualquier diferencia
  // le resta confianza al perfil y te baja en resultados locales.
  address: {
    street: "C. Laguna de la Gavia 646, El Seminario Tercera Secc.",
    locality: "Toluca de Lerdo",
    region: "Estado de México",
    postalCode: "50170",
    country: "MX",
    full: "C. Laguna de la Gavia 646, El Seminario Tercera Secc, 50170 Toluca de Lerdo, Méx.",
  },

  // Zonas donde damos servicio. Alimentan el schema y el texto de las páginas:
  // son la señal que permite competir por búsquedas locales ("desarrollo de
  // software en Querétaro") en vez de contra todo el país.
  serviceAreas: [
    "Toluca y Estado de México",
    "Ciudad de México",
    "Querétaro",
  ],

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

  // --- Contenido para SEO -------------------------------------------------
  // Sin esto cada página de servicio tenía ~146 palabras propias y las 8 eran
  // casi idénticas entre sí: Google lo trata como contenido duplicado y no
  // las posiciona. Estos campos dan a cada página texto único y suficiente.

  /** Párrafo de apertura. Responde "qué es y para quién". */
  intro: string;
  /** Secciones de desarrollo. Aquí vive el grueso del contenido. */
  sections: { heading: string; text: string }[];
  /** Preguntas frecuentes. Alimentan el schema FAQPage. */
  faq: { q: string; a: string }[];
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
    intro:
      "El marketing digital deja de ser un gasto cuando cada peso invertido se puede rastrear hasta una venta. Trabajamos con negocios de Toluca, Ciudad de México y Querétaro que ya intentaron publicar en redes sin un plan detrás y no vieron retorno. La diferencia no está en publicar más, sino en saber a quién le hablas, dónde está y qué lo hace comprar.",
    sections: [
      {
        heading: "Campañas que se miden, no que se suponen",
        text: "Cada campaña arranca definiendo qué cuenta como resultado: una llamada, un formulario, una venta en línea. A partir de ahí configuramos el seguimiento en Google Ads, Meta y tu sitio para que sepas exactamente de dónde vino cada cliente. Sin esa base, aumentar el presupuesto solo significa gastar más rápido. Con ella, puedes cortar lo que no funciona en la primera semana y reinvertir en lo que sí.",
      },
      {
        heading: "SEO: el tráfico que no deja de llegar",
        text: "La publicidad pagada se detiene el día que dejas de pagar. El posicionamiento orgánico sigue trayendo visitas meses después del trabajo. Atacamos las búsquedas donde sí puedes competir —términos locales y específicos, no genéricos imposibles— y construimos el contenido que responde a esas búsquedas. Es más lento que un anuncio, pero el costo por cliente baja con el tiempo en vez de subir.",
      },
      {
        heading: "Contenido y automatización que sostienen la relación",
        text: "Conseguir un cliente cuesta varias veces más que retener uno. Por eso conectamos las campañas con secuencias de correo y contenido que mantienen la conversación después de la primera compra: recordatorios, novedades, ofertas segmentadas. Todo automatizado, para que funcione sin que tengas que acordarte de enviarlo.",
      },
    ],
    faq: [
      {
        q: "¿En cuánto tiempo se ven resultados?",
        a: "Las campañas de pago pueden traer los primeros contactos en días. El SEO es otra historia: en un dominio nuevo suele tomar de tres a seis meses ver movimiento real. Cualquiera que prometa primer lugar en Google en dos semanas está vendiendo humo.",
      },
      {
        q: "¿Cuánto debo invertir en publicidad?",
        a: "Depende del sector y de cuánto vale un cliente para ti. Antes de proponer una cifra calculamos cuánto puedes pagar por cliente sin perder margen. Empezar con un presupuesto de prueba y escalar lo que funciona casi siempre supera a apostar fuerte desde el primer día.",
      },
      {
        q: "¿Trabajan con negocios pequeños?",
        a: "Sí. De hecho es donde el marketing bien enfocado más se nota, porque un solo canal que funcione puede cambiar el mes. Ajustamos el alcance del trabajo al presupuesto real en vez de aplicar un paquete fijo.",
      },
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
    intro:
      "Un sitio web no es un folleto en línea: es el lugar donde alguien decide si te compra o cierra la pestaña. Construimos sitios rápidos, que se ven bien en el celular —donde ocurre la mayoría del tráfico en México— y que están preparados para aparecer en Google desde el primer día, no como un parche posterior.",
    sections: [
      {
        heading: "Velocidad y móvil no son extras",
        text: "Más de la mitad de los visitantes abandona una página que tarda más de tres segundos en cargar, y Google usa esa velocidad como criterio de posicionamiento. Por eso desarrollamos con tecnologías que entregan páginas ya construidas en vez de armarlas dentro del navegador del usuario. El resultado se nota sobre todo en el celular con datos móviles, que es donde de verdad se pierde a la gente.",
      },
      {
        heading: "Tiendas en línea que puedes administrar tú",
        text: "Montamos comercio electrónico con pasarelas de pago mexicanas, control de inventario y envíos configurados. Igual de importante: te dejamos un panel que puedas usar sin depender de nosotros para cambiar un precio o subir un producto. Un sitio que necesita al desarrollador para cada ajuste se convierte en un cuello de botella.",
      },
      {
        heading: "Landing pages y sistemas a la medida",
        text: "No todo proyecto necesita un sitio completo. Una campaña puede rendir mucho más con una sola página enfocada en una acción concreta. Y si tu negocio vive de las citas —consultorios, talleres, salones— un sistema de reservas conectado a tu calendario elimina el ir y venir de mensajes para agendar.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un sitio web?",
        a: "Varía según el alcance: no es lo mismo una página de aterrizaje que una tienda con inventario y pagos. Lo que sí hacemos siempre es cotizar cerrado antes de empezar, con el alcance por escrito, para que no aparezcan sorpresas a mitad del proyecto.",
      },
      {
        q: "¿Puedo actualizar el contenido yo mismo?",
        a: "Sí, es parte de cómo entregamos. Dejamos la estructura preparada para que textos, imágenes y precios se cambien sin tocar código, y entregamos una guía de edición del proyecto.",
      },
      {
        q: "¿El sitio va a aparecer en Google?",
        a: "Lo construimos técnicamente listo para eso: HTML que Google puede leer sin ejecutar JavaScript, sitemap, canonical y datos estructurados. Aparecer depende también del tiempo y del contenido; que el sitio no sea el obstáculo es lo que sí controlamos.",
      },
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
    intro:
      "Inteligencia artificial, IoT o blockchain suenan a palabras de conferencia hasta que resuelven un problema concreto de tu operación. Nuestro punto de partida nunca es la tecnología: es qué te está costando tiempo o dinero hoy. Si una hoja de cálculo bien hecha lo arregla, te decimos eso en vez de venderte un proyecto de inteligencia artificial.",
    sections: [
      {
        heading: "Inteligencia artificial aplicada a tareas reales",
        text: "Los casos donde la inteligencia artificial se paga sola suelen ser los menos vistosos: clasificar cientos de correos de clientes, extraer datos de facturas escaneadas, redactar primeras versiones de fichas de producto, responder preguntas frecuentes a cualquier hora. Son tareas repetitivas que consumen horas de gente capacitada. Automatizarlas libera ese tiempo para lo que sí requiere criterio humano.",
      },
      {
        heading: "IoT y monitoreo remoto",
        text: "Sensores conectados que reportan temperatura, consumo eléctrico, ubicación de unidades o estado de una máquina. Para negocios con almacenes, flotillas o equipo en campo, la diferencia está en enterarte de un problema cuando ocurre y no cuando alguien lo reporta días después. El ahorro suele venir del mantenimiento preventivo mucho más que del correctivo.",
      },
      {
        heading: "Blockchain y trazabilidad",
        text: "Fuera del ruido de las criptomonedas, la utilidad práctica está en registros que nadie puede alterar después: cadenas de suministro donde importa probar el origen, certificados verificables, contratos que se ejecutan solos al cumplirse una condición. Es útil cuando la confianza entre las partes es el problema; si no lo es, hay soluciones más baratas.",
      },
    ],
    faq: [
      {
        q: "¿Esto es solo para empresas grandes?",
        a: "No. Una automatización bien elegida puede ahorrarle a un negocio de diez personas varias horas a la semana, y ese impacto proporcionalmente pesa más que en una corporación. Lo que descartamos son proyectos donde la tecnología cuesta más de lo que ahorra.",
      },
      {
        q: "¿Cómo saben qué tecnología necesito?",
        a: "Empezamos por una sesión de diagnóstico sobre tus procesos actuales, no por el catálogo. De ahí sale una recomendación con costo estimado y ahorro esperado. Si no hay un caso de negocio claro, te lo decimos.",
      },
      {
        q: "¿Qué pasa si la tecnología cambia?",
        a: "Construimos sobre estándares y servicios establecidos, no sobre modas. Y documentamos todo para que otro equipo pueda continuar el trabajo si algún día dejas de trabajar con nosotros.",
      },
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
    intro:
      "Tu marca es lo que la gente dice de ti cuando no estás en la sala. El logotipo es apenas la punta: lo que realmente decide si te recuerdan es la consistencia con la que apareces en todos lados. Trabajamos identidades para negocios que ya tienen clientes pero se ven improvisados frente a competidores más pequeños y mejor presentados.",
    sections: [
      {
        heading: "Del logotipo al sistema completo",
        text: "Un logo aislado no resuelve nada si cada publicación usa un color distinto y tres tipografías diferentes. Entregamos un manual de identidad con la paleta, las tipografías, los usos correctos e incorrectos y ejemplos aplicados. Con eso, cualquier persona de tu equipo —o un proveedor externo— puede producir material que se vea tuyo sin tener que preguntarte.",
      },
      {
        heading: "Rediseño sin perder lo que ya construiste",
        text: "Cuando una marca lleva años operando, cambiar todo de golpe puede costarte el reconocimiento que ya ganaste. En esos casos trabajamos una evolución: conservamos los elementos que tus clientes asocian contigo y modernizamos el resto. El objetivo es que quien ya te conoce te siga reconociendo, y quien no, te tome en serio.",
      },
      {
        heading: "Materiales que aterrizan la identidad",
        text: "La identidad se prueba cuando se aplica: tarjetas, presentaciones de venta, plantillas para redes, rotulación de vehículos, empaques. Preparamos esos materiales y te dejamos plantillas editables, para que no dependas de un diseñador cada vez que necesites una publicación o una cotización con buena presentación.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto tarda un proyecto de identidad?",
        a: "Una identidad completa suele tomar de tres a seis semanas, dependiendo de cuántas rondas de revisión haya y de qué tan clara esté la dirección desde el inicio. Un logotipo suelto es más rápido, pero también rinde menos.",
      },
      {
        q: "¿Me entregan los archivos originales?",
        a: "Sí, todos: vectores editables, versiones para web e impresión, y el manual en PDF. Son tuyos. No trabajamos con esquemas donde el cliente queda atado al proveedor por los archivos.",
      },
      {
        q: "¿Puedo conservar mi logo actual?",
        a: "Claro. Muchos proyectos empiezan así: el logo funciona pero no hay un sistema alrededor. En ese caso construimos la identidad tomándolo como punto de partida en vez de rehacerlo.",
      },
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
    intro:
      "La mayoría de los clientes que se pierden no se van molestos: se van porque nadie contestó a tiempo. En un negocio que recibe mensajes por WhatsApp, Instagram, correo y teléfono, responder rápido a todo se vuelve imposible sin ayuda. Ahí es donde la automatización bien hecha deja de sentirse fría y empieza a sentirse atenta.",
    sections: [
      {
        heading: "Chatbots que resuelven, no que estorban",
        text: "Un mal chatbot es el que atrapa a la gente en un menú del que no puede salir. Los que construimos hacen lo contrario: responden al instante las preguntas repetitivas —horarios, precios, disponibilidad, estatus de un pedido— y pasan la conversación a una persona en cuanto detectan algo que requiere criterio. El resultado es respuesta inmediata a cualquier hora sin que nadie sienta que le habla a una pared.",
      },
      {
        heading: "Escuchar de forma sistemática",
        text: "Las quejas que llegan son una fracción mínima de las que existen; la mayoría de los clientes insatisfechos simplemente no regresa. Implementamos encuestas cortas en el momento adecuado —después de una compra, al cerrar un ticket— para detectar patrones antes de que se conviertan en pérdida de clientes. Pocas preguntas bien colocadas rinden más que un cuestionario largo que nadie termina.",
      },
      {
        heading: "Fidelización que da razones para volver",
        text: "Retener sale más barato que adquirir, pero requiere darle a la gente un motivo concreto. Diseñamos programas de recompensas, niveles o beneficios que encajen con tu margen y sean simples de entender. Un programa que el cliente no comprende en diez segundos no se usa.",
      },
    ],
    faq: [
      {
        q: "¿El chatbot va a molestar a mis clientes?",
        a: "Solo si está mal diseñado. La regla que seguimos es que siempre haya una salida visible hacia una persona real, y que el bot no insista cuando alguien pide hablar con alguien. Bien configurado, la gente agradece que le respondan a las once de la noche.",
      },
      {
        q: "¿Funciona con WhatsApp?",
        a: "Sí, y suele ser el canal más importante en México. Se integra con WhatsApp Business, además de Instagram, Facebook Messenger y el chat de tu sitio, concentrando todo en una sola bandeja de entrada.",
      },
      {
        q: "¿Necesito un equipo grande para operarlo?",
        a: "No, el objetivo es justo el contrario: que un equipo pequeño atienda bien un volumen que antes lo desbordaba, porque lo repetitivo ya quedó resuelto.",
      },
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
    intro:
      "Casi todos los negocios ya tienen datos: ventas, visitas al sitio, campañas, inventario. El problema rara vez es la falta de información, sino que vive dispersa en plataformas que no se hablan entre sí. Nuestro trabajo es juntarla en un solo lugar y traducirla a decisiones que puedas tomar el lunes por la mañana.",
    sections: [
      {
        heading: "Un tablero con lo que de verdad importa",
        text: "Un tablero con cuarenta gráficas no se usa. Construimos paneles con las pocas métricas que mueven tu negocio, actualizados de forma automática, para que revisar cómo va el mes tome dos minutos y no una tarde exportando hojas de cálculo. Definir cuáles son esas métricas es la mitad del trabajo.",
      },
      {
        heading: "Ver hacia adelante, no solo hacia atrás",
        text: "Los reportes tradicionales cuentan lo que ya pasó. Con suficiente historial se puede estimar lo que viene: qué meses van a caer, qué productos se van a agotar, qué clientes están dando señales de que se van a ir. No es una bola de cristal, pero anticipar una caída con semanas de margen cambia por completo lo que puedes hacer al respecto.",
      },
      {
        heading: "Optimizar campañas mientras corren",
        text: "Cuando el gasto publicitario está conectado a los resultados reales de venta, dejas de decidir por intuición. Puedes ver qué anuncio trae compradores y cuál solo trae clics, y mover el presupuesto en días en vez de esperar al cierre de mes para descubrir que se fue en algo que no funcionó.",
      },
    ],
    faq: [
      {
        q: "¿Necesito muchos datos para empezar?",
        a: "Menos de los que crees. Con las ventas del último año y los datos de tu sitio ya se puede armar algo útil. Y si no estás midiendo nada todavía, el primer paso es instalar el seguimiento correctamente, que es trabajo de días, no de meses.",
      },
      {
        q: "¿Qué herramientas usan?",
        a: "Depende de dónde vivan tus datos. Trabajamos con Google Analytics, Looker Studio, hojas de cálculo conectadas y bases de datos propias. Preferimos herramientas que ya conozcas o que sean gratuitas antes de sumarte otra suscripción mensual.",
      },
      {
        q: "¿Quién mantiene el tablero después?",
        a: "Queda automatizado, así que se actualiza solo. Te capacitamos para leerlo e interpretarlo, y si más adelante quieres agregar métricas nuevas se puede hacer sin rehacerlo desde cero.",
      },
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
    intro:
      "Digitalizar no es comprar software. Es revisar cómo trabaja tu equipo hoy y decidir qué partes de ese proceso deberían dejar de hacerse a mano. Muchos proyectos fracasan porque se instala una herramienta sobre un proceso desordenado: el desorden se vuelve más rápido, pero sigue siendo desorden.",
    sections: [
      {
        heading: "Primero el proceso, después la herramienta",
        text: "Empezamos mapeando cómo fluye realmente el trabajo, incluidos los atajos que la gente inventó porque el sistema oficial no servía. Casi siempre aparecen pasos que existen solo por costumbre y que se pueden eliminar antes de automatizar nada. Digitalizar un proceso innecesario es pagar por hacer más eficiente algo que no debería ocurrir.",
      },
      {
        heading: "Migración sin parar la operación",
        text: "Nadie puede darse el lujo de cerrar dos semanas para cambiar de sistema. Trabajamos por etapas, empezando por el área donde el dolor es mayor y el riesgo menor, con el proceso anterior funcionando en paralelo hasta que el nuevo demuestre que aguanta. Es más lento que un cambio de golpe, y considerablemente menos peligroso.",
      },
      {
        heading: "Capacitación: donde se gana o se pierde",
        text: "La herramienta más buena del mundo fracasa si el equipo vuelve a la hoja de cálculo en la primera semana. Por eso la capacitación no es un anexo al final del proyecto: acompañamos al equipo durante la transición, resolvemos las dudas que salen en el uso real y ajustamos lo que en la práctica no funcionó como se había planeado.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto tiempo lleva?",
        a: "Un proceso puntual puede quedar en semanas. Una transformación que toca varias áreas se mide en meses, y conviene hacerla por etapas. Desconfía de quien prometa cambiar toda la operación de un negocio en un mes.",
      },
      {
        q: "¿Mi equipo se va a resistir?",
        a: "Casi siempre al principio, y es razonable: nadie quiere que le cambien su forma de trabajar. Lo que reduce la resistencia es involucrarlos desde el diagnóstico, porque quien hace el trabajo todos los días sabe mejor que nadie dónde están los cuellos de botella.",
      },
      {
        q: "¿Y si ya compré un sistema que no uso?",
        a: "Pasa seguido. A veces la herramienta era la correcta y lo que falló fue la implementación o la capacitación. Revisamos qué tienes antes de recomendarte comprar algo nuevo.",
      },
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
    intro:
      "No todo encaja en una categoría. Estos son los servicios que suelen sumarse a un proyecto principal, o que resuelven necesidades puntuales de negocios que ya tienen su operación digital andando y necesitan reforzar un frente específico.",
    sections: [
      {
        heading: "Gestión de redes sociales",
        text: "Publicar por publicar no construye nada. Trabajamos con un calendario editorial atado a objetivos concretos —dar a conocer un producto, sostener presencia en temporada baja, generar consultas— y con la producción del material incluida. También manejamos la conversación: responder comentarios y mensajes es donde muchas cuentas se caen, y es justo donde ocurren las ventas.",
      },
      {
        heading: "Producción audiovisual y fotografía",
        text: "Fotos de producto, video corporativo, contenido para redes. Con la calidad de cámara de los teléfonos actuales, la diferencia ya no está en el equipo sino en la luz, la dirección y el criterio de edición. Producimos material pensado para dónde va a vivir: lo que funciona en un video vertical de quince segundos no es lo mismo que en tu página de inicio.",
      },
      {
        heading: "Consultoría en ciberseguridad",
        text: "La mayoría de los incidentes en negocios pequeños no son ataques sofisticados: son contraseñas repetidas, accesos de exempleados que nadie revocó y respaldos que nunca se probaron. Revisamos esos puntos básicos, que es donde está el riesgo real, y dejamos procedimientos claros para el equipo. Cuesta mucho menos prevenir que recuperar.",
      },
    ],
    faq: [
      {
        q: "¿Puedo contratar solo uno de estos servicios?",
        a: "Sí. No exigimos paquete completo ni contratar un proyecto grande para acceder a ellos. Si solo necesitas la gestión de redes o una sesión de fotos de producto, eso se cotiza por separado.",
      },
      {
        q: "¿El contenido de redes lo producen ustedes?",
        a: "Cualquiera de las dos opciones. Podemos producir todo el material, trabajar con lo que ya tienes, o un esquema mixto donde tú aportas el contenido crudo y nosotros lo editamos y publicamos.",
      },
      {
        q: "¿Cada cuánto conviene revisar la seguridad?",
        a: "Recomendamos una revisión inicial y después repasos cada seis meses, o cada vez que haya cambios importantes en el equipo. La rotación de personal es de los momentos donde más huecos de acceso quedan abiertos.",
      },
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
