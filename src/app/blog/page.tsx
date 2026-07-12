import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'

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

export default function BlogIndexPage() {
  return <BlogIndexClient />
}
