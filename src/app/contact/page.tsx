'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
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
            📮 CONTACT US
          </div>
          <h1 className="h-title text-gradient mb-4">Get in Touch</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions, feedback, or business inquiries? We&apos;d love to hear from you.
            We typically reply within 2-3 business days.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="glass-card p-5 text-center">
            <div className="text-3xl mb-2">✉️</div>
            <div className="font-bold text-white mb-1">Email</div>
            <a href="mailto:hello@loveredflags.com" className="text-sm text-neon-pink hover:underline">
              hello@loveredflags.com
            </a>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="font-bold text-white mb-1">Business</div>
            <a href="mailto:business@loveredflags.com" className="text-sm text-neon-cyan hover:underline">
              business@loveredflags.com
            </a>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl mb-2">📰</div>
            <div className="font-bold text-white mb-1">Press</div>
            <a href="mailto:press@loveredflags.com" className="text-sm text-neon-purple hover:underline">
              press@loveredflags.com
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
          <h2 className="text-xl font-bold text-white mb-4">Send us a message</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-white/80 mb-2">
                Name <span className="text-neon-pink">*</span>
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white/80 mb-2">
                Email <span className="text-neon-pink">*</span>
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
              Subject <span className="text-neon-pink">*</span>
            </label>
            <select
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors"
            >
              <option value="general" className="bg-bg-dark">General Question</option>
              <option value="bug" className="bg-bg-dark">Bug Report</option>
              <option value="feedback" className="bg-bg-dark">Feedback / Suggestion</option>
              <option value="business" className="bg-bg-dark">Business Inquiry</option>
              <option value="press" className="bg-bg-dark">Press / Media</option>
              <option value="privacy" className="bg-bg-dark">Privacy / Data Request</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
              Message <span className="text-neon-pink">*</span>
            </label>
            <textarea
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={6}
              minLength={20}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-pink transition-colors resize-y"
              placeholder="Tell us how we can help..."
            />
            <p className="text-xs text-white/40 mt-1">Minimum 20 characters</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" required id="agree" className="accent-neon-pink" />
            <label htmlFor="agree" className="text-sm text-white/70">
              I agree to the{' '}
              <Link href="/privacy" className="text-neon-pink hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-neon-pink hover:underline">
                Terms of Service
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-full hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? '📤 Sending...' : '📨 Send Message'}
          </button>

          {status === 'success' && (
            <div className="p-4 rounded-lg bg-neon-green/10 border border-neon-green/30 text-neon-green">
              ✅ Your message has been sent! We&apos;ll get back to you within 2-3 business days.
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
              ❌ Something went wrong. Please email us directly at{' '}
              <a href="mailto:hello@loveredflags.com" className="underline">
                hello@loveredflags.com
              </a>
              .
            </div>
          )}
        </form>

        {/* Response info */}
        <div className="mt-8 glass-card p-6 text-sm text-white/60">
          <h3 className="font-bold text-white mb-3">📌 Response Times</h3>
          <ul className="space-y-1.5 ml-4">
            <li>• <strong className="text-white/80">General questions:</strong> 2-3 business days</li>
            <li>• <strong className="text-white/80">Business inquiries:</strong> 1-2 business days</li>
            <li>• <strong className="text-white/80">Press requests:</strong> Within 24 hours</li>
            <li>• <strong className="text-white/80">Privacy/data requests:</strong> Within 30 days (GDPR/CCPA)</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
