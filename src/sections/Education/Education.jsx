import { motion } from 'framer-motion'
import { BarChart3, BrainCircuit, Cloud, Code2, Cpu, Database, GitBranch, Network, ServerCog, Workflow } from 'lucide-react'
import { fadeUp } from '../../app/constants'
import './Education.css'

const journey = [
  {
    period: '2017 - 2018',
    icon: Code2,
    title: { es: 'Java Developer', en: 'Java Developer' },
    institution: 'Tokio School',
    skills: ['Java', 'Spring', 'REST APIs', 'SQL', 'OOP', 'Git', 'Maven'],
  },
  {
    period: '2018 - 2019',
    icon: BarChart3,
    title: { es: 'Big Data Scientist', en: 'Big Data Scientist' },
    institution: 'ICloud',
    skills: ['Python', 'Spark', 'Hadoop', 'Data Analysis', 'ML Foundations'],
  },
  {
    period: '2018 - 2019',
    icon: Database,
    title: { es: 'BI & Analytics', en: 'BI & Analytics' },
    institution: 'Universidad Deusto',
    skills: ['Power BI', 'SQL', 'ETL', 'Data Modeling', 'Dashboards'],
  },
  {
    period: '2009 - 2019',
    icon: Cpu,
    title: { es: 'Ingeniero de Telecomunicaciones', en: 'Telecommunications Engineer' },
    institution: { es: 'Universidad Politecnica de Madrid', en: 'Polytechnic University of Madrid' },
    skills: {
      es: ['Sistemas telecom', 'Senales', 'Redes', 'Ingenieria'],
      en: ['Telecom Systems', 'Signals', 'Networks', 'Engineering'],
    },
  },
]

const focusItems = [
  { icon: ServerCog, label: { es: 'Arquitectura backend', en: 'Backend Architecture' } },
  { icon: Cloud, label: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' } },
  { icon: BrainCircuit, label: { es: 'Sistemas IA', en: 'AI Systems' } },
  { icon: Workflow, label: { es: 'Automatizacion', en: 'Automation' } },
  { icon: GitBranch, label: { es: 'Sistemas distribuidos', en: 'Distributed Systems' } },
]

const educationCopy = {
  es: {
    eyebrow: 'Engineering journey',
    title: 'De bases de ingenieria a arquitectura backend, datos e IA.',
    intro: 'Un camino continuo de aprendizaje, construccion y resolucion de problemas complejos.',
    focus: 'Foco actual',
    quote: 'Construyo sistemas que escalan, automatizan lo importante y convierten datos en decisiones.',
  },
  en: {
    eyebrow: 'Engineering journey',
    title: 'From engineering foundations to backend architecture, data systems and AI.',
    intro: 'A continuous path of learning, building and solving complex problems.',
    focus: 'Current focus',
    quote: 'I build systems that scale, automate what matters, and turn data into decisions.',
  },
}

function localize(value, lang) {
  if (typeof value === 'string') return value
  return value[lang] ?? value.en ?? value.es
}

export function Education({ lang = 'es' }) {
  const copy = educationCopy[lang] ?? educationCopy.es

  return (
    <section id="education" className="section-shell education-section">
      <div className="education-circuit" aria-hidden="true">
        <svg className="circuit-network" viewBox="0 0 640 360" role="presentation" focusable="false">
          <g className="circuit-paths">
            <path d="M24 42 H168 L208 82 H286 L324 120 H388 L432 76 H616" />
            <path d="M86 158 H210 L272 220 H348 L412 156 H612" />
            <path d="M48 270 H164 L226 220 L286 280 H380 L452 220 H610" />
            <path d="M238 34 L292 88 L376 88 L434 144 L500 144 L560 84 H640" />
            <path d="M290 332 H392 L438 286 H510 L560 332 H640" />
          </g>
          <g className="circuit-pulses">
            <path d="M24 42 H168 L208 82 H286 L324 120 H388 L432 76 H616" />
            <path d="M86 158 H210 L272 220 H348 L412 156 H612" />
            <path d="M48 270 H164 L226 220 L286 280 H380 L452 220 H610" />
            <path d="M290 332 H392 L438 286 H510 L560 332 H640" />
          </g>
          <g className="circuit-nodes">
            {[
              [24, 42],
              [168, 42],
              [208, 82],
              [286, 82],
              [324, 120],
              [432, 76],
              [86, 158],
              [210, 158],
              [272, 220],
              [348, 220],
              [412, 156],
              [48, 270],
              [164, 270],
              [226, 220],
              [286, 280],
              [380, 280],
              [452, 220],
              [560, 84],
              [438, 286],
              [560, 332],
            ].map(([cx, cy], index) => (
              <circle key={`${cx}-${cy}`} className="circuit-node" cx={cx} cy={cy} r={index % 3 === 0 ? 9 : 7} />
            ))}
          </g>
        </svg>
      </div>

      <motion.header className="education-hero" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p className="education-eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <span className="education-title-line" />
        <p>{copy.intro}</p>
      </motion.header>

      <div className="education-timeline" aria-label={copy.eyebrow}>
        <span className="timeline-beam" aria-hidden="true" />
        {journey.map((item, index) => {
          const Icon = item.icon
          const skills = Array.isArray(item.skills) ? item.skills : localize(item.skills, lang)

          return (
            <motion.article
              key={`${item.period}-${localize(item.title, lang)}`}
              className="education-card"
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="education-period">{item.period}</p>
              <span className="timeline-node" aria-hidden="true" />
              <div className="education-card-inner">
                <span className="education-icon">
                  <Icon size={34} strokeWidth={1.7} />
                </span>
                <h3>{localize(item.title, lang)}</h3>
                <p className="education-school">{localize(item.institution, lang)}</p>
                <span className="education-divider" />
                <p className="education-skills">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>

      <motion.aside className="education-focus" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="focus-radar" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="focus-content">
          <p className="focus-label">{copy.focus}</p>
          <div className="focus-grid">
            {focusItems.map((item) => {
              const Icon = item.icon
              return (
                <span key={localize(item.label, lang)} className="focus-chip">
                  <Icon size={20} strokeWidth={1.8} />
                  {localize(item.label, lang)}
                </span>
              )
            })}
          </div>
        </div>
        <blockquote>{copy.quote}</blockquote>
      </motion.aside>
    </section>
  )
}
