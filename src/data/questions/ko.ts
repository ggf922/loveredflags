import type { Question } from '@/types'

// 4가지 축:
// O: Obsession (집착)     - + Obsessive, - Independent
// C: Communication (소통) - + Expressive, - Avoidant
// E: Emotion (감정)       - + Volatile, - Stable
// V: Control (통제)       - + Controlling, - Receptive

const questions: Question[] = [
  {
    id: 1,
    emoji: '📱',
    text: '연인이 3시간 동안 톡을 안 읽는다. 첫 반응은?',
    options: [
      { text: '바쁘겠지~ 내 할 일 함', scores: { O: -2, E: -1 } },
      { text: '살짝 신경 쓰이지만 티 안 냄', scores: { O: 0, C: -1 } },
      { text: '무슨 일 있어? 라고 톡 하나 보냄', scores: { O: 1, C: 1 } },
      { text: '연락 없으면 미쳐버림. 전화 5통', scores: { O: 3, E: 2, V: 1 } },
    ]
  },
  {
    id: 2,
    emoji: '💬',
    text: '연인이 내 마음에 안 드는 행동을 했다면?',
    options: [
      { text: '즉시 솔직하게 얘기함', scores: { C: 2, V: 1 } },
      { text: '진정한 뒤에 부드럽게 얘기함', scores: { C: 1, E: -1 } },
      { text: '삐진 티만 내고 말은 안 함', scores: { C: -2, E: 1 } },
      { text: '아무렇지 않은 척, 속으로 삭힘', scores: { C: -3, E: -1 } },
    ]
  },
  {
    id: 3,
    emoji: '👀',
    text: '연인이 다른 이성과 웃으며 대화 중이다. 나는?',
    options: [
      { text: '반갑게 인사하고 합류함', scores: { O: -2, E: -2 } },
      { text: '조금 신경 쓰이지만 지켜봄', scores: { O: 0, V: 0 } },
      { text: '무슨 사이인지 나중에 물어봄', scores: { O: 1, V: 1 } },
      { text: '분위기 험악하게, 즉시 개입', scores: { O: 3, V: 3, E: 2 } },
    ]
  },
  {
    id: 4,
    emoji: '📸',
    text: '연인의 SNS 팔로워/좋아요를 얼마나 체크?',
    options: [
      { text: '전혀 관심 없음', scores: { O: -3, V: -2 } },
      { text: '가끔 우연히 봄', scores: { O: -1 } },
      { text: '새 팔로워는 대충 확인함', scores: { O: 2, V: 1 } },
      { text: '전 팔로워, 좋아요 내역 다 알고 있음', scores: { O: 3, V: 3 } },
    ]
  },
  {
    id: 5,
    emoji: '🎉',
    text: '주말에 각자 시간을 갖자고 하면?',
    options: [
      { text: '개꿀! 나만의 시간 필요함', scores: { O: -3, V: -2 } },
      { text: '괜찮음. 서로 존중', scores: { O: -1, V: -1 } },
      { text: '조금 서운하지만 이해함', scores: { O: 1, E: 1 } },
      { text: '왜? 나 싫어졌어? 하며 캐물음', scores: { O: 3, E: 2, V: 2 } },
    ]
  },
  {
    id: 6,
    emoji: '🍷',
    text: '싸운 뒤 나의 스타일은?',
    options: [
      { text: '차분하게 대화로 풀어감', scores: { E: -2, C: 2 } },
      { text: '시간이 좀 필요하지만 곧 화해', scores: { E: 0 } },
      { text: '며칠 잠수 탐', scores: { E: 2, C: -2 } },
      { text: '엄청 화내고 헤어지자고 함', scores: { E: 3, V: 2, C: 1 } },
    ]
  },
  {
    id: 7,
    emoji: '💭',
    text: '연인의 이상형이 나와 다른 스타일이라면?',
    options: [
      { text: '취향은 취향, 신경 안 씀', scores: { O: -2, E: -1 } },
      { text: '살짝 불안하지만 넘김', scores: { O: 1, E: 1 } },
      { text: '왜 그 스타일 좋아하는지 계속 물어봄', scores: { O: 2, V: 1 } },
      { text: '그 스타일처럼 바뀌려고 노력함', scores: { O: 3, C: -1, E: 2 } },
    ]
  },
  {
    id: 8,
    emoji: '🕐',
    text: '나의 이상적인 연락 빈도는?',
    options: [
      { text: '하루 1-2번이면 충분', scores: { O: -3 } },
      { text: '아침, 점심, 저녁 정도', scores: { O: -1 } },
      { text: '틈틈이 자주. 실시간 공유', scores: { O: 2 } },
      { text: '깨어있는 동안은 계속 톡함', scores: { O: 3, V: 2 } },
    ]
  },
  {
    id: 9,
    emoji: '💔',
    text: '연인이 전 애인 얘기를 꺼냈다면?',
    options: [
      { text: '쿨하게 들어줌. 과거는 과거', scores: { O: -2, E: -2 } },
      { text: '불편하지만 티 안 냄', scores: { O: 0, E: 1 } },
      { text: '그 얘기 왜 해? 라며 짜증', scores: { O: 2, E: 2 } },
      { text: '전 애인 SNS 캐서 확인', scores: { O: 3, V: 2, E: 2 } },
    ]
  },
  {
    id: 10,
    emoji: '🎁',
    text: '기념일에 연인이 기억 못했다면?',
    options: [
      { text: '기억력 안 좋을 수 있지, 웃어넘김', scores: { E: -3, C: -1 } },
      { text: '서운함 표현하고 다음엔 기억하자고 함', scores: { E: 0, C: 2 } },
      { text: '삐지고 하루 종일 냉랭함', scores: { E: 2, C: -2 } },
      { text: '헤어짐 카드까지 꺼냄', scores: { E: 3, V: 2, C: 1 } },
    ]
  },
  {
    id: 11,
    emoji: '🌙',
    text: '이별 후 나의 모습은?',
    options: [
      { text: '슬프지만 금방 회복. 자기계발', scores: { E: -2, O: -2 } },
      { text: '한동안 우울하지만 시간이 약', scores: { E: 0 } },
      { text: '몇 달 잠 못 자고 SNS 스토킹', scores: { E: 2, O: 3 } },
      { text: '재회하려고 끊임없이 연락', scores: { E: 3, O: 3, V: 2 } },
    ]
  },
  {
    id: 12,
    emoji: '💍',
    text: '연인이 나 없이 여행 가겠다고 하면?',
    options: [
      { text: '재밌게 다녀와~ 응원함', scores: { O: -3, V: -3 } },
      { text: '조금 아쉽지만 이해함', scores: { O: 0, V: -1 } },
      { text: '누구랑 가? 하며 상세히 물어봄', scores: { O: 2, V: 2 } },
      { text: '절대 안 됨. 가려면 같이 가야 함', scores: { O: 3, V: 3, E: 2 } },
    ]
  }
]

export default questions
