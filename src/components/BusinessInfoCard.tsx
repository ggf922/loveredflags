'use client'

import { BUSINESS_INFO } from '@/data/business'
import { useLocale } from './LocaleProvider'

type Props = {
  variant?: 'card' | 'compact' | 'inline'
  showHeading?: boolean
}

/**
 * BusinessInfoCard
 *
 * Renders publisher / business owner information required for
 *  - Google AdSense publisher identification
 *  - Korean 전자상거래법 (E-commerce Act) mandatory disclosures
 *  - GDPR / K-DPA data controller identification
 *
 * `variant`:
 *  - `card`     — Full glass card with heading (Contact / About pages)
 *  - `compact`  — Small dense listing (Footer, Terms, Privacy sidebars)
 *  - `inline`   — Plain flow text (embedded in legal documents)
 */
export default function BusinessInfoCard({ variant = 'card', showHeading = true }: Props) {
  const { t, locale } = useLocale()
  const b = BUSINESS_INFO
  const l = t.businessInfo

  // Show brand parenthetical only for Korean audience; other locales get romanized.
  const nameLine =
    locale === 'ko'
      ? `${b.legalName} (${l.brand}: ${b.brand})`
      : `${b.legalName} / ${b.legalNameRoman} (${l.brand}: ${b.brand} / ${b.brandRoman})`

  const repLine = locale === 'ko' ? b.representative : `${b.representative} (${b.representativeRoman})`

  const addressLine = locale === 'ko' ? b.address : `${b.address} — ${b.addressRoman}`

  if (variant === 'compact') {
    return (
      <div className="text-xs text-white/50 leading-relaxed space-y-0.5">
        {showHeading && (
          <div className="font-bold text-white/70 mb-1.5">🏢 {l.heading}</div>
        )}
        <div>
          <span className="text-white/40">{l.legalName}:</span> {nameLine}
        </div>
        <div>
          <span className="text-white/40">{l.representative}:</span> {repLine}
        </div>
        <div>
          <span className="text-white/40">{l.businessNumber}:</span> {b.businessRegistrationNumber}
        </div>
        <div>
          <span className="text-white/40">{l.mailOrderNumber}:</span> {b.mailOrderRegistrationNumber}
        </div>
        <div>
          <span className="text-white/40">{l.address}:</span> {addressLine}
        </div>
        <div>
          <span className="text-white/40">{l.email}:</span>{' '}
          <a href={`mailto:${b.email}`} className="hover:text-white/80 transition-colors">
            {b.email}
          </a>
        </div>
        <div>
          <span className="text-white/40">{l.phone}:</span>{' '}
          <a href={`tel:${b.phoneIntl}`} className="hover:text-white/80 transition-colors">
            {b.phone}
          </a>
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="text-sm text-white/80 leading-relaxed space-y-1">
        <p>
          <strong className="text-white">{l.legalName}:</strong> {nameLine}
        </p>
        <p>
          <strong className="text-white">{l.representative}:</strong> {repLine}
        </p>
        <p>
          <strong className="text-white">{l.businessNumber}:</strong> {b.businessRegistrationNumber}
        </p>
        <p>
          <strong className="text-white">{l.mailOrderNumber}:</strong> {b.mailOrderRegistrationNumber}
        </p>
        <p>
          <strong className="text-white">{l.address}:</strong> {addressLine}
        </p>
        <p>
          <strong className="text-white">{l.email}:</strong>{' '}
          <a href={`mailto:${b.email}`} className="text-neon-pink hover:underline">
            {b.email}
          </a>
        </p>
        <p>
          <strong className="text-white">{l.phone}:</strong>{' '}
          <a href={`tel:${b.phoneIntl}`} className="text-neon-pink hover:underline">
            {b.phone}
          </a>
        </p>
      </div>
    )
  }

  // Default: `card` variant
  return (
    <section className="glass-card p-6 md:p-8" aria-labelledby="business-info-heading">
      {showHeading && (
        <div className="mb-5">
          <h2
            id="business-info-heading"
            className="text-xl font-bold text-white flex items-center gap-2 mb-1"
          >
            <span aria-hidden="true">🏢</span> {l.heading}
          </h2>
          <p className="text-xs text-white/50">{l.subheading}</p>
        </div>
      )}

      <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm">
        <dt className="font-bold text-white/60">{l.legalName}</dt>
        <dd className="text-white/90">{nameLine}</dd>

        <dt className="font-bold text-white/60">{l.representative}</dt>
        <dd className="text-white/90">{repLine}</dd>

        <dt className="font-bold text-white/60">{l.businessNumber}</dt>
        <dd className="text-white/90 font-mono">{b.businessRegistrationNumber}</dd>

        <dt className="font-bold text-white/60">{l.mailOrderNumber}</dt>
        <dd className="text-white/90 font-mono text-xs sm:text-sm">
          {b.mailOrderRegistrationNumber}
        </dd>

        <dt className="font-bold text-white/60">{l.address}</dt>
        <dd className="text-white/90">{addressLine}</dd>

        <dt className="font-bold text-white/60">{l.email}</dt>
        <dd>
          <a href={`mailto:${b.email}`} className="text-neon-pink hover:underline break-all">
            {b.email}
          </a>
        </dd>

        <dt className="font-bold text-white/60">{l.phone}</dt>
        <dd>
          <a href={`tel:${b.phoneIntl}`} className="text-neon-pink hover:underline">
            {b.phone}
          </a>
        </dd>
      </dl>
    </section>
  )
}
