import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

export const profile = {
  name: 'Gerangel Berroteran Diaz',
  shortName: 'Gerangel',
  role: {
    es: 'Full-stack developer especializado en Java, React y sistemas escalables',
    en: 'Full-stack developer specialized in Java, React and scalable systems',
  },
  location: 'San Sebastian de los Reyes, Madrid',
  email: 'gz.berroteran@gmail.com',
  phone: '+34 633 90 35 58',
  linkedin: 'https://www.linkedin.com/in/Gerangel',
  github: 'https://github.com/yeritheboss',
  summary: {
    es: 'Ingeniero electronico de comunicaciones y desarrollador full-stack con experiencia en aplicaciones empresariales, microservicios, frontend moderno, DevOps y datos. Construyo productos robustos desde el backend hasta la interfaz, con foco en arquitectura limpia, entrega continua y claridad para negocio.',
    en: 'Electronics and communications engineer and full-stack developer experienced in enterprise applications, microservices, modern frontend, DevOps and data. I build robust products from backend to interface, focused on clean architecture, continuous delivery and business clarity.',
  },
  highlights: [
    { label: { es: 'Experiencia', en: 'Experience' }, value: { es: '7+ años', en: '7+ years' } },
    { label: { es: 'Core backend', en: 'Core backend' }, value: 'Java / Spring' },
    { label: { es: 'Frontend', en: 'Frontend' }, value: 'React / TS' },
    { label: { es: 'Arquitectura', en: 'Architecture' }, value: { es: 'Microservicios', en: 'Microservices' } },
  ],
}

export const focusAreas = [
  {
    icon: ServerCog,
    title: 'Backend & Microservices',
    description:
      'Diseno APIs REST, microservicios Java/Spring Boot y arquitecturas modulares orientadas a mantenibilidad, seguridad y escalabilidad.',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs'],
  },
  {
    icon: Layers3,
    title: 'Frontend Engineering',
    description:
      'Construyo interfaces web con React, TypeScript y Angular, cuidando componentes reutilizables, experiencia de usuario y velocidad de entrega.',
    tags: ['React', 'TypeScript', 'Angular', 'Tailwind'],
  },
  {
    icon: Workflow,
    title: 'DevOps & Delivery',
    description:
      'Participo en releases, pipelines y automatizacion para llevar software a produccion con mas control, trazabilidad y confianza.',
    tags: ['Jenkins', 'Docker', 'Git', 'Pipelines'],
  },
  {
    icon: BrainCircuit,
    title: 'Data & BI',
    description:
      'Aporto base en BI, Big Data y analitica para conectar producto, datos y toma de decisiones con herramientas practicas.',
    tags: ['Python', 'Power BI', 'Jupyter', 'Data Mining'],
  },
]

export const experience = [
  {
    company: 'Otto Group',
    role: 'Application Developer',
    period: 'Junio 2025 - Presente',
    context: 'Aplicaciones logisticas, centralizacion de datos y modernizacion de arquitectura.',
    impact: [
      'Desarrollo de aplicaciones para entorno logistico, con foco en centralizar datos y mejorar la integracion entre sistemas.',
      'Participacion en la migracion progresiva de monolitos hacia microservicios con Java 21 y Spring Boot.',
      'Trabajo con Google Cloud, Terraform y Bitbucket para soportar despliegues, infraestructura y flujos de desarrollo.',
      'Implementacion de mensajeria entre servicios con Kafka, Pub/Subs y Kafka bridges para mejorar comunicacion asincrona.',
      'Gestion y consumo de datos en SQL/PostgreSQL dentro de arquitecturas distribuidas.',
    ],
    stack: ['Java 21', 'Spring Boot', 'Google Cloud', 'Terraform', 'Kafka', 'Pub/Sub', 'PostgreSQL', 'Bitbucket'],
  },
  {
    company: 'BNP Paribas',
    role: 'Team Lead / Full-stack Software Developer',
    period: '2023 - Junio 2025',
    context: 'Sector bancario, liderazgo tecnico y evolucion de servicios empresariales.',
    impact: [
      'Liderazgo de equipo tecnico en desarrollo, mantenimiento y evolucion de aplicaciones bancarias.',
      'Responsable de nuevas features, bugfixes en produccion y soporte de servicios criticos.',
      'Mejora de rendimiento en servicios y microservicios mediante estrategias de caching, optimizacion y analisis de comportamiento.',
      'Implementacion de medidas de seguridad y endurecimiento de servicios dentro de un entorno regulado.',
      'Trabajo end-to-end con backend Java/Spring Boot, frontend Angular/TypeScript, SQL/PostgreSQL y pipelines Jenkins/Maven.',
    ],
    stack: ['Java 21', 'Spring Boot', 'Angular 8', 'TypeScript', 'PostgreSQL', 'Jenkins', 'Maven', 'Caching', 'IntelliJ', 'VS Code'],
  },
  {
    company: 'Second Window',
    role: 'Analista Java Full-stack',
    period: 'Junio 2022 - Junio 2023',
    context: 'Aplicaciones bancarias backend y frontend.',
    impact: [
      'Desarrollo de aplicaciones bancarias basadas en microservicios RESTful con Java 8/11 y Spring Boot.',
      'Maquetacion y desarrollo frontend con Angular 8.',
      'Trabajo con SQL, CRUD, DBeaver y herramientas de desarrollo como Eclipse y Visual Studio Code.',
      'Gestion de seguridad con Spring Security, criptografia, JWT y OAuth 2.0.',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'SQL', 'Spring Security', 'OAuth 2.0'],
  },
  {
    company: 'Redsys',
    role: 'Analista y Desarrollador Java',
    period: 'Mayo 2021 - Junio 2022',
    context: 'Telebanco, transacciones y sistemas bancarios.',
    impact: [
      'Analisis y resolucion de incidencias en aplicaciones de telebanco.',
      'Mejora y actualizacion de aplicaciones para optimizar eficiencia y estabilidad.',
      'Creacion y gestion de transacciones mediante microservicios RESTful y APIs.',
      'Uso de Java 8/11, Spring, Spring Boot, Jenkins y Eclipse.',
    ],
    stack: ['Java', 'Spring', 'Spring Boot', 'REST APIs', 'Jenkins'],
  },
  {
    company: 'Voiping US / AEAT',
    role: 'Desarrollador Java',
    period: 'Julio 2019 - Mayo 2021',
    context: 'Aplicaciones para administracion publica.',
    impact: [
      'Desarrollo de aplicaciones sobre framework propio basado en Java 8.',
      'Migracion de aplicaciones basadas en DB2 a Oracle.',
      'Automatizacion y soporte de entrega con Jenkins y Eclipse.',
    ],
    stack: ['Java 8', 'DB2', 'Oracle', 'Jenkins', 'Eclipse'],
  },
  {
    company: 'Amaris',
    role: 'Programador Java',
    period: 'Enero 2019 - Julio 2019',
    context: 'Software para laboratorios quimicos y geologicos.',
    impact: [
      'Personalizacion de una aplicacion para administracion y gestion de laboratorios.',
      'Trabajo con servidores JBoss WildFly, Selenium y repositorios GitHub.',
      'Uso de Java 11, scripts y APIs en Python y Groovy.',
    ],
    stack: ['Java 11', 'JBoss WildFly', 'Selenium', 'Python', 'Groovy'],
  },
]

export const projects = [
  {
    title: 'YeriGPT',
    category: 'AI web app',
    description:
      'Experimento de producto IA con interfaz web orientada a conversaciones y experiencia de usuario moderna.',
    image: '/static/assets/img/YERIGPT.PNG',
    link: 'https://yeri-gpt.vercel.app/',
    tags: ['AI', 'React', 'Product UI'],
  },
  {
    title: "Yeri's Clothing",
    category: 'Ecommerce',
    description:
      'Tienda online con catalogo, presentacion visual de producto y flujo de navegacion para compra.',
    image: "/static/assets/img/yeri's clothing.PNG",
    link: 'https://camisetasyeri.vercel.app/',
    tags: ['Ecommerce', 'Frontend', 'UX'],
  },
  {
    title: 'Hoobank',
    category: 'Fintech UI',
    description:
      'Mockup frontend de producto financiero con composicion SaaS, secciones comerciales y UI responsive.',
    image: '/static/assets/img/hoobank.PNG',
    link: 'https://new-bank-muckup.vercel.app/',
    tags: ['React', 'Landing', 'Fintech'],
  },
  {
    title: 'Mobile App Concept',
    category: 'App design',
    description:
      'Concepto visual de aplicacion movil para practicar UI, estructura de pantallas y presentacion de producto.',
    image: '/static/assets/img/mobile app.png',
    link: '#contact',
    tags: ['Mobile', 'UI Design'],
  },
]

export const skillGroups = [
  {
    title: 'Backend',
    icon: Code2,
    skills: ['Java', 'JSP', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'Hibernate', 'Mockito', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: Rocket,
    skills: ['React', 'TypeScript', 'Angular', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Data',
    icon: Database,
    skills: ['Python', 'Flask', 'Power BI', 'Jupyter', 'RStudio', 'Data Mining', 'Deep Learning', 'SQL'],
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    skills: ['Git', 'Jenkins', 'Docker', 'Kafka', 'Postman', 'DBeaver', 'Eclipse', 'IntelliJ'],
  },
  {
    title: 'Security & Architecture',
    icon: ShieldCheck,
    skills: ['SOLID', 'Arquitectura hexagonal', 'JWT', 'OAuth 2.0', 'Criptografia', 'Microservicios'],
  },
]

export const education = [
  {
    title: 'Ingeniero Electronico de Comunicaciones',
    institution: 'Universidad Politecnica de Madrid',
    period: '2009 - 2019',
  },
  {
    title: 'BI and BigData Analyst',
    institution: 'Universidad Deusto',
    period: '2018 - 2019',
  },
  {
    title: 'Big Data Scientist',
    institution: 'ICloud',
    period: '2018 - 2019',
  },
  {
    title: 'Java Developer',
    institution: 'Tokio School',
    period: '2017 - 2018',
  },
]
