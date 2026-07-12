'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BusinessInfoCard from '@/components/BusinessInfoCard'
import { useLocale } from '@/components/LocaleProvider'

export default function AboutClient() {
  const { t } = useLocale()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🚩</div>
          <h1 className="h-title text-gradient mb-4">{t.about.title}</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">16</div>
            <div className="text-xs text-white/60 mt-1">{t.about.stats.types}</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">20</div>
            <div className="text-xs text-white/60 mt-1">{t.about.stats.countries}</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">8</div>
            <div className="text-xs text-white/60 mt-1">{t.about.stats.languages}</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">2min</div>
            <div className="text-xs text-white/60 mt-1">{t.about.stats.duration}</div>
          </div>
        </div>

        {/* Our mission */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.about.missionTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.missionP1}</p>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.missionP2}</p>
          <p className="text-white/80 leading-relaxed">{t.about.missionP3}</p>
        </section>

        {/* Our methodology */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.about.methodTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.methodIntro}</p>
          <div className="space-y-4 mb-4">
            <div className="border-l-4 border-neon-pink pl-4">
              <h3 className="font-bold text-white mb-1">{t.about.methodAttach}</h3>
              <p className="text-sm text-white/70">{t.about.methodAttachDesc}</p>
            </div>
            <div className="border-l-4 border-neon-cyan pl-4">
              <h3 className="font-bold text-white mb-1">{t.about.methodComm}</h3>
              <p className="text-sm text-white/70">{t.about.methodCommDesc}</p>
            </div>
            <div className="border-l-4 border-neon-purple pl-4">
              <h3 className="font-bold text-white mb-1">{t.about.methodEmo}</h3>
              <p className="text-sm text-white/70">{t.about.methodEmoDesc}</p>
            </div>
            <div className="border-l-4 border-neon-green pl-4">
              <h3 className="font-bold text-white mb-1">{t.about.methodCtrl}</h3>
              <p className="text-sm text-white/70">{t.about.methodCtrlDesc}</p>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed">{t.about.methodOutro}</p>
        </section>

        {/* Global matching explained */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.about.globalTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.globalIntro}</p>
          <ul className="space-y-2 text-white/80 mb-4 ml-4">
            <li>✅ <strong className="text-neon-green">3 {t.about.globalBest}</strong></li>
            <li>✅ <strong className="text-neon-green">3 {t.about.globalBestFemale}</strong></li>
            <li>⚠️ <strong className="text-yellow-400">1 {t.about.globalAvoid}</strong></li>
          </ul>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.globalP1}</p>
          <p className="text-white/80 leading-relaxed">{t.about.globalP2}</p>
        </section>

        {/* Values */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.about.valuesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-white mb-1">{t.about.valPrivacy}</h3>
              <p className="text-sm text-white/70">{t.about.valPrivacyDesc}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-bold text-white mb-1">{t.about.valInclusive}</h3>
              <p className="text-sm text-white/70">{t.about.valInclusiveDesc}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-bold text-white mb-1">{t.about.valFun}</h3>
              <p className="text-sm text-white/70">{t.about.valFunDesc}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-white mb-1">{t.about.valFast}</h3>
              <p className="text-sm text-white/70">{t.about.valFastDesc}</p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.about.techTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.techIntro}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-white/5 rounded-lg text-center">
              <div className="font-bold text-neon-pink">Next.js 16</div>
              <div className="text-xs text-white/50">React Framework</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg text-center">
              <div className="font-bold text-neon-cyan">TypeScript</div>
              <div className="text-xs text-white/50">Type Safety</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg text-center">
              <div className="font-bold text-neon-purple">TailwindCSS</div>
              <div className="text-xs text-white/50">Styling</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg text-center">
              <div className="font-bold text-neon-green">Supabase</div>
              <div className="text-xs text-white/50">Statistics DB</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg text-center">
              <div className="font-bold text-yellow-400">Vercel Edge</div>
              <div className="text-xs text-white/50">Global CDN</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg text-center">
              <div className="font-bold text-white">i18n Custom</div>
              <div className="text-xs text-white/50">8 Languages</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t.about.contactTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-4">{t.about.contactIntro}</p>
          <div className="grid md:grid-cols-3 gap-3">
            <a
              href="mailto:hello@loveredflags.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              <div className="text-xl mb-1">✉️</div>
              <div className="text-xs text-white/70">{t.about.contactGeneral}</div>
              <div className="text-sm text-neon-pink">hello@</div>
            </a>
            <a
              href="mailto:business@loveredflags.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              <div className="text-xl mb-1">💼</div>
              <div className="text-xs text-white/70">{t.about.contactBusinessLabel}</div>
              <div className="text-sm text-neon-cyan">business@</div>
            </a>
            <a
              href="mailto:press@loveredflags.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              <div className="text-xl mb-1">📰</div>
              <div className="text-xs text-white/70">{t.about.contactPressLabel}</div>
              <div className="text-sm text-neon-purple">press@</div>
            </a>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-2 border border-white/20 text-white/80 rounded-full hover:bg-white/5 transition-colors text-sm"
            >
              {t.about.contactForm}
            </Link>
          </div>
        </section>

        {/* Publisher / Business Information — required for AdSense + 전자상거래법 */}
        <section className="mb-10">
          <BusinessInfoCard variant="card" />
        </section>

        {/* Disclaimer */}
        <div className="glass-card p-6 text-sm text-white/60">
          <h3 className="font-bold text-white/80 mb-2">{t.about.disclaimerTitle}</h3>
          <p className="leading-relaxed">{t.about.disclaimer}</p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            {t.about.readyCta}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
