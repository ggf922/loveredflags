'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdSlot from '@/components/AdSlot'
import { useLocale } from '@/components/LocaleProvider'
import { useQuiz } from '@/components/QuizProvider'
import { useEffect } from 'react'

export default function HomePage() {
  const { t } = useLocale()
  const { reset } = useQuiz()

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <>
      <Header />

      {/* Top banner ad */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <AdSlot size="banner" label="Top Banner" />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        {/* Hero section */}
        <section className="text-center">
          <div className="inline-block glass-card px-4 py-2 mb-6 text-sm">
            {t.landing.badge}
          </div>

          <h1 className="h-display mb-6">
            <span className="block text-white">{t.landing.title}</span>
            <span className="block text-gradient">{t.landing.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.landing.subtitle}
          </p>

          <Link href="/quiz" className="btn-neon inline-block">
            {t.landing.cta}
          </Link>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {(['f1','f2','f3'] as const).map(key => {
              const f = t.landing.features[key]
              return (
                <div key={key} className="glass-card p-6 text-center">
                  <div className="text-4xl mb-3">{f.emoji}</div>
                  <div className="text-xl font-bold text-gradient mb-1">{f.title}</div>
                  <div className="text-sm text-white/60">{f.desc}</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Reviews / social proof section */}
        <section className="mt-16">
          <p className="text-center text-white/60 text-sm mb-6">{t.landing.stats}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <div className="text-3xl mb-2">😱</div>
              <p className="text-sm text-white/80">&quot;Scarily accurate. My ex was literally the worst match for my type&quot;</p>
              <p className="text-xs text-white/40 mt-2">— @user_kim</p>
            </div>
            <div className="glass-card p-5">
              <div className="text-3xl mb-2">🤯</div>
              <p className="text-sm text-white/80">&quot;Booked a flight to Italy after seeing my result LOL&quot;</p>
              <p className="text-xs text-white/40 mt-2">— @sarah_x</p>
            </div>
            <div className="glass-card p-5">
              <div className="text-3xl mb-2">🚩</div>
              <p className="text-sm text-white/80">&quot;I got Controlling Vampire. Time to seek therapy 💀&quot;</p>
              <p className="text-xs text-white/40 mt-2">— @mikey</p>
            </div>
          </div>
        </section>

        {/* Middle ad */}
        <div className="mt-12">
          <AdSlot size="native" label="Middle Native" />
        </div>

        {/* Second CTA */}
        <section className="text-center mt-12">
          <Link href="/quiz" className="btn-neon inline-block">
            {t.landing.cta}
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
