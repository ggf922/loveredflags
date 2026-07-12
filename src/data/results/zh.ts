import type { ResultType } from '@/types'
import { RESULT_LEVELS } from './types'

const results: Record<string, ResultType> = {
  ICSR: { code: 'ICSR', level: RESULT_LEVELS.ICSR, levelLabel: '天使级绿旗', name: '天使治愈者', emoji: '👼', tagline: '恋爱界的绿旗传奇', description: '独立又温暖沟通,情绪稳定又尊重对方的理想伴侣。', traits: ['稳定的情绪', '健康的沟通', '尊重你的空间'] },
  IASR: { code: 'IASR', level: RESULT_LEVELS.IASR, levelLabel: '天使级绿旗', name: '酷酷智者', emoji: '🧘', tagline: '无戏剧恋爱典范,瑜伽大师能量', description: '独立、情绪稳定但表达内敛。避免冲突,爱好和平。', traits: ['避免冲突', '内敛表达', '完全尊重自由'] },
  ICVR: { code: 'ICVR', level: RESULT_LEVELS.ICVR, levelLabel: '轻微担忧', name: '情感风暴', emoji: '🌊', tagline: '爱哭但可爱的浪', description: '独立且富有表达力但有情绪波动。', traits: ['丰富的情感表达', '有些起伏', '不试图控制'] },
  IASC: { code: 'IASC', level: RESULT_LEVELS.IASC, levelLabel: '轻微担忧', name: '安静的策略家', emoji: '♟️', tagline: '沉默但暗中主导', description: '独立、稳定,表达少但有微妙的控制倾向。', traits: ['沉默但善于观察', '微妙的控制', '很少表露情绪'] },
  IAVR: { code: 'IAVR', level: RESULT_LEVELS.IAVR, levelLabel: '轻微担忧', name: '被动攻击型狙击手', emoji: '🎯', tagline: '沉默生气,精准打击', description: '独立但回避沟通,有情绪波动但不控制。', traits: ['回避沟通', '被动攻击风格', '独立但退缩'] },
  ICSC: { code: 'ICSC', level: RESULT_LEVELS.ICSC, levelLabel: '黄旗', name: '聪明的管理者', emoji: '📋', tagline: '像CEO一样管理爱情', description: '独立稳定但试图管理伴侣行为。', traits: ['系统化', '管理伴侣', '逻辑高于情感'] },
  ICVC: { code: 'ICVC', level: RESULT_LEVELS.ICVC, levelLabel: '黄旗', name: '戏精之王/后', emoji: '🎭', tagline: '每天都是浪漫电影现场', description: '表达丰富、情绪波动大且有控制欲。', traits: ['戏剧化表达', '大幅情绪波动', '引导伴侣'] },
  IAVC: { code: 'IAVC', level: RESULT_LEVELS.IAVC, levelLabel: '黄旗', name: '冰霜君王', emoji: '❄️', tagline: '表面冰冷,暗中占有', description: '独立回避,但有情绪波动和控制欲。', traits: ['冷酷、压抑情绪', '突然爆发', '微妙的占有欲'] },
  OCSR: { code: 'OCSR', level: RESULT_LEVELS.OCSR, levelLabel: '黄旗', name: '爱的指南针', emoji: '🧭', tagline: '想到处黏着的可爱粘人精', description: '有执着但表达丰富、稳定不控制。', traits: ['想24/7在一起', '丰富的爱意', '尊重伴侣决定'] },
  OASR: { code: 'OASR', level: RESULT_LEVELS.OASR, levelLabel: '黄旗', name: '沉默的仰慕者', emoji: '🌙', tagline: '想一百万次,一个问题都不问', description: '执着但回避沟通、稳定不控制。', traits: ['内心执着', '极度缺乏表达', '默默观察社交'] },
  OCVR: { code: 'OCVR', level: RESULT_LEVELS.OCVR, levelLabel: '红旗警报', name: '烈火浪漫主义者', emoji: '🔥', tagline: '烫到你可能被烧', description: '执着、表达丰富、情绪波动大但不控制。', traits: ['爆发式的爱意', '大幅波动', '成瘾式的爱'] },
  OCSC: { code: 'OCSC', level: RESULT_LEVELS.OCSC, levelLabel: '红旗警报', name: '温柔的监视者', emoji: '👁️', tagline: '"你在哪?"是你的爱情语言', description: '执着又控制但稳定表达。', traits: ['必须位置共享', '要求实时更新', '温柔的控制'] },
  OAVR: { code: 'OAVR', level: RESULT_LEVELS.OAVR, levelLabel: '红旗警报', name: '回避型幽灵', emoji: '👻', tagline: '来了,走了,来了,走了', description: '执着但回避沟通,情绪起伏大。', traits: ['频繁消失/回归', '大幅波动', '行动大于沟通'] },
  OASC: { code: 'OASC', level: RESULT_LEVELS.OASC, levelLabel: '红旗警报', name: '秘密操纵者', emoji: '🕸️', tagline: '话不多但总能得逞', description: '执着又控制但回避又稳定。', traits: ['安静的心理游戏', '沉默施压', '总能得逞'] },
  OCVC: { code: 'OCVC', level: RESULT_LEVELS.OCVC, levelLabel: '认证危险区', name: '控制型吸血鬼', emoji: '🧛', tagline: '一座名为爱的监狱', description: '所有维度都达到顶点。', traits: ['极度占有欲', '爆发式情绪', '全方位控制'] },
  OAVC: { code: 'OAVC', level: RESULT_LEVELS.OAVC, levelLabel: '认证危险区', name: '黑暗霸主', emoji: '🌑', tagline: '默默统治世界', description: '执着和控制欲最高,无表达,情绪爆发。', traits: ['隐蔽的极端控制', '突然爆发', '以沉默统治'] }
}

export default results
