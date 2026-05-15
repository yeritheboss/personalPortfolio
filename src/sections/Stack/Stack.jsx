import { motion } from 'framer-motion'
import {
  Cloud,
  Code2,
  Database,
  Monitor,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  Zap,
} from 'lucide-react'
import { fadeUp } from '../../app/constants'
import './Stack.css'

const coreStack = [
  { name: 'Java', icon: 'java', tone: 'orange' },
  { name: 'Spring Boot', icon: 'spring', tone: 'green' },
  { name: 'Docker', icon: 'docker', tone: 'blue' },
  { name: 'Angular', icon: 'angular', tone: 'red' },
  { name: 'PostgreSQL', icon: 'postgres', tone: 'sky' },
  { name: 'Kafka', icon: 'kafka', tone: 'white' },
]

const stackGroups = [
  {
    title: 'Backend Core',
    icon: Code2,
    tone: 'green',
    description: {
      es: 'Desarrollo de APIs, logica de negocio, persistencia y seguridad.',
      en: 'APIs, business logic, persistence and security.',
    },
    skills: [
      ['Java', 'Principal'],
      ['Spring Boot', 'Principal'],
      ['Spring Security', 'Principal'],
      ['Hibernate', 'Principal'],
      ['REST APIs', 'Principal'],
    ],
  },
  {
    title: { es: 'Arquitectura & Seguridad', en: 'Architecture & Security' },
    icon: ShieldCheck,
    tone: 'purple',
    description: {
      es: 'Diseno de arquitecturas limpias, seguras y escalables.',
      en: 'Clean, secure and scalable architecture design.',
    },
    skills: [
      ['Arquitectura Hexagonal', 'Principal'],
      ['SOLID', 'Principal'],
      ['JWT', 'Principal'],
      ['OAuth 2.0', 'Principal'],
      ['Microservicios', 'Principal'],
      ['Criptografia', 'Complementario'],
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    tone: 'blue',
    description: {
      es: 'Contenedores, CI/CD, mensajeria y herramientas de entrega.',
      en: 'Containers, CI/CD, messaging and delivery tooling.',
    },
    skills: [
      ['Docker', 'Principal'],
      ['Azure', 'Principal'],
      ['Google Cloud', 'Principal'],
      ['Jenkins', 'Complementario'],
      ['Git', 'Principal'],
      ['Kafka', 'Complementario'],
      ['Postman', 'Complementario'],
      ['DBeaver', 'Complementario'],
    ],
  },
  {
    title: 'Frontend Engineering',
    icon: Monitor,
    tone: 'gold',
    description: {
      es: 'Interfaces modernas, responsivas y buenas practicas.',
      en: 'Modern responsive interfaces and strong frontend practices.',
    },
    skills: [
      ['React', 'Complementario'],
      ['TypeScript', 'Principal'],
      ['Angular', 'Principal'],
      ['Tailwind', 'Complementario'],
      ['HTML/CSS', 'Principal'],
      ['Bootstrap', 'Complementario'],
      ['jQuery', 'Complementario'],
    ],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    tone: 'cyan',
    description: {
      es: 'Analisis de datos, notebooks y visualizacion.',
      en: 'Data analysis, notebooks and visualization.',
    },
    skills: [
      ['SQL', 'Principal'],
      ['Python', 'Complementario'],
      ['Power BI', 'Complementario'],
      ['Jupyter', 'Complementario'],
      ['RStudio', 'Complementario'],
      ['Data Mining', 'Complementario'],
      ['Deep Learning', 'Complementario'],
    ],
  },
]

const principles = [
  { icon: Zap, label: { es: 'Enfoque en rendimiento y escalabilidad', en: 'Performance and scalability focus' } },
  { icon: ShieldCheck, label: { es: 'Seguridad desde el diseno', en: 'Security from design' } },
  { icon: Code2, label: { es: 'Codigo limpio y mantenible', en: 'Clean, maintainable code' } },
  { icon: Rocket, label: { es: 'Entrega continua y mejora constante', en: 'Continuous delivery and improvement' } },
]

const copy = {
  es: {
    eyebrow: 'Stack tecnico',
    title: 'Herramientas para construir de backend a interfaz',
    text: 'Tecnologias y herramientas que utilizo para disenar, construir, desplegar y mantener soluciones escalables y seguras.',
    main: 'Stack principal',
    mainText: 'Tecnologias que uso con mayor frecuencia en mis proyectos.',
    apply: 'Como aplico este stack',
    applyText:
      'Combino buenas practicas de desarrollo, seguridad y arquitectura con herramientas modernas para crear soluciones robustas, mantenibles y escalables, desde el backend hasta interfaces intuitivas y datos que generan valor.',
  },
  en: {
    eyebrow: 'Technical stack',
    title: 'Tools to build from backend to interface',
    text: 'Technologies and tools I use to design, build, deploy and maintain scalable and secure solutions.',
    main: 'Core stack',
    mainText: 'Technologies I use most frequently across my projects.',
    apply: 'How I apply this stack',
    applyText:
      'I combine development, security and architecture practices with modern tooling to create robust, maintainable and scalable solutions, from backend systems to intuitive interfaces and valuable data.',
  },
}

function localize(value, lang) {
  if (typeof value === 'string') return value
  return value[lang] ?? value.en ?? value.es
}

export function Stack({ lang = 'es' }) {
  const t = copy[lang] ?? copy.es

  return (
    <section id="stack" className="section-shell stack-section">
      <div className="stack-hero">
        <motion.div className="stack-hero-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="stack-eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
        </motion.div>
        <StackBlueprint />
      </div>

      <motion.div className="stack-primary" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="stack-primary-intro">
          <span className="stack-star">
            <Star size={27} />
          </span>
          <div>
            <h3>{t.main}</h3>
            <p>{t.mainText}</p>
          </div>
        </div>
        <div className="stack-core-list">
          {coreStack.map((item) => (
            <span key={item.name} className={`stack-core stack-core-${item.tone}`}>
              <i>
                <CoreStackIcon type={item.icon} />
              </i>
              {item.name}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="stack-card-grid">
        {stackGroups.map((group, index) => {
          const Icon = group.icon
          return (
            <motion.article
              key={localize(group.title, lang)}
              className={`stack-card stack-card-${group.tone}`}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="stack-card-icon">
                <Icon size={29} />
              </span>
              <h3>{localize(group.title, lang)}</h3>
              <p>{localize(group.description, lang)}</p>
              <ul>
                {group.skills.map(([skill, level]) => (
                  <li key={skill}>
                    <span>{skill}</span>
                    <em>{level}</em>
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>

      <motion.aside className="stack-application" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="stack-application-copy">
          <span>
            <Target size={30} />
          </span>
          <div>
            <h3>{t.apply}</h3>
            <p>{t.applyText}</p>
          </div>
        </div>
        <div className="stack-principles">
          {principles.map((item) => {
            const Icon = item.icon
            return (
              <span key={localize(item.label, lang)}>
                <Icon size={30} />
                {localize(item.label, lang)}
              </span>
            )
          })}
        </div>
      </motion.aside>
    </section>
  )
}

function StackBlueprint() {
  return (
    <div className="stack-blueprint" aria-hidden="true">
      <svg className="blueprint-flow" viewBox="0 0 620 300" role="presentation" focusable="false">
        <defs>
          <linearGradient id="flowStackFill" x1="125" x2="355" y1="62" y2="205" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0d3a55" stopOpacity=".86" />
            <stop offset=".58" stopColor="#071d34" stopOpacity=".78" />
            <stop offset="1" stopColor="#04101f" stopOpacity=".64" />
          </linearGradient>
          <filter id="flowGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="flow-stars">
          <circle cx="48" cy="58" r="1.7" />
          <circle cx="112" cy="100" r="1.2" />
          <circle cx="388" cy="50" r="1.6" />
          <circle cx="528" cy="72" r="1.5" />
          <circle cx="88" cy="232" r="1.1" />
          <circle cx="458" cy="132" r="1.25" />
          <circle cx="579" cy="218" r="1.1" />
        </g>

        <g className="flow-routes flow-routes-base">
          <path d="M75 174 H126 C153 174 147 151 176 151 H231" />
          <path d="M343 92 H390 C413 92 407 69 430 69" />
          <path d="M352 142 H479 C500 142 493 160 510 160" />
          <path d="M339 184 H401 C430 184 414 230 448 230 H516 C544 230 536 202 536 216" />
          <path d="M140 226 H229 C265 226 251 196 289 196 H338" />
          <path d="M75 178 V164 C75 146 96 139 122 139 H158" />
        </g>

        <g className="flow-routes flow-routes-active">
          <path d="M75 174 H126 C153 174 147 151 176 151 H231" />
          <path d="M343 92 H390 C413 92 407 69 430 69" />
          <path d="M352 142 H479 C500 142 493 160 510 160" />
          <path d="M339 184 H401 C430 184 414 230 448 230 H516 C544 230 536 202 536 216" />
          <path d="M140 226 H229 C265 226 251 196 289 196 H338" />
          <path d="M75 178 V164 C75 146 96 139 122 139 H158" />
        </g>

        <g className="flow-arrivals">
          <circle cx="430" cy="69" r="8" />
          <circle cx="510" cy="160" r="8" />
          <circle cx="536" cy="216" r="8" />
          <circle cx="75" cy="174" r="6.5" />
        </g>

        <g className="flow-stack" filter="url(#flowGlow)">
          <path className="flow-stack-shell" d="M277 61 365 108C379 116 379 131 365 139L277 187C264 194 248 194 235 187L147 139C133 131 133 116 147 108L235 61C248 54 264 54 277 61Z" />
          <path className="flow-stack-layer flow-stack-layer-1" d="M151 132 235 178C248 185 264 185 277 178L361 132V158L277 205C264 212 248 212 235 205L151 158Z" />
          <path className="flow-stack-layer flow-stack-layer-2" d="M151 162 235 208C248 215 264 215 277 208L361 162V188L277 235C264 242 248 242 235 235L151 188Z" />
          <path className="flow-stack-layer flow-stack-layer-3" d="M151 192 235 238C248 245 264 245 277 238L361 192V218L277 265C264 272 248 272 235 265L151 218Z" />
          <path className="flow-stack-top flow-stack-layer flow-stack-layer-top" d="M275 73 340 108C350 113 350 124 340 129L275 164C263 170 249 170 237 164L172 129C162 124 162 113 172 108L237 73C249 67 263 67 275 73Z" />
        </g>

        <g className="flow-code">
          <path d="M235 110 213 123 235 136" />
          <path d="M278 110 300 123 278 136" />
          <path d="M268 103 246 143" />
        </g>

        <g className="flow-cloud">
          <path d="M438 91H507C523 91 534 80 534 66C534 51 523 40 506 40C501 25 486 18 471 22C458 25 449 35 446 48C433 48 423 57 423 69C423 82 428 91 438 91Z" />
          <path d="M446 48C453 48 459 50 465 54" />
        </g>

        <g className="flow-db">
          <ellipse cx="548" cy="145" rx="29" ry="10" />
          <path d="M519 145V202C519 209 532 214 548 214C564 214 577 209 577 202V145" />
          <path d="M519 173C519 180 532 185 548 185C564 185 577 180 577 173" />
          <ellipse cx="548" cy="202" rx="29" ry="10" />
        </g>

        <g className="flow-shield">
          <path d="M38 151 72 164V201C72 224 38 240 38 240S4 224 4 201V164L38 151Z" />
          <path d="M38 179 53 185V201C53 212 38 220 38 220S23 212 23 201V185L38 179Z" />
        </g>
      </svg>
    </div>
  )
}

function CoreStackIcon({ type }) {
  if (type === 'java') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M18 26h15v4.5c0 3.6-3.2 6.5-7.2 6.5h-.6c-4 0-7.2-2.9-7.2-6.5V26Z" />
        <path d="M33 27.5h2.1c2.1 0 3.4 1.1 3.4 2.8s-1.3 2.8-3.4 2.8H33" />
        <path d="M16 39h20" />
        <path d="M22 21c-2.5-3.1 4.8-4.7 1.2-8.6" />
        <path d="M28 21c-2.2-2.8 4.6-4.5 1.5-8.2" />
        <path d="M24.6 18.7c2.2-.7 4.4-.7 6.8 0" />
      </svg>
    )
  }

  if (type === 'spring') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M39 10c-1.3 13.8-8.8 24.5-19.2 24.5-6.4 0-10.8-3.8-10.8-9.2 0-9.5 10.2-15.8 30-15.3Z" />
        <path d="M15 30c4.7-8 11.7-11.6 20-13.3" />
      </svg>
    )
  }

  if (type === 'docker') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 25h25c3.8 0 6.8-1.2 8.8-3.6.1 4.2-2.1 8.4-5.6 10.9-3.1 2.2-7 3.1-12.9 3.1H14.2C10.8 35.4 8 32.6 8 29.2V25Z" />
        <path d="M14 17h5v5h-5zM21 17h5v5h-5zM28 17h5v5h-5zM21 10h5v5h-5z" />
      </svg>
    )
  }

  if (type === 'react') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="18" ry="7" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="3.4" />
      </svg>
    )
  }

  if (type === 'angular') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6 39 11.4 36.7 31.8 24 42 11.3 31.8 9 11.4 24 6Z" />
        <path d="M18 31 24 15 30 31" />
        <path d="M20.2 26h7.6" />
      </svg>
    )
  }

  if (type === 'postgres') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse cx="24" cy="13" rx="13" ry="6" />
        <path d="M11 13v19c0 3.3 5.8 6 13 6s13-2.7 13-6V13" />
        <path d="M11 22c0 3.3 5.8 6 13 6s13-2.7 13-6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <circle cx="36" cy="12" r="4" />
      <circle cx="24" cy="24" r="4" />
      <circle cx="12" cy="36" r="4" />
      <circle cx="36" cy="36" r="4" />
      <path d="M15.6 13.9 20.4 22M32.4 13.9 27.6 22M20.4 26 15.6 34.1M27.6 26l4.8 8.1" />
    </svg>
  )
}
