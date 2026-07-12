// 4가지 성향 축
export type Axis = 'O' | 'C' | 'E' | 'V'
// O: Obsession (집착도)     - Independent(I) vs Obsessive(O)
// C: Communication (소통)   - Avoidant(A) vs Expressive(E) → we use 'C' for expressive-side; letter code E means Expressive
// E: Emotion (감정 기복)     - Stable(S) vs Volatile(V)
// V: Control (통제욕)       - Receptive(R) vs Controlling(C)

// 결과 코드: 4자리 (예: OCEV, IESR)
// 위치 1: I(Independent) or O(Obsessive)
// 위치 2: A(Avoidant) or E(Expressive)
// 위치 3: S(Stable) or V(Volatile)
// 위치 4: R(Receptive) or C(Controlling)
export type ResultCode = string

export type Locale = 'en' | 'ko' | 'ja' | 'es' | 'pt' | 'ar' | 'ru' | 'zh'

export const LOCALES: Locale[] = ['en', 'ko', 'ja', 'es', 'pt', 'ar', 'ru', 'zh']
export const RTL_LOCALES: Locale[] = ['ar']

export interface Scores {
  O: number // + = obsessive, - = independent
  C: number // + = expressive, - = avoidant
  E: number // + = volatile, - = stable
  V: number // + = controlling, - = receptive
}

export interface QuestionOption {
  text: string
  scores: Partial<Scores>
}

export interface Question {
  id: number
  text: string
  emoji: string
  options: QuestionOption[]
}

export interface ResultType {
  code: string
  name: string
  emoji: string
  tagline: string
  description: string
  traits: string[]
  level: number // 1-5
  levelLabel: string
}

export interface CountryMatch {
  code: string // e.g. 'KR', 'US'
  flag: string
  name: string
  reason: string
}

export interface CountryMatching {
  bestMale: CountryMatch[]
  bestFemale: CountryMatch[]
  worstMatch: CountryMatch
  travelProbability: string
}
