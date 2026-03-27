'use client';

import { useI18n } from './I18nProvider';

const SPLINE_EMBED_URL =
  'https://my.spline.design/depicturecopy-WQIULc1NJ32L1mZUAHf3Qv0X/';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative isolate h-[min(92svh,920px)] min-h-[520px] w-full overflow-hidden bg-[#121212] sm:h-[min(94svh,960px)]">
      <iframe
        src={SPLINE_EMBED_URL}
        title={t('hero_iframe_title')}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; fullscreen"
        loading="lazy"
      />
      {/* Spline 워터마크 가리기 */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-[2] h-12 w-[160px] bg-[#121212]" />
    </section>
  );
}
