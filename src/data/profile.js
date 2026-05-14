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
  shortName: 'Gerangel (Yeri)',
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
    description: {
      es: 'Diseno APIs REST, microservicios Java/Spring Boot y arquitecturas modulares orientadas a mantenibilidad, seguridad y escalabilidad.',
      en: 'I design REST APIs, Java/Spring Boot microservices and modular architectures focused on maintainability, security and scalability.',
    },
    tags: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs'],
  },
  {
    icon: Layers3,
    title: 'Frontend Engineering',
    description: {
      es: 'Construyo interfaces web con React, TypeScript y Angular, cuidando componentes reutilizables, experiencia de usuario y velocidad de entrega.',
      en: 'I build web interfaces with React, TypeScript and Angular, focusing on reusable components, user experience and delivery speed.',
    },
    tags: ['React', 'TypeScript', 'Angular', 'Tailwind'],
  },
  {
    icon: Workflow,
    title: 'DevOps & Delivery',
    description: {
      es: 'Participo en releases, pipelines y automatizacion para llevar software a produccion con mas control, trazabilidad y confianza.',
      en: 'I contribute to releases, pipelines and automation to move software into production with more control, traceability and confidence.',
    },
    tags: ['Jenkins', 'Docker', 'Git', 'Pipelines'],
  },
  {
    icon: BrainCircuit,
    title: 'Data & BI',
    description: {
      es: 'Aporto base en BI, Big Data y analitica para conectar producto, datos y toma de decisiones con herramientas practicas.',
      en: 'I bring a BI, Big Data and analytics background to connect product, data and decision-making with practical tools.',
    },
    tags: ['Python', 'Power BI', 'Jupyter', 'Data Mining'],
  },
]

export const experience = [
  {
    company: 'Otto Group',
    role: 'Application Developer',
    period: { es: 'Junio 2025 - Presente', en: 'June 2025 - Present' },
    context: {
      es: 'Aplicaciones logisticas, centralizacion de datos y modernizacion de arquitectura.',
      en: 'Logistics applications, data centralization and architecture modernization.',
    },
    impact: [
      { es: 'Desarrollo de aplicaciones para entorno logistico, con foco en centralizar datos y mejorar la integracion entre sistemas.', en: 'Development of applications for logistics environments, focused on centralizing data and improving integration between systems.' },
      { es: 'Participacion en la migracion progresiva de monolitos hacia microservicios con Java 21 y Spring Boot.', en: 'Participation in the progressive migration from monoliths to microservices with Java 21 and Spring Boot.' },
      { es: 'Trabajo con Google Cloud, Terraform y Bitbucket para soportar despliegues, infraestructura y flujos de desarrollo.', en: 'Work with Google Cloud, Terraform and Bitbucket to support deployments, infrastructure and development workflows.' },
      { es: 'Implementacion de mensajeria entre servicios con Kafka, Pub/Subs y Kafka bridges para mejorar comunicacion asincrona.', en: 'Implementation of service-to-service messaging with Kafka, Pub/Subs and Kafka bridges to improve asynchronous communication.' },
      { es: 'Gestion y consumo de datos en SQL/PostgreSQL dentro de arquitecturas distribuidas.', en: 'Management and consumption of SQL/PostgreSQL data within distributed architectures.' },
    ],
    stack: ['Java 21', 'Spring Boot', 'Google Cloud', 'Terraform', 'Kafka', 'Pub/Sub', 'PostgreSQL', 'Bitbucket'],
  },
  {
    company: 'BNP Paribas',
    role: 'Team Lead / Full-stack Software Developer',
    period: { es: '2023 - Junio 2025', en: '2023 - June 2025' },
    context: {
      es: 'Sector bancario, liderazgo tecnico y evolucion de servicios empresariales.',
      en: 'Banking sector, technical leadership and evolution of enterprise services.',
    },
    impact: [
      { es: 'Liderazgo de equipo tecnico en desarrollo, mantenimiento y evolucion de aplicaciones bancarias.', en: 'Technical team leadership for development, maintenance and evolution of banking applications.' },
      { es: 'Responsable de nuevas features, bugfixes en produccion y soporte de servicios criticos.', en: 'Responsible for new features, production bug fixes and support for critical services.' },
      { es: 'Mejora de rendimiento en servicios y microservicios mediante estrategias de caching, optimizacion y analisis de comportamiento.', en: 'Performance improvements in services and microservices through caching, optimization and behavior analysis.' },
      { es: 'Implementacion de medidas de seguridad y endurecimiento de servicios dentro de un entorno regulado.', en: 'Implementation of security measures and service hardening within a regulated environment.' },
      { es: 'Trabajo end-to-end con backend Java/Spring Boot, frontend Angular/TypeScript, SQL/PostgreSQL y pipelines Jenkins/Maven.', en: 'End-to-end work across Java/Spring Boot backend, Angular/TypeScript frontend, SQL/PostgreSQL and Jenkins/Maven pipelines.' },
    ],
    stack: ['Java 21', 'Spring Boot', 'Angular 8', 'TypeScript', 'PostgreSQL', 'Jenkins', 'Maven', 'Caching', 'IntelliJ', 'VS Code'],
  },
  {
    company: 'Second Window',
    role: { es: 'Analista Java Full-stack', en: 'Java Full-stack Analyst' },
    period: { es: 'Junio 2022 - Junio 2023', en: 'June 2022 - June 2023' },
    context: { es: 'Aplicaciones bancarias backend y frontend.', en: 'Backend and frontend banking applications.' },
    impact: [
      { es: 'Desarrollo de aplicaciones bancarias basadas en microservicios RESTful con Java 8/11 y Spring Boot.', en: 'Development of banking applications based on RESTful microservices with Java 8/11 and Spring Boot.' },
      { es: 'Maquetacion y desarrollo frontend con Angular 8.', en: 'Frontend layout and development with Angular 8.' },
      { es: 'Trabajo con SQL, CRUD, DBeaver y herramientas de desarrollo como Eclipse y Visual Studio Code.', en: 'Work with SQL, CRUD, DBeaver and development tools such as Eclipse and Visual Studio Code.' },
      { es: 'Gestion de seguridad con Spring Security, criptografia, JWT y OAuth 2.0.', en: 'Security management with Spring Security, cryptography, JWT and OAuth 2.0.' },
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'SQL', 'Spring Security', 'OAuth 2.0'],
  },
  {
    company: 'Redsys',
    role: { es: 'Analista y Desarrollador Java', en: 'Java Analyst and Developer' },
    period: { es: 'Mayo 2021 - Junio 2022', en: 'May 2021 - June 2022' },
    context: { es: 'Telebanco, transacciones y sistemas bancarios.', en: 'Telebanking, transactions and banking systems.' },
    impact: [
      { es: 'Analisis y resolucion de incidencias en aplicaciones de telebanco.', en: 'Analysis and incident resolution in telebanking applications.' },
      { es: 'Mejora y actualizacion de aplicaciones para optimizar eficiencia y estabilidad.', en: 'Application improvements and updates to optimize efficiency and stability.' },
      { es: 'Creacion y gestion de transacciones mediante microservicios RESTful y APIs.', en: 'Creation and management of transactions through RESTful microservices and APIs.' },
      { es: 'Uso de Java 8/11, Spring, Spring Boot, Jenkins y Eclipse.', en: 'Use of Java 8/11, Spring, Spring Boot, Jenkins and Eclipse.' },
    ],
    stack: ['Java', 'Spring', 'Spring Boot', 'REST APIs', 'Jenkins'],
  },
  {
    company: 'Voiping US / AEAT',
    role: { es: 'Desarrollador Java', en: 'Java Developer' },
    period: { es: 'Julio 2019 - Mayo 2021', en: 'July 2019 - May 2021' },
    context: { es: 'Aplicaciones para administracion publica.', en: 'Applications for public administration.' },
    impact: [
      { es: 'Desarrollo de aplicaciones sobre framework propio basado en Java 8.', en: 'Development of applications on an in-house framework based on Java 8.' },
      { es: 'Migracion de aplicaciones basadas en DB2 a Oracle.', en: 'Migration of DB2-based applications to Oracle.' },
      { es: 'Automatizacion y soporte de entrega con Jenkins y Eclipse.', en: 'Delivery automation and support with Jenkins and Eclipse.' },
    ],
    stack: ['Java 8', 'DB2', 'Oracle', 'Jenkins', 'Eclipse'],
  },
  {
    company: 'Amaris',
    role: { es: 'Programador Java', en: 'Java Programmer' },
    period: { es: 'Enero 2019 - Julio 2019', en: 'January 2019 - July 2019' },
    context: { es: 'Software para laboratorios quimicos y geologicos.', en: 'Software for chemical and geological laboratories.' },
    impact: [
      { es: 'Personalizacion de una aplicacion para administracion y gestion de laboratorios.', en: 'Customization of an application for laboratory administration and management.' },
      { es: 'Trabajo con servidores JBoss WildFly, Selenium y repositorios GitHub.', en: 'Work with JBoss WildFly servers, Selenium and GitHub repositories.' },
      { es: 'Uso de Java 11, scripts y APIs en Python y Groovy.', en: 'Use of Java 11, scripts and APIs in Python and Groovy.' },
    ],
    stack: ['Java 11', 'JBoss WildFly', 'Selenium', 'Python', 'Groovy'],
  },
]

export const projects = [
  {
    title: 'YeriGPT',
    category: 'AI web app',
    description: {
      es: 'Experimento de producto IA con interfaz web orientada a conversaciones y experiencia de usuario moderna.',
      en: 'AI product experiment with a web interface focused on conversations and modern user experience.',
    },
    image: '/static/assets/img/project-yerigpt.png',
    link: 'https://yeri-gpt.vercel.app/',
    tags: ['AI', 'React', 'Product UI'],
  },
  {
    title: "Yeri's Clothing",
    category: 'Ecommerce',
    description: {
      es: 'Tienda online con catalogo, presentacion visual de producto y flujo de navegacion para compra.',
      en: 'Online store with catalog, visual product presentation and purchase navigation flow.',
    },
    image: '/static/assets/img/yeris-clothing.png',
    link: 'https://camisetasyeri.vercel.app/',
    tags: ['Ecommerce', 'Frontend', 'UX'],
  },
  {
    title: 'Hoobank',
    category: 'Fintech UI',
    description: {
      es: 'Mockup frontend de producto financiero con composicion SaaS, secciones comerciales y UI responsive.',
      en: 'Frontend mockup for a financial product with SaaS composition, commercial sections and responsive UI.',
    },
    image: '/static/assets/img/project-hoobank.png',
    link: 'https://new-bank-muckup.vercel.app/',
    tags: ['React', 'Landing', 'Fintech'],
  },
  {
    title: 'Mobile App Concept',
    category: 'App design',
    description: {
      es: 'Concepto visual de aplicacion movil para practicar UI, estructura de pantallas y presentacion de producto.',
      en: 'Visual mobile app concept to practice UI, screen structure and product presentation.',
    },
    image: '/static/assets/img/mobile-app.png',
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
