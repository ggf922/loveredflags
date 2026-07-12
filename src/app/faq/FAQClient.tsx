'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FAQ_ITEMS } from '@/data/faq'
import { useLocale } from '@/components/LocaleProvider'

const CATEGORY_META: Record<string, { emoji: string; color: string }> = {
  general: { emoji: '💡', color: 'text-neon-pink' },
  test: { emoji: '📝', color: 'text-neon-cyan' },
  results: { emoji: '🎯', color: 'text-neon-purple' },
  privacy: { emoji: '🔒', color: 'text-neon-green' },
  technical: { emoji: '⚙️', color: 'text-yellow-400' }
}

export default function FAQClient() {
  const { t, locale } = useLocale()

  // Group by category
  const grouped = FAQ_ITEMS.reduce<Record<string, typeof FAQ_ITEMS>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  const getText = (obj: Record<string, string>): string => {
    return obj[locale] || obj.en || ''
  }

  const getCategoryLabel = (cat: string): string => {
    const key = cat as keyof typeof t.faq.categories
    return t.faq.categories[key] || cat
  }

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-bold mb-4">
            {t.faq.badge}
          </div>
          <h1 className="h-title text-gradient mb-4">{t.faq.title}</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Category quick nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.entries(CATEGORY_META).map(([key, meta]) => (
            <a
              key={key}
              href={`#${key}`}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/80 transition-colors"
            >
              {meta.emoji} {getCategoryLabel(key)}
            </a>
          ))}
        </div>

        {/* FAQ sections */}
        {Object.entries(grouped).map(([category, items]) => {
          const meta = CATEGORY_META[category]
          return (
            <section key={category} id={category} className="mb-12 scroll-mt-24">
              <h2 className={`text-2xl font-bold mb-6 ${meta?.color || 'text-white'}`}>
                {meta?.emoji} {getCategoryLabel(category)}
              </h2>
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <details key={idx} className="glass-card p-5 group">
                    <summary className="cursor-pointer font-bold text-white flex items-start gap-3 hover:text-gradient list-none">
                      <span className="text-neon-pink shrink-0">Q.</span>
                      <span className="flex-1">{getText(item.question as unknown as Record<string, string>)}</span>
                      <span className="text-white/40 group-open:rotate-180 transition-transform shrink-0">▼</span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-start gap-3">
                        <span className="text-neon-cyan font-bold shrink-0">A.</span>
                        <p className="text-white/80 leading-relaxed">{getText(item.answer as unknown as Record<string, string>)}</p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )
        })}

        {/* Still have questions CTA */}
        <div className="glass-card p-8 text-center mt-12">
          <div className="text-4xl mb-3">💬</div>
          <h2 className="text-2xl font-bold text-gradient mb-3">{t.faq.stillQuestions}</h2>
          <p className="text-white/70 mb-6">
            {t.faq.stillQuestionsDesc}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
            >
              {t.faq.contactBtn}
            </Link>
            <a
              href="mailto:hello@loveredflags.com"
              className="px-6 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/5 transition-colors"
            >
              {t.faq.emailBtn}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
