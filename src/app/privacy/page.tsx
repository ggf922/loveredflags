'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BusinessInfoCard from '@/components/BusinessInfoCard'
import { useLocale } from '@/components/LocaleProvider'
import { BUSINESS_INFO } from '@/data/business'

export default function PrivacyPage() {
  const { t } = useLocale()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="h-title text-gradient mb-6">Privacy Policy</h1>

        <div className="glass-card p-6 md:p-8 space-y-6 text-white/85 leading-relaxed text-sm">
          <p className="text-white/60">Last updated: January 2025</p>

          {/* Data Controller (개인정보처리자) — required by K-DPA, GDPR, and AdSense */}
          <section>
            <h2 className="text-lg font-bold mb-2 text-white">0. {t.businessInfo.dataController}</h2>
            <p className="mb-3">{t.businessInfo.dataControllerDesc}</p>
            <BusinessInfoCard variant="inline" showHeading={false} />
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">1. Information We Collect</h2>
            <p>LoveRedFlags.com collects minimal information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ms-2">
              <li>Anonymous test results (result type, language) for statistics only</li>
              <li>Browser language preference (stored in your local browser)</li>
              <li>Standard web analytics (page views, referrers) via Google Analytics</li>
              <li>Ad interaction data via Google AdSense</li>
            </ul>
            <p className="mt-2"><strong>We do NOT collect:</strong> Your name, email, or any personal
            identifying information for the test itself.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">2. How We Use Information</h2>
            <p>Anonymous data is used only for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ms-2">
              <li>Displaying aggregate statistics (e.g., &quot;12% of users have your type&quot;)</li>
              <li>Improving the Service</li>
              <li>Serving relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">3. Cookies and Tracking</h2>
            <p>We use cookies for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ms-2">
              <li>Language preferences (localStorage)</li>
              <li>Google Analytics (anonymized)</li>
              <li>Google AdSense (personalized ads based on your consent)</li>
            </ul>
            <p className="mt-2">You can disable cookies in your browser settings, but some
            features may not work correctly.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">4. Third-Party Services</h2>
            <p>We use these third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ms-2">
              <li><strong>Google AdSense</strong> - For displaying ads (
                <a href="https://policies.google.com/technologies/ads" className="text-neon-pink hover:underline" target="_blank" rel="noopener">policy</a>)</li>
              <li><strong>Supabase</strong> - For anonymous result statistics</li>
              <li><strong>Vercel</strong> - For hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">5. Your Rights (GDPR/CCPA)</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ms-2">
              <li>Request information about data we hold</li>
              <li>Request deletion of your data (although we don&apos;t collect personal data)</li>
              <li>Opt-out of personalized advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">6. Children&apos;s Privacy</h2>
            <p>This Service is not intended for children under 13. We do not knowingly collect
            data from children.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">7. Changes to This Policy</h2>
            <p>We may update this policy occasionally. Check this page for changes.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">8. Contact</h2>
            <p>
              Privacy concerns? Contact{' '}
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-neon-pink hover:underline break-all">
                {BUSINESS_INFO.email}
              </a>
              {' '}or call{' '}
              <a href={`tel:${BUSINESS_INFO.phoneIntl}`} className="text-neon-pink hover:underline">
                {BUSINESS_INFO.phone}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
