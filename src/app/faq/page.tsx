import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FAQ_ITEMS } from '@/data/faq'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — LoveRedFlags.com',
  description: 'Everything you need to know about the Love Red Flag test, privacy, results, and matching system. 20+ common questions answered.',
  keywords: ['FAQ', 'frequently asked questions', 'love red flags help', 'dating test faq'],
  openGraph: {
    title: 'FAQ — LoveRedFlags.com',
    description: '20+ answers about the viral love red flag test.',
    url: 'https://loveredflags.com/faq'
  },
  alternates: { canonical: 'https://loveredflags.com/faq' }
}

const CATEGORY_INFO: Record<string, { emoji: string; label: string; color: string }> = {
  general: { emoji: '💡', label: 'General', color: 'text-neon-pink' },
  test: { emoji: '📝', label: 'About the Test', color: 'text-neon-cyan' },
  results: { emoji: '🎯', label: 'Results & Matching', color: 'text-neon-purple' },
  privacy: { emoji: '🔒', label: 'Privacy & Data', color: 'text-neon-green' },
  technical: { emoji: '⚙️', label: 'Technical', color: 'text-yellow-400' }
}

export default function FAQPage() {
  // Group by category
  const grouped = FAQ_ITEMS.reduce<Record<string, typeof FAQ_ITEMS>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  // JSON-LD structured data (Google FAQ rich snippets)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.en
      }
    }))
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-bold mb-4">
            ❓ HELP CENTER
          </div>
          <h1 className="h-title text-gradient mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Everything you need to know about LoveRedFlags.com — from how the test works to privacy details.
          </p>
        </div>

        {/* Category quick nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.entries(CATEGORY_INFO).map(([key, info]) => (
            <a
              key={key}
              href={`#${key}`}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/80 transition-colors"
            >
              {info.emoji} {info.label}
            </a>
          ))}
        </div>

        {/* FAQ sections */}
        {Object.entries(grouped).map(([category, items]) => {
          const info = CATEGORY_INFO[category]
          return (
            <section key={category} id={category} className="mb-12 scroll-mt-24">
              <h2 className={`text-2xl font-bold mb-6 ${info?.color || 'text-white'}`}>
                {info?.emoji} {info?.label}
              </h2>
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <details key={idx} className="glass-card p-5 group">
                    <summary className="cursor-pointer font-bold text-white flex items-start gap-3 hover:text-gradient list-none">
                      <span className="text-neon-pink shrink-0">Q.</span>
                      <span className="flex-1">{item.question.en}</span>
                      <span className="text-white/40 group-open:rotate-180 transition-transform shrink-0">▼</span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-neon-cyan font-bold shrink-0">A.</span>
                        <p className="text-white/80 leading-relaxed">{item.answer.en}</p>
                      </div>
                      <details className="ml-6 mt-3">
                        <summary className="text-xs text-white/50 cursor-pointer hover:text-white/70">
                          🇰🇷 한국어로 보기
                        </summary>
                        <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.answer.ko}</p>
                      </details>
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
          <h2 className="text-2xl font-bold text-gradient mb-3">Still have questions?</h2>
          <p className="text-white/70 mb-6">
            Can&apos;t find what you&apos;re looking for? Get in touch and we&apos;ll respond within 2-3 business days.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
            >
              📮 Contact Us
            </Link>
            <a
              href="mailto:hello@loveredflags.com"
              className="px-6 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/5 transition-colors"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
