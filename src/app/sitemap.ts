import type { MetadataRoute } from 'next'
import { RESULT_CODES } from '@/data/results/types'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://loveredflags.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/quiz`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ]

  const resultPages: MetadataRoute.Sitemap = RESULT_CODES.map(code => ({
    url: `${base}/result/${code}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...resultPages]
}
