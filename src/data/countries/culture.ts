// Dating culture info for each G20 country - 8-language multilingual
// Original content written for SEO and AdSense approval
// Each country: 800+ chars per language

import type { Locale } from '@/types'

type LocalizedText = Record<Locale, string>
type LocalizedList = Record<Locale, string[]>

export type CountryCulture = {
  code: string
  overview: LocalizedText
  datingStyle: LocalizedText
  courtship: LocalizedText
  redFlagsToWatch: LocalizedList
  greenFlags: LocalizedList
  culturalNotes: LocalizedText
  popularApps: string[]
  languageOfLove: LocalizedText
}

export const COUNTRY_CULTURE: Record<string, CountryCulture> = {
  KR: {
    code: 'KR',
    overview: {
      en: 'South Korea has one of the most communication-heavy dating cultures in the world. Constant contact (kakao/text throughout the day), symbolic anniversaries (22-day, 100-day, 200-day, 365-day couple milestones), and matching couple items are near-mandatory rituals.',
      ko: '한국은 세계에서 가장 소통 중심적인 연애 문화를 가진 나라 중 하나입니다. 하루 종일 이어지는 카톡/문자, 22일·100일·200일·365일 같은 상징적인 기념일, 커플템 맞추기는 거의 필수적인 의식입니다.',
      ja: '韓国は世界で最もコミュニケーション重視の恋愛文化を持つ国の一つです。一日中続くカカオトーク・メッセージ、22日・100日・200日・365日といった記念日、カップルアイテムを揃えることはほぼ必須の儀式です。',
      es: 'Corea del Sur tiene una de las culturas de citas más centradas en la comunicación del mundo. El contacto constante (KakaoTalk/mensajes durante todo el día), los aniversarios simbólicos (hitos de 22 días, 100 días, 200 días, 365 días) y los artículos de pareja a juego son rituales casi obligatorios.',
      pt: 'A Coreia do Sul tem uma das culturas de namoro mais centradas em comunicação do mundo. Contato constante (KakaoTalk/mensagens durante todo o dia), aniversários simbólicos (marcos de 22 dias, 100 dias, 200 dias, 365 dias) e itens de casal combinando são rituais quase obrigatórios.',
      ar: 'تمتلك كوريا الجنوبية واحدة من أكثر ثقافات المواعدة تركيزًا على التواصل في العالم. التواصل المستمر (كاكاو توك/الرسائل طوال اليوم)، والذكرى الرمزية (معالم 22 يومًا، 100 يوم، 200 يوم، 365 يومًا)، والعناصر المتطابقة للأزواج هي طقوس شبه إلزامية.',
      ru: 'Южная Корея имеет одну из самых коммуникационно-насыщенных культур свиданий в мире. Постоянный контакт (KakaoTalk/сообщения в течение дня), символические годовщины (22 дня, 100 дней, 200 дней, 365 дней) и парные предметы — почти обязательные ритуалы.',
      zh: '韩国拥有世界上最注重沟通的约会文化之一。整天不断的KakaoTalk/短信联系、象征性的纪念日(22天、100天、200天、365天的情侣里程碑)以及情侣配对物品几乎是必不可少的仪式。'
    },
    datingStyle: {
      en: 'Fast-paced, emotionally expressive, romantic gestures are expected — not seen as excessive. Confessions ("고백") mark the formal start of a relationship. Silent treatment or delayed replies are read as major red flags.',
      ko: '빠른 진행, 감정 표현이 풍부하며 로맨틱한 제스처가 당연시됩니다 — 과하다고 보지 않아요. "고백"이 관계의 공식적인 시작을 의미합니다. 무응답이나 답장 지연은 심각한 레드플래그로 읽힙니다.',
      ja: 'テンポが速く、感情表現が豊かで、ロマンチックな仕草が当然視されます — 過剰とは見なされません。「告白」が関係の正式な開始を意味します。無反応や返信の遅れは重大なレッドフラッグと読まれます。',
      es: 'Ritmo rápido, emocionalmente expresivo, los gestos románticos son esperados — no vistos como excesivos. Las confesiones ("고백") marcan el inicio formal de una relación. El silencio o las respuestas tardías se leen como grandes banderas rojas.',
      pt: 'Ritmo rápido, emocionalmente expressivo, gestos românticos são esperados — não vistos como excessivos. Confissões ("고백") marcam o início formal de um relacionamento. O silêncio ou respostas atrasadas são lidas como grandes bandeiras vermelhas.',
      ar: 'إيقاع سريع، معبر عاطفيًا، الإيماءات الرومانسية متوقعة — لا تعتبر مفرطة. الاعترافات ("고백") تشير إلى البداية الرسمية للعلاقة. الصمت أو الردود المتأخرة تُقرأ كأعلام حمراء كبرى.',
      ru: 'Быстрый темп, эмоциональная выразительность, романтические жесты ожидаемы — не считаются чрезмерными. Признания ("고백") знаменуют официальное начало отношений. Молчание или задержка ответов читаются как серьёзные тревожные сигналы.',
      zh: '节奏快,情感表达丰富,浪漫姿态是期待的——不被视为过度。告白("고백")标志着关系的正式开始。冷战或延迟回复被视为重大警告信号。'
    },
    courtship: {
      en: 'Traditional courtship still involves meeting the family early, gift-giving on White Day (March 14) and other calendar events. Dating apps are increasingly popular among younger generations, but blind dates ("소개팅") through friends remain common.',
      ko: '전통적인 구애는 여전히 가족을 일찍 만나는 것, 화이트데이(3월 14일) 등 달력상의 기념일에 선물을 주는 것을 포함합니다. 데이팅 앱이 젊은 세대에서 인기를 얻고 있지만, 친구를 통한 "소개팅"은 여전히 흔합니다.',
      ja: '伝統的な求愛は今でも家族に早く会うこと、ホワイトデー(3月14日)などの記念日に贈り物をすることを含みます。デーティングアプリは若い世代の間で人気が高まっていますが、友人を通じた「合コン」も依然として一般的です。',
      es: 'El cortejo tradicional aún implica conocer a la familia temprano, dar regalos en White Day (14 de marzo) y otros eventos del calendario. Las apps de citas son cada vez más populares entre las generaciones jóvenes, pero las citas a ciegas ("소개팅") a través de amigos siguen siendo comunes.',
      pt: 'O cortejo tradicional ainda envolve conhecer a família cedo, dar presentes no White Day (14 de março) e outros eventos do calendário. Aplicativos de namoro são cada vez mais populares entre as gerações mais jovens, mas encontros às cegas ("소개팅") através de amigos permanecem comuns.',
      ar: 'لا تزال المغازلة التقليدية تتضمن مقابلة العائلة مبكرًا، وتقديم الهدايا في يوم الأبيض (14 مارس) وأحداث تقويمية أخرى. تطبيقات المواعدة تزداد شعبيتها بين الأجيال الشابة، لكن المواعيد العمياء ("소개팅") عبر الأصدقاء لا تزال شائعة.',
      ru: 'Традиционное ухаживание всё ещё включает раннее знакомство с семьёй, подарки в Белый день (14 марта) и другие календарные события. Приложения для знакомств становятся всё популярнее среди молодого поколения, но свидания вслепую ("소개팅") через друзей остаются распространёнными.',
      zh: '传统求爱仍然包括早期见家人、在白色情人节(3月14日)和其他日历活动中送礼物。约会应用在年轻一代中越来越受欢迎,但通过朋友介绍的相亲("소개팅")仍然常见。'
    },
    redFlagsToWatch: {
      en: ['Ghosting or long reply gaps (24+ hours without explanation)', 'Reluctance to make it "official" past the 3-month mark', 'Missing anniversary observances (100-day milestones)', 'Refusing to meet friends or family', 'Excessive drinking during dates'],
      ko: ['잠수나 긴 답장 지연 (설명 없이 24시간 이상)', '3개월이 지나도 "공식화"를 꺼림', '기념일 챙기지 않음 (100일 등)', '친구나 가족 만나기를 거부', '데이트 중 과음'],
      ja: ['ゴースティングや長い返信の遅れ(説明なしで24時間以上)', '3ヶ月経っても「公式」化を躊躇する', '記念日を大切にしない(100日など)', '友人や家族に会うことを拒否', 'デート中の過度な飲酒'],
      es: ['Ghosting o largos intervalos de respuesta (más de 24 horas sin explicación)', 'Reticencia a hacerlo "oficial" después de los 3 meses', 'No celebrar aniversarios (hitos de 100 días)', 'Negarse a conocer amigos o familia', 'Beber en exceso durante las citas'],
      pt: ['Ghosting ou longos intervalos de resposta (mais de 24 horas sem explicação)', 'Relutância em tornar "oficial" após os 3 meses', 'Não celebrar aniversários (marcos de 100 dias)', 'Recusar-se a conhecer amigos ou família', 'Beber em excesso durante encontros'],
      ar: ['التجاهل أو فجوات طويلة في الردود (أكثر من 24 ساعة دون تفسير)', 'التردد في جعل العلاقة "رسمية" بعد 3 أشهر', 'عدم الاحتفال بالذكرى (معالم 100 يوم)', 'رفض مقابلة الأصدقاء أو العائلة', 'الإفراط في الشرب خلال المواعيد'],
      ru: ['Игнорирование или долгие паузы в ответах (24+ часа без объяснений)', 'Нежелание делать отношения "официальными" после 3 месяцев', 'Игнорирование годовщин (100-дневные вехи)', 'Отказ знакомиться с друзьями или семьёй', 'Чрезмерное употребление алкоголя на свиданиях'],
      zh: ['冷处理或长时间不回复(24小时以上无解释)', '过了3个月还不愿意"公开"关系', '不重视纪念日(100天等里程碑)', '拒绝见朋友或家人', '约会时过度饮酒']
    },
    greenFlags: {
      en: ['Frequent, thoughtful check-ins throughout the day', 'Remembering and celebrating small milestones', 'Taking couple photos as a public affirmation', 'Introducing you to their inner circle within 6 months', 'Being open about future plans (career, family, city)'],
      ko: ['하루 종일 자상하게 안부 챙기기', '작은 기념일도 기억하고 축하하기', '커플 사진을 공개적으로 올리기', '6개월 이내에 가까운 사람들에게 소개', '미래 계획(직업, 가족, 도시)에 대해 열린 대화'],
      ja: ['一日中細やかに気遣ってくれる', '小さな記念日も覚えて祝う', 'カップル写真を公開する', '6ヶ月以内に親しい人達に紹介', '将来計画(仕事、家族、住む場所)について率直に話す'],
      es: ['Mensajes frecuentes y considerados durante todo el día', 'Recordar y celebrar pequeños hitos', 'Tomar fotos de pareja como afirmación pública', 'Presentarte a su círculo íntimo dentro de 6 meses', 'Ser abierto sobre planes futuros (carrera, familia, ciudad)'],
      pt: ['Mensagens frequentes e atenciosas durante todo o dia', 'Lembrar e celebrar pequenos marcos', 'Tirar fotos de casal como afirmação pública', 'Apresentar você ao círculo íntimo em 6 meses', 'Ser aberto sobre planos futuros (carreira, família, cidade)'],
      ar: ['تواصل متكرر ومدروس طوال اليوم', 'تذكر والاحتفال بالمعالم الصغيرة', 'التقاط صور للثنائي كتأكيد علني', 'تقديمك لدائرته الداخلية خلال 6 أشهر', 'الانفتاح بشأن الخطط المستقبلية (المهنة، العائلة، المدينة)'],
      ru: ['Частые, внимательные проверки в течение дня', 'Помнит и празднует маленькие вехи', 'Делает совместные фото как публичное подтверждение', 'Знакомит с близким кругом в течение 6 месяцев', 'Открыт в разговорах о будущих планах (карьера, семья, город)'],
      zh: ['一整天频繁、贴心的问候', '记住并庆祝小小的里程碑', '拍情侣照作为公开确认', '6个月内介绍给亲密圈子', '对未来计划(职业、家庭、城市)开放']
    },
    culturalNotes: {
      en: 'Age gap etiquette is important; older partners are addressed with honorifics. Financial expectations differ by generation — younger Koreans increasingly favor 50/50 splits, while traditional norms lean toward the man paying.',
      ko: '나이 차이에 대한 예의가 중요하며, 연상의 파트너에게는 존댓말을 사용합니다. 재정적 기대는 세대별로 다릅니다 — 젊은 세대는 더치페이를 선호하는 반면, 전통적인 관습은 남자가 내는 쪽으로 기울어져 있습니다.',
      ja: '年齢差のエチケットは重要で、年上のパートナーには敬語を使います。金銭的期待は世代によって異なります — 若い韓国人は50/50の割り勘を好む傾向にありますが、伝統的な規範では男性が支払う傾向があります。',
      es: 'La etiqueta de diferencia de edad es importante; a las parejas mayores se les dirige con honoríficos. Las expectativas financieras difieren por generación — los coreanos más jóvenes cada vez favorecen más el 50/50, mientras que las normas tradicionales se inclinan hacia el hombre pagando.',
      pt: 'A etiqueta de diferença de idade é importante; parceiros mais velhos são tratados com honoríficos. Expectativas financeiras diferem por geração — coreanos mais jovens cada vez favorecem mais o 50/50, enquanto normas tradicionais se inclinam para o homem pagar.',
      ar: 'آداب فرق العمر مهمة؛ يُخاطب الشركاء الأكبر سنًا بألقاب تشريفية. تختلف التوقعات المالية حسب الجيل — الكوريون الأصغر سنًا يفضلون بشكل متزايد التقسيم 50/50، بينما تميل الأعراف التقليدية نحو دفع الرجل.',
      ru: 'Этикет возрастной разницы важен; к старшим партнёрам обращаются с уважительными формами. Финансовые ожидания различаются по поколениям — молодые корейцы всё больше предпочитают деление 50/50, тогда как традиционные нормы склоняются к тому, что платит мужчина.',
      zh: '年龄差礼仪很重要;对年长的伴侣要使用敬语。财务期望因世代而异——年轻的韩国人越来越喜欢AA制,而传统习俗倾向于男方买单。'
    },
    popularApps: ['Tinder', 'Amanda', 'Sky People', 'Glam', 'Wippy'],
    languageOfLove: {
      en: 'Words of affirmation + acts of service; frequent verbal reassurance ("사랑해") is expected.',
      ko: '말로 표현하기 + 행동으로 보여주기; 자주 "사랑해"라고 말해주는 것이 기대됩니다.',
      ja: '肯定の言葉 + 奉仕の行動;頻繁な言葉での安心感(「사랑해」)が期待されます。',
      es: 'Palabras de afirmación + actos de servicio; se espera reafirmación verbal frecuente ("사랑해").',
      pt: 'Palavras de afirmação + atos de serviço; reafirmação verbal frequente ("사랑해") é esperada.',
      ar: 'كلمات التأكيد + أعمال الخدمة؛ التطمين اللفظي المتكرر ("사랑해") متوقع.',
      ru: 'Слова подтверждения + акты служения; частые словесные заверения ("사랑해") ожидаются.',
      zh: '肯定的言语 + 服务行为;经常的口头保证("사랑해")是被期待的。'
    }
  },

  US: {
    code: 'US',
    overview: {
      en: 'American dating culture emphasizes individual choice, casual dating multiple people simultaneously (until "the talk" makes it exclusive), and communication is direct — sometimes bluntly so. There is a strong divide between casual "hookup culture" (common in cities and colleges) and more traditional relationship paths (more common in rural areas or religious communities).',
      ko: '미국 연애 문화는 개인의 선택, 여러 사람과 동시에 캐주얼하게 데이트하는 것("the talk"으로 배타적 관계가 되기 전까지), 그리고 직접적인 소통 — 때로는 노골적일 정도 — 을 강조합니다. 캐주얼한 "훅업 문화"(도시와 대학에서 흔함)와 더 전통적인 관계 경로(시골 지역이나 종교 공동체에서 흔함) 사이에 큰 차이가 있습니다.',
      ja: 'アメリカのデーティング文化は個人の選択、同時に複数の人とカジュアルにデートすること(「the talk」で排他的な関係になるまで)、そして直接的な — 時に無遠慮なほどの — コミュニケーションを重視します。カジュアルな「フックアップ文化」(都市や大学で一般的)と、より伝統的な関係のあり方(地方や宗教コミュニティで一般的)の間に強い分断があります。',
      es: 'La cultura de citas estadounidense enfatiza la elección individual, salir casualmente con múltiples personas simultáneamente (hasta que "the talk" lo haga exclusivo), y la comunicación es directa — a veces incluso brusca. Hay una fuerte división entre la "cultura del hookup" casual (común en ciudades y universidades) y caminos de relación más tradicionales (más comunes en áreas rurales o comunidades religiosas).',
      pt: 'A cultura de namoro americana enfatiza a escolha individual, namoros casuais com várias pessoas simultaneamente (até que "the talk" torne exclusivo), e a comunicação é direta — às vezes brutalmente. Há uma forte divisão entre a "cultura hookup" casual (comum em cidades e faculdades) e caminhos de relacionamento mais tradicionais (mais comuns em áreas rurais ou comunidades religiosas).',
      ar: 'تؤكد ثقافة المواعدة الأمريكية على الاختيار الفردي، والمواعدة العرضية مع عدة أشخاص في وقت واحد (حتى تجعلها "المحادثة" حصرية)، والتواصل المباشر — أحيانًا بشكل صريح. هناك انقسام قوي بين "ثقافة اللقاءات العابرة" (شائعة في المدن والكليات) ومسارات علاقات أكثر تقليدية (أكثر شيوعًا في المناطق الريفية أو المجتمعات الدينية).',
      ru: 'Американская культура свиданий подчёркивает индивидуальный выбор, случайные свидания с несколькими людьми одновременно (пока "разговор" не сделает отношения эксклюзивными), и общение прямое — иногда резко. Существует сильное разделение между случайной "культурой хукапа" (распространённой в городах и колледжах) и более традиционными путями отношений (более распространёнными в сельской местности или религиозных сообществах).',
      zh: '美国约会文化强调个人选择、同时与多人随意约会(直到"the talk"让关系变得排他),沟通直接——有时甚至是直言不讳。休闲的"约炮文化"(在城市和大学中常见)与更传统的关系路径(在农村地区或宗教社区更常见)之间存在明显分歧。'
    },
    datingStyle: {
      en: 'Direct communication is valued. Ghosting exists but is looked down upon. First dates often involve coffee, drinks, or dinner. Exclusivity is discussed explicitly rather than assumed.',
      ko: '직접적인 소통이 중요시됩니다. 잠수도 존재하지만 좋게 보지 않습니다. 첫 데이트는 주로 커피, 술, 또는 저녁 식사를 포함합니다. 배타성은 가정되기보다는 명시적으로 논의됩니다.',
      ja: '直接的なコミュニケーションが重視されます。ゴースティングは存在しますが、良く思われません。初デートはコーヒー、飲み物、または夕食が一般的です。排他性は仮定されるのではなく、明確に話し合われます。',
      es: 'Se valora la comunicación directa. El ghosting existe pero está mal visto. Las primeras citas suelen involucrar café, tragos o cena. La exclusividad se discute explícitamente en lugar de asumirse.',
      pt: 'A comunicação direta é valorizada. Ghosting existe mas é mal visto. Primeiros encontros geralmente envolvem café, drinks ou jantar. Exclusividade é discutida explicitamente em vez de assumida.',
      ar: 'التواصل المباشر مُقدَّر. التجاهل موجود لكنه مذموم. المواعيد الأولى غالبًا ما تتضمن القهوة أو المشروبات أو العشاء. تُناقش الحصرية بشكل صريح بدلاً من افتراضها.',
      ru: 'Прямое общение ценится. Игнорирование существует, но осуждается. Первые свидания часто включают кофе, напитки или ужин. Эксклюзивность обсуждается явно, а не подразумевается.',
      zh: '重视直接沟通。冷处理存在但被鄙视。初次约会通常涉及咖啡、饮料或晚餐。排他性是明确讨论而不是默认假设。'
    },
    courtship: {
      en: 'Independent from family involvement — meeting parents usually happens after 3-6 months. Splitting the bill is common, though the person who invited often pays. Dating apps dominate urban dating (Tinder, Hinge, Bumble).',
      ko: '가족의 관여로부터 독립적입니다 — 부모님을 만나는 것은 보통 3-6개월 후에 이루어집니다. 더치페이가 흔하지만, 초대한 쪽이 내는 경우가 많습니다. 데이팅 앱이 도시 연애를 지배합니다 (Tinder, Hinge, Bumble).',
      ja: '家族の関与から独立しています — 両親に会うのは通常3〜6ヶ月後です。割り勘は一般的ですが、招待した人が支払うことが多いです。デーティングアプリが都市部の恋愛を支配しています(Tinder、Hinge、Bumble)。',
      es: 'Independiente de la participación familiar — conocer a los padres suele ocurrir después de 3-6 meses. Dividir la cuenta es común, aunque quien invita a menudo paga. Las apps de citas dominan las citas urbanas (Tinder, Hinge, Bumble).',
      pt: 'Independente do envolvimento familiar — conhecer os pais geralmente acontece após 3-6 meses. Dividir a conta é comum, embora quem convidou frequentemente pague. Apps de namoro dominam encontros urbanos (Tinder, Hinge, Bumble).',
      ar: 'مستقلة عن مشاركة العائلة — عادةً ما تحدث مقابلة الوالدين بعد 3-6 أشهر. تقسيم الفاتورة شائع، على الرغم من أن الشخص الذي دعا غالبًا ما يدفع. تهيمن تطبيقات المواعدة على المواعدة الحضرية (Tinder, Hinge, Bumble).',
      ru: 'Независимо от участия семьи — знакомство с родителями обычно происходит через 3-6 месяцев. Разделение счёта распространено, хотя приглашающий часто платит. Приложения для знакомств доминируют в городских свиданиях (Tinder, Hinge, Bumble).',
      zh: '独立于家庭参与——见父母通常在3-6个月后。AA制很常见,尽管邀请者通常付款。约会应用主导城市约会(Tinder、Hinge、Bumble)。'
    },
    redFlagsToWatch: {
      en: ['Love-bombing (excessive attention early on)', 'Refusing to define the relationship (situationships)', 'Talking about exes constantly', 'Financial pressure or vagueness about employment', 'Isolating you from friends or hobbies'],
      ko: ['러브바밍(초기부터 과도한 관심)', '관계 정의를 거부(썸만 계속)', '전 연인 얘기를 계속함', '재정적 압박이나 직업에 대한 모호함', '친구나 취미로부터 격리시킴'],
      ja: ['ラブボミング(初期からの過度な注目)', '関係を定義することを拒む(シチュエーションシップ)', '元恋人の話を頻繁にする', '経済的圧力や雇用状況の曖昧さ', 'あなたを友人や趣味から孤立させる'],
      es: ['Love-bombing (atención excesiva al principio)', 'Negarse a definir la relación (situationships)', 'Hablar constantemente de ex parejas', 'Presión financiera o vaguedad sobre el empleo', 'Aislarte de amigos o pasatiempos'],
      pt: ['Love-bombing (atenção excessiva no início)', 'Recusar-se a definir o relacionamento (situationships)', 'Falar constantemente sobre ex-parceiros', 'Pressão financeira ou vaguidão sobre emprego', 'Isolá-lo de amigos ou hobbies'],
      ar: ['قصف الحب (اهتمام مفرط في وقت مبكر)', 'رفض تحديد العلاقة (علاقات غير محددة)', 'التحدث باستمرار عن العلاقات السابقة', 'الضغط المالي أو الغموض بشأن العمل', 'عزلك عن الأصدقاء أو الهوايات'],
      ru: ['Лав-бомбинг (чрезмерное внимание в начале)', 'Отказ определять отношения (ситуационные отношения)', 'Постоянные разговоры о бывших', 'Финансовое давление или неясность о работе', 'Изоляция от друзей или хобби'],
      zh: ['爱情轰炸(初期过度关注)', '拒绝定义关系(暧昧关系)', '不断谈论前任', '经济压力或就业情况含糊', '让你与朋友或爱好隔离']
    },
    greenFlags: {
      en: ['Open communication about expectations', 'Respect for your independence', 'Actively integrating you into their life gradually', 'Consistency between words and actions', 'Comfort with disagreement without escalation'],
      ko: ['기대에 대한 열린 소통', '당신의 독립성 존중', '점진적으로 당신을 자신의 삶에 적극적으로 통합', '말과 행동의 일관성', '갈등 없이 의견 차이를 편안하게 다룸'],
      ja: ['期待についてのオープンなコミュニケーション', 'あなたの独立性への尊重', 'あなたを徐々に自分の生活に積極的に統合', '言葉と行動の一貫性', 'エスカレートせずに意見の相違を受け入れる'],
      es: ['Comunicación abierta sobre expectativas', 'Respeto por tu independencia', 'Integrarte activamente en su vida gradualmente', 'Consistencia entre palabras y acciones', 'Comodidad con desacuerdos sin escalar'],
      pt: ['Comunicação aberta sobre expectativas', 'Respeito pela sua independência', 'Integrá-lo ativamente em sua vida gradualmente', 'Consistência entre palavras e ações', 'Conforto com discordâncias sem escalar'],
      ar: ['التواصل المفتوح حول التوقعات', 'احترام استقلاليتك', 'دمجك بنشاط في حياته تدريجيًا', 'الاتساق بين الأقوال والأفعال', 'الراحة مع الاختلاف دون تصعيد'],
      ru: ['Открытое общение об ожиданиях', 'Уважение вашей независимости', 'Активное постепенное включение вас в свою жизнь', 'Соответствие слов и действий', 'Комфорт с несогласием без эскалации'],
      zh: ['关于期望的开放沟通', '尊重你的独立性', '逐步积极地将你融入他们的生活', '言行一致', '不升级的分歧中感到自在']
    },
    culturalNotes: {
      en: 'Regional differences are large: NYC/LA dating culture is app-driven and fast; the South and Midwest lean traditional. Politics has become a major dating filter since 2016.',
      ko: '지역별 차이가 큽니다: 뉴욕/LA의 연애 문화는 앱 중심적이고 빠릅니다; 남부와 중서부는 전통적인 경향이 있습니다. 2016년 이후 정치는 주요 데이팅 필터가 되었습니다.',
      ja: '地域による違いが大きいです:NYC/LAのデーティング文化はアプリ主導で速いです;南部と中西部は伝統的な傾向があります。2016年以降、政治は主要なデーティングフィルターになりました。',
      es: 'Las diferencias regionales son grandes: la cultura de citas de NYC/LA es impulsada por apps y rápida; el Sur y el Medio Oeste tienden a lo tradicional. La política se ha convertido en un filtro de citas importante desde 2016.',
      pt: 'As diferenças regionais são grandes: a cultura de namoro de NYC/LA é impulsionada por apps e rápida; o Sul e o Meio-Oeste tendem ao tradicional. A política se tornou um filtro de namoro importante desde 2016.',
      ar: 'الاختلافات الإقليمية كبيرة: ثقافة المواعدة في نيويورك/لوس أنجلوس مدفوعة بالتطبيقات وسريعة؛ الجنوب والغرب الأوسط يميلان إلى التقليدية. أصبحت السياسة مرشحًا رئيسيًا للمواعدة منذ 2016.',
      ru: 'Региональные различия велики: культура свиданий в Нью-Йорке/Лос-Анджелесе управляется приложениями и быстрая; Юг и Средний Запад склоняются к традиционности. Политика стала главным фильтром знакомств с 2016 года.',
      zh: '地区差异很大:纽约/洛杉矶的约会文化以应用为主导且节奏快;南部和中西部倾向传统。自2016年以来,政治已成为主要的约会过滤器。'
    },
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'Match.com', 'The League'],
    languageOfLove: {
      en: 'Quality time + words of affirmation; explicit compliments matter.',
      ko: '함께하는 시간 + 말로 표현하기; 명시적인 칭찬이 중요합니다.',
      ja: '一緒に過ごす時間 + 肯定の言葉;明確な褒め言葉が重要です。',
      es: 'Tiempo de calidad + palabras de afirmación; los cumplidos explícitos importan.',
      pt: 'Tempo de qualidade + palavras de afirmação; elogios explícitos importam.',
      ar: 'الوقت النوعي + كلمات التأكيد؛ المجاملات الصريحة مهمة.',
      ru: 'Качественное время + слова подтверждения; явные комплименты важны.',
      zh: '优质时间 + 肯定的言语;明确的赞美很重要。'
    }
  },

  JP: {
    code: 'JP',
    overview: {
      en: 'Japanese dating culture emphasizes subtlety, restraint, and reading the atmosphere ("空気を読む"). Confessions ("告白") are the formal start of a relationship. Public displays of affection are minimal, but private commitment can be deeply intense.',
      ko: '일본 연애 문화는 미묘함, 절제, 그리고 분위기 읽기("空気を読む")를 강조합니다. "고백(告白)"이 관계의 공식적인 시작입니다. 공개적인 애정 표현은 최소한이지만, 사적인 헌신은 깊이 강렬할 수 있습니다.',
      ja: '日本のデーティング文化は繊細さ、節度、そして「空気を読む」ことを重視します。「告白」が関係の正式な始まりです。公共の場での愛情表現は控えめですが、個人的なコミットメントは深く強烈になり得ます。',
      es: 'La cultura de citas japonesa enfatiza la sutileza, la moderación y leer el ambiente ("空気を読む"). Las confesiones ("告白") son el inicio formal de una relación. Las muestras públicas de afecto son mínimas, pero el compromiso privado puede ser profundamente intenso.',
      pt: 'A cultura de namoro japonesa enfatiza sutileza, contenção e ler o ambiente ("空気を読む"). Confissões ("告白") são o início formal de um relacionamento. Demonstrações públicas de afeto são mínimas, mas o compromisso privado pode ser profundamente intenso.',
      ar: 'تؤكد ثقافة المواعدة اليابانية على الدقة والتحفظ وقراءة الأجواء ("空気を読む"). الاعترافات ("告白") هي البداية الرسمية للعلاقة. مظاهر المودة العلنية محدودة، لكن الالتزام الخاص يمكن أن يكون شديدًا للغاية.',
      ru: 'Японская культура свиданий подчёркивает тонкость, сдержанность и умение "читать атмосферу" ("空気を読む"). Признания ("告白") — формальное начало отношений. Публичные проявления привязанности минимальны, но частная приверженность может быть глубоко интенсивной.',
      zh: '日本约会文化强调微妙、克制和"察言观色"("空気を読む")。告白("告白")是关系正式的开始。公开的情感表达很少,但私下的承诺可以非常强烈。'
    },
    datingStyle: {
      en: 'Reserved in early stages, gradually opening up. Group dates ("合コン") are traditional. Marriage-oriented dating ("お見合い" / marriage introduction agencies) remains popular alongside apps.',
      ko: '초기에는 절제되어 있고, 점차 마음을 엽니다. 단체 데이트("合コン")가 전통적입니다. 결혼 지향적 데이트("お見合い" / 결혼 소개 기관)가 앱과 함께 여전히 인기입니다.',
      ja: '初期段階では控えめで、徐々に心を開いていきます。グループデート(「合コン」)が伝統的です。結婚志向のデーティング(「お見合い」/結婚紹介所)がアプリと共に依然として人気です。',
      es: 'Reservados en las primeras etapas, se abren gradualmente. Las citas grupales ("合コン") son tradicionales. Las citas orientadas al matrimonio ("お見合い" / agencias de presentación matrimonial) siguen siendo populares junto con las apps.',
      pt: 'Reservados nas primeiras fases, abrindo-se gradualmente. Encontros em grupo ("合コン") são tradicionais. Namoro orientado ao casamento ("お見合い" / agências de apresentação matrimonial) permanece popular junto com apps.',
      ar: 'متحفظون في المراحل الأولى، ويتفتحون تدريجيًا. المواعيد الجماعية ("合コン") تقليدية. المواعدة الموجهة نحو الزواج ("お見合い" / وكالات التعارف الزواجي) لا تزال شائعة إلى جانب التطبيقات.',
      ru: 'Сдержанные на ранних этапах, постепенно раскрываются. Групповые свидания ("合コン") традиционны. Свидания, ориентированные на брак ("お見合い" / брачные агентства), остаются популярными наряду с приложениями.',
      zh: '初期阶段矜持,逐渐敞开心扉。团体约会("合コン")是传统。以婚姻为导向的约会("お見合い"/婚介机构)与应用一起仍然流行。'
    },
    courtship: {
      en: 'Slow, deliberate, with clear stages. Gift-giving on White Day, Valentine\'s Day (women give men), and Christmas Eve (a couple\'s holiday in Japan) is very important.',
      ko: '느리고, 신중하며, 명확한 단계가 있습니다. 화이트데이, 발렌타인데이(여성이 남성에게 줌), 크리스마스 이브(일본에서 커플 명절)에 선물을 주는 것이 매우 중요합니다.',
      ja: 'ゆっくりと、慎重に、明確な段階を経ます。ホワイトデー、バレンタインデー(女性から男性へ)、クリスマスイブ(日本ではカップルの祝日)の贈り物は非常に重要です。',
      es: 'Lento, deliberado, con etapas claras. Dar regalos en White Day, San Valentín (las mujeres dan a los hombres) y Nochebuena (un feriado de parejas en Japón) es muy importante.',
      pt: 'Lento, deliberado, com etapas claras. Dar presentes no White Day, Dia dos Namorados (mulheres dão aos homens) e Véspera de Natal (um feriado de casais no Japão) é muito importante.',
      ar: 'بطيء ومتعمد وبمراحل واضحة. تقديم الهدايا في يوم الأبيض وعيد الحب (النساء يقدمن للرجال) وليلة عيد الميلاد (عطلة للأزواج في اليابان) مهم جدًا.',
      ru: 'Медленно, обдуманно, с чёткими этапами. Подарки в Белый день, День святого Валентина (женщины дарят мужчинам) и Сочельник (парный праздник в Японии) очень важны.',
      zh: '缓慢、深思熟虑,阶段清晰。在白色情人节、情人节(女性送男性)和平安夜(日本的情侣节日)送礼非常重要。'
    },
    redFlagsToWatch: {
      en: ['Refusing to confess ("kokuhaku") after months of dating', 'Not introducing you to friends after 6+ months', 'Being overly image-conscious in public', 'Silence instead of conflict resolution', 'Very controlling schedule expectations'],
      ko: ['몇 달간 데이트 후에도 "고백(kokuhaku)"을 거부', '6개월 이상 지나도 친구들에게 소개하지 않음', '공공장소에서 지나치게 이미지를 신경씀', '갈등 해결 대신 침묵', '매우 통제적인 스케줄 기대'],
      ja: ['数ヶ月デートした後も「告白」を拒む', '6ヶ月以上経っても友人に紹介しない', '公の場で過度に体裁を気にする', '衝突解決の代わりに沈黙', '非常に支配的なスケジュール期待'],
      es: ['Negarse a confesar ("kokuhaku") después de meses de citas', 'No presentarte a los amigos después de 6+ meses', 'Ser excesivamente consciente de la imagen en público', 'Silencio en lugar de resolución de conflictos', 'Expectativas de horario muy controladoras'],
      pt: ['Recusar-se a confessar ("kokuhaku") após meses de namoro', 'Não apresentá-lo aos amigos após 6+ meses', 'Ser excessivamente consciente da imagem em público', 'Silêncio em vez de resolução de conflitos', 'Expectativas de agenda muito controladoras'],
      ar: ['رفض الاعتراف ("kokuhaku") بعد أشهر من المواعدة', 'عدم تقديمك للأصدقاء بعد أكثر من 6 أشهر', 'الوعي المفرط بالمظهر في الأماكن العامة', 'الصمت بدلاً من حل النزاعات', 'توقعات جدول زمني تحكمية للغاية'],
      ru: ['Отказ от "告白" после месяцев свиданий', 'Не знакомит с друзьями после 6+ месяцев', 'Чрезмерная забота о внешнем образе на публике', 'Молчание вместо разрешения конфликтов', 'Очень контролирующие ожидания по расписанию'],
      zh: ['约会几个月后仍拒绝告白("kokuhaku")', '6个月以上不介绍朋友', '在公共场合过度注重形象', '用沉默代替冲突解决', '对日程有很强的控制期望']
    },
    greenFlags: {
      en: ['Thoughtful small gestures (omiyage souvenirs)', 'Remembering details you\'ve casually mentioned', 'Balancing group and one-on-one time', 'Being transparent about family expectations', 'Following through on small commitments consistently'],
      ko: ['자상한 작은 제스처(오미야게 기념품)', '무심코 언급한 세부 사항을 기억함', '단체 시간과 일대일 시간의 균형', '가족의 기대에 대해 투명함', '작은 약속도 일관되게 지킴'],
      ja: ['心のこもった小さな仕草(おみやげ)', 'あなたが何気なく言った細部を覚えている', 'グループと一対一の時間のバランス', '家族の期待について透明性がある', '小さな約束を一貫して守る'],
      es: ['Gestos pequeños y considerados (omiyage recuerdos)', 'Recordar detalles que has mencionado casualmente', 'Equilibrar tiempo grupal e individual', 'Ser transparente sobre las expectativas familiares', 'Cumplir consistentemente pequeños compromisos'],
      pt: ['Gestos pequenos e atenciosos (omiyage lembranças)', 'Lembrar detalhes que você mencionou casualmente', 'Equilibrar tempo em grupo e a sós', 'Ser transparente sobre expectativas familiares', 'Cumprir consistentemente pequenos compromissos'],
      ar: ['إيماءات صغيرة مدروسة (تذكارات أوميياغي)', 'تذكر التفاصيل التي ذكرتها بشكل عابر', 'التوازن بين الوقت الجماعي والفردي', 'الشفافية بشأن توقعات العائلة', 'الالتزام باستمرار بالوعود الصغيرة'],
      ru: ['Продуманные мелкие жесты (сувениры omiyage)', 'Помнит детали, которые вы небрежно упомянули', 'Баланс времени в группе и наедине', 'Прозрачность в отношении семейных ожиданий', 'Последовательно выполняет мелкие обязательства'],
      zh: ['贴心的小举动(omiyage纪念品)', '记住你随意提到的细节', '平衡群体和一对一时间', '对家庭期望保持透明', '一贯履行小承诺']
    },
    culturalNotes: {
      en: 'Long working hours make dating challenging; couples often meet in the evening after 8pm. "Herbivore men" (soshoku danshi) — men uninterested in traditional courtship — is a real cultural phenomenon.',
      ko: '긴 근무 시간이 데이트를 어렵게 만듭니다; 커플들은 종종 저녁 8시 이후에 만납니다. "초식남(草食男子)" — 전통적인 구애에 관심 없는 남성 — 은 실제 문화 현상입니다.',
      ja: '長時間労働がデーティングを困難にしています;カップルは午後8時以降の夕方に会うことが多いです。「草食男子」— 伝統的な求愛に興味のない男性 — は実際の文化現象です。',
      es: 'Las largas jornadas laborales hacen difíciles las citas; las parejas suelen encontrarse por la noche después de las 8pm. Los "hombres herbívoros" (soshoku danshi) — hombres desinteresados en el cortejo tradicional — es un fenómeno cultural real.',
      pt: 'As longas jornadas de trabalho tornam o namoro desafiador; casais frequentemente se encontram à noite após as 20h. "Homens herbívoros" (soshoku danshi) — homens desinteressados em cortejo tradicional — é um fenômeno cultural real.',
      ar: 'ساعات العمل الطويلة تجعل المواعدة صعبة؛ يلتقي الأزواج غالبًا في المساء بعد الساعة 8 مساءً. "الرجال العشبيون" (soshoku danshi) — الرجال غير المهتمين بالمغازلة التقليدية — ظاهرة ثقافية حقيقية.',
      ru: 'Долгий рабочий день делает свидания сложными; пары часто встречаются вечером после 20:00. "Мужчины-травоядные" (soshoku danshi) — мужчины, не заинтересованные в традиционном ухаживании — реальное культурное явление.',
      zh: '长时间工作使约会具有挑战性;情侣通常在晚上8点后见面。"草食男"(soshoku danshi)——对传统求爱不感兴趣的男性——是真实的文化现象。'
    },
    popularApps: ['Pairs', 'Tapple', 'Omiai', 'Tinder', 'Bumble'],
    languageOfLove: {
      en: 'Acts of service + gifts; expression is subtle but consistent.',
      ko: '행동으로 보여주기 + 선물; 표현은 미묘하지만 일관적입니다.',
      ja: '奉仕の行動 + 贈り物;表現は繊細だが一貫している。',
      es: 'Actos de servicio + regalos; la expresión es sutil pero consistente.',
      pt: 'Atos de serviço + presentes; a expressão é sutil mas consistente.',
      ar: 'أعمال الخدمة + الهدايا؛ التعبير خفي لكنه ثابت.',
      ru: 'Акты служения + подарки; выражение тонкое, но последовательное.',
      zh: '服务行为 + 礼物;表达微妙但一致。'
    }
  },

  CN: {
    code: 'CN',
    overview: {
      en: 'Chinese dating culture is family-centric and increasingly practical. Financial stability, home ownership, and family approval are widely discussed factors. However, urban youth in Tier 1 cities (Shanghai, Beijing, Shenzhen) are shifting rapidly toward Western-style casual dating.',
      ko: '중국 연애 문화는 가족 중심적이며 점점 실용적으로 변하고 있습니다. 재정적 안정, 주택 소유, 가족의 승인이 널리 논의되는 요인입니다. 그러나 1선 도시(상하이, 베이징, 선전)의 도시 청년들은 서구식 캐주얼 데이트로 빠르게 이동하고 있습니다.',
      ja: '中国のデーティング文化は家族中心で、ますます実用的になっています。経済的安定、住宅所有、家族の承認が広く議論される要因です。しかし、一線都市(上海、北京、深セン)の都市部の若者は、西洋式のカジュアルなデーティングへと急速に移行しています。',
      es: 'La cultura de citas china es centrada en la familia y cada vez más práctica. La estabilidad financiera, la propiedad de una vivienda y la aprobación familiar son factores ampliamente discutidos. Sin embargo, los jóvenes urbanos en ciudades de primer nivel (Shanghái, Pekín, Shenzhen) están cambiando rápidamente hacia citas casuales al estilo occidental.',
      pt: 'A cultura de namoro chinesa é centrada na família e cada vez mais prática. Estabilidade financeira, propriedade de casa e aprovação familiar são fatores amplamente discutidos. No entanto, jovens urbanos em cidades de Tier 1 (Xangai, Pequim, Shenzhen) estão mudando rapidamente para namoro casual ao estilo ocidental.',
      ar: 'ثقافة المواعدة الصينية تركز على العائلة وأصبحت أكثر عملية. الاستقرار المالي، وامتلاك المنزل، وموافقة العائلة عوامل تُناقش على نطاق واسع. ومع ذلك، فإن الشباب الحضريين في مدن الفئة الأولى (شنغهاي، بكين، شنتشن) يتحولون بسرعة نحو المواعدة العرضية على الطراز الغربي.',
      ru: 'Китайская культура свиданий ориентирована на семью и всё более практична. Финансовая стабильность, владение жильём и одобрение семьи широко обсуждаемые факторы. Однако городская молодёжь в городах первого уровня (Шанхай, Пекин, Шэньчжэнь) быстро переходит к казуальным свиданиям в западном стиле.',
      zh: '中国约会文化以家庭为中心且日益务实。财务稳定、房产所有权和家庭认可是广泛讨论的因素。然而,一线城市(上海、北京、深圳)的城市青年正迅速转向西式休闲约会。'
    },
    datingStyle: {
      en: 'Direct in intent but often mediated by family. "Marriage markets" in city parks (where parents literally advertise their children) still exist. QQ, WeChat, and Douyin (TikTok) are common ways to meet.',
      ko: '의도는 직접적이지만 종종 가족을 통해 중재됩니다. 도시 공원의 "결혼 시장"(부모가 말 그대로 자녀를 광고하는 곳)이 아직 존재합니다. QQ, 위챗, 더우인(틱톡)이 만남의 흔한 방법입니다.',
      ja: '意図は直接的ですが、しばしば家族を通じて仲介されます。都市の公園にある「結婚市場」(親が文字通り子供を広告する場所)はまだ存在します。QQ、WeChat、Douyin(TikTok)は出会いの一般的な方法です。',
      es: 'Directo en intención pero a menudo mediado por la familia. Los "mercados matrimoniales" en parques de la ciudad (donde los padres literalmente anuncian a sus hijos) aún existen. QQ, WeChat y Douyin (TikTok) son formas comunes de conocerse.',
      pt: 'Direto em intenção mas frequentemente mediado pela família. "Mercados matrimoniais" em parques da cidade (onde pais literalmente anunciam seus filhos) ainda existem. QQ, WeChat e Douyin (TikTok) são formas comuns de conhecer alguém.',
      ar: 'مباشر في النية لكنه غالبًا ما يتم بوساطة العائلة. لا تزال "أسواق الزواج" في حدائق المدن (حيث يعلن الآباء حرفيًا عن أبنائهم) موجودة. QQ و WeChat و Douyin (TikTok) طرق شائعة للتعارف.',
      ru: 'Прямые в намерениях, но часто с посредничеством семьи. "Брачные рынки" в городских парках (где родители буквально рекламируют своих детей) всё ещё существуют. QQ, WeChat и Douyin (TikTok) — распространённые способы знакомства.',
      zh: '意图直接但通常由家庭调解。城市公园中的"婚姻市场"(父母字面上为子女做广告)仍然存在。QQ、微信和抖音(TikTok)是常见的相识方式。'
    },
    courtship: {
      en: 'Meeting parents happens early once things are serious. Financial security is discussed openly. Gift-giving during Chinese New Year and major holidays is important.',
      ko: '진지해지면 부모님을 일찍 만납니다. 재정적 안정성은 공개적으로 논의됩니다. 춘절과 주요 명절에 선물 주기가 중요합니다.',
      ja: '真剣になると両親に早く会います。経済的安定について率直に話し合います。旧正月や主要な祝日での贈り物が重要です。',
      es: 'Conocer a los padres ocurre temprano una vez que las cosas se ponen serias. La seguridad financiera se discute abiertamente. Dar regalos durante el Año Nuevo Chino y los feriados importantes es importante.',
      pt: 'Conhecer os pais acontece cedo quando as coisas ficam sérias. Segurança financeira é discutida abertamente. Dar presentes durante o Ano Novo Chinês e feriados importantes é importante.',
      ar: 'مقابلة الوالدين تحدث مبكرًا بمجرد أن تصبح الأمور جدية. تُناقش الأمن المالي بصراحة. تقديم الهدايا خلال السنة الصينية الجديدة والعطلات الرئيسية مهم.',
      ru: 'Знакомство с родителями происходит рано, когда всё становится серьёзным. Финансовая безопасность обсуждается открыто. Подарки во время китайского Нового года и главных праздников важны.',
      zh: '一旦关系认真,很早就会见父母。财务安全被公开讨论。春节和重要节日的送礼很重要。'
    },
    redFlagsToWatch: {
      en: ['Vagueness about job, income, or housing situation', 'Not introducing you to family after 6 months', 'Living entirely separate from your circle', 'Not celebrating major couple milestones (520 day, Qixi festival)', 'Excessive gaming or online activity avoidance'],
      ko: ['직업, 수입, 주거 상황에 대한 모호함', '6개월 후에도 가족에게 소개하지 않음', '당신의 서클과 완전히 별개로 생활', '주요 커플 기념일(520일, 칠석)을 축하하지 않음', '과도한 게임이나 온라인 활동 회피'],
      ja: ['仕事、収入、住居状況について曖昧', '6ヶ月経っても家族に紹介しない', 'あなたのサークルと完全に別々に生活', '主要なカップルの記念日(520の日、七夕祭)を祝わない', '過度なゲームやオンライン活動の回避'],
      es: ['Vaguedad sobre trabajo, ingresos o situación de vivienda', 'No presentarte a la familia después de 6 meses', 'Vivir completamente separado de tu círculo', 'No celebrar hitos de pareja importantes (día 520, festival Qixi)', 'Juegos excesivos o evasión de actividades en línea'],
      pt: ['Vaguidão sobre trabalho, renda ou situação de moradia', 'Não apresentá-lo à família após 6 meses', 'Viver completamente separado do seu círculo', 'Não celebrar marcos importantes de casal (dia 520, festival Qixi)', 'Jogos excessivos ou evasão de atividades online'],
      ar: ['الغموض بشأن العمل أو الدخل أو الوضع السكني', 'عدم تقديمك للعائلة بعد 6 أشهر', 'العيش منفصلاً تمامًا عن دائرتك', 'عدم الاحتفال بالمعالم الرئيسية للثنائي (يوم 520، مهرجان تشي شي)', 'الألعاب المفرطة أو تجنب النشاط عبر الإنترنت'],
      ru: ['Неясность в отношении работы, дохода или жилищной ситуации', 'Не знакомит с семьёй через 6 месяцев', 'Живёт полностью отдельно от вашего круга', 'Не отмечает важные парные вехи (день 520, фестиваль Цисицзе)', 'Чрезмерные игры или избегание онлайн-активности'],
      zh: ['对工作、收入或住房情况含糊其辞', '6个月后不介绍给家人', '完全脱离你的圈子生活', '不庆祝重要的情侣里程碑(520日、七夕节)', '过度游戏或回避在线活动']
    },
    greenFlags: {
      en: ['Openness about long-term plans (city, career, family)', 'Introducing you to close friends and family', 'Consistent thoughtful gestures (small gifts, red envelopes)', 'Investment in shared future planning', 'Respect for both families'],
      ko: ['장기 계획에 대한 개방성(도시, 직업, 가족)', '가까운 친구와 가족에게 소개', '일관된 자상한 제스처(작은 선물, 홍바오)', '공유된 미래 계획에 대한 투자', '양가 가족에 대한 존중'],
      ja: ['長期計画についてオープン(街、キャリア、家族)', '親しい友人や家族に紹介', '一貫した心のこもった仕草(小さな贈り物、紅包)', '共有された将来計画への投資', '両家族への尊重'],
      es: ['Apertura sobre planes a largo plazo (ciudad, carrera, familia)', 'Presentarte a amigos cercanos y familia', 'Gestos considerados y consistentes (pequeños regalos, sobres rojos)', 'Inversión en planificación futura compartida', 'Respeto por ambas familias'],
      pt: ['Abertura sobre planos de longo prazo (cidade, carreira, família)', 'Apresentá-lo a amigos próximos e família', 'Gestos atenciosos consistentes (pequenos presentes, envelopes vermelhos)', 'Investimento no planejamento futuro compartilhado', 'Respeito por ambas as famílias'],
      ar: ['الانفتاح بشأن الخطط طويلة الأجل (المدينة، المهنة، العائلة)', 'تقديمك للأصدقاء المقربين والعائلة', 'إيماءات مدروسة ومتسقة (هدايا صغيرة، مظاريف حمراء)', 'الاستثمار في التخطيط المستقبلي المشترك', 'احترام كلتا العائلتين'],
      ru: ['Открытость в отношении долгосрочных планов (город, карьера, семья)', 'Знакомит с близкими друзьями и семьёй', 'Постоянные продуманные жесты (небольшие подарки, красные конверты)', 'Инвестиции в совместное планирование будущего', 'Уважение к обеим семьям'],
      zh: ['对长期计划(城市、职业、家庭)开放', '介绍给亲密的朋友和家人', '一贯的贴心举动(小礼物、红包)', '投资于共同的未来规划', '尊重双方家庭']
    },
    culturalNotes: {
      en: 'Regional differences are enormous — dating in Shanghai vs. rural Sichuan is like comparing NYC to a small town. Face ("面子") plays a large role in relationship dynamics.',
      ko: '지역별 차이가 엄청납니다 — 상하이와 시골 쓰촨에서의 데이트는 뉴욕과 작은 마을을 비교하는 것과 같습니다. 체면("面子")이 관계 역학에서 큰 역할을 합니다.',
      ja: '地域差は膨大です — 上海と農村四川でのデーティングはニューヨークと小さな町を比較するようなものです。「面子」が関係のダイナミクスで大きな役割を果たします。',
      es: 'Las diferencias regionales son enormes — salir en Shanghái vs. Sichuan rural es como comparar NYC con un pueblo pequeño. La "cara" ("面子") juega un gran papel en la dinámica relacional.',
      pt: 'As diferenças regionais são enormes — namorar em Xangai vs. Sichuan rural é como comparar NYC a uma cidade pequena. "Face" ("面子") desempenha um grande papel na dinâmica dos relacionamentos.',
      ar: 'الاختلافات الإقليمية هائلة — المواعدة في شنغهاي مقابل سيتشوان الريفية مثل مقارنة نيويورك ببلدة صغيرة. "الوجه" ("面子") يلعب دورًا كبيرًا في ديناميكية العلاقات.',
      ru: 'Региональные различия огромны — свидания в Шанхае vs. сельский Сычуань — как сравнивать Нью-Йорк с маленьким городком. "Лицо" ("面子") играет большую роль в динамике отношений.',
      zh: '地区差异巨大——在上海约会与在四川农村约会就像比较纽约和一个小镇。"面子"在关系动态中扮演重要角色。'
    },
    popularApps: ['Tantan', 'Momo', 'Soul', 'Baihe', 'WeChat'],
    languageOfLove: {
      en: 'Acts of service + gifts; tangible investment signals commitment.',
      ko: '행동으로 보여주기 + 선물; 실질적인 투자가 헌신을 상징합니다.',
      ja: '奉仕の行動 + 贈り物;具体的な投資がコミットメントを示す。',
      es: 'Actos de servicio + regalos; la inversión tangible señala compromiso.',
      pt: 'Atos de serviço + presentes; investimento tangível sinaliza compromisso.',
      ar: 'أعمال الخدمة + الهدايا؛ الاستثمار الملموس يشير إلى الالتزام.',
      ru: 'Акты служения + подарки; ощутимые инвестиции сигнализируют о преданности.',
      zh: '服务行为 + 礼物;实实在在的投入代表承诺。'
    }
  },

  GB: {
    code: 'GB',
    overview: {
      en: 'British dating is famously slow-burning, humor-driven, and understated. Sarcasm, self-deprecation, and dry wit are central to flirtation. Emotional expression is subtle; grand gestures can be seen as "too much."',
      ko: '영국 연애는 유명하게 느리게 진행되고, 유머 중심이며, 절제되어 있습니다. 냉소, 자기비하, 건조한 위트가 플러팅의 중심입니다. 감정 표현은 미묘하며, 거창한 제스처는 "과하다"고 여겨질 수 있습니다.',
      ja: 'イギリスのデーティングは有名なほどゆっくりと進み、ユーモア主導で控えめです。皮肉、自己卑下、辛口のウィットが軽薄なやり取りの中心です。感情表現は繊細で、大げさな仕草は「やりすぎ」と見なされることがあります。',
      es: 'Las citas británicas son famosamente lentas, impulsadas por el humor y contenidas. El sarcasmo, la autocrítica y el ingenio seco son centrales en el coqueteo. La expresión emocional es sutil; los grandes gestos pueden verse como "demasiado".',
      pt: 'O namoro britânico é famosamente lento, movido pelo humor e discreto. Sarcasmo, autocrítica e humor seco são centrais no flerte. A expressão emocional é sutil; grandes gestos podem ser vistos como "demais".',
      ar: 'المواعدة البريطانية بطيئة الاشتعال بشكل مشهور، مدفوعة بالفكاهة، وهادئة. السخرية، وانتقاد الذات، والذكاء الجاف محورية في الغزل. التعبير العاطفي خفي؛ الإيماءات الكبرى قد تُعتبر "مبالغة".',
      ru: 'Британские свидания знамениты медленным темпом, юмористичны и сдержанны. Сарказм, самоирония и сухой юмор — центральные элементы флирта. Эмоциональное выражение тонкое; грандиозные жесты могут восприниматься как "слишком".',
      zh: '英国约会以缓慢发展、幽默驱动和含蓄著称。讽刺、自嘲和冷幽默是调情的核心。情感表达微妙;夸张的举动可能被视为"过分"。'
    },
    datingStyle: {
      en: 'Casual pub meetings, humor as a screening tool, slow escalation. Alcohol often plays a supporting role in early dates. Directness is not a British virtue in matters of the heart.',
      ko: '캐주얼한 펍 만남, 스크리닝 도구로서의 유머, 느린 진행. 알코올이 종종 초기 데이트에서 조연 역할을 합니다. 마음의 문제에서 직접성은 영국인의 미덕이 아닙니다.',
      ja: 'カジュアルなパブでの出会い、スクリーニングツールとしてのユーモア、ゆっくりとしたエスカレーション。初期のデートでアルコールが脇役を演じることがよくあります。直接性は恋愛のことに関してはイギリス人の美徳ではありません。',
      es: 'Encuentros casuales en pubs, humor como herramienta de selección, escalada lenta. El alcohol suele desempeñar un papel secundario en las primeras citas. La franqueza no es una virtud británica en asuntos del corazón.',
      pt: 'Encontros casuais em pubs, humor como ferramenta de triagem, escalada lenta. O álcool frequentemente desempenha papel secundário em primeiros encontros. A franqueza não é uma virtude britânica em assuntos do coração.',
      ar: 'لقاءات عادية في الحانات، الفكاهة كأداة فحص، تصعيد بطيء. غالبًا ما يلعب الكحول دورًا داعمًا في المواعيد المبكرة. الصراحة ليست فضيلة بريطانية في شؤون القلب.',
      ru: 'Случайные встречи в пабах, юмор как инструмент отбора, медленная эскалация. Алкоголь часто играет вспомогательную роль на ранних свиданиях. Прямота — не британская добродетель в сердечных делах.',
      zh: '在酒吧随意见面,幽默作为筛选工具,缓慢升级。酒精在早期约会中经常扮演辅助角色。直接不是英国人在感情问题上的美德。'
    },
    courtship: {
      en: 'Long "seeing each other" phase before official titles. Family involvement is minimal in early stages. Splitting bills is common; both taking turns paying is standard.',
      ko: '공식적인 호칭 전에 긴 "만나고 있는" 단계가 있습니다. 초기 단계에는 가족의 관여가 최소한입니다. 더치페이가 흔하며; 번갈아 가며 내는 것이 표준입니다.',
      ja: '公式な肩書きの前に長い「お付き合いしている」段階があります。初期段階では家族の関与は最小限です。割り勘は一般的で、交代で支払うのが標準です。',
      es: 'Larga fase de "vernos" antes de títulos oficiales. La participación familiar es mínima en las etapas iniciales. Dividir la cuenta es común; turnarse para pagar es estándar.',
      pt: 'Longa fase de "nos vendo" antes de títulos oficiais. Envolvimento familiar é mínimo nas fases iniciais. Dividir a conta é comum; revezar para pagar é padrão.',
      ar: 'مرحلة طويلة من "التعارف" قبل الألقاب الرسمية. مشاركة العائلة محدودة في المراحل المبكرة. تقسيم الفاتورة شائع؛ التناوب على الدفع هو المعيار.',
      ru: 'Долгая фаза "встречаемся" перед официальными титулами. Участие семьи минимально на ранних этапах. Разделение счетов распространено; чередование оплаты стандартно.',
      zh: '在正式称谓之前有长时间的"约会"阶段。早期阶段家庭参与最少。AA制很常见;轮流付款是标准。'
    },
    redFlagsToWatch: {
      en: ['Only meeting when drinking is involved', 'Refusing to define the relationship indefinitely', 'Excessive class-based comments or snobbery', 'Passive-aggressive rather than direct conflict', 'No plans to meet friends after months of dating'],
      ko: ['술이 있을 때만 만남', '무기한으로 관계 정의를 거부', '과도한 계급 기반 코멘트나 속물근성', '직접적인 갈등 대신 수동공격적', '몇 달 데이트 후에도 친구를 만날 계획 없음'],
      ja: ['飲酒が伴う時だけ会う', '関係を無期限に定義することを拒む', '過度な階級ベースのコメントや俗物根性', '直接的な対立ではなく受動攻撃的', '数ヶ月デートしても友人に会う計画がない'],
      es: ['Solo verse cuando hay alcohol involucrado', 'Negarse a definir la relación indefinidamente', 'Comentarios excesivos basados en clase o esnobismo', 'Pasivo-agresivo en lugar de conflicto directo', 'Sin planes de conocer amigos después de meses de citas'],
      pt: ['Só se encontrar quando há bebida envolvida', 'Recusar-se a definir o relacionamento indefinidamente', 'Comentários excessivos baseados em classe ou esnobismo', 'Passivo-agressivo em vez de conflito direto', 'Sem planos de conhecer amigos após meses de namoro'],
      ar: ['اللقاء فقط عندما يكون هناك شرب', 'رفض تحديد العلاقة إلى أجل غير مسمى', 'تعليقات مفرطة قائمة على الطبقة أو التعالي', 'عدواني سلبي بدلاً من الصراع المباشر', 'لا توجد خطط لمقابلة الأصدقاء بعد أشهر من المواعدة'],
      ru: ['Встречается только когда есть алкоголь', 'Отказ определять отношения бесконечно', 'Чрезмерные классовые комментарии или снобизм', 'Пассивно-агрессивный вместо прямого конфликта', 'Нет планов встретиться с друзьями после месяцев свиданий'],
      zh: ['只在有酒的时候见面', '无限期拒绝定义关系', '过度的阶级评论或势利', '被动攻击而不是直接冲突', '约会几个月后没有见朋友的计划']
    },
    greenFlags: {
      en: ['Genuine humor and playful banter', 'Willingness to plan sober activities', 'Introducing you to the pub friend group', 'Consistency over grand gestures', 'Comfort with silence and low-key hangs'],
      ko: ['진정한 유머와 장난스러운 대화', '술 없는 활동을 계획하려는 의지', '펍 친구 그룹에 소개', '거창한 제스처보다 일관성', '침묵과 소박한 시간에 편안함'],
      ja: ['本物のユーモアと遊び心のあるやり取り', 'シラフの活動を計画する意欲', 'パブの友人グループに紹介', '大げさな仕草よりも一貫性', '沈黙とローキーな時間への快適さ'],
      es: ['Humor genuino y bromas juguetonas', 'Disposición a planificar actividades sobrias', 'Presentarte al grupo de amigos del pub', 'Consistencia sobre grandes gestos', 'Comodidad con el silencio y momentos tranquilos'],
      pt: ['Humor genuíno e brincadeiras', 'Disposição para planejar atividades sóbrias', 'Apresentá-lo ao grupo de amigos do pub', 'Consistência acima de grandes gestos', 'Conforto com silêncio e momentos tranquilos'],
      ar: ['فكاهة حقيقية ومزاح مرح', 'الاستعداد للتخطيط لأنشطة بدون كحول', 'تقديمك لمجموعة أصدقاء الحانة', 'الاتساق فوق الإيماءات الكبرى', 'الراحة مع الصمت والتسكع الهادئ'],
      ru: ['Искренний юмор и игривая беседа', 'Готовность планировать трезвые мероприятия', 'Знакомит с группой друзей из паба', 'Постоянство важнее грандиозных жестов', 'Комфорт с тишиной и спокойным времяпрепровождением'],
      zh: ['真正的幽默和俏皮玩笑', '愿意计划不喝酒的活动', '介绍给酒吧朋友圈', '一贯性胜过夸张举动', '对沉默和低调聚会感到自在']
    },
    culturalNotes: {
      en: 'Regional accents and class markers carry cultural weight. Football (soccer) allegiance can be a genuine dating filter.',
      ko: '지역 억양과 계급 표시가 문화적 무게를 지닙니다. 축구(soccer) 팬심이 진짜 데이팅 필터가 될 수 있습니다.',
      ja: '地域アクセントと階級マーカーは文化的な重みを持ちます。フットボール(サッカー)の忠誠心は本物のデーティングフィルターになり得ます。',
      es: 'Los acentos regionales y marcadores de clase tienen peso cultural. La lealtad al fútbol puede ser un filtro genuino de citas.',
      pt: 'Sotaques regionais e marcadores de classe carregam peso cultural. Fidelidade ao futebol pode ser um filtro genuíno de namoro.',
      ar: 'اللهجات الإقليمية ومحددات الطبقة تحمل وزنًا ثقافيًا. يمكن أن يكون الولاء لكرة القدم مرشحًا حقيقيًا للمواعدة.',
      ru: 'Региональные акценты и классовые маркеры имеют культурный вес. Приверженность футболу может быть настоящим фильтром знакомств.',
      zh: '地区口音和阶级标志具有文化分量。对足球的忠诚可能是真正的约会过滤器。'
    },
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'Thursday', 'Match.com'],
    languageOfLove: {
      en: 'Quality time + humor as affection; sarcasm is a love language.',
      ko: '함께하는 시간 + 애정으로서의 유머; 냉소가 사랑의 언어입니다.',
      ja: '一緒に過ごす時間 + 愛情としてのユーモア;皮肉が愛の言語です。',
      es: 'Tiempo de calidad + humor como afecto; el sarcasmo es un lenguaje del amor.',
      pt: 'Tempo de qualidade + humor como afeto; sarcasmo é uma linguagem do amor.',
      ar: 'الوقت النوعي + الفكاهة كمودة؛ السخرية لغة حب.',
      ru: 'Качественное время + юмор как проявление любви; сарказм — язык любви.',
      zh: '优质时间 + 幽默作为情感;讽刺是一种爱的语言。'
    }
  },

  FR: {
    code: 'FR',
    overview: {
      en: 'French dating culture is famously ambiguous — there\'s no clear "define the relationship" moment. You are simply "seeing each other," then one day you\'re together. Romance, sensuality, and intellectual conversation are all foundational.',
      ko: '프랑스 연애 문화는 유명하게 모호합니다 — 명확한 "관계 정의" 순간이 없습니다. 그저 "서로 만나고 있는" 사이일 뿐이며, 어느 날 함께하게 됩니다. 로맨스, 관능, 지적 대화가 모두 기본입니다.',
      ja: 'フランスのデーティング文化は有名なほど曖昧です — 明確な「関係を定義する」瞬間はありません。単に「お付き合いしている」だけで、ある日一緒になっているのです。ロマンス、官能性、知的な会話がすべて基盤です。',
      es: 'La cultura de citas francesa es famosamente ambigua — no hay un momento claro de "definir la relación". Simplemente "se están viendo", luego un día están juntos. El romance, la sensualidad y la conversación intelectual son todos fundamentales.',
      pt: 'A cultura de namoro francesa é famosamente ambígua — não há um momento claro de "definir o relacionamento". Vocês simplesmente "estão se vendo", então um dia estão juntos. Romance, sensualidade e conversa intelectual são todos fundamentais.',
      ar: 'ثقافة المواعدة الفرنسية غامضة بشكل مشهور — لا توجد لحظة واضحة "لتحديد العلاقة". أنتم ببساطة "تتعارفون"، ثم في يوم ما تكونون معًا. الرومانسية والحسية والمحادثة الفكرية كلها أساسية.',
      ru: 'Французская культура свиданий знаменита неоднозначностью — нет чёткого момента "определения отношений". Вы просто "встречаетесь", а однажды вы вместе. Романтика, чувственность и интеллектуальная беседа — основа.',
      zh: '法国约会文化以模糊著称——没有明确的"定义关系"时刻。你们只是"在约会",然后某天你们就在一起了。浪漫、感性和智性对话都是基础。'
    },
    datingStyle: {
      en: 'Long dinners, wine, philosophical conversation, and physical affection early on. Exclusivity is often implicit rather than discussed. Multi-hour dates are common.',
      ko: '긴 저녁 식사, 와인, 철학적 대화, 그리고 초기부터 신체적 애정. 배타성은 논의되기보다 암묵적입니다. 몇 시간짜리 데이트가 흔합니다.',
      ja: '長い夕食、ワイン、哲学的な会話、そして初期からの身体的愛情。排他性は議論されるよりも暗黙的です。数時間に及ぶデートが一般的です。',
      es: 'Cenas largas, vino, conversación filosófica y afecto físico desde el principio. La exclusividad suele ser implícita en lugar de discutida. Las citas de varias horas son comunes.',
      pt: 'Jantares longos, vinho, conversa filosófica e afeto físico desde o início. Exclusividade é frequentemente implícita em vez de discutida. Encontros de várias horas são comuns.',
      ar: 'عشاء طويل، ونبيذ، ومحادثات فلسفية، ومودة جسدية منذ البداية. الحصرية غالبًا ما تكون ضمنية بدلاً من مناقشتها. المواعيد التي تستغرق ساعات عديدة شائعة.',
      ru: 'Долгие ужины, вино, философские беседы и физическая привязанность с самого начала. Эксклюзивность часто подразумевается, а не обсуждается. Свидания на много часов распространены.',
      zh: '漫长的晚餐、葡萄酒、哲学对话和早期的身体亲密。排他性通常是隐含的而不是讨论的。持续几小时的约会很常见。'
    },
    courtship: {
      en: 'Meeting family happens on holidays and gatherings rather than as a formal step. Written communication (love letters, messages) is still valued.',
      ko: '가족을 만나는 것은 공식적인 단계가 아니라 명절과 모임에서 이루어집니다. 서면 소통(연애 편지, 메시지)이 여전히 중요시됩니다.',
      ja: '家族に会うのは正式なステップではなく、休日や集まりで起こります。書面での交流(ラブレター、メッセージ)は今でも大切にされます。',
      es: 'Conocer a la familia ocurre en días festivos y reuniones en lugar de como paso formal. La comunicación escrita (cartas de amor, mensajes) sigue siendo valorada.',
      pt: 'Conhecer a família acontece em feriados e reuniões em vez de como passo formal. Comunicação escrita (cartas de amor, mensagens) ainda é valorizada.',
      ar: 'مقابلة العائلة تحدث في الأعياد والتجمعات وليس كخطوة رسمية. لا تزال المراسلات المكتوبة (رسائل الحب، الرسائل) مُقدَّرة.',
      ru: 'Знакомство с семьёй происходит на праздниках и встречах, а не как формальный шаг. Письменное общение (любовные письма, сообщения) всё ещё ценится.',
      zh: '见家人是在节日和聚会上而不是正式的一步。书面交流(情书、消息)仍然被重视。'
    },
    redFlagsToWatch: {
      en: ['Overly transactional attitude toward dating', 'Prioritizing efficiency over enjoyment', 'Not enjoying long meals or conversation', 'Refusing intellectual or cultural discussion', 'Constant phone use during dates'],
      ko: ['데이트에 대한 지나치게 거래적인 태도', '즐거움보다 효율성 우선', '긴 식사나 대화를 즐기지 않음', '지적이거나 문화적 토론 거부', '데이트 중 계속 폰만 봄'],
      ja: ['デーティングに対する過度に取引的な態度', '楽しみよりも効率を優先', '長い食事や会話を楽しまない', '知的または文化的な議論を拒む', 'デート中の絶え間ないスマホ使用'],
      es: ['Actitud excesivamente transaccional hacia las citas', 'Priorizar la eficiencia sobre el disfrute', 'No disfrutar de comidas largas o conversación', 'Rechazar la discusión intelectual o cultural', 'Uso constante del teléfono durante las citas'],
      pt: ['Atitude excessivamente transacional em relação ao namoro', 'Priorizar eficiência sobre desfrute', 'Não gostar de refeições longas ou conversa', 'Recusar discussão intelectual ou cultural', 'Uso constante do telefone durante encontros'],
      ar: ['موقف معاملاتي مفرط تجاه المواعدة', 'إعطاء الأولوية للكفاءة على المتعة', 'عدم الاستمتاع بالوجبات الطويلة أو المحادثة', 'رفض النقاش الفكري أو الثقافي', 'الاستخدام المستمر للهاتف خلال المواعيد'],
      ru: ['Чрезмерно транзакционное отношение к свиданиям', 'Приоритет эффективности над удовольствием', 'Не любит долгие трапезы или беседы', 'Отказ от интеллектуальных или культурных дискуссий', 'Постоянное использование телефона на свиданиях'],
      zh: ['对约会过于交易化的态度', '效率优先于享受', '不喜欢漫长的用餐或对话', '拒绝智性或文化讨论', '约会期间不断使用手机']
    },
    greenFlags: {
      en: ['Long, unhurried dates', 'Genuine interest in your ideas and opinions', 'Cultural investment (museum visits, films, books)', 'Comfortable with disagreement over dinner', 'Physical affection in public without theatrics'],
      ko: ['길고 서두르지 않는 데이트', '당신의 아이디어와 의견에 진정한 관심', '문화적 투자(박물관 방문, 영화, 책)', '저녁 식사 중 의견 차이에 편안함', '연극적이지 않은 공개적 애정 표현'],
      ja: ['長く、急がないデート', 'あなたのアイデアや意見への真の関心', '文化的投資(美術館訪問、映画、本)', '夕食時の意見の相違に慣れている', '演劇的でない公共の場での身体的愛情'],
      es: ['Citas largas y sin prisa', 'Interés genuino en tus ideas y opiniones', 'Inversión cultural (visitas a museos, películas, libros)', 'Cómodo con desacuerdos durante la cena', 'Afecto físico en público sin teatralidad'],
      pt: ['Encontros longos e sem pressa', 'Interesse genuíno em suas ideias e opiniões', 'Investimento cultural (visitas a museus, filmes, livros)', 'Confortável com desacordos no jantar', 'Afeto físico em público sem teatralidade'],
      ar: ['مواعيد طويلة وغير متسرعة', 'اهتمام حقيقي بأفكارك وآرائك', 'استثمار ثقافي (زيارات المتاحف، الأفلام، الكتب)', 'مرتاح مع الاختلاف على العشاء', 'مودة جسدية علنية بدون مسرحية'],
      ru: ['Долгие, неторопливые свидания', 'Искренний интерес к вашим идеям и мнениям', 'Культурные инвестиции (посещение музеев, фильмы, книги)', 'Комфорт с несогласием за ужином', 'Физическая привязанность на публике без театральности'],
      zh: ['漫长、不匆忙的约会', '对你的想法和意见的真诚兴趣', '文化投入(参观博物馆、电影、书籍)', '晚餐时对分歧感到自在', '公共场合的身体亲密而不做作']
    },
    culturalNotes: {
      en: 'Paris vs. rest of France is a real dating divide. English fluency varies widely and can be a barrier or a bond.',
      ko: '파리 vs. 프랑스의 나머지 지역은 실제 데이팅 분단선입니다. 영어 유창성은 크게 다르며 장벽이나 유대감이 될 수 있습니다.',
      ja: 'パリと残りのフランスは実際のデーティング分断です。英語の流暢さは大きく異なり、障壁にも絆にもなり得ます。',
      es: 'París vs. el resto de Francia es una división real de citas. La fluidez en inglés varía ampliamente y puede ser una barrera o un vínculo.',
      pt: 'Paris vs. resto da França é uma divisão real de namoro. Fluência em inglês varia amplamente e pode ser uma barreira ou um vínculo.',
      ar: 'باريس مقابل باقي فرنسا انقسام حقيقي في المواعدة. الطلاقة في الإنجليزية تتفاوت بشكل كبير ويمكن أن تكون حاجزًا أو رابطًا.',
      ru: 'Париж vs. остальная Франция — реальный разрыв в культуре свиданий. Свободное владение английским сильно варьируется и может быть барьером или связью.',
      zh: '巴黎与法国其他地区是真正的约会分界。英语流利度差异很大,可能是障碍也可能是纽带。'
    },
    popularApps: ['Tinder', 'Bumble', 'Fruitz', 'Happn', 'AdopteUnMec'],
    languageOfLove: {
      en: 'Quality time + physical touch; long conversations are foreplay.',
      ko: '함께하는 시간 + 신체 접촉; 긴 대화가 전희입니다.',
      ja: '一緒に過ごす時間 + 身体的接触;長い会話が前戯です。',
      es: 'Tiempo de calidad + contacto físico; las conversaciones largas son preludio.',
      pt: 'Tempo de qualidade + toque físico; conversas longas são preliminares.',
      ar: 'الوقت النوعي + اللمس الجسدي؛ المحادثات الطويلة مقدمة.',
      ru: 'Качественное время + физическое прикосновение; долгие беседы — прелюдия.',
      zh: '优质时间 + 身体接触;漫长的对话是前戏。'
    }
  },

  DE: {
    code: 'DE',
    overview: {
      en: 'German dating is direct, honest, and often takes time. Germans are typically hesitant to display emotions publicly, but their commitment, once given, is deep and reliable. Punctuality is non-negotiable.',
      ko: '독일 연애는 직접적이고, 정직하며, 종종 시간이 걸립니다. 독일인들은 일반적으로 공개적으로 감정을 표현하는 것을 주저하지만, 일단 헌신하면 깊고 신뢰할 수 있습니다. 시간 엄수는 협상 불가입니다.',
      ja: 'ドイツのデーティングは直接的で、正直で、しばしば時間がかかります。ドイツ人は通常、感情を公に表現することをためらいますが、一度コミットすれば、それは深く信頼できるものです。時間厳守は交渉の余地がありません。',
      es: 'Las citas alemanas son directas, honestas y a menudo llevan tiempo. Los alemanes suelen ser reacios a mostrar emociones en público, pero su compromiso, una vez dado, es profundo y confiable. La puntualidad no es negociable.',
      pt: 'O namoro alemão é direto, honesto e frequentemente leva tempo. Os alemães normalmente hesitam em mostrar emoções publicamente, mas seu compromisso, uma vez dado, é profundo e confiável. Pontualidade é inegociável.',
      ar: 'المواعدة الألمانية مباشرة، وصادقة، وتستغرق وقتًا في كثير من الأحيان. عادةً ما يتردد الألمان في إظهار المشاعر علنًا، لكن التزامهم، بمجرد تقديمه، عميق وموثوق. الالتزام بالمواعيد أمر غير قابل للتفاوض.',
      ru: 'Немецкие свидания прямые, честные и часто занимают время. Немцы обычно неохотно проявляют эмоции публично, но их приверженность, однажды данная, глубока и надёжна. Пунктуальность не подлежит обсуждению.',
      zh: '德国约会直接、诚实,而且通常需要时间。德国人通常不愿在公共场合表现情感,但他们一旦承诺,就深刻而可靠。守时是不可协商的。'
    },
    datingStyle: {
      en: 'Direct verbal communication. Casual dating exists but is less prevalent than in the US. Relationships tend to be discussed and defined explicitly.',
      ko: '직접적인 언어 소통. 캐주얼한 데이팅도 존재하지만 미국만큼 흔하지는 않습니다. 관계는 명시적으로 논의되고 정의되는 경향이 있습니다.',
      ja: '直接的な言葉のコミュニケーション。カジュアルなデーティングも存在しますが、アメリカほど普及していません。関係は明示的に議論され、定義される傾向があります。',
      es: 'Comunicación verbal directa. Las citas casuales existen pero son menos frecuentes que en EE.UU. Las relaciones tienden a ser discutidas y definidas explícitamente.',
      pt: 'Comunicação verbal direta. Namoro casual existe mas é menos prevalente que nos EUA. Relacionamentos tendem a ser discutidos e definidos explicitamente.',
      ar: 'تواصل لفظي مباشر. المواعدة العرضية موجودة لكنها أقل انتشارًا مما هي عليه في الولايات المتحدة. تميل العلاقات إلى أن تُناقش وتُحدد بشكل صريح.',
      ru: 'Прямое вербальное общение. Случайные свидания существуют, но менее распространены, чем в США. Отношения, как правило, обсуждаются и определяются явно.',
      zh: '直接的口头沟通。休闲约会存在但不如美国普遍。关系倾向于明确讨论和定义。'
    },
    courtship: {
      en: 'Introductions to friends and family happen after a clear commitment. Practical planning (holidays, life goals) is discussed early.',
      ko: '친구와 가족에게 소개는 명확한 헌신 후에 이루어집니다. 실용적인 계획(휴가, 인생 목표)이 일찍 논의됩니다.',
      ja: '友人や家族への紹介は、明確なコミットメントの後に行われます。実用的な計画(休暇、人生の目標)は早期に議論されます。',
      es: 'Las presentaciones a amigos y familia ocurren después de un compromiso claro. La planificación práctica (vacaciones, metas de vida) se discute temprano.',
      pt: 'Apresentações a amigos e família ocorrem após um compromisso claro. Planejamento prático (feriados, metas de vida) é discutido cedo.',
      ar: 'تحدث التعريفات بالأصدقاء والعائلة بعد التزام واضح. يُناقش التخطيط العملي (العطلات، أهداف الحياة) مبكرًا.',
      ru: 'Знакомства с друзьями и семьёй происходят после чёткого обязательства. Практическое планирование (отпуска, жизненные цели) обсуждается рано.',
      zh: '在明确承诺后才介绍给朋友和家人。实际规划(假期、人生目标)会早期讨论。'
    },
    redFlagsToWatch: {
      en: ['Chronic lateness (a serious violation)', 'Vagueness about intentions or future plans', 'Inconsistency between words and actions', 'Discomfort with direct feedback', 'Financial secrecy'],
      ko: ['만성적인 지각(심각한 위반)', '의도나 미래 계획에 대한 모호함', '말과 행동의 불일치', '직접적인 피드백에 대한 불편함', '재정적 비밀'],
      ja: ['慢性的な遅刻(重大な違反)', '意図や将来計画についての曖昧さ', '言葉と行動の不一致', '直接的なフィードバックへの不快感', '経済的秘密'],
      es: ['Tardanza crónica (una violación grave)', 'Vaguedad sobre intenciones o planes futuros', 'Inconsistencia entre palabras y acciones', 'Incomodidad con retroalimentación directa', 'Secretismo financiero'],
      pt: ['Atrasos crônicos (uma violação grave)', 'Vaguidão sobre intenções ou planos futuros', 'Inconsistência entre palavras e ações', 'Desconforto com feedback direto', 'Segredo financeiro'],
      ar: ['التأخر المزمن (انتهاك خطير)', 'الغموض بشأن النوايا أو الخطط المستقبلية', 'التناقض بين الأقوال والأفعال', 'عدم الراحة مع التغذية الراجعة المباشرة', 'السرية المالية'],
      ru: ['Хронические опоздания (серьёзное нарушение)', 'Неясность в отношении намерений или будущих планов', 'Несоответствие слов и действий', 'Дискомфорт с прямой обратной связью', 'Финансовая скрытность'],
      zh: ['长期迟到(严重违规)', '对意图或未来计划含糊', '言行不一致', '对直接反馈感到不适', '财务保密']
    },
    greenFlags: {
      en: ['Punctuality and reliability', 'Honest, sometimes blunt communication', 'Planning trips and future activities together', 'Financial transparency', 'Deep loyalty once committed'],
      ko: ['시간 엄수와 신뢰성', '정직하고, 때로는 노골적인 소통', '함께 여행과 미래 활동 계획', '재정적 투명성', '헌신 후 깊은 충성심'],
      ja: ['時間厳守と信頼性', '正直で、時には率直なコミュニケーション', '一緒に旅行や将来の活動を計画', '経済的透明性', 'コミットした後の深い忠誠'],
      es: ['Puntualidad y confiabilidad', 'Comunicación honesta, a veces directa', 'Planificar viajes y actividades futuras juntos', 'Transparencia financiera', 'Lealtad profunda una vez comprometidos'],
      pt: ['Pontualidade e confiabilidade', 'Comunicação honesta, às vezes direta', 'Planejar viagens e atividades futuras juntos', 'Transparência financeira', 'Lealdade profunda uma vez comprometidos'],
      ar: ['الالتزام بالمواعيد والموثوقية', 'تواصل صادق وأحيانًا صريح', 'التخطيط للرحلات والأنشطة المستقبلية معًا', 'الشفافية المالية', 'الولاء العميق بمجرد الالتزام'],
      ru: ['Пунктуальность и надёжность', 'Честное, иногда прямолинейное общение', 'Совместное планирование поездок и будущих мероприятий', 'Финансовая прозрачность', 'Глубокая лояльность после обязательств'],
      zh: ['守时和可靠性', '诚实,有时直言不讳的沟通', '一起计划旅行和未来活动', '财务透明', '一旦承诺就深深忠诚']
    },
    culturalNotes: {
      en: 'East/West Germany still carries some cultural difference. Bavaria has a stronger tradition emphasis, while Berlin is famously libertine.',
      ko: '동독/서독은 여전히 어느 정도의 문화적 차이를 가지고 있습니다. 바이에른은 전통을 더 강조하며, 베를린은 유명하게 자유분방합니다.',
      ja: '東ドイツ/西ドイツは今でもいくらかの文化的違いを持ち続けています。バイエルンはより強い伝統重視で、ベルリンは有名なほど自由奔放です。',
      es: 'Alemania Oriental/Occidental aún tiene alguna diferencia cultural. Baviera tiene un mayor énfasis en la tradición, mientras que Berlín es famosamente libertino.',
      pt: 'Alemanha Oriental/Ocidental ainda carrega alguma diferença cultural. Baviera tem uma ênfase mais forte na tradição, enquanto Berlim é famosamente libertina.',
      ar: 'لا تزال ألمانيا الشرقية/الغربية تحمل بعض الاختلافات الثقافية. لبافاريا تركيز أقوى على التقاليد، بينما برلين مشهورة بحريتها.',
      ru: 'Восточная/Западная Германия всё ещё несёт некоторые культурные различия. Бавария сильнее подчёркивает традиции, тогда как Берлин славится своей вольностью.',
      zh: '东/西德仍保留一些文化差异。巴伐利亚更强调传统,而柏林以放荡不羁著称。'
    },
    popularApps: ['Tinder', 'Bumble', 'Hinge', 'Parship', 'Lovoo'],
    languageOfLove: {
      en: 'Acts of service + words of affirmation; reliability is romance.',
      ko: '행동으로 보여주기 + 말로 표현하기; 신뢰성이 로맨스입니다.',
      ja: '奉仕の行動 + 肯定の言葉;信頼性がロマンスです。',
      es: 'Actos de servicio + palabras de afirmación; la confiabilidad es romance.',
      pt: 'Atos de serviço + palavras de afirmação; confiabilidade é romance.',
      ar: 'أعمال الخدمة + كلمات التأكيد؛ الموثوقية رومانسية.',
      ru: 'Акты служения + слова подтверждения; надёжность — это романтика.',
      zh: '服务行为 + 肯定的言语;可靠就是浪漫。'
    }
  },

  IT: {
    code: 'IT',
    overview: {
      en: 'Italian dating is passionate, expressive, and family-centered. Food, family, and physical affection are all deeply intertwined with romance. Grand gestures are welcomed, not seen as excessive.',
      ko: '이탈리아 연애는 열정적이고, 표현이 풍부하며, 가족 중심적입니다. 음식, 가족, 그리고 신체적 애정 모두가 로맨스와 깊이 얽혀 있습니다. 거창한 제스처가 환영받으며, 과하다고 여겨지지 않습니다.',
      ja: 'イタリアのデーティングは情熱的で、表現豊かで、家族中心です。食べ物、家族、そして身体的愛情はすべてロマンスと深く絡み合っています。大げさな仕草は歓迎され、過剰と見なされません。',
      es: 'Las citas italianas son apasionadas, expresivas y centradas en la familia. La comida, la familia y el afecto físico están profundamente entrelazados con el romance. Los grandes gestos son bienvenidos, no vistos como excesivos.',
      pt: 'O namoro italiano é apaixonado, expressivo e centrado na família. Comida, família e afeto físico estão profundamente entrelaçados com romance. Grandes gestos são bem-vindos, não vistos como excessivos.',
      ar: 'المواعدة الإيطالية عاطفية ومعبرة ومركزها العائلة. الطعام والعائلة والمودة الجسدية كلها متشابكة بعمق مع الرومانسية. الإيماءات الكبرى مرحب بها ولا تُعتبر مبالغة.',
      ru: 'Итальянские свидания страстные, выразительные и семейно-ориентированные. Еда, семья и физическая привязанность глубоко переплетены с романтикой. Грандиозные жесты приветствуются, а не считаются чрезмерными.',
      zh: '意大利约会热情、富有表现力,以家庭为中心。食物、家人和身体亲密都与浪漫深深交织。夸张的举动受欢迎,不被视为过度。'
    },
    datingStyle: {
      en: 'Warm, physically expressive, high emotional intensity. Group dinners with friends and family are early relationship milestones. Verbal declaration of feelings comes quickly.',
      ko: '따뜻하고, 신체적으로 표현이 풍부하며, 높은 감정적 강도. 친구와 가족과의 그룹 저녁 식사가 초기 관계의 이정표입니다. 감정의 언어적 선언이 빠르게 옵니다.',
      ja: '温かく、身体的表現豊かで、高い感情強度。友人や家族とのグループディナーが初期の関係のマイルストーンです。感情の言葉での宣言が早く来ます。',
      es: 'Cálido, físicamente expresivo, alta intensidad emocional. Las cenas grupales con amigos y familia son hitos tempranos de la relación. La declaración verbal de sentimientos llega rápido.',
      pt: 'Caloroso, fisicamente expressivo, alta intensidade emocional. Jantares em grupo com amigos e família são marcos iniciais do relacionamento. Declaração verbal de sentimentos vem rapidamente.',
      ar: 'دافئ ومعبر جسديًا وذو كثافة عاطفية عالية. تناول العشاء الجماعي مع الأصدقاء والعائلة معالم مبكرة في العلاقة. الإعلان اللفظي عن المشاعر يأتي بسرعة.',
      ru: 'Тёплые, физически выразительные, высокая эмоциональная интенсивность. Групповые ужины с друзьями и семьёй — ранние вехи отношений. Словесное признание в чувствах приходит быстро.',
      zh: '热情、身体表达丰富、情感强度高。与朋友和家人的团体晚餐是关系的早期里程碑。口头表达感情很快。'
    },
    courtship: {
      en: 'Meeting "la mamma" is a major, meaningful step. Sunday family lunches, cooking together, and long evenings are core relationship activities.',
      ko: '"라 마마(la mamma)"를 만나는 것은 중요하고 의미 있는 단계입니다. 일요일 가족 점심, 함께 요리하기, 긴 저녁 시간이 핵심 관계 활동입니다.',
      ja: '「ラ・マンマ(la mamma)」に会うことは重要で意味深いステップです。日曜日の家族の昼食、一緒に料理をすること、長い夜が中心的な関係活動です。',
      es: 'Conocer a "la mamma" es un paso importante y significativo. Los almuerzos familiares del domingo, cocinar juntos y las largas veladas son actividades centrales de la relación.',
      pt: 'Conhecer "la mamma" é um passo importante e significativo. Almoços familiares de domingo, cozinhar juntos e longas noites são atividades centrais do relacionamento.',
      ar: 'مقابلة "لا ماما" (la mamma) خطوة كبرى وذات معنى. غداء العائلة الأحد، والطبخ معًا، والأمسيات الطويلة أنشطة أساسية للعلاقة.',
      ru: 'Знакомство с "la mamma" — важный, значимый шаг. Воскресные семейные обеды, совместная готовка и долгие вечера — основные виды деятельности в отношениях.',
      zh: '见"la mamma"(妈妈)是一个重要且有意义的步骤。周日家庭午餐、一起做饭和漫长的夜晚是核心的关系活动。'
    },
    redFlagsToWatch: {
      en: ['Excessive attachment to mother ("mammone") without independence', 'Public jealousy or drama', 'Refusal to introduce you to family after 3-6 months', 'Not enjoying food or cooking together', 'Impatience or coldness'],
      ko: ['독립성 없는 어머니에 대한 과도한 애착("마모네mammone")', '공개적인 질투나 드라마', '3-6개월 후에도 가족에게 소개 거부', '음식이나 함께 요리하는 것을 즐기지 않음', '조바심이나 냉정함'],
      ja: ['独立性のない母親への過度の愛着(「マンモーネmammone」)', '公然の嫉妬やドラマ', '3〜6ヶ月経っても家族に紹介することを拒む', '食事や一緒に料理することを楽しまない', '短気または冷たさ'],
      es: ['Apego excesivo a la madre ("mammone") sin independencia', 'Celos o drama públicos', 'Negarse a presentarte a la familia después de 3-6 meses', 'No disfrutar de la comida o cocinar juntos', 'Impaciencia o frialdad'],
      pt: ['Apego excessivo à mãe ("mammone") sem independência', 'Ciúmes ou drama públicos', 'Recusar-se a apresentá-lo à família após 3-6 meses', 'Não gostar de comida ou cozinhar juntos', 'Impaciência ou frieza'],
      ar: ['التعلق المفرط بالأم ("mammone") دون استقلالية', 'الغيرة أو الدراما العلنية', 'رفض تقديمك للعائلة بعد 3-6 أشهر', 'عدم الاستمتاع بالطعام أو الطبخ معًا', 'نفاد الصبر أو البرودة'],
      ru: ['Чрезмерная привязанность к матери ("mammone") без независимости', 'Публичная ревность или драма', 'Отказ знакомить с семьёй после 3-6 месяцев', 'Не наслаждается едой или совместной готовкой', 'Нетерпение или холодность'],
      zh: ['对母亲过度依恋("mammone")而无独立性', '公开嫉妒或戏剧化', '3-6个月后拒绝介绍给家人', '不喜欢一起吃饭或做饭', '不耐烦或冷淡']
    },
    greenFlags: {
      en: ['Genuinely warm family integration', 'Passionate communication (positive and negative)', 'Investment in shared meals and traditions', 'Verbal expression of love ("ti amo") consistently', 'Emotional availability'],
      ko: ['진심으로 따뜻한 가족 통합', '열정적인 소통(긍정적이든 부정적이든)', '함께하는 식사와 전통에 대한 투자', '지속적인 사랑의 언어적 표현("ti amo")', '감정적 가용성'],
      ja: ['心から温かい家族との統合', '情熱的なコミュニケーション(ポジティブでもネガティブでも)', '共有食事と伝統への投資', '愛の言葉による一貫した表現(「ti amo」)', '感情的な可用性'],
      es: ['Integración familiar genuinamente cálida', 'Comunicación apasionada (positiva y negativa)', 'Inversión en comidas y tradiciones compartidas', 'Expresión verbal de amor ("ti amo") consistentemente', 'Disponibilidad emocional'],
      pt: ['Integração familiar genuinamente calorosa', 'Comunicação apaixonada (positiva e negativa)', 'Investimento em refeições e tradições compartilhadas', 'Expressão verbal de amor ("ti amo") consistentemente', 'Disponibilidade emocional'],
      ar: ['اندماج عائلي دافئ حقيقي', 'تواصل عاطفي (إيجابي وسلبي)', 'استثمار في الوجبات والتقاليد المشتركة', 'التعبير اللفظي عن الحب ("ti amo") باستمرار', 'التوفر العاطفي'],
      ru: ['Искренне тёплая интеграция в семью', 'Страстное общение (позитивное и негативное)', 'Инвестиции в совместные трапезы и традиции', 'Постоянное словесное выражение любви ("ti amo")', 'Эмоциональная доступность'],
      zh: ['真正温暖的家庭融合', '充满激情的沟通(积极和消极)', '投资于共享的餐食和传统', '始终如一地口头表达爱("ti amo")', '情感可获得性']
    },
    culturalNotes: {
      en: 'North (Milan, Turin) vs South (Naples, Sicily) has distinct dating cultures. Regional identity is strong.',
      ko: '북부(밀라노, 토리노) vs 남부(나폴리, 시칠리아)는 별개의 데이팅 문화를 가지고 있습니다. 지역 정체성이 강합니다.',
      ja: '北部(ミラノ、トリノ)と南部(ナポリ、シチリア)は異なるデーティング文化を持っています。地域アイデンティティは強いです。',
      es: 'Norte (Milán, Turín) vs Sur (Nápoles, Sicilia) tienen culturas de citas distintas. La identidad regional es fuerte.',
      pt: 'Norte (Milão, Turim) vs Sul (Nápoles, Sicília) têm culturas de namoro distintas. A identidade regional é forte.',
      ar: 'الشمال (ميلانو، تورينو) مقابل الجنوب (نابولي، صقلية) لديها ثقافات مواعدة متميزة. الهوية الإقليمية قوية.',
      ru: 'Север (Милан, Турин) vs Юг (Неаполь, Сицилия) имеют различные культуры свиданий. Региональная идентичность сильна.',
      zh: '北部(米兰、都灵)与南部(那不勒斯、西西里)有不同的约会文化。地区认同感强烈。'
    },
    popularApps: ['Tinder', 'Meetic', 'Bumble', 'Hinge', 'Lovoo'],
    languageOfLove: {
      en: 'Physical touch + quality time; food is the ultimate expression.',
      ko: '신체 접촉 + 함께하는 시간; 음식이 궁극적인 표현입니다.',
      ja: '身体的接触 + 一緒に過ごす時間;食べ物が究極の表現です。',
      es: 'Contacto físico + tiempo de calidad; la comida es la expresión definitiva.',
      pt: 'Toque físico + tempo de qualidade; comida é a expressão definitiva.',
      ar: 'اللمس الجسدي + الوقت النوعي؛ الطعام هو التعبير النهائي.',
      ru: 'Физическое прикосновение + качественное время; еда — высшее выражение.',
      zh: '身体接触 + 优质时间;食物是终极的表达。'
    }
  },

  CA: {
    code: 'CA',
    overview: {
      en: 'Canadian dating is polite, respectful, and generally low-drama. There is a strong emphasis on consent, communication, and equal partnership. Outdoor activities are a core dating format.',
      ko: '캐나다 연애는 정중하고, 존중하며, 대체로 드라마가 적습니다. 동의, 소통, 평등한 파트너십에 강한 강조가 있습니다. 야외 활동이 핵심 데이팅 형식입니다.',
      ja: 'カナダのデーティングは礼儀正しく、尊重的で、一般的にドラマが少ないです。同意、コミュニケーション、平等なパートナーシップに強い重点があります。屋外活動は中心的なデーティング形式です。',
      es: 'Las citas canadienses son educadas, respetuosas y generalmente sin dramas. Hay un fuerte énfasis en el consentimiento, la comunicación y la asociación igualitaria. Las actividades al aire libre son un formato central de citas.',
      pt: 'O namoro canadense é educado, respeitoso e geralmente sem drama. Há forte ênfase em consentimento, comunicação e parceria igualitária. Atividades ao ar livre são um formato central de namoro.',
      ar: 'المواعدة الكندية مهذبة ومحترمة وعمومًا خالية من الدراما. هناك تركيز قوي على الموافقة والتواصل والشراكة المتساوية. الأنشطة الخارجية هي شكل أساسي للمواعدة.',
      ru: 'Канадские свидания вежливые, уважительные и, как правило, без драм. Сильный акцент на согласии, общении и равном партнёрстве. Активный отдых на природе — основной формат свиданий.',
      zh: '加拿大约会礼貌、尊重,通常低戏剧性。强烈强调同意、沟通和平等伙伴关系。户外活动是核心约会形式。'
    },
    datingStyle: {
      en: 'Warm but not overwhelming; respectful boundaries. Apps are common in urban areas (Toronto, Vancouver, Montreal). Rural dating still often happens through community and friend networks.',
      ko: '따뜻하지만 압도적이지 않으며; 존중하는 경계. 앱이 도시 지역(토론토, 밴쿠버, 몬트리올)에서 흔합니다. 시골 데이팅은 여전히 종종 커뮤니티와 친구 네트워크를 통해 이루어집니다.',
      ja: '温かいが圧倒的ではなく、尊重される境界。アプリは都市部(トロント、バンクーバー、モントリオール)で一般的です。田舎のデーティングは今でもコミュニティや友人のネットワークを通じて起こることが多いです。',
      es: 'Cálido pero no abrumador; límites respetuosos. Las apps son comunes en áreas urbanas (Toronto, Vancouver, Montreal). Las citas rurales aún ocurren a menudo a través de redes comunitarias y de amigos.',
      pt: 'Caloroso mas não avassalador; limites respeitosos. Apps são comuns em áreas urbanas (Toronto, Vancouver, Montreal). Namoro rural ainda acontece frequentemente através de redes comunitárias e de amigos.',
      ar: 'دافئ لكنه ليس ساحقًا؛ حدود محترمة. التطبيقات شائعة في المناطق الحضرية (تورونتو، فانكوفر، مونتريال). لا تزال المواعدة الريفية تحدث غالبًا من خلال شبكات المجتمع والأصدقاء.',
      ru: 'Тёплые, но не подавляющие; уважительные границы. Приложения распространены в городских районах (Торонто, Ванкувер, Монреаль). Сельские свидания всё ещё часто происходят через сообщества и сети друзей.',
      zh: '热情但不压倒;尊重界限。应用在城市地区(多伦多、温哥华、蒙特利尔)常见。农村约会仍然经常通过社区和朋友网络进行。'
    },
    courtship: {
      en: 'Progression is gradual and communicative. Introducing partners at hockey games, cottages, or family cabin trips is a positive relationship milestone.',
      ko: '진행은 점진적이고 소통적입니다. 하키 경기, 오두막, 가족 캐빈 여행에서 파트너를 소개하는 것은 긍정적인 관계 이정표입니다.',
      ja: '進行は段階的でコミュニケーション豊富です。ホッケーの試合、コテージ、家族のキャビン旅行でパートナーを紹介することはポジティブな関係のマイルストーンです。',
      es: 'La progresión es gradual y comunicativa. Presentar a las parejas en partidos de hockey, cabañas o viajes familiares a cabañas es un hito positivo en la relación.',
      pt: 'A progressão é gradual e comunicativa. Apresentar parceiros em jogos de hóquei, chalés ou viagens familiares a cabanas é um marco positivo do relacionamento.',
      ar: 'التقدم تدريجي وتواصلي. تقديم الشركاء في مباريات الهوكي أو الأكواخ أو رحلات الأكواخ العائلية معلم إيجابي في العلاقة.',
      ru: 'Прогресс постепенный и коммуникативный. Знакомство партнёров на хоккейных матчах, в коттеджах или семейных поездках в кабины — позитивная веха отношений.',
      zh: '进展是渐进和沟通性的。在冰球比赛、小屋或家庭小木屋旅行中介绍伴侣是积极的关系里程碑。'
    },
    redFlagsToWatch: {
      en: ['Passive-aggression instead of direct communication', 'Excessive politeness masking real feelings', 'Constant apologizing for legitimate needs', 'Discomfort with outdoor or active dates', 'Political extremism'],
      ko: ['직접적인 소통 대신 수동공격', '진짜 감정을 가리는 과도한 예의', '정당한 필요에 대해 계속 사과', '야외나 활동적인 데이트에 대한 불편', '정치적 극단주의'],
      ja: ['直接的なコミュニケーションの代わりに受動攻撃', '本当の感情を隠す過度な礼儀正しさ', '正当なニーズに対して常に謝る', '屋外やアクティブなデートへの不快感', '政治的過激主義'],
      es: ['Pasivo-agresividad en lugar de comunicación directa', 'Cortesía excesiva enmascarando sentimientos reales', 'Disculparse constantemente por necesidades legítimas', 'Incomodidad con citas al aire libre o activas', 'Extremismo político'],
      pt: ['Passivo-agressividade em vez de comunicação direta', 'Cortesia excessiva mascarando sentimentos reais', 'Pedir desculpas constantemente por necessidades legítimas', 'Desconforto com encontros ao ar livre ou ativos', 'Extremismo político'],
      ar: ['العدوان السلبي بدلاً من التواصل المباشر', 'الأدب المفرط الذي يخفي المشاعر الحقيقية', 'الاعتذار المستمر عن الاحتياجات المشروعة', 'عدم الراحة مع المواعيد الخارجية أو النشطة', 'التطرف السياسي'],
      ru: ['Пассивная агрессия вместо прямого общения', 'Чрезмерная вежливость, скрывающая настоящие чувства', 'Постоянные извинения за законные потребности', 'Дискомфорт при свиданиях на природе или активных', 'Политический экстремизм'],
      zh: ['被动攻击而非直接沟通', '过度礼貌掩盖真实感受', '为合理需求不断道歉', '对户外或活跃约会感到不适', '政治极端主义']
    },
    greenFlags: {
      en: ['Genuine kindness and consistency', 'Comfort discussing feelings openly', 'Enjoying outdoor and cultural activities together', 'Respect for boundaries and consent', 'Financial equality and independence'],
      ko: ['진정한 친절과 일관성', '감정에 대해 열린 대화의 편안함', '함께 야외 및 문화 활동 즐기기', '경계와 동의에 대한 존중', '재정적 평등과 독립성'],
      ja: ['真の親切さと一貫性', '感情についてオープンに話す快適さ', '一緒に屋外と文化活動を楽しむ', '境界と同意への尊重', '経済的平等と独立'],
      es: ['Amabilidad y consistencia genuinas', 'Comodidad discutiendo sentimientos abiertamente', 'Disfrutar actividades al aire libre y culturales juntos', 'Respeto por los límites y el consentimiento', 'Igualdad e independencia financiera'],
      pt: ['Bondade e consistência genuínas', 'Conforto discutindo sentimentos abertamente', 'Aproveitar atividades ao ar livre e culturais juntos', 'Respeito por limites e consentimento', 'Igualdade e independência financeira'],
      ar: ['اللطف والاتساق الحقيقي', 'الراحة في مناقشة المشاعر بصراحة', 'الاستمتاع بالأنشطة الخارجية والثقافية معًا', 'احترام الحدود والموافقة', 'المساواة المالية والاستقلالية'],
      ru: ['Искренняя доброта и постоянство', 'Комфорт в открытом обсуждении чувств', 'Совместное наслаждение активным отдыхом и культурными мероприятиями', 'Уважение к границам и согласию', 'Финансовое равенство и независимость'],
      zh: ['真诚的善良和一致性', '公开讨论感受的舒适感', '一起享受户外和文化活动', '尊重界限和同意', '财务平等和独立']
    },
    culturalNotes: {
      en: 'Quebec has its own dating culture heavily influenced by French tradition. English/French bilingualism is a bonding factor for some couples.',
      ko: '퀘벡은 프랑스 전통에 크게 영향을 받은 자체 데이팅 문화가 있습니다. 영어/프랑스어 이중언어 사용은 일부 커플에게 유대감의 요소입니다.',
      ja: 'ケベックはフランスの伝統に大きく影響された独自のデーティング文化を持っています。英語/フランス語のバイリンガリズムは一部のカップルにとって絆の要素です。',
      es: 'Quebec tiene su propia cultura de citas fuertemente influenciada por la tradición francesa. El bilingüismo inglés/francés es un factor de unión para algunas parejas.',
      pt: 'Quebec tem sua própria cultura de namoro fortemente influenciada pela tradição francesa. O bilinguismo inglês/francês é um fator de união para alguns casais.',
      ar: 'كيبيك لديها ثقافة مواعدة خاصة بها متأثرة بشدة بالتقاليد الفرنسية. الثنائية اللغوية الإنجليزية/الفرنسية عامل ربط لبعض الأزواج.',
      ru: 'У Квебека своя культура свиданий, сильно повлиянная французской традицией. Билингвизм английский/французский является связующим фактором для некоторых пар.',
      zh: '魁北克有自己受法国传统深深影响的约会文化。英/法双语对一些情侣来说是纽带因素。'
    },
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'Match.com', 'OkCupid'],
    languageOfLove: {
      en: 'Quality time + acts of service; shared adventures build bonds.',
      ko: '함께하는 시간 + 행동으로 보여주기; 공유된 모험이 유대를 만듭니다.',
      ja: '一緒に過ごす時間 + 奉仕の行動;共有された冒険が絆を築きます。',
      es: 'Tiempo de calidad + actos de servicio; las aventuras compartidas construyen vínculos.',
      pt: 'Tempo de qualidade + atos de serviço; aventuras compartilhadas constroem laços.',
      ar: 'الوقت النوعي + أعمال الخدمة؛ المغامرات المشتركة تبني الروابط.',
      ru: 'Качественное время + акты служения; совместные приключения создают связи.',
      zh: '优质时间 + 服务行为;共同的冒险建立纽带。'
    }
  },

  AU: {
    code: 'AU',
    overview: {
      en: 'Australian dating is laid-back, casual, and adventure-oriented. "Mateship" — the platonic friendship model — extends into romantic relationships. Directness, humor, and easygoing energy are prized.',
      ko: '호주 연애는 느긋하고, 캐주얼하며, 모험 지향적입니다. "메이트십(Mateship)" — 플라토닉한 우정 모델 — 이 로맨틱한 관계로 확장됩니다. 직접성, 유머, 여유로운 에너지가 소중히 여겨집니다.',
      ja: 'オーストラリアのデーティングはリラックスした、カジュアルで、冒険志向です。「メイトシップ」— プラトニックな友情モデル — がロマンチックな関係にまで拡張されます。直接性、ユーモア、のんびりしたエネルギーが大切にされます。',
      es: 'Las citas australianas son relajadas, casuales y orientadas a la aventura. La "camaradería" (Mateship) — el modelo de amistad platónica — se extiende a las relaciones románticas. La franqueza, el humor y la energía relajada son apreciados.',
      pt: 'O namoro australiano é descontraído, casual e orientado à aventura. "Mateship" — o modelo de amizade platônica — se estende aos relacionamentos românticos. Franqueza, humor e energia tranquila são valorizados.',
      ar: 'المواعدة الأسترالية مريحة وعرضية وموجهة نحو المغامرة. "الرفقة" (Mateship) — نموذج الصداقة الأفلاطونية — تمتد إلى العلاقات الرومانسية. الصراحة والفكاهة والطاقة السهلة تُقدَّر.',
      ru: 'Австралийские свидания непринуждённые, случайные и ориентированные на приключения. "Mateship" — модель платонической дружбы — распространяется на романтические отношения. Прямота, юмор и лёгкая энергия ценятся.',
      zh: '澳大利亚约会悠闲、随意,以冒险为导向。"Mateship"(伙伴情谊)——柏拉图式的友谊模式——延伸到浪漫关系中。直接、幽默和随和的能量受到珍视。'
    },
    datingStyle: {
      en: 'Casual first dates (coffee, beach, pub). Group activities are common. Humor as a filtering tool. Fast physical progression, slow emotional labels.',
      ko: '캐주얼한 첫 데이트(커피, 해변, 펍). 그룹 활동이 흔합니다. 필터링 도구로서의 유머. 빠른 신체적 진행, 느린 감정적 라벨.',
      ja: 'カジュアルな初デート(コーヒー、ビーチ、パブ)。グループ活動が一般的です。フィルタリングツールとしてのユーモア。速い身体的進行、遅い感情的ラベル。',
      es: 'Primeras citas casuales (café, playa, pub). Las actividades grupales son comunes. Humor como herramienta de filtrado. Progresión física rápida, etiquetas emocionales lentas.',
      pt: 'Primeiros encontros casuais (café, praia, pub). Atividades em grupo são comuns. Humor como ferramenta de filtragem. Progressão física rápida, rótulos emocionais lentos.',
      ar: 'مواعيد أولى عرضية (قهوة، شاطئ، حانة). الأنشطة الجماعية شائعة. الفكاهة كأداة تصفية. تقدم جسدي سريع، تسميات عاطفية بطيئة.',
      ru: 'Случайные первые свидания (кофе, пляж, паб). Групповые активности распространены. Юмор как инструмент фильтрации. Быстрый физический прогресс, медленные эмоциональные ярлыки.',
      zh: '休闲的初次约会(咖啡、海滩、酒吧)。团体活动很常见。幽默作为筛选工具。身体接触进展快,情感标签慢。'
    },
    courtship: {
      en: 'Meeting mates is often earlier than meeting family. Weekend trips, camping, and beach outings are core relationship building.',
      ko: '친구들을 만나는 것이 종종 가족을 만나는 것보다 먼저입니다. 주말 여행, 캠핑, 해변 나들이가 핵심 관계 구축입니다.',
      ja: '仲間に会うのは家族に会うよりも早いことがよくあります。週末旅行、キャンプ、ビーチへのお出かけが中心的な関係構築です。',
      es: 'Conocer a los amigos suele ser más temprano que conocer a la familia. Viajes de fin de semana, camping y salidas a la playa son actividades centrales de construcción de relación.',
      pt: 'Conhecer os amigos geralmente é mais cedo que conhecer a família. Viagens de fim de semana, camping e passeios à praia são atividades centrais de construção de relacionamento.',
      ar: 'مقابلة الرفاق غالبًا ما تكون أقرب من مقابلة العائلة. رحلات نهاية الأسبوع والتخييم والرحلات إلى الشاطئ هي البناء الأساسي للعلاقات.',
      ru: 'Знакомство с друзьями часто происходит раньше, чем знакомство с семьёй. Выходные поездки, кемпинг и пляжные вылазки — основа построения отношений.',
      zh: '见朋友通常比见家人早。周末旅行、露营和海滩郊游是核心的关系建设。'
    },
    redFlagsToWatch: {
      en: ['Taking themselves too seriously', 'Not fitting into friend groups (Australian dealbreaker)', 'Excessive planning without spontaneity', 'Not participating in outdoor/adventure activities', 'Overly intense emotional early declarations'],
      ko: ['자신을 너무 진지하게 여김', '친구 그룹에 어울리지 못함(호주식 딜브레이커)', '즉흥성 없는 과도한 계획', '야외/모험 활동에 참여하지 않음', '너무 강렬한 초기 감정 선언'],
      ja: ['自分を真面目に取りすぎる', '友人グループに馴染めない(オーストラリア式のディールブレーカー)', '自発性なしの過度な計画', '屋外/冒険活動に参加しない', '過度に激しい初期の感情的宣言'],
      es: ['Tomarse demasiado en serio', 'No encajar en grupos de amigos (rompedor de acuerdos australiano)', 'Planificación excesiva sin espontaneidad', 'No participar en actividades al aire libre/aventura', 'Declaraciones emocionales tempranas excesivamente intensas'],
      pt: ['Levar-se muito a sério', 'Não se encaixar em grupos de amigos (dealbreaker australiano)', 'Planejamento excessivo sem espontaneidade', 'Não participar de atividades ao ar livre/aventura', 'Declarações emocionais precoces excessivamente intensas'],
      ar: ['أخذ الأمور بجدية زائدة', 'عدم الانسجام مع مجموعات الأصدقاء (كاسر صفقة أسترالي)', 'التخطيط المفرط دون تلقائية', 'عدم المشاركة في الأنشطة الخارجية/المغامرة', 'إعلانات عاطفية مبكرة مكثفة للغاية'],
      ru: ['Слишком серьёзное отношение к себе', 'Не вписывается в группу друзей (австралийский дилбрейкер)', 'Чрезмерное планирование без спонтанности', 'Не участвует в активных/приключенческих мероприятиях', 'Чрезмерно интенсивные ранние эмоциональные заявления'],
      zh: ['把自己看得太重', '不融入朋友圈(澳洲式的关系破裂原因)', '过度计划而没有自发性', '不参与户外/冒险活动', '过于激烈的早期情感宣言']
    },
    greenFlags: {
      en: ['Comfortable with your friend group', 'Adventurous and spontaneous', 'Direct but kind communication', 'Balance of independence and togetherness', 'Playful and self-deprecating humor'],
      ko: ['당신의 친구 그룹과 편안함', '모험심 있고 즉흥적', '직접적이지만 친절한 소통', '독립성과 함께함의 균형', '장난스럽고 자기비하적 유머'],
      ja: ['あなたの友人グループと快適', '冒険的で自発的', '直接的だが親切なコミュニケーション', '独立性と一緒にいることのバランス', '遊び心のある自己卑下的ユーモア'],
      es: ['Cómodo con tu grupo de amigos', 'Aventurero y espontáneo', 'Comunicación directa pero amable', 'Equilibrio de independencia y unión', 'Humor juguetón y autocrítico'],
      pt: ['Confortável com seu grupo de amigos', 'Aventureiro e espontâneo', 'Comunicação direta mas gentil', 'Equilíbrio de independência e união', 'Humor brincalhão e autocrítico'],
      ar: ['مرتاح مع مجموعة أصدقائك', 'مغامر وتلقائي', 'تواصل مباشر لكنه لطيف', 'توازن بين الاستقلالية والاتحاد', 'فكاهة مرحة ونقد ذاتي'],
      ru: ['Комфортно с вашей группой друзей', 'Авантюрный и спонтанный', 'Прямое, но доброе общение', 'Баланс независимости и единения', 'Игривый и самокритичный юмор'],
      zh: ['与你的朋友圈相处自在', '有冒险精神和自发性', '直接但友善的沟通', '独立与共处的平衡', '俏皮和自嘲的幽默']
    },
    culturalNotes: {
      en: 'City vs bush divide is real. Sydney and Melbourne have distinct dating scenes; regional Australia is more traditional.',
      ko: '도시 대 시골의 분단선은 실제적입니다. 시드니와 멜버른은 별개의 데이팅 씬을 가지고 있으며; 지방 호주는 더 전통적입니다.',
      ja: '都市と田舎の分断は本物です。シドニーとメルボルンは異なるデーティングシーンを持っており、地方オーストラリアはより伝統的です。',
      es: 'La división ciudad vs interior es real. Sídney y Melbourne tienen escenas de citas distintas; la Australia regional es más tradicional.',
      pt: 'A divisão cidade vs interior é real. Sydney e Melbourne têm cenas de namoro distintas; a Austrália regional é mais tradicional.',
      ar: 'الانقسام بين المدينة والريف حقيقي. سيدني وملبورن لديهما مشاهد مواعدة متميزة؛ أستراليا الإقليمية أكثر تقليدية.',
      ru: 'Разделение город vs буш реально. У Сиднея и Мельбурна разные сцены свиданий; региональная Австралия более традиционна.',
      zh: '城市与丛林的分界是真实的。悉尼和墨尔本有不同的约会场景;偏远地区的澳大利亚更传统。'
    },
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'RSVP', 'eHarmony'],
    languageOfLove: {
      en: 'Quality time + physical touch; shared adventures = commitment.',
      ko: '함께하는 시간 + 신체 접촉; 공유된 모험 = 헌신.',
      ja: '一緒に過ごす時間 + 身体的接触;共有された冒険 = コミットメント。',
      es: 'Tiempo de calidad + contacto físico; aventuras compartidas = compromiso.',
      pt: 'Tempo de qualidade + toque físico; aventuras compartilhadas = compromisso.',
      ar: 'الوقت النوعي + اللمس الجسدي؛ المغامرات المشتركة = الالتزام.',
      ru: 'Качественное время + физическое прикосновение; совместные приключения = преданность.',
      zh: '优质时间 + 身体接触;共同的冒险 = 承诺。'
    }
  },

  RU: {
    code: 'RU',
    overview: {
      en: 'Russian dating culture blends traditional gender roles with strong emotional intensity. Formal courtship (flowers, gifts, chivalry) coexists with deep, often serious conversation about life, family, and future.',
      ko: '러시아 연애 문화는 전통적 성역할과 강한 감정적 강도를 결합합니다. 공식적인 구애(꽃, 선물, 기사도)가 인생, 가족, 미래에 대한 깊고 종종 진지한 대화와 공존합니다.',
      ja: 'ロシアのデーティング文化は伝統的な性別役割と強い感情的強度を組み合わせています。正式な求愛(花、贈り物、騎士道)が人生、家族、将来についての深く、しばしば真剣な会話と共存しています。',
      es: 'La cultura de citas rusa combina roles de género tradicionales con una fuerte intensidad emocional. El cortejo formal (flores, regalos, caballerosidad) coexiste con conversación profunda, a menudo seria, sobre la vida, la familia y el futuro.',
      pt: 'A cultura de namoro russa combina papéis de gênero tradicionais com forte intensidade emocional. Cortejo formal (flores, presentes, cavalheirismo) coexiste com conversa profunda, muitas vezes séria, sobre vida, família e futuro.',
      ar: 'تجمع ثقافة المواعدة الروسية بين الأدوار الجنسية التقليدية والكثافة العاطفية القوية. تتعايش المغازلة الرسمية (الزهور، الهدايا، الفروسية) مع محادثات عميقة وجدية غالبًا حول الحياة والعائلة والمستقبل.',
      ru: 'Российская культура свиданий сочетает традиционные гендерные роли с сильной эмоциональной интенсивностью. Формальное ухаживание (цветы, подарки, рыцарство) сосуществует с глубокими, часто серьёзными разговорами о жизни, семье и будущем.',
      zh: '俄罗斯约会文化将传统性别角色与强烈的情感强度相结合。正式求爱(鲜花、礼物、绅士风度)与关于生活、家庭和未来的深入、通常严肃的对话共存。'
    },
    datingStyle: {
      en: 'Men are expected to pursue actively and pay on early dates. Physical appearance and self-presentation are highly valued by both genders. Emotional expression is intense but often private.',
      ko: '남성들은 적극적으로 추구하고 초기 데이트에서 지불할 것으로 기대됩니다. 신체적 외모와 자기 표현은 양성 모두에게 높이 평가됩니다. 감정 표현은 강렬하지만 종종 사적입니다.',
      ja: '男性は積極的に追い求め、初期のデートでは支払うことが期待されます。外見と自己表現は両性ともに高く評価されます。感情表現は激しいがしばしばプライベートです。',
      es: 'Se espera que los hombres persigan activamente y paguen en las primeras citas. La apariencia física y la autopresentación son altamente valoradas por ambos géneros. La expresión emocional es intensa pero a menudo privada.',
      pt: 'Espera-se que os homens persigam ativamente e paguem nos primeiros encontros. Aparência física e autoapresentação são altamente valorizadas por ambos os gêneros. Expressão emocional é intensa mas frequentemente privada.',
      ar: 'من المتوقع أن يسعى الرجال بنشاط ويدفعوا في المواعيد المبكرة. المظهر الجسدي والعرض الذاتي مُقدَّران بشدة من قبل كلا الجنسين. التعبير العاطفي مكثف لكنه غالبًا خاص.',
      ru: 'Ожидается, что мужчины будут активно ухаживать и платить на ранних свиданиях. Внешний вид и самопрезентация высоко ценятся обоими полами. Эмоциональное выражение интенсивное, но часто приватное.',
      zh: '男性被期望积极追求并在初次约会付款。外表和自我展现受到两性的高度重视。情感表达强烈但通常是私下的。'
    },
    courtship: {
      en: 'Meeting parents is a significant early milestone. Traditional gender roles are common but shifting in urban centers (Moscow, St. Petersburg).',
      ko: '부모님을 만나는 것은 중요한 초기 이정표입니다. 전통적 성역할이 흔하지만 도시 중심(모스크바, 상트페테르부르크)에서는 변화하고 있습니다.',
      ja: '両親に会うことは重要な初期のマイルストーンです。伝統的な性別役割は一般的ですが、都市中心部(モスクワ、サンクトペテルブルク)では変化しています。',
      es: 'Conocer a los padres es un hito temprano significativo. Los roles de género tradicionales son comunes pero cambian en los centros urbanos (Moscú, San Petersburgo).',
      pt: 'Conhecer os pais é um marco inicial significativo. Papéis de gênero tradicionais são comuns mas estão mudando em centros urbanos (Moscou, São Petersburgo).',
      ar: 'مقابلة الوالدين معلم مبكر مهم. الأدوار الجنسية التقليدية شائعة لكنها تتغير في المراكز الحضرية (موسكو، سانت بطرسبرغ).',
      ru: 'Знакомство с родителями — значимая ранняя веха. Традиционные гендерные роли распространены, но меняются в городских центрах (Москва, Санкт-Петербург).',
      zh: '见父母是重要的早期里程碑。传统性别角色很常见,但在城市中心(莫斯科、圣彼得堡)正在改变。'
    },
    redFlagsToWatch: {
      en: ['Excessive jealousy or possessiveness', 'Financial secrecy or unreliability', 'Refusing to meet family', 'Emotional coldness in private (not just public)', 'Heavy drinking as a pattern'],
      ko: ['과도한 질투나 소유욕', '재정적 비밀이나 불신뢰성', '가족 만나기를 거부', '사적으로도 감정적 냉정(공적일 뿐 아니라)', '패턴화된 폭음'],
      ja: ['過度な嫉妬や独占欲', '経済的秘密や信頼性の欠如', '家族に会うことを拒む', 'プライベートでの感情的冷たさ(公の場だけでなく)', 'パターン化された大量飲酒'],
      es: ['Celos excesivos o posesividad', 'Secretismo financiero o falta de fiabilidad', 'Negarse a conocer a la familia', 'Frialdad emocional en privado (no solo en público)', 'Beber en exceso como patrón'],
      pt: ['Ciúmes excessivos ou possessividade', 'Segredo financeiro ou falta de confiabilidade', 'Recusar-se a conhecer a família', 'Frieza emocional em privado (não apenas em público)', 'Beber pesado como padrão'],
      ar: ['الغيرة المفرطة أو التملك', 'السرية المالية أو عدم الموثوقية', 'رفض مقابلة العائلة', 'البرودة العاطفية على انفراد (ليس فقط علنًا)', 'الإفراط في الشرب كنمط'],
      ru: ['Чрезмерная ревность или собственничество', 'Финансовая скрытность или ненадёжность', 'Отказ знакомиться с семьёй', 'Эмоциональная холодность наедине (не только на публике)', 'Тяжёлое пьянство как паттерн'],
      zh: ['过度嫉妒或占有欲', '财务保密或不可靠', '拒绝见家人', '私下的情感冷漠(不仅是公开的)', '习惯性酗酒']
    },
    greenFlags: {
      en: ['Chivalrous, thoughtful gestures', 'Deep loyalty once committed', 'Family orientation', 'Emotional depth in private', 'Investment in the relationship\'s future'],
      ko: ['기사도적이고 자상한 제스처', '헌신 후 깊은 충성심', '가족 지향', '사적으로의 감정적 깊이', '관계의 미래에 대한 투자'],
      ja: ['騎士道的で心のこもった仕草', 'コミットした後の深い忠誠', '家族志向', 'プライベートでの感情的な深さ', '関係の将来への投資'],
      es: ['Gestos caballerosos y considerados', 'Lealtad profunda una vez comprometido', 'Orientación familiar', 'Profundidad emocional en privado', 'Inversión en el futuro de la relación'],
      pt: ['Gestos cavalheirescos e atenciosos', 'Lealdade profunda uma vez comprometido', 'Orientação familiar', 'Profundidade emocional em privado', 'Investimento no futuro do relacionamento'],
      ar: ['إيماءات فروسية ومدروسة', 'ولاء عميق بمجرد الالتزام', 'التوجه العائلي', 'العمق العاطفي على انفراد', 'الاستثمار في مستقبل العلاقة'],
      ru: ['Рыцарские, продуманные жесты', 'Глубокая лояльность после обязательств', 'Ориентация на семью', 'Эмоциональная глубина наедине', 'Инвестиции в будущее отношений'],
      zh: ['绅士风度、贴心的举动', '一旦承诺就深深忠诚', '家庭导向', '私下的情感深度', '投资于关系的未来']
    },
    culturalNotes: {
      en: 'Regional differences between Moscow, St. Petersburg, and other regions are notable. Traditional expectations remain strong.',
      ko: '모스크바, 상트페테르부르크, 다른 지역 간의 차이가 두드러집니다. 전통적 기대가 여전히 강합니다.',
      ja: 'モスクワ、サンクトペテルブルク、その他の地域間の違いは顕著です。伝統的な期待は依然として強いです。',
      es: 'Las diferencias regionales entre Moscú, San Petersburgo y otras regiones son notables. Las expectativas tradicionales siguen siendo fuertes.',
      pt: 'As diferenças regionais entre Moscou, São Petersburgo e outras regiões são notáveis. Expectativas tradicionais permanecem fortes.',
      ar: 'الاختلافات الإقليمية بين موسكو وسانت بطرسبرغ والمناطق الأخرى ملحوظة. التوقعات التقليدية لا تزال قوية.',
      ru: 'Региональные различия между Москвой, Санкт-Петербургом и другими регионами заметны. Традиционные ожидания остаются сильными.',
      zh: '莫斯科、圣彼得堡和其他地区之间的差异明显。传统期望仍然强烈。'
    },
    popularApps: ['Mamba', 'Badoo', 'Tinder', 'Loveplanet', 'VK Dating'],
    languageOfLove: {
      en: 'Acts of service + gifts; tangible commitment matters.',
      ko: '행동으로 보여주기 + 선물; 실질적인 헌신이 중요합니다.',
      ja: '奉仕の行動 + 贈り物;具体的なコミットメントが重要です。',
      es: 'Actos de servicio + regalos; el compromiso tangible importa.',
      pt: 'Atos de serviço + presentes; compromisso tangível importa.',
      ar: 'أعمال الخدمة + الهدايا؛ الالتزام الملموس مهم.',
      ru: 'Акты служения + подарки; ощутимая приверженность имеет значение.',
      zh: '服务行为 + 礼物;实实在在的承诺很重要。'
    }
  },

  BR: {
    code: 'BR',
    overview: {
      en: 'Brazilian dating is warm, physically expressive, and family-centered. Public displays of affection are normal. Dancing, music, and social gatherings are core relationship contexts.',
      ko: '브라질 연애는 따뜻하고, 신체적으로 표현이 풍부하며, 가족 중심적입니다. 공개적 애정 표현이 정상적입니다. 춤, 음악, 사교 모임이 핵심 관계 맥락입니다.',
      ja: 'ブラジルのデーティングは温かく、身体的表現豊かで、家族中心です。公共の場での愛情表現は普通です。ダンス、音楽、社交的な集まりが中心的な関係の文脈です。',
      es: 'Las citas brasileñas son cálidas, físicamente expresivas y centradas en la familia. Las muestras públicas de afecto son normales. Bailar, música y reuniones sociales son contextos centrales de relación.',
      pt: 'O namoro brasileiro é caloroso, fisicamente expressivo e centrado na família. Demonstrações públicas de afeto são normais. Dançar, música e encontros sociais são contextos centrais de relacionamento.',
      ar: 'المواعدة البرازيلية دافئة ومعبرة جسديًا ومركزها العائلة. مظاهر المودة العلنية طبيعية. الرقص والموسيقى والتجمعات الاجتماعية سياقات أساسية للعلاقات.',
      ru: 'Бразильские свидания тёплые, физически выразительные и семейно-центричные. Публичные проявления привязанности нормальны. Танцы, музыка и общественные собрания — основной контекст отношений.',
      zh: '巴西约会热情、身体表达丰富,以家庭为中心。公开的情感表达是正常的。跳舞、音乐和社交聚会是核心的关系背景。'
    },
    datingStyle: {
      en: 'Fast physical progression, warm emotional expression, group-oriented socializing. Beach hangs, samba, and Carnival culture influence dating rhythms.',
      ko: '빠른 신체적 진행, 따뜻한 감정 표현, 그룹 중심의 사교. 해변에서 놀기, 삼바, 카니발 문화가 데이팅 리듬에 영향을 미칩니다.',
      ja: '速い身体的進行、温かい感情表現、グループ志向の社交。ビーチでの時間、サンバ、カーニバル文化がデーティングのリズムに影響を与えます。',
      es: 'Progresión física rápida, expresión emocional cálida, socialización orientada al grupo. Salidas a la playa, samba y cultura de Carnaval influyen en los ritmos de citas.',
      pt: 'Progressão física rápida, expressão emocional calorosa, socialização orientada ao grupo. Passeios na praia, samba e cultura do Carnaval influenciam ritmos de namoro.',
      ar: 'تقدم جسدي سريع، وتعبير عاطفي دافئ، وتنشئة اجتماعية جماعية. التسكع على الشاطئ والسامبا وثقافة الكرنفال تؤثر على إيقاعات المواعدة.',
      ru: 'Быстрый физический прогресс, тёплое эмоциональное выражение, групповое общение. Прогулки на пляже, самба и культура карнавала влияют на ритмы свиданий.',
      zh: '身体接触进展快、情感表达温暖、以群体为导向的社交。海滩游玩、桑巴和狂欢节文化影响约会节奏。'
    },
    courtship: {
      en: 'Family involvement is very early and important. "Namorado/a" (boyfriend/girlfriend) is a serious title. Public affection is fully accepted.',
      ko: '가족의 관여는 매우 이르고 중요합니다. "Namorado/a"(남자친구/여자친구)는 진지한 호칭입니다. 공개적 애정은 완전히 수용됩니다.',
      ja: '家族の関与は非常に早く、重要です。「Namorado/a」(彼氏/彼女)は真剣な肩書きです。公共の場での愛情は完全に受け入れられます。',
      es: 'La participación familiar es muy temprana e importante. "Namorado/a" (novio/novia) es un título serio. El afecto público es completamente aceptado.',
      pt: 'O envolvimento familiar é muito precoce e importante. "Namorado/a" é um título sério. Afeto público é totalmente aceito.',
      ar: 'مشاركة العائلة مبكرة جدًا ومهمة. "Namorado/a" (صديق/صديقة) لقب جدي. المودة العلنية مقبولة تمامًا.',
      ru: 'Участие семьи очень раннее и важное. "Namorado/a" (парень/девушка) — серьёзный титул. Публичная привязанность полностью принимается.',
      zh: '家庭参与很早且很重要。"Namorado/a"(男朋友/女朋友)是严肃的称呼。公开的情感完全被接受。'
    },
    redFlagsToWatch: {
      en: ['Excessive jealousy (a cultural pattern to watch)', 'Isolation from friends or family', 'Financial control', 'Reluctance to introduce you to family', 'Discomfort with warmth and physical affection'],
      ko: ['과도한 질투(주의해야 할 문화적 패턴)', '친구나 가족으로부터의 격리', '재정적 통제', '가족에게 소개하기를 꺼림', '따뜻함과 신체적 애정에 대한 불편함'],
      ja: ['過度の嫉妬(注意すべき文化的パターン)', '友人や家族からの孤立', '経済的支配', '家族に紹介することへの躊躇', '温かさや身体的愛情への不快感'],
      es: ['Celos excesivos (un patrón cultural a observar)', 'Aislamiento de amigos o familia', 'Control financiero', 'Reticencia a presentarte a la familia', 'Incomodidad con la calidez y el afecto físico'],
      pt: ['Ciúmes excessivos (um padrão cultural a observar)', 'Isolamento de amigos ou família', 'Controle financeiro', 'Relutância em apresentá-lo à família', 'Desconforto com carinho e afeto físico'],
      ar: ['الغيرة المفرطة (نمط ثقافي يستحق المراقبة)', 'العزلة عن الأصدقاء أو العائلة', 'التحكم المالي', 'التردد في تقديمك للعائلة', 'عدم الراحة مع الدفء والمودة الجسدية'],
      ru: ['Чрезмерная ревность (культурный паттерн для наблюдения)', 'Изоляция от друзей или семьи', 'Финансовый контроль', 'Нежелание знакомить с семьёй', 'Дискомфорт с теплотой и физической привязанностью'],
      zh: ['过度嫉妒(需要注意的文化模式)', '与朋友或家人隔离', '经济控制', '不愿介绍给家人', '对温暖和身体亲密感到不适']
    },
    greenFlags: {
      en: ['Warm family integration', 'Consistent emotional expression', 'Enjoyment of music, dance, and celebration', 'Physical affection without possessiveness', 'Loyalty and passion balanced'],
      ko: ['따뜻한 가족 통합', '지속적인 감정 표현', '음악, 춤, 축하 즐기기', '소유욕 없는 신체적 애정', '균형 잡힌 충성심과 열정'],
      ja: ['温かい家族統合', '一貫した感情表現', '音楽、ダンス、祝賀を楽しむ', '独占欲のない身体的愛情', 'バランスの取れた忠誠と情熱'],
      es: ['Integración familiar cálida', 'Expresión emocional consistente', 'Disfrute de música, baile y celebración', 'Afecto físico sin posesividad', 'Lealtad y pasión equilibradas'],
      pt: ['Integração familiar calorosa', 'Expressão emocional consistente', 'Aproveitar música, dança e celebração', 'Afeto físico sem possessividade', 'Lealdade e paixão equilibradas'],
      ar: ['اندماج عائلي دافئ', 'تعبير عاطفي متسق', 'الاستمتاع بالموسيقى والرقص والاحتفال', 'مودة جسدية دون تملك', 'الولاء والعاطفة متوازنان'],
      ru: ['Тёплая интеграция в семью', 'Постоянное эмоциональное выражение', 'Наслаждение музыкой, танцами и празднованием', 'Физическая привязанность без собственничества', 'Верность и страсть сбалансированы'],
      zh: ['温暖的家庭融合', '一贯的情感表达', '享受音乐、舞蹈和庆祝', '不占有的身体亲密', '忠诚与激情平衡']
    },
    culturalNotes: {
      en: 'Regional identity is strong (Rio vs Sao Paulo vs Northeast). Religious background influences dating pace and expectations.',
      ko: '지역 정체성이 강합니다(리우 vs 상파울루 vs 북동부). 종교적 배경이 데이팅 속도와 기대에 영향을 미칩니다.',
      ja: '地域アイデンティティは強い(リオ vs サンパウロ vs 北東部)。宗教的背景がデーティングのペースと期待に影響します。',
      es: 'La identidad regional es fuerte (Río vs São Paulo vs Nordeste). El contexto religioso influye en el ritmo de las citas y las expectativas.',
      pt: 'A identidade regional é forte (Rio vs São Paulo vs Nordeste). O contexto religioso influencia o ritmo do namoro e as expectativas.',
      ar: 'الهوية الإقليمية قوية (ريو مقابل ساو باولو مقابل الشمال الشرقي). الخلفية الدينية تؤثر على وتيرة المواعدة والتوقعات.',
      ru: 'Региональная идентичность сильна (Рио vs Сан-Паулу vs Северо-Восток). Религиозный фон влияет на темп свиданий и ожидания.',
      zh: '地区认同感强烈(里约 vs 圣保罗 vs 东北部)。宗教背景影响约会节奏和期望。'
    },
    popularApps: ['Tinder', 'Happn', 'Par Perfeito', 'Bumble', 'OkCupid'],
    languageOfLove: {
      en: 'Physical touch + words of affirmation; expression is constant.',
      ko: '신체 접촉 + 말로 표현하기; 표현이 지속적입니다.',
      ja: '身体的接触 + 肯定の言葉;表現は絶え間ない。',
      es: 'Contacto físico + palabras de afirmación; la expresión es constante.',
      pt: 'Toque físico + palavras de afirmação; a expressão é constante.',
      ar: 'اللمس الجسدي + كلمات التأكيد؛ التعبير مستمر.',
      ru: 'Физическое прикосновение + слова подтверждения; выражение постоянно.',
      zh: '身体接触 + 肯定的言语;表达是持续的。'
    }
  },

  IN: {
    code: 'IN',
    overview: {
      en: 'Indian dating spans a huge spectrum — from arranged marriages (still very common) to fully modern app-based dating in metros. Family involvement and long-term intent are usually central even in modern dating.',
      ko: '인도 연애는 광범위한 스펙트럼을 아우릅니다 — 중매 결혼(여전히 매우 흔함)부터 대도시의 완전히 현대적인 앱 기반 데이팅까지. 현대 데이팅에서도 가족의 관여와 장기적 의도가 대개 중심입니다.',
      ja: 'インドのデーティングは巨大なスペクトルにわたります — 見合い結婚(依然として非常に一般的)から大都市の完全に現代的なアプリベースのデーティングまで。現代的なデーティングでも家族の関与と長期的な意図が通常中心です。',
      es: 'Las citas indias abarcan un enorme espectro — desde matrimonios arreglados (todavía muy comunes) hasta citas totalmente modernas basadas en apps en las metrópolis. La participación familiar y la intención a largo plazo suelen ser centrales incluso en las citas modernas.',
      pt: 'O namoro indiano abrange um enorme espectro — de casamentos arranjados (ainda muito comuns) a namoro totalmente moderno baseado em apps em metrópoles. Envolvimento familiar e intenção de longo prazo geralmente são centrais mesmo no namoro moderno.',
      ar: 'المواعدة الهندية تمتد على طيف واسع — من الزيجات المرتبة (لا تزال شائعة جدًا) إلى المواعدة المعتمدة على التطبيقات الحديثة تمامًا في المدن الكبرى. مشاركة العائلة والنية طويلة الأجل عادةً ما تكون محورية حتى في المواعدة الحديثة.',
      ru: 'Индийские свидания охватывают огромный спектр — от договорных браков (всё ещё очень распространённых) до полностью современных свиданий на основе приложений в мегаполисах. Участие семьи и долгосрочные намерения обычно центральны даже в современных свиданиях.',
      zh: '印度约会涵盖广泛的范围——从包办婚姻(仍然非常常见)到大都市中完全现代的应用约会。即使在现代约会中,家庭参与和长期意图通常也是核心。'
    },
    datingStyle: {
      en: 'Discretion in early stages (especially in traditional families). Family approval is a major factor. Long conversations about life goals, career, and future are early priorities.',
      ko: '초기 단계에서의 신중함(특히 전통적인 가족에서). 가족의 승인이 주요 요인입니다. 인생 목표, 경력, 미래에 대한 긴 대화가 초기 우선순위입니다.',
      ja: '初期段階での慎重さ(特に伝統的な家族で)。家族の承認は主要な要因です。人生の目標、キャリア、将来についての長い会話が初期の優先事項です。',
      es: 'Discreción en las primeras etapas (especialmente en familias tradicionales). La aprobación familiar es un factor importante. Las largas conversaciones sobre metas de vida, carrera y futuro son prioridades tempranas.',
      pt: 'Discrição nas primeiras fases (especialmente em famílias tradicionais). Aprovação familiar é um fator importante. Longas conversas sobre metas de vida, carreira e futuro são prioridades iniciais.',
      ar: 'التكتم في المراحل المبكرة (خاصة في العائلات التقليدية). موافقة العائلة عامل رئيسي. المحادثات الطويلة حول أهداف الحياة والمهنة والمستقبل هي أولويات مبكرة.',
      ru: 'Осторожность на ранних этапах (особенно в традиционных семьях). Одобрение семьи — главный фактор. Долгие разговоры о жизненных целях, карьере и будущем — ранние приоритеты.',
      zh: '早期阶段的谨慎(尤其是在传统家庭中)。家庭认可是主要因素。关于人生目标、职业和未来的长时间对话是早期优先事项。'
    },
    courtship: {
      en: 'Family meetings are pivotal. Arranged marriage networks (Shaadi.com, Jeevansathi) coexist with dating apps. Religious and caste considerations are often present.',
      ko: '가족 모임이 중추적입니다. 중매 결혼 네트워크(Shaadi.com, Jeevansathi)가 데이팅 앱과 공존합니다. 종교적, 카스트 고려사항이 종종 존재합니다.',
      ja: '家族の会合は極めて重要です。見合い結婚ネットワーク(Shaadi.com、Jeevansathi)がデーティングアプリと共存しています。宗教とカースト考慮事項がしばしば存在します。',
      es: 'Las reuniones familiares son cruciales. Las redes de matrimonios arreglados (Shaadi.com, Jeevansathi) coexisten con las apps de citas. Las consideraciones religiosas y de casta a menudo están presentes.',
      pt: 'Encontros familiares são cruciais. Redes de casamentos arranjados (Shaadi.com, Jeevansathi) coexistem com apps de namoro. Considerações religiosas e de casta frequentemente estão presentes.',
      ar: 'الاجتماعات العائلية محورية. تتعايش شبكات الزواج المرتب (Shaadi.com، Jeevansathi) مع تطبيقات المواعدة. غالبًا ما تكون الاعتبارات الدينية والطبقية موجودة.',
      ru: 'Семейные встречи имеют решающее значение. Сети договорных браков (Shaadi.com, Jeevansathi) сосуществуют с приложениями для знакомств. Религиозные и кастовые соображения часто присутствуют.',
      zh: '家庭会面至关重要。包办婚姻网络(Shaadi.com、Jeevansathi)与约会应用并存。宗教和种姓考虑经常存在。'
    },
    redFlagsToWatch: {
      en: ['Excessive family control without personal agency', 'Financial vagueness', 'Discrimination based on caste or religion', 'Not being able to define intent clearly', 'Very different life values that were hidden early'],
      ko: ['개인적 주체성 없는 과도한 가족 통제', '재정적 모호함', '카스트나 종교에 기반한 차별', '의도를 명확히 정의할 수 없음', '초기에 숨겨진 매우 다른 삶의 가치'],
      ja: ['個人の主体性のない過度な家族の支配', '経済的曖昧さ', 'カーストや宗教に基づく差別', '意図を明確に定義できない', '初期に隠されていた非常に異なる人生価値観'],
      es: ['Control familiar excesivo sin agencia personal', 'Vaguedad financiera', 'Discriminación basada en casta o religión', 'No poder definir intenciones claramente', 'Valores de vida muy diferentes que se ocultaron temprano'],
      pt: ['Controle familiar excessivo sem agência pessoal', 'Vaguidão financeira', 'Discriminação baseada em casta ou religião', 'Incapaz de definir intenções claramente', 'Valores de vida muito diferentes que foram escondidos cedo'],
      ar: ['التحكم العائلي المفرط دون فاعلية شخصية', 'الغموض المالي', 'التمييز على أساس الطبقة أو الدين', 'عدم القدرة على تحديد النية بوضوح', 'قيم حياة مختلفة جدًا كانت مخفية في وقت مبكر'],
      ru: ['Чрезмерный семейный контроль без личной воли', 'Финансовая неясность', 'Дискриминация по касте или религии', 'Неспособность чётко определить намерения', 'Очень разные жизненные ценности, скрытые ранее'],
      zh: ['过度的家庭控制而无个人主动性', '财务模糊', '基于种姓或宗教的歧视', '无法清楚地定义意图', '早期隐藏的非常不同的生活价值观']
    },
    greenFlags: {
      en: ['Clear intent and life planning', 'Respect for both families', 'Balance between tradition and personal choice', 'Ambition matched with values', 'Communication about expectations'],
      ko: ['명확한 의도와 인생 계획', '양가 가족에 대한 존중', '전통과 개인적 선택 사이의 균형', '가치관과 일치하는 야망', '기대에 대한 소통'],
      ja: ['明確な意図と人生設計', '両家族への尊重', '伝統と個人の選択の間のバランス', '価値観と一致する野心', '期待についてのコミュニケーション'],
      es: ['Intención clara y planificación de vida', 'Respeto por ambas familias', 'Equilibrio entre tradición y elección personal', 'Ambición alineada con valores', 'Comunicación sobre expectativas'],
      pt: ['Intenção clara e planejamento de vida', 'Respeito por ambas as famílias', 'Equilíbrio entre tradição e escolha pessoal', 'Ambição alinhada com valores', 'Comunicação sobre expectativas'],
      ar: ['نية واضحة وتخطيط للحياة', 'احترام كلتا العائلتين', 'التوازن بين التقاليد والاختيار الشخصي', 'الطموح المتوافق مع القيم', 'التواصل حول التوقعات'],
      ru: ['Чёткие намерения и планирование жизни', 'Уважение к обеим семьям', 'Баланс между традицией и личным выбором', 'Амбиции, соответствующие ценностям', 'Общение об ожиданиях'],
      zh: ['明确的意图和人生规划', '尊重双方家庭', '传统与个人选择的平衡', '与价值观相符的雄心', '关于期望的沟通']
    },
    culturalNotes: {
      en: 'Metro (Mumbai, Delhi, Bangalore) vs Tier 2/3 cities is a large divide. Diaspora Indian dating often blends multiple cultural expectations.',
      ko: '대도시(뭄바이, 델리, 방갈로르) 대 2/3선 도시는 큰 분단선입니다. 디아스포라 인도 데이팅은 종종 여러 문화적 기대를 혼합합니다.',
      ja: '大都市(ムンバイ、デリー、バンガロール)対2/3線都市は大きな分断です。ディアスポラのインドのデーティングは、しばしば複数の文化的期待をブレンドします。',
      es: 'Metro (Mumbai, Delhi, Bangalore) vs ciudades de Nivel 2/3 es una gran división. Las citas indias de la diáspora a menudo mezclan múltiples expectativas culturales.',
      pt: 'Metrô (Mumbai, Delhi, Bangalore) vs cidades Tier 2/3 é uma grande divisão. Namoro indiano da diáspora frequentemente mistura múltiplas expectativas culturais.',
      ar: 'المدن الكبرى (مومباي، دلهي، بنغالور) مقابل مدن الفئة 2/3 انقسام كبير. المواعدة الهندية في المهجر غالبًا ما تمزج توقعات ثقافية متعددة.',
      ru: 'Мегаполисы (Мумбаи, Дели, Бангалор) vs города 2/3 уровня — большой разрыв. Индийские свидания диаспоры часто смешивают несколько культурных ожиданий.',
      zh: '大都市(孟买、德里、班加罗尔)与二三线城市有很大差异。散居印度约会通常混合了多种文化期望。'
    },
    popularApps: ['Bumble', 'Tinder', 'Hinge', 'Shaadi.com', 'TrulyMadly'],
    languageOfLove: {
      en: 'Acts of service + quality time; long-term investment is romance.',
      ko: '행동으로 보여주기 + 함께하는 시간; 장기적 투자가 로맨스입니다.',
      ja: '奉仕の行動 + 一緒に過ごす時間;長期的投資がロマンスです。',
      es: 'Actos de servicio + tiempo de calidad; la inversión a largo plazo es romance.',
      pt: 'Atos de serviço + tempo de qualidade; investimento de longo prazo é romance.',
      ar: 'أعمال الخدمة + الوقت النوعي؛ الاستثمار طويل الأجل هو الرومانسية.',
      ru: 'Акты служения + качественное время; долгосрочные инвестиции — это романтика.',
      zh: '服务行为 + 优质时间;长期的投入就是浪漫。'
    }
  },

  MX: {
    code: 'MX',
    overview: {
      en: 'Mexican dating is warm, family-oriented, and often traditional. Family gatherings, food, music, and celebration are central to relationship life. Public affection is welcomed.',
      ko: '멕시코 연애는 따뜻하고, 가족 지향적이며, 종종 전통적입니다. 가족 모임, 음식, 음악, 축하가 관계 생활의 중심입니다. 공개적 애정이 환영받습니다.',
      ja: 'メキシコのデーティングは温かく、家族志向で、しばしば伝統的です。家族の集まり、食べ物、音楽、祝賀が関係生活の中心です。公共の場での愛情は歓迎されます。',
      es: 'Las citas mexicanas son cálidas, orientadas a la familia y a menudo tradicionales. Las reuniones familiares, la comida, la música y las celebraciones son centrales en la vida en pareja. El afecto público es bienvenido.',
      pt: 'O namoro mexicano é caloroso, orientado à família e frequentemente tradicional. Reuniões familiares, comida, música e celebração são centrais na vida de relacionamento. Afeto público é bem-vindo.',
      ar: 'المواعدة المكسيكية دافئة، وموجهة للعائلة، وغالبًا ما تكون تقليدية. التجمعات العائلية والطعام والموسيقى والاحتفال محورية في حياة العلاقات. المودة العلنية مرحب بها.',
      ru: 'Мексиканские свидания тёплые, семейно-ориентированные и часто традиционные. Семейные встречи, еда, музыка и празднование — центральные в жизни отношений. Публичная привязанность приветствуется.',
      zh: '墨西哥约会热情、以家庭为导向,通常是传统的。家庭聚会、食物、音乐和庆祝是关系生活的核心。公开的情感表达受欢迎。'
    },
    datingStyle: {
      en: 'Passionate expression, group-oriented socializing, family involvement. Traditional chivalry coexists with modern equality in urban areas.',
      ko: '열정적인 표현, 그룹 중심의 사교, 가족 관여. 전통적인 기사도가 도시 지역의 현대적 평등과 공존합니다.',
      ja: '情熱的な表現、グループ志向の社交、家族関与。伝統的な騎士道が都市部の現代的平等と共存しています。',
      es: 'Expresión apasionada, socialización orientada al grupo, participación familiar. La caballerosidad tradicional coexiste con la igualdad moderna en áreas urbanas.',
      pt: 'Expressão apaixonada, socialização orientada ao grupo, envolvimento familiar. Cavalheirismo tradicional coexiste com igualdade moderna em áreas urbanas.',
      ar: 'تعبير عاطفي، وتنشئة اجتماعية موجهة نحو المجموعة، ومشاركة عائلية. تتعايش الفروسية التقليدية مع المساواة الحديثة في المناطق الحضرية.',
      ru: 'Страстное выражение, групповое общение, участие семьи. Традиционное рыцарство сосуществует с современным равенством в городских районах.',
      zh: '充满激情的表达、以群体为导向的社交、家庭参与。传统的绅士风度在城市地区与现代平等共存。'
    },
    courtship: {
      en: 'Meeting family is a major, positive milestone. Religious values often play a role (Catholic tradition strong).',
      ko: '가족을 만나는 것은 주요하고 긍정적인 이정표입니다. 종교적 가치가 종종 역할을 합니다(강한 가톨릭 전통).',
      ja: '家族に会うことは重要でポジティブなマイルストーンです。宗教的価値観がしばしば役割を果たします(強いカトリックの伝統)。',
      es: 'Conocer a la familia es un hito importante y positivo. Los valores religiosos a menudo desempeñan un papel (tradición católica fuerte).',
      pt: 'Conhecer a família é um marco importante e positivo. Valores religiosos frequentemente desempenham papel (tradição católica forte).',
      ar: 'مقابلة العائلة معلم إيجابي كبير. غالبًا ما تلعب القيم الدينية دورًا (التقاليد الكاثوليكية قوية).',
      ru: 'Знакомство с семьёй — важная позитивная веха. Религиозные ценности часто играют роль (сильная католическая традиция).',
      zh: '见家人是重要而积极的里程碑。宗教价值观经常起作用(天主教传统深厚)。'
    },
    redFlagsToWatch: {
      en: ['Machismo without emotional availability', 'Excessive jealousy', 'Financial control', 'Isolation from family or friends', 'Refusing to define the relationship'],
      ko: ['감정적 가용성 없는 마초주의', '과도한 질투', '재정적 통제', '가족이나 친구로부터의 격리', '관계 정의 거부'],
      ja: ['感情的可用性のないマチスモ', '過度な嫉妬', '経済的支配', '家族や友人からの孤立', '関係を定義することを拒む'],
      es: ['Machismo sin disponibilidad emocional', 'Celos excesivos', 'Control financiero', 'Aislamiento de familia o amigos', 'Negarse a definir la relación'],
      pt: ['Machismo sem disponibilidade emocional', 'Ciúmes excessivos', 'Controle financeiro', 'Isolamento de família ou amigos', 'Recusar-se a definir o relacionamento'],
      ar: ['الذكورية دون توفر عاطفي', 'الغيرة المفرطة', 'التحكم المالي', 'العزلة عن العائلة أو الأصدقاء', 'رفض تحديد العلاقة'],
      ru: ['Мачизм без эмоциональной доступности', 'Чрезмерная ревность', 'Финансовый контроль', 'Изоляция от семьи или друзей', 'Отказ определять отношения'],
      zh: ['大男子主义而无情感可获得性', '过度嫉妒', '经济控制', '与家人或朋友隔离', '拒绝定义关系']
    },
    greenFlags: {
      en: ['Family warmth and integration', 'Consistent affection', 'Cultural pride shared with you', 'Emotional and physical expression balanced', 'Long-term intent'],
      ko: ['가족의 따뜻함과 통합', '지속적인 애정', '당신과 공유하는 문화적 자부심', '균형 잡힌 감정적, 신체적 표현', '장기적 의도'],
      ja: ['家族の温かさと統合', '一貫した愛情', 'あなたと共有する文化的誇り', '感情的および身体的表現のバランス', '長期的な意図'],
      es: ['Calidez e integración familiar', 'Afecto constante', 'Orgullo cultural compartido contigo', 'Expresión emocional y física equilibrada', 'Intención a largo plazo'],
      pt: ['Calor e integração familiar', 'Afeto consistente', 'Orgulho cultural compartilhado com você', 'Expressão emocional e física equilibrada', 'Intenção de longo prazo'],
      ar: ['الدفء العائلي والاندماج', 'مودة ثابتة', 'الفخر الثقافي المشترك معك', 'التعبير العاطفي والجسدي المتوازن', 'النية طويلة الأجل'],
      ru: ['Семейное тепло и интеграция', 'Постоянная привязанность', 'Культурная гордость, разделяемая с вами', 'Сбалансированное эмоциональное и физическое выражение', 'Долгосрочные намерения'],
      zh: ['家庭温暖和融合', '一贯的情感', '与你分享的文化自豪感', '情感和身体表达的平衡', '长期意图']
    },
    culturalNotes: {
      en: 'Mexico City is quite modern; smaller cities more traditional. Border regions have significant US cultural influence.',
      ko: '멕시코 시티는 상당히 현대적이며; 작은 도시들은 더 전통적입니다. 국경 지역은 상당한 미국 문화적 영향을 가지고 있습니다.',
      ja: 'メキシコシティはかなり現代的で、小さな都市はより伝統的です。国境地域は米国の文化的影響が大きいです。',
      es: 'La Ciudad de México es bastante moderna; las ciudades más pequeñas son más tradicionales. Las regiones fronterizas tienen una influencia cultural estadounidense significativa.',
      pt: 'A Cidade do México é bastante moderna; cidades menores são mais tradicionais. Regiões fronteiriças têm influência cultural americana significativa.',
      ar: 'مكسيكو سيتي حديثة جدًا؛ المدن الأصغر أكثر تقليدية. تتمتع مناطق الحدود بتأثير ثقافي أمريكي كبير.',
      ru: 'Мехико довольно современный; меньшие города более традиционны. Приграничные регионы имеют значительное американское культурное влияние.',
      zh: '墨西哥城相当现代;较小的城市更传统。边境地区有显著的美国文化影响。'
    },
    popularApps: ['Tinder', 'Bumble', 'Happn', 'Badoo', 'OkCupid'],
    languageOfLove: {
      en: 'Physical touch + words of affirmation; grand gestures welcomed.',
      ko: '신체 접촉 + 말로 표현하기; 거창한 제스처가 환영받습니다.',
      ja: '身体的接触 + 肯定の言葉;大げさな仕草は歓迎されます。',
      es: 'Contacto físico + palabras de afirmación; los grandes gestos son bienvenidos.',
      pt: 'Toque físico + palavras de afirmação; grandes gestos são bem-vindos.',
      ar: 'اللمس الجسدي + كلمات التأكيد؛ الإيماءات الكبرى مرحب بها.',
      ru: 'Физическое прикосновение + слова подтверждения; грандиозные жесты приветствуются.',
      zh: '身体接触 + 肯定的言语;夸张的举动受欢迎。'
    }
  },

  ID: {
    code: 'ID',
    overview: {
      en: 'Indonesian dating is influenced by religious values (predominantly Muslim, with significant Hindu, Christian, and Buddhist minorities) and family expectations. Marriage-oriented dating is the norm in most communities.',
      ko: '인도네시아 연애는 종교적 가치(주로 무슬림, 상당한 힌두교, 기독교, 불교 소수민족 포함)와 가족의 기대에 영향을 받습니다. 결혼 지향적 데이팅이 대부분 커뮤니티에서 표준입니다.',
      ja: 'インドネシアのデーティングは宗教的価値観(主にイスラム教で、大幅なヒンドゥー教、キリスト教、仏教の少数派を含む)と家族の期待に影響されます。結婚志向のデーティングがほとんどのコミュニティで標準です。',
      es: 'Las citas indonesias están influenciadas por valores religiosos (predominantemente musulmán, con minorías hindúes, cristianas y budistas significativas) y expectativas familiares. Las citas orientadas al matrimonio son la norma en la mayoría de las comunidades.',
      pt: 'O namoro indonésio é influenciado por valores religiosos (predominantemente muçulmano, com minorias hindus, cristãs e budistas significativas) e expectativas familiares. Namoro orientado ao casamento é a norma na maioria das comunidades.',
      ar: 'تتأثر المواعدة الإندونيسية بالقيم الدينية (مسلمة في الغالب، مع أقليات هندوسية ومسيحية وبوذية كبيرة) وتوقعات العائلة. المواعدة الموجهة نحو الزواج هي القاعدة في معظم المجتمعات.',
      ru: 'Индонезийские свидания находятся под влиянием религиозных ценностей (преимущественно мусульманских, со значительными индуистскими, христианскими и буддистскими меньшинствами) и семейных ожиданий. Свидания, ориентированные на брак, — норма в большинстве сообществ.',
      zh: '印度尼西亚约会受宗教价值观(主要是穆斯林,有相当规模的印度教、基督教和佛教少数群体)和家庭期望的影响。以婚姻为导向的约会是大多数社区的规范。'
    },
    datingStyle: {
      en: 'Discreet, family-aware, respectful. Public displays of affection are minimal. Long conversations about life plans early on.',
      ko: '신중하고, 가족을 의식하며, 존중적. 공개적 애정 표현은 최소한. 초기부터 인생 계획에 대한 긴 대화.',
      ja: '控えめ、家族を意識、尊重的。公共の場での愛情表現は最小限。初期から人生計画についての長い会話。',
      es: 'Discreto, consciente de la familia, respetuoso. Las muestras públicas de afecto son mínimas. Largas conversaciones sobre planes de vida desde el principio.',
      pt: 'Discreto, consciente da família, respeitoso. Demonstrações públicas de afeto são mínimas. Longas conversas sobre planos de vida desde o início.',
      ar: 'متحفظ، ومدرك للعائلة، ومحترم. مظاهر المودة العلنية محدودة. محادثات طويلة حول خطط الحياة في وقت مبكر.',
      ru: 'Осторожный, учитывающий семью, уважительный. Публичные проявления привязанности минимальны. Долгие разговоры о жизненных планах с самого начала.',
      zh: '谨慎、有家庭意识、尊重。公开的情感表达最少。早期就有关于人生计划的长时间对话。'
    },
    courtship: {
      en: 'Family approval is essential. Religious compatibility is often a prerequisite. Meeting parents happens early once intentions are clear.',
      ko: '가족 승인이 필수적. 종교적 양립성이 종종 전제 조건. 의도가 명확해지면 부모님을 일찍 만납니다.',
      ja: '家族の承認は不可欠。宗教的な適合性がしばしば前提条件。意図が明確になると両親に早く会います。',
      es: 'La aprobación familiar es esencial. La compatibilidad religiosa suele ser un prerrequisito. Conocer a los padres ocurre temprano una vez que las intenciones son claras.',
      pt: 'Aprovação familiar é essencial. Compatibilidade religiosa frequentemente é um pré-requisito. Conhecer os pais acontece cedo quando as intenções são claras.',
      ar: 'موافقة العائلة ضرورية. التوافق الديني غالبًا ما يكون شرطًا مسبقًا. مقابلة الوالدين تحدث مبكرًا بمجرد وضوح النوايا.',
      ru: 'Одобрение семьи необходимо. Религиозная совместимость часто является предпосылкой. Знакомство с родителями происходит рано, когда намерения ясны.',
      zh: '家庭认可至关重要。宗教兼容性通常是先决条件。一旦意图明确,就会很早见父母。'
    },
    redFlagsToWatch: {
      en: ['Vague religious or life-goal alignment', 'Not introducing you to family after several months', 'Financial secrecy', 'Not respecting local cultural norms if you are foreign', 'Rushed physical progression against your comfort'],
      ko: ['모호한 종교나 삶의 목표 정렬', '몇 달 후에도 가족에게 소개하지 않음', '재정적 비밀', '외국인일 경우 현지 문화 규범을 존중하지 않음', '당신의 편안함에 반하는 성급한 신체적 진행'],
      ja: ['曖昧な宗教や人生目標の一致', '数ヶ月経っても家族に紹介しない', '経済的秘密', '外国人の場合、現地の文化的規範を尊重しない', 'あなたの快適さに反する急いだ身体的進行'],
      es: ['Alineación vaga religiosa o de metas de vida', 'No presentarte a la familia después de varios meses', 'Secretismo financiero', 'No respetar las normas culturales locales si eres extranjero', 'Progresión física apresurada en contra de tu comodidad'],
      pt: ['Alinhamento vago religioso ou de metas de vida', 'Não apresentá-lo à família após vários meses', 'Segredo financeiro', 'Não respeitar as normas culturais locais se você for estrangeiro', 'Progressão física apressada contra seu conforto'],
      ar: ['التوافق الديني أو أهداف الحياة غامض', 'عدم تقديمك للعائلة بعد عدة أشهر', 'السرية المالية', 'عدم احترام الأعراف الثقافية المحلية إذا كنت أجنبيًا', 'التقدم الجسدي المتسرع ضد راحتك'],
      ru: ['Неясное религиозное или жизненно-целевое соответствие', 'Не знакомит с семьёй после нескольких месяцев', 'Финансовая скрытность', 'Не уважает местные культурные нормы, если вы иностранец', 'Поспешный физический прогресс против вашего комфорта'],
      zh: ['宗教或人生目标一致性模糊', '几个月后不介绍给家人', '财务保密', '如果你是外国人,不尊重当地文化规范', '违背你的舒适度的仓促身体进展']
    },
    greenFlags: {
      en: ['Clear communication about family and religion', 'Respect for cultural and religious traditions', 'Long-term life planning', 'Family warmth', 'Consistent, patient courtship'],
      ko: ['가족과 종교에 대한 명확한 소통', '문화적, 종교적 전통에 대한 존중', '장기적 인생 계획', '가족의 따뜻함', '지속적이고 인내심 있는 구애'],
      ja: ['家族と宗教についての明確なコミュニケーション', '文化的および宗教的伝統への尊重', '長期的な人生計画', '家族の温かさ', '一貫した忍耐強い求愛'],
      es: ['Comunicación clara sobre familia y religión', 'Respeto por las tradiciones culturales y religiosas', 'Planificación de vida a largo plazo', 'Calidez familiar', 'Cortejo consistente y paciente'],
      pt: ['Comunicação clara sobre família e religião', 'Respeito por tradições culturais e religiosas', 'Planejamento de vida de longo prazo', 'Calor familiar', 'Cortejo consistente e paciente'],
      ar: ['تواصل واضح بشأن العائلة والدين', 'احترام التقاليد الثقافية والدينية', 'تخطيط الحياة طويل الأجل', 'الدفء العائلي', 'مغازلة ثابتة وصبورة'],
      ru: ['Ясное общение о семье и религии', 'Уважение к культурным и религиозным традициям', 'Долгосрочное жизненное планирование', 'Семейное тепло', 'Постоянное, терпеливое ухаживание'],
      zh: ['关于家庭和宗教的清晰沟通', '尊重文化和宗教传统', '长期人生规划', '家庭温暖', '一贯、耐心的求爱']
    },
    culturalNotes: {
      en: 'Jakarta and Bali are the most cosmopolitan; other regions are more traditional. Bahasa Indonesia has different registers for formality that carry into dating.',
      ko: '자카르타와 발리가 가장 국제적이며; 다른 지역들은 더 전통적입니다. 인도네시아어는 격식에 따른 다양한 어조가 있으며 이는 데이팅에도 영향을 미칩니다.',
      ja: 'ジャカルタとバリが最も国際的で、他の地域はより伝統的です。インドネシア語は形式のための異なる語調を持ち、それがデーティングに影響します。',
      es: 'Yakarta y Bali son las más cosmopolitas; otras regiones son más tradicionales. El bahasa indonesio tiene diferentes registros de formalidad que se trasladan a las citas.',
      pt: 'Jacarta e Bali são as mais cosmopolitas; outras regiões são mais tradicionais. Bahasa indonésio tem diferentes registros para formalidade que se refletem no namoro.',
      ar: 'جاكرتا وبالي الأكثر عالمية؛ المناطق الأخرى أكثر تقليدية. تحمل اللغة الإندونيسية سجلات مختلفة للرسمية تنعكس في المواعدة.',
      ru: 'Джакарта и Бали — самые космополитичные; другие регионы более традиционны. В индонезийском языке разные регистры формальности переносятся в свидания.',
      zh: '雅加达和巴厘岛最国际化;其他地区更传统。印尼语有不同的礼貌语域,这些也带入了约会。'
    },
    popularApps: ['Tinder', 'Bumble', 'Setipe', 'Tantan', 'MuzMatch'],
    languageOfLove: {
      en: 'Acts of service + words of affirmation; family involvement is love.',
      ko: '행동으로 보여주기 + 말로 표현하기; 가족 관여가 사랑입니다.',
      ja: '奉仕の行動 + 肯定の言葉;家族の関与が愛です。',
      es: 'Actos de servicio + palabras de afirmación; la participación familiar es amor.',
      pt: 'Atos de serviço + palavras de afirmação; envolvimento familiar é amor.',
      ar: 'أعمال الخدمة + كلمات التأكيد؛ مشاركة العائلة هي حب.',
      ru: 'Акты служения + слова подтверждения; участие семьи — это любовь.',
      zh: '服务行为 + 肯定的言语;家庭参与就是爱。'
    }
  },

  SA: {
    code: 'SA',
    overview: {
      en: 'Saudi Arabian dating culture is deeply influenced by Islamic tradition and family. Traditional courtship is still dominant, though modernization (especially since 2019 reforms) has changed dating norms significantly among younger urban populations.',
      ko: '사우디아라비아 연애 문화는 이슬람 전통과 가족의 영향을 깊이 받습니다. 전통적 구애가 여전히 지배적이지만, 현대화(특히 2019년 개혁 이후)가 젊은 도시 인구 사이에서 데이팅 규범을 크게 변화시켰습니다.',
      ja: 'サウジアラビアのデーティング文化はイスラムの伝統と家族に深く影響されています。伝統的な求愛が依然として支配的ですが、現代化(特に2019年の改革以降)は若い都市部の人口の間でデーティング規範を大きく変えました。',
      es: 'La cultura de citas de Arabia Saudita está profundamente influenciada por la tradición islámica y la familia. El cortejo tradicional sigue siendo dominante, aunque la modernización (especialmente desde las reformas de 2019) ha cambiado significativamente las normas de citas entre las poblaciones urbanas jóvenes.',
      pt: 'A cultura de namoro da Arábia Saudita é profundamente influenciada pela tradição islâmica e pela família. O cortejo tradicional ainda é dominante, embora a modernização (especialmente desde as reformas de 2019) tenha mudado significativamente as normas de namoro entre as populações urbanas mais jovens.',
      ar: 'تتأثر ثقافة المواعدة السعودية بعمق بالتقاليد الإسلامية والعائلة. لا تزال المغازلة التقليدية سائدة، على الرغم من أن التحديث (خاصة منذ إصلاحات 2019) قد غيّر بشكل كبير معايير المواعدة بين السكان الحضريين الأصغر سنًا.',
      ru: 'Культура свиданий Саудовской Аравии глубоко находится под влиянием исламских традиций и семьи. Традиционное ухаживание всё ещё доминирует, хотя модернизация (особенно после реформ 2019 года) значительно изменила нормы свиданий среди молодых городских слоёв населения.',
      zh: '沙特阿拉伯的约会文化深受伊斯兰传统和家庭的影响。传统的求爱仍然占主导地位,尽管现代化(特别是自2019年改革以来)显著改变了年轻城市人口中的约会规范。'
    },
    datingStyle: {
      en: 'Reserved, family-mediated in traditional settings; more Western-style in urban modern circles. Public interaction between unmarried couples was legally restricted historically.',
      ko: '전통적인 환경에서는 절제되어 있고 가족을 통해 중재되며; 도시의 현대적 서클에서는 더 서구식. 미혼 커플 간의 공개적 상호작용은 역사적으로 법적으로 제한되었습니다.',
      ja: '伝統的な環境では控えめで家族を通じて仲介され、都市の現代的なサークルではより西洋式です。未婚のカップル間の公共の場での交流は歴史的に法的に制限されていました。',
      es: 'Reservados, mediados por la familia en entornos tradicionales; más al estilo occidental en círculos modernos urbanos. La interacción pública entre parejas no casadas estaba legalmente restringida históricamente.',
      pt: 'Reservados, mediados pela família em ambientes tradicionais; mais ao estilo ocidental em círculos modernos urbanos. Interação pública entre casais não casados era legalmente restrita historicamente.',
      ar: 'متحفظون، بوساطة العائلة في السياقات التقليدية؛ أكثر على النمط الغربي في الدوائر الحضرية الحديثة. التفاعل العلني بين الأزواج غير المتزوجين كان مقيدًا قانونيًا تاريخيًا.',
      ru: 'Сдержанные, с посредничеством семьи в традиционной обстановке; более западного стиля в городских современных кругах. Публичное взаимодействие между неженатыми парами исторически было юридически ограничено.',
      zh: '在传统环境中矜持、由家庭调解;在城市现代圈子中更多西式。未婚情侣之间的公开互动在历史上受法律限制。'
    },
    courtship: {
      en: 'Family involvement is central. Marriage is the standard endpoint of romantic relationships. Islamic values guide most interactions.',
      ko: '가족 관여가 중심입니다. 결혼이 로맨틱 관계의 표준 종착점입니다. 이슬람 가치가 대부분의 상호작용을 인도합니다.',
      ja: '家族の関与が中心です。結婚がロマンチックな関係の標準的な終点です。イスラムの価値観がほとんどの相互作用を導きます。',
      es: 'La participación familiar es central. El matrimonio es el punto final estándar de las relaciones románticas. Los valores islámicos guían la mayoría de las interacciones.',
      pt: 'O envolvimento familiar é central. O casamento é o ponto final padrão dos relacionamentos românticos. Valores islâmicos guiam a maioria das interações.',
      ar: 'مشاركة العائلة محورية. الزواج هو نقطة النهاية المعيارية للعلاقات الرومانسية. القيم الإسلامية توجه معظم التفاعلات.',
      ru: 'Участие семьи центрально. Брак — стандартная конечная точка романтических отношений. Исламские ценности направляют большинство взаимодействий.',
      zh: '家庭参与是核心。婚姻是浪漫关系的标准终点。伊斯兰价值观指导大部分互动。'
    },
    redFlagsToWatch: {
      en: ['Lack of family involvement or approval process', 'Vagueness about marriage intent', 'Cultural insensitivity if you are foreign', 'Financial or family status misrepresentation', 'Not respecting religious observances'],
      ko: ['가족 관여나 승인 절차 부재', '결혼 의도에 대한 모호함', '외국인일 경우 문화적 무감각', '재정적 또는 가족 지위 허위 표현', '종교적 관습을 존중하지 않음'],
      ja: ['家族の関与や承認プロセスの欠如', '結婚の意図についての曖昧さ', '外国人の場合、文化的無感覚', '経済的または家族の地位の虚偽表示', '宗教的な儀式を尊重しない'],
      es: ['Falta de participación familiar o proceso de aprobación', 'Vaguedad sobre la intención de matrimonio', 'Insensibilidad cultural si eres extranjero', 'Tergiversación del estatus financiero o familiar', 'No respetar las observancias religiosas'],
      pt: ['Falta de envolvimento familiar ou processo de aprovação', 'Vaguidão sobre a intenção de casamento', 'Insensibilidade cultural se você for estrangeiro', 'Deturpação do status financeiro ou familiar', 'Não respeitar observâncias religiosas'],
      ar: ['غياب مشاركة العائلة أو عملية الموافقة', 'الغموض بشأن نية الزواج', 'عدم الحساسية الثقافية إذا كنت أجنبيًا', 'تحريف الوضع المالي أو العائلي', 'عدم احترام الشعائر الدينية'],
      ru: ['Отсутствие участия семьи или процесса одобрения', 'Неясность в отношении намерения жениться', 'Культурная нечувствительность, если вы иностранец', 'Искажение финансового или семейного статуса', 'Неуважение к религиозным обрядам'],
      zh: ['缺乏家庭参与或批准程序', '对婚姻意图含糊其辞', '如果你是外国人,缺乏文化敏感性', '虚报财务或家庭状况', '不尊重宗教活动']
    },
    greenFlags: {
      en: ['Clear intent toward marriage', 'Respect for family and tradition', 'Genuine religious alignment', 'Financial stability and transparency', 'Long-term life planning'],
      ko: ['결혼을 향한 명확한 의도', '가족과 전통에 대한 존중', '진정한 종교적 일치', '재정적 안정과 투명성', '장기적 인생 계획'],
      ja: ['結婚への明確な意図', '家族と伝統への尊重', '真の宗教的一致', '経済的安定と透明性', '長期的な人生計画'],
      es: ['Intención clara hacia el matrimonio', 'Respeto por la familia y la tradición', 'Alineación religiosa genuina', 'Estabilidad y transparencia financiera', 'Planificación de vida a largo plazo'],
      pt: ['Intenção clara em direção ao casamento', 'Respeito pela família e tradição', 'Alinhamento religioso genuíno', 'Estabilidade e transparência financeira', 'Planejamento de vida de longo prazo'],
      ar: ['نية واضحة نحو الزواج', 'احترام العائلة والتقاليد', 'التوافق الديني الحقيقي', 'الاستقرار المالي والشفافية', 'تخطيط الحياة طويل الأجل'],
      ru: ['Ясные намерения к браку', 'Уважение к семье и традициям', 'Подлинное религиозное соответствие', 'Финансовая стабильность и прозрачность', 'Долгосрочное планирование жизни'],
      zh: ['明确的婚姻意图', '尊重家庭和传统', '真诚的宗教一致', '财务稳定和透明', '长期人生规划']
    },
    culturalNotes: {
      en: 'Rapid social change since 2019 (Vision 2030 reforms). Riyadh, Jeddah, and Eastern Province each have distinct social cultures.',
      ko: '2019년 이후 급격한 사회 변화(Vision 2030 개혁). 리야드, 제다, 동부 지방은 각각 별개의 사회 문화를 가지고 있습니다.',
      ja: '2019年以降の急速な社会変化(Vision 2030改革)。リヤド、ジェッダ、東部州はそれぞれ異なる社会文化を持っています。',
      es: 'Cambio social rápido desde 2019 (reformas Vision 2030). Riad, Yeda y la Provincia Oriental tienen culturas sociales distintas.',
      pt: 'Mudança social rápida desde 2019 (reformas Vision 2030). Riade, Jedá e a Província Oriental têm culturas sociais distintas.',
      ar: 'تغير اجتماعي سريع منذ 2019 (إصلاحات رؤية 2030). للرياض وجدة والمنطقة الشرقية ثقافات اجتماعية مميزة.',
      ru: 'Быстрые социальные изменения с 2019 года (реформы Vision 2030). У Эр-Рияда, Джидды и Восточной провинции разные социальные культуры.',
      zh: '自2019年以来的快速社会变革(2030愿景改革)。利雅得、吉达和东部省各有独特的社会文化。'
    },
    popularApps: ['MuzMatch', 'Tinder', 'Hawaya', 'Bumble'],
    languageOfLove: {
      en: 'Acts of service + quality time; family integration is love.',
      ko: '행동으로 보여주기 + 함께하는 시간; 가족 통합이 사랑입니다.',
      ja: '奉仕の行動 + 一緒に過ごす時間;家族の統合が愛です。',
      es: 'Actos de servicio + tiempo de calidad; la integración familiar es amor.',
      pt: 'Atos de serviço + tempo de qualidade; integração familiar é amor.',
      ar: 'أعمال الخدمة + الوقت النوعي؛ الاندماج العائلي هو الحب.',
      ru: 'Акты служения + качественное время; интеграция в семью — это любовь.',
      zh: '服务行为 + 优质时间;家庭融合就是爱。'
    }
  },

  TR: {
    code: 'TR',
    overview: {
      en: 'Turkish dating blends European modernity with strong family traditions. Passionate expression, hospitality, and family gatherings are all central. Regional and religious differences create a wide spectrum of dating norms.',
      ko: '터키 연애는 유럽식 현대성과 강한 가족 전통을 결합합니다. 열정적인 표현, 환대, 가족 모임이 모두 중심입니다. 지역적, 종교적 차이가 넓은 범위의 데이팅 규범을 만들어냅니다.',
      ja: 'トルコのデーティングはヨーロッパの現代性と強い家族の伝統を融合させます。情熱的な表現、おもてなし、家族の集まりがすべて中心です。地域と宗教の違いが幅広いデーティング規範のスペクトルを生み出します。',
      es: 'Las citas turcas mezclan la modernidad europea con fuertes tradiciones familiares. La expresión apasionada, la hospitalidad y las reuniones familiares son todas centrales. Las diferencias regionales y religiosas crean un amplio espectro de normas de citas.',
      pt: 'O namoro turco mistura modernidade europeia com fortes tradições familiares. Expressão apaixonada, hospitalidade e reuniões familiares são todos centrais. Diferenças regionais e religiosas criam um amplo espectro de normas de namoro.',
      ar: 'المواعدة التركية تمزج الحداثة الأوروبية مع تقاليد عائلية قوية. التعبير العاطفي وحسن الضيافة والتجمعات العائلية كلها محورية. الاختلافات الإقليمية والدينية تخلق طيفًا واسعًا من معايير المواعدة.',
      ru: 'Турецкие свидания смешивают европейскую современность с сильными семейными традициями. Страстное выражение, гостеприимство и семейные встречи — всё центрально. Региональные и религиозные различия создают широкий спектр норм свиданий.',
      zh: '土耳其约会将欧洲现代性与强大的家庭传统相结合。热情的表达、好客和家庭聚会都是核心。地区和宗教差异创造了广泛的约会规范。'
    },
    datingStyle: {
      en: 'Warm, family-aware, expressive. Long dinners, tea/coffee culture, and family visits are central to relationship life.',
      ko: '따뜻하고, 가족을 의식하며, 표현이 풍부. 긴 저녁 식사, 차/커피 문화, 가족 방문이 관계 생활의 중심입니다.',
      ja: '温かく、家族を意識し、表現豊か。長い夕食、お茶/コーヒー文化、家族訪問が関係生活の中心です。',
      es: 'Cálido, consciente de la familia, expresivo. Las largas cenas, la cultura del té/café y las visitas familiares son centrales en la vida de pareja.',
      pt: 'Caloroso, consciente da família, expressivo. Longos jantares, cultura de chá/café e visitas familiares são centrais na vida de relacionamento.',
      ar: 'دافئ ومدرك للعائلة ومعبر. العشاء الطويل وثقافة الشاي/القهوة والزيارات العائلية محورية في حياة العلاقة.',
      ru: 'Тёплый, учитывающий семью, выразительный. Долгие ужины, культура чая/кофе и семейные визиты — центральные в жизни отношений.',
      zh: '温暖、有家庭意识、富有表现力。漫长的晚餐、茶/咖啡文化和家庭访问是关系生活的核心。'
    },
    courtship: {
      en: 'Meeting family is a major step. Traditional courtship (asking family for permission) coexists with modern casual dating in Istanbul and other urban centers.',
      ko: '가족을 만나는 것은 주요 단계입니다. 전통적인 구애(가족에게 허락 구하기)가 이스탄불과 다른 도시 중심의 현대적인 캐주얼 데이팅과 공존합니다.',
      ja: '家族に会うことは重要なステップです。伝統的な求愛(家族に許可を求める)がイスタンブールや他の都市中心の現代的なカジュアルなデーティングと共存しています。',
      es: 'Conocer a la familia es un paso importante. El cortejo tradicional (pedir permiso a la familia) coexiste con las citas casuales modernas en Estambul y otros centros urbanos.',
      pt: 'Conhecer a família é um passo importante. Cortejo tradicional (pedir permissão à família) coexiste com namoro casual moderno em Istambul e outros centros urbanos.',
      ar: 'مقابلة العائلة خطوة كبيرة. تتعايش المغازلة التقليدية (طلب الإذن من العائلة) مع المواعدة العرضية الحديثة في إسطنبول والمراكز الحضرية الأخرى.',
      ru: 'Знакомство с семьёй — важный шаг. Традиционное ухаживание (просьба разрешения у семьи) сосуществует с современными случайными свиданиями в Стамбуле и других городских центрах.',
      zh: '见家人是重要的一步。传统求爱(向家人请求许可)在伊斯坦布尔和其他城市中心与现代休闲约会并存。'
    },
    redFlagsToWatch: {
      en: ['Excessive jealousy or possessiveness', 'Not introducing you to family', 'Financial secrecy or control', 'Regional or political extremism', 'Discomfort with your independence'],
      ko: ['과도한 질투나 소유욕', '가족에게 소개하지 않음', '재정적 비밀이나 통제', '지역적 또는 정치적 극단주의', '당신의 독립성에 대한 불편함'],
      ja: ['過度な嫉妬や独占欲', '家族に紹介しない', '経済的秘密や支配', '地域的または政治的過激主義', 'あなたの独立性への不快感'],
      es: ['Celos excesivos o posesividad', 'No presentarte a la familia', 'Secretismo o control financiero', 'Extremismo regional o político', 'Incomodidad con tu independencia'],
      pt: ['Ciúmes excessivos ou possessividade', 'Não apresentá-lo à família', 'Segredo ou controle financeiro', 'Extremismo regional ou político', 'Desconforto com sua independência'],
      ar: ['الغيرة المفرطة أو التملك', 'عدم تقديمك للعائلة', 'السرية أو التحكم المالي', 'التطرف الإقليمي أو السياسي', 'عدم الراحة مع استقلاليتك'],
      ru: ['Чрезмерная ревность или собственничество', 'Не знакомит с семьёй', 'Финансовая скрытность или контроль', 'Региональный или политический экстремизм', 'Дискомфорт с вашей независимостью'],
      zh: ['过度嫉妒或占有欲', '不介绍给家人', '财务保密或控制', '地区或政治极端主义', '对你的独立性感到不适']
    },
    greenFlags: {
      en: ['Warm family hospitality', 'Consistent affection and communication', 'Ambition and life planning', 'Cultural pride shared with you', 'Emotional depth balanced with independence'],
      ko: ['따뜻한 가족의 환대', '지속적인 애정과 소통', '야망과 인생 계획', '당신과 공유하는 문화적 자부심', '독립성과 균형 잡힌 감정적 깊이'],
      ja: ['温かい家族のおもてなし', '一貫した愛情とコミュニケーション', '野心と人生設計', 'あなたと共有する文化的誇り', '独立性とバランスの取れた感情的な深さ'],
      es: ['Cálida hospitalidad familiar', 'Afecto y comunicación consistentes', 'Ambición y planificación de vida', 'Orgullo cultural compartido contigo', 'Profundidad emocional equilibrada con independencia'],
      pt: ['Calorosa hospitalidade familiar', 'Afeto e comunicação consistentes', 'Ambição e planejamento de vida', 'Orgulho cultural compartilhado com você', 'Profundidade emocional equilibrada com independência'],
      ar: ['ضيافة عائلية دافئة', 'مودة وتواصل ثابتان', 'الطموح والتخطيط للحياة', 'الفخر الثقافي المشترك معك', 'العمق العاطفي المتوازن مع الاستقلالية'],
      ru: ['Тёплое семейное гостеприимство', 'Постоянная привязанность и общение', 'Амбиции и планирование жизни', 'Культурная гордость, разделяемая с вами', 'Эмоциональная глубина, сбалансированная с независимостью'],
      zh: ['温暖的家庭好客', '一贯的情感和沟通', '雄心和人生规划', '与你分享的文化自豪感', '与独立性平衡的情感深度']
    },
    culturalNotes: {
      en: 'Istanbul is highly modern; Eastern Anatolia more traditional. Political polarization affects dating filters.',
      ko: '이스탄불은 매우 현대적이며; 동부 아나톨리아는 더 전통적입니다. 정치적 양극화가 데이팅 필터에 영향을 미칩니다.',
      ja: 'イスタンブールは非常に現代的で、東アナトリアはより伝統的です。政治的分極化がデーティングフィルターに影響します。',
      es: 'Estambul es muy moderna; Anatolia Oriental es más tradicional. La polarización política afecta los filtros de citas.',
      pt: 'Istambul é altamente moderna; a Anatólia Oriental é mais tradicional. A polarização política afeta os filtros de namoro.',
      ar: 'إسطنبول حديثة للغاية؛ الأناضول الشرقية أكثر تقليدية. الاستقطاب السياسي يؤثر على مرشحات المواعدة.',
      ru: 'Стамбул очень современный; Восточная Анатолия более традиционна. Политическая поляризация влияет на фильтры знакомств.',
      zh: '伊斯坦布尔非常现代;安纳托利亚东部更传统。政治两极分化影响约会过滤器。'
    },
    popularApps: ['Tinder', 'Happn', 'Bumble', 'Yemekmatik', 'Badoo'],
    languageOfLove: {
      en: 'Quality time + physical touch; hospitality is romance.',
      ko: '함께하는 시간 + 신체 접촉; 환대가 로맨스입니다.',
      ja: '一緒に過ごす時間 + 身体的接触;おもてなしがロマンスです。',
      es: 'Tiempo de calidad + contacto físico; la hospitalidad es romance.',
      pt: 'Tempo de qualidade + toque físico; hospitalidade é romance.',
      ar: 'الوقت النوعي + اللمس الجسدي؛ حسن الضيافة رومانسية.',
      ru: 'Качественное время + физическое прикосновение; гостеприимство — это романтика.',
      zh: '优质时间 + 身体接触;好客就是浪漫。'
    }
  },

  AR: {
    code: 'AR',
    overview: {
      en: 'Argentine dating is romantic, dramatic, and deeply expressive. Buenos Aires has one of the most passionate dating cultures in the world. Tango, mate (yerba tea) culture, and family gatherings are all central to relationship life.',
      ko: '아르헨티나 연애는 로맨틱하고, 드라마틱하며, 깊이 표현적입니다. 부에노스아이레스는 세계에서 가장 열정적인 데이팅 문화 중 하나를 가지고 있습니다. 탱고, 마떼(예르바 차) 문화, 가족 모임이 모두 관계 생활의 중심입니다.',
      ja: 'アルゼンチンのデーティングはロマンチックで、ドラマチックで、深く表現豊かです。ブエノスアイレスは世界で最も情熱的なデーティング文化の一つを持っています。タンゴ、マテ茶(イェルバ茶)文化、家族の集まりがすべて関係生活の中心です。',
      es: 'Las citas argentinas son románticas, dramáticas y profundamente expresivas. Buenos Aires tiene una de las culturas de citas más apasionadas del mundo. El tango, la cultura del mate (yerba) y las reuniones familiares son todas centrales en la vida de pareja.',
      pt: 'O namoro argentino é romântico, dramático e profundamente expressivo. Buenos Aires tem uma das culturas de namoro mais apaixonadas do mundo. Tango, cultura do mate (chá de erva) e reuniões familiares são todos centrais na vida de relacionamento.',
      ar: 'المواعدة الأرجنتينية رومانسية ودرامية ومعبرة بعمق. تمتلك بوينس آيرس واحدة من أكثر ثقافات المواعدة عاطفية في العالم. التانغو وثقافة المتّه (شاي اليربا) والتجمعات العائلية كلها محورية في حياة العلاقة.',
      ru: 'Аргентинские свидания романтичны, драматичны и глубоко выразительны. Буэнос-Айрес обладает одной из самых страстных культур свиданий в мире. Танго, культура матэ (чай из йербы) и семейные встречи — всё центрально в жизни отношений.',
      zh: '阿根廷约会浪漫、戏剧化,情感表达深刻。布宜诺斯艾利斯拥有世界上最热情的约会文化之一。探戈、马黛茶(耶巴茶)文化和家庭聚会都是关系生活的核心。'
    },
    datingStyle: {
      en: 'Highly expressive, physically affectionate, verbally romantic. Compliments ("piropos") are common. Nightlife starts late and dates can extend into early morning.',
      ko: '매우 표현적이고, 신체적으로 애정 넘치며, 언어적으로 로맨틱. 칭찬("피로포스")이 흔합니다. 나이트라이프가 늦게 시작되고 데이트는 이른 아침까지 이어질 수 있습니다.',
      ja: '非常に表現豊か、身体的に愛情深く、言葉的にロマンチック。褒め言葉(「ピロポス」)は一般的です。ナイトライフは遅く始まり、デートは早朝まで続くことがあります。',
      es: 'Altamente expresivo, físicamente afectuoso, verbalmente romántico. Los halagos ("piropos") son comunes. La vida nocturna comienza tarde y las citas pueden extenderse hasta la madrugada.',
      pt: 'Altamente expressivo, fisicamente afetuoso, verbalmente romântico. Elogios ("piropos") são comuns. A vida noturna começa tarde e encontros podem se estender até de madrugada.',
      ar: 'معبر للغاية، وحنون جسديًا، ورومانسي لفظيًا. الإطراءات ("piropos") شائعة. تبدأ الحياة الليلية متأخرة ويمكن أن تمتد المواعيد إلى الصباح الباكر.',
      ru: 'Очень выразительный, физически ласковый, вербально романтичный. Комплименты ("piropos") распространены. Ночная жизнь начинается поздно, а свидания могут продолжаться до раннего утра.',
      zh: '高度表现力、身体亲密、语言浪漫。赞美("piropos")很常见。夜生活开始得很晚,约会可以延续到凌晨。'
    },
    courtship: {
      en: 'Meeting family and friends happens early. Sunday asado (barbecue) with family is a major relationship milestone.',
      ko: '가족과 친구를 만나는 것이 일찍 일어납니다. 가족과의 일요일 아사도(바비큐)는 주요 관계 이정표입니다.',
      ja: '家族や友人に会うのは早く起こります。家族との日曜日のアサード(バーベキュー)は主要な関係のマイルストーンです。',
      es: 'Conocer a la familia y amigos ocurre temprano. El asado dominical con la familia es un hito importante en la relación.',
      pt: 'Conhecer família e amigos acontece cedo. Asado de domingo com a família é um marco importante do relacionamento.',
      ar: 'تحدث مقابلة العائلة والأصدقاء مبكرًا. الأسادو (الشواء) يوم الأحد مع العائلة معلم كبير في العلاقة.',
      ru: 'Знакомство с семьёй и друзьями происходит рано. Воскресный асадо (барбекю) с семьёй — важная веха отношений.',
      zh: '很早就见家人和朋友。周日与家人的asado(烧烤)是重要的关系里程碑。'
    },
    redFlagsToWatch: {
      en: ['Excessive drama or emotional intensity', 'Jealousy without cause', 'Financial instability without honesty', 'Not integrating into family/friend circles', 'Discomfort with public affection'],
      ko: ['과도한 드라마나 감정적 강도', '이유 없는 질투', '정직 없는 재정적 불안정', '가족/친구 서클에 통합되지 않음', '공개적 애정에 대한 불편함'],
      ja: ['過度なドラマや感情的強度', '理由のない嫉妬', '誠実さのない経済的不安定', '家族/友人サークルに統合されない', '公共の場での愛情への不快感'],
      es: ['Drama excesivo o intensidad emocional', 'Celos sin causa', 'Inestabilidad financiera sin honestidad', 'No integrarse en círculos de familia/amigos', 'Incomodidad con el afecto público'],
      pt: ['Drama excessivo ou intensidade emocional', 'Ciúmes sem causa', 'Instabilidade financeira sem honestidade', 'Não se integrar em círculos de família/amigos', 'Desconforto com afeto público'],
      ar: ['الدراما المفرطة أو الكثافة العاطفية', 'الغيرة بدون سبب', 'عدم الاستقرار المالي دون صراحة', 'عدم الاندماج في دوائر العائلة/الأصدقاء', 'عدم الراحة مع المودة العلنية'],
      ru: ['Чрезмерная драма или эмоциональная интенсивность', 'Ревность без причины', 'Финансовая нестабильность без честности', 'Не интегрируется в круги семьи/друзей', 'Дискомфорт с публичной привязанностью'],
      zh: ['过度的戏剧化或情感强度', '无缘无故的嫉妒', '不诚实的财务不稳定', '不融入家庭/朋友圈', '对公开情感表达感到不适']
    },
    greenFlags: {
      en: ['Deep emotional expression', 'Warm family integration', 'Sharing cultural traditions (mate, football, asado)', 'Consistent romantic gestures', 'Loyalty despite intensity'],
      ko: ['깊은 감정 표현', '따뜻한 가족 통합', '문화적 전통 공유(마떼, 축구, 아사도)', '지속적인 로맨틱 제스처', '강렬함에도 불구하고 충성심'],
      ja: ['深い感情表現', '温かい家族との統合', '文化的伝統の共有(マテ、サッカー、アサード)', '一貫したロマンチックな仕草', '激しさにもかかわらずの忠誠'],
      es: ['Expresión emocional profunda', 'Integración familiar cálida', 'Compartir tradiciones culturales (mate, fútbol, asado)', 'Gestos románticos consistentes', 'Lealtad a pesar de la intensidad'],
      pt: ['Expressão emocional profunda', 'Integração familiar calorosa', 'Compartilhar tradições culturais (mate, futebol, asado)', 'Gestos românticos consistentes', 'Lealdade apesar da intensidade'],
      ar: ['تعبير عاطفي عميق', 'اندماج عائلي دافئ', 'مشاركة التقاليد الثقافية (المتّه، كرة القدم، الأسادو)', 'إيماءات رومانسية ثابتة', 'الولاء رغم الشدة'],
      ru: ['Глубокое эмоциональное выражение', 'Тёплая интеграция в семью', 'Обмен культурными традициями (матэ, футбол, асадо)', 'Постоянные романтические жесты', 'Верность несмотря на интенсивность'],
      zh: ['深刻的情感表达', '温暖的家庭融合', '分享文化传统(马黛茶、足球、asado)', '一贯的浪漫举动', '尽管强烈仍忠诚']
    },
    culturalNotes: {
      en: 'Buenos Aires is intensely European in influence; other regions vary. Football (River/Boca) and politics are real cultural markers.',
      ko: '부에노스아이레스는 매우 유럽적인 영향을 받았으며; 다른 지역들은 다양합니다. 축구(리버/보카)와 정치는 실제 문화적 표시입니다.',
      ja: 'ブエノスアイレスは強烈にヨーロッパの影響を受けており、他の地域は様々です。サッカー(リーベル/ボカ)と政治は本物の文化的マーカーです。',
      es: 'Buenos Aires es intensamente europea en influencia; otras regiones varían. El fútbol (River/Boca) y la política son marcadores culturales reales.',
      pt: 'Buenos Aires é intensamente europeia na influência; outras regiões variam. Futebol (River/Boca) e política são marcadores culturais reais.',
      ar: 'بوينس آيرس متأثرة بشدة بأوروبا؛ المناطق الأخرى تتفاوت. كرة القدم (ريفر/بوكا) والسياسة علامات ثقافية حقيقية.',
      ru: 'Буэнос-Айрес испытывает сильное европейское влияние; другие регионы различаются. Футбол (Ривер/Бока) и политика — реальные культурные маркеры.',
      zh: '布宜诺斯艾利斯受欧洲影响强烈;其他地区各异。足球(River/Boca)和政治是真正的文化标志。'
    },
    popularApps: ['Tinder', 'Happn', 'Badoo', 'Bumble', 'AdopteUnMec'],
    languageOfLove: {
      en: 'Physical touch + words of affirmation; passion is proof.',
      ko: '신체 접촉 + 말로 표현하기; 열정이 증거입니다.',
      ja: '身体的接触 + 肯定の言葉;情熱が証明です。',
      es: 'Contacto físico + palabras de afirmación; la pasión es prueba.',
      pt: 'Toque físico + palavras de afirmação; paixão é prova.',
      ar: 'اللمس الجسدي + كلمات التأكيد؛ العاطفة دليل.',
      ru: 'Физическое прикосновение + слова подтверждения; страсть — доказательство.',
      zh: '身体接触 + 肯定的言语;激情就是证明。'
    }
  },

  ZA: {
    code: 'ZA',
    overview: {
      en: 'South African dating spans multiple cultures — Zulu, Xhosa, Afrikaner, English, Indian, and others each bring distinct traditions. Urban dating (Johannesburg, Cape Town) is diverse and often multicultural.',
      ko: '남아프리카 연애는 여러 문화를 아우릅니다 — 줄루, 코사, 아프리카너, 영국, 인도 등 각각 별개의 전통을 가져옵니다. 도시 데이팅(요하네스버그, 케이프타운)은 다양하며 종종 다문화적입니다.',
      ja: '南アフリカのデーティングは複数の文化にまたがっています — ズールー、コサ、アフリカーナー、イギリス、インドなどそれぞれ独自の伝統をもたらします。都市部のデーティング(ヨハネスブルグ、ケープタウン)は多様で、しばしば多文化的です。',
      es: 'Las citas sudafricanas abarcan múltiples culturas — zulú, xhosa, afrikáner, inglesa, india y otras aportan tradiciones distintas. Las citas urbanas (Johannesburgo, Ciudad del Cabo) son diversas y a menudo multiculturales.',
      pt: 'O namoro sul-africano abrange múltiplas culturas — zulu, xhosa, afrikaner, inglesa, indiana e outras trazem tradições distintas. O namoro urbano (Joanesburgo, Cidade do Cabo) é diverso e frequentemente multicultural.',
      ar: 'المواعدة في جنوب أفريقيا تمتد عبر ثقافات متعددة — الزولو، والخوسا، والأفريكانر، والإنجليزية، والهندية، وغيرها تجلب كل منها تقاليد متميزة. المواعدة الحضرية (جوهانسبرغ، كيب تاون) متنوعة وغالبًا متعددة الثقافات.',
      ru: 'Южноафриканские свидания охватывают несколько культур — зулу, коса, африканеры, англичане, индийцы и другие приносят разные традиции. Городские свидания (Йоханнесбург, Кейптаун) разнообразны и часто мультикультурны.',
      zh: '南非约会涵盖多种文化——祖鲁族、科萨族、阿非利卡人、英国人、印度人等各自带来独特的传统。城市约会(约翰内斯堡、开普敦)多样化,通常是多元文化的。'
    },
    datingStyle: {
      en: 'Warm, direct in urban areas, more traditional in rural. Outdoor and adventure activities are common date formats. Cultural identity is often openly discussed.',
      ko: '도시 지역에서는 따뜻하고 직접적이며, 시골에서는 더 전통적. 야외와 모험 활동이 흔한 데이트 형식입니다. 문화적 정체성이 종종 공개적으로 논의됩니다.',
      ja: '都市部では温かく直接的、農村部ではより伝統的。屋外や冒険活動が一般的なデート形式です。文化的アイデンティティがしばしば公然と議論されます。',
      es: 'Cálido, directo en áreas urbanas, más tradicional en rurales. Las actividades al aire libre y de aventura son formatos comunes de cita. La identidad cultural a menudo se discute abiertamente.',
      pt: 'Caloroso, direto em áreas urbanas, mais tradicional em áreas rurais. Atividades ao ar livre e de aventura são formatos comuns de encontro. Identidade cultural frequentemente é discutida abertamente.',
      ar: 'دافئ ومباشر في المناطق الحضرية، أكثر تقليدية في المناطق الريفية. الأنشطة الخارجية والمغامرة أشكال شائعة للمواعيد. غالبًا ما تُناقش الهوية الثقافية بصراحة.',
      ru: 'Тёплый, прямой в городских районах, более традиционный в сельских. Активный отдых и приключения — распространённые форматы свиданий. Культурная идентичность часто обсуждается открыто.',
      zh: '城市地区热情、直接,农村地区更传统。户外和冒险活动是常见的约会形式。文化认同经常被公开讨论。'
    },
    courtship: {
      en: 'Family involvement varies by culture — some traditions include lobola (bridewealth) as a serious commitment step. Intercultural dating is common but comes with cultural navigation.',
      ko: '가족 관여는 문화에 따라 다릅니다 — 일부 전통은 로볼라(신부값)를 진지한 헌신 단계로 포함합니다. 다문화 데이팅은 흔하지만 문화적 탐색이 필요합니다.',
      ja: '家族の関与は文化によって異なります — 一部の伝統は真剣なコミットメントのステップとしてロボラ(花嫁料)を含みます。異文化間デーティングは一般的ですが、文化的なナビゲーションが必要です。',
      es: 'La participación familiar varía según la cultura — algunas tradiciones incluyen lobola (dote nupcial) como un paso serio de compromiso. Las citas interculturales son comunes pero requieren navegación cultural.',
      pt: 'O envolvimento familiar varia por cultura — algumas tradições incluem lobola (dote nupcial) como um passo sério de compromisso. Namoro intercultural é comum mas requer navegação cultural.',
      ar: 'مشاركة العائلة تختلف حسب الثقافة — بعض التقاليد تتضمن لوبولا (مهر العروس) كخطوة التزام جادة. المواعدة بين الثقافات شائعة لكنها تأتي مع تنقل ثقافي.',
      ru: 'Участие семьи зависит от культуры — некоторые традиции включают лоболу (выкуп за невесту) как серьёзный шаг обязательства. Межкультурные свидания распространены, но требуют культурной навигации.',
      zh: '家庭参与因文化而异——一些传统包括lobola(聘礼)作为严肃的承诺步骤。跨文化约会很常见,但需要文化引导。'
    },
    redFlagsToWatch: {
      en: ['Cultural or racial insensitivity', 'Not being open about family expectations', 'Financial vagueness', 'Isolation from friends or community', 'Political extremism'],
      ko: ['문화적 또는 인종적 무감각', '가족 기대에 대해 열려 있지 않음', '재정적 모호함', '친구나 커뮤니티로부터의 격리', '정치적 극단주의'],
      ja: ['文化的または人種的無感覚', '家族の期待についてオープンでない', '経済的曖昧さ', '友人やコミュニティからの孤立', '政治的過激主義'],
      es: ['Insensibilidad cultural o racial', 'No ser abierto sobre expectativas familiares', 'Vaguedad financiera', 'Aislamiento de amigos o comunidad', 'Extremismo político'],
      pt: ['Insensibilidade cultural ou racial', 'Não ser aberto sobre expectativas familiares', 'Vaguidão financeira', 'Isolamento de amigos ou comunidade', 'Extremismo político'],
      ar: ['عدم الحساسية الثقافية أو العرقية', 'عدم الانفتاح بشأن توقعات العائلة', 'الغموض المالي', 'العزلة عن الأصدقاء أو المجتمع', 'التطرف السياسي'],
      ru: ['Культурная или расовая нечувствительность', 'Не открыт в отношении семейных ожиданий', 'Финансовая неясность', 'Изоляция от друзей или сообщества', 'Политический экстремизм'],
      zh: ['文化或种族不敏感', '对家庭期望不开放', '财务模糊', '与朋友或社区隔离', '政治极端主义']
    },
    greenFlags: {
      en: ['Openness to cultural exchange', 'Warm family integration', 'Adventure and outdoor spirit', 'Direct but respectful communication', 'Balance of tradition and modernity'],
      ko: ['문화 교류에 대한 개방성', '따뜻한 가족 통합', '모험과 야외 정신', '직접적이지만 존중하는 소통', '전통과 현대의 균형'],
      ja: ['文化交流への開放性', '温かい家族との統合', '冒険と屋外精神', '直接的だが尊重的なコミュニケーション', '伝統と現代のバランス'],
      es: ['Apertura al intercambio cultural', 'Integración familiar cálida', 'Espíritu aventurero y al aire libre', 'Comunicación directa pero respetuosa', 'Equilibrio entre tradición y modernidad'],
      pt: ['Abertura ao intercâmbio cultural', 'Integração familiar calorosa', 'Espírito aventureiro e ao ar livre', 'Comunicação direta mas respeitosa', 'Equilíbrio entre tradição e modernidade'],
      ar: ['الانفتاح على التبادل الثقافي', 'اندماج عائلي دافئ', 'روح المغامرة والحياة الخارجية', 'تواصل مباشر لكنه محترم', 'التوازن بين التقاليد والحداثة'],
      ru: ['Открытость к культурному обмену', 'Тёплая интеграция в семью', 'Дух приключений и активного отдыха', 'Прямое, но уважительное общение', 'Баланс традиции и современности'],
      zh: ['对文化交流的开放性', '温暖的家庭融合', '冒险和户外精神', '直接但尊重的沟通', '传统与现代的平衡']
    },
    culturalNotes: {
      en: 'Cape Town, Johannesburg, and Durban each have distinct dating cultures. Language dynamics (11 official languages) are part of dating.',
      ko: '케이프타운, 요하네스버그, 더반은 각각 별개의 데이팅 문화를 가지고 있습니다. 언어 역학(11개 공용어)이 데이팅의 일부입니다.',
      ja: 'ケープタウン、ヨハネスブルグ、ダーバンはそれぞれ独自のデーティング文化を持っています。言語のダイナミクス(11の公用語)がデーティングの一部です。',
      es: 'Ciudad del Cabo, Johannesburgo y Durban tienen culturas de citas distintas. La dinámica lingüística (11 idiomas oficiales) es parte de las citas.',
      pt: 'Cidade do Cabo, Joanesburgo e Durban têm culturas de namoro distintas. A dinâmica linguística (11 idiomas oficiais) faz parte do namoro.',
      ar: 'كيب تاون وجوهانسبرغ وديربان لديها ثقافات مواعدة متميزة. ديناميكية اللغة (11 لغة رسمية) جزء من المواعدة.',
      ru: 'У Кейптауна, Йоханнесбурга и Дурбана разные культуры свиданий. Языковая динамика (11 официальных языков) — часть свиданий.',
      zh: '开普敦、约翰内斯堡和德班各有独特的约会文化。语言动态(11种官方语言)是约会的一部分。'
    },
    popularApps: ['Tinder', 'Bumble', 'Hinge', 'Badoo', 'OkCupid'],
    languageOfLove: {
      en: 'Quality time + acts of service; shared adventure builds bonds.',
      ko: '함께하는 시간 + 행동으로 보여주기; 공유된 모험이 유대를 만듭니다.',
      ja: '一緒に過ごす時間 + 奉仕の行動;共有された冒険が絆を築きます。',
      es: 'Tiempo de calidad + actos de servicio; la aventura compartida construye vínculos.',
      pt: 'Tempo de qualidade + atos de serviço; aventura compartilhada constrói laços.',
      ar: 'الوقت النوعي + أعمال الخدمة؛ المغامرة المشتركة تبني الروابط.',
      ru: 'Качественное время + акты служения; совместные приключения создают связи.',
      zh: '优质时间 + 服务行为;共同的冒险建立纽带。'
    }
  },

  ES: {
    code: 'ES',
    overview: {
      en: 'Spanish dating is warm, social, and deeply intertwined with food and family. Long dinners (starting at 9-10pm), tapas culture, and group socializing are central to relationship life.',
      ko: '스페인 연애는 따뜻하고, 사교적이며, 음식과 가족과 깊이 얽혀 있습니다. 긴 저녁 식사(밤 9-10시에 시작), 타파스 문화, 그룹 사교가 관계 생활의 중심입니다.',
      ja: 'スペインのデーティングは温かく、社交的で、食べ物と家族と深く絡み合っています。長い夕食(午後9-10時に始まる)、タパス文化、グループ社交が関係生活の中心です。',
      es: 'Las citas españolas son cálidas, sociales y profundamente entrelazadas con la comida y la familia. Las largas cenas (que comienzan a las 9-10 pm), la cultura de las tapas y la socialización en grupo son centrales en la vida de pareja.',
      pt: 'O namoro espanhol é caloroso, social e profundamente entrelaçado com comida e família. Longos jantares (começando às 21-22h), cultura das tapas e socialização em grupo são centrais na vida de relacionamento.',
      ar: 'المواعدة الإسبانية دافئة واجتماعية ومتشابكة بعمق مع الطعام والعائلة. العشاء الطويل (يبدأ من الساعة 9-10 مساءً)، وثقافة التاباس، والتنشئة الاجتماعية الجماعية محورية في حياة العلاقات.',
      ru: 'Испанские свидания тёплые, социальные и глубоко переплетены с едой и семьёй. Долгие ужины (начинающиеся в 21-22:00), культура тапас и групповое общение — центральные в жизни отношений.',
      zh: '西班牙约会热情、社交,并与食物和家庭深深交织。漫长的晚餐(晚上9-10点开始)、tapas文化和团体社交是关系生活的核心。'
    },
    datingStyle: {
      en: 'Warm, expressive, physically affectionate. Group dates are common early. Verbal declaration of feelings comes fairly quickly.',
      ko: '따뜻하고, 표현이 풍부하며, 신체적으로 애정 넘칩니다. 그룹 데이트가 초기에 흔합니다. 감정의 언어적 선언이 상당히 빠르게 옵니다.',
      ja: '温かく、表現豊かで、身体的に愛情深い。グループデートは初期に一般的です。感情の言葉での宣言は比較的早く来ます。',
      es: 'Cálido, expresivo, físicamente afectuoso. Las citas grupales son comunes al principio. La declaración verbal de sentimientos llega bastante rápido.',
      pt: 'Caloroso, expressivo, fisicamente afetuoso. Encontros em grupo são comuns no início. Declaração verbal de sentimentos vem bem rápido.',
      ar: 'دافئ ومعبر وحنون جسديًا. المواعيد الجماعية شائعة في وقت مبكر. الإعلان اللفظي عن المشاعر يأتي بسرعة إلى حد ما.',
      ru: 'Тёплый, выразительный, физически ласковый. Групповые свидания распространены на раннем этапе. Словесное признание в чувствах приходит довольно быстро.',
      zh: '热情、富有表现力、身体亲密。团体约会在早期很常见。感情的口头表达来得相当快。'
    },
    courtship: {
      en: 'Meeting friends happens early; family a bit later but still important. Public affection is fully accepted.',
      ko: '친구 만나기가 일찍 일어나며; 가족은 조금 뒤지만 여전히 중요합니다. 공개적 애정이 완전히 수용됩니다.',
      ja: '友人に会うのは早く起こり、家族は少し後ですが依然として重要です。公共の場での愛情は完全に受け入れられます。',
      es: 'Conocer a los amigos ocurre temprano; la familia un poco después pero sigue siendo importante. El afecto público es totalmente aceptado.',
      pt: 'Conhecer amigos acontece cedo; família um pouco depois mas ainda importante. Afeto público é totalmente aceito.',
      ar: 'مقابلة الأصدقاء تحدث مبكرًا؛ العائلة بعد قليل لكنها لا تزال مهمة. المودة العلنية مقبولة تمامًا.',
      ru: 'Знакомство с друзьями происходит рано; с семьёй чуть позже, но всё же важно. Публичная привязанность полностью принимается.',
      zh: '很早就见朋友;家人稍后但仍然重要。公开的情感完全被接受。'
    },
    redFlagsToWatch: {
      en: ['Not fitting into friend group ("pandilla")', 'Impatience with slow-paced social life', 'Excessive drinking', 'Regional political sensitivity (Catalan/Basque)', 'Refusing to integrate socially'],
      ko: ['친구 그룹("판디야")에 어울리지 못함', '느린 사회생활에 대한 조바심', '과음', '지역 정치적 민감성(카탈루냐/바스크)', '사회적으로 통합을 거부'],
      ja: ['友人グループ(「pandilla」)に馴染めない', 'ゆっくりとした社会生活への短気', '過度な飲酒', '地域政治感受性(カタルーニャ/バスク)', '社会的に統合することを拒む'],
      es: ['No encajar en el grupo de amigos ("pandilla")', 'Impaciencia con la vida social de ritmo lento', 'Beber en exceso', 'Sensibilidad política regional (catalán/vasco)', 'Negarse a integrarse socialmente'],
      pt: ['Não se encaixar no grupo de amigos ("pandilla")', 'Impaciência com a vida social de ritmo lento', 'Beber em excesso', 'Sensibilidade política regional (catalão/basco)', 'Recusar-se a se integrar socialmente'],
      ar: ['عدم الانسجام مع مجموعة الأصدقاء ("pandilla")', 'نفاد الصبر مع الحياة الاجتماعية البطيئة', 'الإفراط في الشرب', 'الحساسية السياسية الإقليمية (الكاتالانية/الباسكية)', 'رفض الاندماج اجتماعيًا'],
      ru: ['Не вписывается в группу друзей ("pandilla")', 'Нетерпение к медленной социальной жизни', 'Чрезмерное употребление алкоголя', 'Региональная политическая чувствительность (каталонский/баскский)', 'Отказ интегрироваться в общество'],
      zh: ['不融入朋友圈("pandilla")', '对慢节奏的社交生活不耐烦', '过度饮酒', '地区政治敏感性(加泰罗尼亚/巴斯克)', '拒绝社会融入']
    },
    greenFlags: {
      en: ['Warm friend and family integration', 'Enjoying long meals and conversation', 'Physical and verbal affection', 'Passionate about culture and food', 'Loyalty balanced with independence'],
      ko: ['따뜻한 친구 및 가족 통합', '긴 식사와 대화 즐기기', '신체적, 언어적 애정', '문화와 음식에 열정적', '독립성과 균형 잡힌 충성심'],
      ja: ['温かい友人と家族の統合', '長い食事と会話を楽しむ', '身体的および言語的愛情', '文化と食べ物に情熱的', '独立性とバランスの取れた忠誠'],
      es: ['Cálida integración de amigos y familia', 'Disfrutar de largas comidas y conversación', 'Afecto físico y verbal', 'Apasionado por la cultura y la comida', 'Lealtad equilibrada con independencia'],
      pt: ['Calorosa integração de amigos e família', 'Aproveitar longas refeições e conversas', 'Afeto físico e verbal', 'Apaixonado por cultura e comida', 'Lealdade equilibrada com independência'],
      ar: ['اندماج دافئ للأصدقاء والعائلة', 'الاستمتاع بالوجبات الطويلة والمحادثة', 'المودة الجسدية واللفظية', 'شغوف بالثقافة والطعام', 'الولاء المتوازن مع الاستقلالية'],
      ru: ['Тёплая интеграция друзей и семьи', 'Наслаждение долгими трапезами и беседами', 'Физическая и словесная привязанность', 'Страстный к культуре и еде', 'Верность в балансе с независимостью'],
      zh: ['温暖的朋友和家庭融合', '享受漫长的用餐和对话', '身体和语言的情感表达', '对文化和食物充满激情', '忠诚与独立平衡']
    },
    culturalNotes: {
      en: 'Madrid, Barcelona, Sevilla, and Bilbao each have distinct cultures. Regional identity (Catalan, Basque, Andalucian) is meaningful.',
      ko: '마드리드, 바르셀로나, 세비야, 빌바오는 각각 별개의 문화를 가지고 있습니다. 지역 정체성(카탈루냐, 바스크, 안달루시아)이 의미 있습니다.',
      ja: 'マドリード、バルセロナ、セビリア、ビルバオはそれぞれ独自の文化を持っています。地域アイデンティティ(カタルーニャ、バスク、アンダルシア)は意味深いです。',
      es: 'Madrid, Barcelona, Sevilla y Bilbao tienen culturas distintas. La identidad regional (catalana, vasca, andaluza) es significativa.',
      pt: 'Madri, Barcelona, Sevilha e Bilbao têm culturas distintas. Identidade regional (catalã, basca, andaluza) é significativa.',
      ar: 'مدريد وبرشلونة وإشبيلية وبلباو لكل منها ثقافة مميزة. الهوية الإقليمية (الكاتالانية، الباسكية، الأندلسية) ذات معنى.',
      ru: 'У Мадрида, Барселоны, Севильи и Бильбао разные культуры. Региональная идентичность (каталонская, баскская, андалузская) имеет значение.',
      zh: '马德里、巴塞罗那、塞维利亚和毕尔巴鄂各有独特的文化。地区认同(加泰罗尼亚、巴斯克、安达卢西亚)很有意义。'
    },
    popularApps: ['Tinder', 'Meetic', 'Happn', 'Badoo', 'Bumble'],
    languageOfLove: {
      en: 'Quality time + physical touch; social integration is commitment.',
      ko: '함께하는 시간 + 신체 접촉; 사회적 통합이 헌신입니다.',
      ja: '一緒に過ごす時間 + 身体的接触;社会的統合がコミットメントです。',
      es: 'Tiempo de calidad + contacto físico; la integración social es compromiso.',
      pt: 'Tempo de qualidade + toque físico; integração social é compromisso.',
      ar: 'الوقت النوعي + اللمس الجسدي؛ الاندماج الاجتماعي هو الالتزام.',
      ru: 'Качественное время + физическое прикосновение; социальная интеграция — это преданность.',
      zh: '优质时间 + 身体接触;社会融入就是承诺。'
    }
  },
}
