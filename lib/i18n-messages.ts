export const STORAGE_KEY = 'doumi-locale';

export type Locale = 'ko' | 'en' | 'ar';

export const RTL_LOCALES: Locale[] = ['ar'];

export const messages = {
  ko: {
    metaTitle: '도움이 (Doumi) — 디지털 소외계층을 위한 AI 웹 대리인',
    nav_about: '제품 소개',
    nav_guide: '가이드',
    nav_terms: '이용약관',
    nav_download: '다운로드',
    menu_open_sr: '메뉴 열기',
    menu_close_sr: '메뉴 닫기',
    menu_heading: '메뉴',
    logo_alt: '도움이',
    hero_iframe_title: 'Spline 3D 씬',
    partner_jung24: '정부24',
    partner_hwell: 'h.well 국민건강보험',
    partner_korail: 'KORAIL',
    partners_line1: '여기서저기로저기서여기로',
    partners_line2: '여기서저기로저기서여기로',
    partners_line3: '여기서저기로저기서여기로',
    download_heading: '지금 Doumi를 사용해 보세요',
    download_body:
      'Free 및 Go 플랜에서 무료 체험하거나 한정된 기간 동안 다른 플랜에서 2배 더 높은 한도로 이용하세요.',
    download_mac: 'Mac 다운로드',
    download_windows: 'Windows 다운로드',
    footer_school: '선린인터넷고등학교',
    footer_program: '정보보호과 응용프로그래밍개발 프로젝트',
    footer_credits: '© Development and Design by 이동건 이윤호 장수하',
    lang_sr: '언어 선택',
    res_changelog: '변경 로그',
    res_docs: '문서',
    res_help: '도움말',
    res_forum: '포럼',
    res_blog: '블로그',
    res_community: '커뮤니티',
    res_workshops: '워크숍',
    res_careers: '채용',
    tos_service: '서비스 이용약관',
    tos_privacy: '개인정보처리방침',
    tos_cookies: '쿠키 정책',
    tos_youth: '청소년 보호정책',
    tos_marketing: '마케팅 정보 수신',
    tos_location: '위치기반 서비스 약관',
    tos_disclaimer: '면책 조항',
    tos_legal_contact: '법무·문의',
    hub_placeholder:
      '콘텐츠 준비 중입니다. 곧 업데이트될 예정입니다.',
    about_intro:
      '도움이(Doumi)는 고령층·저소득층이 공공 웹서비스를 이용하다 막히는 순간을 AI가 실시간으로 감지하고, 동의 후 직접 대신 처리해주는 AI 웹 대리인 서비스입니다.',
    about_mission_title: '미션',
    about_mission_body:
      '디지털 격차가 복지·의료·이동권 격차로 이어지는 구조적 불평등을 해소합니다. 정부24, 건강보험공단, 코레일 등 꼭 필요한 공공 서비스를 누구나 동등하게 이용할 수 있도록 기술로 돕습니다.',
    about_how_title: '작동 방식',
    about_step1:
      '사용자가 공공 웹사이트에서 막히는 순간을 AI가 자동으로 감지합니다.',
    about_step2:
      '화면 하단에 간결한 동의 UI로 도움 여부를 묻고, 승인 후 자동 처리를 시작합니다.',
    about_step3:
      '최종 제출 버튼은 반드시 사용자가 직접 클릭합니다. 개인정보는 메모리에서만 처리되고 저장되지 않습니다.',
    about_sdg_title: 'SDG 10 · 불평등 감소',
    about_sdg_body:
      '도움이는 UN 지속가능발전목표(SDG) 10번 "불평등 감소"에 기여합니다. 디지털 소외가 만드는 복지 사각지대를 AI 기술로 해소하고, 모든 세대가 동등한 공공 서비스 접근권을 가지도록 합니다.',
    about_team_title: '팀',
    about_team_body:
      '도움이는 선린인터넷고등학교 정보보호과 응용프로그래밍개발 프로젝트로, 이동건·이윤호·장수하가 기획·개발·디자인했습니다.',
  },
  en: {
    metaTitle: 'Doumi — AI web agent for digitally excluded users',
    nav_about: 'Product',
    nav_guide: 'Resources',
    nav_terms: 'Terms',
    nav_download: 'Download',
    menu_open_sr: 'Open menu',
    menu_close_sr: 'Close menu',
    menu_heading: 'Menu',
    logo_alt: 'Doumi',
    hero_iframe_title: 'Spline 3D scene',
    partner_jung24: 'Government24',
    partner_hwell: 'National Health Insurance (h.well)',
    partner_korail: 'KORAIL',
    partners_line1: 'From here to there, from there to here',
    partners_line2: 'From here to there, from there to here',
    partners_line3: 'From here to there, from there to here',
    download_heading: 'Try Doumi now',
    download_body:
      'Start a free trial on Free and Go plans, or get double the usage limits for a limited time on other plans.',
    download_mac: 'Download for Mac',
    download_windows: 'Download for Windows',
    footer_school: 'Sunrin Internet High School',
    footer_program:
      'Information Security — Application Development Project',
    footer_credits:
      '© Development and Design by Lee Donggeon, Lee Yunho, and Jung Suha',
    lang_sr: 'Choose language',
    res_changelog: 'Changelog',
    res_docs: 'Docs',
    res_help: 'Help',
    res_forum: 'Forum',
    res_blog: 'Blog',
    res_community: 'Community',
    res_workshops: 'Workshops',
    res_careers: 'Careers',
    tos_service: 'Terms of Service',
    tos_privacy: 'Privacy Policy',
    tos_cookies: 'Cookie Policy',
    tos_youth: 'Youth Protection Policy',
    tos_marketing: 'Marketing Communications',
    tos_location: 'Location-Based Services',
    tos_disclaimer: 'Disclaimers',
    tos_legal_contact: 'Legal & Contact',
    hub_placeholder:
      'This page is coming soon. Check back shortly.',
    about_intro:
      'Doumi is an AI web agent that detects in real time when elderly or low-income users get stuck on public web services, and — with their consent — completes tasks on their behalf.',
    about_mission_title: 'Mission',
    about_mission_body:
      'We address the structural inequality where the digital divide leads to gaps in welfare, healthcare, and mobility. Doumi ensures everyone can equally access essential public services like Government24, National Health Insurance, and KORAIL.',
    about_how_title: 'How It Works',
    about_step1:
      'Our AI automatically detects when a user gets stuck on a public website.',
    about_step2:
      'A simple consent bar at the bottom of the screen asks whether the user wants help, then begins automated assistance upon approval.',
    about_step3:
      'The final submit button is always pressed by the user themselves. Personal data is processed in memory only and never stored.',
    about_sdg_title: 'SDG 10 · Reduced Inequalities',
    about_sdg_body:
      'Doumi contributes to UN Sustainable Development Goal 10: Reduced Inequalities. We use AI technology to close welfare blind spots created by digital exclusion, ensuring equal access to public services for every generation.',
    about_team_title: 'Team',
    about_team_body:
      'Doumi is an Application Development project from the Information Security department at Sunrin Internet High School, planned, developed, and designed by Lee Donggeon, Lee Yunho, and Jung Suha.',
  },
  ar: {
    metaTitle: 'دومي — وكيل ويب ذكي للمستخدمين المستبعدين رقمياً',
    nav_about: 'المنتج',
    nav_guide: 'الموارد',
    nav_terms: 'الشروط',
    nav_download: 'تحميل',
    menu_open_sr: 'فتح القائمة',
    menu_close_sr: 'إغلاق القائمة',
    menu_heading: 'القائمة',
    logo_alt: 'دومي',
    hero_iframe_title: 'مشهد Spline ثلاثي الأبعاد',
    partner_jung24: 'حكومة24',
    partner_hwell: 'التأمين الصحي الوطني (h.well)',
    partner_korail: 'كوريل',
    partners_line1: 'من هنا إلى هناك، ومن هناك إلى هنا',
    partners_line2: 'من هنا إلى هناك، ومن هناك إلى هنا',
    partners_line3: 'من هنا إلى هناك، ومن هناك إلى هنا',
    download_heading: 'جرّب دومي الآن',
    download_body:
      'ابدأ تجربة مجانية على الخطة المجانية أو احصل على ضعف الحدود لفترة محدودة على الخطط الأخرى.',
    download_mac: 'تحميل لنظام Mac',
    download_windows: 'تحميل لنظام Windows',
    footer_school: 'مدرسة سونرين الثانوية للإنترنت',
    footer_program: 'أمن المعلومات — مشروع تطوير التطبيقات',
    footer_credits:
      '© التطوير والتصميم بواسطة لي دونغ‌غون، لي يون‌هو، وجونغ سوها',
    lang_sr: 'اختر اللغة',
    res_changelog: 'سجل التغييرات',
    res_docs: 'المستندات',
    res_help: 'المساعدة',
    res_forum: 'المنتدى',
    res_blog: 'المدونة',
    res_community: 'المجتمع',
    res_workshops: 'ورش العمل',
    res_careers: 'الوظائف',
    tos_service: 'شروط الخدمة',
    tos_privacy: 'سياسة الخصوصية',
    tos_cookies: 'سياسة ملفات تعريف الارتباط',
    tos_youth: 'سياسة حماية الشباب',
    tos_marketing: 'الاتصالات التسويقية',
    tos_location: 'خدمات تحديد الموقع',
    tos_disclaimer: 'إخلاء المسؤولية',
    tos_legal_contact: 'القانونية والتواصل',
    hub_placeholder:
      'هذه الصفحة قيد الإعداد. ستتوفر قريباً.',
    about_intro:
      'دومي هو وكيل ويب ذكي يكتشف في الوقت الفعلي عندما يواجه كبار السن أو ذوو الدخل المنخفض صعوبة في استخدام الخدمات الحكومية الإلكترونية، ويقوم — بموافقتهم — بإتمام المهام نيابة عنهم.',
    about_mission_title: 'المهمة',
    about_mission_body:
      'نعالج عدم المساواة الهيكلية حيث تؤدي الفجوة الرقمية إلى فجوات في الرعاية الاجتماعية والصحية والتنقل. يضمن دومي وصول الجميع بالتساوي إلى الخدمات العامة الأساسية.',
    about_how_title: 'كيف يعمل',
    about_step1:
      'يكتشف الذكاء الاصطناعي تلقائياً عندما يتعثر المستخدم في موقع حكومي.',
    about_step2:
      'يظهر شريط موافقة بسيط أسفل الشاشة يسأل المستخدم عن رغبته في المساعدة، ثم يبدأ المساعدة التلقائية بعد الموافقة.',
    about_step3:
      'يضغط المستخدم دائماً على زر الإرسال النهائي بنفسه. تتم معالجة البيانات الشخصية في الذاكرة فقط ولا يتم تخزينها.',
    about_sdg_title: 'هدف التنمية المستدامة 10 · الحد من أوجه عدم المساواة',
    about_sdg_body:
      'يساهم دومي في هدف التنمية المستدامة رقم 10 للأمم المتحدة: الحد من أوجه عدم المساواة. نستخدم تقنية الذكاء الاصطناعي لسد فجوات الرعاية الاجتماعية الناتجة عن الاستبعاد الرقمي.',
    about_team_title: 'الفريق',
    about_team_body:
      'دومي هو مشروع تطوير تطبيقات من قسم أمن المعلومات في مدرسة سونرين الثانوية للإنترنت، من تخطيط وتطوير وتصميم لي دونغ‌غون ولي يون‌هو وجونغ سوها.',
  },
} as const;

export type MessageKey = keyof typeof messages.ko;
