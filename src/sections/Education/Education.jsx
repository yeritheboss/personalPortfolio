import { motion } from 'framer-motion'
import { education } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { SectionIntro } from '../../components/SectionIntro/SectionIntro'
import './Education.css'

export function Education({ t }) {
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
