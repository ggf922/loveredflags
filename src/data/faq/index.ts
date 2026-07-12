export type FAQItem = {
  question: { en: string; ko: string }
  answer: { en: string; ko: string }
  category: 'general' | 'test' | 'results' | 'privacy' | 'technical'
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'general',
    question: {
      en: 'What is LoveRedFlags.com?',
      ko: 'LoveRedFlags.com은 무엇인가요?'
    },
    answer: {
      en: 'LoveRedFlags.com is a viral dating personality test that analyzes your relationship patterns and matches you with the best compatible countries from the G20. Through 12 psychology-based questions, we identify which of 16 unique Red Flag personality types you belong to, and reveal your ideal global romantic matches.',
      ko: 'LoveRedFlags.com은 심리학 기반의 12문항 테스트로 당신의 연애 스타일을 분석하고, G20 20개국 중 가장 잘 맞는 상대를 찾아드리는 바이럴 성격 테스트입니다. 16가지 Red Flag 성격 유형 중 하나로 진단되며, 이상적인 글로벌 매칭 결과를 확인할 수 있습니다.'
    }
  },
  {
    category: 'general',
    question: {
      en: 'Is the test free?',
      ko: '테스트는 무료인가요?'
    },
    answer: {
      en: 'Yes, LoveRedFlags.com is completely free to use. There are no hidden fees, no paywalls, and no premium subscriptions. We are supported by advertising, which allows us to keep the entire experience free for our users.',
      ko: '네, LoveRedFlags.com은 완전 무료입니다. 숨겨진 비용이나 유료 결제, 프리미엄 구독이 없습니다. 광고 수익으로 운영되기 때문에 사용자에게는 항상 무료로 제공됩니다.'
    }
  },
  {
    category: 'general',
    question: {
      en: 'What languages does the site support?',
      ko: '어떤 언어를 지원하나요?'
    },
    answer: {
      en: 'The site currently supports 8 languages: English, Korean (한국어), Japanese (日本語), Spanish (Español), Portuguese (Português), Arabic (العربية) with RTL support, Russian (Русский), and Chinese (中文). We auto-detect your browser language, but you can switch anytime using the language selector.',
      ko: '현재 8개 언어를 지원합니다: 영어, 한국어, 일본어, 스페인어, 포르투갈어, 아랍어(RTL 지원), 러시아어, 중국어. 브라우저 언어를 자동 감지하며, 헤더의 언어 선택기로 언제든 변경할 수 있습니다.'
    }
  },
  {
    category: 'test',
    question: {
      en: 'How long does the test take?',
      ko: '테스트는 얼마나 걸리나요?'
    },
    answer: {
      en: 'The test takes approximately 2 minutes to complete. There are 12 carefully designed questions covering four dimensions of your dating personality: Obsession level, Communication style, Emotional stability, and Control tendencies.',
      ko: '테스트는 약 2분 정도 소요됩니다. 총 12문항이며, 4가지 차원(집착도, 의사소통 스타일, 감정 안정성, 통제 성향)을 측정하도록 심리학적으로 설계되어 있습니다.'
    }
  },
  {
    category: 'test',
    question: {
      en: 'How accurate is the test?',
      ko: '테스트는 얼마나 정확한가요?'
    },
    answer: {
      en: 'Our test is designed based on established psychological frameworks including attachment theory, the Big Five personality traits, and communication style research. However, please remember this is an entertainment test — not a clinical psychological assessment. Real relationships involve many complex factors that no quiz can fully capture.',
      ko: '본 테스트는 애착 이론, Big Five 성격 특성, 의사소통 스타일 연구 등 심리학적 프레임워크를 기반으로 설계되었습니다. 다만, 이는 엔터테인먼트 테스트이며 임상 심리 평가는 아닙니다. 실제 관계에는 테스트로 완전히 파악할 수 없는 복잡한 요소들이 존재합니다.'
    }
  },
  {
    category: 'test',
    question: {
      en: 'Can I retake the test?',
      ko: '테스트를 다시 볼 수 있나요?'
    },
    answer: {
      en: 'Absolutely! You can retake the test as many times as you like. After viewing your results, click the "Take Again" button. Try being more honest with yourself for the most accurate results — many people get different answers based on their current mood or relationship situation.',
      ko: '물론입니다! 원하시는 만큼 여러 번 응시할 수 있습니다. 결과 페이지의 "다시 테스트하기" 버튼을 클릭하세요. 가장 정확한 결과를 위해서는 솔직하게 답변하는 것이 중요합니다 — 기분이나 연애 상황에 따라 결과가 달라질 수 있습니다.'
    }
  },
  {
    category: 'results',
    question: {
      en: 'What are the 16 Red Flag types?',
      ko: '16가지 Red Flag 유형은 무엇인가요?'
    },
    answer: {
      en: 'The 16 types are formed by combining four dimensions: Obsessive (O) vs Independent (I), Communicative (C) vs Avoidant (A), Volatile (V) vs Stable (S), and Controlling (C) vs Receptive (R). Examples include ICSR (Green Flag Angel), OCVC (Certified Danger Zone), and 14 others. Each type has its own personality traits, strengths, and challenges.',
      ko: '16가지 유형은 4가지 차원의 조합으로 형성됩니다: 집착형(O) vs 독립형(I), 표현형(C) vs 회피형(A), 감정기복(V) vs 안정(S), 통제형(C) vs 수용형(R). ICSR(그린플래그 천사), OCVC(위험구역) 등 각 유형마다 고유한 특성, 강점, 도전 과제가 있습니다.'
    }
  },
  {
    category: 'results',
    question: {
      en: 'What is the global matching system?',
      ko: '글로벌 매칭 시스템은 어떻게 작동하나요?'
    },
    answer: {
      en: 'Based on your Red Flag type, we match you with 3 best-fit countries for potential partners (both male and female) plus 1 country to avoid. These matches are based on popular cultural dating trends aggregated from social media, dating apps, and cultural observations. All 20 G20 countries are included.',
      ko: '당신의 Red Flag 유형을 기반으로, 남성/여성 파트너에 대한 베스트 매칭 국가 3개와 피해야 할 국가 1개를 매칭해드립니다. 이 매칭은 소셜 미디어, 데이팅 앱, 문화 관찰 등에서 집계된 대중적 데이팅 트렌드를 기반으로 하며, G20 20개국을 모두 포함합니다.'
    }
  },
  {
    category: 'results',
    question: {
      en: 'Are the country matches stereotypes?',
      ko: '국가 매칭은 고정관념 아닌가요?'
    },
    answer: {
      en: 'No, our matches are based on general cultural dating trends observed in popular culture, dating apps, and social research — not stereotypes about individuals. We fully acknowledge that individual people are unique and cannot be reduced to national generalizations. This is meant as light entertainment, not a serious judgment about anyone.',
      ko: '아닙니다. 우리의 매칭은 대중문화, 데이팅 앱, 사회 연구에서 관찰된 일반적인 문화적 데이팅 트렌드에 기반한 것이며, 개인에 대한 고정관념이 아닙니다. 각 개인은 고유하며 국가 일반화로 축소될 수 없다는 점을 인정합니다. 진지한 판단이 아닌 가벼운 엔터테인먼트로 즐겨주세요.'
    }
  },
  {
    category: 'results',
    question: {
      en: 'Why do I see percentage statistics on my result?',
      ko: '결과 페이지의 퍼센트 통계는 어떻게 나오나요?'
    },
    answer: {
      en: 'The percentage represents how many other users worldwide received the same Red Flag type as you. This data is aggregated anonymously from our Supabase database, updated in real-time. If you see "20% of users got your type", it means 1 in 5 people worldwide match your personality pattern.',
      ko: '퍼센트는 전 세계 다른 사용자들 중 당신과 같은 Red Flag 유형을 받은 사람의 비율을 나타냅니다. 이 데이터는 Supabase 데이터베이스에서 익명으로 실시간 집계됩니다. "20%의 사용자가 당신과 같은 유형" 이라면 5명 중 1명이 당신과 같은 유형이라는 의미입니다.'
    }
  },
  {
    category: 'results',
    question: {
      en: 'Can I share my results?',
      ko: '결과를 공유할 수 있나요?'
    },
    answer: {
      en: 'Yes! Each result page has share buttons for Instagram Stories, X (Twitter), WhatsApp, Facebook, and a direct link copy option. You can also download your result as an image to share on any platform. Sharing helps friends discover their own red flags too!',
      ko: '네! 각 결과 페이지에는 인스타그램 스토리, X(트위터), 왓츠앱, 페이스북 공유 버튼과 링크 복사 옵션이 있습니다. 이미지로 다운로드하여 어떤 플랫폼에도 공유할 수 있습니다. 친구들도 자신의 Red Flag를 발견하도록 공유해보세요!'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'Do you collect my personal data?',
      ko: '개인 데이터를 수집하나요?'
    },
    answer: {
      en: 'We only collect anonymous, aggregated data — specifically your Red Flag result code and country of origin (derived from browser locale). We do NOT collect your name, email, IP address, or any personally identifiable information (PII). We do not require sign-up or login to take the test.',
      ko: '익명 집계 데이터만 수집합니다 — Red Flag 결과 코드와 (브라우저 로케일에서 추론된) 국가 정보만 저장됩니다. 이름, 이메일, IP 주소 등 개인 식별 정보(PII)는 수집하지 않습니다. 테스트에 회원가입이나 로그인이 필요 없습니다.'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'Do you use cookies?',
      ko: '쿠키를 사용하나요?'
    },
    answer: {
      en: 'We use minimal cookies for essential site functionality (e.g., remembering your language preference) and analytics (Google Analytics for aggregated site usage). If ads are shown, third-party ad networks (like Google AdSense) may also use cookies. You can manage cookie preferences in our cookie banner or your browser settings.',
      ko: '필수 사이트 기능(예: 언어 설정 기억)과 분석(Google Analytics 집계용)에만 최소한의 쿠키를 사용합니다. 광고가 표시될 경우 Google AdSense 등 제3자 광고 네트워크도 쿠키를 사용할 수 있습니다. 쿠키 배너나 브라우저 설정에서 쿠키를 관리할 수 있습니다.'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'Is my data shared with third parties?',
      ko: '내 데이터가 제3자에게 공유되나요?'
    },
    answer: {
      en: 'We do NOT sell or share your personal data. However, we use standard third-party services: Supabase (anonymous statistics database), Vercel (hosting), and Google Analytics/AdSense (analytics and ads). All of these process data according to their own privacy policies, which we require to meet GDPR and CCPA standards.',
      ko: '개인 데이터를 판매하거나 공유하지 않습니다. 다만, 표준 제3자 서비스를 사용합니다: Supabase(익명 통계 DB), Vercel(호스팅), Google Analytics/AdSense(분석 및 광고). 이들은 GDPR/CCPA 기준에 맞는 자체 개인정보 정책에 따라 데이터를 처리합니다.'
    }
  },
  {
    category: 'privacy',
    question: {
      en: 'How do I request my data be deleted?',
      ko: '내 데이터 삭제를 요청하려면?'
    },
    answer: {
      en: 'Since we only collect anonymous aggregated data, there is nothing personally identifiable to delete. However, if you have any concerns, you can contact us at hello@loveredflags.com and we will address your request within 30 days as required by GDPR/CCPA.',
      ko: '익명 집계 데이터만 수집하므로 개인적으로 식별 가능한 정보가 없습니다. 다만 우려가 있다면 hello@loveredflags.com 으로 문의해주세요. GDPR/CCPA 요구에 따라 30일 이내 처리해드립니다.'
    }
  },
  {
    category: 'technical',
    question: {
      en: 'Does the site work on mobile?',
      ko: '모바일에서도 작동하나요?'
    },
    answer: {
      en: 'Yes! LoveRedFlags.com is fully mobile-optimized with responsive design. It works perfectly on iOS Safari, Android Chrome, and all modern mobile browsers. In fact, most of our users access the site from their phones.',
      ko: '네! LoveRedFlags.com은 반응형 디자인으로 완전히 모바일 최적화되어 있습니다. iOS Safari, Android Chrome 등 모든 최신 모바일 브라우저에서 완벽하게 작동합니다. 실제로 대부분의 사용자가 스마트폰으로 접속합니다.'
    }
  },
  {
    category: 'technical',
    question: {
      en: 'What browsers are supported?',
      ko: '어떤 브라우저를 지원하나요?'
    },
    answer: {
      en: 'We support all modern browsers: Chrome, Firefox, Safari, Edge, Opera, and mobile browsers (iOS Safari 14+, Chrome Mobile). Internet Explorer is NOT supported. For the best experience, we recommend using the latest version of Chrome, Firefox, or Safari.',
      ko: '모든 최신 브라우저를 지원합니다: Chrome, Firefox, Safari, Edge, Opera, 그리고 모바일 브라우저(iOS Safari 14+, Chrome Mobile). Internet Explorer는 지원하지 않습니다. 최상의 경험을 위해 Chrome, Firefox, Safari의 최신 버전을 권장합니다.'
    }
  },
  {
    category: 'technical',
    question: {
      en: 'Why is the site so fast?',
      ko: '사이트가 왜 이렇게 빠른가요?'
    },
    answer: {
      en: 'We use Next.js 16 with edge deployment on Vercel, which serves your content from the closest server to your location globally. Combined with static generation, aggressive caching, and minimal JavaScript, our pages typically load in under 1 second.',
      ko: 'Next.js 16과 Vercel 엣지 배포를 사용하여 전 세계 어디서든 가장 가까운 서버에서 콘텐츠를 제공합니다. 정적 생성, 공격적인 캐싱, 최소한의 JavaScript를 결합하여 페이지가 대개 1초 안에 로드됩니다.'
    }
  },
  {
    category: 'general',
    question: {
      en: 'Who created LoveRedFlags.com?',
      ko: 'LoveRedFlags.com은 누가 만들었나요?'
    },
    answer: {
      en: 'LoveRedFlags.com was created by an independent team fascinated by cross-cultural dating psychology and viral quiz mechanics. We combined psychological research (attachment theory, love languages, communication styles) with playful cultural observations to create an engaging global experience.',
      ko: 'LoveRedFlags.com은 다문화 데이팅 심리학과 바이럴 퀴즈 메커니즘에 매료된 독립 팀이 제작했습니다. 심리학 연구(애착 이론, 사랑의 언어, 의사소통 스타일)와 재미있는 문화적 관찰을 결합하여 매력적인 글로벌 경험을 만들었습니다.'
    }
  },
  {
    category: 'general',
    question: {
      en: 'How can I contact you?',
      ko: '어떻게 연락할 수 있나요?'
    },
    answer: {
      en: 'You can reach us via our Contact page (/contact) or email hello@loveredflags.com directly. We respond to business inquiries, feedback, technical bug reports, and press requests. We typically reply within 2-3 business days.',
      ko: '연락 페이지(/contact)를 통하거나 hello@loveredflags.com 으로 직접 이메일을 보내주세요. 비즈니스 문의, 피드백, 기술 버그 리포트, 언론 문의 등에 답변드립니다. 일반적으로 2-3영업일 이내 답변드립니다.'
    }
  }
]
