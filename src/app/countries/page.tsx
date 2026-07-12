import type { Metadata } from 'next'
import CountriesClient from './CountriesClient'

export const metadata: Metadata = {
  title: 'Dating Culture in 20 Countries — G20 Global Dating Guide',
  description: 'Explore dating culture, courtship traditions, red flags, and green flags across all 20 G20 countries. From Korea to Brazil, USA to Japan.',
  keywords: ['dating culture', 'global dating', 'international dating', 'cross-cultural relationships', 'G20 countries'],
  openGraph: {
    title: 'Global Dating Culture Guide — 20 G20 Countries',
    description: 'Complete guide to dating traditions across all 20 G20 nations.',
    url: 'https://loveredflags.com/countries'
  },
  alternates: { canonical: 'https://loveredflags.com/countries' }
}

export default function CountriesIndexPage() {
  return <CountriesClient />
}
