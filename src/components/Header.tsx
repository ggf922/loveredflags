'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-bg-dark/70 border-b border-white/5">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🚩</span>
          <span className="font-bold text-lg text-gradient">LoveRedFlags</span>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
