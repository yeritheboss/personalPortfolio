import React, { useEffect, useRef, useState } from 'react'
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
  Sparkles,
} from 'lucide-react'
import { education, experience, focusAreas, profile, projects, skillGroups } from './data/profile'
import './index.css'

const slideIds = ['assistant', 'profile', 'value', 'experience', 'projects', 'stack', 'education', 'contact']
const guidedTourSteps = ['profile', 'value', 'experience', 'projects', 'stack', 'education', 'contact']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const copy = {
  es: {
    nav: {
      assistant: 'IA',
      profile: 'Perfil',
      value: 'Valor',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      education: 'Formacion',
      contact: 'Contacto',
    },
    command: 'Engineering Command Center',
    projects: 'Ver proyectos',
    cv: 'Descargar CV',
    available: 'Disponible',
    signal: 'Professional signal',
    timeline: 'Mission timeline',
    missionTitle: 'Career radar',
    snapshot: [
      ['Backend', 'Microservicios Java/Spring, APIs REST y servicios de negocio.'],
      ['Frontend', 'React, TypeScript y Angular para interfaces claras y mantenibles.'],
      ['Delivery', 'Pipelines, releases, bugfixes productivos y mejora continua.'],
      ['Datos', 'SQL, BI y criterio analitico aplicado a producto real.'],
    ],
    assistantEyebrow: 'AI portfolio guide',
    assistantTitle: 'Hola, soy la IA de Gerangel',
    assistantText:
      'Puedo guiarte por su perfil, experiencia, proyectos y stack en formato tour. Elige una ruta o lanza el recorrido rapido.',
    aiButton: 'Activar IA',
    aiSpeaking: 'Transmitiendo...',
    aiScript:
      'Hola, soy la IA de Gerangel, tambien conocido como Yeri. Te enseño su portfolio, sus experiencias y como aporta valor en producto real.',
    assistantTour: 'Tour rapido',
    assistantTourIntro: 'Iniciando tour guiado. Vamos a recorrer el portfolio en orden.',
    assistantCv: 'CV',
    assistantContact: 'Contacto',
    previous: 'Anterior',
    next: 'Siguiente',
    assistantToggle: 'Asistente',
    assistantHome: 'IA principal',
    assistantStatus: {
      intro: 'Preparando tour',
      assistant: 'IA principal',
      profile: 'Leyendo perfil',
      value: 'Valor profesional',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack tecnico',
      education: 'Formacion',
      contact: 'Contacto',
    },
    assistantTourSteps: {
      profile: 'Primero, el perfil profesional: desarrollador full-stack con foco en Java, React y sistemas escalables.',
      value: 'Ahora, las formas en las que aporta valor: backend, frontend, delivery y datos.',
      experience: 'Seguimos con la experiencia, desde Otto Group y BNP Paribas hasta sus etapas anteriores.',
      projects: 'Aqui puedes ver proyectos publicados y ejemplos de interfaz, producto y experimentos con IA.',
      stack: 'Este es su stack tecnico principal, agrupado por backend, frontend, datos, DevOps y arquitectura.',
      education: 'En formacion combina ingenieria, Big Data, BI y especializacion Java.',
      contact: 'Y por ultimo, los canales para contactar o revisar su trabajo en LinkedIn y GitHub.',
    },
    aiResponses: {
      profile: 'Gerangel es full-stack developer con experiencia en backend Java, frontend moderno y sistemas empresariales.',
      value: 'Su valor esta en conectar criterio tecnico, entrega y comunicacion con necesidades reales de negocio.',
      experience: 'Ha trabajado en banca, logistica y administracion publica, liderando desarrollo, soporte y evolucion de servicios.',
      projects: 'Sus proyectos muestran producto web, UI moderna, ecommerce y experimentos con inteligencia artificial.',
      stack: 'Su stack principal combina Java 21, Spring Boot, React, Angular, TypeScript, Kafka, Google Cloud y PostgreSQL.',
      education: 'Su base viene de ingenieria electronica, Big Data, BI y formacion especializada en Java.',
      contact: 'Puedes contactar con Gerangel por email, LinkedIn o GitHub desde la seccion final.',
    },
    valueEyebrow: 'Cuatro formas de aportar valor',
    valueTitle: 'Perfil tecnico con impacto en producto, entrega y sistemas reales',
    valueText:
      'Una combinacion de backend, frontend, datos y delivery que ayuda a convertir necesidades de negocio en software mantenible.',
    expEyebrow: 'Trayectoria en sistemas empresariales',
    expTitle: 'Experiencia construyendo, manteniendo y modernizando aplicaciones criticas',
    expText:
      'Trabajo en banca, logistica y administracion publica, con foco en microservicios, rendimiento, seguridad, datos y soporte productivo.',
    projectEyebrow: 'Portfolio publicado',
    projectTitle: 'Proyectos con foco en producto, interfaz y experiencia',
    projectText:
      'Una seleccion de trabajos donde se ve la parte visual, la estructura de producto y el interes por crear experiencias web claras.',
    stackEyebrow: 'Stack tecnico',
    stackTitle: 'Herramientas para construir de backend a interfaz',
    stackText: 'Tecnologias agrupadas por el tipo de problema que ayudan a resolver.',
    eduEyebrow: 'Background',
    eduTitle: 'Formacion tecnica con base en ingenieria, datos y desarrollo',
    contactEyebrow: 'Contacto',
    contactTitle: 'Hablemos de producto, sistemas o nuevas oportunidades',
    contactText: 'Si el perfil encaja con lo que buscas, estos son los canales directos.',
    viewProject: 'Abrir proyecto',
  },
  en: {
    nav: {
      assistant: 'AI',
      profile: 'Profile',
      value: 'Value',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      education: 'Background',
      contact: 'Contact',
    },
    command: 'Engineering Command Center',
    projects: 'View projects',
    cv: 'Download CV',
    available: 'Available',
    signal: 'Professional signal',
    timeline: 'Mission timeline',
    missionTitle: 'Career radar',
    snapshot: [
      ['Backend', 'Java/Spring microservices, REST APIs and business services.'],
      ['Frontend', 'React, TypeScript and Angular for clear, maintainable interfaces.'],
      ['Delivery', 'Pipelines, releases, production fixes and continuous improvement.'],
      ['Data', 'SQL, BI and analytical judgment applied to real products.'],
    ],
    assistantEyebrow: 'AI portfolio guide',
    assistantTitle: "Hi, I am Gerangel's AI",
    assistantText:
      'I can guide you through his profile, experience, projects and stack as a tour. Choose a route or start the quick walkthrough.',
    aiButton: 'Activate AI',
    aiSpeaking: 'Transmitting...',
    aiScript:
      'Hi, I am Gerangel AI. I can show you his portfolio, experience and how he creates value in real products.',
    assistantTour: 'Quick tour',
    assistantTourIntro: 'Starting the guided tour. We will go through the portfolio in order.',
    assistantCv: 'CV',
    assistantContact: 'Contact',
    previous: 'Previous',
    next: 'Next',
    assistantToggle: 'Assistant',
    assistantHome: 'Main AI',
    assistantStatus: {
      intro: 'Preparing tour',
      assistant: 'Main AI',
      profile: 'Reading profile',
      value: 'Professional value',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Technical stack',
      education: 'Background',
      contact: 'Contact',
    },
    assistantTourSteps: {
      profile: 'First, the professional profile: a full-stack developer focused on Java, React and scalable systems.',
      value: 'Now, the ways he creates value: backend, frontend, delivery and data.',
      experience: 'Next, his experience, from Otto Group and BNP Paribas to earlier roles.',
      projects: 'Here you can see published projects and examples of UI, product and AI experiments.',
      stack: 'This is his main technical stack, grouped by backend, frontend, data, DevOps and architecture.',
      education: 'His background combines engineering, Big Data, BI and Java specialization.',
      contact: 'Finally, the channels to contact him or review his work on LinkedIn and GitHub.',
    },
    aiResponses: {
      profile: 'Gerangel is a full-stack developer experienced in Java backend, modern frontend and enterprise systems.',
      value: 'His value is connecting technical judgment, delivery and communication with real business needs.',
      experience: 'He has worked in banking, logistics and public administration, leading development, support and service evolution.',
      projects: 'His projects show web product work, modern UI, ecommerce and artificial intelligence experiments.',
      stack: 'His main stack combines Java 21, Spring Boot, React, Angular, TypeScript, Kafka, Google Cloud and PostgreSQL.',
      education: 'His foundation comes from electronic engineering, Big Data, BI and specialized Java training.',
      contact: 'You can contact Gerangel by email, LinkedIn or GitHub from the final section.',
    },
    valueEyebrow: 'Four ways to create value',
    valueTitle: 'A technical profile with impact across product, delivery and real systems',
    valueText:
      'A mix of backend, frontend, data and delivery that turns business needs into maintainable software.',
    expEyebrow: 'Enterprise systems track record',
    expTitle: 'Experience building, maintaining and modernizing critical applications',
    expText:
      'Work across banking, logistics and public administration, focused on microservices, performance, security, data and production support.',
    projectEyebrow: 'Published portfolio',
    projectTitle: 'Projects focused on product, interface and experience',
    projectText:
      'A selection of work showing visual craft, product structure and a clear interest in building polished web experiences.',
    stackEyebrow: 'Technical stack',
    stackTitle: 'Tools to build from backend to interface',
    stackText: 'Technologies grouped by the type of problem they help solve.',
    eduEyebrow: 'Background',
    eduTitle: 'Technical education across engineering, data and software development',
    contactEyebrow: 'Contact',
    contactTitle: 'Let us talk about product, systems or new opportunities',
    contactText: 'If this profile fits what you are looking for, these are the direct channels.',
    viewProject: 'Open project',
  },
}

function localized(value, lang) {
  if (!value || typeof value !== 'object') return value
  return value[lang] || value.es || value.en || ''
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function speakAssistantMessage(message, lang) {
  if (!('speechSynthesis' in window) || !message) return Promise.resolve()

  return new Promise((resolve) => {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(message)
    utterance.lang = lang === 'es' ? 'es-ES' : 'en-US'
    utterance.rate = 0.86
    utterance.pitch = 0.72
    utterance.volume = 0.9

    const fallback = window.setTimeout(resolve, Math.max(3200, message.length * 92))
    utterance.onend = () => {
      window.clearTimeout(fallback)
      resolve()
    }
    utterance.onerror = () => {
      window.clearTimeout(fallback)
      resolve()
    }
    window.speechSynthesis.speak(utterance)
  })
}

function App() {
  const [lang, setLang] = useState('es')
  const [activeSlide, setActiveSlide] = useState('assistant')
  const [tourState, setTourState] = useState({ isRunning: false, step: null })
  const tourRunningRef = useRef(false)
  const t = copy[lang]
  const currentIndex = slideIds.indexOf(activeSlide)

  const navigateToSlide = (sectionId) => {
    const target = sectionId === 'home' ? 'assistant' : sectionId
    if (!slideIds.includes(target)) return
    setActiveSlide(target)
    window.history.replaceState(null, '', `#${target}`)
  }

  const goToOffset = (offset) => {
    const nextIndex = (currentIndex + offset + slideIds.length) % slideIds.length
    navigateToSlide(slideIds[nextIndex])
  }

  const startGuidedTour = async () => {
    if (tourRunningRef.current) return
    tourRunningRef.current = true
    try {
      setTourState({ isRunning: true, step: 'intro' })
      await speakAssistantMessage(t.assistantTourIntro, lang)
      await wait(450)

      for (const sectionId of guidedTourSteps) {
        setTourState({ isRunning: true, step: sectionId })
        navigateToSlide(sectionId)
        await wait(700)
        await speakAssistantMessage(t.assistantTourSteps[sectionId], lang)
        await wait(1100)
      }
    } finally {
      tourRunningRef.current = false
      setTourState({ isRunning: false, step: null })
    }
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (slideIds.includes(hash)) {
      setActiveSlide(hash)
    }

    const onNavigate = (event) => navigateToSlide(event.detail)
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') goToOffset(1)
      if (event.key === 'ArrowLeft') goToOffset(-1)
    }

    window.addEventListener('portfolio:navigate', onNavigate)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('portfolio:navigate', onNavigate)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [currentIndex])

  return (
    <div className="theme-dark min-h-screen overflow-hidden">
      <BackgroundSystem />
      <Header activeSlide={activeSlide} lang={lang} onLangChange={setLang} onNavigate={navigateToSlide} t={t} />
      <main className="slide-viewport">
        <motion.div
          key={activeSlide}
          className={`slide-content slide-${activeSlide}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          {renderSlide(activeSlide, lang, t, startGuidedTour)}
        </motion.div>
      </main>
      {activeSlide !== 'assistant' && (
        <FloatingAssistant
          activeSlide={activeSlide}
          lang={lang}
          onNavigate={navigateToSlide}
          onNext={() => goToOffset(1)}
          onPrevious={() => goToOffset(-1)}
          onStartTour={startGuidedTour}
          t={t}
          tourState={tourState}
        />
      )}
    </div>
  )
}

function renderSlide(activeSlide, lang, t, onStartTour) {
  if (activeSlide === 'assistant') return <Meet t={t} onStartTour={onStartTour} />
  if (activeSlide === 'profile') {
    return (
      <>
        <Hero lang={lang} t={t} />
        <Snapshot t={t} />
      </>
    )
  }
  if (activeSlide === 'value') return <FocusAreas lang={lang} t={t} />
  if (activeSlide === 'experience') return <Experience lang={lang} t={t} />
  if (activeSlide === 'projects') return <Projects lang={lang} t={t} />
  if (activeSlide === 'stack') return <Stack t={t} />
  if (activeSlide === 'education') return <Education t={t} />
  return <Contact t={t} />
}

function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="star-grid absolute inset-0 opacity-80" />
    </div>
  )
}

function Header({ activeSlide, lang, onLangChange, onNavigate, t }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--nav)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <button className="brand-button flex items-center gap-3" onClick={() => onNavigate('assistant')}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-signal-cyan/45 bg-signal-cyan/10 text-xs font-black text-signal-cyan">
            GB
          </span>
          <span className="text-sm font-extrabold text-[var(--title)] sm:text-base">{profile.shortName}</span>
        </button>

        <nav className="nav-slide-list hidden items-center gap-7 text-sm font-medium md:flex">
          {slideIds.map((slideId) => (
            <button
              key={slideId}
              className={`nav-slide-link ${activeSlide === slideId ? 'is-active' : ''}`}
              onClick={() => onNavigate(slideId)}
            >
              {t.nav[slideId]}
            </button>
          ))}
        </nav>

        <button className="utility-button" onClick={() => onLangChange(lang === 'es' ? 'en' : 'es')}>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  )
}

function Hero({ lang, t }) {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-[1500px] items-center gap-10 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1fr_.82fr] lg:px-10"
    >
      <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-cyan/30 bg-signal-cyan/10 px-3 py-1 text-xs font-semibold text-signal-cyan">
          <Sparkles size={14} />
          {t.command}
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-black leading-none tracking-normal text-[var(--title)] md:text-7xl">
          {localized(profile.role, lang)}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text)]">{localized(profile.summary, lang)}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: 'projects' }))}>
            {t.projects}
            <ArrowRight size={18} />
          </button>
          <a className="btn-secondary" href="/cv.html" target="_blank" rel="noreferrer">
            {t.cv}
            <Download size={18} />
          </a>
        </div>
      </motion.div>

      <motion.aside
        className="command-panel p-5"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        <div className="mb-5 grid gap-4 md:grid-cols-[8rem_1fr]">
          <img
            className="h-36 w-full rounded-lg object-cover grayscale"
            src="/static/assets/img/gerangel.jpeg"
            alt={profile.name}
          />
          <div className="rounded-lg border border-white/10 bg-white/[.03] p-5">
            <p className="text-sm text-[var(--muted)]">{t.signal}</p>
            <h2 className="mt-2 text-2xl font-black text-[var(--title)]">{profile.name}</h2>
            <p className="mt-4 text-sm text-[var(--text)]">{profile.location}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
          <div>
            <p className="text-sm text-[var(--muted)]">{t.timeline}</p>
            <h3 className="text-xl font-black text-[var(--title)]">{t.missionTitle}</h3>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">{t.available}</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {profile.highlights.map((item) => (
            <div key={localized(item.label, lang)} className="rounded-lg border border-white/10 bg-white/[.03] p-4">
              <strong className="text-xl font-black text-[var(--title)]">{localized(item.value, lang)}</strong>
              <p className="mt-1 text-sm text-[var(--muted)]">{localized(item.label, lang)}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-signal-cyan/20 bg-command-950/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold text-[var(--title)]">{t.timeline}</p>
            <BriefcaseBusiness size={16} className="text-signal-cyan" />
          </div>
          <div className="space-y-4">
            {experience.slice(0, 3).map((item) => (
              <div key={item.company} className="grid grid-cols-[.7rem_1fr] gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-signal-cyan shadow-[0_0_16px_rgba(141,241,255,.6)]" />
                <p className="text-sm text-[var(--text)]">
                  <strong className="block text-[var(--title)]">{item.company}</strong>
                  {localized(item.role, lang)} - {localized(item.period, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.aside>
    </section>
  )
}

function Snapshot({ t }) {
  return (
    <section className="section-shell">
      <div className="grid gap-4 md:grid-cols-4">
        {t.snapshot.map(([title, text]) => (
          <motion.div
            key={title}
            className="command-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-lg font-black text-[var(--title)]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Meet({ t, onStartTour }) {
  return (
    <section id="assistant" className="assistant-cover section-shell">
      <div className="assistant-cover-grid">
        <motion.div className="assistant-cover-copy" variants={fadeUp} initial="hidden" animate="visible">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-cyan/30 bg-signal-cyan/10 px-3 py-1 text-xs font-semibold text-signal-cyan">
            <Sparkles size={14} />
            {t.assistantEyebrow}
          </span>
          <h1 className="text-balance text-5xl font-black leading-none text-[var(--title)] md:text-7xl">
            {t.assistantTitle}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--text)]">{t.assistantText}</p>
        </motion.div>
        <AiAvatar t={t} onStartTour={onStartTour} />
      </div>
    </section>
  )
}

function AiAvatar({ t, onStartTour }) {
  const mountRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const speakingRef = useRef(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [activeSignal, setActiveSignal] = useState('intro')

  useEffect(() => {
    speakingRef.current = isSpeaking
  }, [isSpeaking])

  useEffect(() => {
    let renderer
    let frame
    let scene
    let camera
    let resizeObserver
    let isMounted = true

    async function initScene() {
      const THREE = await import('three')
      if (!isMounted || !mountRef.current) return

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
      camera.position.set(0, 0.15, 6)

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
      mountRef.current.appendChild(renderer.domElement)

      const group = new THREE.Group()
      group.scale.setScalar(0.88)
      scene.add(group)

      const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x8df1ff,
        emissive: 0x1b8296,
        emissiveIntensity: 0.24,
        roughness: 0.2,
        metalness: 0.08,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
      })
      const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0x9efbff,
        emissive: 0x00a6c0,
        emissiveIntensity: 0.34,
        roughness: 0.08,
        metalness: 0.12,
        transparent: true,
        opacity: 0.28,
        wireframe: true,
        depthWrite: false,
      })
      const smileMaterial = new THREE.MeshBasicMaterial({
        color: 0xff7ab8,
        transparent: true,
        opacity: 0.72,
      })
      const eyeMaterial = new THREE.MeshBasicMaterial({
        color: 0xe9feff,
        transparent: true,
        opacity: 0.92,
      })

      const outerHead = new THREE.Mesh(new THREE.SphereGeometry(1.24, 42, 30), glassMaterial)
      outerHead.position.y = 0.62

      const innerHead = new THREE.Mesh(new THREE.SphereGeometry(0.82, 36, 24), coreMaterial)
      innerHead.position.y = 0.62

      const innerWire = new THREE.Mesh(new THREE.SphereGeometry(0.82, 32, 22), glassMaterial)
      innerWire.position.y = 0.62

      const eyeGeometry = new THREE.SphereGeometry(0.045, 16, 10)
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(-0.25, 0.72, 0.8)
      rightEye.position.set(0.25, 0.72, 0.8)

      const smile = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.01, 6, 40, Math.PI), smileMaterial)
      smile.position.set(0, 0.39, 0.82)
      smile.rotation.z = Math.PI

      const body = new THREE.Mesh(new THREE.ConeGeometry(0.56, 0.9, 36, 1, true), glassMaterial)
      body.position.y = -0.5
      body.rotation.x = Math.PI

      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.014, 6, 112), glassMaterial)
      halo.rotation.x = Math.PI / 2
      halo.position.y = 0.56
      const scanningHalo = new THREE.Mesh(
        new THREE.TorusGeometry(1.33, 0.013, 6, 112),
        new THREE.MeshBasicMaterial({ color: 0x8df1ff, transparent: true, opacity: 0.5 }),
      )
      scanningHalo.rotation.x = Math.PI / 2
      scanningHalo.position.y = 1.05
      const pinkHalo = new THREE.Mesh(
        new THREE.TorusGeometry(1.72, 0.01, 6, 112),
        new THREE.MeshBasicMaterial({ color: 0xff7ab8, transparent: true, opacity: 0.34 }),
      )
      pinkHalo.rotation.x = Math.PI / 2.12
      pinkHalo.rotation.z = 0.08
      pinkHalo.position.y = 0.48
      group.add(outerHead, innerHead, innerWire, leftEye, rightEye, smile, body, halo, scanningHalo, pinkHalo)

      const light = new THREE.PointLight(0x8df1ff, 2.4, 9)
      light.position.set(0, 2, 3)
      scene.add(light, new THREE.AmbientLight(0xffffff, 0.85))

      const particles = new THREE.BufferGeometry()
      const positions = new Float32Array(150 * 3)
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = (Math.random() - 0.5) * 5
        positions[i + 1] = (Math.random() - 0.5) * 4
        positions[i + 2] = (Math.random() - 0.5) * 3
      }
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const particleSystem = new THREE.Points(
        particles,
        new THREE.PointsMaterial({ color: 0x8df1ff, size: 0.018, transparent: true, opacity: 0.54 }),
      )
      group.add(particleSystem)

      const resize = () => {
        if (!mountRef.current || !renderer) return
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.position.z = width < 560 ? 7.5 : width < 760 ? 6.9 : 6
        camera.updateProjectionMatrix()
      }

      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(mountRef.current)
      resize()

      const animate = () => {
        const time = performance.now() * 0.001
        const speakBoost = speakingRef.current ? 0.065 : 0
        group.position.y = -0.1 + Math.sin(time * 1.35) * (0.08 + speakBoost)
        group.rotation.y += (mouseRef.current.x * 0.34 - group.rotation.y) * 0.04
        group.rotation.x += (-mouseRef.current.y * 0.16 - group.rotation.x) * 0.04
        const mouthPulse = speakingRef.current ? Math.abs(Math.sin(time * 10)) : 0
        smile.scale.x = 1 + mouthPulse * 0.12
        smile.scale.y = 1 + mouthPulse * 0.42
        smile.material.opacity = speakingRef.current ? 0.62 + mouthPulse * 0.28 : 0.72
        scanningHalo.position.y = 0.62 + Math.sin(time * 1.55) * 0.66
        scanningHalo.scale.setScalar(0.98 + Math.sin(time * 1.55) * 0.06)
        scanningHalo.material.opacity = 0.34 + Math.sin(time * 1.7) * 0.14
        halo.rotation.z = time * 0.42
        halo.rotation.x = Math.PI / 2 + Math.sin(time * 0.9) * 0.055
        halo.position.y = 0.56 + Math.sin(time * 1.2) * 0.08
        pinkHalo.rotation.z = -time * 0.34
        pinkHalo.rotation.x = Math.PI / 2.12 + Math.cos(time * 0.85) * 0.07
        pinkHalo.position.y = 0.48 + Math.cos(time * 1.05) * 0.07
        particleSystem.rotation.y = time * 0.08
        renderer.render(scene, camera)
        frame = requestAnimationFrame(animate)
      }
      animate()
    }

    initScene()

    return () => {
      isMounted = false
      cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      renderer?.dispose()
      if (renderer?.domElement?.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [])

  const speakText = (message, signal = 'intro') => {
    setActiveSignal(signal)
    setIsSpeaking(true)
    speakingRef.current = true
    speakAssistantMessage(message, t.aiButton === 'Activar IA' ? 'es' : 'en').finally(() => {
      speakingRef.current = false
      setIsSpeaking(false)
    })
  }

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseRef.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    }
  }

  return (
    <div className="ai-stage" onMouseMove={onMouseMove} onMouseLeave={() => (mouseRef.current = { x: 0, y: 0 })}>
      <div className={`ai-canvas-wrap signal-${activeSignal} ${isSpeaking ? 'is-speaking' : ''}`}>
        <div ref={mountRef} className="ai-canvas" />
        <span className="ai-signal-line" />
        <div className="ai-caption">
          <span>{isSpeaking ? t.aiSpeaking : 'Online'}</span>
          <strong>{activeSignal}</strong>
        </div>
        <div className="ai-actions">
          <button onClick={() => speakText(t.aiScript, 'intro')}>{t.aiButton}</button>
          {['profile', 'value', 'projects', 'contact', 'experience'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: sectionId }))
                speakText(t.aiResponses[sectionId], sectionId)
              }}
            >
              {t.nav[sectionId]}
            </button>
          ))}
          <button className="ai-action-primary" onClick={onStartTour}>
            {t.assistantTour}
          </button>
          {['education', 'stack'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: sectionId }))
                speakText(t.aiResponses[sectionId], sectionId)
              }}
            >
              {t.nav[sectionId]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function FloatingAssistant({ activeSlide, lang, onNavigate, onNext, onPrevious, onStartTour, t, tourState }) {
  const [isOpen, setIsOpen] = useState(false)
  const status = tourState.isRunning
    ? t.assistantStatus[tourState.step] || t.assistantTour
    : t.assistantStatus[activeSlide] || t.assistantToggle

  const goTo = (sectionId) => {
    onNavigate(sectionId)
    setIsOpen(false)
    speakAssistantMessage(t.aiResponses[sectionId], lang)
  }

  return (
    <aside className={`floating-ai ${isOpen ? 'is-open' : ''} ${tourState.isRunning ? 'is-touring' : ''}`}>
      <div className="floating-ai-panel">
        <button onClick={onStartTour}>{t.assistantTour}</button>
        <button onClick={() => goTo('assistant')}>{t.assistantHome}</button>
        <button onClick={onPrevious}>{t.previous}</button>
        <button onClick={onNext}>{t.next}</button>
        <a href="/cv.html" target="_blank" rel="noreferrer">
          {t.assistantCv}
        </a>
        <button onClick={() => goTo('contact')}>{t.assistantContact}</button>
      </div>
      <button className="floating-ai-trigger" onClick={() => setIsOpen((value) => !value)}>
        <span className="floating-ai-orb" />
        <span>
          <small>{t.assistantToggle}</small>
          <strong>{status}</strong>
        </span>
      </button>
    </aside>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div className="mb-10 max-w-4xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <p className="text-sm font-bold uppercase tracking-[.24em] text-signal-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[var(--title)] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-[var(--text)]">{text}</p>}
    </motion.div>
  )
}

function FocusAreas({ lang, t }) {
  return (
    <section id="value" className="section-shell">
      <SectionIntro eyebrow={t.valueEyebrow} title={t.valueTitle} text={t.valueText} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {focusAreas.map((area) => {
          const Icon = area.icon
          return (
            <motion.article key={area.title} className="command-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Icon className="text-signal-cyan" size={30} />
              <h3 className="mt-6 text-xl font-black text-[var(--title)]">{area.title}</h3>
              <p className="mt-4 min-h-28 text-sm leading-6 text-[var(--muted)]">{localized(area.description, lang)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function Experience({ lang, t }) {
  const [featured, ...rest] = experience
  const second = rest[0]
  const older = rest.slice(1)

  const ExperienceCard = ({ item }) => (
    <motion.article className="command-card experience-feature-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <header>
        <p className="text-sm font-bold text-signal-cyan">{localized(item.period, lang)}</p>
        <h3 className="mt-2 text-2xl font-black text-[var(--title)]">{item.company}</h3>
        <p className="mt-2 text-sm font-bold text-[var(--text)]">{localized(item.role, lang)}</p>
        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{localized(item.context, lang)}</p>
      </header>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--text)]">
        {item.impact.slice(0, 4).map((impact) => (
          <li key={localized(impact, lang)}>{localized(impact, lang)}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.stack.slice(0, 8).map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )

  return (
    <section id="experience" className="section-shell">
      <SectionIntro eyebrow={t.expEyebrow} title={t.expTitle} text={t.expText} />
      <div className="experience-slide-grid">
        <ExperienceCard item={featured} />
        <ExperienceCard item={second} />
        <aside className="command-panel experience-rail">
          <div className="grid gap-3">
            {older.map((item, index) => (
              <article className="experience-rail-item" key={item.company}>
                <span>{String(index + 3).padStart(2, '0')}</span>
                <div>
                  <h3>{item.company}</h3>
                  <p>
                    {localized(item.role, lang)} - {localized(item.period, lang)}
                  </p>
                  <div>
                    {item.stack.slice(0, 3).map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

function Projects({ lang, t }) {
  return (
    <section id="projects" className="section-shell">
      <SectionIntro eyebrow={t.projectEyebrow} title={t.projectTitle} text={t.projectText} />
      <div className="projects-uniform-grid">
        {projects.map((project) => (
          <motion.article key={project.title} className="command-card project-card overflow-hidden p-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="project-image aspect-video overflow-hidden border-b border-white/10">
              <img className="h-full w-full object-cover transition duration-500" src={project.image} alt={project.title} />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-signal-cyan">{project.category}</p>
              <h3 className="mt-3 text-xl font-black text-[var(--title)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{localized(project.description, lang)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-signal-cyan" href={project.link} target="_blank" rel="noreferrer">
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
      <SectionIntro eyebrow={t.stackEyebrow} title={t.stackTitle} text={t.stackText} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <motion.article key={group.title} className="command-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Icon className="text-signal-cyan" size={28} />
              <h3 className="mt-5 text-lg font-black text-[var(--title)]">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
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
          <motion.article key={`${item.title}-${item.institution}`} className="command-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-sm font-bold text-signal-cyan">{item.period}</p>
            <h3 className="mt-4 text-xl font-black text-[var(--title)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.institution}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Contact({ t }) {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: profile.location, href: '#contact', icon: MapPin },
  ]

  return (
    <section id="contact" className="section-shell">
      <SectionIntro eyebrow={t.contactEyebrow} title={t.contactTitle} text={t.contactText} />
      <div className="command-panel grid gap-4 p-5 md:grid-cols-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a className="contact-link justify-start" href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon size={20} />
              <span className="font-bold">{link.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
