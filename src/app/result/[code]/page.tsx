'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdSlot from '@/components/AdSlot'
import ShareButtons from '@/components/ShareButtons'
import { useLocale } from '@/components/LocaleProvider'
import resultsByLocale from '@/data/results'
import { RESULT_CODES } from '@/data/results/types'
import { MATCHING } from '@/data/countries/matching'
import { G20_COUNTRIES, COUNTRY_TRAITS } from '@/data/countries'
import { getRarityPercentage } from '@/lib/scoring'
import { getTypeStats } from '@/lib/supabase'

export default function ResultPage() {
  const params = useParams<{ code: string }>()
  const { locale, t } = useLocale()
  const codeParam = (params?.code || '').toUpperCase()

  // 유효하지 않은 코드면 기본값으로 fallback
  const code = (RESULT_CODES as readonly string[]).includes(codeParam) ? codeParam : 'ICSR'

  const results = resultsByLocale[locale] || resultsByLocale.en
  const result = results[code]
  const matching = MATCHING[code]

  const [rarity, setRarity] = useState<number>(getRarityPercentage(code))

  useEffect(() => {
    // 실제 통계 fetch (실패시 default rarity 유지)
    getTypeStats(code).then(pct => {
      if (pct !== null) setRarity(pct)
    })
  }, [code])

  if (!result || !matching) return <div>Loading...</div>

  const isRare = rarity < 10
  const levelStars = '🚩'.repeat(result.level) + '⚪'.repeat(5 - result.level)

  return (
    <>
      <Header />

      {/* Top banner ad */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <AdSlot size="banner" label="Result Top" slotId="result-top" />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* HERO: Result type card */}
        <section className="result-hero glass-card-strong p-8 md:p-10 text-center mb-8">
          <div className="text-xs uppercase tracking-widest text-white/60 mb-2">{t.result.yourType}</div>
          <div className="text-7xl md:text-8xl mb-4">{result.emoji}</div>
          <h1 className="h-display text-gradient mb-3">{result.name}</h1>
          <div className="inline-block bg-neon-red/20 border border-neon-red/40 text-neon-red rounded-full px-4 py-1 text-sm font-bold mb-4">
            Level {result.level}/5 · {result.levelLabel}
          </div>
          <div className="text-2xl mb-4">{levelStars}</div>
          <p className="text-lg md:text-xl italic text-white/90 mb-4">&quot;{result.tagline}&quot;</p>
          <p className="text-white/70 leading-relaxed">{result.description}</p>

          {/* Stats */}
          <div className="mt-6 inline-block glass-card px-4 py-2 text-sm">
            {isRare ? (
              <span>✨ <span className="font-bold text-gradient">{t.result.stats.rare}</span> {rarity}% {t.result.stats.globalPercentage}</span>
            ) : (
              <span>🌍 <span className="font-bold text-gradient">{rarity}%</span> {t.result.stats.globalPercentage}</span>
            )}
          </div>
        </section>

        {/* Traits */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">📋 {t.result.traits}</h2>
          <ul className="space-y-3">
            {result.traits.map((trait, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-neon-pink" />
                <span className="text-white/90">{trait}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Middle native ad */}
        <AdSlot size="native" label="Result Middle" slotId="result-middle" />

        {/* GLOBAL MATCHING - Main viral feature */}
        <section className="mt-8">
          <div className="text-center mb-6">
            <h2 className="h-title text-gradient mb-2">{t.result.globalMatching}</h2>
            <p className="text-white/70">{t.result.matchingSubtitle}</p>
          </div>

          {/* Best Male */}
          <div className="glass-card-strong p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">{t.result.bestMale}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {matching.bestMale.map((countryCode, idx) => {
                const country = G20_COUNTRIES[countryCode]
                const trait = COUNTRY_TRAITS[countryCode]?.male?.[locale] || COUNTRY_TRAITS[countryCode]?.male?.en
                return (
                  <div key={countryCode} className="country-card">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-bold">{country.names[locale] || country.names.en}</span>
                      {idx === 0 && <span className="ms-auto text-xs bg-neon-pink/20 text-neon-pink px-2 py-0.5 rounded-full">#1</span>}
                    </div>
                    <p className="text-sm text-white/70">{trait}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Best Female */}
          <div className="glass-card-strong p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">{t.result.bestFemale}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {matching.bestFemale.map((countryCode, idx) => {
                const country = G20_COUNTRIES[countryCode]
                const trait = COUNTRY_TRAITS[countryCode]?.female?.[locale] || COUNTRY_TRAITS[countryCode]?.female?.en
                return (
                  <div key={countryCode} className="country-card">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-bold">{country.names[locale] || country.names.en}</span>
                      {idx === 0 && <span className="ms-auto text-xs bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded-full">#1</span>}
                    </div>
                    <p className="text-sm text-white/70">{trait}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Worst Match */}
          <div className="glass-card p-6 border border-neon-red/30 mb-6">
            <h3 className="text-lg font-bold mb-3">{t.result.worstMatch}</h3>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{G20_COUNTRIES[matching.worstMatch].flag}</span>
              <div>
                <div className="font-bold text-neon-red">{G20_COUNTRIES[matching.worstMatch].names[locale] || G20_COUNTRIES[matching.worstMatch].names.en}</div>
                <p className="text-sm text-white/60">Different vibes may cause friction 💔</p>
              </div>
            </div>
          </div>

          {/* Travel probability CTA */}
          <div className="text-center bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border border-neon-pink/30 rounded-2xl p-6">
            <p className="text-2xl font-bold text-gradient mb-2">
              🛫 {matching.travelProbability}%
            </p>
            <p className="text-white/70 text-sm">{t.result.travelCta}</p>
            {/* Affiliate link placeholder */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block mt-4 btn-secondary text-sm"
            >
              ✈️ Search flights (Affiliate)
            </a>
          </div>
        </section>

        {/* Middle ad */}
        <AdSlot size="native" label="Result After Matching" slotId="result-after-matching" />

        {/* Deep dive: What your type means */}
        <section className="glass-card p-6 md:p-8 mt-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.result.deepDive}</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            {t.result.deepDiveIntro.replace('{name}', result.name)}
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            {t.result.levelDesc.replace('{level}', String(result.level))}{' '}
            {result.level <= 2 ? t.result.levelLow : result.level === 3 ? t.result.levelMid : t.result.levelHigh}.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-neon-green/5 border border-neon-green/20 rounded-lg">
              <h3 className="font-bold text-neon-green mb-2">{t.result.strengths}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {result.level <= 2
                  ? 'You bring emotional stability, thoughtful communication, and healthy boundaries to relationships.'
                  : result.level === 3
                    ? 'You bring passion and depth to relationships. When channeled well, your emotional intensity creates deep bonds.'
                    : 'You bring passionate loyalty and deep emotional investment to relationships.'}
              </p>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-2">{t.result.watchOut}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {result.level <= 2
                  ? 'Occasionally, your stability can be misread as emotional distance. Communicate warmth explicitly.'
                  : result.level === 3
                    ? 'Your emotions can occasionally overwhelm your partner. Practice pausing before big reactions.'
                    : 'High intensity paired with reactivity can burn out partners. Building emotional regulation skills is your growth edge.'}
              </p>
            </div>
          </div>
        </section>

        {/* Self-improvement tips */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.result.growthTips}</h2>
          <p className="text-white/70 mb-4 text-sm">
            {t.result.growthIntro}
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-2xl shrink-0">1️⃣</span>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{t.result.tipPause}</h4>
                <p className="text-white/70 text-sm">{t.result.tipPauseDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-2xl shrink-0">2️⃣</span>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{t.result.tipName}</h4>
                <p className="text-white/70 text-sm">{t.result.tipNameDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-2xl shrink-0">3️⃣</span>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{t.result.tipIStatements}</h4>
                <p className="text-white/70 text-sm">{t.result.tipIStatementsDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-2xl shrink-0">4️⃣</span>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{t.result.tipRepair}</h4>
                <p className="text-white/70 text-sm">{t.result.tipRepairDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-2xl shrink-0">5️⃣</span>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{t.result.tipRead}</h4>
                <p className="text-white/70 text-sm">
                  <Link href="/blog/attachment-styles-explained" className="text-neon-pink hover:underline">
                    {t.result.tipReadDesc}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.result.readMore}</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              href="/blog/what-are-red-flags-in-dating"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">🚩</div>
              <h4 className="font-bold text-white mb-1">What Are Red Flags in Dating?</h4>
              <p className="text-xs text-white/60">10 warning signs backed by research</p>
            </Link>
            <Link
              href="/blog/attachment-styles-explained"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-bold text-white mb-1">Attachment Styles Explained</h4>
              <p className="text-xs text-white/60">Anxious, avoidant, secure, and more</p>
            </Link>
            <Link
              href="/blog/signs-of-healthy-relationship"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">💚</div>
              <h4 className="font-bold text-white mb-1">Signs of Healthy Relationships</h4>
              <p className="text-xs text-white/60">Green flags that predict lasting love</p>
            </Link>
            <Link
              href="/blog/how-to-communicate-in-relationship"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-bold text-white mb-1">Communication in Relationships</h4>
              <p className="text-xs text-white/60">The Gottman method simplified</p>
            </Link>
          </div>
        </section>

        {/* Share section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-2">{t.result.shareTitle}</h2>
          <p className="text-white/60 text-sm mb-6">{t.result.shareSubtitle}</p>
          <ShareButtons resultCode={code} resultName={result.name} resultEmoji={result.emoji} />
        </section>

        {/* Retake */}
        <section className="mt-8 text-center">
          <Link href="/quiz" className="btn-neon inline-block">
            {t.result.ctaRetake}
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-white/40 text-center mt-8 max-w-2xl mx-auto">
          {t.result.disclaimer}
        </p>
      </main>

      <Footer />

      {/* Sticky bottom ad */}
      <div className="sticky-ad-bottom">
        <AdSlot size="sticky" label="Sticky Bottom" slotId="sticky-bottom" />
      </div>
    </>
  )
}
