import { motion } from 'framer-motion'
import {
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Eye,
  GitBranch,
  Infinity,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Tags,
  Target,
  Workflow,
} from 'lucide-react'
import { fadeUp } from '../../app/constants'
import './Value.css'

const copy = {
  es: {
    eyebrow: 'Cómo aporto valor',
    title: 'Construyo software que resuelve problemas reales y genera impacto.',
    text:
      'Combino backend, frontend, datos y automatización para diseñar sistemas mantenibles, escalables y alineados con los objetivos del negocio.',
    systemEyebrow: 'Visión de sistemas',
    systemText: 'Diseño soluciones completas pensando en el flujo real de los datos y la entrega continua de valor.',
    ways: 'Mis cuatro formas de aportar valor',
    principles: 'Mis principios de ingeniería',
    quote: 'Mi objetivo es simple: construir software que aporte valor real, sea fácil de mantener y esté listo para el futuro.',
    projects: 'Ver proyectos',
    context: 'Contexto de valor',
  },
  en: {
    eyebrow: 'How I create value',
    title: 'I build software that solves real problems and creates impact.',
    text:
      'I combine backend, frontend, data and automation to design maintainable, scalable systems aligned with business goals.',
    systemEyebrow: 'Systems vision',
    systemText: 'I design complete solutions around real data flows and continuous delivery of value.',
    ways: 'My four ways to create value',
    principles: 'Engineering principles',
    quote: 'My goal is simple: build software that creates real value, is easy to maintain and ready for the future.',
    projects: 'View projects',
    context: 'Value context',
  },
}

const valuePillars = [
  {
    icon: BrainCircuit,
    label: { es: 'Pensamiento de producto', en: 'Product thinking' },
  },
  {
    icon: Code2,
    label: { es: 'Código mantenible', en: 'Maintainable code' },
  },
  {
    icon: Infinity,
    label: { es: 'Entrega continua', en: 'Continuous delivery' },
  },
  {
    icon: BarChart3,
    label: { es: 'Datos que cuentan', en: 'Data that matters' },
  },
]

const cards = [
  {
    number: '01',
    eyebrow: 'Backend & APIs',
    icon: ServerCog,
    title: { es: 'Backend orientado a negocio y escalabilidad', en: 'Business-oriented backend and scalability' },
    shortTitle: { es: 'Sistemas robustos que soportan el crecimiento', en: 'Robust systems that support growth' },
    text: {
      es: 'Diseño arquitecturas modulares y APIs claras que facilitan la evolución del producto.',
      en: 'I design modular architectures and clear APIs that help products evolve.',
    },
    body: {
      es: 'Me enfoco en separación de responsabilidades, resiliencia y observabilidad.',
      en: 'I focus on separation of concerns, resilience and observability.',
    },
    diagram: 'backend',
    valuePoints: [
      { icon: Layers3, label: { es: 'APIs versionadas', en: 'Versioned APIs' } },
      { icon: Rocket, label: { es: 'Comunicación asíncrona', en: 'Async communication' } },
      { icon: ShieldCheck, label: { es: 'Seguridad JWT / OAuth2', en: 'JWT / OAuth2 security' } },
      { icon: Eye, label: { es: 'Observabilidad y logs', en: 'Observability and logs' } },
    ],
  },
  {
    number: '02',
    eyebrow: 'Frontend',
    icon: Layers3,
    title: { es: 'Interfaces pensadas para claridad y velocidad', en: 'Interfaces designed for clarity and speed' },
    shortTitle: { es: 'Experiencias rápidas, claras y memorables', en: 'Fast, clear and memorable experiences' },
    text: {
      es: 'Construyo interfaces modernas con Angular, priorizando rendimiento, accesibilidad y diseño responsive.',
      en: 'I build modern interfaces with Angular, prioritizing performance, accessibility and responsive design.',
    },
    body: {
      es: 'Busco que cada interacción aporte valor y haga el producto más utilizable.',
      en: 'I make every interaction add value and make the product easier to use.',
    },
    bodyList: [
      { es: 'Arquitectura por componentes', en: 'Component architecture' },
      { es: 'Diseño responsive', en: 'Responsive design' },
      { es: 'Estados y carga eficiente', en: 'Efficient states and loading' },
      { es: 'UX enfocada en producto', en: 'Product-focused UX' },
    ],
    diagram: 'frontend',
    valuePoints: [
      { icon: Code2, label: { es: 'Arquitectura por componentes', en: 'Component architecture' } },
      { icon: MonitorSmartphone, label: { es: 'Diseño responsive', en: 'Responsive design' } },
      { icon: Sparkles, label: { es: 'Estados y carga eficiente', en: 'Efficient states and loading' } },
      { icon: Target, label: { es: 'UX enfocada en producto', en: 'Product-focused UX' } },
    ],
  },
  {
    number: '03',
    eyebrow: 'DevOps & Delivery',
    icon: Workflow,
    title: { es: 'Entrega continua y estabilidad', en: 'Continuous delivery and stability' },
    shortTitle: { es: 'Automatizo para entregar con confianza', en: 'I automate to deliver with confidence' },
    text: {
      es: 'Implemento pipelines de integración y despliegue continuo para reducir fricción, errores y tiempos de entrega.',
      en: 'I implement integration and deployment pipelines to reduce friction, errors and delivery time.',
    },
    body: {
      es: 'Me importa que el proceso sea repetible, observable y seguro.',
      en: 'I care about repeatable, observable and safe delivery processes.',
    },
    securityNote: {
      es: [
        'Integro revisión de vulnerabilidades con herramientas como ',
        'Snyk',
        ' y control de calidad con ',
        'Sonar',
        ' manteniendo un coverage objetivo del 80% dentro del pipeline.',
      ],
      en: [
        'I integrate vulnerability reviews with tools like ',
        'Snyk',
        ' and quality gates with ',
        'Sonar',
        ' while targeting 80% coverage directly in the pipeline.',
      ],
    },
    diagram: 'delivery',
    valuePoints: [
      { icon: Workflow, label: 'CI/CD' },
      { icon: DockerIcon, label: 'Contenedores Docker' },
      { icon: Infinity, label: { es: 'Pipelines automatizados', en: 'Automated pipelines' } },
      { icon: Tags, label: { es: 'Trazabilidad de releases', en: 'Release traceability' } },
    ],
  },
  {
    number: '04',
    eyebrow: 'Data & BI',
    icon: DatabaseIcon,
    title: { es: 'Datos convertidos en decisiones', en: 'Data turned into decisions' },
    shortTitle: { es: 'Datos que impulsan decisiones', en: 'Data that drives decisions' },
    text: {
      es: 'Transformo datos en información útil para entender el negocio y mejorar el producto.',
      en: 'I turn data into useful information to understand the business and improve the product.',
    },
    body: {
      es: 'Creo dashboards y reportes que conectan métricas técnicas con objetivos reales.',
      en: 'I create dashboards and reports that connect technical metrics with real goals.',
    },
    diagram: 'data',
    valuePoints: [
      { icon: BarChart3, label: { es: 'Visualización clara', en: 'Clear visualization' } },
      { icon: Target, label: { es: 'Métricas que importan', en: 'Meaningful metrics' } },
      { icon: Workflow, label: { es: 'Automatización de reporting', en: 'Reporting automation' } },
      { icon: Eye, label: { es: 'Exploración de datos', en: 'Data exploration' } },
    ],
  },
]

const principles = [
  ['Simplicidad', 'Prefiero sistemas simples que puedan crecer con el tiempo.', Target],
  ['Automatización', 'Menos trabajo manual, más valor real para el usuario.', Workflow],
  ['Observabilidad', 'Si no se puede medir, no se puede entender.', Eye],
  ['Calidad', 'Escribo código que sea mantenible, testeable y seguro.', ShieldCheck],
  ['Colaboración', 'Los mejores productos nacen de equipos alineados.', GitBranch],
]

function localize(value, lang) {
  if (typeof value === 'string') return value
  return value[lang] ?? value.en ?? value.es
}

export function Value({ lang = 'es' }) {
  const t = copy[lang] ?? copy.es

  return (
    <section id="value" className="section-shell value-section">
      <div className="value-hero">
        <motion.div className="value-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="value-eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
          <div className="value-pillars" aria-label={t.eyebrow}>
            {valuePillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <span key={localize(pillar.label, lang)}>
                  <i>
                    <Icon size={25} />
                  </i>
                  {localize(pillar.label, lang)}
                </span>
              )
            })}
          </div>
        </motion.div>

        <motion.div className="value-system" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div>
            <p className="value-eyebrow">{t.systemEyebrow}</p>
            <p>{t.systemText}</p>
          </div>
          <SystemDiagram />
        </motion.div>
      </div>

      <p className="value-section-label">{t.ways}</p>
      <div className="value-card-grid">
        {cards.map((card, index) => (
          <ValueCard card={card} index={index} key={card.number} lang={lang} t={t} />
        ))}
      </div>

    </section>
  )
}

function ValueCard({ card, index, lang, t }) {
  return (
    <motion.article
      className={`value-card value-card-${card.diagram}`}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="value-card-head">
        <span>{card.number}</span>
        <p>{card.eyebrow}</p>
      </div>
      <div className="value-card-body">
        <div>
          <h3>{localize(card.shortTitle, lang)}</h3>
          <p>{localize(card.text, lang)}</p>
          {card.bodyList ? (
            <ul className="value-card-list">
              {card.bodyList.map((item) => (
                <li key={localize(item, lang)}>{localize(item, lang)}</li>
              ))}
            </ul>
          ) : (
            <p>{localize(card.body, lang)}</p>
          )}
          {card.securityNote ? <p className="value-security-note">{renderSecurityNote(card.securityNote, lang)}</p> : null}
        </div>
        <CardVisual type={card.diagram} />
      </div>
      <div className="value-impact-strip">
        {card.valuePoints.map((item) => {
          const PointIcon = item.icon
          return (
            <span key={localize(item.label, lang)}>
              <PointIcon size={21} />
              {localize(item.label, lang)}
            </span>
          )
        })}
      </div>
    </motion.article>
  )
}

function renderSecurityNote(note, lang) {
  const text = note[lang] ?? note.en ?? note.es
  return text.map((part, index) => (index === 1 || index === 3 ? <strong key={part}>{part}</strong> : part))
}

function SystemDiagram() {
  return (
    <div className="system-diagram system-architecture" aria-hidden="true">
      <svg className="architecture-lines" viewBox="0 0 1000 700" preserveAspectRatio="none">
        <defs>
          <marker id="valueArrowCyan" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="3">
            <path d="M0 0 6 3 0 6Z" fill="#26f1ff" />
          </marker>
          <marker id="valueArrowPurple" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="3">
            <path d="M0 0 6 3 0 6Z" fill="#8b5cf6" />
          </marker>
          <marker id="valueArrowGreen" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="3">
            <path d="M0 0 6 3 0 6Z" fill="#7ddf64" />
          </marker>
        </defs>
        <path className="line-sync" markerEnd="url(#valueArrowCyan)" d="M500 104V150" />
        <path className="line-sync" markerEnd="url(#valueArrowCyan)" d="M500 224V270" />
        <path className="line-sync" markerEnd="url(#valueArrowCyan)" d="M500 344V414" />
        <path className="line-sync line-service-rail" d="M112 458H888" />
        <path className="line-event" d="M190 540C250 572 352 588 454 612" />
        <path className="line-event" d="M330 540C388 568 430 585 474 614" />
        <path className="line-event" d="M500 540V608" />
        <path className="line-event" d="M670 540C612 568 570 585 526 614" />
        <path className="line-event" d="M810 540C750 572 648 588 546 612" />
        <path className="line-sync" markerEnd="url(#valueArrowCyan)" d="M430 642H272" />
        <path className="line-sync" markerEnd="url(#valueArrowCyan)" d="M570 642H728" />
      </svg>

      <div className="architecture-node arch-client">
        <UserIcon />
        <strong>Cliente</strong>
        <small>Usuarios / Dispositivos</small>
      </div>

      <div className="architecture-node arch-frontend">
        <b>A</b>
        <span>
          <strong>Frontend</strong>
          <small>Angular</small>
        </span>
      </div>

      <div className="architecture-node arch-gateway">
        <GatewayIcon />
        <span>
          <strong>API Gateway</strong>
          <small>JWT / OAuth2</small>
        </span>
      </div>

      <div className="architecture-node arch-auth">
        <strong>Autenticación</strong>
        <small>JWT / OAuth2</small>
      </div>

      <div className="arch-service-title">
        <strong>Microservicios</strong>
        <small>Spring Boot · REST / gRPC</small>
      </div>

      <div className="arch-services">
        {['Usuarios', 'Productos', 'Pedidos', 'Pagos', 'Notificaciones', 'Más servicios'].map((label) => (
          <span key={label}>
            <BackendCubeIcon />
            {label}
          </span>
        ))}
      </div>

      <div className="arch-side-card arch-db-card">
        <DatabaseIcon />
        <span>
          <strong>Base de datos</strong>
          <small>PostgreSQL</small>
        </span>
      </div>

      <div className="arch-kafka-hub">
        <KafkaIcon />
        <strong>Kafka</strong>
        <small>Event bus</small>
      </div>

      <div className="arch-side-card arch-events-card">
        <ZapIcon />
        <span>
          <strong>Eventos asíncronos</strong>
          <small>Workers / Jobs / Procesos</small>
        </span>
      </div>

      <div className="arch-delivery">
        <p>DevOps & Delivery</p>
        <div>
          <span>
            <DockerIcon />
            <strong>Docker</strong>
            <small>Contenedores</small>
          </span>
          <span>
            <Infinity />
            <strong>CI/CD</strong>
            <small>Pipelines</small>
          </span>
          <span>
            <strong>Cloud</strong>
            <small>AWS / GCP</small>
          </span>
          <span>
            <MicroserviceIcon />
            <strong>Kubernetes</strong>
            <small>Orquestación</small>
          </span>
          <span>
            <BarChart3 size={23} />
            <strong>Monitoring</strong>
            <small>Métricas</small>
          </span>
        </div>
      </div>

      <div className="arch-legend">
        <span className="legend-sync" /> Flujo sincrónico
        <span className="legend-event" /> Eventos / streaming
        <span className="legend-persist" /> Persistencia
      </div>
    </div>
  )
}

function CardVisual({ type }) {
  if (type === 'backend') {
    return (
      <div className="backend-map">
        <svg className="backend-map-lines" viewBox="0 0 360 230" aria-hidden="true">
          <path d="M66 44 H140" />
          <path d="M230 43 V96" />
          <path d="M176 140 C176 164 104 164 104 180" />
          <path d="M262 140 C262 164 302 164 302 180" />
        </svg>
        <div className="backend-node backend-client">
          <small>Cliente</small>
          <i />
        </div>
        <div className="backend-node backend-api">API Gateway</div>
        <div className="backend-node backend-services">
          <small>Microservicios</small>
          <div>
            {[0, 1, 2, 3].map((item) => (
              <BackendCubeIcon key={item} />
            ))}
          </div>
        </div>
        <div className="backend-node backend-events">
          <small>Eventos</small>
          <KafkaIcon />
          <strong>Kafka</strong>
        </div>
        <div className="backend-node backend-data">
          <small>Datos</small>
          <DatabaseIcon />
          <strong>PostgreSQL</strong>
        </div>
      </div>
    )
  }

  if (type === 'frontend') {
    return (
      <div className="value-browser">
        <i />
        <i />
        <i />
        <div className="browser-image" />
        <div className="browser-list">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-code">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }

  if (type === 'delivery') {
    const steps = [
      { label: 'Commit', icon: Code2, tone: 'cyan' },
      { label: 'Build', icon: BackendCubeIcon, tone: 'green' },
      { label: 'Test', icon: Check, tone: 'green' },
      { label: 'Deploy', icon: Rocket, tone: 'purple' },
    ]

    return (
      <div className="value-terminal">
        <div className="delivery-steps">
          {steps.map((step) => {
            const StepIcon = step.icon
            return (
              <span className={`delivery-step delivery-step-${step.tone}`} key={step.label}>
                <i>
                  <StepIcon />
                </i>
                {step.label}
              </span>
            )
          })}
        </div>
        <pre>{`> git push
> running pipeline...
> tests passed
> building image...
> deployment successful`}</pre>
      </div>
    )
  }

  return (
    <div className="value-metrics">
      <div>
        <small>Métricas clave</small>
        <strong>+28%</strong>
        <span />
      </div>
      <div>
        <small>Usuarios activos</small>
        <strong>62%</strong>
        <i />
      </div>
      <div>
        <small>Tendencia</small>
        <svg viewBox="0 0 120 50">
          <path d="M4 40 C20 20 28 22 40 30 S65 42 76 22 102 15 116 5" />
        </svg>
      </div>
    </div>
  )
}

function BackendCubeIcon() {
  return (
    <svg className="backend-cube-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.4 19.1 7.5V16.5L12 20.6 4.9 16.5V7.5L12 3.4Z" />
      <path d="M12 11.8 19.1 7.5" />
      <path d="M12 11.8 4.9 7.5" />
      <path d="M12 11.8V20.6" />
    </svg>
  )
}

function KafkaIcon() {
  return (
    <svg className="value-kafka-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8" cy="12" r="3.2" />
      <circle cx="8" cy="3.8" r="2.2" />
      <circle cx="17.2" cy="8.2" r="2.35" />
      <circle cx="17.2" cy="15.8" r="2.35" />
      <circle cx="8" cy="20.2" r="2.2" />
      <path d="M8 6V8.8" />
      <path d="M10.7 10.4 14.9 8.9" />
      <path d="M10.7 13.6 14.9 15.1" />
      <path d="M8 15.2V18" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg className="value-database-icon" viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7" ry="3" />
      <path d="M5 5.5V18.5C5 20.2 8.1 21.5 12 21.5S19 20.2 19 18.5V5.5" />
      <path d="M5 12C5 13.7 8.1 15 12 15S19 13.7 19 12" />
    </svg>
  )
}

function DockerIcon() {
  return (
    <svg className="value-docker-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 25h25c3.8 0 6.8-1.2 8.8-3.6.1 4.2-2.1 8.4-5.6 10.9-3.1 2.2-7 3.1-12.9 3.1H14.2C10.8 35.4 8 32.6 8 29.2V25Z" />
      <path d="M14 17h5v5h-5zM21 17h5v5h-5zM28 17h5v5h-5zM21 10h5v5h-5z" />
    </svg>
  )
}

function GatewayIcon() {
  return (
    <svg className="value-gateway-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8 20 7.4V16.6L12 21.2 4 16.6V7.4L12 2.8Z" />
      <path d="M12 6.8 16.5 9.4V14.6L12 17.2 7.5 14.6V9.4L12 6.8Z" />
    </svg>
  )
}

function MicroserviceIcon() {
  return (
    <svg className="value-microservice-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8 20 7.4V16.6L12 21.2 4 16.6V7.4L12 2.8Z" />
      <path d="M12 7.2 16.1 9.6V14.4L12 16.8 7.9 14.4V9.6L12 7.2Z" />
      <path d="M12 10.2V13.8" />
      <path d="M10.2 12H13.8" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg className="arch-user-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.4 20.8c.7-4.2 3.1-6.3 6.6-6.3s5.9 2.1 6.6 6.3" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg className="value-zap-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.4 2.4 4.5 13h6.8l-.8 8.6 9-11.5h-6.6l.5-7.7Z" />
    </svg>
  )
}
