import { motion } from 'framer-motion'
import { fadeUp } from '../../app/constants'
import './SectionIntro.css'

export function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div className="mb-10 max-w-4xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <p className="text-sm font-bold uppercase tracking-[.24em] text-signal-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[var(--title)] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-[var(--text)]">{text}</p>}
    </motion.div>
  )
}
