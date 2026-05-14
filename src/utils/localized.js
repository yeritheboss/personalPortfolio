export function localized(value, lang) {
  if (!value || typeof value !== 'object') return value
  return value[lang] || value.es || value.en || ''
}
