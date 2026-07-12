import type { Question } from '@/types'

const questions: Question[] = [
  { id: 1, emoji: '📱', text: '恋人が3時間LINEを既読しない。最初の反応は?', options: [
    { text: '忙しいだろう。自分のことをする', scores: { O: -2, E: -1 } },
    { text: '少し気になるが平静を装う', scores: { O: 0, C: -1 } },
    { text: '「何かあった?」とメッセージ', scores: { O: 1, C: 1 } },
    { text: '連絡ないとおかしくなる。電話5回', scores: { O: 3, E: 2, V: 1 } },
  ]},
  { id: 2, emoji: '💬', text: '恋人が気に入らない行動をした時は?', options: [
    { text: 'すぐ正直に話す', scores: { C: 2, V: 1 } },
    { text: '落ち着いてから優しく話す', scores: { C: 1, E: -1 } },
    { text: '拗ねてるだけで話さない', scores: { C: -2, E: 1 } },
    { text: '平気なふりして心の中で溜め込む', scores: { C: -3, E: -1 } },
  ]},
  { id: 3, emoji: '👀', text: '恋人が異性と楽しそうに話している。あなたは?', options: [
    { text: '笑顔で挨拶して合流する', scores: { O: -2, E: -2 } },
    { text: '少し気になるが見守る', scores: { O: 0, V: 0 } },
    { text: '後で「あの人誰?」と聞く', scores: { O: 1, V: 1 } },
    { text: '険悪な雰囲気で即介入', scores: { O: 3, V: 3, E: 2 } },
  ]},
  { id: 4, emoji: '📸', text: '恋人のSNSフォロワー/いいねをどれくらいチェック?', options: [
    { text: '全く興味なし', scores: { O: -3, V: -2 } },
    { text: 'たまに偶然見る', scores: { O: -1 } },
    { text: '新しいフォロワーは大体確認', scores: { O: 2, V: 1 } },
    { text: '全フォロワー、いいね履歴を把握', scores: { O: 3, V: 3 } },
  ]},
  { id: 5, emoji: '🎉', text: '週末は各自の時間を持とうと言われたら?', options: [
    { text: '最高!自分の時間必要', scores: { O: -3, V: -2 } },
    { text: '大丈夫、お互い尊重', scores: { O: -1, V: -1 } },
    { text: '少し寂しいが理解する', scores: { O: 1, E: 1 } },
    { text: 'なぜ?嫌いになった?と問い詰める', scores: { O: 3, E: 2, V: 2 } },
  ]},
  { id: 6, emoji: '🍷', text: '喧嘩後のあなたのスタイルは?', options: [
    { text: '冷静に対話で解決', scores: { E: -2, C: 2 } },
    { text: '少し時間が必要だがすぐ仲直り', scores: { E: 0 } },
    { text: '数日音信不通', scores: { E: 2, C: -2 } },
    { text: 'ものすごく怒って別れると言う', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 7, emoji: '💭', text: '恋人の理想が自分と違うタイプなら?', options: [
    { text: '好みは好み、気にしない', scores: { O: -2, E: -1 } },
    { text: '少し不安だが受け流す', scores: { O: 1, E: 1 } },
    { text: 'なぜそのタイプが好きか聞き続ける', scores: { O: 2, V: 1 } },
    { text: 'そのタイプに変わろうと努力', scores: { O: 3, C: -1, E: 2 } },
  ]},
  { id: 8, emoji: '🕐', text: '理想的な連絡頻度は?', options: [
    { text: '1日1-2回で十分', scores: { O: -3 } },
    { text: '朝、昼、夜くらい', scores: { O: -1 } },
    { text: 'こまめに頻繁に、リアルタイム共有', scores: { O: 2 } },
    { text: '起きてる間ずっとメッセージ', scores: { O: 3, V: 2 } },
  ]},
  { id: 9, emoji: '💔', text: '恋人が元カレ/元カノの話をしたら?', options: [
    { text: 'クールに聞く。過去は過去', scores: { O: -2, E: -2 } },
    { text: '不快だが顔に出さない', scores: { O: 0, E: 1 } },
    { text: 'なぜその話?とイライラ', scores: { O: 2, E: 2 } },
    { text: '元カレ/元カノのSNSを調査', scores: { O: 3, V: 2, E: 2 } },
  ]},
  { id: 10, emoji: '🎁', text: '記念日を恋人が忘れたら?', options: [
    { text: '記憶力悪いのかな、笑い飛ばす', scores: { E: -3, C: -1 } },
    { text: '寂しいと伝え次は覚えようと言う', scores: { E: 0, C: 2 } },
    { text: '拗ねて一日中冷たい', scores: { E: 2, C: -2 } },
    { text: '別れるカードを切る', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 11, emoji: '🌙', text: '別れた後のあなたは?', options: [
    { text: '悲しいがすぐ立ち直り自己成長', scores: { E: -2, O: -2 } },
    { text: 'しばらく落ち込むが時間が薬', scores: { E: 0 } },
    { text: '数ヶ月眠れずSNSストーカー', scores: { E: 2, O: 3 } },
    { text: '復縁のため絶えず連絡', scores: { E: 3, O: 3, V: 2 } },
  ]},
  { id: 12, emoji: '💍', text: '恋人が自分抜きで旅行に行くと言ったら?', options: [
    { text: '楽しんでね~と応援', scores: { O: -3, V: -3 } },
    { text: '少し残念だが理解', scores: { O: 0, V: -1 } },
    { text: '誰と行くの?と詳しく聞く', scores: { O: 2, V: 2 } },
    { text: '絶対ダメ。行くなら一緒に', scores: { O: 3, V: 3, E: 2 } },
  ]}
]

export default questions
