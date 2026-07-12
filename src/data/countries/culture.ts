// Dating culture info for each G20 country
// Original content written for SEO and AdSense approval
// Each country: 800+ chars of substantive info

export type CountryCulture = {
  code: string
  overview: string
  datingStyle: string
  courtship: string
  redFlagsToWatch: string[]
  greenFlags: string[]
  culturalNotes: string
  popularApps: string[]
  languageOfLove: string
}

export const COUNTRY_CULTURE: Record<string, CountryCulture> = {
  KR: {
    code: 'KR',
    overview: 'South Korea has one of the most communication-heavy dating cultures in the world. Constant contact (kakao/text throughout the day), symbolic anniversaries (22-day, 100-day, 200-day, 365-day couple milestones), and matching couple items are near-mandatory rituals.',
    datingStyle: 'Fast-paced, emotionally expressive, romantic gestures are expected — not seen as excessive. Confessions ("고백") mark the formal start of a relationship. Silent treatment or delayed replies are read as major red flags.',
    courtship: 'Traditional courtship still involves meeting the family early, gift-giving on White Day (March 14) and other calendar events. Dating apps are increasingly popular among younger generations, but blind dates ("소개팅") through friends remain common.',
    redFlagsToWatch: [
      'Ghosting or long reply gaps (24+ hours without explanation)',
      'Reluctance to make it "official" past the 3-month mark',
      'Missing anniversary observances (100-day milestones)',
      'Refusing to meet friends or family',
      'Excessive drinking during dates'
    ],
    greenFlags: [
      'Frequent, thoughtful check-ins throughout the day',
      'Remembering and celebrating small milestones',
      'Taking couple photos as a public affirmation',
      'Introducing you to their inner circle within 6 months',
      'Being open about future plans (career, family, city)'
    ],
    culturalNotes: 'Age gap etiquette is important; older partners are addressed with honorifics. Financial expectations differ by generation — younger Koreans increasingly favor 50/50 splits, while traditional norms lean toward the man paying.',
    popularApps: ['Tinder', 'Amanda', 'Sky People', 'Glam', 'Wippy'],
    languageOfLove: 'Words of affirmation + acts of service; frequent verbal reassurance ("사랑해") is expected.'
  },

  US: {
    code: 'US',
    overview: 'American dating culture emphasizes individual choice, casual dating multiple people simultaneously (until "the talk" makes it exclusive), and communication is direct — sometimes bluntly so. There is a strong divide between casual "hookup culture" (common in cities and colleges) and more traditional relationship paths (more common in rural areas or religious communities).',
    datingStyle: 'Direct communication is valued. Ghosting exists but is looked down upon. First dates often involve coffee, drinks, or dinner. Exclusivity is discussed explicitly rather than assumed.',
    courtship: 'Independent from family involvement — meeting parents usually happens after 3-6 months. Splitting the bill is common, though the person who invited often pays. Dating apps dominate urban dating (Tinder, Hinge, Bumble).',
    redFlagsToWatch: [
      'Love-bombing (excessive attention early on)',
      'Refusing to define the relationship (situationships)',
      'Talking about exes constantly',
      'Financial pressure or vagueness about employment',
      'Isolating you from friends or hobbies'
    ],
    greenFlags: [
      'Open communication about expectations',
      'Respect for your independence',
      'Actively integrating you into their life gradually',
      'Consistency between words and actions',
      'Comfort with disagreement without escalation'
    ],
    culturalNotes: 'Regional differences are large: NYC/LA dating culture is app-driven and fast; the South and Midwest lean traditional. Politics has become a major dating filter since 2016.',
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'Match.com', 'The League'],
    languageOfLove: 'Quality time + words of affirmation; explicit compliments matter.'
  },

  JP: {
    code: 'JP',
    overview: 'Japanese dating culture emphasizes subtlety, restraint, and reading the atmosphere ("空気を読む"). Confessions ("告白") are the formal start of a relationship. Public displays of affection are minimal, but private commitment can be deeply intense.',
    datingStyle: 'Reserved in early stages, gradually opening up. Group dates ("合コン") are traditional. Marriage-oriented dating ("お見合い" / marriage introduction agencies) remains popular alongside apps.',
    courtship: 'Slow, deliberate, with clear stages. Gift-giving on White Day, Valentine\'s Day (women give men), and Christmas Eve (a couple\'s holiday in Japan) is very important.',
    redFlagsToWatch: [
      'Refusing to confess ("kokuhaku") after months of dating',
      'Not introducing you to friends after 6+ months',
      'Being overly image-conscious in public',
      'Silence instead of conflict resolution',
      'Very controlling schedule expectations'
    ],
    greenFlags: [
      'Thoughtful small gestures (omiyage souvenirs)',
      'Remembering details you\'ve casually mentioned',
      'Balancing group and one-on-one time',
      'Being transparent about family expectations',
      'Following through on small commitments consistently'
    ],
    culturalNotes: 'Long working hours make dating challenging; couples often meet in the evening after 8pm. "Herbivore men" (soshoku danshi) — men uninterested in traditional courtship — is a real cultural phenomenon.',
    popularApps: ['Pairs', 'Tapple', 'Omiai', 'Tinder', 'Bumble'],
    languageOfLove: 'Acts of service + gifts; expression is subtle but consistent.'
  },

  CN: {
    code: 'CN',
    overview: 'Chinese dating culture is family-centric and increasingly practical. Financial stability, home ownership, and family approval are widely discussed factors. However, urban youth in Tier 1 cities (Shanghai, Beijing, Shenzhen) are shifting rapidly toward Western-style casual dating.',
    datingStyle: 'Direct in intent but often mediated by family. "Marriage markets" in city parks (where parents literally advertise their children) still exist. QQ, WeChat, and Douyin (TikTok) are common ways to meet.',
    courtship: 'Meeting parents happens early once things are serious. Financial security is discussed openly. Gift-giving during Chinese New Year and major holidays is important.',
    redFlagsToWatch: [
      'Vagueness about job, income, or housing situation',
      'Not introducing you to family after 6 months',
      'Living entirely separate from your circle',
      'Not celebrating major couple milestones (520 day, Qixi festival)',
      'Excessive gaming or online activity avoidance'
    ],
    greenFlags: [
      'Openness about long-term plans (city, career, family)',
      'Introducing you to close friends and family',
      'Consistent thoughtful gestures (small gifts, red envelopes)',
      'Investment in shared future planning',
      'Respect for both families'
    ],
    culturalNotes: 'Regional differences are enormous — dating in Shanghai vs. rural Sichuan is like comparing NYC to a small town. Face ("面子") plays a large role in relationship dynamics.',
    popularApps: ['Tantan', 'Momo', 'Soul', 'Baihe', 'WeChat'],
    languageOfLove: 'Acts of service + gifts; tangible investment signals commitment.'
  },

  GB: {
    code: 'GB',
    overview: 'British dating is famously slow-burning, humor-driven, and understated. Sarcasm, self-deprecation, and dry wit are central to flirtation. Emotional expression is subtle; grand gestures can be seen as "too much."',
    datingStyle: 'Casual pub meetings, humor as a screening tool, slow escalation. Alcohol often plays a supporting role in early dates. Directness is not a British virtue in matters of the heart.',
    courtship: 'Long "seeing each other" phase before official titles. Family involvement is minimal in early stages. Splitting bills is common; both taking turns paying is standard.',
    redFlagsToWatch: [
      'Only meeting when drinking is involved',
      'Refusing to define the relationship indefinitely',
      'Excessive class-based comments or snobbery',
      'Passive-aggressive rather than direct conflict',
      'No plans to meet friends after months of dating'
    ],
    greenFlags: [
      'Genuine humor and playful banter',
      'Willingness to plan sober activities',
      'Introducing you to the pub friend group',
      'Consistency over grand gestures',
      'Comfort with silence and low-key hangs'
    ],
    culturalNotes: 'Regional accents and class markers carry cultural weight. Football (soccer) allegiance can be a genuine dating filter.',
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'Thursday', 'Hinge'],
    languageOfLove: 'Quality time + humor as affection; sarcasm is a love language.'
  },

  FR: {
    code: 'FR',
    overview: 'French dating culture is famously ambiguous — there\'s no clear "define the relationship" moment. You are simply "seeing each other," then one day you\'re together. Romance, sensuality, and intellectual conversation are all foundational.',
    datingStyle: 'Long dinners, wine, philosophical conversation, and physical affection early on. Exclusivity is often implicit rather than discussed. Multi-hour dates are common.',
    courtship: 'Meeting family happens on holidays and gatherings rather than as a formal step. Written communication (love letters, messages) is still valued.',
    redFlagsToWatch: [
      'Overly transactional attitude toward dating',
      'Prioritizing efficiency over enjoyment',
      'Not enjoying long meals or conversation',
      'Refusing intellectual or cultural discussion',
      'Constant phone use during dates'
    ],
    greenFlags: [
      'Long, unhurried dates',
      'Genuine interest in your ideas and opinions',
      'Cultural investment (museum visits, films, books)',
      'Comfortable with disagreement over dinner',
      'Physical affection in public without theatrics'
    ],
    culturalNotes: 'Paris vs. rest of France is a real dating divide. English fluency varies widely and can be a barrier or a bond.',
    popularApps: ['Tinder', 'Bumble', 'Fruitz', 'Happn', 'AdopteUnMec'],
    languageOfLove: 'Quality time + physical touch; long conversations are foreplay.'
  },

  DE: {
    code: 'DE',
    overview: 'German dating is direct, honest, and often takes time. Germans are typically hesitant to display emotions publicly, but their commitment, once given, is deep and reliable. Punctuality is non-negotiable.',
    datingStyle: 'Direct verbal communication. Casual dating exists but is less prevalent than in the US. Relationships tend to be discussed and defined explicitly.',
    courtship: 'Introductions to friends and family happen after a clear commitment. Practical planning (holidays, life goals) is discussed early.',
    redFlagsToWatch: [
      'Chronic lateness (a serious violation)',
      'Vagueness about intentions or future plans',
      'Inconsistency between words and actions',
      'Discomfort with direct feedback',
      'Financial secrecy'
    ],
    greenFlags: [
      'Punctuality and reliability',
      'Honest, sometimes blunt communication',
      'Planning trips and future activities together',
      'Financial transparency',
      'Deep loyalty once committed'
    ],
    culturalNotes: 'East/West Germany still carries some cultural difference. Bavaria has a stronger tradition emphasis, while Berlin is famously libertine.',
    popularApps: ['Tinder', 'Bumble', 'Hinge', 'Parship', 'Lovoo'],
    languageOfLove: 'Acts of service + words of affirmation; reliability is romance.'
  },

  IT: {
    code: 'IT',
    overview: 'Italian dating is passionate, expressive, and family-centered. Food, family, and physical affection are all deeply intertwined with romance. Grand gestures are welcomed, not seen as excessive.',
    datingStyle: 'Warm, physically expressive, high emotional intensity. Group dinners with friends and family are early relationship milestones. Verbal declaration of feelings comes quickly.',
    courtship: 'Meeting "la mamma" is a major, meaningful step. Sunday family lunches, cooking together, and long evenings are core relationship activities.',
    redFlagsToWatch: [
      'Excessive attachment to mother ("mammone") without independence',
      'Public jealousy or drama',
      'Refusal to introduce you to family after 3-6 months',
      'Not enjoying food or cooking together',
      'Impatience or coldness'
    ],
    greenFlags: [
      'Genuinely warm family integration',
      'Passionate communication (positive and negative)',
      'Investment in shared meals and traditions',
      'Verbal expression of love ("ti amo") consistently',
      'Emotional availability'
    ],
    culturalNotes: 'North (Milan, Turin) vs South (Naples, Sicily) has distinct dating cultures. Regional identity is strong.',
    popularApps: ['Tinder', 'Meetic', 'Bumble', 'Hinge', 'Lovoo'],
    languageOfLove: 'Physical touch + quality time; food is the ultimate expression.'
  },

  CA: {
    code: 'CA',
    overview: 'Canadian dating is polite, respectful, and generally low-drama. There is a strong emphasis on consent, communication, and equal partnership. Outdoor activities are a core dating format.',
    datingStyle: 'Warm but not overwhelming; respectful boundaries. Apps are common in urban areas (Toronto, Vancouver, Montreal). Rural dating still often happens through community and friend networks.',
    courtship: 'Progression is gradual and communicative. Introducing partners at hockey games, cottages, or family cabin trips is a positive relationship milestone.',
    redFlagsToWatch: [
      'Passive-aggression instead of direct communication',
      'Excessive politeness masking real feelings',
      'Constant apologizing for legitimate needs',
      'Discomfort with outdoor or active dates',
      'Political extremism'
    ],
    greenFlags: [
      'Genuine kindness and consistency',
      'Comfort discussing feelings openly',
      'Enjoying outdoor and cultural activities together',
      'Respect for boundaries and consent',
      'Financial equality and independence'
    ],
    culturalNotes: 'Quebec has its own dating culture heavily influenced by French tradition. English/French bilingualism is a bonding factor for some couples.',
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'Match.com', 'OkCupid'],
    languageOfLove: 'Quality time + acts of service; shared adventures build bonds.'
  },

  AU: {
    code: 'AU',
    overview: 'Australian dating is laid-back, casual, and adventure-oriented. "Mateship" — the platonic friendship model — extends into romantic relationships. Directness, humor, and easygoing energy are prized.',
    datingStyle: 'Casual first dates (coffee, beach, pub). Group activities are common. Humor as a filtering tool. Fast physical progression, slow emotional labels.',
    courtship: 'Meeting mates is often earlier than meeting family. Weekend trips, camping, and beach outings are core relationship building.',
    redFlagsToWatch: [
      'Taking themselves too seriously',
      'Not fitting into friend groups (Australian dealbreaker)',
      'Excessive planning without spontaneity',
      'Not participating in outdoor/adventure activities',
      'Overly intense emotional early declarations'
    ],
    greenFlags: [
      'Comfortable with your friend group',
      'Adventurous and spontaneous',
      'Direct but kind communication',
      'Balance of independence and togetherness',
      'Playful and self-deprecating humor'
    ],
    culturalNotes: 'City vs bush divide is real. Sydney and Melbourne have distinct dating scenes; regional Australia is more traditional.',
    popularApps: ['Hinge', 'Tinder', 'Bumble', 'RSVP', 'eHarmony'],
    languageOfLove: 'Quality time + physical touch; shared adventures = commitment.'
  },

  RU: {
    code: 'RU',
    overview: 'Russian dating culture blends traditional gender roles with strong emotional intensity. Formal courtship (flowers, gifts, chivalry) coexists with deep, often serious conversation about life, family, and future.',
    datingStyle: 'Men are expected to pursue actively and pay on early dates. Physical appearance and self-presentation are highly valued by both genders. Emotional expression is intense but often private.',
    courtship: 'Meeting parents is a significant early milestone. Traditional gender roles are common but shifting in urban centers (Moscow, St. Petersburg).',
    redFlagsToWatch: [
      'Excessive jealousy or possessiveness',
      'Financial secrecy or unreliability',
      'Refusing to meet family',
      'Emotional coldness in private (not just public)',
      'Heavy drinking as a pattern'
    ],
    greenFlags: [
      'Chivalrous, thoughtful gestures',
      'Deep loyalty once committed',
      'Family orientation',
      'Emotional depth in private',
      'Investment in the relationship\'s future'
    ],
    culturalNotes: 'Regional differences between Moscow, St. Petersburg, and other regions are notable. Traditional expectations remain strong.',
    popularApps: ['Mamba', 'Badoo', 'Tinder', 'Loveplanet', 'VK Dating'],
    languageOfLove: 'Acts of service + gifts; tangible commitment matters.'
  },

  BR: {
    code: 'BR',
    overview: 'Brazilian dating is warm, physically expressive, and family-centered. Public displays of affection are normal. Dancing, music, and social gatherings are core relationship contexts.',
    datingStyle: 'Fast physical progression, warm emotional expression, group-oriented socializing. Beach hangs, samba, and Carnival culture influence dating rhythms.',
    courtship: 'Family involvement is very early and important. "Namorado/a" (boyfriend/girlfriend) is a serious title. Public affection is fully accepted.',
    redFlagsToWatch: [
      'Excessive jealousy (a cultural pattern to watch)',
      'Isolation from friends or family',
      'Financial control',
      'Reluctance to introduce you to family',
      'Discomfort with warmth and physical affection'
    ],
    greenFlags: [
      'Warm family integration',
      'Consistent emotional expression',
      'Enjoyment of music, dance, and celebration',
      'Physical affection without possessiveness',
      'Loyalty and passion balanced'
    ],
    culturalNotes: 'Regional identity is strong (Rio vs Sao Paulo vs Northeast). Religious background influences dating pace and expectations.',
    popularApps: ['Tinder', 'Happn', 'Par Perfeito', 'Bumble', 'OkCupid'],
    languageOfLove: 'Physical touch + words of affirmation; expression is constant.'
  },

  IN: {
    code: 'IN',
    overview: 'Indian dating spans a huge spectrum — from arranged marriages (still very common) to fully modern app-based dating in metros. Family involvement and long-term intent are usually central even in modern dating.',
    datingStyle: 'Discretion in early stages (especially in traditional families). Family approval is a major factor. Long conversations about life goals, career, and future are early priorities.',
    courtship: 'Family meetings are pivotal. Arranged marriage networks (Shaadi.com, Jeevansathi) coexist with dating apps. Religious and caste considerations are often present.',
    redFlagsToWatch: [
      'Excessive family control without personal agency',
      'Financial vagueness',
      'Discrimination based on caste or religion',
      'Not being able to define intent clearly',
      'Very different life values that were hidden early'
    ],
    greenFlags: [
      'Clear intent and life planning',
      'Respect for both families',
      'Balance between tradition and personal choice',
      'Ambition matched with values',
      'Communication about expectations'
    ],
    culturalNotes: 'Metro (Mumbai, Delhi, Bangalore) vs Tier 2/3 cities is a large divide. Diaspora Indian dating often blends multiple cultural expectations.',
    popularApps: ['Bumble', 'Tinder', 'Hinge', 'Shaadi.com', 'TrulyMadly'],
    languageOfLove: 'Acts of service + quality time; long-term investment is romance.'
  },

  MX: {
    code: 'MX',
    overview: 'Mexican dating is warm, family-oriented, and often traditional. Family gatherings, food, music, and celebration are central to relationship life. Public affection is welcomed.',
    datingStyle: 'Passionate expression, group-oriented socializing, family involvement. Traditional chivalry coexists with modern equality in urban areas.',
    courtship: 'Meeting family is a major, positive milestone. Religious values often play a role (Catholic tradition strong).',
    redFlagsToWatch: [
      'Machismo without emotional availability',
      'Excessive jealousy',
      'Financial control',
      'Isolation from family or friends',
      'Refusing to define the relationship'
    ],
    greenFlags: [
      'Family warmth and integration',
      'Consistent affection',
      'Cultural pride shared with you',
      'Emotional and physical expression balanced',
      'Long-term intent'
    ],
    culturalNotes: 'Mexico City is quite modern; smaller cities more traditional. Border regions have significant US cultural influence.',
    popularApps: ['Tinder', 'Bumble', 'Happn', 'Badoo', 'OkCupid'],
    languageOfLove: 'Physical touch + words of affirmation; grand gestures welcomed.'
  },

  ID: {
    code: 'ID',
    overview: 'Indonesian dating is influenced by religious values (predominantly Muslim, with significant Hindu, Christian, and Buddhist minorities) and family expectations. Marriage-oriented dating is the norm in most communities.',
    datingStyle: 'Discreet, family-aware, respectful. Public displays of affection are minimal. Long conversations about life plans early on.',
    courtship: 'Family approval is essential. Religious compatibility is often a prerequisite. Meeting parents happens early once intentions are clear.',
    redFlagsToWatch: [
      'Vague religious or life-goal alignment',
      'Not introducing you to family after several months',
      'Financial secrecy',
      'Not respecting local cultural norms if you are foreign',
      'Rushed physical progression against your comfort'
    ],
    greenFlags: [
      'Clear communication about family and religion',
      'Respect for cultural and religious traditions',
      'Long-term life planning',
      'Family warmth',
      'Consistent, patient courtship'
    ],
    culturalNotes: 'Jakarta and Bali are the most cosmopolitan; other regions are more traditional. Bahasa Indonesia has different registers for formality that carry into dating.',
    popularApps: ['Tinder', 'Bumble', 'Setipe', 'Tantan', 'MuzMatch'],
    languageOfLove: 'Acts of service + words of affirmation; family involvement is love.'
  },

  SA: {
    code: 'SA',
    overview: 'Saudi Arabian dating culture is deeply influenced by Islamic tradition and family. Traditional courtship is still dominant, though modernization (especially since 2019 reforms) has changed dating norms significantly among younger urban populations.',
    datingStyle: 'Reserved, family-mediated in traditional settings; more Western-style in urban modern circles. Public interaction between unmarried couples was legally restricted historically.',
    courtship: 'Family involvement is central. Marriage is the standard endpoint of romantic relationships. Islamic values guide most interactions.',
    redFlagsToWatch: [
      'Lack of family involvement or approval process',
      'Vagueness about marriage intent',
      'Cultural insensitivity if you are foreign',
      'Financial or family status misrepresentation',
      'Not respecting religious observances'
    ],
    greenFlags: [
      'Clear intent toward marriage',
      'Respect for family and tradition',
      'Genuine religious alignment',
      'Financial stability and transparency',
      'Long-term life planning'
    ],
    culturalNotes: 'Rapid social change since 2019 (Vision 2030 reforms). Riyadh, Jeddah, and Eastern Province each have distinct social cultures.',
    popularApps: ['MuzMatch', 'Tinder (limited)', 'Hawaya', 'Bumble'],
    languageOfLove: 'Acts of service + quality time; family integration is love.'
  },

  TR: {
    code: 'TR',
    overview: 'Turkish dating blends European modernity with strong family traditions. Passionate expression, hospitality, and family gatherings are all central. Regional and religious differences create a wide spectrum of dating norms.',
    datingStyle: 'Warm, family-aware, expressive. Long dinners, tea/coffee culture, and family visits are central to relationship life.',
    courtship: 'Meeting family is a major step. Traditional courtship (asking family for permission) coexists with modern casual dating in Istanbul and other urban centers.',
    redFlagsToWatch: [
      'Excessive jealousy or possessiveness',
      'Not introducing you to family',
      'Financial secrecy or control',
      'Regional or political extremism',
      'Discomfort with your independence'
    ],
    greenFlags: [
      'Warm family hospitality',
      'Consistent affection and communication',
      'Ambition and life planning',
      'Cultural pride shared with you',
      'Emotional depth balanced with independence'
    ],
    culturalNotes: 'Istanbul is highly modern; Eastern Anatolia more traditional. Political polarization affects dating filters.',
    popularApps: ['Tinder', 'Happn', 'Bumble', 'Yemekmatik', 'Badoo'],
    languageOfLove: 'Quality time + physical touch; hospitality is romance.'
  },

  AR: {
    code: 'AR',
    overview: 'Argentine dating is romantic, dramatic, and deeply expressive. Buenos Aires has one of the most passionate dating cultures in the world. Tango, mate (yerba tea) culture, and family gatherings are all central to relationship life.',
    datingStyle: 'Highly expressive, physically affectionate, verbally romantic. Compliments ("piropos") are common. Nightlife starts late and dates can extend into early morning.',
    courtship: 'Meeting family and friends happens early. Sunday asado (barbecue) with family is a major relationship milestone.',
    redFlagsToWatch: [
      'Excessive drama or emotional intensity',
      'Jealousy without cause',
      'Financial instability without honesty',
      'Not integrating into family/friend circles',
      'Discomfort with public affection'
    ],
    greenFlags: [
      'Deep emotional expression',
      'Warm family integration',
      'Sharing cultural traditions (mate, football, asado)',
      'Consistent romantic gestures',
      'Loyalty despite intensity'
    ],
    culturalNotes: 'Buenos Aires is intensely European in influence; other regions vary. Football (River/Boca) and politics are real cultural markers.',
    popularApps: ['Tinder', 'Happn', 'Badoo', 'Bumble', 'AdopteUnMec'],
    languageOfLove: 'Physical touch + words of affirmation; passion is proof.'
  },

  ZA: {
    code: 'ZA',
    overview: 'South African dating spans multiple cultures — Zulu, Xhosa, Afrikaner, English, Indian, and others each bring distinct traditions. Urban dating (Johannesburg, Cape Town) is diverse and often multicultural.',
    datingStyle: 'Warm, direct in urban areas, more traditional in rural. Outdoor and adventure activities are common date formats. Cultural identity is often openly discussed.',
    courtship: 'Family involvement varies by culture — some traditions include lobola (bridewealth) as a serious commitment step. Intercultural dating is common but comes with cultural navigation.',
    redFlagsToWatch: [
      'Cultural or racial insensitivity',
      'Not being open about family expectations',
      'Financial vagueness',
      'Isolation from friends or community',
      'Political extremism'
    ],
    greenFlags: [
      'Openness to cultural exchange',
      'Warm family integration',
      'Adventure and outdoor spirit',
      'Direct but respectful communication',
      'Balance of tradition and modernity'
    ],
    culturalNotes: 'Cape Town, Johannesburg, and Durban each have distinct dating cultures. Language dynamics (11 official languages) are part of dating.',
    popularApps: ['Tinder', 'Bumble', 'Hinge', 'Badoo', 'OkCupid'],
    languageOfLove: 'Quality time + acts of service; shared adventure builds bonds.'
  },

  ES: {
    code: 'ES',
    overview: 'Spanish dating is warm, social, and deeply intertwined with food and family. Long dinners (starting at 9-10pm), tapas culture, and group socializing are central to relationship life.',
    datingStyle: 'Warm, expressive, physically affectionate. Group dates are common early. Verbal declaration of feelings comes fairly quickly.',
    courtship: 'Meeting friends happens early; family a bit later but still important. Public affection is fully accepted.',
    redFlagsToWatch: [
      'Not fitting into friend group ("pandilla")',
      'Impatience with slow-paced social life',
      'Excessive drinking',
      'Regional political sensitivity (Catalan/Basque)',
      'Refusing to integrate socially'
    ],
    greenFlags: [
      'Warm friend and family integration',
      'Enjoying long meals and conversation',
      'Physical and verbal affection',
      'Passionate about culture and food',
      'Loyalty balanced with independence'
    ],
    culturalNotes: 'Madrid, Barcelona, Sevilla, and Bilbao each have distinct cultures. Regional identity (Catalan, Basque, Andalucian) is meaningful.',
    popularApps: ['Tinder', 'Meetic', 'Happn', 'Badoo', 'Bumble'],
    languageOfLove: 'Quality time + physical touch; social integration is commitment.'
  }
}
