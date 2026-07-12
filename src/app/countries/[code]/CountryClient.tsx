'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { G20_COUNTRIES, COUNTRY_TRAITS } from '@/data/countries'
import { COUNTRY_CULTURE } from '@/data/countries/culture'
import { useLocale } from '@/components/LocaleProvider'
import type { Locale } from '@/types'

interface CountryClientProps {
  code: string
  related: string[]
}

// Helper: get localized string from either a plain string or Record<Locale,string>
function localizedText(value: unknown, locale: Locale): string {
  if (typeof value === 'string') return value
  if (value && typeof value === 'object') {
    const rec = value as Record<string, string>
    return rec[locale] || rec.en || ''
  }
  return ''
}

// Helper: get localized string[] from either string[] or Record<Locale, string[]>
function localizedList(value: unknown, locale: Locale): string[] {
  if (Array.isArray(value)) return value
  if (value && typeof value === 'object') {
    const rec = value as Record<string, string[]>
    return rec[locale] || rec.en || []
  }
  return []
}

export default function CountryClient({ code, related }: CountryClientProps) {
  const { t, locale } = useLocale()
  const upper = code.toUpperCase()
  const country = G20_COUNTRIES[upper]
  const culture = COUNTRY_CULTURE[upper]
  const traits = COUNTRY_TRAITS[upper]

  if (!country || !culture) return null

  const countryName = country.names[locale] || country.names.en

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white">{t.blog.breadcrumbHome}</Link>
          <span className="mx-2">/</span>
          <Link href="/countries" className="hover:text-white">{t.countries.breadcrumbCountries}</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{countryName}</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-10">
          <div className="text-8xl mb-4">{country.flag}</div>
          <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-xs font-bold mb-4">
            {upper} · G20
          </div>
          <h1 className="h-title text-gradient mb-4">
            {countryName}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t.countries.title}
          </p>
        </header>

        {/* Overview */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.overviewTitle}</h2>
          <p className="text-white/80 leading-relaxed">{localizedText(culture.overview, locale)}</p>
        </section>

        {/* Dating style */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.styleTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-6">{localizedText(culture.datingStyle, locale)}</p>

          <h3 className="text-lg font-bold text-white mb-3">{t.countries.courtshipTitle}</h3>
          <p className="text-white/80 leading-relaxed">{localizedText(culture.courtship, locale)}</p>
        </section>

        {/* Traits (from existing data) */}
        {traits && (
          <section className="glass-card p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.traitsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-bold text-white mb-2">{t.countries.malePartners}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {traits.male[locale] || traits.male.en}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-bold text-white mb-2">{t.countries.femalePartners}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {traits.female[locale] || traits.female.en}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Red flags */}
        <section className="glass-card p-6 md:p-8 mb-6 border-red-500/20">
          <h2 className="text-2xl font-bold text-red-400 mb-4">{t.countries.redFlagsTitle}</h2>
          <ul className="space-y-2">
            {localizedList(culture.redFlagsToWatch, locale).map((flag, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80">
                <span className="text-red-400 shrink-0">▸</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Green flags */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-neon-green mb-4">{t.countries.greenFlagsTitle}</h2>
          <ul className="space-y-2">
            {localizedList(culture.greenFlags, locale).map((flag, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80">
                <span className="text-neon-green shrink-0">✓</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cultural notes */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.notesTitle}</h2>
          <p className="text-white/80 leading-relaxed">{localizedText(culture.culturalNotes, locale)}</p>
        </section>

        {/* Language of love */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.loveLangTitle}</h2>
          <p className="text-white/80 leading-relaxed">{localizedText(culture.languageOfLove, locale)}</p>
        </section>

        {/* Popular apps */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.appsTitle}</h2>
          <div className="flex flex-wrap gap-2">
            {culture.popularApps.map(app => (
              <span
                key={app}
                className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm border border-white/10"
              >
                {app}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="glass-card p-8 text-center mb-8">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-2xl font-bold text-gradient mb-2">
            {t.countries.isMatchTitle.replace('{country}', countryName)}
          </h3>
          <p className="text-white/70 mb-5">
            {t.countries.isMatchDesc}
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            {t.countries.findMatchBtn}
          </Link>
        </div>

        {/* Related countries */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">{t.countries.moreCountries}</h2>
          <div className="grid grid-cols-3 gap-3">
            {related.map(rcode => {
              const rc = G20_COUNTRIES[rcode]
              const rcName = rc.names[locale] || rc.names.en
              return (
                <Link
                  key={rcode}
                  href={`/countries/${rcode.toLowerCase()}`}
                  className="glass-card p-4 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-3xl mb-1">{rc.flag}</div>
                  <div className="text-xs text-white/70 font-bold">{rcName}</div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Back */}
        <div className="text-center">
          <Link
            href="/countries"
            className="inline-block px-6 py-2 border border-white/20 text-white/80 rounded-full hover:bg-white/5 transition-colors"
          >
            {t.countries.allCountries}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
