import { createContext, useContext, useState, useCallback } from 'react'

// ════════════════════════════════════════════════════════════════════
//  Bilingual engine — Telugu (default) + English.
//  Usage in a component:  const { t, lang, setLang } = useLang()
//  Then wrap any text value:  {t(content.couple.groom.name)}
//
//  A "translatable" value is an object like { te: 'తెలుగు', en: 'English' }.
//  Plain strings (links, dates, icons) pass straight through unchanged.
// ════════════════════════════════════════════════════════════════════

const LanguageContext = createContext(null)

export const LANGS = ['te', 'en'] // Telugu first = default

export function LanguageProvider({ children, defaultLang = 'te' }) {
  const [lang, setLang] = useState(defaultLang)

  const t = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value === 'string' || typeof value === 'number') return value
      if (typeof value === 'object') {
        // pick current language, gracefully fall back
        return value[lang] ?? value.en ?? value.te ?? ''
      }
      return value
    },
    [lang],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>')
  return ctx
}
