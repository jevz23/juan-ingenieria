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
    "Servicios de cálculo, análisis y revisión para proyectos industriales y mineros. Especialización en equipos estándar de validación normativo, tales como estanques, chimeneas, bombas, <em>piping</em>, estructuras, correas transportadoras, entre otros, utilizando códigos internacionales, como ASME, API, ASCE, AWWA, CEMA. Diseño de equipos/máquinas <em>custom</em>, evaluación de aptitud para el servicio (FFS) de equipos a presión y en general. Análisis estructural que incluye la verificación por viento y sísmo bajo normativas nacionales, NCh 432 y NCh 2369, respectivamente.",  
  ctaPrimario: { texto: "Solicitar cotización", href: "#contacto" },
  ctaSecundario: { texto: "Ver servicios", href: "#servicios" },
};

export const servicios = [
  {
    numero: "01",
    titulo: "Diseño de equipos a presión",
    descripcion:
      "Diseño y verificación de recipientes a presión, estanques y componentes según ASME BPVC Sección VIII División 1 y 2.",
    norma: "ASME BPVC Sec. VIII",
  },
  {
    numero: "02",
    titulo: "Fitness-for-Service (FFS)",
    descripcion:
      "Evaluación de aptitud para el servicio de equipos en operación con degradación: corrosión, picaduras, grietas y daños mecánicos.",
    norma: "API 579 / ASME FFS-1",
  },
  {
    numero: "03",
    titulo: "Análisis estructural y sísmico",
    descripcion:
      "Modelación, análisis y verificación de estructuras industriales con SAP2000 según AISC 341/360 y NCh 2369 para diseño sismorresistente.",
    norma: "AISC 341 · NCh 2369",
  },
  {
    numero: "04",
    titulo: "Cálculo de elementos mecánicos",
    descripcion:
      "Dimensionamiento y verificación de elementos mecánicos: ejes, soportes, uniones apernadas y soldadas, según códigos aplicables.",
    norma: "AWS · ASME",
  },
  {
    numero: "05",
    titulo: "Revisión y peritaje",
    descripcion:
      "Revisión de memorias de cálculo, planos y especificaciones técnicas. Peritaje independiente y validación de diseños de terceros.",
    norma: "Revisión técnica",
  },
  {
    numero: "06",
    titulo: "Especificaciones y procura",
    descripcion:
      "Elaboración de especificaciones técnicas para equipos a presión y estructurales. Apoyo en procura y evaluación técnica de ofertas.",
    norma: "Documentación técnica",
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
