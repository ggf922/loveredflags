'use client'

import Link from 'next/link'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-bg-dark/70 border-b border-white/5">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🚩</span>
          <span className="font-bold text-lg text-gradient">LoveRedFlags</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/quiz" className="text-white/70 hover:text-white transition-colors">
            Test
          </Link>
          <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/countries" className="text-white/70 hover:text-white transition-colors">
            Countries
          </Link>
          <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white/80 hover:text-white"
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/quiz"
              onClick={() => setOpen(false)}
              className="block py-2 text-white/70 hover:text-white transition-colors"
            >
              🎯 Test
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="block py-2 text-white/70 hover:text-white transition-colors"
            >
              📚 Blog
            </Link>
            <Link
              href="/countries"
              onClick={() => setOpen(false)}
              className="block py-2 text-white/70 hover:text-white transition-colors"
            >
              🌍 Countries
            </Link>
            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="block py-2 text-white/70 hover:text-white transition-colors"
            >
              ❓ FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-2 text-white/70 hover:text-white transition-colors"
            >
              ℹ️ About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block py-2 text-white/70 hover:text-white transition-colors"
            >
              📮 Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
