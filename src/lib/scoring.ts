import type { Scores, Question } from '@/types'

export function initScores(): Scores {
  return { O: 0, C: 0, E: 0, V: 0 }
}

export function accumulateScore(current: Scores, questionOptionScores: Partial<Scores>): Scores {
  return {
    O: current.O + (questionOptionScores.O || 0),
    C: current.C + (questionOptionScores.C || 0),
    E: current.E + (questionOptionScores.E || 0),
    V: current.V + (questionOptionScores.V || 0),
  }
}

// 최종 4자리 코드 생성
// 위치 1: O(Obsessive) if O >= 0 else I(Independent)
// 위치 2: C(Communicative/Expressive) if C >= 0 else A(Avoidant)
// 위치 3: V(Volatile) if E >= 0 else S(Stable)
// 위치 4: C(Controlling) if V >= 0 else R(Receptive)
export function calculateResultCode(scores: Scores): string {
  const p1 = scores.O >= 0 ? 'O' : 'I'
  const p2 = scores.C >= 0 ? 'C' : 'A'
  const p3 = scores.E >= 0 ? 'V' : 'S'
  const p4 = scores.V >= 0 ? 'C' : 'R'
  return p1 + p2 + p3 + p4
}

// 결과에 따른 매칭 확률/희귀도 계산 (모의)
export function getRarityPercentage(code: string): number {
  // 실제로는 Supabase 통계 기반, 여기선 결정론적으로 6~28% 사이 값 반환
  let hash = 0
  for (let i = 0; i < code.length; i++) hash = ((hash << 5) - hash) + code.charCodeAt(i)
  const abs = Math.abs(hash) % 22
  return 6 + abs // 6 ~ 27%
}
