'use client';

import { useI18n } from './I18nProvider';

const SPLINE_EMBED_URL =
  'https://my.spline.design/depicturecopy-WQIULc1NJ32L1mZUAHf3Qv0X/';

const HERO_PAD = 'px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-6 lg:px-8';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative isolate h-[min(92svh,920px)] min-h-[520px] w-full overflow-hidden bg-[#121212] sm:h-[min(94svh,960px)]">
      <div
        className={`absolute inset-0 z-[1] box-border ${HERO_PAD}`}
      >
        <div className="relative mx-auto h-full w-full max-w-7xl">
          <iframe
            src={SPLINE_EMBED_URL}
            title={t('hero_iframe_title')}
            className="pointer-events-none absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen"
            loading="lazy"
            tabIndex={-1}
          />
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-[2] box-border ${HERO_PAD}`}
        aria-hidden
      >
        <div className="relative mx-auto h-full w-full max-w-7xl">
          <div className="absolute bottom-5 right-5 h-10 w-[148px] rounded-xl bg-[#141414] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:bottom-6 sm:right-6 sm:h-11 sm:w-[154px]" />
        </div>
      </div>
    </section>
  );
}
