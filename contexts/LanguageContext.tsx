'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { Language } from '@/lib/translations'

interface LanguageContextType {
  lang: Language
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ja' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
