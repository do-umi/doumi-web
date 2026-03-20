export const STORAGE_KEY = 'doumi-locale';

export type Locale = 'ko' | 'en';

export const messages = {
  ko: {
    metaTitle: '도움이 (Doumi) — 디지털 소외계층을 위한 AI 웹 대리인',
    nav_about: '제품 소개',
    nav_guide: '가이드',
    nav_terms: '이용약관',
    nav_download: '다운로드',
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
  },
  en: {
    metaTitle: 'Doumi — AI web agent for digitally excluded users',
    nav_about: 'Product',
    nav_guide: 'Resources',
    nav_terms: 'Terms',
    nav_download: 'Download',
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
      '© Development and Design by Lee Donggeon, Jang Yunho, and Jang Suha',
    lang_sr: 'Choose language',
  },
} as const;

export type MessageKey = keyof typeof messages.ko;
