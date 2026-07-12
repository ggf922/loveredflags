import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us — LoveRedFlags.com | Our Mission & Methodology',
  description: 'Learn about LoveRedFlags.com — our mission, psychology-based methodology, team, and how we built a viral dating personality test serving 8 languages and 20 countries.',
  keywords: ['about loveredflags', 'dating test methodology', 'psychology research', 'red flag test creators'],
  openGraph: {
    title: 'About LoveRedFlags.com — Mission & Methodology',
    description: 'The story, science, and team behind the viral love red flag test.',
    url: 'https://loveredflags.com/about'
  },
  alternates: { canonical: 'https://loveredflags.com/about' }
}

export default function AboutPage() {
  return <AboutClient />
}
