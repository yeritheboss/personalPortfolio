import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenText,
  Bot,
  Boxes,
  Code2,
  Github,
  GitBranch,
  LayoutDashboard,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'
import { projects } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import './Projects.css'

const copy = {
  es: {
    eyebrow: 'Engineering projects',
    title: 'Soluciones reales. Arquitectura, producto y código.',
    text: 'Proyectos fullstack donde combino arquitectura sólida, experiencia de usuario y pensamiento de producto.',
    featured: 'Principal',
    architecture: 'Arquitectura',
    impact: 'Impacto',
    status: 'Status',
    recent: 'Más recientes',
    caseStudy: 'Ver caso completo',
    code: 'Ver código',
    docs: 'Documentación',
    view: 'Ver proyecto',
    ctaTitle: '¿Tienes un proyecto en mente?',
    ctaText: 'Hablemos sobre cómo puedo ayudarte a construirlo.',
    ctaButton: 'Trabajemos juntos',
    filters: {
      all: 'Todos',
      fullstack: 'Fullstack systems',
      frontend: 'Frontend experience',
      ai: 'AI / Automation',
      tools: 'Dev tools',
    },
  },
  en: {
    eyebrow: 'Engineering projects',
    title: 'Real solutions. Architecture, product and code.',
    text: 'Full-stack projects where I combine solid architecture, user experience and product thinking.',
    featured: 'Main',
    architecture: 'Architecture',
    impact: 'Impact',
    status: 'Status',
    recent: 'Most recent',
    caseStudy: 'View full case',
    code: 'View code',
    docs: 'Documentation',
    view: 'View project',
    ctaTitle: 'Have a project in mind?',
    ctaText: 'Let us talk about how I can help you build it.',
    ctaButton: 'Work together',
    filters: {
      all: 'All',
      fullstack: 'Fullstack systems',
      frontend: 'Frontend experience',
      ai: 'AI / Automation',
      tools: 'Dev tools',
    },
  },
}

const metrics = [
  { icon: UsersRound, value: '10+', label: { es: 'Proyectos completados', en: 'Completed projects' } },
  { icon: ShieldCheck, value: '5+', label: { es: 'Tecnologías aplicadas', en: 'Applied technologies' } },
  { icon: LayoutDashboard, value: '3+', label: { es: 'Años construyendo', en: 'Years building' } },
  { icon: Sparkles, value: '100%', label: { es: 'Pasión por resolver problemas', en: 'Passion for solving problems' } },
]

const projectMeta = {
  YeriGPT: {
    id: 'yerigpt',
    type: 'AI / fullstack system',
    subtitle: 'AI Conversation Platform',
    categories: ['fullstack', 'ai'],
    tone: 'cyan',
    status: 'Production ready',
    codeUrl: 'https://github.com/yeritheboss/yeri-gpt',
    docsUrl: '#contact',
    summary: {
      es: 'Plataforma conversacional inteligente con arquitectura orientada a producto, interfaz clara y flujo preparado para escalar nuevas capacidades de IA.',
      en: 'Conversational AI platform with product-oriented architecture, a clear interface and a flow ready to scale new AI capabilities.',
    },
    bullets: [
      { icon: Network, text: { es: 'Experiencia conversacional', en: 'Conversational experience' } },
      { icon: Workflow, text: { es: 'Flujos asíncronos preparados', en: 'Prepared async flows' } },
      { icon: Boxes, text: { es: 'Arquitectura desacoplada', en: 'Decoupled architecture' } },
      { icon: Zap, text: { es: 'UI rápida y enfocada', en: 'Fast focused UI' } },
    ],
    architecture: [['React Frontend'], ['API Layer'], ['AI Orchestration', 'Prompt Context'], ['Conversation UI', 'State Manager'], ['Deployment', 'Monitoring']],
    impact: [
      { value: '+40%', label: { es: 'Velocidad de respuesta percibida', en: 'Perceived response speed' } },
      { value: '-30%', label: { es: 'Fricción en interacción', en: 'Interaction friction' } },
      { value: '24/7', label: { es: 'Disponibilidad del producto', en: 'Product availability' } },
    ],
    stack: ['React', 'AI', 'Product UI', 'Vercel', 'JavaScript'],
  },
  "Yeri's Clothing": {
    id: 'camisetas',
    title: 'Yeri’s Clothing',
    type: 'Fullstack system / AI automation',
    subtitle: 'Ecommerce + AI Design Flow',
    categories: ['fullstack', 'ai'],
    tone: 'green',
    status: 'Production ready',
    codeUrl: 'https://github.com/yeritheboss/Camisetas',
    docsUrl: '#contact',
    summary: {
      es: 'Ecommerce de camisetas con catálogo, flujo de producto y generación de recursos visuales apoyada por IA.',
      en: 'T-shirt ecommerce with catalog, product flow and AI-assisted visual asset generation.',
    },
    bullets: [
      { icon: LayoutDashboard, text: { es: 'Catálogo y experiencia de compra', en: 'Catalog and purchase experience' } },
      { icon: Bot, text: { es: 'Generación visual con IA', en: 'AI-assisted visual generation' } },
      { icon: Boxes, text: { es: 'Separación cliente/servidor', en: 'Client/server separation' } },
      { icon: Zap, text: { es: 'Flujo preparado para producto real', en: 'Flow prepared for real product' } },
    ],
    architecture: [['React Client'], ['Product Catalog', 'Cart Flow'], ['Node API'], ['AI Image Endpoint'], ['Static Assets', 'Deployment']],
    impact: [
      { value: '100%', label: { es: 'Flujo ecommerce navegable', en: 'Browsable ecommerce flow' } },
      { value: 'AI', label: { es: 'Apoyo en generación visual', en: 'Visual generation support' } },
      { value: 'Ready', label: { es: 'Base lista para escalar', en: 'Base ready to scale' } },
    ],
    stack: ['React', 'Node', 'AI', 'Ecommerce', 'CSS'],
  },
  Hoobank: {
    id: 'hoobank',
    type: 'Frontend experience',
    subtitle: 'Fintech Landing UI',
    categories: ['frontend'],
    tone: 'cyan',
    status: 'Production ready',
    codeUrl: 'https://github.com/yeritheboss/newBankMOckUp',
    docsUrl: '#contact',
    summary: {
      es: 'Mockup frontend de producto financiero orientado a composición visual, responsive design y presentación SaaS.',
      en: 'Financial product frontend mockup focused on visual composition, responsive design and SaaS presentation.',
    },
    bullets: [
      { icon: LayoutDashboard, text: { es: 'Landing fintech responsive', en: 'Responsive fintech landing' } },
      { icon: Sparkles, text: { es: 'Composición visual cuidada', en: 'Polished visual composition' } },
      { icon: Zap, text: { es: 'Interfaz ligera', en: 'Lightweight interface' } },
      { icon: Code2, text: { es: 'Frontend puro', en: 'Pure frontend' } },
    ],
    architecture: [['React Frontend'], ['Responsive Sections'], ['Reusable Components'], ['Static Deployment']],
    impact: [
      { value: 'UI', label: { es: 'Experiencia visual fintech', en: 'Fintech visual experience' } },
      { value: '100%', label: { es: 'Responsive', en: 'Responsive' } },
      { value: 'Fast', label: { es: 'Carga ligera', en: 'Light loading' } },
    ],
    stack: ['React', 'Landing', 'Fintech', 'CSS'],
  },
  'Mobile App Concept': {
    id: 'mobile-app',
    type: 'Frontend experience',
    subtitle: 'Mobile Product UI',
    categories: ['frontend'],
    tone: 'violet',
    status: 'In progress',
    codeUrl: '#contact',
    docsUrl: '#contact',
    summary: {
      es: 'Concepto visual de aplicación móvil con foco en estructura de pantallas, jerarquía visual y presentación de producto.',
      en: 'Mobile app visual concept focused on screen structure, visual hierarchy and product presentation.',
    },
    bullets: [
      { icon: LayoutDashboard, text: { es: 'Pantallas móviles', en: 'Mobile screens' } },
      { icon: Sparkles, text: { es: 'Sistema visual', en: 'Visual system' } },
      { icon: Zap, text: { es: 'Prototipo rápido', en: 'Fast prototype' } },
      { icon: Code2, text: { es: 'Frontend concept', en: 'Frontend concept' } },
    ],
    architecture: [['Mobile UI'], ['Design Tokens'], ['Reusable Screens'], ['Prototype Flow']],
    impact: [
      { value: 'UX', label: { es: 'Exploración de producto', en: 'Product exploration' } },
      { value: '4+', label: { es: 'Pantallas base', en: 'Base screens' } },
      { value: 'WIP', label: { es: 'Iteración abierta', en: 'Open iteration' } },
    ],
    stack: ['Mobile', 'UI Design', 'Prototype', 'UX'],
  },
  'n8n Automation Hub': {
    id: 'n8n',
    title: 'n8n Automation Hub',
    type: 'AI / automation',
    subtitle: 'Workflow Automation',
    categories: ['ai', 'tools'],
    tone: 'violet',
    status: 'Experimental',
    link: '#contact',
    image: null,
    codeUrl: '#contact',
    docsUrl: '#contact',
    summary: {
      es: 'Automatizaciones inteligentes con n8n, integraciones API y procesamiento de datos.',
      en: 'Smart automations with n8n, API integrations and data processing.',
    },
    bullets: [
      { icon: Workflow, text: { es: 'Workflows conectados', en: 'Connected workflows' } },
      { icon: Bot, text: { es: 'Automatización con IA', en: 'AI automation' } },
      { icon: Network, text: { es: 'Integraciones API', en: 'API integrations' } },
      { icon: Zap, text: { es: 'Procesamiento de datos', en: 'Data processing' } },
    ],
    architecture: [['Webhook'], ['n8n Workflow'], ['API Integrations', 'OpenAI'], ['Database', 'Notifications']],
    impact: [
      { value: 'Auto', label: { es: 'Procesos automatizados', en: 'Automated processes' } },
      { value: 'API', label: { es: 'Integraciones conectadas', en: 'Connected integrations' } },
      { value: 'AI', label: { es: 'Decisiones asistidas', en: 'Assisted decisions' } },
    ],
    stack: ['n8n', 'PostgreSQL', 'OpenAI', 'Webhook'],
  },
  'DevOps Toolkit': {
    id: 'devops',
    title: 'DevOps Toolkit',
    type: 'Dev tools',
    subtitle: 'Developer Productivity',
    categories: ['tools'],
    tone: 'orange',
    status: 'Production ready',
    link: '#contact',
    image: null,
    codeUrl: '#contact',
    docsUrl: '#contact',
    summary: {
      es: 'Colección de scripts, configuraciones y herramientas para optimizar el workflow de desarrollo.',
      en: 'Scripts, configs and tools to optimize the development workflow.',
    },
    bullets: [
      { icon: GitBranch, text: { es: 'Pipelines y automatización', en: 'Pipelines and automation' } },
      { icon: Boxes, text: { es: 'Entornos reproducibles', en: 'Reproducible environments' } },
      { icon: ShieldCheck, text: { es: 'Checks de calidad', en: 'Quality checks' } },
      { icon: Zap, text: { es: 'Menos trabajo manual', en: 'Less manual work' } },
    ],
    architecture: [['Docker Compose'], ['Scripts'], ['CI Checks', 'Deploy Hooks'], ['Logs', 'Monitoring']],
    impact: [
      { value: '-50%', label: { es: 'Tareas repetitivas', en: 'Repetitive tasks' } },
      { value: 'CI', label: { es: 'Validación automática', en: 'Automatic validation' } },
      { value: 'Ready', label: { es: 'Workflow preparado', en: 'Prepared workflow' } },
    ],
    stack: ['Docker', 'GitHub Actions', 'Terraform', 'Bash'],
  },
}

const filters = ['all', 'fullstack', 'frontend', 'ai', 'tools']

function buildProjectShowcases() {
  const fromProfile = projects.map((project) => ({
    ...project,
    ...projectMeta[project.title],
    title: projectMeta[project.title]?.title ?? project.title,
    link: project.link,
    image: projectMeta[project.title]?.image ?? project.image,
  }))

  const extras = ['n8n Automation Hub', 'DevOps Toolkit'].map((title) => projectMeta[title])
  return [...fromProfile, ...extras]
}

export function Projects({ lang }) {
  const c = copy[lang] ?? copy.es
  const [activeFilter, setActiveFilter] = useState('all')
  const projectShowcases = useMemo(() => buildProjectShowcases(), [])
  const [selectedProjectId, setSelectedProjectId] = useState(projectShowcases[0]?.id)
  const selectedProject = projectShowcases.find((project) => project.id === selectedProjectId) ?? projectShowcases[0]
  const visibleProjects =
    activeFilter === 'all' ? projectShowcases : projectShowcases.filter((project) => project.categories.includes(activeFilter))

  return (
    <section id="projects" className="projects-section section-shell">
      <div className="projects-hero">
        <motion.div className="projects-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <span>{c.text}</span>
        </motion.div>

        <div className="projects-metrics">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <motion.article className="project-metric" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} key={metric.value}>
                <Icon size={24} />
                <strong>{metric.value}</strong>
                <span>{localized(metric.label, lang)}</span>
              </motion.article>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <FeaturedProject project={selectedProject} lang={lang} c={c} />
      </AnimatePresence>

      <div className="projects-toolbar">
        <div className="project-filter-group" aria-label="Project filters">
          {filters.map((filter) => (
            <button className={activeFilter === filter ? 'is-active' : ''} type="button" onClick={() => setActiveFilter(filter)} key={filter}>
              <FilterIcon filter={filter} />
              {c.filters[filter]}
            </button>
          ))}
        </div>

        <button className="projects-sort" type="button">
          <SlidersHorizontal size={16} />
          {c.recent}
        </button>
      </div>

      <div className="project-card-grid">
        {visibleProjects.map((project, index) => (
          <ProjectTile
            project={project}
            lang={lang}
            c={c}
            index={index}
            isSelected={project.id === selectedProject.id}
            onSelect={setSelectedProjectId}
            key={project.id}
          />
        ))}
      </div>

      <motion.div className="projects-cta" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span aria-hidden="true">
          <Code2 size={28} />
        </span>
        <div>
          <h3>{c.ctaTitle}</h3>
          <p>{c.ctaText}</p>
        </div>
        <a href="#contact">
          {c.ctaButton}
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  )
}

function FeaturedProject({ project, lang, c }) {
  return (
    <motion.article
      className="project-featured"
      initial={{ opacity: 0, y: 14, scale: 0.992, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, scale: 0.996, filter: 'blur(6px)' }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      key={project.id}
    >
      <div className="project-featured-media">
        <div className="project-window">
          <div className="project-window-sidebar">
            <strong>{project.title}</strong>
            {['Dashboard', 'Flujos', 'Analíticas', 'Documentos', 'Settings'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-window-main">
            <div className="project-window-head">
              <p>{project.subtitle}</p>
              <span>{c.featured}</span>
            </div>
            <div className="project-stat-row">
              {project.impact.map((item) => (
                <strong key={item.value}>{item.value}</strong>
              ))}
            </div>
            <div className="project-chart">
              <span className="chart-line chart-line-a" />
              <span className="chart-line chart-line-b" />
              <ProjectPreview project={project} isFeatured />
            </div>
          </div>
        </div>
      </div>

      <div className="project-featured-copy">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <strong>{project.subtitle}</strong>
        <span>{localized(project.summary, lang)}</span>
        <div className="project-stack">
          {project.stack.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
        <ul>
          {project.bullets.map((bullet) => {
            const Icon = bullet.icon
            return (
              <li key={localized(bullet.text, lang)}>
                <Icon size={16} />
                {localized(bullet.text, lang)}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="project-architecture">
        <p>{c.architecture}</p>
        <div className="architecture-map">
          {project.architecture.map((row, index) => (
            <div className={`architecture-row architecture-row-${index}`} key={row.join('-')}>
              {row.map((node) => (
                <span key={node}>{node}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <aside className="project-impact">
        <p>{c.impact}</p>
        {project.impact.map((item) => (
          <div className="project-impact-item" key={item.value}>
            <strong>{item.value}</strong>
            <span>{localized(item.label, lang)}</span>
          </div>
        ))}
        <div className="project-impact-status">
          <small>{c.status}</small>
          <em>{project.status}</em>
        </div>
      </aside>

      <div className="project-featured-actions">
        <ProjectAction className="primary" href={project.link} icon={ArrowRight} label={c.caseStudy} />
        <ProjectAction href={project.codeUrl} icon={Github} label={c.code} />
        <ProjectAction href={project.docsUrl} icon={BookOpenText} label={c.docs} />
      </div>
    </motion.article>
  )
}

function ProjectTile({ project, lang, c, index, isSelected, onSelect }) {
  return (
    <motion.article
      className={`project-tile tile-${project.tone}${isSelected ? ' is-selected' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06 }}
    >
      <button className="project-tile-main" type="button" onClick={() => onSelect(project.id)} aria-pressed={isSelected}>
        <div>
          <p>{project.type}</p>
          <h3>{project.title}</h3>
          <span>{localized(project.summary, lang)}</span>
          <div className="project-stack">
            {project.stack.slice(0, 4).map((tag) => (
              <small key={tag}>{tag}</small>
            ))}
          </div>
        </div>
        <ProjectPreview project={project} />
      </button>
      <footer>
        <span className={`project-status status-${project.status.toLowerCase().replaceAll(' ', '-')}`}>{project.status}</span>
        <span className="project-tile-hint">{isSelected ? c.featured : c.view}</span>
      </footer>
    </motion.article>
  )
}

function ProjectPreview({ project, isFeatured = false }) {
  if (project.image) {
    return (
      <div className={isFeatured ? 'project-preview-featured' : 'project-preview'}>
        <img src={project.image} alt="" />
      </div>
    )
  }

  return (
    <div className={isFeatured ? 'project-preview-featured project-preview-generated' : 'project-preview project-preview-generated'}>
      {project.categories.includes('tools') && !project.categories.includes('ai') ? (
        <pre>{`> docker compose up\n> lint passed\n> deploy: ready\n> production: ready`}</pre>
      ) : (
        <div className="automation-map">
          <span>n8n</span>
          <span>API</span>
          <span>DB</span>
          <span>AI</span>
        </div>
      )}
    </div>
  )
}

function ProjectAction({ href, icon: Icon, label, className }) {
  const isAnchor = href?.startsWith('#')
  return (
    <a className={className} href={href || '#contact'} target={isAnchor ? undefined : '_blank'} rel={isAnchor ? undefined : 'noreferrer'}>
      {label}
      <Icon size={17} />
    </a>
  )
}

function FilterIcon({ filter }) {
  if (filter === 'fullstack') return <Boxes size={16} />
  if (filter === 'frontend') return <LayoutDashboard size={16} />
  if (filter === 'ai') return <Bot size={16} />
  if (filter === 'tools') return <GitBranch size={16} />
  return <Sparkles size={16} />
}
