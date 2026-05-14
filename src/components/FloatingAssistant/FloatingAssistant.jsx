import { useState } from 'react'
import { speakAssistantMessage } from '../../utils/speech'
import './FloatingAssistant.css'

export function FloatingAssistant({ activeSlide, lang, onNavigate, onNext, onPrevious, onStartTour, t, tourState }) {
  const [isOpen, setIsOpen] = useState(false)
  const status = tourState.isRunning
    ? t.assistantStatus[tourState.step] || t.assistantTour
    : t.assistantStatus[activeSlide] || t.assistantToggle

  const goTo = (sectionId) => {
    onNavigate(sectionId)
    setIsOpen(false)
    speakAssistantMessage(t.aiResponses[sectionId], lang)
  }

  return (
    <aside className={`floating-ai ${isOpen ? 'is-open' : ''} ${tourState.isRunning ? 'is-touring' : ''}`}>
      <div className="floating-ai-panel">
        <button onClick={onStartTour}>{t.assistantTour}</button>
        <button onClick={() => goTo('assistant')}>{t.assistantHome}</button>
        <button onClick={onPrevious}>{t.previous}</button>
        <button onClick={onNext}>{t.next}</button>
        <a href="/cv.html" target="_blank" rel="noreferrer">
          {t.assistantCv}
        </a>
        <button onClick={() => goTo('contact')}>{t.assistantContact}</button>
      </div>
      <button className="floating-ai-trigger" onClick={() => setIsOpen((value) => !value)}>
        <span className="floating-ai-orb" />
        <span>
          <small>{t.assistantToggle}</small>
          <strong>{status}</strong>
        </span>
      </button>
    </aside>
  )
}
