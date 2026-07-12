'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from './LocaleProvider'
import { localeMeta } from '@/data/locales'
import type { Locale } from '@/types'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-all"
        aria-label="Change language"
      >
        <span className="text-lg">{localeMeta[locale].flag}</span>
        <span className="hidden sm:inline">{localeMeta[locale].name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {open && (
        <div className="absolute end-0 mt-2 w-48 glass-card-strong overflow-hidden z-50">
          {(Object.keys(localeMeta) as Locale[]).map(code => (
            <button
              key={code}
              onClick={() => { setLocale(code); setOpen(false) }}
              className={`w-full text-start px-4 py-3 hover:bg-white/10 flex items-center gap-3 transition-all ${locale === code ? 'bg-white/5' : ''}`}
            >
              <span className="text-xl">{localeMeta[code].flag}</span>
              <span className="text-sm">{localeMeta[code].name}</span>
              {locale === code && (
                <svg xmlns="http://www.w3.org/2000/svg" className="ms-auto" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF10F0" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
