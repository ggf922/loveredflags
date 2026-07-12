import type { ResultType } from '@/types'
import { RESULT_LEVELS } from './types'

const results: Record<string, ResultType> = {
  ICSR: {
    code: 'ICSR', level: RESULT_LEVELS.ICSR, levelLabel: 'Green Flag Angel',
    name: 'The Angelic Healer', emoji: '👼',
    tagline: 'The green flag legend everyone dreams of dating',
    description: 'Independent yet warmly communicative, emotionally stable, and respectful. Dating this type means you probably saved a country in your past life.',
    traits: ['Stable, predictable emotions', 'Healthy communication', 'Respects your space']
  },
  IASR: {
    code: 'IASR', level: RESULT_LEVELS.IASR, levelLabel: 'Green Flag Angel',
    name: 'The Cool Sage', emoji: '🧘',
    tagline: 'Drama-free dating gold, yoga master energy',
    description: 'Independent, emotionally stable, but reserved in expression. Conflict-avoidant, peace-loving type. Perfect partner who respects freedom.',
    traits: ['Conflict-avoidant, peaceful', 'Reserved emotional expression', 'Fully respects your freedom']
  },
  ICVR: {
    code: 'ICVR', level: RESULT_LEVELS.ICVR, levelLabel: 'Mild Concern',
    name: 'The Emotional Storm', emoji: '🌊',
    tagline: 'Tears often, but lovable waves',
    description: 'Independent and expressive, but with mood swings. When in love: the hottest fire. When sulking: hurricane. But no control issues.',
    traits: ['Rich emotional expression', 'Some mood swings', 'Doesn\'t try to control']
  },
  IASC: {
    code: 'IASC', level: RESULT_LEVELS.IASC, levelLabel: 'Mild Concern',
    name: 'The Silent Strategist', emoji: '♟️',
    tagline: 'Quiet but subtly dominating',
    description: 'Independent, emotionally stable, but with low expression and subtle controlling tendencies. Observes quietly and guides behavior.',
    traits: ['Quiet but observant', 'Subtle control tendencies', 'Rarely shows emotions']
  },
  IAVR: {
    code: 'IAVR', level: RESULT_LEVELS.IAVR, levelLabel: 'Mild Concern',
    name: 'The Passive-Aggressive Sniper', emoji: '🎯',
    tagline: 'Sulks silently, snipes precisely',
    description: 'Independent, avoidant, with mood swings but no control issues. Prefers to show displeasure through cold silences and precise emotional strikes.',
    traits: ['Avoidant communication', 'Passive-aggressive style', 'Independent but withdrawn']
  },
  ICSC: {
    code: 'ICSC', level: RESULT_LEVELS.ICSC, levelLabel: 'Yellow Flag',
    name: 'The Smart Manager', emoji: '📋',
    tagline: 'Manages love like a CEO manages projects',
    description: 'Independent and stable, but tries to manage partner\'s behavior. Dates by plan, emotions by rules. Efficient, but suffocating.',
    traits: ['Systematic and planned', 'Manages partner\'s actions', 'Logic over emotion']
  },
  ICVC: {
    code: 'ICVC', level: RESULT_LEVELS.ICVC, levelLabel: 'Yellow Flag',
    name: 'The Drama Queen/King', emoji: '🎭',
    tagline: 'Every day is a romance movie set',
    description: 'Expressive, volatile, and controlling. Love is passionate, fights are passionate. Dating you feels like being in a 24/7 reality show.',
    traits: ['Dramatic expression', 'Big mood swings', 'Guides partner in preferred direction']
  },
  IAVC: {
    code: 'IAVC', level: RESULT_LEVELS.IAVC, levelLabel: 'Yellow Flag',
    name: 'The Ice Monarch', emoji: '❄️',
    tagline: 'Cold on surface, secretly possessive',
    description: 'Independent, avoidant, but with mood swings and control issues. Usually cool but suddenly icy at key moments.',
    traits: ['Cold, emotion-suppressed', 'Sudden emotional bursts', 'Subtle possessiveness']
  },
  OCSR: {
    code: 'OCSR', level: RESULT_LEVELS.OCSR, levelLabel: 'Yellow Flag',
    name: 'The Love Compass', emoji: '🧭',
    tagline: 'The clingy sweetheart who wants to be everywhere',
    description: 'Obsessive but expressive, stable, and non-controlling. Wants 24/7 love confirmation but doesn\'t restrict you. Adorably clingy.',
    traits: ['Wants to be together 24/7', 'Abundant affection', 'Respects partner\'s decisions']
  },
  OASR: {
    code: 'OASR', level: RESULT_LEVELS.OASR, levelLabel: 'Yellow Flag',
    name: 'The Silent Admirer', emoji: '🌙',
    tagline: 'Thinks a million times, asks zero questions',
    description: 'Obsessive but avoidant, stable, and non-controlling. Mentally curious about everything but too shy to ask. Quiet SNS stalker.',
    traits: ['Internal obsession', 'Extreme lack of expression', 'Silent SNS observer']
  },
  OCVR: {
    code: 'OCVR', level: RESULT_LEVELS.OCVR, levelLabel: 'Red Flag Alert',
    name: 'The Fire Romantic', emoji: '🔥',
    tagline: 'So hot you might get burned',
    description: 'Obsessive, expressive, volatile, but not controlling. Every love and breakup is an epic. Posts 100 pics of partner on SNS.',
    traits: ['Explosive affection', 'Big mood swings', 'Addictive love style']
  },
  OCSC: {
    code: 'OCSC', level: RESULT_LEVELS.OCSC, levelLabel: 'Red Flag Alert',
    name: 'The Sweet Surveillant', emoji: '👁️',
    tagline: '"Where are you?" is your love language',
    description: 'Obsessive and controlling but stable and expressive. Sweetly but persistently tracks partner\'s daily life. Location sharing is a must.',
    traits: ['Location sharing required', 'Real-time updates demanded', 'Gentle control']
  },
  OAVR: {
    code: 'OAVR', level: RESULT_LEVELS.OAVR, levelLabel: 'Red Flag Alert',
    name: 'The Avoidant Ghost', emoji: '👻',
    tagline: 'Here, gone, here, gone. Heart thief',
    description: 'Obsessive but avoidant, with big mood swings. Suddenly disappears, suddenly appears. Puts partners on emotional rollercoaster.',
    traits: ['Frequent ghosting/return', 'Big mood swings', 'Action over communication']
  },
  OASC: {
    code: 'OASC', level: RESULT_LEVELS.OASC, levelLabel: 'Red Flag Alert',
    name: 'The Secret Manipulator', emoji: '🕸️',
    tagline: 'Doesn\'t say much, but gets their way',
    description: 'Obsessive and controlling but avoidant and stable. Doesn\'t demand openly, subtly steers partner. Strategic mind games.',
    traits: ['Quiet psychological games', 'Pressure through silence', 'Always gets their way']
  },
  OCVC: {
    code: 'OCVC', level: RESULT_LEVELS.OCVC, levelLabel: 'Certified Danger Zone',
    name: 'The Controlling Vampire', emoji: '🧛',
    tagline: 'A prison called love',
    description: 'All axes maxed out. Obsession + explosive expression + mood swings + control. Must know and control everything. This type may need therapy.',
    traits: ['Extreme possessiveness', 'Explosive emotions', 'Total control']
  },
  OAVC: {
    code: 'OAVC', level: RESULT_LEVELS.OAVC, levelLabel: 'Certified Danger Zone',
    name: 'The Dark Overlord', emoji: '🌑',
    tagline: 'Silently rules the world (of your relationship)',
    description: 'Maxed out obsession and control, no expression, explosive emotions. Sudden rages, ghosting, control. Highly unpredictable danger type.',
    traits: ['Extreme covert control', 'Sudden emotional bursts', 'Rules through silence']
  }
}

export default results
