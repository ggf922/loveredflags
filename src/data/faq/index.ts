import type { Locale } from '@/types'

type LocalizedText = Record<Locale, string>

export type FAQItem = {
  question: LocalizedText
  answer: LocalizedText
  category: 'general' | 'test' | 'results' | 'privacy' | 'technical'
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'general',
    question: {
      en: 'What is LoveRedFlags.com?',
      ko: 'LoveRedFlags.com은 무엇인가요?',
      ja: 'LoveRedFlags.comとは何ですか?',
      es: '¿Qué es LoveRedFlags.com?',
      pt: 'O que é LoveRedFlags.com?',
      ar: 'ما هو LoveRedFlags.com؟',
      ru: 'Что такое LoveRedFlags.com?',
      zh: 'LoveRedFlags.com 是什么?'
    },
    answer: {
      en: 'LoveRedFlags.com is a viral dating personality test that analyzes your relationship patterns and matches you with the best compatible countries from the G20. Through 12 psychology-based questions, we identify which of 16 unique Red Flag personality types you belong to, and reveal your ideal global romantic matches.',
      ko: 'LoveRedFlags.com은 심리학 기반의 12문항 테스트로 당신의 연애 스타일을 분석하고, G20 20개국 중 가장 잘 맞는 상대를 찾아드리는 바이럴 성격 테스트입니다. 16가지 Red Flag 성격 유형 중 하나로 진단되며, 이상적인 글로벌 매칭 결과를 확인할 수 있습니다.',
      ja: 'LoveRedFlags.comは、あなたの恋愛パターンを分析し、G20の中から最も相性の良い国とマッチングするバイラル恋愛性格テストです。心理学に基づく12の質問を通じて、16の独自のレッドフラッグ性格タイプのどれに該当するかを診断し、理想的なグローバルマッチを明らかにします。',
      es: 'LoveRedFlags.com es un test de personalidad viral que analiza tus patrones de relación y te empareja con los países más compatibles del G20. A través de 12 preguntas basadas en psicología, identificamos a cuál de los 16 tipos únicos de Red Flag perteneces y revelamos tus mejores matches románticos globales.',
      pt: 'LoveRedFlags.com é um teste de personalidade viral que analisa seus padrões de relacionamento e te combina com os países mais compatíveis do G20. Através de 12 perguntas baseadas em psicologia, identificamos a qual dos 16 tipos únicos de Red Flag você pertence e revelamos seus matches românticos globais ideais.',
      ar: 'LoveRedFlags.com هو اختبار شخصية للمواعدة يحلل أنماط علاقاتك ويطابقك مع أفضل الدول المتوافقة من مجموعة العشرين. من خلال 12 سؤالاً مبنياً على علم النفس، نحدد إلى أي من 16 نوعاً فريداً من الإشارات الحمراء تنتمي، ونكشف عن مطابقاتك العالمية المثالية.',
      ru: 'LoveRedFlags.com — это вирусный тест личности для свиданий, который анализирует ваши паттерны отношений и подбирает вам наиболее совместимые страны G20. С помощью 12 вопросов, основанных на психологии, мы определяем, к какому из 16 уникальных типов Red Flag вы относитесь, и раскрываем ваши идеальные глобальные романтические совпадения.',
      zh: 'LoveRedFlags.com 是一个病毒式约会人格测试,分析你的关系模式并将你与G20中最兼容的国家匹配。通过12个基于心理学的问题,我们识别你属于16种独特红旗人格类型中的哪一种,并揭示你理想的全球浪漫匹配。'
    }
  },
  {
    category: 'general',
    question: {
      en: 'Is the test free?',
      ko: '테스트는 무료인가요?',
      ja: 'テストは無料ですか?',
      es: '¿El test es gratis?',
      pt: 'O teste é gratuito?',
      ar: 'هل الاختبار مجاني؟',
      ru: 'Тест бесплатный?',
      zh: '测试是免费的吗?'
    },
    answer: {
      en: 'Yes, LoveRedFlags.com is completely free to use. There are no hidden fees, no paywalls, and no premium subscriptions. We are supported by advertising, which allows us to keep the entire experience free for our users.',
      ko: '네, LoveRedFlags.com은 완전 무료입니다. 숨겨진 비용이나 유료 결제, 프리미엄 구독이 없습니다. 광고 수익으로 운영되기 때문에 사용자에게는 항상 무료로 제공됩니다.',
      ja: 'はい、LoveRedFlags.comは完全に無料でご利用いただけます。隠れた料金、有料の壁、プレミアムサブスクリプションはありません。広告収入で運営されているため、ユーザーには常に無料で提供されます。',
      es: 'Sí, LoveRedFlags.com es completamente gratis. No hay tarifas ocultas, paywalls ni suscripciones premium. Nos financiamos con publicidad, lo que nos permite mantener toda la experiencia gratuita para nuestros usuarios.',
      pt: 'Sim, LoveRedFlags.com é completamente gratuito. Não há taxas ocultas, paywalls ou assinaturas premium. Somos apoiados por publicidade, o que nos permite manter toda a experiência gratuita para nossos usuários.',
      ar: 'نعم، LoveRedFlags.com مجاني تماماً للاستخدام. لا توجد رسوم مخفية أو جدران دفع أو اشتراكات مميزة. نحن مدعومون بالإعلانات، مما يسمح لنا بإبقاء التجربة كاملة مجانية لمستخدمينا.',
      ru: 'Да, LoveRedFlags.com полностью бесплатен. Нет скрытых платежей, платных стен или премиум-подписок. Мы поддерживаемся рекламой, что позволяет нам сохранять весь опыт бесплатным для наших пользователей.',
      zh: '是的,LoveRedFlags.com 完全免费使用。没有隐藏费用、付费墙或高级订阅。我们通过广告获得支持,这让我们能够为用户保持整个体验免费。'
    }
  },
  {
    category: 'general',
    question: {
      en: 'What languages does the site support?',
      ko: '어떤 언어를 지원하나요?',
      ja: 'サイトはどの言語に対応していますか?',
      es: '¿Qué idiomas soporta el sitio?',
      pt: 'Quais idiomas o site suporta?',
      ar: 'ما هي اللغات التي يدعمها الموقع؟',
      ru: 'Какие языки поддерживает сайт?',
      zh: '网站支持哪些语言?'
    },
    answer: {
      en: 'The site currently supports 8 languages: English, Korean (한국어), Japanese (日本語), Spanish (Español), Portuguese (Português), Arabic (العربية) with RTL support, Russian (Русский), and Chinese (中文). We auto-detect your browser language, but you can switch anytime using the language selector.',
      ko: '현재 8개 언어를 지원합니다: 영어, 한국어, 일본어, 스페인어, 포르투갈어, 아랍어(RTL 지원), 러시아어, 중국어. 브라우저 언어를 자동 감지하며, 헤더의 언어 선택기로 언제든 변경할 수 있습니다.',
      ja: '現在8言語に対応しています:英語、韓国語、日本語、スペイン語、ポルトガル語、アラビア語(RTL対応)、ロシア語、中国語。ブラウザ言語を自動検出しますが、言語セレクターでいつでも切り替えられます。',
      es: 'Actualmente el sitio soporta 8 idiomas: inglés, coreano (한국어), japonés (日本語), español, portugués, árabe (العربية) con soporte RTL, ruso (Русский) y chino (中文). Detectamos automáticamente tu idioma del navegador, pero puedes cambiarlo en cualquier momento.',
      pt: 'O site atualmente suporta 8 idiomas: inglês, coreano (한국어), japonês (日本語), espanhol, português, árabe (العربية) com suporte RTL, russo (Русский) e chinês (中文). Detectamos automaticamente seu idioma do navegador, mas você pode mudar a qualquer momento.',
      ar: 'يدعم الموقع حالياً 8 لغات: الإنجليزية، الكورية، اليابانية، الإسبانية، البرتغالية، العربية (بدعم RTL)، الروسية، والصينية. نكتشف لغة متصفحك تلقائياً، ولكن يمكنك التبديل في أي وقت باستخدام محدد اللغة.',
      ru: 'Сайт в настоящее время поддерживает 8 языков: английский, корейский, японский, испанский, португальский, арабский (с поддержкой RTL), русский и китайский. Мы автоматически определяем язык вашего браузера, но вы можете переключаться в любое время.',
      zh: '网站目前支持8种语言:英语、韩语、日语、西班牙语、葡萄牙语、阿拉伯语(支持RTL)、俄语和中文。我们自动检测你的浏览器语言,但你可以随时使用语言选择器切换。'
    }
  },
  {
    category: 'test',
    question: {
      en: 'How long does the test take?',
      ko: '테스트는 얼마나 걸리나요?',
      ja: 'テストはどのくらい時間がかかりますか?',
      es: '¿Cuánto tiempo tarda el test?',
      pt: 'Quanto tempo demora o teste?',
      ar: 'كم من الوقت يستغرق الاختبار؟',
      ru: 'Сколько времени занимает тест?',
      zh: '测试需要多长时间?'
    },
    answer: {
      en: 'The test takes approximately 2 minutes to complete. There are 12 carefully designed questions covering four dimensions of your dating personality: Obsession level, Communication style, Emotional stability, and Control tendencies.',
      ko: '테스트는 약 2분 정도 소요됩니다. 총 12문항이며, 4가지 차원(집착도, 의사소통 스타일, 감정 안정성, 통제 성향)을 측정하도록 심리학적으로 설계되어 있습니다.',
      ja: 'テストは約2分で完了します。集着レベル、コミュニケーションスタイル、感情の安定性、コントロール傾向という恋愛性格の4つの次元をカバーする12の質問が慎重に設計されています。',
      es: 'El test tarda aproximadamente 2 minutos en completarse. Hay 12 preguntas cuidadosamente diseñadas que cubren cuatro dimensiones de tu personalidad amorosa: nivel de Obsesión, estilo de Comunicación, estabilidad Emocional y tendencias de Control.',
      pt: 'O teste demora aproximadamente 2 minutos para completar. Há 12 perguntas cuidadosamente desenhadas que cobrem quatro dimensões da sua personalidade amorosa: nível de Obsessão, estilo de Comunicação, estabilidade Emocional e tendências de Controle.',
      ar: 'يستغرق الاختبار حوالي دقيقتين لإكماله. هناك 12 سؤالاً مصمماً بعناية تغطي أربعة أبعاد لشخصيتك في المواعدة: مستوى الهوس، أسلوب التواصل، الاستقرار العاطفي، وميول السيطرة.',
      ru: 'Тест занимает примерно 2 минуты. Есть 12 тщательно разработанных вопросов, охватывающих четыре измерения вашей любовной личности: уровень Одержимости, стиль Общения, эмоциональная Стабильность и тенденции Контроля.',
      zh: '测试大约需要2分钟完成。共有12个精心设计的问题,涵盖你约会人格的四个维度:痴迷程度、沟通风格、情绪稳定性和控制倾向。'
    }
  },
  {
    category: 'test',
    question: {
      en: 'How accurate is the test?',
      ko: '테스트는 얼마나 정확한가요?',
      ja: 'テストはどのくらい正確ですか?',
      es: '¿Qué tan preciso es el test?',
      pt: 'Quão preciso é o teste?',
      ar: 'ما مدى دقة الاختبار؟',
      ru: 'Насколько точен тест?',
      zh: '测试的准确度如何?'
    },
    answer: {
      en: 'Our test is designed based on established psychological frameworks including attachment theory, the Big Five personality traits, and communication style research. However, please remember this is an entertainment test — not a clinical psychological assessment. Real relationships involve many complex factors that no quiz can fully capture.',
      ko: '본 테스트는 애착 이론, Big Five 성격 특성, 의사소통 스타일 연구 등 심리학적 프레임워크를 기반으로 설계되었습니다. 다만, 이는 엔터테인먼트 테스트이며 임상 심리 평가는 아닙니다. 실제 관계에는 테스트로 완전히 파악할 수 없는 복잡한 요소들이 존재합니다.',
      ja: '当テストは、愛着理論、ビッグファイブ性格特性、コミュニケーションスタイル研究など、確立された心理学的フレームワークに基づいて設計されています。ただし、これはエンターテインメントテストであり、臨床心理評価ではないことをご了承ください。実際の関係には、クイズで完全に捉えられない多くの複雑な要因が関わっています。',
      es: 'Nuestro test está diseñado en base a marcos psicológicos establecidos, incluyendo la teoría del apego, los Cinco Grandes rasgos de personalidad y la investigación del estilo de comunicación. Sin embargo, recuerda que este es un test de entretenimiento, no una evaluación clínica.',
      pt: 'Nosso teste é projetado com base em estruturas psicológicas estabelecidas, incluindo teoria do apego, os Cinco Grandes traços de personalidade e pesquisa de estilo de comunicação. No entanto, lembre-se de que este é um teste de entretenimento, não uma avaliação clínica.',
      ar: 'اختبارنا مصمم على أساس أطر نفسية راسخة تشمل نظرية الارتباط والسمات الخمس الكبرى للشخصية وأبحاث أسلوب التواصل. ومع ذلك، يرجى تذكر أن هذا اختبار ترفيهي وليس تقييماً نفسياً سريرياً.',
      ru: 'Наш тест основан на устоявшихся психологических моделях, включая теорию привязанности, пятифакторную модель личности и исследования стилей общения. Однако помните, что это развлекательный тест, а не клиническая психологическая оценка.',
      zh: '我们的测试基于成熟的心理学框架设计,包括依恋理论、大五人格特质和沟通风格研究。但请记住,这是一个娱乐性测试,而不是临床心理评估。真实的关系涉及许多测验无法完全捕捉的复杂因素。'
    }
  },
  {
    category: 'test',
    question: {
      en: 'Can I retake the test?',
      ko: '테스트를 다시 볼 수 있나요?',
      ja: 'テストを再受験できますか?',
      es: '¿Puedo repetir el test?',
      pt: 'Posso refazer o teste?',
      ar: 'هل يمكنني إعادة الاختبار؟',
      ru: 'Могу ли я пройти тест повторно?',
      zh: '我可以重新测试吗?'
    },
    answer: {
      en: 'Absolutely! You can retake the test as many times as you like. After viewing your results, click the "Take Again" button. Try being more honest with yourself for the most accurate results — many people get different answers based on their current mood or relationship situation.',
      ko: '물론입니다! 원하시는 만큼 여러 번 응시할 수 있습니다. 결과 페이지의 "다시 테스트하기" 버튼을 클릭하세요. 가장 정확한 결과를 위해서는 솔직하게 답변하는 것이 중요합니다.',
      ja: 'もちろんです!何度でもテストを再受験できます。結果を表示後、「再受験」ボタンをクリックしてください。最も正確な結果を得るには、自分自身に正直になりましょう。',
      es: '¡Por supuesto! Puedes repetir el test tantas veces como quieras. Después de ver tus resultados, haz clic en "Volver a hacer". Sé más honesto contigo mismo para los resultados más precisos.',
      pt: 'Absolutamente! Você pode refazer o teste quantas vezes quiser. Após ver seus resultados, clique no botão "Refazer". Tente ser mais honesto consigo mesmo para os resultados mais precisos.',
      ar: 'بالتأكيد! يمكنك إعادة الاختبار عدة مرات كما تريد. بعد عرض نتائجك، انقر على زر "إعادة". حاول أن تكون أكثر صدقاً مع نفسك للحصول على أدق النتائج.',
      ru: 'Конечно! Вы можете пройти тест столько раз, сколько захотите. После просмотра результатов нажмите кнопку «Пройти снова». Постарайтесь быть честнее с собой для наиболее точных результатов.',
      zh: '当然可以!你可以随时重新测试。查看结果后,点击"重新测试"按钮。为了获得最准确的结果,尝试对自己更加诚实。'
    }
  },
  {
    category: 'results',
    question: {
      en: 'What are the 16 Red Flag types?',
      ko: '16가지 Red Flag 유형은 무엇인가요?',
      ja: '16のレッドフラッグタイプとは何ですか?',
      es: '¿Cuáles son los 16 tipos de Red Flag?',
      pt: 'Quais são os 16 tipos de Red Flag?',
      ar: 'ما هي أنواع الإشارات الحمراء الـ 16؟',
      ru: 'Что такое 16 типов Red Flag?',
      zh: '16种红旗类型是什么?'
    },
    answer: {
      en: 'The 16 types are formed by combining four dimensions: Obsessive (O) vs Independent (I), Communicative (C) vs Avoidant (A), Volatile (V) vs Stable (S), and Controlling (C) vs Receptive (R). Examples include ICSR (Green Flag Angel), OCVC (Certified Danger Zone), and 14 others. Each type has its own personality traits, strengths, and challenges.',
      ko: '16가지 유형은 4가지 차원의 조합으로 형성됩니다: 집착형(O) vs 독립형(I), 표현형(C) vs 회피형(A), 감정기복(V) vs 안정(S), 통제형(C) vs 수용형(R). ICSR(그린플래그 천사), OCVC(위험구역) 등 각 유형마다 고유한 특성이 있습니다.',
      ja: '16のタイプは4つの次元の組み合わせで形成されます:執着(O)vs独立(I)、表現(C)vs回避(A)、変動(V)vs安定(S)、支配(C)vs受容(R)。ICSR(グリーンフラッグ天使)、OCVC(認定危険ゾーン)など、それぞれ独自の性格特性があります。',
      es: 'Los 16 tipos se forman combinando cuatro dimensiones: Obsesivo (O) vs Independiente (I), Comunicativo (C) vs Evitativo (A), Volátil (V) vs Estable (S), y Controlador (C) vs Receptivo (R). Ejemplos incluyen ICSR (Ángel Green Flag), OCVC (Zona de Peligro Certificada).',
      pt: 'Os 16 tipos são formados combinando quatro dimensões: Obsessivo (O) vs Independente (I), Comunicativo (C) vs Evitativo (A), Volátil (V) vs Estável (S), e Controlador (C) vs Receptivo (R). Exemplos incluem ICSR (Anjo Green Flag), OCVC (Zona de Perigo Certificada).',
      ar: 'تتشكل الـ 16 نوعاً من خلال دمج أربعة أبعاد: هوسي (O) مقابل مستقل (I)، تواصلي (C) مقابل تجنبي (A)، متقلب (V) مقابل مستقر (S)، ومسيطر (C) مقابل متقبل (R). الأمثلة تشمل ICSR (ملاك إشارة خضراء) و OCVC (منطقة خطر معتمدة).',
      ru: '16 типов формируются путём комбинирования четырёх измерений: Одержимый (O) vs Независимый (I), Коммуникативный (C) vs Избегающий (A), Волатильный (V) vs Стабильный (S), и Контролирующий (C) vs Восприимчивый (R). Примеры: ICSR (Ангел Green Flag), OCVC (Опасная зона).',
      zh: '16种类型由四个维度组合而成:痴迷型(O)vs独立型(I)、表达型(C)vs回避型(A)、波动型(V)vs稳定型(S)、控制型(C)vs接受型(R)。例如ICSR(绿旗天使)、OCVC(认证危险区),每种类型都有独特的人格特征。'
    }
  },
  {
    category: 'results',
    question: {
      en: 'What is the global matching system?',
      ko: '글로벌 매칭 시스템은 어떻게 작동하나요?',
      ja: 'グローバルマッチングシステムとは?',
      es: '¿Qué es el sistema de matching global?',
      pt: 'O que é o sistema de matching global?',
      ar: 'ما هو نظام المطابقة العالمي؟',
      ru: 'Что такое глобальная система матчинга?',
      zh: '什么是全球匹配系统?'
    },
    answer: {
      en: 'Based on your Red Flag type, we match you with 3 best-fit countries for potential partners (both male and female) plus 1 country to avoid. These matches are based on popular cultural dating trends aggregated from social media, dating apps, and cultural observations. All 20 G20 countries are included.',
      ko: '당신의 Red Flag 유형을 기반으로, 남성/여성 파트너에 대한 베스트 매칭 국가 3개와 피해야 할 국가 1개를 매칭해드립니다. 이 매칭은 대중적 데이팅 트렌드를 기반으로 하며, G20 20개국을 모두 포함합니다.',
      ja: 'あなたのレッドフラッグタイプに基づき、男女それぞれの潜在的パートナーに最適な3カ国と、避けるべき1カ国とマッチングします。これらのマッチはSNS、デートアプリ、文化的観察から集約された人気の文化的デートトレンドに基づいています。',
      es: 'Basado en tu tipo de Red Flag, te emparejamos con 3 países ideales para posibles parejas (hombre y mujer) más 1 país a evitar. Estas coincidencias se basan en tendencias culturales de citas agregadas de redes sociales, apps de citas y observaciones culturales.',
      pt: 'Baseado no seu tipo de Red Flag, combinamos você com 3 países ideais para possíveis parceiros (masculino e feminino) mais 1 país a evitar. Essas combinações são baseadas em tendências culturais de namoro agregadas de redes sociais, apps e observações culturais.',
      ar: 'استناداً إلى نوع الإشارة الحمراء الخاص بك، نطابقك مع 3 دول مثالية للشركاء المحتملين (ذكوراً وإناثاً) بالإضافة إلى دولة واحدة يجب تجنبها. تعتمد هذه المطابقات على اتجاهات المواعدة الثقافية الشائعة.',
      ru: 'На основе вашего типа Red Flag мы подбираем 3 наиболее подходящие страны для потенциальных партнёров (мужчин и женщин) плюс 1 страну для избегания. Эти совпадения основаны на популярных культурных тенденциях свиданий.',
      zh: '基于你的红旗类型,我们为你匹配3个最适合的国家(男女潜在伴侣)以及1个应该避免的国家。这些匹配基于从社交媒体、约会应用和文化观察中汇总的流行文化约会趋势。包含所有20个G20国家。'
    }
  },
  {
    category: 'results',
    question: {
      en: 'Are the country matches stereotypes?',
      ko: '국가 매칭은 고정관념 아닌가요?',
      ja: '国のマッチングはステレオタイプですか?',
      es: '¿Los matches por país son estereotipos?',
      pt: 'Os matches por país são estereótipos?',
      ar: 'هل مطابقات الدول صور نمطية؟',
      ru: 'Являются ли страновые совпадения стереотипами?',
      zh: '国家匹配是刻板印象吗?'
    },
    answer: {
      en: 'No, our matches are based on general cultural dating trends observed in popular culture, dating apps, and social research — not stereotypes about individuals. We fully acknowledge that individual people are unique and cannot be reduced to national generalizations. This is meant as light entertainment, not a serious judgment about anyone.',
      ko: '아닙니다. 우리의 매칭은 대중문화, 데이팅 앱, 사회 연구에서 관찰된 일반적인 문화적 데이팅 트렌드에 기반한 것이며, 개인에 대한 고정관념이 아닙니다. 진지한 판단이 아닌 가벼운 엔터테인먼트로 즐겨주세요.',
      ja: 'いいえ、私たちのマッチングは、大衆文化、デートアプリ、社会研究で観察された一般的な文化的デートトレンドに基づいており、個人へのステレオタイプではありません。軽いエンターテインメントとしてお楽しみください。',
      es: 'No, nuestros matches se basan en tendencias culturales generales observadas en la cultura popular, apps de citas e investigación social, no en estereotipos individuales. Reconocemos que cada persona es única. Es entretenimiento ligero.',
      pt: 'Não, nossos matches são baseados em tendências culturais gerais observadas na cultura popular, apps de namoro e pesquisa social — não em estereótipos sobre indivíduos. Reconhecemos que cada pessoa é única. É entretenimento leve.',
      ar: 'لا، مطابقاتنا مبنية على اتجاهات ثقافية عامة في المواعدة يتم ملاحظتها في الثقافة الشعبية وتطبيقات المواعدة والبحث الاجتماعي — وليست صوراً نمطية عن الأفراد. هذا للترفيه الخفيف.',
      ru: 'Нет, наши совпадения основаны на общих культурных тенденциях свиданий, наблюдаемых в популярной культуре, приложениях знакомств и социальных исследованиях, а не на стереотипах о людях. Это лёгкое развлечение.',
      zh: '不,我们的匹配基于流行文化、约会应用和社会研究中观察到的一般文化约会趋势 — 而不是关于个人的刻板印象。我们完全承认每个人都是独一无二的。这是轻松的娱乐,不是对任何人的严肃评判。'
    }
  },
  {
    category: 'results',
    question: {
      en: 'Why do I see percentage statistics on my result?',
      ko: '결과 페이지의 퍼센트 통계는 어떻게 나오나요?',
      ja: '結果ページのパーセンテージは何ですか?',
      es: '¿Por qué veo estadísticas de porcentaje en mi resultado?',
      pt: 'Por que vejo estatísticas percentuais no meu resultado?',
      ar: 'لماذا أرى إحصاءات النسبة المئوية في نتيجتي؟',
      ru: 'Почему я вижу процентную статистику в результате?',
      zh: '为什么我在结果中看到百分比统计?'
    },
    answer: {
      en: 'The percentage represents how many other users worldwide received the same Red Flag type as you. This data is aggregated anonymously from our Supabase database, updated in real-time. If you see "20% of users got your type", it means 1 in 5 people worldwide match your personality pattern.',
      ko: '퍼센트는 전 세계 다른 사용자들 중 당신과 같은 Red Flag 유형을 받은 사람의 비율을 나타냅니다. 이 데이터는 익명으로 실시간 집계됩니다.',
      ja: 'パーセンテージは、あなたと同じレッドフラッグタイプを受けた世界中の他のユーザーの数を表しています。このデータはSupabaseデータベースから匿名で集計され、リアルタイムで更新されます。',
      es: 'El porcentaje representa cuántos otros usuarios en el mundo recibieron el mismo tipo de Red Flag que tú. Estos datos se agregan de forma anónima desde nuestra base de datos Supabase, actualizados en tiempo real.',
      pt: 'A porcentagem representa quantos outros usuários mundialmente receberam o mesmo tipo de Red Flag que você. Estes dados são agregados anonimamente do nosso banco Supabase, atualizados em tempo real.',
      ar: 'تمثل النسبة المئوية عدد المستخدمين الآخرين حول العالم الذين حصلوا على نفس نوع الإشارة الحمراء مثلك. يتم تجميع هذه البيانات بشكل مجهول من قاعدة بيانات Supabase الخاصة بنا، ويتم تحديثها في الوقت الفعلي.',
      ru: 'Процент показывает, сколько других пользователей по всему миру получили тот же тип Red Flag, что и вы. Эти данные анонимно агрегируются из нашей базы данных Supabase и обновляются в реальном времени.',
      zh: '百分比代表全球有多少其他用户获得了与你相同的红旗类型。这些数据从我们的Supabase数据库匿名汇总,实时更新。如果显示"20%的用户获得了你的类型",这意味着全球每5人中就有1人匹配你的人格模式。'
    }
  },
  {
    category: 'results',
    question: {
      en: 'Can I share my results?',
      ko: '결과를 공유할 수 있나요?',
      ja: '結果を共有できますか?',
      es: '¿Puedo compartir mis resultados?',
      pt: 'Posso compartilhar meus resultados?',
      ar: 'هل يمكنني مشاركة نتائجي؟',
      ru: 'Могу ли я поделиться результатами?',
      zh: '我可以分享我的结果吗?'
    },
    answer: {
      en: 'Yes! Each result page has share buttons for Instagram Stories, X (Twitter), WhatsApp, Facebook, and a direct link copy option. You can also download your result as an image to share on any platform. Sharing helps friends discover their own red flags too!',
      ko: '네! 각 결과 페이지에는 인스타그램 스토리, X(트위터), 왓츠앱, 페이스북 공유 버튼과 링크 복사 옵션이 있습니다. 친구들도 자신의 Red Flag를 발견하도록 공유해보세요!',
      ja: 'はい!各結果ページには、Instagramストーリー、X(Twitter)、WhatsApp、Facebook、直接リンクコピーオプションの共有ボタンがあります。友達も自分のレッドフラッグを発見できます!',
      es: '¡Sí! Cada página de resultado tiene botones para compartir en Instagram Stories, X (Twitter), WhatsApp, Facebook y opción de copiar enlace directo. También puedes descargar tu resultado como imagen.',
      pt: 'Sim! Cada página de resultado tem botões para compartilhar no Instagram Stories, X (Twitter), WhatsApp, Facebook e opção de copiar link direto. Você também pode baixar seu resultado como imagem.',
      ar: 'نعم! تحتوي كل صفحة نتيجة على أزرار مشاركة لقصص Instagram و X (Twitter) و WhatsApp و Facebook وخيار نسخ الرابط المباشر. يمكنك أيضاً تنزيل نتيجتك كصورة!',
      ru: 'Да! На каждой странице результатов есть кнопки для Instagram Stories, X (Twitter), WhatsApp, Facebook и опция копирования ссылки. Вы также можете скачать результат как изображение!',
      zh: '是的!每个结果页面都有分享按钮:Instagram故事、X(Twitter)、WhatsApp、Facebook,以及直接链接复制选项。你还可以将结果下载为图片,在任何平台上分享。分享能帮助朋友们也发现自己的红旗!'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'Do you collect my personal data?',
      ko: '개인 데이터를 수집하나요?',
      ja: '個人データを収集しますか?',
      es: '¿Recopilan mis datos personales?',
      pt: 'Vocês coletam meus dados pessoais?',
      ar: 'هل تجمعون بياناتي الشخصية؟',
      ru: 'Собираете ли вы мои личные данные?',
      zh: '你们收集我的个人数据吗?'
    },
    answer: {
      en: 'We only collect anonymous, aggregated data — specifically your Red Flag result code and country of origin (derived from browser locale). We do NOT collect your name, email, IP address, or any personally identifiable information (PII). We do not require sign-up or login to take the test.',
      ko: '익명 집계 데이터만 수집합니다 — Red Flag 결과 코드와 (브라우저 로케일에서 추론된) 국가 정보만 저장됩니다. 이름, 이메일, IP 주소 등 개인 식별 정보(PII)는 수집하지 않습니다.',
      ja: '匿名の集計データのみを収集します — 具体的にはレッドフラッグ結果コードと(ブラウザロケールから推測される)出身国。名前、メール、IPアドレスなど個人を特定できる情報(PII)は収集しません。',
      es: 'Solo recopilamos datos anónimos y agregados: tu código de resultado Red Flag y país de origen (derivado del idioma del navegador). NO recopilamos tu nombre, email, dirección IP ni información personal identificable (PII).',
      pt: 'Coletamos apenas dados anônimos e agregados: seu código de resultado Red Flag e país de origem (derivado do idioma do navegador). NÃO coletamos seu nome, email, endereço IP ou informações pessoalmente identificáveis (PII).',
      ar: 'نجمع فقط بيانات مجهولة ومجمعة — تحديداً رمز نتيجة الإشارة الحمراء وبلد المنشأ (المستنتج من إعدادات المتصفح). لا نجمع اسمك أو بريدك الإلكتروني أو عنوان IP أو أي معلومات تعريف شخصية.',
      ru: 'Мы собираем только анонимные, агрегированные данные: ваш код результата Red Flag и страну происхождения (определяемую по языку браузера). Мы НЕ собираем ваше имя, email, IP-адрес или другую личную информацию.',
      zh: '我们只收集匿名的汇总数据 — 具体是你的红旗结果代码和来源国家(从浏览器区域设置推断)。我们不收集你的姓名、电子邮件、IP地址或任何个人身份信息(PII)。测试不需要注册或登录。'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'Do you use cookies?',
      ko: '쿠키를 사용하나요?',
      ja: 'クッキーを使用していますか?',
      es: '¿Usan cookies?',
      pt: 'Vocês usam cookies?',
      ar: 'هل تستخدمون ملفات تعريف الارتباط؟',
      ru: 'Используете ли вы cookies?',
      zh: '你们使用cookies吗?'
    },
    answer: {
      en: 'We use minimal cookies for essential site functionality (e.g., remembering your language preference) and analytics (Google Analytics for aggregated site usage). If ads are shown, third-party ad networks (like Google AdSense) may also use cookies. You can manage cookie preferences in our cookie banner or your browser settings.',
      ko: '필수 사이트 기능(예: 언어 설정 기억)과 분석(Google Analytics 집계용)에만 최소한의 쿠키를 사용합니다. 광고가 표시될 경우 Google AdSense 등 제3자 광고 네트워크도 쿠키를 사용할 수 있습니다.',
      ja: 'サイトの必須機能(言語設定の記憶など)と分析(Google Analyticsの集計)に最小限のクッキーを使用します。広告が表示される場合、Google AdSenseなどのサードパーティ広告ネットワークもクッキーを使用する場合があります。',
      es: 'Usamos cookies mínimas para funcionalidad esencial (ej. recordar tu preferencia de idioma) y analíticas (Google Analytics para uso agregado). Si se muestran anuncios, redes publicitarias de terceros (como Google AdSense) también pueden usar cookies.',
      pt: 'Usamos cookies mínimos para funcionalidade essencial (ex. lembrar sua preferência de idioma) e analytics (Google Analytics para uso agregado). Se anúncios forem exibidos, redes publicitárias de terceiros (como Google AdSense) também podem usar cookies.',
      ar: 'نستخدم الحد الأدنى من ملفات تعريف الارتباط للوظائف الأساسية للموقع (مثل تذكر تفضيل اللغة) والتحليلات (Google Analytics). إذا تم عرض الإعلانات، فقد تستخدم شبكات الإعلانات التابعة لجهات خارجية (مثل Google AdSense) ملفات تعريف الارتباط أيضاً.',
      ru: 'Мы используем минимальные cookies для основных функций сайта (например, запоминание языка) и аналитики (Google Analytics для агрегированной статистики). Если показываются реклама, сторонние рекламные сети (например, Google AdSense) также могут использовать cookies.',
      zh: '我们使用最少的cookies用于基本网站功能(如记住你的语言偏好)和分析(Google Analytics用于聚合网站使用情况)。如果显示广告,第三方广告网络(如Google AdSense)也可能使用cookies。你可以在我们的cookie横幅或浏览器设置中管理cookie偏好。'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'Is my data shared with third parties?',
      ko: '내 데이터가 제3자에게 공유되나요?',
      ja: 'データは第三者と共有されますか?',
      es: '¿Se comparten mis datos con terceros?',
      pt: 'Meus dados são compartilhados com terceiros?',
      ar: 'هل تتم مشاركة بياناتي مع أطراف ثالثة؟',
      ru: 'Передаются ли мои данные третьим лицам?',
      zh: '我的数据是否与第三方共享?'
    },
    answer: {
      en: 'We do NOT sell or share your personal data. However, we use standard third-party services: Supabase (anonymous statistics database), Vercel (hosting), and Google Analytics/AdSense (analytics and ads). All of these process data according to their own privacy policies, which we require to meet GDPR and CCPA standards.',
      ko: '개인 데이터를 판매하거나 공유하지 않습니다. 다만, 표준 제3자 서비스를 사용합니다: Supabase(익명 통계 DB), Vercel(호스팅), Google Analytics/AdSense(분석 및 광고).',
      ja: '個人データを販売または共有しません。ただし、標準的なサードパーティサービスを使用しています:Supabase(匿名統計データベース)、Vercel(ホスティング)、Google Analytics/AdSense(分析と広告)。',
      es: 'NO vendemos ni compartimos tus datos personales. Sin embargo, usamos servicios estándar de terceros: Supabase (base de datos de estadísticas anónimas), Vercel (hosting) y Google Analytics/AdSense.',
      pt: 'NÃO vendemos ou compartilhamos seus dados pessoais. No entanto, usamos serviços padrão de terceiros: Supabase (banco de estatísticas anônimas), Vercel (hospedagem) e Google Analytics/AdSense.',
      ar: 'لا نبيع أو نشارك بياناتك الشخصية. ومع ذلك، نستخدم خدمات قياسية لجهات خارجية: Supabase (قاعدة بيانات إحصاءات مجهولة) و Vercel (استضافة) و Google Analytics/AdSense (التحليلات والإعلانات).',
      ru: 'Мы НЕ продаём и не передаём ваши личные данные. Однако мы используем стандартные сторонние сервисы: Supabase (анонимная база статистики), Vercel (хостинг) и Google Analytics/AdSense.',
      zh: '我们不会出售或共享你的个人数据。但是,我们使用标准的第三方服务:Supabase(匿名统计数据库)、Vercel(托管)和Google Analytics/AdSense(分析和广告)。所有这些都根据GDPR和CCPA标准的隐私政策处理数据。'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'How do I request my data be deleted?',
      ko: '내 데이터 삭제를 요청하려면?',
      ja: 'データ削除をリクエストするには?',
      es: '¿Cómo solicito la eliminación de mis datos?',
      pt: 'Como solicito a exclusão dos meus dados?',
      ar: 'كيف أطلب حذف بياناتي؟',
      ru: 'Как запросить удаление моих данных?',
      zh: '如何请求删除我的数据?'
    },
    answer: {
      en: 'Since we only collect anonymous aggregated data, there is nothing personally identifiable to delete. However, if you have any concerns, you can contact us at hello@loveredflags.com and we will address your request within 30 days as required by GDPR/CCPA.',
      ko: '익명 집계 데이터만 수집하므로 개인적으로 식별 가능한 정보가 없습니다. 다만 우려가 있다면 hello@loveredflags.com 으로 문의해주세요.',
      ja: '匿名の集計データのみを収集しているため、個人を特定できる情報はありません。ただし、懸念事項がある場合はhello@loveredflags.comまでご連絡ください。',
      es: 'Como solo recopilamos datos anónimos agregados, no hay nada personalmente identificable que borrar. Sin embargo, si tienes alguna inquietud, puedes contactarnos en hello@loveredflags.com y responderemos en 30 días.',
      pt: 'Como coletamos apenas dados anônimos agregados, não há nada pessoalmente identificável para excluir. No entanto, se você tiver alguma preocupação, pode nos contatar em hello@loveredflags.com e responderemos em 30 dias.',
      ar: 'نظراً لأننا نجمع فقط بيانات مجمعة مجهولة، فلا يوجد شيء يمكن تعريفه شخصياً لحذفه. ومع ذلك، إذا كانت لديك أي مخاوف، يمكنك الاتصال بنا على hello@loveredflags.com وسنعالج طلبك في غضون 30 يوماً.',
      ru: 'Поскольку мы собираем только анонимные агрегированные данные, нечего идентифицируемого удалять. Однако, если у вас есть вопросы, свяжитесь с нами по hello@loveredflags.com, и мы ответим в течение 30 дней.',
      zh: '由于我们只收集匿名汇总数据,没有个人身份信息可以删除。但是,如果你有任何疑虑,可以通过hello@loveredflags.com联系我们,我们将根据GDPR/CCPA要求在30天内处理你的请求。'
    }
  },
  {
    category: 'technical',
    question: {
      en: 'Does the site work on mobile?',
      ko: '모바일에서도 작동하나요?',
      ja: 'モバイルで動作しますか?',
      es: '¿El sitio funciona en móvil?',
      pt: 'O site funciona no mobile?',
      ar: 'هل يعمل الموقع على الهاتف المحمول؟',
      ru: 'Работает ли сайт на мобильных?',
      zh: '网站在移动端可用吗?'
    },
    answer: {
      en: 'Yes! LoveRedFlags.com is fully mobile-optimized with responsive design. It works perfectly on iOS Safari, Android Chrome, and all modern mobile browsers. In fact, most of our users access the site from their phones.',
      ko: '네! LoveRedFlags.com은 반응형 디자인으로 완전히 모바일 최적화되어 있습니다. iOS Safari, Android Chrome 등 모든 최신 모바일 브라우저에서 완벽하게 작동합니다.',
      ja: 'はい!LoveRedFlags.comはレスポンシブデザインで完全にモバイル最適化されています。iOS Safari、Android Chromeなど、すべての最新モバイルブラウザで完璧に動作します。',
      es: '¡Sí! LoveRedFlags.com está totalmente optimizado para móvil con diseño responsivo. Funciona perfectamente en iOS Safari, Android Chrome y todos los navegadores móviles modernos.',
      pt: 'Sim! LoveRedFlags.com é totalmente otimizado para mobile com design responsivo. Funciona perfeitamente no iOS Safari, Android Chrome e todos os navegadores mobile modernos.',
      ar: 'نعم! LoveRedFlags.com محسّن بالكامل للجوال مع تصميم متجاوب. يعمل بشكل مثالي على iOS Safari و Android Chrome وجميع متصفحات الجوال الحديثة.',
      ru: 'Да! LoveRedFlags.com полностью оптимизирован для мобильных с адаптивным дизайном. Отлично работает на iOS Safari, Android Chrome и всех современных мобильных браузерах.',
      zh: '是的!LoveRedFlags.com通过响应式设计完全针对移动设备优化。在iOS Safari、Android Chrome和所有现代移动浏览器上完美运行。事实上,我们大多数用户都是通过手机访问网站的。'
    }
  },
  {
    category: 'technical',
    question: {
      en: 'What browsers are supported?',
      ko: '어떤 브라우저를 지원하나요?',
      ja: 'どのブラウザに対応していますか?',
      es: '¿Qué navegadores son compatibles?',
      pt: 'Quais navegadores são suportados?',
      ar: 'ما هي المتصفحات المدعومة؟',
      ru: 'Какие браузеры поддерживаются?',
      zh: '支持哪些浏览器?'
    },
    answer: {
      en: 'We support all modern browsers: Chrome, Firefox, Safari, Edge, Opera, and mobile browsers (iOS Safari 14+, Chrome Mobile). Internet Explorer is NOT supported. For the best experience, we recommend using the latest version of Chrome, Firefox, or Safari.',
      ko: '모든 최신 브라우저를 지원합니다: Chrome, Firefox, Safari, Edge, Opera, 그리고 모바일 브라우저(iOS Safari 14+, Chrome Mobile). Internet Explorer는 지원하지 않습니다.',
      ja: 'すべての最新ブラウザに対応:Chrome、Firefox、Safari、Edge、Opera、モバイルブラウザ(iOS Safari 14+、Chrome Mobile)。Internet Explorerは対応していません。',
      es: 'Soportamos todos los navegadores modernos: Chrome, Firefox, Safari, Edge, Opera y navegadores móviles (iOS Safari 14+, Chrome Mobile). Internet Explorer NO es compatible.',
      pt: 'Suportamos todos os navegadores modernos: Chrome, Firefox, Safari, Edge, Opera e navegadores mobile (iOS Safari 14+, Chrome Mobile). Internet Explorer NÃO é suportado.',
      ar: 'ندعم جميع المتصفحات الحديثة: Chrome و Firefox و Safari و Edge و Opera ومتصفحات الجوال (iOS Safari 14+ و Chrome Mobile). لا يتم دعم Internet Explorer.',
      ru: 'Мы поддерживаем все современные браузеры: Chrome, Firefox, Safari, Edge, Opera и мобильные браузеры (iOS Safari 14+, Chrome Mobile). Internet Explorer НЕ поддерживается.',
      zh: '我们支持所有现代浏览器:Chrome、Firefox、Safari、Edge、Opera和移动浏览器(iOS Safari 14+、Chrome Mobile)。不支持Internet Explorer。为了最佳体验,我们建议使用最新版本的Chrome、Firefox或Safari。'
    }
  },
  {
    category: 'technical',
    question: {
      en: 'Why is the site so fast?',
      ko: '사이트가 왜 이렇게 빠른가요?',
      ja: 'なぜサイトはこんなに速いのですか?',
      es: '¿Por qué el sitio es tan rápido?',
      pt: 'Por que o site é tão rápido?',
      ar: 'لماذا الموقع سريع جداً؟',
      ru: 'Почему сайт такой быстрый?',
      zh: '为什么网站这么快?'
    },
    answer: {
      en: 'We use Next.js 16 with edge deployment on Vercel, which serves your content from the closest server to your location globally. Combined with static generation, aggressive caching, and minimal JavaScript, our pages typically load in under 1 second.',
      ko: 'Next.js 16과 Vercel 엣지 배포를 사용하여 전 세계 어디서든 가장 가까운 서버에서 콘텐츠를 제공합니다. 정적 생성과 최소 JavaScript로 대개 1초 안에 로드됩니다.',
      ja: 'Next.js 16とVercelエッジデプロイメントを使用し、世界中どこからでも最も近いサーバーからコンテンツを配信します。静的生成、積極的なキャッシング、最小限のJavaScriptと組み合わせることで、通常1秒以内にページが読み込まれます。',
      es: 'Usamos Next.js 16 con despliegue edge en Vercel, que sirve tu contenido desde el servidor más cercano a tu ubicación global. Combinado con generación estática, caché agresivo y JavaScript mínimo, nuestras páginas cargan en menos de 1 segundo.',
      pt: 'Usamos Next.js 16 com deploy edge no Vercel, que serve seu conteúdo do servidor mais próximo da sua localização global. Combinado com geração estática, cache agressivo e JavaScript mínimo, nossas páginas carregam em menos de 1 segundo.',
      ar: 'نستخدم Next.js 16 مع نشر Edge على Vercel، والذي يقدم المحتوى من أقرب خادم لموقعك عالمياً. مع التوليد الثابت والتخزين المؤقت والحد الأدنى من JavaScript، تُحمّل صفحاتنا في أقل من ثانية واحدة.',
      ru: 'Мы используем Next.js 16 с edge-развертыванием на Vercel, что доставляет ваш контент с ближайшего сервера к вашему местоположению по всему миру. В сочетании со статической генерацией и минимальным JavaScript страницы загружаются менее чем за 1 секунду.',
      zh: '我们使用带Vercel边缘部署的Next.js 16,从全球最接近你位置的服务器提供内容。结合静态生成、积极缓存和最少的JavaScript,我们的页面通常在1秒内加载完成。'
    }
  },
  {
    category: 'general',
    question: {
      en: 'Who created LoveRedFlags.com?',
      ko: 'LoveRedFlags.com은 누가 만들었나요?',
      ja: 'LoveRedFlags.comは誰が作りましたか?',
      es: '¿Quién creó LoveRedFlags.com?',
      pt: 'Quem criou o LoveRedFlags.com?',
      ar: 'من أنشأ LoveRedFlags.com؟',
      ru: 'Кто создал LoveRedFlags.com?',
      zh: '谁创建了 LoveRedFlags.com?'
    },
    answer: {
      en: 'LoveRedFlags.com was created by an independent team fascinated by cross-cultural dating psychology and viral quiz mechanics. We combined psychological research (attachment theory, love languages, communication styles) with playful cultural observations to create an engaging global experience.',
      ko: 'LoveRedFlags.com은 다문화 데이팅 심리학과 바이럴 퀴즈 메커니즘에 매료된 독립 팀이 제작했습니다. 심리학 연구와 재미있는 문화적 관찰을 결합했습니다.',
      ja: 'LoveRedFlags.comは、異文化間の恋愛心理学とバイラルクイズメカニクスに魅了された独立チームによって作られました。心理学研究と楽しい文化的観察を組み合わせています。',
      es: 'LoveRedFlags.com fue creado por un equipo independiente fascinado por la psicología de citas transculturales y la mecánica de quizzes virales. Combinamos investigación psicológica con observaciones culturales lúdicas.',
      pt: 'LoveRedFlags.com foi criado por uma equipe independente fascinada por psicologia de namoro transcultural e mecânicas de quiz viral. Combinamos pesquisa psicológica com observações culturais divertidas.',
      ar: 'تم إنشاء LoveRedFlags.com بواسطة فريق مستقل مفتون بعلم النفس العابر للثقافات في المواعدة وميكانيكا الاختبارات الفيروسية. جمعنا بين الأبحاث النفسية والملاحظات الثقافية المرحة.',
      ru: 'LoveRedFlags.com был создан независимой командой, увлечённой межкультурной психологией свиданий и вирусной механикой викторин. Мы сочетали психологические исследования с игривыми культурными наблюдениями.',
      zh: 'LoveRedFlags.com由一个独立团队创建,他们对跨文化约会心理学和病毒式测验机制着迷。我们结合心理学研究(依恋理论、爱的语言、沟通风格)与有趣的文化观察,创造了引人入胜的全球体验。'
    }
  },
  {
    category: 'general',
    question: {
      en: 'How can I contact you?',
      ko: '어떻게 연락할 수 있나요?',
      ja: 'どうすれば連絡できますか?',
      es: '¿Cómo puedo contactarlos?',
      pt: 'Como posso contatá-los?',
      ar: 'كيف يمكنني الاتصال بكم؟',
      ru: 'Как я могу связаться с вами?',
      zh: '如何联系你们?'
    },
    answer: {
      en: 'You can reach us via our Contact page (/contact) or email hello@loveredflags.com directly. We respond to business inquiries, feedback, technical bug reports, and press requests. We typically reply within 2-3 business days.',
      ko: '연락 페이지(/contact)를 통하거나 hello@loveredflags.com 으로 직접 이메일을 보내주세요. 일반적으로 2-3영업일 이내 답변드립니다.',
      ja: 'お問い合わせページ(/contact)またはhello@loveredflags.comに直接メールでご連絡いただけます。通常2〜3営業日以内にお返事します。',
      es: 'Puedes contactarnos a través de nuestra página de Contacto (/contact) o enviar un email directo a hello@loveredflags.com. Normalmente respondemos en 2-3 días hábiles.',
      pt: 'Você pode nos contatar através da nossa página de Contato (/contact) ou enviar um email diretamente para hello@loveredflags.com. Normalmente respondemos em 2-3 dias úteis.',
      ar: 'يمكنك الوصول إلينا عبر صفحة الاتصال (/contact) أو مراسلتنا على hello@loveredflags.com مباشرة. عادةً نرد خلال 2-3 أيام عمل.',
      ru: 'Вы можете связаться с нами через нашу страницу «Контакты» (/contact) или отправить письмо напрямую на hello@loveredflags.com. Обычно отвечаем в течение 2-3 рабочих дней.',
      zh: '你可以通过我们的联系页面(/contact)或直接发送电子邮件到hello@loveredflags.com与我们联系。我们回复商务咨询、反馈、技术错误报告和媒体请求。通常在2-3个工作日内回复。'
    }
  }
]
