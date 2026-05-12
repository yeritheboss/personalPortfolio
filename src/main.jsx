import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Play,
  Sparkles,
} from 'lucide-react'
import { education, experience, focusAreas, profile, projects, skillGroups } from './data/profile'
import './index.css'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: 'easeOut' },
}

const copy = {
  es: {
    nav: ['Experiencia', 'Proyectos', 'Stack', 'Formacion', 'Contacto'],
    command: 'Engineering Command Center',
    projects: 'Ver proyectos',
    cv: 'Descargar CV',
    available: 'Disponible',
    signal: 'Professional signal',
    timeline: 'Mission timeline',
    snapshot: ['Java/Spring Boot', 'React/TypeScript', 'Microservicios REST', 'Arquitectura hexagonal', 'DevOps & Pipelines', 'Data & BI'],
    meetEyebrow: 'AI workflow',
    meetTitle: 'Explorando presentaciones con herramientas IA',
    whatEyebrow: 'What I build',
    whatTitle: 'De backend critico a interfaces de producto',
    whatText: 'Trabajo en todo el ciclo de una aplicacion: servicios Java, frontend, integraciones, datos, rendimiento y despliegues.',
    expEyebrow: 'Experience',
    expTitle: 'Experiencia en banca, logistica y sistemas de alto impacto',
    expText: 'He trabajado en entornos donde el software tiene que ser estable, seguro y mantenible: banca, logistica, administracion publica y plataformas internas.',
    projectsEyebrow: 'Featured projects',
    projectsTitle: 'Proyectos propios y experimentos de producto',
    projectsText: 'Aplicaciones y conceptos creados para explorar interfaces, IA, ecommerce y experiencias web modernas.',
    stackEyebrow: 'Tech stack',
    stackTitle: 'Stack con foco en entrega real',
    stackText: 'Tecnologias que uso para construir, mantener, integrar y desplegar aplicaciones empresariales.',
    eduEyebrow: 'Background',
    eduTitle: 'Base tecnica, ingenieria y datos',
    contactEyebrow: 'Contact',
    contactTitle: 'Hablemos de tu proximo proyecto',
    contactText: 'Si buscas un perfil full-stack con base fuerte en backend, criterio de producto y capacidad para moverse entre frontend, DevOps y datos, aqui estoy.',
    viewProject: 'Ver proyecto',
  },
  en: {
    nav: ['Experience', 'Projects', 'Stack', 'Background', 'Contact'],
    command: 'Engineering Command Center',
    projects: 'View projects',
    cv: 'Download CV',
    available: 'Available',
    signal: 'Professional signal',
    timeline: 'Mission timeline',
    snapshot: ['Java/Spring Boot', 'React/TypeScript', 'REST microservices', 'Hexagonal architecture', 'DevOps & Pipelines', 'Data & BI'],
    meetEyebrow: 'AI workflow',
    meetTitle: 'Exploring presentations with AI tools',
    whatEyebrow: 'What I build',
    whatTitle: 'From critical backend to product interfaces',
    whatText: 'I work across the full application cycle: Java services, frontend, integrations, data, performance and delivery.',
    expEyebrow: 'Experience',
    expTitle: 'Experience in banking, logistics and high-impact systems',
    expText: 'I have worked in environments where software must be stable, secure and maintainable: banking, logistics, public sector and internal platforms.',
    projectsEyebrow: 'Featured projects',
    projectsTitle: 'Personal projects and product experiments',
    projectsText: 'Applications and concepts created to explore interfaces, AI, ecommerce and modern web experiences.',
    stackEyebrow: 'Tech stack',
    stackTitle: 'Stack focused on real delivery',
    stackText: 'Technologies I use to build, maintain, integrate and deploy enterprise applications.',
    eduEyebrow: 'Background',
    eduTitle: 'Engineering, technical and data background',
    contactEyebrow: 'Contact',
    contactTitle: 'Let us talk about your next project',
    contactText: 'If you need a full-stack profile with strong backend foundations, product judgment and the ability to move across frontend, DevOps and data, I am here.',
    viewProject: 'View project',
  },
}

const localized = (value, lang) => (typeof value === 'object' ? value[lang] || value.es : value)

function App() {
  const [lang, setLang] = useState('es')
  const t = useMemo(() => copy[lang], [lang])

  return (
    <main className="theme-dark min-h-screen overflow-hidden">
      <BackgroundSystem />
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero lang={lang} t={t} />
      <Snapshot t={t} />
      <Meet t={t} />
      <FocusAreas t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Stack t={t} />
      <Education t={t} />
      <Contact t={t} />
    </main>
  )
}

function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--page-bg)]" />
      <div className="star-grid absolute inset-0 opacity-80" />
      <div className="absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full bg-signal-cyan/10 blur-3xl" />
      <div className="absolute -left-36 top-[38rem] h-[30rem] w-[30rem] rounded-full bg-signal-rose/10 blur-3xl" />
    </div>
  )
}

function Header({ lang, setLang, t }) {
  const links = [
    [t.nav[0], '#experience'],
    [t.nav[1], '#projects'],
    [t.nav[2], '#stack'],
    [t.nav[3], '#education'],
    [t.nav[4], '#contact'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--nav)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <a href="#home" className="flex items-center gap-3 font-semibold tracking-wide text-[var(--title)]">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan">
            GB
          </span>
          <span>{profile.shortName}</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-signal-cyan">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="utility-button" type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang.toUpperCase()}
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero({ lang, t }) {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-[1500px] items-center gap-10 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1fr_.82fr] lg:px-10">
      <motion.div {...fadeUp} className="max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-cyan/20 bg-[var(--soft)] px-3 py-2 text-sm text-signal-cyan">
          <Sparkles size={16} />
          {t.command}
        </div>
        <h1 className="text-balance text-5xl font-semibold leading-[.95] text-[var(--title)] md:text-7xl xl:text-8xl">
          {localized(profile.role, lang)}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text)]">{localized(profile.summary, lang)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href="#projects">
            {t.projects}
            <ArrowRight size={18} />
          </a>
          <a className="btn-secondary" href="cv.html">
            {t.cv}
            <Download size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="relative mx-auto w-full max-w-2xl">
        <div className="command-panel overflow-hidden p-4 md:p-5">
          <div className="mb-5 grid gap-4 sm:grid-cols-[160px_1fr]">
            <img src="/static/assets/img/gerangel.jpeg" alt={profile.name} className="h-56 w-full rounded-lg object-cover sm:h-full" />
            <div className="rounded-lg border border-[var(--line)] bg-[var(--soft)] p-4">
              <p className="text-sm text-[var(--muted)]">{t.signal}</p>
              <h2 className="mt-1 text-2xl font-semibold text-[var(--title)]">Gerangel Berroteran</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">{profile.location}</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <div>
              <p className="text-sm text-[var(--muted)]">{t.timeline}</p>
              <h2 className="mt-1 text-xl font-semibold text-[var(--title)]">Career radar</h2>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">{t.available}</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {profile.highlights.map((item) => (
              <div key={localized(item.label, lang)} className="rounded-lg border border-[var(--line)] bg-[var(--soft)] p-4">
                <p className="text-2xl font-semibold text-[var(--title)]">{localized(item.value, lang)}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{localized(item.label, lang)}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-signal-cyan/15 bg-[var(--panel-strong)] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[var(--title)]">{t.timeline}</p>
              <BriefcaseBusiness size={18} className="text-signal-cyan" />
            </div>
            <div className="mt-4 space-y-4">
              {experience.slice(0, 3).map((item) => (
                <div key={item.company} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-signal-cyan shadow-[0_0_16px_rgba(141,241,255,.8)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--title)]">{item.company}</p>
                    <p className="text-xs text-[var(--muted)]">{item.role} · {item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Snapshot({ t }) {
  return (
    <section className="section-shell">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {t.snapshot.map((item) => (
          <motion.div key={item} {...fadeUp} className="rounded-lg border border-[var(--line)] bg-[var(--soft)] p-4 text-sm font-medium text-[var(--title)]">
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Meet({ t }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    const playPromise = video.play()
    if (playPromise) {
      playPromise.catch(() => {
        // Browsers may still block autoplay until the user interacts with the page.
      })
    }
  }, [])

  return (
    <section className="section-shell">
      <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1fr]">
        <SectionIntro eyebrow={t.meetEyebrow} title={t.meetTitle} />
        <motion.div {...fadeUp} className="relative overflow-hidden">
          <div className="video-ambient">
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              controls
              preload="auto"
              poster="/static/assets/img/gerangel.jpeg"
            >
              <source src="/static/assets/img/yeri.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-command-950/70 px-3 py-2 text-xs font-medium text-white backdrop-blur">
              <Play size={14} />
              AI video
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, children }) {
  return (
    <motion.div {...fadeUp} className="mb-10 max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[.18em] text-signal-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-[var(--title)] md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-8 text-[var(--text)]">{children}</p>}
    </motion.div>
  )
}

function FocusAreas({ t }) {
  return (
    <section className="section-shell">
      <SectionIntro eyebrow={t.whatEyebrow} title={t.whatTitle}>{t.whatText}</SectionIntro>
      <div className="grid gap-4 lg:grid-cols-4">
        {focusAreas.map((area) => {
          const Icon = area.icon
          return (
            <motion.article key={area.title} {...fadeUp} className="command-card">
              <Icon className="text-signal-cyan" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-[var(--title)]">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text)]">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{area.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function Experience({ t }) {
  return (
    <section id="experience" className="section-shell">
      <SectionIntro eyebrow={t.expEyebrow} title={t.expTitle}>{t.expText}</SectionIntro>
      <div className="timeline-shell space-y-5">
        {experience.map((item, index) => (
          <motion.article key={`${item.company}-${item.period}`} {...fadeUp} className="command-panel grid gap-6 p-5 md:grid-cols-[.34fr_1fr] md:p-6">
            <div>
              <span className="text-sm text-signal-gold">0{index + 1}</span>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--title)]">{item.company}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.period}</p>
              <p className="mt-4 text-sm font-medium text-signal-cyan">{item.role}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.context}</p>
            </div>
            <div>
              <ul className="space-y-3">
                {item.impact.map((impact) => (
                  <li key={impact} className="flex gap-3 text-sm leading-7 text-[var(--text)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan" />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">{item.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Projects({ t }) {
  return (
    <section id="projects" className="section-shell">
      <SectionIntro eyebrow={t.projectsEyebrow} title={t.projectsTitle}>{t.projectsText}</SectionIntro>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <motion.article key={project.title} {...fadeUp} className="project-card command-card overflow-hidden p-0">
            <div className="project-image aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--panel-strong)]">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-sm text-signal-cyan">{project.category}</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--title)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
              <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal-cyan">
                {t.viewProject}
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Stack({ t }) {
  return (
    <section id="stack" className="section-shell">
      <SectionIntro eyebrow={t.stackEyebrow} title={t.stackTitle}>{t.stackText}</SectionIntro>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <motion.article key={group.title} {...fadeUp} className="command-card">
              <div className="flex items-center gap-3">
                <Icon className="text-signal-cyan" size={24} />
                <h3 className="text-xl font-semibold text-[var(--title)]">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function Education({ t }) {
  return (
    <section id="education" className="section-shell">
      <SectionIntro eyebrow={t.eduEyebrow} title={t.eduTitle} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {education.map((item) => (
          <motion.article key={`${item.title}-${item.institution}`} {...fadeUp} className="command-card">
            <p className="text-sm text-signal-cyan">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--title)]">{item.title}</h3>
            <p className="mt-2 text-[var(--muted)]">{item.institution}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Contact({ t }) {
  return (
    <section id="contact" className="section-shell pb-24">
      <motion.div {...fadeUp} className="command-panel grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-signal-cyan">{t.contactEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--title)] md:text-5xl">{t.contactTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text)]">{t.contactText}</p>
        </div>
        <div className="grid gap-3 text-sm">
          <a className="contact-link" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
          <a className="contact-link" href={profile.linkedin} target="_blank"><Linkedin size={18} />LinkedIn</a>
          <a className="contact-link" href={profile.github} target="_blank"><Github size={18} />GitHub</a>
          <span className="contact-link"><MapPin size={18} />{profile.location}</span>
        </div>
      </motion.div>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
