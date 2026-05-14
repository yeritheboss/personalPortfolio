import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../../data/profile'
import { fadeUp } from '../../app/constants'
import { localized } from '../../utils/localized'
import { SectionIntro } from '../../components/SectionIntro/SectionIntro'
import './Projects.css'

export function Projects({ lang, t }) {
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
