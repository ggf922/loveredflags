'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Locale } from '@/types'
import { locales, localeMeta, detectBrowserLocale, getLocale } from '@/data/locales'
import type { LocaleStrings } from '@/data/locales/en'

interface LocaleContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: LocaleStrings
  dir: 'ltr' | 'rtl'
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    // localStorage 우선, 없으면 브라우저 언어
    const saved = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
    const detected = saved ? getLocale(saved) : detectBrowserLocale()
    setLocaleState(detected)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      document.documentElement.dir = localeMeta[locale].dir
    }
  }, [locale])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    if (typeof window !== 'undefined') localStorage.setItem('locale', l)
  }

  const value: LocaleContextValue = {
    locale,
    setLocale,
    t: locales[locale],
    dir: localeMeta[locale].dir
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
