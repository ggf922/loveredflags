import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { G20_COUNTRIES, G20_LIST } from '@/data/countries'

export const metadata: Metadata = {
  title: 'Dating Culture in 20 Countries — G20 Global Dating Guide',
  description: 'Explore dating culture, courtship traditions, red flags, and green flags across all 20 G20 countries. From Korea to Brazil, USA to Japan.',
  keywords: ['dating culture', 'global dating', 'international dating', 'cross-cultural relationships', 'G20 countries'],
  openGraph: {
    title: 'Global Dating Culture Guide — 20 G20 Countries',
    description: 'Complete guide to dating traditions across all 20 G20 nations.',
    url: 'https://loveredflags.com/countries'
  },
  alternates: { canonical: 'https://loveredflags.com/countries' }
}

export default function CountriesIndexPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌍</div>
          <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-bold mb-4">
            G20 GLOBAL DATING GUIDE
          </div>
          <h1 className="h-title text-gradient mb-4">Dating Culture Around the World</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore dating traditions, courtship customs, red flags, and green flags across all
            <strong className="text-white"> 20 G20 nations</strong>. Understand the world&apos;s
            most fascinating romantic cultures.
          </p>
        </div>

        {/* Country grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {G20_LIST.map(code => {
            const country = G20_COUNTRIES[code]
            return (
              <Link
                key={code}
                href={`/countries/${code.toLowerCase()}`}
                className="block group"
              >
                <article className="glass-card p-5 h-full text-center hover:scale-[1.04] transition-transform">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="font-bold text-white group-hover:text-gradient mb-1">
                    {country.names.en}
                  </h3>
                  <p className="text-xs text-white/50">
                    Dating culture guide →
                  </p>
                </article>
              </Link>
            )
          })}
        </div>

        {/* Info section */}
        <div className="mt-16 glass-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">🌐 Why Cross-Cultural Dating?</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            In an increasingly connected world, love crosses borders like never before. Dating apps
            match people across continents, students study abroad, and remote work has enabled
            relationships that would have been impossible a generation ago.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Yet, cultural fluency in dating remains underdeveloped. Miscommunication across
            cultural lines is one of the most common sources of relationship conflict for
            international couples. What reads as passionate in Brazil might feel dramatic to a
            Japanese partner. What&apos;s casual in Sweden might feel cold to an Italian.
          </p>
          <p className="text-white/80 leading-relaxed">
            Our country guides give you insight into <strong className="text-white">how dating
            actually works</strong> in each culture — from courtship rituals to green flags and
            red flags. Whether you&apos;re dating someone from another country, moving abroad, or
            just curious about the world, these guides deepen your understanding.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Find Your Global Match 🚩
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
