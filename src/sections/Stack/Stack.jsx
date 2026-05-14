import { motion } from 'framer-motion'
import { skillGroups } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { SectionIntro } from '../../components/SectionIntro/SectionIntro'
import './Stack.css'

export function Stack({ t }) {
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
