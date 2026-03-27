'use client';

import Link from 'next/link';
import { useI18n } from './I18nProvider';
import type { MessageKey } from '@/lib/i18n-messages';

type Item = { slug: string; msg: MessageKey };

export default function NavHubPage({
  titleKey,
  basePath,
  items,
}: {
  titleKey: MessageKey;
  basePath: string;
  items: readonly Item[];
}) {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 pb-16 md:py-14">
      <h1 className="text-2xl font-bold text-[#111] sm:text-3xl">{t(titleKey)}</h1>
      <ul className="mt-8 flex flex-col gap-2 sm:gap-3">
        {items.map(({ slug, msg }) => (
          <li key={slug}>
            <Link
              href={`${basePath}/${slug}`}
              className="block rounded-xl border border-gray-200 bg-white px-4 py-4 text-base font-medium text-[#333] shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
            >
              {t(msg)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
