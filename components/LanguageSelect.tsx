'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from './I18nProvider';
import type { Locale } from '@/lib/i18n-messages';

const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: 'ko', label: '한국어', short: 'KO' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
];

export default function LanguageSelect() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        id="lang-select-button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-9 max-w-full items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-2 text-sm font-medium text-[#333333] transition hover:border-gray-300 hover:bg-gray-50 sm:min-h-10 sm:gap-1.5 sm:px-3.5 sm:text-[15px]"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="lang-select-list"
      >
        <span className="sr-only">
          {t('lang_sr')}: {current.label}
        </span>
        <svg
          className="h-4 w-4 shrink-0 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            d="M2 12h20M12 2a15 15 0 000 20M12 2a15 15 0 010 20"
          />
        </svg>
        <span className="hidden sm:inline">{current.label}</span>
        <span className="text-xs font-semibold uppercase sm:hidden">
          {current.short}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-gray-500 transition ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id="lang-select-list"
          role="listbox"
          aria-labelledby="lang-select-button"
          className="absolute right-0 z-[100] mt-1 min-w-[9rem] overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg rtl:left-0 rtl:right-auto"
        >
          {LOCALES.map(({ code, label }) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                className={`flex w-full px-3 py-2 text-left text-sm hover:bg-gray-50 rtl:text-right ${
                  locale === code ? 'bg-gray-50 font-medium text-black' : 'text-[#333333]'
                }`}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
