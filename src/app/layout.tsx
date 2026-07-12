import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { LocaleProvider } from '@/components/LocaleProvider'
import { QuizProvider } from '@/components/QuizProvider'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://loveredflags.com'),
  title: {
    default: 'Love Red Flag Detector 🚩 | Find Your Perfect Global Match',
    template: '%s | LoveRedFlags.com'
  },
  description: 'Discover your dating red flags and find your perfect match from 20 G20 countries. Take the ultimate viral love personality test!',
  keywords: ['red flag test', 'love test', 'dating personality', 'global matching', 'viral quiz', 'relationship test', 'MBTI love', 'psychology test'],
  authors: [{ name: 'LoveRedFlags' }],
  openGraph: {
    type: 'website',
    url: 'https://loveredflags.com',
    title: 'Love Red Flag Detector 🚩 | Global Matching Test',
    description: 'What\'s your love red flag? Find your perfect global match from 20 countries. Test yourself now!',
    // Provide both JPG (smaller, faster for KakaoTalk/FB) and PNG (higher quality fallback).
    // Absolute URLs improve reliability on messengers that don't resolve relative paths.
    images: [
      { url: 'https://loveredflags.com/og-image.jpg', width: 1200, height: 630, alt: 'Love Red Flag Detector - Global Matching Test', type: 'image/jpeg' },
      { url: 'https://loveredflags.com/og-image.png', width: 1200, height: 630, alt: 'Love Red Flag Detector - Global Matching Test', type: 'image/png' }
    ],
    siteName: 'LoveRedFlags.com',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Red Flag Detector 🚩',
    description: 'What\'s your love red flag? Take the viral test now!',
    images: ['https://loveredflags.com/og-image.jpg'],
    creator: '@loveredflags'
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  alternates: { canonical: 'https://loveredflags.com' }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A1F'
}

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
// Google Search Console site verification token (used for AdSense site ownership check too).
// Set via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION on Vercel once you get the token from
// https://www.google.com/webmasters/verification or the AdSense signup flow.
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;700&display=swap" rel="stylesheet" />
        {/* Google Search Console verification — required for AdSense site verification */}
        {googleSiteVerification && (
          <meta name="google-site-verification" content={googleSiteVerification} />
        )}
        {/* Google AdSense loader — auto-injected once NEXT_PUBLIC_ADSENSE_CLIENT_ID is set.
            The presence of this script on every page is what AdSense uses to verify the
            site during the initial application review. */}
        {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="floating-bg">
        <LocaleProvider>
          <QuizProvider>
            {children}
            <CookieConsent />
          </QuizProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
