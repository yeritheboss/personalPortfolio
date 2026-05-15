import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../data/copy'
import { guidedTourSteps, slideIds } from './constants'
import { wait, speakAssistantMessage } from '../utils/speech'
import { BackgroundSystem } from '../components/BackgroundSystem/BackgroundSystem'
import { Header } from '../components/Header/Header'
import { FloatingAssistant } from '../components/FloatingAssistant/FloatingAssistant'
import { Assistant } from '../sections/Assistant/Assistant'
import { Hero, Snapshot } from '../sections/Profile/Profile'
import { Value } from '../sections/Value/Value'
import { Experience } from '../sections/Experience/Experience'
import { Projects } from '../sections/Projects/Projects'
import { Stack } from '../sections/Stack/Stack'
import { Education } from '../sections/Education/Education'
import { Contact } from '../sections/Contact/Contact'

export default function App() {
  const [lang, setLang] = useState('es')
  const [activeSlide, setActiveSlide] = useState('assistant')
  const [tourState, setTourState] = useState({ isRunning: false, step: null })
  const tourRunningRef = useRef(false)
  const t = copy[lang]
  const currentIndex = slideIds.indexOf(activeSlide)

  const navigateToSlide = (sectionId) => {
    const target = sectionId === 'home' ? 'assistant' : sectionId
    if (!slideIds.includes(target)) return
    setActiveSlide(target)
    window.history.replaceState(null, '', `#${target}`)
  }

  const goToOffset = (offset) => {
    const nextIndex = (currentIndex + offset + slideIds.length) % slideIds.length
    navigateToSlide(slideIds[nextIndex])
  }

  const startGuidedTour = async () => {
    if (tourRunningRef.current) return
    tourRunningRef.current = true
    try {
      setTourState({ isRunning: true, step: 'intro' })
      await speakAssistantMessage(t.assistantTourIntro, lang)
      await wait(450)

      for (const sectionId of guidedTourSteps) {
        setTourState({ isRunning: true, step: sectionId })
        navigateToSlide(sectionId)
        await wait(700)
        await speakAssistantMessage(t.assistantTourSteps[sectionId], lang)
        await wait(1100)
      }
    } finally {
      tourRunningRef.current = false
      setTourState({ isRunning: false, step: null })
    }
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (slideIds.includes(hash)) {
      setActiveSlide(hash)
    }

    const onNavigate = (event) => navigateToSlide(event.detail)
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') goToOffset(1)
      if (event.key === 'ArrowLeft') goToOffset(-1)
    }

    window.addEventListener('portfolio:navigate', onNavigate)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('portfolio:navigate', onNavigate)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [currentIndex])

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

function renderSlide(activeSlide, lang, t, onStartTour) {
  if (activeSlide === 'assistant') return <Assistant t={t} onStartTour={onStartTour} />
  if (activeSlide === 'profile') {
    return (
      <>
        <Hero lang={lang} t={t} />
        <Snapshot t={t} />
      </>
    )
  }
  if (activeSlide === 'value') return <Value lang={lang} t={t} />
  if (activeSlide === 'experience') return <Experience lang={lang} t={t} />
  if (activeSlide === 'projects') return <Projects lang={lang} t={t} />
  if (activeSlide === 'stack') return <Stack lang={lang} t={t} />
  if (activeSlide === 'education') return <Education lang={lang} t={t} />
  return <Contact lang={lang} t={t} />
}
