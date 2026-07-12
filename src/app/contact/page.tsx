'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLocale } from '@/components/LocaleProvider'

export default function ContactPage() {
  const { t } = useLocale()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      setForm({ name: '', email: '', subject: 'general', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-xs font-bold mb-4">
            {t.contact.badge}
          </div>
          <h1 className="h-title text-gradient mb-4">{t.contact.title}</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="glass-card p-5 text-center">
            <div className="text-3xl mb-2">✉️</div>
            <div className="font-bold text-white mb-1">{t.contact.emailLabel}</div>
            <a href="mailto:hello@loveredflags.com" className="text-sm text-neon-pink hover:underline">
              hello@loveredflags.com
            </a>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="font-bold text-white mb-1">{t.contact.businessLabel}</div>
            <a href="mailto:business@loveredflags.com" className="text-sm text-neon-cyan hover:underline">
              business@loveredflags.com
            </a>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl mb-2">📰</div>
            <div className="font-bold text-white mb-1">{t.contact.pressLabel}</div>
            <a href="mailto:press@loveredflags.com" className="text-sm text-neon-purple hover:underline">
              press@loveredflags.com
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
          <h2 className="text-xl font-bold text-white mb-4">{t.contact.formTitle}</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-white/80 mb-2">
                {t.contact.nameLabel} <span className="text-neon-pink">*</span>
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white/80 mb-2">
                {t.contact.emailField} <span className="text-neon-pink">*</span>
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
              {t.contact.subjectLabel} <span className="text-neon-pink">*</span>
            </label>
            <select
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors"
            >
              <option value="general" className="bg-bg-dark">{t.contact.subjects.general}</option>
              <option value="bug" className="bg-bg-dark">{t.contact.subjects.bug}</option>
              <option value="feedback" className="bg-bg-dark">{t.contact.subjects.feedback}</option>
              <option value="business" className="bg-bg-dark">{t.contact.subjects.business}</option>
              <option value="press" className="bg-bg-dark">{t.contact.subjects.press}</option>
              <option value="privacy" className="bg-bg-dark">{t.contact.subjects.privacy}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
              {t.contact.messageLabel} <span className="text-neon-pink">*</span>
            </label>
            <textarea
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={6}
              minLength={20}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors resize-y"
              placeholder={t.contact.messagePlaceholder}
            />
            <p className="text-xs text-white/40 mt-1">{t.contact.minChars}</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" required id="agree" className="accent-neon-pink" />
            <label htmlFor="agree" className="text-sm text-white/70">
              {t.contact.agreeText}{' '}
              <Link href="/privacy" className="text-neon-pink hover:underline">
                {t.contact.privacyPolicy}
              </Link>{' '}
              {t.contact.andText}{' '}
              <Link href="/terms" className="text-neon-pink hover:underline">
                {t.contact.termsOfService}
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? t.contact.sendingBtn : t.contact.submitBtn}
          </button>

          {status === 'success' && (
            <div className="p-4 rounded-lg bg-neon-green/10 border border-neon-green/30 text-neon-green">
              {t.contact.successMsg}
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
              {t.contact.errorMsg}{' '}
              <a href="mailto:hello@loveredflags.com" className="underline">
                hello@loveredflags.com
              </a>
              .
            </div>
          )}
        </form>

        {/* Response info */}
        <div className="mt-8 glass-card p-6 text-sm text-white/60">
          <h3 className="font-bold text-white mb-3">{t.contact.responseTitle}</h3>
          <ul className="space-y-1.5 ml-4">
            <li>• <strong className="text-white/80">{t.contact.responseGeneral}:</strong> {t.contact.daysGeneral}</li>
            <li>• <strong className="text-white/80">{t.contact.responseBusiness}:</strong> {t.contact.daysBusiness}</li>
            <li>• <strong className="text-white/80">{t.contact.responsePress}:</strong> {t.contact.daysPress}</li>
            <li>• <strong className="text-white/80">{t.contact.responsePrivacy}:</strong> {t.contact.daysPrivacy}</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
