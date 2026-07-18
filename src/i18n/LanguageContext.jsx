import { createContext, useContext, useMemo, useState } from 'react'

import { translations } from './translations.js'

const STORAGE_KEY = 'portfolio-language'
const SUPPORTED_LANGUAGES = new Set(['zh', 'en'])
const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'zh'
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
  return SUPPORTED_LANGUAGES.has(storedLanguage) ? storedLanguage : 'zh'
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const setLanguage = (nextLanguage) => {
    const normalizedLanguage = SUPPORTED_LANGUAGES.has(nextLanguage) ? nextLanguage : 'zh'
    window.localStorage.setItem(STORAGE_KEY, normalizedLanguage)
    setLanguageState(normalizedLanguage)
  }

  const value = useMemo(
    () => ({ language, setLanguage, copy: translations[language] }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

