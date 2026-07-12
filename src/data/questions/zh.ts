import type { Question } from '@/types'

const questions: Question[] = [
  { id: 1, emoji: '📱', text: '伴侣3小时没读你的消息。第一反应?', options: [
    { text: '肯定在忙,我做自己的事', scores: { O: -2, E: -1 } },
    { text: '有点担心但保持冷静', scores: { O: 0, C: -1 } },
    { text: '发一条"一切都好吗?"', scores: { O: 1, C: 1 } },
    { text: '惊慌!连打5个电话', scores: { O: 3, E: 2, V: 1 } },
  ]},
  { id: 2, emoji: '💬', text: '伴侣做了让你不满的事。你:', options: [
    { text: '直接坦诚地说', scores: { C: 2, V: 1 } },
    { text: '先冷静下来,再温和沟通', scores: { C: 1, E: -1 } },
    { text: '给对方冷处理', scores: { C: -2, E: 1 } },
    { text: '装作没事,心里憋着', scores: { C: -3, E: -1 } },
  ]},
  { id: 3, emoji: '👀', text: '伴侣和异性有说有笑。你:', options: [
    { text: '热情打招呼加入他们', scores: { O: -2, E: -2 } },
    { text: '不太舒服但远远观察', scores: { O: 0, V: 0 } },
    { text: '事后问"那是谁?"', scores: { O: 1, V: 1 } },
    { text: '愤怒地冲过去打断', scores: { O: 3, V: 3, E: 2 } },
  ]},
  { id: 4, emoji: '📸', text: '你多常查看伴侣的社交媒体?', options: [
    { text: '完全不在乎', scores: { O: -3, V: -2 } },
    { text: '偶尔随便看', scores: { O: -1 } },
    { text: '会检查新粉丝', scores: { O: 2, V: 1 } },
    { text: '每个粉丝、点赞、评论都清楚', scores: { O: 3, V: 3 } },
  ]},
  { id: 5, emoji: '🎉', text: '伴侣建议周末各自度过。你:', options: [
    { text: '好!我需要个人时间', scores: { O: -3, V: -2 } },
    { text: '可以,相互尊重', scores: { O: -1, V: -1 } },
    { text: '有点难过但能理解', scores: { O: 1, E: 1 } },
    { text: '为什么?你不爱我了吗?!', scores: { O: 3, E: 2, V: 2 } },
  ]},
  { id: 6, emoji: '🍷', text: '吵架后你的风格是:', options: [
    { text: '冷静地通过对话解决', scores: { E: -2, C: 2 } },
    { text: '需要时间但很快和好', scores: { E: 0 } },
    { text: '连续几天玩消失', scores: { E: 2, C: -2 } },
    { text: '爆发,说"我们完了!"', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 7, emoji: '💭', text: '伴侣的理想型和你差异很大。你:', options: [
    { text: '喜好是喜好,不当回事', scores: { O: -2, E: -1 } },
    { text: '有点焦虑但过去了', scores: { O: 1, E: 1 } },
    { text: '不停问为什么喜欢那种类型', scores: { O: 2, V: 1 } },
    { text: '努力改变自己变成那种类型', scores: { O: 3, C: -1, E: 2 } },
  ]},
  { id: 8, emoji: '🕐', text: '你理想的联系频率:', options: [
    { text: '一天一两次就够', scores: { O: -3 } },
    { text: '早中晚各一次', scores: { O: -1 } },
    { text: '一天中经常联系', scores: { O: 2 } },
    { text: '醒着就一直聊', scores: { O: 3, V: 2 } },
  ]},
  { id: 9, emoji: '💔', text: '伴侣提到前任。你:', options: [
    { text: '冷静地听,过去就过去了', scores: { O: -2, E: -2 } },
    { text: '不舒服但不表现出来', scores: { O: 0, E: 1 } },
    { text: '生气:"为什么要提这个?"', scores: { O: 2, E: 2 } },
    { text: '立刻扒前任的社交媒体', scores: { O: 3, V: 2, E: 2 } },
  ]},
  { id: 10, emoji: '🎁', text: '伴侣忘了纪念日。你:', options: [
    { text: '一笑而过,可以理解', scores: { E: -3, C: -1 } },
    { text: '表达失望,请求下次记得', scores: { E: 0, C: 2 } },
    { text: '一整天冷战', scores: { E: 2, C: -2 } },
    { text: '直接说分手', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 11, emoji: '🌙', text: '分手后的你:', options: [
    { text: '难过但很快恢复,专注自我成长', scores: { E: -2, O: -2 } },
    { text: '低落一阵子,时间会治愈', scores: { E: 0 } },
    { text: '几个月睡不着,偷看对方社交', scores: { E: 2, O: 3 } },
    { text: '不停联系想复合', scores: { E: 3, O: 3, V: 2 } },
  ]},
  { id: 12, emoji: '💍', text: '伴侣想独自旅行。你:', options: [
    { text: '玩得开心!全力支持', scores: { O: -3, V: -3 } },
    { text: '有点失落但理解', scores: { O: 0, V: -1 } },
    { text: '详细询问和谁去', scores: { O: 2, V: 2 } },
    { text: '绝对不行。要去一起去', scores: { O: 3, V: 3, E: 2 } },
  ]}
]

export default questions
