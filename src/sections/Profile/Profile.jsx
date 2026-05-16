import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarDays,
  Code2,
  Compass,
  Crosshair,
  Heart,
  LineChart,
  MapPin,
  MessagesSquare,
  RefreshCw,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
  Zap,
} from 'lucide-react'
import { experience, profile } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import './Profile.css'

const profileCopy = {
  es: {
    eyebrow: 'Engineering profile',
    title: (
      <>
        Ingeniero que construye <span>soluciones reales</span> junto a equipos increíbles.
      </>
    ),
    intro:
      'Me motiva resolver problemas complejos y convertir ideas en productos que generan impacto. Combino visión técnica, enfoque en negocio y colaboración para entregar software escalable, mantenible y orientado a valor.',
    quote: [
      'La IA está transformando la forma en que construimos software.',
      'Aprender a trabajar junto a ella ya no es opcional. Pero la tecnología por sí sola no define el rumbo.',
      'Las decisiones, la visión y el criterio siguen naciendo del factor humano.',
    ],
    signal: 'Professional signal',
    location: 'San Sebastian de los Reyes, Madrid',
    experience: 'Experiencia',
    focus: 'Enfoque',
    availability: 'Disponibilidad',
    available: 'Disponible para nuevos retos',
    years: '7+ años',
    productTech: 'Producto & Tecnología',
    radar: 'Career radar',
    work: 'Cómo trabajo',
    timeline: 'Mi trayectoria',
    fullExperience: 'Ver experiencia completa',
    pillars: 'Mis pilares',
    subtitle: 'Full-stack Engineer',
  },
  en: {
    eyebrow: 'Engineering profile',
    title: (
      <>
        Engineer building <span>real solutions</span> with incredible teams.
      </>
    ),
    intro:
      'I enjoy solving complex problems and turning ideas into products that create impact. I combine technical vision, business focus and collaboration to deliver scalable, maintainable software oriented to value.',
    quote: [
      'AI is transforming the way we build software.',
      'Learning to work alongside it is no longer optional. But technology alone does not set the direction.',
      'Decisions, vision and judgment still come from the human factor.',
    ],
    signal: 'Professional signal',
    location: 'San Sebastian de los Reyes, Madrid',
    experience: 'Experience',
    focus: 'Focus',
    availability: 'Availability',
    available: 'Available for new challenges',
    years: '7+ years',
    productTech: 'Product & Technology',
    radar: 'Career radar',
    work: 'How I work',
    timeline: 'My trajectory',
    fullExperience: 'View full experience',
    pillars: 'My pillars',
    subtitle: 'Full-stack Engineer',
  },
}

const valueHighlights = [
  {
    icon: Target,
    title: { es: 'Enfoque en valor', en: 'Value focus' },
    text: { es: 'Entiendo el negocio para construir lo que importa.', en: 'I understand the business to build what matters.' },
  },
  {
    icon: UsersRound,
    title: { es: 'Mentalidad de dueño', en: 'Ownership mindset' },
    text: { es: 'Asumo responsabilidad end-to-end.', en: 'I take end-to-end responsibility.' },
  },
  {
    icon: LineChart,
    title: { es: 'Mejora continua', en: 'Continuous improvement' },
    text: { es: 'Aprendo, itero y busco hacerlo mejor.', en: 'I learn, iterate and keep improving.' },
  },
]

const radarItems = [
  { label: { es: 'Liderazgo técnico', en: 'Technical leadership' }, value: 78, x: 50, y: 14 },
  { label: { es: 'Pensamiento de producto', en: 'Product thinking' }, value: 82, x: 88, y: 39 },
  { label: { es: 'Entrega ágil', en: 'Agile delivery' }, value: 76, x: 73, y: 86 },
  { label: { es: 'Colaboración y comunicación', en: 'Collaboration and communication' }, value: 70, x: 24, y: 86 },
  { label: { es: 'Resolución de problemas', en: 'Problem solving' }, value: 84, x: 12, y: 39 },
]

const workItems = [
  {
    icon: RefreshCw,
    title: { es: 'Metodologías ágiles', en: 'Agile methods' },
    text: { es: 'Iteración, adaptación y feedback constante.', en: 'Iteration, adaptation and constant feedback.' },
  },
  {
    icon: UsersRound,
    title: { es: 'Colaboración', en: 'Collaboration' },
    text: { es: 'Equipos multidisciplinares, comunicación abierta y confianza.', en: 'Cross-functional teams, open communication and trust.' },
  },
  {
    icon: MessagesSquare,
    title: { es: 'Transparencia', en: 'Transparency' },
    text: { es: 'Comunicación clara, expectativas alineadas y decisiones basadas en datos.', en: 'Clear communication, aligned expectations and data-informed decisions.' },
  },
  {
    icon: ShieldCheck,
    title: { es: 'Calidad sostenible', en: 'Sustainable quality' },
    text: { es: 'Código limpio, pruebas automatizadas y foco en mantenibilidad.', en: 'Clean code, automated tests and maintainability focus.' },
  },
]

const pillars = [
  {
    icon: UserRound,
    title: { es: 'Orientación a impacto', en: 'Impact orientation' },
    text: { es: 'Me enfoco en crear soluciones que generen valor real para el usuario y el negocio.', en: 'I focus on creating solutions that generate real value for users and the business.' },
    tone: 'cyan',
    level: 5,
  },
  {
    icon: UsersRound,
    title: { es: 'Trabajo en equipo', en: 'Teamwork' },
    text: { es: 'Creo en el poder de equipos diversos, el respeto y el aprendizaje compartido.', en: 'I believe in diverse teams, respect and shared learning.' },
    tone: 'purple',
    level: 6,
  },
  {
    icon: Compass,
    title: { es: 'Adaptabilidad', en: 'Adaptability' },
    text: { es: 'Me muevo entre contextos, tecnologías y desafíos con mentalidad abierta y flexible.', en: 'I move across contexts, technologies and challenges with an open mindset.' },
    tone: 'blue',
    level: 6,
  },
  {
    icon: Zap,
    title: 'Ownership',
    text: { es: 'Asumo responsabilidad sobre lo que hago, desde la idea inicial hasta el impacto final.', en: 'I take responsibility for what I build, from the initial idea to final impact.' },
    tone: 'yellow',
    level: 7,
  },
  {
    icon: Heart,
    title: { es: 'Pasión por construir', en: 'Passion for building' },
    text: { es: 'Disfruto lo que hago. Me motiva la tecnología, los retos y seguir evolucionando.', en: 'I enjoy what I do. Technology, challenges and evolution keep me moving.' },
    tone: 'pink',
    level: 7,
  },
]

export function Hero({ lang = 'es' }) {
  const c = profileCopy[lang] ?? profileCopy.es

  return (
    <section id="home" className="profile-section section-shell">
      <div className="profile-grid">
        <motion.div className="profile-intro" variants={fadeUp} initial="hidden" animate="visible">
          <span className="profile-badge">
            <UserRound size={16} />
            {c.eyebrow}
          </span>
          <h1>{c.title}</h1>
          <p>{c.intro}</p>

          <div className="profile-value-row">
            {valueHighlights.map((item) => {
              const Icon = item.icon
              return (
                <article key={localized(item.title, lang)}>
                  <Icon size={31} />
                  <div>
                    <strong>{localized(item.title, lang)}</strong>
                    <small>{localized(item.text, lang)}</small>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="profile-quote-card">
            <span>&ldquo;</span>
            <div className="profile-quote-copy">
              {c.quote.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <img className="profile-mountain" src="/assets/img/profile-mountain.png" alt="" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.aside
          className="profile-command"
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="profile-signal">
            <div className="profile-photo-frame">
              <img src="/assets/img/profile-hologram.png" alt={profile.name} />
            </div>
            <div className="profile-signal-copy">
              <p>{c.signal}</p>
              <h2>{profile.name}</h2>
              <span>
                <MapPin size={16} />
                {c.location}
              </span>
            </div>
          </div>

          <div className="profile-status-grid">
            <StatusItem icon={CalendarDays} label={c.experience} value={c.years} />
            <StatusItem icon={Crosshair} label={c.focus} value={c.productTech} />
            <StatusItem icon={Target} label={c.availability} value={c.available} tone="green" />
          </div>

          <div className="profile-command-grid">
            <section className="profile-radar-card">
              <h3>{c.radar}</h3>
              <RadarChart lang={lang} />
            </section>

            <section className="profile-work-card">
              <h3>{c.work}</h3>
              <div>
                {workItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <article key={localized(item.title, lang)}>
                      <i>
                        <Icon size={19} />
                      </i>
                      <span>
                        <strong>{localized(item.title, lang)}</strong>
                        <small>{localized(item.text, lang)}</small>
                      </span>
                    </article>
                  )
                })}
              </div>
            </section>
          </div>

          <section className="profile-timeline-card">
            <h3>{c.timeline}</h3>
            <div className="profile-timeline">
              {experience.slice(0, 3).map((item, index) => (
                <article key={item.company}>
                  <span className="profile-timeline-dot" />
                  <time>{localized(item.period, lang)}</time>
                  <div>
                    <strong>
                      {localized(item.role, lang)} · {item.company}
                    </strong>
                    <small>{localized(item.context, lang)}</small>
                  </div>
                  <i>{index === 0 ? <CalendarDays size={17} /> : index === 1 ? <BriefcaseIcon /> : <Code2 size={17} />}</i>
                </article>
              ))}
            </div>
            <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: 'experience' }))}>
              {c.fullExperience}
              <ArrowRight size={18} />
            </button>
          </section>
        </motion.aside>
      </div>
    </section>
  )
}

export function Snapshot({ lang = 'es' }) {
  const c = profileCopy[lang] ?? profileCopy.es

  return (
    <section className="profile-pillars-section section-shell">
      <p className="profile-section-title">{c.pillars}</p>
      <div className="profile-pillars">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <motion.article
              className={`profile-pillar profile-pillar-${pillar.tone}`}
              key={localized(pillar.title, lang)}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <i>
                <Icon size={34} />
              </i>
              <div>
                <h3>{localized(pillar.title, lang)}</h3>
                <p>{localized(pillar.text, lang)}</p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function StatusItem({ icon: Icon, label, value, tone = 'cyan' }) {
  return (
    <article className={`profile-status profile-status-${tone}`}>
      <Icon size={21} />
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </article>
  )
}

function RadarChart({ lang }) {
  const points = radarItems.map((item) => {
    const radius = (item.value / 100) * 38
    const angle = Math.atan2(item.y - 50, item.x - 50)
    return `${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`
  })

  return (
    <div className="profile-radar">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,10 88,38 73,86 27,86 12,38" />
        <polygon points="50,24 75,43 65,74 35,74 25,43" />
        <polygon points="50,38 62,47 57,61 43,61 38,47" />
        <line x1="50" y1="50" x2="50" y2="10" />
        <line x1="50" y1="50" x2="88" y2="38" />
        <line x1="50" y1="50" x2="73" y2="86" />
        <line x1="50" y1="50" x2="27" y2="86" />
        <line x1="50" y1="50" x2="12" y2="38" />
        <polygon className="profile-radar-fill" points={points.join(' ')} />
        {points.map((point) => {
          const [cx, cy] = point.split(',')
          return <circle cx={cx} cy={cy} key={point} r="2.3" />
        })}
      </svg>
      {radarItems.map((item, index) => (
        <span className={`radar-label radar-label-${index}`} key={localized(item.label, lang)}>
          {localized(item.label, lang)}
        </span>
      ))}
    </div>
  )
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 7V5.6C8 4.7 8.7 4 9.6 4h4.8c.9 0 1.6.7 1.6 1.6V7" />
      <path d="M4 8h16v10.5c0 .8-.7 1.5-1.5 1.5h-13C4.7 20 4 19.3 4 18.5V8Z" />
      <path d="M4 12h16" />
    </svg>
  )
}
