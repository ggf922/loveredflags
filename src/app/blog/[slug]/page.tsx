import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ALL_POSTS, getPostBySlug, getRelatedPosts } from '@/data/blog'
import { renderMarkdown } from '@/lib/markdown'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: post.title.en,
    description: post.description.en,
    keywords: post.tags,
    openGraph: {
      title: post.title.en,
      description: post.description.en,
      url: `https://loveredflags.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.en,
      description: post.description.en
    },
    alternates: { canonical: `https://loveredflags.com/blog/${post.slug}` }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)
  const contentHtml = renderMarkdown(post.content.en)
  const koContentHtml = renderMarkdown(post.content.ko)

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.en,
    description: post.description.en,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'LoveRedFlags.com' },
    publisher: {
      '@type': 'Organization',
      name: 'LoveRedFlags.com',
      logo: { '@type': 'ImageObject', url: 'https://loveredflags.com/favicon.svg' }
    },
    mainEntityOfPage: `https://loveredflags.com/blog/${post.slug}`,
    keywords: post.tags.join(', ')
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{post.title.en}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-neon-pink/10 text-neon-pink font-bold">
              {post.category.toUpperCase()}
            </span>
            <span className="text-white/50">{post.readTime} min read</span>
            <span className="text-white/50">·</span>
            <span className="text-white/50">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </span>
          </div>

          <div className="text-6xl mb-4">{post.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-black text-gradient leading-tight mb-4">
            {post.title.en}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">{post.description.en}</p>

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

        {/* Korean version toggle */}
        <details className="glass-card p-6 md:p-8 mb-10">
          <summary className="cursor-pointer font-bold text-white text-lg hover:text-gradient">
            🇰🇷 한국어 버전 보기
          </summary>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gradient mb-4">{post.title.ko}</h2>
            <p className="text-white/70 mb-6">{post.description.ko}</p>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: koContentHtml }}
            />
          </div>
        </details>

        {/* CTA */}
        <div className="glass-card p-8 text-center mb-10">
          <div className="text-4xl mb-3">🚩</div>
          <h3 className="text-2xl font-bold text-gradient mb-2">Curious About Your Red Flags?</h3>
          <p className="text-white/70 mb-5">
            Take our free 2-minute quiz and find your global match from 20 countries.
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Take the Test →
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">📖 Related Articles</h2>
            <div className="grid gap-4">
              {related.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <article className="glass-card p-5 hover:scale-[1.01] transition-transform flex items-center gap-4">
                    <span className="text-3xl">{rp.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-gradient mb-1">
                        {rp.title.en}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2">{rp.description.en}</p>
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
            ← Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
