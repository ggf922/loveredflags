'use client'

import Link from 'next/link'
import { useLocale } from './LocaleProvider'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="mt-16 border-t border-white/5 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <Link href="/about" className="text-white/60 hover:text-white transition-colors">
            {t.footer.about}
          </Link>
          <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
            {t.footer.terms}
          </Link>
          <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
            {t.footer.privacy}
          </Link>
        </div>
        <p className="text-white/40 text-xs mb-1">{t.footer.tagline}</p>
        <p className="text-white/30 text-xs">{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
