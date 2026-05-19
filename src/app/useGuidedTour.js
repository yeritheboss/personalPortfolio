import { useCallback, useRef, useState } from 'react'
import { guidedTourSteps } from './constants'
import { wait, speakAssistantMessage } from '../utils/speech'

const scrollPreviewSteps = {
  experience: [0.48, 1],
  projects: [0.5, 1],
  stack: [0.55, 1],
  education: [0.55, 1],
  contact: [0.45, 1],
}

async function previewScrollableSlide(sectionId) {
  const slide = document.querySelector(`.slide-content.slide-${sectionId}`)
  if (!slide) return

  const maxScroll = slide.scrollHeight - slide.clientHeight
  if (maxScroll < 120) return

  const steps = scrollPreviewSteps[sectionId] ?? [1]
  slide.scrollTo({ top: 0, behavior: 'smooth' })
  await wait(300)

  for (const step of steps) {
    slide.scrollTo({ top: maxScroll * step, behavior: 'smooth' })
    await wait(950)
  }
}

async function speakTourMessage(message, lang, signal = 'intro') {
  window.dispatchEvent(new CustomEvent('assistant:speaking-start', { detail: { signal } }))
  try {
    await speakAssistantMessage(message, lang)
  } finally {
    window.dispatchEvent(new CustomEvent('assistant:speaking-end'))
  }
}

export function useGuidedTour({ lang, navigateToSlide, t }) {
  const [tourState, setTourState] = useState({ isRunning: false, step: null })
  const tourRunningRef = useRef(false)

  const startGuidedTour = useCallback(async () => {
    if (tourRunningRef.current) return
    tourRunningRef.current = true

    try {
      setTourState({ isRunning: true, step: 'intro' })
      await speakTourMessage(t.assistantTourIntro, lang, 'intro')
      await wait(450)

      for (const sectionId of guidedTourSteps) {
        setTourState({ isRunning: true, step: sectionId })
        navigateToSlide(sectionId)
        await wait(700)
        await speakTourMessage(t.assistantTourSteps[sectionId], lang, sectionId)
        await previewScrollableSlide(sectionId)
        await wait(650)
      }

      setTourState({ isRunning: true, step: 'assistant' })
      navigateToSlide('assistant')
      await wait(700)
    } finally {
      tourRunningRef.current = false
      setTourState({ isRunning: false, step: null })
    }
  }, [lang, navigateToSlide, t])

  return {
    startGuidedTour,
    tourState,
  }
}
