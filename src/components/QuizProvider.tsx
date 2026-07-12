'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import type { Scores } from '@/types'
import { initScores, accumulateScore } from '@/lib/scoring'

interface QuizContextValue {
  scores: Scores
  currentIndex: number
  answers: number[] // 선택한 옵션 index들
  answerQuestion: (optionScores: Partial<Scores>, optionIndex: number) => void
  goBack: () => void
  reset: () => void
}

const QuizContext = createContext<QuizContextValue | null>(null)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [scores, setScores] = useState<Scores>(initScores())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [answerHistory, setAnswerHistory] = useState<Partial<Scores>[]>([])

  const answerQuestion = useCallback((optionScores: Partial<Scores>, optionIndex: number) => {
    setScores(prev => accumulateScore(prev, optionScores))
    setAnswers(prev => [...prev, optionIndex])
    setAnswerHistory(prev => [...prev, optionScores])
    setCurrentIndex(prev => prev + 1)
  }, [])

  const goBack = useCallback(() => {
    if (currentIndex === 0) return
    const lastScores = answerHistory[answerHistory.length - 1]
    if (lastScores) {
      // 이전 점수를 빼기
      setScores(prev => ({
        O: prev.O - (lastScores.O || 0),
        C: prev.C - (lastScores.C || 0),
        E: prev.E - (lastScores.E || 0),
        V: prev.V - (lastScores.V || 0),
      }))
    }
    setAnswers(prev => prev.slice(0, -1))
    setAnswerHistory(prev => prev.slice(0, -1))
    setCurrentIndex(prev => prev - 1)
  }, [currentIndex, answerHistory])

  const reset = useCallback(() => {
    setScores(initScores())
    setCurrentIndex(0)
    setAnswers([])
    setAnswerHistory([])
  }, [])

  const value: QuizContextValue = {
    scores,
    currentIndex,
    answers,
    answerQuestion,
    goBack,
    reset,
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export function useQuiz() {
  const ctx = useContext(QuizContext)
  if (!ctx) throw new Error('useQuiz must be used within QuizProvider')
  return ctx
}
