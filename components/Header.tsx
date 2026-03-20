'use client';

import Link from 'next/link';
import LanguageSelect from './LanguageSelect';
import { useI18n } from './I18nProvider';
import type { MessageKey } from '@/lib/i18n-messages';

const NAV_ITEMS: { href: string; msg: MessageKey }[] = [
  { href: '/about', msg: 'nav_about' },
  { href: '/guide', msg: 'nav_guide' },
  { href: '/terms', msg: 'nav_terms' },
];

export default function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-2.5 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center justify-start">
          <Link href="/" className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/doumi.svg"
              alt={t('logo_alt')}
              width={60}
              height={44}
              className="block h-8 w-auto shrink-0 object-contain sm:h-8"
            />
          </Link>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-6 whitespace-nowrap lg:gap-8">
            {NAV_ITEMS.map(({ href, msg }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-[#333333] transition hover:text-black lg:text-base"
                >
                  {t(msg)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-2.5">
          <LanguageSelect />
          <Link
            href="#download"
            className="inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[#333333] px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-black sm:min-h-10 sm:px-5 sm:text-[15px]"
          >
            {t('nav_download')}
          </Link>
        </div>
      </nav>
    </header>
  );
}
