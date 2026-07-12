// 16가지 결과 유형 코드 정의
// 4자리 코드: [O/I][C/A][V/S][C/R]
// O: Obsessive vs I: Independent
// C: Expressive(C means Communicative) vs A: Avoidant
// V: Volatile vs S: Stable
// C: Controlling(V-axis) vs R: Receptive

export const RESULT_CODES = [
  'ICVR', 'ICVC', 'ICSR', 'ICSC',
  'IAVR', 'IAVC', 'IASR', 'IASC',
  'OCVR', 'OCVC', 'OCSR', 'OCSC',
  'OAVR', 'OAVC', 'OASR', 'OASC'
] as const

export type ResultCodeType = typeof RESULT_CODES[number]

// 각 유형의 레벨 (1-5), 낮을수록 그린플래그
export const RESULT_LEVELS: Record<string, number> = {
  ICSR: 1, IASR: 1,           // green flag angels
  ICVR: 2, IASC: 2, IAVR: 2,  // mild
  ICSC: 3, ICVC: 3, IAVC: 3,  // yellow
  OCSR: 3, OASR: 3,           // yellow
  OCVR: 4, OCSC: 4, OAVR: 4, OASC: 4,  // red flag
  OCVC: 5, OAVC: 5,           // extreme
}
