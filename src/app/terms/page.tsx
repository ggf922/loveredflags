'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BusinessInfoCard from '@/components/BusinessInfoCard'
import { useLocale } from '@/components/LocaleProvider'
import { BUSINESS_INFO } from '@/data/business'

export default function TermsPage() {
  const { t } = useLocale()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="h-title text-gradient mb-6">Terms of Service</h1>

        <div className="glass-card p-6 md:p-8 space-y-6 text-white/85 leading-relaxed text-sm">
          <p className="text-white/60">Last updated: January 2025</p>

          {/* Publisher / Business Information — required for AdSense and 전자상거래법 */}
          <section>
            <h2 className="text-lg font-bold mb-2 text-white">0. {t.businessInfo.heading}</h2>
            <p className="mb-3">{t.businessInfo.publisherDesc}</p>
            <BusinessInfoCard variant="inline" showHeading={false} />
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">1. Acceptance of Terms</h2>
            <p>By accessing and using LoveRedFlags.com (&quot;the Service&quot;), you accept and agree to
            be bound by the terms and provisions of this agreement.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">2. Nature of the Service</h2>
            <p>This website provides an entertainment personality test. Results are generated for
            amusement purposes only and should NOT be considered psychological advice, medical
            advice, or professional relationship counseling.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">3. Cultural Content Disclaimer</h2>
            <p>The &quot;global matching&quot; feature references popular cultural dating trends by country
            for entertainment. These references are generalizations and do not represent all
            individuals from any nation. We do not condone stereotyping, discrimination, or bias
            based on nationality, race, or culture.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">4. User Conduct</h2>
            <p>You agree not to use the Service for any unlawful purpose or in any way that could
            damage, disable, or impair the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">5. Intellectual Property</h2>
            <p>All content, including questions, result types, and design, is the property of
            LoveRedFlags.com and protected by international copyright laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">6. Advertising</h2>
            <p>The Service is supported by advertising, including Google AdSense. By using the
            Service, you consent to the display of ads.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">7. Limitation of Liability</h2>
            <p>LoveRedFlags.com shall not be liable for any indirect, incidental, or consequential
            damages arising out of your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use after changes
            constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-white">9. Contact</h2>
            <p>
              Questions? Contact{' '}
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
