import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { G20_COUNTRIES, G20_LIST } from '@/data/countries'
import { COUNTRY_CULTURE } from '@/data/countries/culture'
import CountryClient from './CountryClient'

interface PageProps {
  params: Promise<{ code: string }>
}

export async function generateStaticParams() {
  return G20_LIST.map(code => ({ code: code.toLowerCase() }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params
  const upper = code.toUpperCase()
  const country = G20_COUNTRIES[upper]
  if (!country) return { title: 'Not Found' }

  return {
    title: `Dating Culture in ${country.names.en} ${country.flag} — Complete Guide`,
    description: `Discover ${country.names.en}'s dating culture, courtship traditions, red flags, green flags, and popular dating apps. Complete cultural guide for cross-cultural dating.`,
    keywords: [
      `${country.names.en} dating`,
      `${country.names.en} culture`,
      `dating in ${country.names.en}`,
      `${country.names.en} relationships`
    ],
    openGraph: {
      title: `Dating Culture in ${country.names.en} ${country.flag}`,
      description: `Complete guide to ${country.names.en}'s dating culture, courtship, and relationships.`,
      url: `https://loveredflags.com/countries/${code.toLowerCase()}`
    },
    alternates: { canonical: `https://loveredflags.com/countries/${code.toLowerCase()}` }
  }
}

export default async function CountryPage({ params }: PageProps) {
  const { code } = await params
  const upper = code.toUpperCase()
  const country = G20_COUNTRIES[upper]
  const culture = COUNTRY_CULTURE[upper]

  if (!country || !culture) notFound()

  // Related countries (next 3 in list)
  const currentIdx = G20_LIST.indexOf(upper)
  const related = [
    G20_LIST[(currentIdx + 1) % G20_LIST.length],
    G20_LIST[(currentIdx + 2) % G20_LIST.length],
    G20_LIST[(currentIdx + 3) % G20_LIST.length]
  ]

  return <CountryClient code={upper} related={related} />
}
