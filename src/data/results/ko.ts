import type { ResultType } from '@/types'
import { RESULT_LEVELS } from './types'

const results: Record<string, ResultType> = {
  ICSR: {
    code: 'ICSR', level: RESULT_LEVELS.ICSR, levelLabel: '천사표 그린플래그',
    name: '천사 힐러', emoji: '👼',
    tagline: '연애계의 그린플래그, 국보급 성인군자',
    description: '독립적이면서도 따뜻하게 소통하고, 감정이 안정적이며 상대를 존중하는 이상적인 파트너. 이 유형과 사귀는 사람은 전생에 나라를 구했을 확률 99%.',
    traits: ['안정적이고 예측 가능한 감정', '건강한 소통 방식', '상대의 공간을 존중']
  },
  IASR: {
    code: 'IASR', level: RESULT_LEVELS.IASR, levelLabel: '천사표 그린플래그',
    name: '쿨한 현자', emoji: '🧘',
    tagline: '드라마 없는 연애의 정석, 요가 마스터',
    description: '독립적이고 감정이 안정적이지만 표현이 절제된 편. 갈등을 피하고 평화를 사랑하는 타입. 상대의 자유를 존중하는 이상적인 파트너.',
    traits: ['갈등 회피, 평화주의', '감정 표현이 절제됨', '상대의 자유를 완벽히 존중']
  },
  ICVR: {
    code: 'ICVR', level: RESULT_LEVELS.ICVR, levelLabel: '살짝 위험',
    name: '감성 폭풍우', emoji: '🌊',
    tagline: '눈물이 많지만 사랑스러운 파도',
    description: '독립적이고 표현이 풍부하지만 감정 기복이 있는 타입. 사랑할 땐 세상에서 가장 뜨겁고, 삐칠 땐 폭풍우처럼. 하지만 통제욕은 낮음.',
    traits: ['풍부한 감정 표현', '감정 기복이 다소 큼', '상대를 통제하려 하지 않음']
  },
  IASC: {
    code: 'IASC', level: RESULT_LEVELS.IASC, levelLabel: '살짝 위험',
    name: '조용한 통제자', emoji: '♟️',
    tagline: '말은 없지만 은근한 지배자',
    description: '독립적이고 감정은 안정적이지만, 표현이 적고 은근히 통제하려는 성향. 조용히 상대의 행동을 관찰하고 방향을 유도하는 스타일.',
    traits: ['말수는 적지만 관찰력 뛰어남', '은근한 통제 성향', '감정을 잘 드러내지 않음']
  },
  IAVR: {
    code: 'IAVR', level: RESULT_LEVELS.IAVR, levelLabel: '살짝 위험',
    name: '수동 공격형 스나이퍼', emoji: '🎯',
    tagline: '말 안 하고 삐지는 프로 저격수',
    description: '독립적이지만 소통을 회피하고 감정 기복이 있는 타입. 서운함을 말로 표현하기보다 뒤에서 스나이퍼처럼 티를 냄. 통제욕은 없음.',
    traits: ['소통을 회피하는 경향', '삐지는 표현 방식', '독립적이지만 소극적']
  },
  ICSC: {
    code: 'ICSC', level: RESULT_LEVELS.ICSC, levelLabel: '옐로우 플래그',
    name: '똑똑한 매니저', emoji: '📋',
    tagline: '연애를 프로젝트처럼 관리하는 CEO',
    description: '독립적이고 안정적이지만 상대의 행동을 관리하려는 스타일. 데이트도 계획대로, 감정도 규칙대로. 효율적이지만 상대는 숨막힐 수 있음.',
    traits: ['체계적이고 계획적', '상대의 행동을 관리하려 함', '감정보다 논리 우선']
  },
  ICVC: {
    code: 'ICVC', level: RESULT_LEVELS.ICVC, levelLabel: '옐로우 플래그',
    name: '드라마 퀸/킹', emoji: '🎭',
    tagline: '매일이 로맨스 영화 촬영장',
    description: '표현이 풍부하고 감정 기복이 크며 통제욕도 있는 타입. 사랑도 격정적, 싸움도 격정적. 연애가 24시간 리얼리티쇼처럼 흘러감.',
    traits: ['극적인 감정 표현', '큰 감정 기복', '상대를 원하는 방향으로 이끌려 함']
  },
  IAVC: {
    code: 'IAVC', level: RESULT_LEVELS.IAVC, levelLabel: '옐로우 플래그',
    name: '얼음 왕/여왕', emoji: '❄️',
    tagline: '차갑지만 은근히 소유욕 강한 타입',
    description: '독립적이고 소통을 회피하는데, 감정 기복도 크고 통제욕도 있음. 평소엔 쿨한데 결정적 순간에 얼음보다 차가워짐.',
    traits: ['냉정하고 감정 억압', '갑작스러운 감정 폭발', '은근한 소유욕']
  },
  OCSR: {
    code: 'OCSR', level: RESULT_LEVELS.OCSR, levelLabel: '옐로우 플래그',
    name: '사랑꾼 나침반', emoji: '🧭',
    tagline: '모든 순간 함께하고 싶은 껌딱지',
    description: '집착도가 있지만 표현이 풍부하고 안정적이며 통제욕은 낮음. 사랑을 24시간 확인하고 싶어하지만 상대를 억압하지는 않는 귀여운 타입.',
    traits: ['24시간 함께하고 싶어함', '풍부한 애정 표현', '상대의 결정은 존중']
  },
  OASR: {
    code: 'OASR', level: RESULT_LEVELS.OASR, levelLabel: '옐로우 플래그',
    name: '침묵의 짝사랑러', emoji: '🌙',
    tagline: '속으로 백만 번 생각하고 안 물어봄',
    description: '집착은 하는데 소통을 회피하고 감정은 안정적이며 통제욕은 없음. 마음속으로 상대의 모든 것을 궁금해하지만 절대 물어보지 못하는 소심 관찰자.',
    traits: ['속으로만 집착', '표현이 극도로 부족', '상대의 SNS만 조용히 감상']
  },
  OCVR: {
    code: 'OCVR', level: RESULT_LEVELS.OCVR, levelLabel: '레드플래그 경보',
    name: '불꽃 로맨티스트', emoji: '🔥',
    tagline: '너무 뜨거워서 화상 주의',
    description: '집착도 하고 표현도 풍부하고 감정 기복도 큰데 통제욕만 낮음. 사랑도 이별도 매번 대서사시. SNS에 상대 사진 100장 올리는 타입.',
    traits: ['폭발적인 애정 표현', '큰 감정 기복', '중독성 강한 사랑']
  },
  OCSC: {
    code: 'OCSC', level: RESULT_LEVELS.OCSC, levelLabel: '레드플래그 경보',
    name: '자상한 감시자', emoji: '👁️',
    tagline: '"어디야?"가 습관인 24시간 CCTV',
    description: '집착과 통제욕은 있지만 감정은 안정적이고 표현은 잘함. 부드럽지만 집요하게 상대의 일상을 파악. 24시간 위치 공유는 기본.',
    traits: ['위치 공유 필수', '일과 실시간 보고 요구', '부드러운 통제']
  },
  OAVR: {
    code: 'OAVR', level: RESULT_LEVELS.OAVR, levelLabel: '레드플래그 경보',
    name: '회피형 유령', emoji: '👻',
    tagline: '있다 없다 있다 없다, 심장 도둑',
    description: '집착하면서 소통은 회피, 감정 기복은 큼. 갑자기 잠수 타고, 갑자기 뜨거워짐. 상대를 롤러코스터 태우는 타입.',
    traits: ['잦은 잠수와 재등장', '큰 감정 기복', '소통 대신 행동']
  },
  OASC: {
    code: 'OASC', level: RESULT_LEVELS.OASC, levelLabel: '레드플래그 경보',
    name: '은밀한 조종자', emoji: '🕸️',
    tagline: '말은 없지만 결국 자기 뜻대로',
    description: '집착과 통제욕은 강한데 소통은 회피, 감정은 안정적. 대놓고 요구하지 않지만 은근히 상대를 자기 방식대로 유도하는 전략가.',
    traits: ['조용한 심리 게임', '침묵으로 압박', '결국 자기 방식대로 관철']
  },
  OCVC: {
    code: 'OCVC', level: RESULT_LEVELS.OCVC, levelLabel: '공식 위험구역',
    name: '통제형 뱀파이어', emoji: '🧛',
    tagline: '사랑이라는 이름의 감옥',
    description: '모든 축이 최고치. 집착 + 격정적 표현 + 감정 기복 + 통제. 상대의 모든 것을 알아야 하고 통제해야 함. 이 유형은 상담이 필요할 수 있음.',
    traits: ['극도의 소유욕', '폭발적인 감정', '전방위적 통제']
  },
  OAVC: {
    code: 'OAVC', level: RESULT_LEVELS.OAVC, levelLabel: '공식 위험구역',
    name: '어둠의 지배자', emoji: '🌑',
    tagline: '조용히 세계를 지배하는 다크로드',
    description: '집착과 통제욕 최고치인데 표현은 없고 감정은 폭발함. 갑자기 화내고 잠수 타고 통제하고. 매우 예측 불가능한 위험 유형.',
    traits: ['은밀한 극단적 통제', '갑작스러운 감정 폭발', '침묵으로 지배']
  }
}

export default results
