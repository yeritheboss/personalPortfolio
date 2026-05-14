import { motion } from 'framer-motion'
import { focusAreas } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import { SectionIntro } from '../../components/SectionIntro/SectionIntro'
import './Value.css'

export function Value({ lang, t }) {
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
