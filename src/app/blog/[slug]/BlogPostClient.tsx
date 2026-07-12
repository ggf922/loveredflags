'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLocale } from '@/components/LocaleProvider'
import { renderMarkdown } from '@/lib/markdown'
import type { BlogPost } from '@/data/blog/posts'

interface BlogPostClientProps {
  post: BlogPost
  related: BlogPost[]
}

export default function BlogPostClient({ post, related }: BlogPostClientProps) {
  const { t, locale } = useLocale()

  // Type-safe getter with EN fallback
  const getText = (obj: Record<string, string>): string => {
    return obj[locale] || obj.en || ''
  }

  const title = getText(post.title as unknown as Record<string, string>)
  const description = getText(post.description as unknown as Record<string, string>)
  const content = getText(post.content as unknown as Record<string, string>)
  const contentHtml = renderMarkdown(content)

  const categoryKey = post.category as keyof typeof t.blog.categories
  const categoryLabel = t.blog.categories[categoryKey] || post.category

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white">{t.blog.breadcrumbHome}</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">{t.blog.breadcrumbBlog}</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-neon-pink/10 text-neon-pink font-bold">
              {categoryLabel.toUpperCase()}
            </span>
            <span className="text-white/50">{post.readTime} {t.blog.readTime}</span>
            <span className="text-white/50">·</span>
            <span className="text-white/50">
              {new Date(post.publishedAt).toLocaleDateString(locale, {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </span>
          </div>

          <div className="text-6xl mb-4">{post.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-black text-gradient leading-tight mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/60">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <article className="glass-card p-6 md:p-10 mb-10">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {/* CTA */}
        <div className="glass-card p-8 text-center mb-10">
          <div className="text-4xl mb-3">🚩</div>
          <h3 className="text-2xl font-bold text-gradient mb-2">{t.blog.curious}</h3>
          <p className="text-white/70 mb-5">
            {t.blog.curiousDesc}
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            {t.blog.takeTest}
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">{t.blog.relatedTitle}</h2>
            <div className="grid gap-4">
              {related.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <article className="glass-card p-5 hover:scale-[1.01] transition-transform flex items-center gap-4">
                    <span className="text-3xl">{rp.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-gradient mb-1">
                        {getText(rp.title as unknown as Record<string, string>)}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2">
                        {getText(rp.description as unknown as Record<string, string>)}
                      </p>
                    </div>
                    <span className="text-neon-pink">→</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-2 border border-white/20 text-white/80 rounded-full hover:bg-white/5 transition-colors"
          >
            {t.blog.backToBlog}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
