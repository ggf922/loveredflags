import type { MetadataRoute } from 'next'
import { RESULT_CODES } from '@/data/results/types'
import { ALL_POSTS } from '@/data/blog'
import { G20_LIST } from '@/data/countries'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://loveredflags.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/quiz`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/countries`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ]

  const resultPages: MetadataRoute.Sitemap = RESULT_CODES.map(code => ({
    url: `${base}/result/${code}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = ALL_POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const countryPages: MetadataRoute.Sitemap = G20_LIST.map(code => ({
    url: `${base}/countries/${code.toLowerCase()}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...resultPages, ...blogPages, ...countryPages]
}
