import { useState } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../data/copy'
import { BackgroundSystem } from '../components/BackgroundSystem/BackgroundSystem'
import { Header } from '../components/Header/Header'
import { FloatingAssistant } from '../components/FloatingAssistant/FloatingAssistant'
import { renderSlide } from './slideRegistry'
import { useGuidedTour } from './useGuidedTour'
import { usePortfolioNavigation } from './usePortfolioNavigation'

export default function App() {
  const [lang, setLang] = useState('es')
  const t = copy[lang]
  const { activeSlide, goToOffset, navigateToSlide } = usePortfolioNavigation()
  const { startGuidedTour, tourState } = useGuidedTour({ lang, navigateToSlide, t })

  return (
    <div className="theme-dark min-h-screen overflow-hidden">
      <BackgroundSystem />
      <Header activeSlide={activeSlide} lang={lang} onLangChange={setLang} onNavigate={navigateToSlide} t={t} />
      <main className="slide-viewport">
        <motion.div
          key={activeSlide}
          className={`slide-content slide-${activeSlide}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          {renderSlide(activeSlide, lang, t, startGuidedTour)}
        </motion.div>
      </main>
      {activeSlide !== 'assistant' && (
        <FloatingAssistant
          activeSlide={activeSlide}
          lang={lang}
          onNavigate={navigateToSlide}
          onNext={() => goToOffset(1)}
          onPrevious={() => goToOffset(-1)}
          onStartTour={startGuidedTour}
          t={t}
          tourState={tourState}
        />
      )}
    </div>
  )
}
