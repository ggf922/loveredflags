'use client'

import { useState, useEffect } from 'react'
import { useLocale } from './LocaleProvider'

interface ShareButtonsProps {
  resultCode: string
  resultName: string
  resultEmoji: string
}

export default function ShareButtons({ resultCode, resultName, resultEmoji }: ShareButtonsProps) {
  const { t } = useLocale()
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href)
    }
  }, [])

  const shareText = `${resultEmoji} I got "${resultName}" on LoveRedFlags.com! What's your love red flag? 🚩`
  const encodedText = encodeURIComponent(shareText)
  const encodedUrl = encodeURIComponent(url)

  const shares = [
    {
      label: t.result.ctaShareX,
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      color: 'from-black to-gray-800'
    },
    {
      label: t.result.ctaShareWA,
      href: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
      color: 'from-green-500 to-green-600'
    },
    {
      label: t.result.ctaShareFB,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'from-blue-600 to-blue-700'
    }
  ]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {}
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && (navigator as any).share) {
      try {
        await (navigator as any).share({
          title: 'LoveRedFlags Test',
          text: shareText,
          url
        })
      } catch (e) {}
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {shares.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-gradient-to-r ${s.color} text-white font-medium py-3 px-4 rounded-xl text-center text-sm hover:scale-105 transition-transform`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="bg-gradient-to-r from-neon-pink to-neon-purple text-white font-medium py-3 px-4 rounded-xl text-sm hover:scale-105 transition-transform"
      >
        {copied ? t.result.copied : t.result.ctaCopy}
      </button>
    </div>
  )
}
