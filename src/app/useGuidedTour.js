import { useCallback, useRef, useState } from 'react'
import { guidedTourSteps } from './constants'
import { wait, speakAssistantMessage } from '../utils/speech'

export function useGuidedTour({ lang, navigateToSlide, t }) {
  const [tourState, setTourState] = useState({ isRunning: false, step: null })
  const tourRunningRef = useRef(false)

  const startGuidedTour = useCallback(async () => {
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
  }, [lang, navigateToSlide, t])

  return {
    startGuidedTour,
    tourState,
  }
}
