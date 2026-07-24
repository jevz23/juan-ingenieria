export const profile = {
  nombre: "Diseño, Ingeniería y Gestión de Proyectos",
  titulo: "Ingeniería Civil Mecánica / Estructural ",
  iniciales: "JVI",
  email: "cccotizacion@jvi.cl",
//  telefono: "+56 9 0000 0000",
  ubicacion: "Santiago, Chile",
//  linkedin: "https://www.linkedin.com/in/tu-perfil",
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
    titulo: "Diseño y dimensionamiento de equipos de transporte",
    descripcion:
      "Diseño y cálculo de sistemas de transporte de fluidos, bombas, <em>piping</em>, correas transportadoras y chimeneas bajo normativas internacionales.",
    norma: "Bombas · Chimeneas · Correas",
  },
  {
    numero: "08",
    titulo: "Desarrollo de entregables de ingeniería",
    descripcion:
      "Generación de entregables en general de proyectos de ingeniería.",
    norma: "Planos · MC · EETT · Hoja de datos",
  },
    {
    numero: "09",
    titulo: "Proyectos llave en mano",
    descripcion:
      "Desarrollo de proyectos desde la fase de ingeniería hasta la fabricación, entregando el equipo listo para su montaje y puesta en marcha.",
    norma: "Diseño· Fabricación",
  },
];

export const normativas = [
  { codigo: "ASME BPVC", detalle: "Sec. II · VIII · IX" },
  { codigo: "ASME FFS-1", detalle: "Evaluación de equipos existentes" },
  { codigo: "AISC 360", detalle: "Construcción en acero" },
  { codigo: "ASME STS-01", detalle: "Chimeneas" },
  { codigo: "API 650", detalle: "Estanques soldados" },
  { codigo: "AWWA D103", detalle: "Estanques apernados de acero" },
  { codigo: "NCh 2369", detalle: "Diseño Sísmico Industrial" },
  { codigo: "NCh 432", detalle: "Diseño Estructural - Cargas de viento" },
  { codigo: "ASME B31", detalle: "Tuberías a Presión" },
  { codigo: "ASME BTH-01", detalle: "Diseño de dispositivos de izaje" },
];

export const herramientas = [
  "SAP2000",
  "ANSYS",
  "CalculiX",
  "PV Elite",
  "Compress",
  "AutoPipe",
  "SolidWorks",
  "Inventor",
  "MecaStack",
  "Python",
];

export const sobre = {
  titulo: "Sobre el servicio",
  parrafos: [
    "La propuesta de valor es generar diseños y documentos trazables, defendibles ante revisión externa, y alineadas con las normativas internacionales que la industria espera. Cada entrega documenta supuestos, normas aplicadas y verificaciones, de modo que el cliente reciba ingeniería auditable.",
  ],
  credenciales: [
    "Ingeniero Civil Mecánico — Universidad de Santiago de Chile.",
    "Experiencia en proyectos minería, industrial y alimenticio.",
    "Expertiz en aplicación de normativa de diseño internacional, tales como ASME, API, etc.",
    "Expertiz en generación de nuevos diseños para resolver o automatizar procesos repetitivos.",
    "Inglés técnico — lectura de códigos y especificaciones.",
  ],
};

export const proyectos = [
  {
    año: "2026",
    titulo: "Evaluación y reforzamiento de chimenea en planta metalúrgica a partir de medición de espesores con dron",
    descripcion:
      "Definición de estado actual de chimenea en planta metalúrgica, a través de medición de espesores con UT montado en dron. Lineamientos para evaluación y obtención de espesores equivalentes según ASME FFS-01. Validación de integridad con normativa especializada ASME STS-01, con énfasis en efectos dinámicos de viento.",
    tipo: "Minería · Chimenea · ASME · UT · Drone · Field for Service",
  }, 

  {
    año: "2026",
    titulo: "Diseño planta Seleccionadora y CRF 40 m³/hr para relleno de caserones en minera subterránea",
    descripcion:
      "Selección de equipos de proyecto de relleno de caserones primarios con relleno cementado. Clasificación de áridos a través de cribadora y generación de CRF a través de mezclador.",
    tipo: "Minería subterránea · CEMA · CRF · Cribado",
  }, 

  {
    año: "2025",
    titulo: "Evaluación estado de correas transportadoras y chutes para mineral y control de polvo",
    descripcion:
      "Validación correas mediante CEMA 7th. Análisis de trayectoria del mineral para mayor vida útil de correas mediante DEM, incluyendo chutes y tolvas.",
    tipo: "Minería · CEMA · Correas · DEM · Chutes/Tolvas",
  }, 

  {
    año: "2025",
    titulo: "Diseño y validación numérica de extensión plataforma anclada para trabajo de estación robótica exterior en cilindro de molinos Bola",
    descripcion:
      "Validación de estructura anclada considerando cargas máximas de brazo robótico.",
    tipo: "Estructura · Minería · Brazo robótico · AISC-360",
  }, 

  {
    año: "2024",
    titulo: "Diseño de estructura soportante y modificación de gripper para robot de paletizado",
    descripcion:
      "Proyecto de automatización de paletizado de cajas, que incluye simulación del alcance del brázo robótico.",
    tipo: "Diseño · Alimentos · Automatización · Brazo robótico · AISC-360",
  }, 

  {
    año: "2022",
    titulo: "Rediseño y validación numérica de herramienta para extracción de tuercas y pernos de revestimientos en molinos SAG y Bolas",
    descripcion:
      "Proyecto de innovación, diseño de herramienta para extracción de tuerca y arandela de molinos con acople a brazo robótico.",
    tipo: "Innovación · Diseño · Minería · Automatización · Brazo robótico",
  }, 
  {
    año: "2020",
    titulo: "Diseño y validación numérica de herramienta para botado de pernos de revestimientos en molinos SAG y Bolas",
    descripcion:
      "Proyecto de innovación, diseño de herramienta para botado de pernos molino con acople a brazo robótico.",
    tipo: "Innovación · Diseño · Minería · Automatización · Brazo robótico",
  },  
  {
    año: "2018",
    titulo: "Diseño y fabricación de estanque de almacenamiento de soda caustica",
    descripcion:
      "Estanque apoyado sobre el piso, de material duplex 2205, validación mediante API 650.",
    tipo: "API 650 · Aceros especiales · NCh 2369-2003",
  },  
  {
    año: "2018",
    titulo: "Reparación de una caldera ASME empresa de combustible",
    descripcion:
      "Equipo con estampa ASME que requiere reparación con estampa del mismo código.",
    tipo: "ASME VIII Div I · National Board · Estampa R",
  },  
  {
    año: "2016",
    titulo: "Diseño y validación numérica de estructuras de acero y equipamiento para flotación y deshidratación de plantas de tratamientos de riles industriales",
    descripcion:
      "Estructuras y equipos constitutivos de plantas de tratamiento de riles industriales.",
    tipo: "AISC 360 · Riles · FEM",
  },
  {
    año: "2013",
    titulo: "Diseño y fabricación de estanque amortiguador de golpe de ariete",
    descripcion:
      "Proyecto con estampa ASME.",
    tipo: "ASME VIII Div I · FEM · NCh 2369-2003 · Estampa U",
  },
  {
    año: "2013",
    titulo: "Diseño y fabricación de estanques alimenticios de 10, 15 y 30 m³",
    descripcion:
      "Verificación sísmica utilizando espectro sobre geometría y obteniendo esfuerzos resultantes mediante FEM.",
    tipo: "Estanque con patas · Alimentos · FEM · NCh 2369-2003",
  },
];

export const nav = [
  { texto: "Servicios", href: "#servicios" },
  { texto: "Experiencia", href: "#experiencia" },
  { texto: "Sobre mí", href: "#sobre" },
  { texto: "Contacto", href: "#contacto" },
];
