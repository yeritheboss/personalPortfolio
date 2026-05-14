import { profile } from '../../data/profile'
import { slideIds } from '../../app/constants'
import './Header.css'

export function Header({ activeSlide, lang, onLangChange, onNavigate, t }) {
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
