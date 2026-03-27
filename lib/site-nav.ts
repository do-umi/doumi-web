import type { MessageKey } from '@/lib/i18n-messages';

export const GUIDE_NAV = [
  { slug: 'changelog', msg: 'res_changelog' },
  { slug: 'docs', msg: 'res_docs' },
  { slug: 'help', msg: 'res_help' },
  { slug: 'forum', msg: 'res_forum' },
  { slug: 'blog', msg: 'res_blog' },
  { slug: 'community', msg: 'res_community' },
  { slug: 'workshops', msg: 'res_workshops' },
  { slug: 'careers', msg: 'res_careers' },
] as const satisfies ReadonlyArray<{ slug: string; msg: MessageKey }>;

export const TERMS_NAV = [
  { slug: 'service', msg: 'tos_service' },
  { slug: 'privacy', msg: 'tos_privacy' },
  { slug: 'cookies', msg: 'tos_cookies' },
  { slug: 'youth', msg: 'tos_youth' },
  { slug: 'marketing', msg: 'tos_marketing' },
  { slug: 'location', msg: 'tos_location' },
  { slug: 'disclaimer', msg: 'tos_disclaimer' },
  { slug: 'legal-contact', msg: 'tos_legal_contact' },
] as const satisfies ReadonlyArray<{ slug: string; msg: MessageKey }>;

/** PC 네비에서 라벨 클릭 시 이동할 첫 항목 */
export const GUIDE_FIRST_HREF = `/guide/${GUIDE_NAV[0].slug}`;
export const TERMS_FIRST_HREF = `/terms/${TERMS_NAV[0].slug}`;

export type GuideSlug = (typeof GUIDE_NAV)[number]['slug'];
export type TermsSlug = (typeof TERMS_NAV)[number]['slug'];

export function isGuideSlug(s: string): s is GuideSlug {
  return GUIDE_NAV.some((x) => x.slug === s);
}

export function isTermsSlug(s: string): s is TermsSlug {
  return TERMS_NAV.some((x) => x.slug === s);
}
