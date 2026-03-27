'use client';

import TerminalInstall from './TerminalInstall';
import { useI18n } from './I18nProvider';

export default function DownloadCTA() {
  const { t } = useI18n();

  return (
    <section id="download" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-[#333333] sm:text-3xl">
          {t('download_heading')}
        </h2>
        <p className="mb-10 text-lg text-[#333333]">{t('download_body')}</p>
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex min-h-[60px] min-w-[200px] items-center justify-center gap-2 rounded-lg bg-[#333333] px-8 py-4 text-center font-medium text-white transition hover:bg-black"
          >
            <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            {t('download_mac')}
          </a>
          <a
            href="#"
            className="inline-flex min-h-[60px] min-w-[200px] items-center justify-center gap-2 rounded-lg bg-[#333333] px-8 py-4 text-center font-medium text-white transition hover:bg-black"
          >
            <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3 12V6.75l6-1.32v6.48L3 12zm6.98.09l.02 6.63l-6 .84V12.9l5.98-.81zM10.7 5.09L17.73 4v8h-7.03V5.09zM17.73 12.25V20.3l-7.03-1.01V12.25h7.03zM3.24 18.54l-.24-.03V13h6v5.19l-5.76.35z"/></svg>
            {t('download_windows')}
          </a>
        </div>
        <TerminalInstall />
      </div>
    </section>
  );
}
