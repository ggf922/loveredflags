import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us — LoveRedFlags.com | Our Mission & Methodology',
  description: 'Learn about LoveRedFlags.com — our mission, psychology-based methodology, team, and how we built a viral dating personality test serving 8 languages and 20 countries.',
  keywords: ['about loveredflags', 'dating test methodology', 'psychology research', 'red flag test creators'],
  openGraph: {
    title: 'About LoveRedFlags.com — Mission & Methodology',
    description: 'The story, science, and team behind the viral love red flag test.',
    url: 'https://loveredflags.com/about'
  },
  alternates: { canonical: 'https://loveredflags.com/about' }
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🚩</div>
          <h1 className="h-title text-gradient mb-4">About LoveRedFlags.com</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            A viral dating personality test grounded in psychology research,
            serving <strong className="text-neon-pink">8 languages</strong> and{' '}
            <strong className="text-neon-cyan">20 countries</strong>.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">16</div>
            <div className="text-xs text-white/60 mt-1">Personality Types</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">20</div>
            <div className="text-xs text-white/60 mt-1">G20 Countries</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">8</div>
            <div className="text-xs text-white/60 mt-1">Languages</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-black text-gradient">2min</div>
            <div className="text-xs text-white/60 mt-1">Test Duration</div>
          </div>
        </div>

        {/* Our mission */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">🎯 Our Mission</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            LoveRedFlags.com was born from a simple observation: modern dating is complicated, but
            self-awareness is the single most important tool for building healthy relationships.
            Yet, most people never take the time to reflect on their own patterns — until they&apos;re
            deep into another toxic cycle.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Our mission is to make relationship self-reflection <strong className="text-white">fun,
            accessible, and viral</strong>. Through a 2-minute quiz, we help people recognize their
            &ldquo;red flag&rdquo; tendencies in a playful format — because insights delivered with
            humor stick better than lectures.
          </p>
          <p className="text-white/80 leading-relaxed">
            We also cross the language barrier: available in <strong className="text-white">8 languages</strong> including
            English, Korean, Japanese, Spanish, Portuguese, Arabic (with RTL support), Russian, and
            Chinese — because love, and its warning signs, are universal.
          </p>
        </section>

        {/* Our methodology */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">🧠 Our Methodology</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            The 12 questions in our test are not random — they are carefully designed around
            established psychological frameworks:
          </p>
          <div className="space-y-4 mb-4">
            <div className="border-l-4 border-neon-pink pl-4">
              <h3 className="font-bold text-white mb-1">🔗 Attachment Theory</h3>
              <p className="text-sm text-white/70">
                Based on the work of Bowlby and Ainsworth, we measure secure, anxious, avoidant,
                and disorganized attachment patterns.
              </p>
            </div>
            <div className="border-l-4 border-neon-cyan pl-4">
              <h3 className="font-bold text-white mb-1">💬 Communication Styles</h3>
              <p className="text-sm text-white/70">
                Drawing from Gottman&apos;s research on the &ldquo;Four Horsemen&rdquo; and
                healthy communication, we assess how you express and process emotions.
              </p>
            </div>
            <div className="border-l-4 border-neon-purple pl-4">
              <h3 className="font-bold text-white mb-1">🎢 Emotional Regulation</h3>
              <p className="text-sm text-white/70">
                We measure emotional stability vs. volatility — a key predictor of relationship
                satisfaction according to modern personality psychology.
              </p>
            </div>
            <div className="border-l-4 border-neon-green pl-4">
              <h3 className="font-bold text-white mb-1">⚖️ Control vs. Autonomy</h3>
              <p className="text-sm text-white/70">
                We assess where you fall on the spectrum from receptive/collaborative to
                controlling — one of the most studied factors in relationship health.
              </p>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed">
            The result is one of <strong className="text-white">16 unique Red Flag types</strong>,
            each with detailed traits, strengths, challenges, and matching profiles.
          </p>
        </section>

        {/* Global matching explained */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">🌍 Global Matching System</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            After completing the quiz, we match you with:
          </p>
          <ul className="space-y-2 text-white/80 mb-4 ml-4">
            <li>✅ <strong className="text-neon-green">3 best-fit countries</strong> for male partners</li>
            <li>✅ <strong className="text-neon-green">3 best-fit countries</strong> for female partners</li>
            <li>⚠️ <strong className="text-yellow-400">1 country to avoid</strong> based on your patterns</li>
          </ul>
          <p className="text-white/80 leading-relaxed mb-4">
            These matches are drawn from all <strong className="text-white">20 G20 nations</strong>: Argentina, Australia,
            Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Mexico, Russia,
            Saudi Arabia, South Africa, South Korea, Spain, Turkey, the UK, and the USA.
          </p>
          <p className="text-white/80 leading-relaxed">
            <strong className="text-white">Important:</strong> These are based on cultural dating
            trends observed in popular culture, social media, and dating apps — not stereotypes
            about individuals. We fully acknowledge that every person is unique. This is meant as
            playful entertainment, not serious judgment.
          </p>
        </section>

        {/* Values */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">💚 Our Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-white mb-1">Privacy First</h3>
              <p className="text-sm text-white/70">
                No sign-up, no email required, no personal data collection. We only store anonymous
                aggregated statistics.
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-bold text-white mb-1">Inclusive Design</h3>
              <p className="text-sm text-white/70">
                8 languages, RTL support for Arabic, mobile-first responsive design accessible to
                users worldwide.
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-bold text-white mb-1">Fun Over Boring</h3>
              <p className="text-sm text-white/70">
                Psychology delivered with humor and beautiful design. Because insights that make
                you laugh stick better.
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-white mb-1">Fast & Free</h3>
              <p className="text-sm text-white/70">
                Sub-1-second page loads globally via edge deployment. Always free, supported by
                minimal advertising.
              </p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-4">🛠️ Technology</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            LoveRedFlags.com is built with cutting-edge web technology:
          </p>
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
          <h2 className="text-2xl font-bold text-gradient mb-4">🤝 Get in Touch</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We&apos;d love to hear from you — whether you have feedback, want to collaborate, or
            have press inquiries:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <a
              href="mailto:hello@loveredflags.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              <div className="text-xl mb-1">✉️</div>
              <div className="text-xs text-white/70">General</div>
              <div className="text-sm text-neon-pink">hello@</div>
            </a>
            <a
              href="mailto:business@loveredflags.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              <div className="text-xl mb-1">💼</div>
              <div className="text-xs text-white/70">Business</div>
              <div className="text-sm text-neon-cyan">business@</div>
            </a>
            <a
              href="mailto:press@loveredflags.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              <div className="text-xl mb-1">📰</div>
              <div className="text-xs text-white/70">Press</div>
              <div className="text-sm text-neon-purple">press@</div>
            </a>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-2 border border-white/20 text-white/80 rounded-full hover:bg-white/5 transition-colors text-sm"
            >
              Or use our contact form →
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="glass-card p-6 text-sm text-white/60">
          <h3 className="font-bold text-white/80 mb-2">⚠️ Important Disclaimer</h3>
          <p className="leading-relaxed">
            LoveRedFlags.com is an <strong className="text-white/80">entertainment personality test</strong>{' '}
            and should not be used as a substitute for professional relationship counseling, clinical
            psychological assessment, or therapy. Results are based on general cultural trends and
            psychological frameworks presented in a playful format — they do not represent individual
            people from any specific nation, ethnicity, or background. If you are experiencing
            relationship distress or abuse, please consult a licensed mental health professional.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Ready? Take the Test 🚩
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
