'use client';

import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 pb-16 md:py-14">
      <Link
        href="/"
        className="text-sm font-medium text-gray-600 transition hover:text-black"
      >
        ← {t('logo_alt')}
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-[#111] sm:text-3xl">
        {t('nav_about')}
      </h1>
      <p className="mt-6 leading-relaxed text-[#333]">{t('hub_placeholder')}</p>
    </main>
  );
}
