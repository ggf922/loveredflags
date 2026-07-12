// 16가지 유형 × G20 20개국 매칭 로직
// 각 유형별로 남/녀 Best Match 3개국, Worst Match 1개국 지정

export interface MatchingConfig {
  bestMale: string[]    // 국가코드 3개
  bestFemale: string[]  // 국가코드 3개
  worstMatch: string    // 국가코드 1개
  travelProbability: number // 백분율 (예: 98)
}

export const MATCHING: Record<string, MatchingConfig> = {
  // Green Flags - 안정적/독립적 유형: 다양성 & 자유로운 문화권
  ICSR: {
    bestMale: ['CA', 'GB', 'DE'],
    bestFemale: ['AU', 'CA', 'DE'],
    worstMatch: 'SA',
    travelProbability: 87
  },
  IASR: {
    bestMale: ['JP', 'CA', 'DE'],
    bestFemale: ['JP', 'GB', 'DE'],
    worstMatch: 'IT',
    travelProbability: 82
  },

  // Mild - 감정 표현이 좀 있는 편: 표현 문화권 매칭
  ICVR: {
    bestMale: ['IT', 'FR', 'BR'],
    bestFemale: ['IT', 'ES', 'AR'],
    worstMatch: 'JP',
    travelProbability: 93
  },
  IASC: {
    bestMale: ['DE', 'GB', 'CN'],
    bestFemale: ['JP', 'DE', 'CN'],
    worstMatch: 'BR',
    travelProbability: 78
  },
  IAVR: {
    bestMale: ['IT', 'ES', 'FR'],
    bestFemale: ['BR', 'IT', 'MX'],
    worstMatch: 'JP',
    travelProbability: 89
  },

  // Yellow - 어느정도 강한 성향
  ICSC: {
    bestMale: ['DE', 'CN', 'JP'],
    bestFemale: ['JP', 'DE', 'KR'],
    worstMatch: 'BR',
    travelProbability: 76
  },
  ICVC: {
    bestMale: ['IT', 'BR', 'AR'],
    bestFemale: ['ES', 'BR', 'MX'],
    worstMatch: 'DE',
    travelProbability: 95
  },
  IAVC: {
    bestMale: ['RU', 'DE', 'JP'],
    bestFemale: ['RU', 'JP', 'KR'],
    worstMatch: 'BR',
    travelProbability: 74
  },
  OCSR: {
    bestMale: ['KR', 'IT', 'IN'],
    bestFemale: ['KR', 'IN', 'MX'],
    worstMatch: 'GB',
    travelProbability: 91
  },
  OASR: {
    bestMale: ['JP', 'KR', 'IN'],
    bestFemale: ['JP', 'KR', 'CN'],
    worstMatch: 'US',
    travelProbability: 83
  },

  // Red Flag Alert
  OCVR: {
    bestMale: ['IT', 'ES', 'BR'],
    bestFemale: ['BR', 'IT', 'AR'],
    worstMatch: 'JP',
    travelProbability: 98
  },
  OCSC: {
    bestMale: ['KR', 'IN', 'TR'],
    bestFemale: ['KR', 'CN', 'IN'],
    worstMatch: 'AU',
    travelProbability: 88
  },
  OAVR: {
    bestMale: ['FR', 'IT', 'AR'],
    bestFemale: ['FR', 'RU', 'IT'],
    worstMatch: 'DE',
    travelProbability: 92
  },
  OASC: {
    bestMale: ['RU', 'CN', 'SA'],
    bestFemale: ['RU', 'CN', 'KR'],
    worstMatch: 'AU',
    travelProbability: 79
  },

  // Danger Zone
  OCVC: {
    bestMale: ['IT', 'TR', 'SA'],
    bestFemale: ['BR', 'MX', 'AR'],
    worstMatch: 'CA',
    travelProbability: 96
  },
  OAVC: {
    bestMale: ['RU', 'SA', 'CN'],
    bestFemale: ['RU', 'KR', 'CN'],
    worstMatch: 'AU',
    travelProbability: 85
  }
}
