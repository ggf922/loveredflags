import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ALL_POSTS } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog — Dating Psychology & Relationship Insights',
  description: 'Explore expert articles on dating red flags, attachment styles, love languages, toxic relationships, and cross-cultural dating. Backed by psychology research.',
  keywords: ['dating blog', 'relationship psychology', 'red flags', 'attachment styles', 'love languages', 'toxic relationships'],
  openGraph: {
    title: 'LoveRedFlags Blog — Dating & Relationship Psychology',
    description: 'Expert articles on relationships, red flags, and dating psychology.',
    url: 'https://loveredflags.com/blog',
    type: 'website'
  },
  alternates: { canonical: 'https://loveredflags.com/blog' }
}

const CATEGORY_LABELS: Record<string, { emoji: string; label: string }> = {
  psychology: { emoji: '🧠', label: 'Psychology' },
  relationships: { emoji: '💑', label: 'Relationships' },
  culture: { emoji: '🌍', label: 'Culture' },
  dating: { emoji: '💘', label: 'Dating' },
  selfcare: { emoji: '🌱', label: 'Self Care' }
}

export default function BlogIndexPage() {
  const posts = ALL_POSTS.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-xs font-bold mb-4">
            📚 BLOG · {posts.length} ARTICLES
          </div>
          <h1 className="h-title text-gradient mb-4">Dating Psychology Blog</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Deep-dive articles on relationships, red flags, attachment styles, and cross-cultural
            dating — all grounded in psychology research.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-12">
            <article className="glass-card p-6 md:p-10 group hover:scale-[1.01] transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-neon-pink text-white text-xs font-bold">
                  ⭐ FEATURED
                </span>
                <span className="text-white/50 text-xs">
                  {CATEGORY_LABELS[featured.category]?.emoji} {CATEGORY_LABELS[featured.category]?.label}
                </span>
                <span className="text-white/40 text-xs">· {featured.readTime} min read</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-6xl">{featured.emoji}</span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gradient">
                    {featured.title.en}
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    {featured.description.en}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-white/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Article grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="glass-card p-6 h-full hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <span className="text-neon-cyan">
                    {CATEGORY_LABELS[post.category]?.emoji} {CATEGORY_LABELS[post.category]?.label}
                  </span>
                  <span className="text-white/40">· {post.readTime} min</span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-4xl">{post.emoji}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-gradient flex-1">
                    {post.title.en}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-3">
                  {post.description.en}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-gradient mb-3">Ready to Test Yourself?</h2>
          <p className="text-white/70 mb-6">
            Take our 2-minute quiz to discover your Red Flag type and best global matches.
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Start the Test 🚩
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
