import type { ResultType } from '@/types'
import { RESULT_LEVELS } from './types'

const results: Record<string, ResultType> = {
  ICSR: { code: 'ICSR', level: RESULT_LEVELS.ICSR, levelLabel: 'ملاك الإشارة الخضراء', name: 'المعالج الملائكي', emoji: '👼', tagline: 'أسطورة الإشارة الخضراء التي يحلم بها الجميع', description: 'مستقل ولكن دافئ في التواصل، مستقر عاطفياً ومحترم.', traits: ['عواطف مستقرة', 'تواصل صحي', 'يحترم مساحتك'] },
  IASR: { code: 'IASR', level: RESULT_LEVELS.IASR, levelLabel: 'ملاك الإشارة الخضراء', name: 'الحكيم الهادئ', emoji: '🧘', tagline: 'حب بلا دراما، طاقة اليوغا', description: 'مستقل، مستقر عاطفياً، متحفظ. يتجنب الصراع.', traits: ['يتجنب الصراع', 'تعبير متحفظ', 'يحترم حريتك'] },
  ICVR: { code: 'ICVR', level: RESULT_LEVELS.ICVR, levelLabel: 'قلق طفيف', name: 'العاصفة العاطفية', emoji: '🌊', tagline: 'دموع كثيرة لكن أمواج محبوبة', description: 'مستقل وتعبيري لكن مع تقلبات مزاجية.', traits: ['تعبير عاطفي غني', 'بعض التقلبات', 'لا يحاول السيطرة'] },
  IASC: { code: 'IASC', level: RESULT_LEVELS.IASC, levelLabel: 'قلق طفيف', name: 'الاستراتيجي الصامت', emoji: '♟️', tagline: 'صامت لكنه مهيمن بمكر', description: 'مستقل، مستقر، قليل التعبير مع ميول تحكم خفية.', traits: ['صامت لكن ملاحظ', 'تحكم خفي', 'نادراً ما يظهر المشاعر'] },
  IAVR: { code: 'IAVR', level: RESULT_LEVELS.IAVR, levelLabel: 'قلق طفيف', name: 'القناص السلبي العدواني', emoji: '🎯', tagline: 'يعبس بصمت، يصيب بدقة', description: 'مستقل، يتجنب التواصل، مع تقلبات لكن بدون تحكم.', traits: ['يتجنب التواصل', 'أسلوب سلبي عدواني', 'مستقل لكن منسحب'] },
  ICSC: { code: 'ICSC', level: RESULT_LEVELS.ICSC, levelLabel: 'إشارة صفراء', name: 'المدير الذكي', emoji: '📋', tagline: 'يدير الحب كمدير تنفيذي', description: 'مستقل ومستقر، يحاول إدارة سلوك الشريك.', traits: ['منهجي', 'يدير الشريك', 'المنطق فوق العاطفة'] },
  ICVC: { code: 'ICVC', level: RESULT_LEVELS.ICVC, levelLabel: 'إشارة صفراء', name: 'ملك/ملكة الدراما', emoji: '🎭', tagline: 'كل يوم فيلم رومانسي', description: 'تعبيري، متقلب، ومسيطر.', traits: ['تعبير درامي', 'تقلبات مزاجية كبيرة', 'يوجه الشريك'] },
  IAVC: { code: 'IAVC', level: RESULT_LEVELS.IAVC, levelLabel: 'إشارة صفراء', name: 'ملك الجليد', emoji: '❄️', tagline: 'بارد من الخارج، متملك من الداخل', description: 'مستقل، يتجنب التواصل، مع تقلبات وتحكم.', traits: ['بارد، مشاعر مكبوتة', 'انفجارات مفاجئة', 'تملك خفي'] },
  OCSR: { code: 'OCSR', level: RESULT_LEVELS.OCSR, levelLabel: 'إشارة صفراء', name: 'بوصلة الحب', emoji: '🧭', tagline: 'الملتصق اللطيف الذي يريد أن يكون في كل مكان', description: 'مهووس لكن تعبيري، مستقر ولا يسيطر.', traits: ['يريد أن نكون معاً 24/7', 'محبة وفيرة', 'يحترم القرارات'] },
  OASR: { code: 'OASR', level: RESULT_LEVELS.OASR, levelLabel: 'إشارة صفراء', name: 'المعجب الصامت', emoji: '🌙', tagline: 'يفكر مليون مرة، لا يسأل شيئاً', description: 'مهووس لكن يتجنب التواصل، مستقر، بلا تحكم.', traits: ['هوس داخلي', 'نقص شديد في التعبير', 'مراقب صامت للشبكات'] },
  OCVR: { code: 'OCVR', level: RESULT_LEVELS.OCVR, levelLabel: 'تنبيه إشارة حمراء', name: 'الرومانسي الناري', emoji: '🔥', tagline: 'ساخن جداً قد تحترق', description: 'مهووس، تعبيري، متقلب لكن غير مسيطر.', traits: ['محبة انفجارية', 'تقلبات كبيرة', 'حب مدمن'] },
  OCSC: { code: 'OCSC', level: RESULT_LEVELS.OCSC, levelLabel: 'تنبيه إشارة حمراء', name: 'المراقب اللطيف', emoji: '👁️', tagline: '"أين أنت؟" هي لغة حبك', description: 'مهووس ومسيطر لكن مستقر ومعبر.', traits: ['مشاركة الموقع مطلوبة', 'تحديثات فورية', 'تحكم لطيف'] },
  OAVR: { code: 'OAVR', level: RESULT_LEVELS.OAVR, levelLabel: 'تنبيه إشارة حمراء', name: 'الشبح المراوغ', emoji: '👻', tagline: 'موجود، اختفى، موجود، اختفى', description: 'مهووس لكن يتجنب التواصل، مع تقلبات كبيرة.', traits: ['اختفاء متكرر', 'تقلبات كبيرة', 'الفعل قبل الكلام'] },
  OASC: { code: 'OASC', level: RESULT_LEVELS.OASC, levelLabel: 'تنبيه إشارة حمراء', name: 'المتلاعب الخفي', emoji: '🕸️', tagline: 'لا يقول كثيراً لكنه يحصل على مراده', description: 'مهووس ومسيطر لكن مراوغ ومستقر.', traits: ['ألعاب نفسية', 'ضغط بالصمت', 'دائماً يحصل على مراده'] },
  OCVC: { code: 'OCVC', level: RESULT_LEVELS.OCVC, levelLabel: 'منطقة خطر معتمدة', name: 'مصاص الدماء المتحكم', emoji: '🧛', tagline: 'سجن يسمى الحب', description: 'كل المحاور في الحد الأقصى.', traits: ['تملك متطرف', 'مشاعر انفجارية', 'سيطرة كاملة'] },
  OAVC: { code: 'OAVC', level: RESULT_LEVELS.OAVC, levelLabel: 'منطقة خطر معتمدة', name: 'سيد الظلام', emoji: '🌑', tagline: 'يحكم بصمت', description: 'هوس وسيطرة قصوى، بلا تعبير، مشاعر انفجارية.', traits: ['سيطرة خفية متطرفة', 'انفجارات مفاجئة', 'يحكم بالصمت'] }
}

export default results
