'use client';

import Link from 'next/link';
import { useI18n } from './I18nProvider';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link href="/" className="inline-flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/doumi.svg"
              alt={t('logo_alt')}
              width={48}
              height={36}
              className="block h-8 w-auto shrink-0 object-contain"
            />
          </Link>
          <p className="text-lg text-[#333333]">{t('footer_school')}</p>
          <p className="text-[#333333]">{t('footer_program')}</p>
          <p className="text-sm text-[#333333]">{t('footer_credits')}</p>
        </div>
      </div>
    </footer>
  );
}
