'use client';

import { useI18n } from './I18nProvider';
import type { MessageKey } from '@/lib/i18n-messages';

const PARTNERS: { nameKey: MessageKey; imgSrc: string }[] = [
  { nameKey: 'partner_jung24', imgSrc: '/images/jung24.png' },
  { nameKey: 'partner_hwell', imgSrc: '/images/hwell.png' },
  { nameKey: 'partner_korail', imgSrc: '/images/korali.png' },
];

export default function Partners() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {PARTNERS.map(({ nameKey, imgSrc }) => {
            const name = t(nameKey);
            return (
              <div
                key={nameKey}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-4 flex h-20 w-auto max-w-[160px] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgSrc}
                    alt={name}
                    className="block h-full w-auto max-h-20 max-w-full shrink-0 object-contain"
                  />
                </div>
                <h3 className="sr-only">{name}</h3>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-[#333333]">
            {t('partners_line1')}
          </p>
          <p className="mt-1 text-[#333333]">{t('partners_line2')}</p>
          <p className="text-[#333333]">{t('partners_line3')}</p>
        </div>
      </div>
    </section>
  );
}
