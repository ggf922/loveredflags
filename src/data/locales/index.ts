import en from './en'
import ko from './ko'
import ja from './ja'
import es from './es'
import pt from './pt'
import ar from './ar'
import ru from './ru'
import zh from './zh'
import type { Locale } from '@/types'
import type { LocaleStrings } from './en'

export const locales: Record<Locale, LocaleStrings> = {
  en, ko, ja, es, pt, ar, ru, zh
}

export const localeMeta: Record<Locale, { name: string; flag: string; dir: 'ltr' | 'rtl' }> = {
  en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
  ko: { name: '한국어', flag: '🇰🇷', dir: 'ltr' },
  ja: { name: '日本語', flag: '🇯🇵', dir: 'ltr' },
  es: { name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  pt: { name: 'Português', flag: '🇧🇷', dir: 'ltr' },
  ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  zh: { name: '中文', flag: '🇨🇳', dir: 'ltr' },
}

export function getLocale(locale: string): Locale {
  if (['en','ko','ja','es','pt','ar','ru','zh'].includes(locale)) return locale as Locale
  return 'en'
}

export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const lang = navigator.language.toLowerCase().split('-')[0]
  return getLocale(lang)
}
