'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Header from '@/components/Header'
import AdSlot from '@/components/AdSlot'
import { useLocale } from '@/components/LocaleProvider'
import { useQuiz } from '@/components/QuizProvider'
import questionsByLocale from '@/data/questions'

export default function QuizPage() {
  const router = useRouter()
  const { locale, t } = useLocale()
  const { currentIndex, answerQuestion, goBack } = useQuiz()

  const questions = questionsByLocale[locale] || questionsByLocale.en
  const total = questions.length
  const question = questions[currentIndex]

  useEffect(() => {
    if (currentIndex >= total) {
      router.push('/analyzing')
    }
  }, [currentIndex, total, router])

  if (!question) return null

  const progressPercent = Math.round(((currentIndex) / total) * 100)

  return (
    <>
      <Header />

      {/* Top banner - refreshes each question for max impressions */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <AdSlot size="banner" label={`Quiz Top #${currentIndex + 1}`} slotId={`quiz-top-${currentIndex + 1}`} />
      </div>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>{t.quiz.progress} {currentIndex + 1} {t.quiz.of} {total}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div className="glass-card-strong p-6 md:p-10 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{question.emoji}</div>
            <h2 className="h-title">{question.text}</h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => answerQuestion(option.scores, idx)}
                className="option-btn group"
              >
                <span className="me-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-neon-pink/30 text-sm font-bold transition-colors">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* Back button */}
        {currentIndex > 0 && (
          <div className="text-center">
            <button onClick={goBack} className="btn-secondary text-sm">
              ← {t.common.previous}
            </button>
          </div>
        )}

        {/* Bottom banner - refreshes each question */}
        <div className="mt-8">
          <AdSlot size="banner" label={`Quiz Bottom #${currentIndex + 1}`} slotId={`quiz-bottom-${currentIndex + 1}`} />
        </div>
      </main>
    </>
  )
}
