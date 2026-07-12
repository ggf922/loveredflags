import type { Question } from '@/types'

const questions: Question[] = [
  {
    id: 1,
    emoji: '📱',
    text: 'Your partner hasn\'t read your text for 3 hours. Your first reaction?',
    options: [
      { text: 'They must be busy. I\'ll do my own thing', scores: { O: -2, E: -1 } },
      { text: 'A bit concerned but I stay chill', scores: { O: 0, C: -1 } },
      { text: 'Send a "Is everything ok?" message', scores: { O: 1, C: 1 } },
      { text: 'PANIC. 5 phone calls incoming', scores: { O: 3, E: 2, V: 1 } },
    ]
  },
  {
    id: 2,
    emoji: '💬',
    text: 'Your partner did something you didn\'t like. You:',
    options: [
      { text: 'Address it directly and honestly', scores: { C: 2, V: 1 } },
      { text: 'Calm down first, then gently talk about it', scores: { C: 1, E: -1 } },
      { text: 'Give them the silent treatment', scores: { C: -2, E: 1 } },
      { text: 'Pretend nothing happened, bottle it up', scores: { C: -3, E: -1 } },
    ]
  },
  {
    id: 3,
    emoji: '👀',
    text: 'Your partner is laughing with someone of the opposite sex. You:',
    options: [
      { text: 'Say hi warmly and join them', scores: { O: -2, E: -2 } },
      { text: 'A bit uneasy but observe from afar', scores: { O: 0, V: 0 } },
      { text: 'Ask later "who was that?"', scores: { O: 1, V: 1 } },
      { text: 'Storm over and interrupt immediately', scores: { O: 3, V: 3, E: 2 } },
    ]
  },
  {
    id: 4,
    emoji: '📸',
    text: 'How much do you check your partner\'s social media?',
    options: [
      { text: 'I don\'t care at all', scores: { O: -3, V: -2 } },
      { text: 'Occasionally, casually', scores: { O: -1 } },
      { text: 'I check new followers regularly', scores: { O: 2, V: 1 } },
      { text: 'I know EVERY follower, like, and comment', scores: { O: 3, V: 3 } },
    ]
  },
  {
    id: 5,
    emoji: '🎉',
    text: 'Partner suggests spending the weekend apart. You:',
    options: [
      { text: 'YES! I need my me-time', scores: { O: -3, V: -2 } },
      { text: 'Fine, mutual respect', scores: { O: -1, V: -1 } },
      { text: 'A bit sad but I understand', scores: { O: 1, E: 1 } },
      { text: 'Why? Do you not love me anymore?!', scores: { O: 3, E: 2, V: 2 } },
    ]
  },
  {
    id: 6,
    emoji: '🍷',
    text: 'After a fight, your style is:',
    options: [
      { text: 'Calmly resolve it through conversation', scores: { E: -2, C: 2 } },
      { text: 'Need some time but reconcile soon', scores: { E: 0 } },
      { text: 'Ghost them for days', scores: { E: 2, C: -2 } },
      { text: 'Explode and say "we\'re done!"', scores: { E: 3, V: 2, C: 1 } },
    ]
  },
  {
    id: 7,
    emoji: '💭',
    text: 'Your partner\'s ideal type is very different from you. You:',
    options: [
      { text: 'Preferences are preferences, no big deal', scores: { O: -2, E: -1 } },
      { text: 'A bit anxious but move on', scores: { O: 1, E: 1 } },
      { text: 'Keep asking why they like that type', scores: { O: 2, V: 1 } },
      { text: 'Try to change myself to fit that type', scores: { O: 3, C: -1, E: 2 } },
    ]
  },
  {
    id: 8,
    emoji: '🕐',
    text: 'Your ideal frequency of communication with your partner:',
    options: [
      { text: 'Once or twice a day is enough', scores: { O: -3 } },
      { text: 'Morning, lunch, evening check-ins', scores: { O: -1 } },
      { text: 'Frequently throughout the day', scores: { O: 2 } },
      { text: 'Constant texting while awake', scores: { O: 3, V: 2 } },
    ]
  },
  {
    id: 9,
    emoji: '💔',
    text: 'Your partner brings up their ex. You:',
    options: [
      { text: 'Listen coolly, past is past', scores: { O: -2, E: -2 } },
      { text: 'Uncomfortable but don\'t show it', scores: { O: 0, E: 1 } },
      { text: 'Get annoyed: "why are we talking about them?"', scores: { O: 2, E: 2 } },
      { text: 'Immediately stalk the ex\'s socials', scores: { O: 3, V: 2, E: 2 } },
    ]
  },
  {
    id: 10,
    emoji: '🎁',
    text: 'Partner forgot your anniversary. You:',
    options: [
      { text: 'Laugh it off, it happens', scores: { E: -3, C: -1 } },
      { text: 'Express disappointment, ask to remember next time', scores: { E: 0, C: 2 } },
      { text: 'Give the cold shoulder all day', scores: { E: 2, C: -2 } },
      { text: 'Bring up breaking up', scores: { E: 3, V: 2, C: 1 } },
    ]
  },
  {
    id: 11,
    emoji: '🌙',
    text: 'You after a breakup:',
    options: [
      { text: 'Sad but bounce back, focus on self-growth', scores: { E: -2, O: -2 } },
      { text: 'Depressed for a while, time heals', scores: { E: 0 } },
      { text: 'Can\'t sleep for months, stalk their socials', scores: { E: 2, O: 3 } },
      { text: 'Constantly try to reach out for reconciliation', scores: { E: 3, O: 3, V: 2 } },
    ]
  },
  {
    id: 12,
    emoji: '💍',
    text: 'Partner wants to travel without you. You:',
    options: [
      { text: 'Have fun! Fully supportive', scores: { O: -3, V: -3 } },
      { text: 'A bit sad but understand', scores: { O: 0, V: -1 } },
      { text: 'Ask in detail who they\'re going with', scores: { O: 2, V: 2 } },
      { text: 'Absolutely not. We go together or nothing', scores: { O: 3, V: 3, E: 2 } },
    ]
  }
]

export default questions
