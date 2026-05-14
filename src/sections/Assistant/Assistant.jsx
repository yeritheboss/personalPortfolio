import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { fadeUp } from '../../app/constants'
import { AiAvatar } from './AiAvatar/AiAvatar'
import './Assistant.css'

export function Assistant({ t, onStartTour }) {
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
