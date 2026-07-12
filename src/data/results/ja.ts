import type { ResultType } from '@/types'
import { RESULT_LEVELS } from './types'

const results: Record<string, ResultType> = {
  ICSR: { code: 'ICSR', level: RESULT_LEVELS.ICSR, levelLabel: '天使のグリーンフラッグ', name: '天使のヒーラー', emoji: '👼', tagline: '恋愛界のグリーンフラッグ、国宝級聖人', description: '独立的でありながら温かくコミュニケーションを取り、感情が安定していて相手を尊重する理想的なパートナー。', traits: ['安定した感情', '健全なコミュニケーション', '相手のスペースを尊重'] },
  IASR: { code: 'IASR', level: RESULT_LEVELS.IASR, levelLabel: '天使のグリーンフラッグ', name: 'クールな賢者', emoji: '🧘', tagline: 'ドラマなし恋愛の基本、ヨガマスター', description: '独立的で感情が安定しているが表現が控えめ。対立を避け平和を愛するタイプ。', traits: ['対立回避、平和主義', '控えめな感情表現', '相手の自由を完璧に尊重'] },
  ICVR: { code: 'ICVR', level: RESULT_LEVELS.ICVR, levelLabel: '軽い懸念', name: '感情の嵐', emoji: '🌊', tagline: '涙もろいけど愛しい波', description: '独立的で表現豊かだが感情の起伏があるタイプ。愛する時は世界一熱く、拗ねる時は嵐のように。', traits: ['豊かな感情表現', 'やや大きな感情の起伏', '相手を支配しようとしない'] },
  IASC: { code: 'IASC', level: RESULT_LEVELS.IASC, levelLabel: '軽い懸念', name: '静かなストラテジスト', emoji: '♟️', tagline: '無口だが密かな支配者', description: '独立的で感情は安定しているが表現が少なく、密かに相手を導こうとする。', traits: ['無口だが観察力鋭い', '密かな支配傾向', '感情をあまり表に出さない'] },
  IAVR: { code: 'IAVR', level: RESULT_LEVELS.IAVR, levelLabel: '軽い懸念', name: 'パッシブアグレッシブなスナイパー', emoji: '🎯', tagline: '無言で拗ねるプロ狙撃手', description: '独立的だがコミュニケーションを避け、感情の起伏があるタイプ。', traits: ['コミュニケーション回避', '拗ねる表現方式', '独立的だが消極的'] },
  ICSC: { code: 'ICSC', level: RESULT_LEVELS.ICSC, levelLabel: 'イエローフラッグ', name: '賢いマネージャー', emoji: '📋', tagline: '恋愛をプロジェクトのように管理するCEO', description: '独立的で安定しているが相手の行動を管理しようとするスタイル。', traits: ['体系的で計画的', '相手の行動を管理', '感情より論理優先'] },
  ICVC: { code: 'ICVC', level: RESULT_LEVELS.ICVC, levelLabel: 'イエローフラッグ', name: 'ドラマクイーン/キング', emoji: '🎭', tagline: '毎日がロマンス映画の撮影現場', description: '表現豊かで感情の起伏が大きく支配欲もあるタイプ。愛も激情的、喧嘩も激情的。', traits: ['劇的な感情表現', '大きな感情の起伏', '相手を望む方向に導く'] },
  IAVC: { code: 'IAVC', level: RESULT_LEVELS.IAVC, levelLabel: 'イエローフラッグ', name: '氷の王/女王', emoji: '❄️', tagline: '冷たいが密かに独占欲強いタイプ', description: '独立的でコミュニケーションを避けるが、感情の起伏も大きく支配欲もある。', traits: ['冷静で感情抑圧', '突然の感情爆発', '密かな独占欲'] },
  OCSR: { code: 'OCSR', level: RESULT_LEVELS.OCSR, levelLabel: 'イエローフラッグ', name: '愛のコンパス', emoji: '🧭', tagline: 'いつも一緒にいたいくっつき虫', description: '執着はあるが表現豊かで安定し支配欲は低い。24時間愛を確認したいが相手を制限しない。', traits: ['24時間一緒にいたい', '豊かな愛情表現', '相手の決定を尊重'] },
  OASR: { code: 'OASR', level: RESULT_LEVELS.OASR, levelLabel: 'イエローフラッグ', name: '沈黙の片思い', emoji: '🌙', tagline: '心の中で百万回考えて聞かない', description: '執着はあるがコミュニケーション回避、感情は安定、支配欲なし。', traits: ['内面的な執着', '極度の表現不足', '相手のSNSを静かに観察'] },
  OCVR: { code: 'OCVR', level: RESULT_LEVELS.OCVR, levelLabel: 'レッドフラッグ警報', name: '炎のロマンチスト', emoji: '🔥', tagline: '熱すぎて火傷注意', description: '執着も表現も豊かで感情の起伏も大きいが支配欲だけ低い。愛も別れも毎回大叙事詩。', traits: ['爆発的な愛情表現', '大きな感情の起伏', '中毒性の強い愛'] },
  OCSC: { code: 'OCSC', level: RESULT_LEVELS.OCSC, levelLabel: 'レッドフラッグ警報', name: '優しい監視者', emoji: '👁️', tagline: '「どこ?」が口癖の24時間CCTV', description: '執着と支配欲はあるが感情は安定し表現は上手。優しく執拗に相手の日常を把握。', traits: ['位置共有必須', 'リアルタイム報告要求', '優しい支配'] },
  OAVR: { code: 'OAVR', level: RESULT_LEVELS.OAVR, levelLabel: 'レッドフラッグ警報', name: '回避型ゴースト', emoji: '👻', tagline: 'いたり、いなかったり、心臓泥棒', description: '執着しながらコミュニケーション回避、感情の起伏大。突然音信不通、突然熱くなる。', traits: ['頻繁な音信不通と再登場', '大きな感情の起伏', 'コミュニケーションより行動'] },
  OASC: { code: 'OASC', level: RESULT_LEVELS.OASC, levelLabel: 'レッドフラッグ警報', name: '密かな操縦者', emoji: '🕸️', tagline: '無口だが結局自分の思い通り', description: '執着と支配欲は強いがコミュニケーション回避、感情は安定。露骨に要求せず密かに相手を誘導。', traits: ['静かな心理戦', '沈黙による圧力', '結局自分の方法で貫徹'] },
  OCVC: { code: 'OCVC', level: RESULT_LEVELS.OCVC, levelLabel: '公認危険ゾーン', name: '支配型ヴァンパイア', emoji: '🧛', tagline: '愛という名の監獄', description: '全ての軸が最高値。執着+激情的表現+感情の起伏+支配。相手の全てを知り支配しなければならない。', traits: ['極度の独占欲', '爆発的な感情', '全方位的支配'] },
  OAVC: { code: 'OAVC', level: RESULT_LEVELS.OAVC, levelLabel: '公認危険ゾーン', name: '闇の支配者', emoji: '🌑', tagline: '静かに世界を支配するダークロード', description: '執着と支配欲最高値だが表現はなく感情は爆発する。予測不可能な危険タイプ。', traits: ['密かで極端な支配', '突然の感情爆発', '沈黙で支配'] }
}

export default results
