import { motion } from 'framer-motion'
import { experience } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import { SectionIntro } from '../../components/SectionIntro/SectionIntro'
import './Experience.css'

export function Experience({ lang, t }) {
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
