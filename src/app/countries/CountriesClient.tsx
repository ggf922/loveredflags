'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { G20_COUNTRIES, G20_LIST } from '@/data/countries'
import { useLocale } from '@/components/LocaleProvider'

export default function CountriesClient() {
  const { t, locale } = useLocale()

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌍</div>
          <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-bold mb-4">
            {t.countries.badge}
          </div>
          <h1 className="h-title text-gradient mb-4">{t.countries.title}</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.countries.subtitle}
          </p>
        </div>

        {/* Country grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {G20_LIST.map(code => {
            const country = G20_COUNTRIES[code]
            const name = country.names[locale] || country.names.en
            return (
              <Link
                key={code}
                href={`/countries/${code.toLowerCase()}`}
                className="block group"
              >
                <article className="glass-card p-5 h-full text-center hover:scale-[1.04] transition-transform">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="font-bold text-white group-hover:text-gradient mb-1">
                    {name}
                  </h3>
                  <p className="text-xs text-white/50">
                    {t.countries.cardCta}
                  </p>
                </article>
              </Link>
            )
          })}
        </div>

        {/* Info section */}
        <div className="mt-16 glass-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.countries.whyTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            {t.countries.whyP1}
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            {t.countries.whyP2}
          </p>
          <p className="text-white/80 leading-relaxed">
            {t.countries.whyP3}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            {t.countries.findMatch}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
