'use client';

import Link from 'next/link';
import { useI18n } from './I18nProvider';
import type { MessageKey } from '@/lib/i18n-messages';

export default function DocStubPage({
  titleKey,
  backHref,
  backLabelKey,
}: {
  titleKey: MessageKey;
  backHref: string;
  backLabelKey: MessageKey;
}) {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 pb-16 md:py-14">
      <Link
        href={backHref}
        className="text-sm font-medium text-gray-600 transition hover:text-black"
      >
        ← {t(backLabelKey)}
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-[#111] sm:text-3xl">
        {t(titleKey)}
      </h1>
      <p className="mt-6 leading-relaxed text-[#333]">{t('hub_placeholder')}</p>
    </main>
  );
}
