import type { Metadata } from 'next'
import FAQClient from './FAQClient'
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

export default function FAQPage() {
  // JSON-LD structured data (Google FAQ rich snippets) — English for SEO
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQClient />
    </>
  )
}
