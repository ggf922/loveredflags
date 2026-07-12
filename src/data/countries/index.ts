// G20 20개국 데이터 (한국 포함, EU는 스페인/독일/프랑스로 대체)
export interface CountryInfo {
  code: string
  flag: string
  names: Record<string, string> // 다국어 국가명
}

export const G20_COUNTRIES: Record<string, CountryInfo> = {
  KR: { code: 'KR', flag: '🇰🇷', names: { en: 'South Korea', ko: '대한민국', ja: '韓国', es: 'Corea del Sur', pt: 'Coreia do Sul', ar: 'كوريا الجنوبية', ru: 'Южная Корея', zh: '韩国' }},
  US: { code: 'US', flag: '🇺🇸', names: { en: 'USA', ko: '미국', ja: 'アメリカ', es: 'EE.UU.', pt: 'EUA', ar: 'أمريكا', ru: 'США', zh: '美国' }},
  JP: { code: 'JP', flag: '🇯🇵', names: { en: 'Japan', ko: '일본', ja: '日本', es: 'Japón', pt: 'Japão', ar: 'اليابان', ru: 'Япония', zh: '日本' }},
  CN: { code: 'CN', flag: '🇨🇳', names: { en: 'China', ko: '중국', ja: '中国', es: 'China', pt: 'China', ar: 'الصين', ru: 'Китай', zh: '中国' }},
  GB: { code: 'GB', flag: '🇬🇧', names: { en: 'UK', ko: '영국', ja: 'イギリス', es: 'Reino Unido', pt: 'Reino Unido', ar: 'المملكة المتحدة', ru: 'Великобритания', zh: '英国' }},
  FR: { code: 'FR', flag: '🇫🇷', names: { en: 'France', ko: '프랑스', ja: 'フランス', es: 'Francia', pt: 'França', ar: 'فرنسا', ru: 'Франция', zh: '法国' }},
  DE: { code: 'DE', flag: '🇩🇪', names: { en: 'Germany', ko: '독일', ja: 'ドイツ', es: 'Alemania', pt: 'Alemanha', ar: 'ألمانيا', ru: 'Германия', zh: '德国' }},
  IT: { code: 'IT', flag: '🇮🇹', names: { en: 'Italy', ko: '이탈리아', ja: 'イタリア', es: 'Italia', pt: 'Itália', ar: 'إيطاليا', ru: 'Италия', zh: '意大利' }},
  CA: { code: 'CA', flag: '🇨🇦', names: { en: 'Canada', ko: '캐나다', ja: 'カナダ', es: 'Canadá', pt: 'Canadá', ar: 'كندا', ru: 'Канада', zh: '加拿大' }},
  AU: { code: 'AU', flag: '🇦🇺', names: { en: 'Australia', ko: '호주', ja: 'オーストラリア', es: 'Australia', pt: 'Austrália', ar: 'أستراليا', ru: 'Австралия', zh: '澳大利亚' }},
  RU: { code: 'RU', flag: '🇷🇺', names: { en: 'Russia', ko: '러시아', ja: 'ロシア', es: 'Rusia', pt: 'Rússia', ar: 'روسيا', ru: 'Россия', zh: '俄罗斯' }},
  BR: { code: 'BR', flag: '🇧🇷', names: { en: 'Brazil', ko: '브라질', ja: 'ブラジル', es: 'Brasil', pt: 'Brasil', ar: 'البرازيل', ru: 'Бразилия', zh: '巴西' }},
  IN: { code: 'IN', flag: '🇮🇳', names: { en: 'India', ko: '인도', ja: 'インド', es: 'India', pt: 'Índia', ar: 'الهند', ru: 'Индия', zh: '印度' }},
  MX: { code: 'MX', flag: '🇲🇽', names: { en: 'Mexico', ko: '멕시코', ja: 'メキシコ', es: 'México', pt: 'México', ar: 'المكسيك', ru: 'Мексика', zh: '墨西哥' }},
  ID: { code: 'ID', flag: '🇮🇩', names: { en: 'Indonesia', ko: '인도네시아', ja: 'インドネシア', es: 'Indonesia', pt: 'Indonésia', ar: 'إندونيسيا', ru: 'Индонезия', zh: '印度尼西亚' }},
  SA: { code: 'SA', flag: '🇸🇦', names: { en: 'Saudi Arabia', ko: '사우디', ja: 'サウジアラビア', es: 'Arabia Saudita', pt: 'Arábia Saudita', ar: 'السعودية', ru: 'Саудовская Аравия', zh: '沙特' }},
  TR: { code: 'TR', flag: '🇹🇷', names: { en: 'Turkey', ko: '튀르키예', ja: 'トルコ', es: 'Turquía', pt: 'Turquia', ar: 'تركيا', ru: 'Турция', zh: '土耳其' }},
  AR: { code: 'AR', flag: '🇦🇷', names: { en: 'Argentina', ko: '아르헨티나', ja: 'アルゼンチン', es: 'Argentina', pt: 'Argentina', ar: 'الأرجنتين', ru: 'Аргентина', zh: '阿根廷' }},
  ZA: { code: 'ZA', flag: '🇿🇦', names: { en: 'South Africa', ko: '남아공', ja: '南アフリカ', es: 'Sudáfrica', pt: 'África do Sul', ar: 'جنوب إفريقيا', ru: 'ЮАР', zh: '南非' }},
  ES: { code: 'ES', flag: '🇪🇸', names: { en: 'Spain', ko: '스페인', ja: 'スペイン', es: 'España', pt: 'Espanha', ar: 'إسبانيا', ru: 'Испания', zh: '西班牙' }},
}

export const G20_LIST = Object.keys(G20_COUNTRIES)

// 국가별 이성 특성 (다국어 사유)
// key: 국가코드, value: { male: {ko:'', en:''}, female: {ko:'', en:''} }
export const COUNTRY_TRAITS: Record<string, { male: Record<string, string>; female: Record<string, string> }> = {
  KR: {
    male: { en: 'Attentive, romantic gestures, 24/7 texting culture', ko: '섬세하고 로맨틱, 24시간 연락 가능한 케어형', ja: '繊細でロマンチック、マメな連絡', es: 'Atento, romántico, comunicación 24/7', pt: 'Atencioso, romântico, comunicação 24/7', ar: 'مهتم، رومانسي، تواصل 24/7', ru: 'Внимательный, романтичный, постоянно на связи', zh: '细心、浪漫、24/7联系' },
    female: { en: 'Detail-oriented, cares deeply, expressive love', ko: '섬세하고 깊이 사랑하며 표현이 풍부함', ja: '繊細で深く愛し、表現豊か', es: 'Detallista, ama profundamente, expresiva', pt: 'Detalhista, ama profundamente, expressiva', ar: 'مهتمة بالتفاصيل، تحب بعمق، معبرة', ru: 'Внимательная к деталям, глубоко любит, выразительна', zh: '细致、深爱、表达丰富' }
  },
  US: {
    male: { en: 'Confident, direct communication, independent', ko: '자신감 있고 직설적이며 독립적', ja: '自信家、直接的、独立的', es: 'Seguro, directo, independiente', pt: 'Seguro, direto, independente', ar: 'واثق، مباشر، مستقل', ru: 'Уверенный, прямой, независимый', zh: '自信、直接、独立' },
    female: { en: 'Independent, career-driven, straight-talker', ko: '독립적이고 커리어 지향, 시원한 스타일', ja: '独立的、キャリア志向、率直', es: 'Independiente, ambiciosa, directa', pt: 'Independente, ambiciosa, direta', ar: 'مستقلة، طموحة، صريحة', ru: 'Независимая, амбициозная, прямолинейная', zh: '独立、事业心强、直言不讳' }
  },
  JP: {
    male: { en: 'Gentle, considerate, thoughtful gestures', ko: '젠틀하고 배려심 깊으며 세심한 성향', ja: '優しく思いやりがあり細やか', es: 'Gentil, considerado, detallista', pt: 'Gentil, atencioso, detalhista', ar: 'لطيف، مراعٍ، مهتم بالتفاصيل', ru: 'Нежный, заботливый, внимательный', zh: '温柔、体贴、细心' },
    female: { en: 'Kind, patient, quietly supportive', ko: '친절하고 인내심 강하며 조용히 지지', ja: '親切で忍耐強く、静かに支える', es: 'Amable, paciente, apoya en silencio', pt: 'Gentil, paciente, apoia em silêncio', ar: 'لطيفة، صبورة، داعمة بهدوء', ru: 'Добрая, терпеливая, тихо поддерживает', zh: '善良、耐心、默默支持' }
  },
  CN: {
    male: { en: 'Family-oriented, hardworking, protective', ko: '가정적이고 근면하며 보호본능 강함', ja: '家族思い、勤勉、守護本能が強い', es: 'Familiar, trabajador, protector', pt: 'Familiar, trabalhador, protetor', ar: 'محب للعائلة، مجتهد، حامي', ru: 'Семейный, трудолюбивый, защитник', zh: '顾家、勤劳、有保护欲' },
    female: { en: 'Loyal, family-focused, deeply committed', ko: '충실하고 가족 중심적이며 헌신적', ja: '忠実で家族中心、献身的', es: 'Leal, familiar, comprometida', pt: 'Leal, familiar, comprometida', ar: 'مخلصة، عائلية، ملتزمة', ru: 'Верная, семейная, преданная', zh: '忠诚、以家庭为中心、深情' }
  },
  GB: {
    male: { en: 'Witty, well-mannered, dry humor', ko: '위트있고 매너 좋으며 시크한 유머', ja: 'ウィットに富み、マナーが良く、乾いたユーモア', es: 'Ingenioso, educado, humor seco', pt: 'Espirituoso, educado, humor seco', ar: 'ذكي، مهذب، فكاهي', ru: 'Остроумный, воспитанный, суховатый юмор', zh: '风趣、有礼貌、冷幽默' },
    female: { en: 'Sophisticated, independent, self-assured', ko: '세련되고 독립적이며 자신감 있음', ja: '洗練されて独立的、自信あり', es: 'Sofisticada, independiente, segura', pt: 'Sofisticada, independente, segura', ar: 'راقية، مستقلة، واثقة', ru: 'Утончённая, независимая, уверенная', zh: '优雅、独立、自信' }
  },
  FR: {
    male: { en: 'Romantic, artistic, effortlessly charming', ko: '로맨틱하고 예술적이며 자연스러운 매력', ja: 'ロマンチック、芸術的、自然な魅力', es: 'Romántico, artístico, encantador', pt: 'Romântico, artístico, encantador', ar: 'رومانسي، فني، ساحر', ru: 'Романтичный, артистичный, обаятельный', zh: '浪漫、艺术、魅力自然' },
    female: { en: 'Effortlessly chic, confident, sophisticated', ko: '자연스럽게 세련되고 자신감 있음', ja: 'ナチュラルにシックで自信家', es: 'Naturalmente chic, segura, sofisticada', pt: 'Naturalmente chique, segura, sofisticada', ar: 'أنيقة بطبيعتها، واثقة، راقية', ru: 'Естественно шикарная, уверенная', zh: '天生优雅、自信、精致' }
  },
  DE: {
    male: { en: 'Reliable, honest, deeply committed', ko: '신뢰할 수 있고 정직하며 헌신적', ja: '信頼でき正直で献身的', es: 'Confiable, honesto, comprometido', pt: 'Confiável, honesto, comprometido', ar: 'موثوق، صادق، ملتزم', ru: 'Надёжный, честный, преданный', zh: '可靠、诚实、深情' },
    female: { en: 'Straightforward, dependable, thoughtful', ko: '솔직하고 든든하며 사려깊음', ja: '率直で頼りになり思慮深い', es: 'Directa, confiable, considerada', pt: 'Direta, confiável, atenciosa', ar: 'صريحة، موثوقة، مراعية', ru: 'Прямая, надёжная, вдумчивая', zh: '直率、可靠、体贴' }
  },
  IT: {
    male: { en: 'Passionate, expressive, family-loving Latin heat', ko: '열정적이고 표현이 확실한 라틴 스타일', ja: '情熱的で表現豊かなラテン系', es: 'Apasionado, expresivo, calor latino', pt: 'Apaixonado, expressivo, calor latino', ar: 'شغوف، معبر، دفء لاتيني', ru: 'Страстный, выразительный, латинский темперамент', zh: '热情、表达力强、拉丁热情' },
    female: { en: 'Vibrant, expressive, deeply romantic', ko: '생기있고 표현이 풍부하며 로맨틱', ja: '生き生きとして表現豊か、ロマンチック', es: 'Vibrante, expresiva, romántica', pt: 'Vibrante, expressiva, romântica', ar: 'حيوية، معبرة، رومانسية', ru: 'Яркая, выразительная, романтичная', zh: '活力四射、表达丰富、浪漫' }
  },
  CA: {
    male: { en: 'Polite, respectful, gentle and thoughtful', ko: '예의바르고 존중심이 있으며 젠틀함', ja: '礼儀正しく、尊重的で優しい', es: 'Educado, respetuoso, gentil', pt: 'Educado, respeitoso, gentil', ar: 'مهذب، محترم، لطيف', ru: 'Вежливый, уважительный, добрый', zh: '有礼貌、尊重、温柔' },
    female: { en: 'Warm, respectful, easy-going', ko: '따뜻하고 존중심 있으며 편안함', ja: '温かく、尊重的で気楽', es: 'Cálida, respetuosa, tranquila', pt: 'Calorosa, respeitosa, tranquila', ar: 'دافئة، محترمة، هادئة', ru: 'Тёплая, уважительная, лёгкая', zh: '温暖、尊重、随和' }
  },
  AU: {
    male: { en: 'Laid-back, adventurous, fun-loving', ko: '느긋하고 모험적이며 재미있음', ja: 'のんびり、冒険的で楽しい', es: 'Relajado, aventurero, divertido', pt: 'Descontraído, aventureiro, divertido', ar: 'مسترخي، مغامر، مرح', ru: 'Расслабленный, авантюрный, весёлый', zh: '悠闲、冒险、有趣' },
    female: { en: 'Independent, cool, adventure-ready', ko: '독립적이고 쿨하며 모험을 즐김', ja: '独立的でクール、冒険好き', es: 'Independiente, cool, aventurera', pt: 'Independente, cool, aventureira', ar: 'مستقلة، رائعة، مغامرة', ru: 'Независимая, крутая, любит приключения', zh: '独立、酷、爱冒险' }
  },
  RU: {
    male: { en: 'Strong, serious, deeply loyal once committed', ko: '강인하고 진지하며 한번 사랑하면 깊이 헌신', ja: '強く真剣で、一度愛したら深く献身', es: 'Fuerte, serio, profundamente leal', pt: 'Forte, sério, profundamente leal', ar: 'قوي، جاد، مخلص بعمق', ru: 'Сильный, серьёзный, глубоко преданный', zh: '强壮、认真、深情忠诚' },
    female: { en: 'Elegant, strong-willed, deeply devoted', ko: '우아하고 강한 의지, 깊은 헌신', ja: '優雅で意志が強く、深く献身的', es: 'Elegante, decidida, devota', pt: 'Elegante, decidida, devotada', ar: 'أنيقة، قوية الإرادة، مخلصة', ru: 'Элегантная, волевая, преданная', zh: '优雅、意志坚强、深情' }
  },
  BR: {
    male: { en: 'Warm, expressive, dances through life', ko: '따뜻하고 표현이 확실하며 삶이 축제', ja: '温かく表現豊か、人生を踊るように', es: 'Cálido, expresivo, alegre', pt: 'Caloroso, expressivo, alegre', ar: 'دافئ، معبر، يعيش الحياة كرقصة', ru: 'Тёплый, выразительный, живёт танцуя', zh: '热情、表达丰富、生活如舞蹈' },
    female: { en: 'Passionate, joyful, expressive love', ko: '열정적이고 즐거우며 사랑을 확실히 표현', ja: '情熱的で楽しく、愛を確実に表現', es: 'Apasionada, alegre, expresiva', pt: 'Apaixonada, alegre, expressiva', ar: 'شغوفة، مبتهجة، معبرة', ru: 'Страстная, радостная, выразительная', zh: '热情、快乐、表达爱意' }
  },
  IN: {
    male: { en: 'Family-oriented, romantic Bollywood energy', ko: '가족 중심적이고 볼리우드 로맨스 감성', ja: '家族思い、ボリウッド的ロマンス', es: 'Familiar, energía romántica Bollywood', pt: 'Familiar, energia romântica Bollywood', ar: 'محب للعائلة، طاقة رومانسية بوليوود', ru: 'Семейный, романтика Болливуда', zh: '顾家、宝莱坞式浪漫' },
    female: { en: 'Devoted, family-loving, deeply caring', ko: '헌신적이고 가족을 사랑하며 깊이 배려', ja: '献身的で家族思い、深く思いやる', es: 'Devota, familiar, cuidadosa', pt: 'Devotada, familiar, cuidadosa', ar: 'مخلصة، عائلية، مراعية', ru: 'Преданная, семейная, заботливая', zh: '深情、顾家、体贴' }
  },
  MX: {
    male: { en: 'Passionate, family-first, joyful spirit', ko: '열정적이고 가족 우선이며 즐거운 성격', ja: '情熱的で家族優先、楽しい性格', es: 'Apasionado, familiar, alegre', pt: 'Apaixonado, familiar, alegre', ar: 'شغوف، عائلي، مرح', ru: 'Страстный, семейный, радостный', zh: '热情、以家庭为先、开朗' },
    female: { en: 'Warm, family-loving, deeply expressive', ko: '따뜻하고 가족을 사랑하며 표현이 풍부', ja: '温かく家族思い、表現豊か', es: 'Cálida, familiar, expresiva', pt: 'Calorosa, familiar, expressiva', ar: 'دافئة، عائلية، معبرة', ru: 'Тёплая, семейная, выразительная', zh: '温暖、爱家、表达丰富' }
  },
  ID: {
    male: { en: 'Warm, respectful, family-oriented', ko: '따뜻하고 존중심 있으며 가족 중심', ja: '温かく尊重的で家族思い', es: 'Cálido, respetuoso, familiar', pt: 'Caloroso, respeitoso, familiar', ar: 'دافئ، محترم، عائلي', ru: 'Тёплый, уважительный, семейный', zh: '温暖、尊重、顾家' },
    female: { en: 'Kind, patient, family-devoted', ko: '친절하고 인내심 있으며 가족에 헌신', ja: '親切で忍耐強く家族に献身', es: 'Amable, paciente, devota', pt: 'Gentil, paciente, devotada', ar: 'لطيفة، صبورة، مخلصة للعائلة', ru: 'Добрая, терпеливая, семейная', zh: '善良、耐心、以家庭为重' }
  },
  SA: {
    male: { en: 'Traditional, family-focused, protective', ko: '전통을 중시하고 가족 중심적이며 보호적', ja: '伝統的で家族中心、守護的', es: 'Tradicional, familiar, protector', pt: 'Tradicional, familiar, protetor', ar: 'تقليدي، عائلي، حامي', ru: 'Традиционный, семейный, защитник', zh: '传统、顾家、有保护欲' },
    female: { en: 'Elegant, family-devoted, deeply loyal', ko: '우아하고 가족 헌신적이며 충실함', ja: '優雅で家族に献身的、忠実', es: 'Elegante, familiar, leal', pt: 'Elegante, familiar, leal', ar: 'أنيقة، مخلصة للعائلة', ru: 'Элегантная, семейная, верная', zh: '优雅、以家庭为重、忠诚' }
  },
  TR: {
    male: { en: 'Warm, family-loving, hospitable and romantic', ko: '따뜻하고 가족을 사랑하며 정 많고 로맨틱', ja: '温かく家族思い、ホスピタブルでロマンチック', es: 'Cálido, familiar, hospitalario, romántico', pt: 'Caloroso, familiar, hospitaleiro, romântico', ar: 'دافئ، عائلي، مضياف، رومانسي', ru: 'Тёплый, семейный, гостеприимный', zh: '热情、爱家、好客、浪漫' },
    female: { en: 'Passionate, expressive, family-warm', ko: '열정적이고 표현이 확실하며 가족적', ja: '情熱的で表現豊か、家族的', es: 'Apasionada, expresiva, familiar', pt: 'Apaixonada, expressiva, familiar', ar: 'شغوفة، معبرة، عائلية', ru: 'Страстная, выразительная, семейная', zh: '热情、表达丰富、有家庭观' }
  },
  AR: {
    male: { en: 'Passionate, expressive, tango-hearted', ko: '열정적이고 표현이 확실한 탱고 스타일', ja: '情熱的で表現豊か、タンゴハート', es: 'Apasionado, expresivo, tanguero', pt: 'Apaixonado, expressivo, coração de tango', ar: 'شغوف، معبر، قلب التانغو', ru: 'Страстный, выразительный, танго в сердце', zh: '热情、表达丰富、探戈情怀' },
    female: { en: 'Passionate, expressive, deeply romantic', ko: '열정적이고 표현이 풍부하며 로맨틱', ja: '情熱的で表現豊か、ロマンチック', es: 'Apasionada, expresiva, romántica', pt: 'Apaixonada, expressiva, romântica', ar: 'شغوفة، معبرة، رومانسية', ru: 'Страстная, выразительная, романтичная', zh: '热情、表达丰富、浪漫' }
  },
  ZA: {
    male: { en: 'Adventurous, warm, easy-going', ko: '모험적이고 따뜻하며 편안한 성격', ja: '冒険的で温かく気楽', es: 'Aventurero, cálido, tranquilo', pt: 'Aventureiro, caloroso, tranquilo', ar: 'مغامر، دافئ، هادئ', ru: 'Авантюрный, тёплый, лёгкий', zh: '冒险、温暖、随和' },
    female: { en: 'Confident, warm, adventurous spirit', ko: '자신감 있고 따뜻하며 모험적', ja: '自信家、温かく冒険的', es: 'Segura, cálida, aventurera', pt: 'Segura, calorosa, aventureira', ar: 'واثقة، دافئة، مغامرة', ru: 'Уверенная, тёплая, авантюрная', zh: '自信、温暖、爱冒险' }
  },
  ES: {
    male: { en: 'Passionate, warm, family-loving fiesta spirit', ko: '열정적이고 따뜻하며 가족을 사랑하는 스타일', ja: '情熱的で温かく家族思い', es: 'Apasionado, cálido, familiar', pt: 'Apaixonado, caloroso, familiar', ar: 'شغوف، دافئ، عائلي', ru: 'Страстный, тёплый, семейный', zh: '热情、温暖、爱家' },
    female: { en: 'Vibrant, expressive, deeply passionate', ko: '생기있고 표현이 풍부하며 열정적', ja: '生き生きとして表現豊か、情熱的', es: 'Vibrante, expresiva, apasionada', pt: 'Vibrante, expressiva, apaixonada', ar: 'حيوية، معبرة، شغوفة', ru: 'Яркая, выразительная, страстная', zh: '活力四射、表达丰富、热情' }
  },
}
