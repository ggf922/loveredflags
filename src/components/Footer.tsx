'use client'

import Link from 'next/link'
import { useLocale } from './LocaleProvider'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="mt-16 border-t border-white/5 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Grid links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">🚩 LoveRedFlags</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Take the test */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">🎯 {t.footer.test}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quiz" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.takeTest}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link href="/countries" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.g20Countries}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  {t.footer.dataRequests}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">{t.footer.getInTouch}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@loveredflags.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  hello@loveredflags.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:business@loveredflags.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {t.footer.business}
                </a>
              </li>
              <li>
                <a
                  href="mailto:press@loveredflags.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {t.footer.press}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-white/40 text-xs mb-1">{t.footer.tagline}</p>
          <p className="text-white/30 text-xs">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
