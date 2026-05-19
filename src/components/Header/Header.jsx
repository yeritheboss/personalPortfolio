import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../../data/profile'
import { slideIds } from '../../app/constants'
import './Header.css'

export function Header({ activeSlide, lang, onLangChange, onNavigate, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const languageLabel = lang === 'es' ? 'EN' : 'ES'

  const navigate = (slideId) => {
    onNavigate(slideId)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--nav)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <button className="brand-button flex items-center gap-3" onClick={() => navigate('assistant')}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-signal-cyan/45 bg-signal-cyan/10 text-xs font-black text-signal-cyan">
            GB
          </span>
          <span className="brand-name text-sm font-extrabold text-[var(--title)] sm:text-base">{profile.shortName}</span>
        </button>
        <button className="utility-button mobile-language" onClick={() => onLangChange(lang === 'es' ? 'en' : 'es')}>
          {languageLabel}
        </button>

        <nav className="nav-slide-list hidden items-center gap-7 text-sm font-medium md:flex">
          {slideIds.map((slideId) => (
            <button
              key={slideId}
              className={`nav-slide-link ${activeSlide === slideId ? 'is-active' : ''}`}
              onClick={() => navigate(slideId)}
            >
              {t.nav[slideId]}
            </button>
          ))}
        </nav>

        <button className="utility-button desktop-language" onClick={() => onLangChange(lang === 'es' ? 'en' : 'es')}>
          {languageLabel}
        </button>

        <div className="mobile-header-actions">
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            className="utility-button mobile-menu-button"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`} aria-label="Menu movil">
          {slideIds.map((slideId) => (
            <button
              key={slideId}
              className={`mobile-menu-link ${activeSlide === slideId ? 'is-active' : ''}`}
              onClick={() => navigate(slideId)}
            >
              {t.nav[slideId]}
            </button>
          ))}
        </nav>

        <button
          aria-label="Cerrar menu"
          className={`mobile-menu-backdrop ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          type="button"
        >
          {' '}
        </button>
      </div>
    </header>
  )
}
