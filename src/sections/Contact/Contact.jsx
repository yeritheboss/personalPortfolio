import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, FileText, Github, Home, Linkedin, Mail, Rocket, Send, UserRound, UsersRound } from 'lucide-react'
import { profile } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import './Contact.css'

export function Contact({ lang, t }) {
  const isEnglish = lang === 'en'
  const text = isEnglish
    ? {
        title: "Let's discuss your next engineering challenge.",
        intro:
          "I'm open to senior backend, full-stack and technical leadership opportunities where architecture, product thinking and execution matter.",
        preferences: 'Professional preferences',
        brief: 'Opportunity brief',
        briefText: "Tell me about the opportunity and I'll get back to you soon.",
        submit: 'Transmit Opportunity',
        submitHint: "I'll review and get back to you shortly.",
        other: 'Other ways to connect',
        quote: 'The best opportunities start with a meaningful conversation.',
        name: 'Your name',
        company: 'Company',
        email: 'Work email',
        role: 'Role / Position',
        salary: 'Salary range',
        remote: 'Remote policy',
        stack: 'Tech stack',
        message: 'Message',
        remotePlaceholder: 'Select an option',
        success: ['Your message will be saved', "You'll receive an auto-reply", "I'll review and respond personally"],
        prefs: [
          ['Senior / Tech Lead Roles', 'Backend, Full-stack or Technical Leadership positions.'],
          ['Compensation', 'Aligned with senior roles, from €50k+.'],
          ['Work Model', 'Remote-first or hybrid with a maximum of 2 office days per week.'],
          ['Environment', 'Product-oriented teams with strong engineering culture.'],
          ['Impact', 'Projects with real impact and room to build and grow.'],
        ],
      }
    : {
        title: 'Hablemos de tu proximo reto de ingenieria.',
        intro:
          'Estoy abierto a oportunidades senior backend, full-stack y liderazgo tecnico donde importen arquitectura, producto y ejecucion.',
        preferences: 'Preferencias profesionales',
        brief: 'Resumen de oportunidad',
        briefText: 'Cuéntame sobre la oportunidad y te responderé pronto.',
        submit: 'Transmitir oportunidad',
        submitHint: 'Lo revisare y te respondere en breve.',
        other: 'Otras formas de conectar',
        quote: 'Las mejores oportunidades empiezan con una conversacion con sentido.',
        name: 'Tu nombre',
        company: 'Empresa',
        email: 'Email de trabajo',
        role: 'Rol / Posicion',
        salary: 'Rango salarial',
        remote: 'Politica remota',
        stack: 'Stack tecnico',
        message: 'Mensaje',
        remotePlaceholder: 'Selecciona una opcion',
        success: ['Tu mensaje quedara preparado', 'Recibiras una respuesta', 'Lo revisare personalmente'],
        prefs: [
          ['Roles Senior / Tech Lead', 'Posiciones backend, full-stack o liderazgo tecnico.'],
          ['Compensacion', 'Alineada con roles senior, desde €50k+.'],
          ['Modelo de trabajo', 'Remoto primero o hibrido con maximo 2 dias de oficina por semana.'],
          ['Entorno', 'Equipos orientados a producto con cultura tecnica fuerte.'],
          ['Impacto', 'Proyectos con impacto real y espacio para construir y crecer.'],
        ],
      }

  const preferenceIcons = [BriefcaseBusiness, DollarSignIcon, Home, UsersRound, Rocket]
  const stackTags = ['Java', 'Spring Boot', 'Kafka', 'AWS', 'React', 'PostgreSQL', 'Docker', 'Kubernetes', 'Git']
  const links = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: isEnglish ? 'Download CV' : 'Descargar CV', href: '/cv.html', icon: FileText },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `${text.name}: ${data.get('name') || ''}`,
      `${text.company}: ${data.get('company') || ''}`,
      `${text.email}: ${data.get('email') || ''}`,
      `${text.role}: ${data.get('role') || ''}`,
      `${text.salary}: ${data.get('salary') || ''}`,
      `${text.remote}: ${data.get('remote') || ''}`,
      `${text.stack}: ${data.get('stack') || ''}`,
      '',
      `${text.message}:`,
      data.get('message') || '',
    ].join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio opportunity')}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="contact-page section-shell">
      <div className="contact-hero">
        <motion.div className="contact-hero-copy" variants={fadeUp} initial="hidden" animate="visible">
          <p className="contact-kicker">
            {t.contactEyebrow}
            <span />
          </p>
          <h2>{text.title}</h2>
          <p>{text.intro}</p>
          <div className="contact-stack-tags">
            {stackTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
        <motion.div className="contact-orbit" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <span className="orbit-glow" />
          <span className="orbit-line orbit-line-1" />
          <span className="orbit-line orbit-line-2" />
          <span className="orbit-line orbit-line-3" />
          <span className="orbit-line orbit-line-4" />
          <span className="orbit-core" />
          <span className="orbit-dot orbit-dot-1" />
          <span className="orbit-dot orbit-dot-2" />
          <span className="orbit-dot orbit-dot-3" />
          <span className="orbit-dot orbit-dot-4" />
          <span className="orbit-dot orbit-dot-5" />
          <span className="orbit-dot orbit-dot-6" />
        </motion.div>
      </div>

      <div className="contact-layout">
        <aside className="contact-side">
          <div className="contact-glass-panel contact-preferences">
            <PanelTitle icon={UserRound} title={text.preferences} />
            <div className="contact-preference-list">
              {text.prefs.map(([title, description], index) => {
                const Icon = preferenceIcons[index]
                return (
                  <div className="contact-preference" key={title}>
                    <span>
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="contact-glass-panel contact-links-panel">
            <PanelTitle title={text.other} />
            <div className="contact-link-list">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <a href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <Icon size={20} />
                    <span>{link.label}</span>
                    <ArrowRight size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </aside>

        <form className="contact-glass-panel contact-form-panel" onSubmit={handleSubmit}>
          <PanelTitle icon={Send} title={text.brief} text={text.briefText} />
          <div className="contact-form-grid">
            <ContactField label={text.name} name="name" placeholder="John Doe" />
            <ContactField label={text.company} name="company" placeholder="Company name" />
            <ContactField label={text.email} name="email" type="email" placeholder="john@company.com" wide />
            <ContactField label={text.role} name="role" placeholder="Backend Engineer" />
            <ContactField label={text.salary} name="salary" placeholder="e.g. 50k - 70k EUR" />
            <label>
              <span>{text.remote}</span>
              <select name="remote" defaultValue="">
                <option value="" disabled>
                  {text.remotePlaceholder}
                </option>
                <option>Remote-first</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </label>
            <ContactField label={text.stack} name="stack" placeholder="e.g. Java, Spring Boot, AWS" />
            <label className="contact-wide">
              <span>{text.message}</span>
              <textarea name="message" rows="5" placeholder={isEnglish ? 'Tell me more about the project, the role, the team...' : 'Cuéntame más sobre el proyecto, el rol, el equipo...'} />
            </label>
          </div>
          <button className="contact-submit" type="submit">
            <Mail size={20} />
            <strong>{text.submit}</strong>
            <small>{text.submitHint}</small>
          </button>
          <div className="contact-process">
            {text.success.map((item, index) => {
              const Icon = [CheckCircle2, Send, UserRound][index]
              return (
                <div key={item}>
                  <Icon size={22} />
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
        </form>
      </div>

      <p className="contact-quote">{text.quote}</p>
    </section>
  )
}

function DollarSignIcon(props) {
  return <span className="contact-currency-icon" {...props}>€</span>
}

function PanelTitle({ icon: Icon, title, text }) {
  return (
    <header className="contact-panel-title">
      {Icon && (
        <span>
          <Icon size={24} />
        </span>
      )}
      <div>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
    </header>
  )
}

function ContactField({ label, name, placeholder, type = 'text', wide = false }) {
  return (
    <label className={wide ? 'contact-wide' : undefined}>
      <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} />
    </label>
  )
}
