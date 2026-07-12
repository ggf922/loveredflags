'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="h-title text-gradient mb-6">About LoveRedFlags.com</h1>

        <div className="glass-card p-6 md:p-8 space-y-6 text-white/85 leading-relaxed">
          <p>
            <strong>LoveRedFlags.com</strong> is a viral personality test that helps you discover
            your dating red flags and find the best global match from 20 G20 countries.
          </p>

          <div>
            <h2 className="text-xl font-bold mb-3 text-white">🎯 What We Do</h2>
            <p>
              Through 12 carefully designed questions, we analyze four dimensions of your dating
              personality: Obsession level, Communication style, Emotional stability, and Control
              tendencies. The result is one of 16 unique &quot;Red Flag&quot; personality types.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-white">🌍 Global Matching</h2>
            <p>
              After your test, we match you with 3 best-fit countries for both male and female
              partners, plus one country to avoid. These matches are based on popular cultural
              dating trends and are meant purely for entertainment — not stereotypes or bias.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-white">🌐 Available in 8 Languages</h2>
            <p>
              English, Korean, Japanese, Spanish, Portuguese, Arabic, Russian, and Chinese.
              The interface auto-detects your browser language.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-white">🤝 Contact</h2>
            <p>
              For business inquiries or feedback: <a href="mailto:hello@loveredflags.com" className="text-neon-pink hover:underline">hello@loveredflags.com</a>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 text-sm text-white/60">
            <p>
              <strong className="text-white/80">Disclaimer:</strong> This is an entertainment test and
              should not be used as a substitute for professional relationship counseling. Results
              are based on cultural trends and generalizations for fun — they do not represent
              individual people from any nation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
