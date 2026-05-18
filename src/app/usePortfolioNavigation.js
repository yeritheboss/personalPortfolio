import { useCallback, useEffect, useMemo, useState } from 'react'
import { slideIds } from './constants'

function normalizeSlide(sectionId) {
  const target = sectionId === 'home' ? 'assistant' : sectionId
  return slideIds.includes(target) ? target : 'assistant'
}

function getHashSlide() {
  return normalizeSlide(window.location.hash.replace('#', ''))
}

export function usePortfolioNavigation() {
  const [activeSlide, setActiveSlide] = useState(() => getHashSlide())

  const currentIndex = useMemo(() => slideIds.indexOf(activeSlide), [activeSlide])

  const navigateToSlide = useCallback((sectionId, { replace = true } = {}) => {
    const target = normalizeSlide(sectionId)
    setActiveSlide(target)

    const nextHash = `#${target}`
    if (window.location.hash !== nextHash) {
      const method = replace ? 'replaceState' : 'pushState'
      window.history[method](null, '', nextHash)
    }
  }, [])

  const goToOffset = useCallback(
    (offset) => {
      const nextIndex = (currentIndex + offset + slideIds.length) % slideIds.length
      navigateToSlide(slideIds[nextIndex])
    },
    [currentIndex, navigateToSlide],
  )

  useEffect(() => {
    const syncFromHash = () => setActiveSlide(getHashSlide())
    const onNavigate = (event) => navigateToSlide(event.detail)
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') goToOffset(1)
      if (event.key === 'ArrowLeft') goToOffset(-1)
    }

    window.addEventListener('hashchange', syncFromHash)
    window.addEventListener('popstate', syncFromHash)
    window.addEventListener('portfolio:navigate', onNavigate)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('popstate', syncFromHash)
      window.removeEventListener('portfolio:navigate', onNavigate)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [goToOffset, navigateToSlide])

  return {
    activeSlide,
    goToOffset,
    navigateToSlide,
  }
}
