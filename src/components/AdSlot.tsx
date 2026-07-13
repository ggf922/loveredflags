'use client'

import { useEffect, useRef } from 'react'

type AdSize = 'banner' | 'native' | 'sticky' | 'interstitial'

interface AdSlotProps {
  size: AdSize
  slotId?: string
  label?: string
}

/**
 * AdSense 광고 슬롯 컴포넌트
 * - 승인 후 NEXT_PUBLIC_ADSENSE_CLIENT_ID + slotId를 지정하면 실제 광고 로드
 * - 개발 중에는 placeholder 표시
 */
export default function AdSlot({ size, slotId, label }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null)
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
  // Sticky bottom ad can visually cover page content on mobile, so we opt-in
  // via env var. Set NEXT_PUBLIC_ADSENSE_STICKY_ENABLED=true only after
  // AdSense approval + a real sticky slot ID is available.
  const stickyEnabled = process.env.NEXT_PUBLIC_ADSENSE_STICKY_ENABLED === 'true'

  // Sticky ads: never render before explicitly enabled — prevents the fixed
  // bottom bar from covering the lower part of the result page on mobile.
  if (size === 'sticky' && !stickyEnabled) return null

  useEffect(() => {
    if (!clientId || !slotId) return
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // ignore
    }
  }, [clientId, slotId])

  // 실제 AdSense 클라이언트 ID가 없으면 placeholder 표시
  if (!clientId || !slotId) {
    const heights: Record<AdSize, string> = {
      banner: 'h-24 md:h-28',
      native: 'h-32',
      sticky: 'h-16',
      interstitial: 'h-64'
    }
    return (
      <div className={`ad-slot w-full ${heights[size]} my-4`} aria-hidden="true">
        <span>[Ad Slot - {label || size}]</span>
      </div>
    )
  }

  // 실제 AdSense 광고
  return (
    <div className="w-full my-4">
      <ins
        ref={ref as any}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
