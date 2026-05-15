import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Download, Sparkles } from 'lucide-react'
import { experience, profile } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import './Profile.css'

export function Hero({ lang, t }) {
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
            src="/assets/img/gerangel.jpeg"
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

export function Snapshot({ t }) {
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
