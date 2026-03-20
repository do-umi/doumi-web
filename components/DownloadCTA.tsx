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
            className="min-h-[60px] min-w-[200px] rounded-lg bg-[#333333] px-8 py-4 text-center font-medium text-white transition hover:bg-black"
          >
            {t('download_mac')}
          </a>
          <a
            href="#"
            className="min-h-[60px] min-w-[200px] rounded-lg bg-[#333333] px-8 py-4 text-center font-medium text-white transition hover:bg-black"
          >
            {t('download_windows')}
          </a>
        </div>
        <TerminalInstall />
      </div>
    </section>
  );
}
