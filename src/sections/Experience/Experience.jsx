import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Boxes,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  FlaskConical,
  HeartPulse,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'
import { experience } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import './Experience.css'

const companyVisuals = {
  'Otto Group': { tone: 'otto', label: 'OTTO' },
  'BNP Paribas': { tone: 'bnp', label: 'BNP' },
  'Straumann Group': { tone: 'straumann', label: 'ST' },
  'Second Window': { tone: 'second', label: 'SW' },
  Redsys: { tone: 'redsys', label: 'R' },
  'Voiping US / AEAT': { tone: 'aeat', label: 'AEAT' },
  Amaris: { tone: 'amaris', label: 'A' },
}

const primaryHighlights = {
  'Otto Group': [
    { icon: Network, text: { es: 'Centralizacion de datos', en: 'Data centralization' } },
    { icon: Cloud, text: { es: 'Arquitectura cloud', en: 'Cloud architecture' } },
    { icon: Boxes, text: { es: 'Migracion a microservicios', en: 'Migration to microservices' } },
    { icon: Workflow, text: { es: 'Mensajeria asincrona (Kafka)', en: 'Asynchronous messaging (Kafka)' } },
  ],
  'BNP Paribas': [
    { icon: UsersRound, text: { es: 'Liderazgo tecnico de equipo', en: 'Technical team leadership' } },
    { icon: ShieldCheck, text: { es: 'Nuevas features y bugfixes', en: 'New features and bug fixes' } },
    { icon: Zap, text: { es: 'Optimizacion y rendimiento', en: 'Optimization and performance' } },
    { icon: ShieldCheck, text: { es: 'Entornos regulados', en: 'Regulated environments' } },
  ],
  'Straumann Group': [
    { icon: Code2, text: { es: 'React con TypeScript', en: 'React with TypeScript' } },
    { icon: Boxes, text: { es: 'Microservicios Java', en: 'Java microservices' } },
    { icon: Workflow, text: { es: 'Releases y pipelines', en: 'Releases and pipelines' } },
    { icon: UsersRound, text: { es: 'Stakeholders y producto', en: 'Stakeholders and product' } },
  ],
  'Second Window': [
    { icon: Code2, text: { es: 'Java & Spring Boot', en: 'Java & Spring Boot' } },
    { icon: Code2, text: { es: 'Angular', en: 'Angular' } },
    { icon: Workflow, text: { es: 'APIs REST', en: 'REST APIs' } },
    { icon: Database, text: { es: 'Bases de datos relacionales', en: 'Relational databases' } },
  ],
  Redsys: [
    { icon: Code2, text: { es: 'Java & Spring', en: 'Java & Spring' } },
    { icon: Network, text: { es: 'Integracion sistemas', en: 'System integration' } },
    { icon: Cloud, text: { es: 'Servicios financieros', en: 'Financial services' } },
    { icon: ShieldCheck, text: { es: 'Alta disponibilidad', en: 'High availability' } },
  ],
  'Voiping US / AEAT': [
    { icon: ShieldCheck, text: { es: 'Java', en: 'Java' } },
    { icon: Network, text: { es: 'Herramientas internas', en: 'Internal tools' } },
    { icon: UsersRound, text: { es: 'Procesos batch', en: 'Batch processes' } },
    { icon: ShieldCheck, text: { es: 'Seguridad', en: 'Security' } },
  ],
}

const techTone = {
  Java: 'java',
  'Java 21': 'java',
  'Java 11': 'java',
  'Java 8': 'java',
  Spring: 'spring',
  'Spring Boot': 'spring',
  Angular: 'angular',
  'Angular 8': 'angular',
  React: 'react',
  TypeScript: 'typescript',
  'Google Cloud': 'gcloud',
  Terraform: 'terraform',
  Kafka: 'kafka',
  'Pub/Sub': 'pubsub',
  PostgreSQL: 'postgres',
  Bitbucket: 'bitbucket',
  Jenkins: 'jenkins',
  Maven: 'maven',
  Caching: 'cache',
  SQL: 'database',
  DB2: 'database',
  Oracle: 'database',
  'REST APIs': 'rest',
  'Spring Security': 'security',
  'OAuth 2.0': 'security',
  Eclipse: 'tool',
  SOLID: 'architecture',
  'Arquitectura hexagonal': 'architecture',
  DevOps: 'devops',
  Pipelines: 'devops',
}

const copy = {
  es: {
    tech: 'Tecnologias',
    details: 'Detalle de experiencia',
    responsibilities: 'Rol y responsabilidades',
    loadMore: 'Cargar mas experiencia',
    showLess: 'Mostrar menos',
    downloadCv: 'Descargar CV',
  },
  en: {
    tech: 'Technologies',
    details: 'Experience detail',
    responsibilities: 'Role and responsibilities',
    loadMore: 'Load more experience',
    showLess: 'Show less',
    downloadCv: 'Download CV',
  },
}

const timelineExperienceCompanies = ['Otto Group', 'BNP Paribas', 'Straumann Group', 'Second Window', 'Redsys', 'Voiping US / AEAT', 'Amaris']
const initialVisibleExperiences = 4

const sectorNodes = [
  {
    icon: Landmark,
    tone: 'bank',
    title: { es: 'Bancarios', en: 'Banking' },
    text: { es: 'Pagos, cuentas y servicios', en: 'Payments, accounts and services' },
  },
  {
    icon: Truck,
    tone: 'logistics',
    title: { es: 'Logísticos', en: 'Logistics' },
    text: { es: 'Pedidos, fulfilment y envíos', en: 'Orders, fulfilment and shipping' },
  },
  {
    icon: FlaskConical,
    tone: 'chemistry',
    title: { es: 'Química', en: 'Chemistry' },
    text: { es: 'Producción, control y análisis', en: 'Production, control and analysis' },
  },
  {
    icon: HeartPulse,
    tone: 'health',
    title: { es: 'Salud', en: 'Health' },
    text: { es: 'Sistemas clínicos y gestión', en: 'Clinical systems and management' },
  },
  {
    icon: Landmark,
    tone: 'public',
    title: { es: 'Administración Pública', en: 'Public administration' },
    text: { es: 'Plataformas para ciudadanos', en: 'Platforms for citizens' },
  },
]

export function Experience({ lang, t }) {
  const c = copy[lang] ?? copy.es
  const timelineItems = timelineExperienceCompanies.map((company) => experience.find((item) => item.company === company)).filter(Boolean)
  const [selectedCompany, setSelectedCompany] = useState(timelineItems[0]?.company)
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const selectedExperience = timelineItems.find((item) => item.company === selectedCompany) ?? timelineItems[0]
  const visibleItems = showAllExperiences ? timelineItems : timelineItems.slice(0, initialVisibleExperiences)
  const hiddenCount = Math.max(timelineItems.length - initialVisibleExperiences, 0)
  const toggleExperienceList = () => {
    setShowAllExperiences((current) => {
      if (current && !timelineItems.slice(0, initialVisibleExperiences).some((item) => item.company === selectedCompany)) {
        setSelectedCompany(timelineItems[0]?.company)
      }
      return !current
    })
  }

  return (
    <section id="experience" className="experience-section section-shell">
      <div className="experience-hero">
        <motion.div className="experience-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>{t.expEyebrow}</p>
          <h2>{t.expTitle}</h2>
          <span>{t.expText}</span>
          <a className="experience-cv-link" href={lang === 'en' ? '/cvIngles.html' : '/cv.html'}>
            <Download size={18} />
            {c.downloadCv}
          </a>
        </motion.div>
        <ExperienceSystemGraphic lang={lang} />
      </div>

      <div className="experience-layout">
        <div className="experience-timeline">
          {visibleItems.map((item, index) => (
            <ExperienceCard
              item={item}
              index={index}
              isSelected={selectedExperience?.company === item.company}
              key={item.company}
              lang={lang}
              c={c}
              onSelect={setSelectedCompany}
            />
          ))}
          {hiddenCount > 0 && (
            <button className="experience-load-more" type="button" onClick={toggleExperienceList}>
              {showAllExperiences ? c.showLess : `${c.loadMore} (${hiddenCount})`}
            </button>
          )}
        </div>

        {selectedExperience && <ExperienceDetailPanel item={selectedExperience} lang={lang} c={c} />}
      </div>
    </section>
  )
}

function ExperienceCard({ item, index, isSelected, lang, c, onSelect }) {
  const visual = companyVisuals[item.company] ?? { tone: 'default', label: item.company.slice(0, 2) }
  const highlights = primaryHighlights[item.company] ?? item.impact.slice(0, 4).map((impact) => ({ icon: Sparkles, text: impact }))

  return (
    <motion.article
      className="experience-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08 }}
    >
      <span className="experience-node" aria-hidden="true" />

      <button
        className={`experience-card-inner${isSelected ? ' is-selected' : ''}`}
        type="button"
        onClick={() => onSelect(item.company)}
        aria-pressed={isSelected}
        aria-label={`${item.company}: ${localized(item.role, lang)}`}
      >
        <CompanyMark visual={visual} company={item.company} />
        <div className="experience-card-copy">
          <span className="experience-card-period">
            <CalendarDays size={15} />
            {localized(item.period, lang)}
          </span>
          <h3>{localized(item.role, lang)}</h3>
          <p>{localized(item.context, lang)}</p>
          <div className="experience-highlights">
            {highlights.slice(0, 4).map((highlight) => {
              const Icon = highlight.icon
              return (
                <span key={localized(highlight.text, lang)}>
                  <Icon size={16} />
                  {localized(highlight.text, lang)}
                </span>
              )
            })}
          </div>
        </div>

        <div className="experience-tech">
          <p>{c.tech}</p>
          <div>
            {item.stack.slice(0, 6).map((tech) => (
              <TechBadge tech={tech} key={tech} />
            ))}
          </div>
        </div>
      </button>
    </motion.article>
  )
}

function ExperienceDetailPanel({ item, lang, c }) {
  const visual = companyVisuals[item.company] ?? { tone: 'default', label: item.company.slice(0, 2) }

  return (
    <motion.aside
      className="experience-detail-panel"
      key={item.company}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <div className="experience-detail-grid" aria-hidden="true" />

      <header className="experience-detail-head">
        <CompanyMark visual={visual} company={item.company} />
        <div>
          <p>{c.details}</p>
          <h3>{item.company}</h3>
          <strong>{localized(item.role, lang)}</strong>
          <span>
            <CalendarDays size={16} />
            {localized(item.period, lang)}
          </span>
        </div>
      </header>

      <p className="experience-detail-context">{localized(item.context, lang)}</p>

      <section className="experience-detail-tech">
        <p>{c.tech}</p>
        <div>
          {item.stack.slice(0, 8).map((tech) => (
            <TechBadge tech={tech} showLabel key={tech} />
          ))}
        </div>
      </section>

      <section className="experience-detail-role">
        <p>{c.responsibilities}</p>
        <span>
          <BriefcaseBusiness size={16} />
          {localized(item.role, lang)}
        </span>
        <ul>
          {item.impact.map((point) => (
            <li key={localized(point, lang)}>
              <CheckCircle2 size={17} />
              {localized(point, lang)}
            </li>
          ))}
        </ul>
      </section>
    </motion.aside>
  )
}

function CompanyMark({ visual, company }) {
  return (
    <div className={`experience-company experience-company-${visual.tone}`}>
      <span>{visual.label}</span>
      <small>{company.toUpperCase()}</small>
    </div>
  )
}

function TechBadge({ tech, showLabel = false }) {
  const tone = techTone[tech] ?? 'default'
  return (
    <span className={`experience-tech-badge tech-${tone}${showLabel ? ' has-label' : ''}`} title={tech}>
      <TechGlyph tone={tone} tech={tech} />
      {showLabel && <small>{tech}</small>}
    </span>
  )
}

function TechGlyph({ tone, tech }) {
  if (tone === 'java') return <span className="glyph-java">Java</span>
  if (tone === 'spring') return <span className="glyph-leaf" />
  if (tone === 'angular') return <span className="glyph-angular">A</span>
  if (tone === 'react') return <span className="glyph-text">Rx</span>
  if (tone === 'typescript') return <span className="glyph-text">TS</span>
  if (tone === 'kafka') return <span className="glyph-kafka" />
  if (tone === 'postgres') return <Database size={26} />
  if (tone === 'gcloud') return <Cloud size={26} />
  if (tone === 'terraform') return <span className="glyph-text">Tf</span>
  if (tone === 'pubsub') return <Network size={26} />
  if (tone === 'bitbucket') return <span className="glyph-text">Bb</span>
  if (tone === 'jenkins') return <Workflow size={26} />
  if (tone === 'security') return <ShieldCheck size={26} />
  if (tone === 'rest') return <span className="glyph-text">REST</span>
  if (tone === 'database') return <Database size={26} />
  if (tone === 'cache') return <Zap size={26} />
  if (tone === 'architecture') return <Boxes size={26} />
  if (tone === 'devops') return <Workflow size={26} />
  return <span className="glyph-text">{tech.slice(0, 3)}</span>
}

function ExperienceSystemGraphic({ lang }) {
  return (
    <motion.div
      className="experience-system-graphic"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-hidden="true"
    >
      <div className="experience-orbit-card">
        <div className="experience-sector-map">
          {sectorNodes.map((sector) => {
            const Icon = sector.icon

            return (
              <div className={`experience-sector-node sector-${sector.tone}`} key={sector.tone}>
                <Icon size={28} />
                <div>
                  <strong>{localized(sector.title, lang)}</strong>
                  <span>{localized(sector.text, lang)}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="experience-orbit">
          <span className="orbit-ring orbit-ring-a" />
          <span className="orbit-ring orbit-ring-b" />
          <span className="orbit-ring orbit-ring-c" />
          <span className="orbit-dot orbit-dot-a" />
          <span className="orbit-dot orbit-dot-b" />
          <span className="orbit-dot orbit-dot-c" />
          <div>
            <strong>7+</strong>
            <small>{lang === 'en' ? 'years of experience' : 'años de experiencia'}</small>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
