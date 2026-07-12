import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_POSTS, getPostBySlug, getRelatedPosts } from '@/data/blog'
import BlogPostClient from './BlogPostClient'

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

  // JSON-LD structured data for SEO (English for best crawler support)
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient post={post} related={related} />
    </>
  )
}
