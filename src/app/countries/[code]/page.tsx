import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { G20_COUNTRIES, G20_LIST, COUNTRY_TRAITS } from '@/data/countries'
import { COUNTRY_CULTURE } from '@/data/countries/culture'

interface PageProps {
  params: Promise<{ code: string }>
}

export async function generateStaticParams() {
  return G20_LIST.map(code => ({ code: code.toLowerCase() }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params
  const upper = code.toUpperCase()
  const country = G20_COUNTRIES[upper]
  if (!country) return { title: 'Not Found' }

  return {
    title: `Dating Culture in ${country.names.en} ${country.flag} — Complete Guide`,
    description: `Discover ${country.names.en}'s dating culture, courtship traditions, red flags, green flags, and popular dating apps. Complete cultural guide for cross-cultural dating.`,
    keywords: [
      `${country.names.en} dating`,
      `${country.names.en} culture`,
      `dating in ${country.names.en}`,
      `${country.names.en} relationships`
    ],
    openGraph: {
      title: `Dating Culture in ${country.names.en} ${country.flag}`,
      description: `Complete guide to ${country.names.en}'s dating culture, courtship, and relationships.`,
      url: `https://loveredflags.com/countries/${code.toLowerCase()}`
    },
    alternates: { canonical: `https://loveredflags.com/countries/${code.toLowerCase()}` }
  }
}

export default async function CountryPage({ params }: PageProps) {
  const { code } = await params
  const upper = code.toUpperCase()
  const country = G20_COUNTRIES[upper]
  const culture = COUNTRY_CULTURE[upper]
  const traits = COUNTRY_TRAITS[upper]

  if (!country || !culture) notFound()

  // Related countries (next 3 in list)
  const currentIdx = G20_LIST.indexOf(upper)
  const related = [
    G20_LIST[(currentIdx + 1) % G20_LIST.length],
    G20_LIST[(currentIdx + 2) % G20_LIST.length],
    G20_LIST[(currentIdx + 3) % G20_LIST.length]
  ]

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/countries" className="hover:text-white">Countries</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{country.names.en}</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-10">
          <div className="text-8xl mb-4">{country.flag}</div>
          <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-xs font-bold mb-4">
            {upper} · G20 DATING CULTURE
          </div>
          <h1 className="h-title text-gradient mb-4">
            Dating Culture in {country.names.en}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            A complete guide to courtship, relationships, red flags, and green flags in{' '}
            {country.names.en}.
          </p>
        </header>

        {/* Overview */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">🌟 Overview</h2>
          <p className="text-white/80 leading-relaxed">{culture.overview}</p>
        </section>

        {/* Dating style */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">💃 Dating Style</h2>
          <p className="text-white/80 leading-relaxed mb-6">{culture.datingStyle}</p>

          <h3 className="text-lg font-bold text-white mb-3">💐 Courtship Traditions</h3>
          <p className="text-white/80 leading-relaxed">{culture.courtship}</p>
        </section>

        {/* Traits (from existing data) */}
        {traits && (
          <section className="glass-card p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold text-gradient mb-4">💘 Partner Traits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-bold text-white mb-2">👦 Male Partners</h3>
                <p className="text-white/70 text-sm leading-relaxed">{traits.male.en}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-bold text-white mb-2">👧 Female Partners</h3>
                <p className="text-white/70 text-sm leading-relaxed">{traits.female.en}</p>
              </div>
            </div>
          </section>
        )}

        {/* Red flags */}
        <section className="glass-card p-6 md:p-8 mb-6 border-red-500/20">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🚩 Red Flags to Watch</h2>
          <ul className="space-y-2">
            {culture.redFlagsToWatch.map((flag, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80">
                <span className="text-red-400 shrink-0">▸</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Green flags */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-neon-green mb-4">💚 Green Flags to Look For</h2>
          <ul className="space-y-2">
            {culture.greenFlags.map((flag, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80">
                <span className="text-neon-green shrink-0">✓</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cultural notes */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">📝 Cultural Notes</h2>
          <p className="text-white/80 leading-relaxed">{culture.culturalNotes}</p>
        </section>

        {/* Language of love */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">💌 Language of Love</h2>
          <p className="text-white/80 leading-relaxed">{culture.languageOfLove}</p>
        </section>

        {/* Popular apps */}
        <section className="glass-card p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">📱 Popular Dating Apps</h2>
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
            Is {country.names.en} Your Match?
          </h3>
          <p className="text-white/70 mb-5">
            Take our free 2-minute quiz to find your best-fit country from all 20 G20 nations.
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Find Your Match 🚩
          </Link>
        </div>

        {/* Related countries */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">🌍 More Countries</h2>
          <div className="grid grid-cols-3 gap-3">
            {related.map(rcode => {
              const rc = G20_COUNTRIES[rcode]
              return (
                <Link
                  key={rcode}
                  href={`/countries/${rcode.toLowerCase()}`}
                  className="glass-card p-4 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-3xl mb-1">{rc.flag}</div>
                  <div className="text-xs text-white/70 font-bold">{rc.names.en}</div>
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
            ← All Countries
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
