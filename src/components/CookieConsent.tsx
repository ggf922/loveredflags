'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale } from './LocaleProvider'

const STORAGE_KEY = 'lrf_cookie_consent_v1'

type ConsentState = {
  necessary: boolean
  analytics: boolean
  ads: boolean
  timestamp: string
}

export default function CookieConsent() {
  const { t } = useLocale()
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [ads, setAds] = useState(true)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        // Delay showing the banner slightly so the first paint isn't ugly
        setTimeout(() => setVisible(true), 600)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  function save(state: ConsentState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignore storage errors */
    }
    setVisible(false)
    // Dispatch a custom event so other components (e.g. analytics loader) can react
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookie-consent', { detail: state }))
    }
  }

  function acceptAll() {
    save({
      necessary: true,
      analytics: true,
      ads: true,
      timestamp: new Date().toISOString()
    })
  }

  function rejectAll() {
    save({
      necessary: true,
      analytics: false,
      ads: false,
      timestamp: new Date().toISOString()
    })
  }

  function saveCustom() {
    save({
      necessary: true,
      analytics,
      ads,
      timestamp: new Date().toISOString()
    })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto glass-card p-5 md:p-6 border border-white/20 shadow-2xl backdrop-blur-xl bg-bg-dark/90">
        <div className="flex items-start gap-4">
          <div className="text-3xl shrink-0">🍪</div>
          <div className="flex-1">
            <h3 className="font-bold text-white mb-2">
              {t.cookie.title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {t.cookie.description}{' '}
              <Link href="/privacy" className="text-neon-pink hover:underline">
                {t.cookie.readPolicy}
              </Link>
            </p>

            {showDetails && (
              <div className="mb-4 space-y-3 p-4 bg-white/5 rounded-lg">
                <label className="flex items-start gap-3">
                  <input type="checkbox" checked disabled className="mt-1 accent-neon-green" />
                  <div className="flex-1">
                    <div className="font-bold text-sm text-white">{t.cookie.necessary}</div>
                    <div className="text-xs text-white/60">
                      {t.cookie.necessaryDesc}
                    </div>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={e => setAnalytics(e.target.checked)}
                    className="mt-1 accent-neon-pink"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm text-white">{t.cookie.analytics}</div>
                    <div className="text-xs text-white/60">
                      {t.cookie.analyticsDesc}
                    </div>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ads}
                    onChange={e => setAds(e.target.checked)}
                    className="mt-1 accent-neon-pink"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm text-white">{t.cookie.ads}</div>
                    <div className="text-xs text-white/60">
                      {t.cookie.adsDesc}
                    </div>
                  </div>
                </label>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="px-5 py-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white text-sm font-bold rounded-full hover:scale-105 transition-transform"
              >
                {t.cookie.acceptAll}
              </button>
              {!showDetails ? (
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-5 py-2 border border-white/20 text-white/80 text-sm rounded-full hover:bg-white/5 transition-colors"
                >
                  {t.cookie.customize}
                </button>
              ) : (
                <button
                  onClick={saveCustom}
                  className="px-5 py-2 border border-neon-cyan/40 text-neon-cyan text-sm font-bold rounded-full hover:bg-neon-cyan/10 transition-colors"
                >
                  {t.cookie.savePrefs}
                </button>
              )}
              <button
                onClick={rejectAll}
                className="px-5 py-2 text-white/50 text-sm hover:text-white/80 transition-colors"
              >
                {t.cookie.rejectAll}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
