'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import AdSlot from '@/components/AdSlot'
import { useLocale } from '@/components/LocaleProvider'
import { useQuiz } from '@/components/QuizProvider'
import { calculateResultCode } from '@/lib/scoring'
import { saveResult } from '@/lib/supabase'
import resultsByLocale from '@/data/results'

const ANALYSIS_MS = 3200

export default function AnalyzingPage() {
  const router = useRouter()
  const { locale, t } = useLocale()
  const { scores } = useQuiz()
  const [line, setLine] = useState(0)

  useEffect(() => {
    // 결과 코드 계산
    const code = calculateResultCode(scores)

    // Supabase에 결과 저장 (비동기, 실패해도 무시)
    const level = resultsByLocale[locale]?.[code]?.level || 3
    saveResult({ result_code: code, locale, level })

    // 애니메이션 라인 순환
    const interval = setInterval(() => {
      setLine(prev => (prev + 1) % t.analyzing.lines.length)
    }, 800)

    // 3초 후 결과 페이지로 이동
    const timer = setTimeout(() => {
      router.push(`/result/${code}`)
    }, ANALYSIS_MS)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [scores, locale, router, t.analyzing.lines.length])

  return (
    <>
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <div className="text-7xl mb-6 animate-pulse-slow">🚩</div>
          <h1 className="h-title text-gradient mb-8">{t.analyzing.title}</h1>

          <div className="glass-card-strong p-6 min-h-[80px] flex items-center justify-center">
            <p key={line} className="text-lg text-white/90 animate-pulse">
              {t.analyzing.lines[line]}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
        </div>

        {/* Interstitial-like ad during analysis */}
        <div className="w-full">
          <AdSlot size="interstitial" label="Analyzing Interstitial" slotId="analyzing-interstitial" />
        </div>
      </main>
    </>
  )
}
