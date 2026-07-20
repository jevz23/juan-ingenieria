export const profile = {
  nombre: "Diseño, Ingeniería y Gestión de Proyectos",
  titulo: "Ingeniería Civil Mecánica / Estructural ",
  iniciales: "JVI",
  email: "contacto@tudominio.cl",
  telefono: "+56 9 0000 0000",
  ubicacion: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/tu-perfil",
  tagline: "Cálculo, análisis estructural y revisión de ingeniería bajo estándares nacionales e internacionales.",
};

export const hero = {
  eyebrow: "Consultoría de ingeniería · Independiente",
  titulo: "Ingeniería Mecánica y Estructural de Precisión.",
  descripcion:
    "Servicios de cálculo, desarrollo de entregables y revisión para proyectos de ingeniería industriales y mineros. Especialización en equipos estándar de validación normativo, tales como estanques, chimeneas, bombas, <em>piping</em>, estructuras, correas transportadoras, entre otros, utilizando códigos internacionales. Diseño de equipos/máquinas <em>custom</em>, evaluación de aptitud para el servicio (FFS) de equipos a presión y en general. Análisis estructural que incluye la verificación por viento y sísmo bajo normativas nacionales e internacionales.",  
  ctaPrimario: { texto: "Solicitar cotización", href: "#contacto" },
  ctaSecundario: { texto: "Ver servicios", href: "#servicios" },
};

export const servicios = [
  {
    numero: "01",
    titulo: "Diseño de estanques atmosféricos y a presión",
    descripcion:
      "Diseño y verificación de recipientes atmosféricos y a presión, según  API 650, AWWA D103 y ASME BPVC Sección VIII División 1 y 2, según aplique",
    norma: "API650 / AWWA D103 / ASME BPVC Sec. VIII",
  },
  {
    numero: "02",
    titulo: "Fitness-for-Service (FFS)",
    descripcion:
      "Evaluación de aptitud para el servicio de equipos en operación con degradación: corrosión, <em>pitting</em>, grietas y daños mecánicos.",
    norma: "API 579 / ASME FFS-1",
  },
  {
    numero: "03",
    titulo: "Análisis sísmico y de viento",
    descripcion:
      "Modelación, análisis y verificación de estructuras y equipos industriales según NCh 2369-2025 y NCh 432-2010. ",
    norma: "NCh 432 · NCh 2369",
  },
  {
    numero: "04",
    titulo: "Cálculo de elementos mecánicos",
    descripcion:
      "Dimensionamiento y verificación de elementos mecánicos: ejes, soportes, uniones apernadas y soldadas, según códigos aplicables.",
    norma: "AISC · FEM",
  },
  {
    numero: "05",
    titulo: "Revisión y peritaje",
    descripcion:
      "Revisión de memorias de cálculo, planos, EETT y en general entregables de ingeniería. Peritaje independiente y validación de diseños de terceros.",
    norma: "Revisión técnica",
  },
  {
    numero: "06",
    titulo: "Diseño de soluciones",
    descripcion:
      "Elaboración de diseños <em>custom</em> para automatizar o resolver una etapa de un proceso productivo.",
    norma: "Diseño · Innovación · Automatización",
  },
  {
    numero: "07",
    titulo: "Diseño y dimensionamiento de equipos",
    descripcion:
      "Diseño y cálculo de sistemas de transporte de fluidos, correas transportadoras y chimeneas bajo normativas internacionales.",
    norma: "Bombas · Chimeneas · Correas",
  },
  {
    numero: "08",
    titulo: "Diseño y cálculo de líneas de piping",
    descripcion:
      "Diseño de líneas de <em>piping</em> y análisis de flexibilidad con ASME B31.3 y B31.4.",
    norma: "Piping· B31.3 · B31.4.",
  },
  {
    numero: "09",
    titulo: "Desarrollo de entregables de ingeniería",
    descripcion:
      "Generación de entregables en general de proyectos de ingeniería.",
    norma: "Planos · MC · EETT · Hoja de datos",
  },
];

export const normativas = [
  { codigo: "ASME BPVC", detalle: "Sec. II · VIII · IX" },
  { codigo: "ASME FFS-1", detalle: "API 579-1" },
  { codigo: "AISC 360", detalle: "Steel Construction" },
  { codigo: "AISC 341", detalle: "Seismic Provisions" },
  { codigo: "API 650", detalle: "Welded Tanks" },
  { codigo: "API 653", detalle: "Tank Inspection" },
  { codigo: "NCh 2369", detalle: "Diseño Sísmico Industrial" },
  { codigo: "NCh 433", detalle: "Diseño Sísmico Edificios" },
  { codigo: "AWS D1.1", detalle: "Structural Welding" },
  { codigo: "ASCE 7", detalle: "Minimum Design Loads" },
];

export const herramientas = [
  "SAP2000",
  "PV Elite",
  "Compress",
  "Caesar II",
  "AutoCAD",
  "Inventor",
  "MathCAD",
  "Python",
];

export const sobre = {
  titulo: "Sobre el servicio",
  parrafos: [
    "Ingeniero Civil Mecánico con experiencia en cálculo, análisis y revisión de proyectos industriales y mineros. Trabajo enfocado en equipos a presión, estructuras industriales y evaluación de aptitud para el servicio de activos en operación.",
    "Mi propuesta de valor es entregar memorias de cálculo trazables, defendibles ante revisión externa, y alineadas con las normativas internacionales que la industria espera. Cada entrega documenta supuestos, normas aplicadas y verificaciones, de modo que el cliente reciba ingeniería auditable.",
  ],
  credenciales: [
    "Ingeniero Civil Mecánico — Universidad de Chile",
    "Experiencia en proyectos minería e industria",
    "Manejo experto de SAP2000 y herramientas de cálculo ASME",
    "Inglés técnico — lectura de códigos y especificaciones",
  ],
};

export const proyectos = [
  {
    año: "2025",
    titulo: "Recalificación de estanque atmosférico",
    descripcion:
      "Evaluación FFS según API 579 de estanque de almacenamiento de 2.500 m³ con corrosión localizada en envolvente, para empresa del sector minero.",
    tipo: "Fitness-for-Service",
  },
  {
    año: "2024",
    titulo: "Diseño estructural sismorresistente",
    descripcion:
      "Modelación y verificación en SAP2000 de estructura soporte de proceso, diseño sísmico según NCh 2369 con factores de sobrerresistencia AISC 341.",
    tipo: "Análisis estructural",
  },
  {
    año: "2024",
    titulo: "Recipiente a presión vertical",
    descripcion:
      "Diseño mecánico de recipiente a presión vertical en SA-240 TP316L para servicio corrosivo, conforme ASME BPVC Sec. VIII Div. 1.",
    tipo: "Equipo a presión",
  },
];

export const nav = [
  { texto: "Servicios", href: "#servicios" },
  { texto: "Experiencia", href: "#experiencia" },
  { texto: "Sobre mí", href: "#sobre" },
  { texto: "Contacto", href: "#contacto" },
];
