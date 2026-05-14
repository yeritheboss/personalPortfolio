export function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

export function speakAssistantMessage(message, lang) {
  if (!('speechSynthesis' in window) || !message) return Promise.resolve()

  return new Promise((resolve) => {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(message)
    utterance.lang = lang === 'es' ? 'es-ES' : 'en-US'
    utterance.rate = 0.86
    utterance.pitch = 0.72
    utterance.volume = 0.9

    const fallback = window.setTimeout(resolve, Math.max(3200, message.length * 92))
    utterance.onend = () => {
      window.clearTimeout(fallback)
      resolve()
    }
    utterance.onerror = () => {
      window.clearTimeout(fallback)
      resolve()
    }
    window.speechSynthesis.speak(utterance)
  })
}
