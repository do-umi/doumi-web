'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { messages, STORAGE_KEY, RTL_LOCALES } from '@/lib/i18n-messages';
import type { Locale, MessageKey } from '@/lib/i18n-messages';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
  dir: 'ltr' | 'rtl';
};

const I18nContext = createContext<I18nContextValue | null>(null);

const VALID_LOCALES: Locale[] = ['ko', 'en', 'ar'];

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}

function applyDir(locale: Locale) {
  const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  return dir;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && VALID_LOCALES.includes(saved)) {
        setLocaleState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next;
    applyDir(next);
  }, []);

  const dir = useMemo(
    () => (RTL_LOCALES.includes(locale) ? 'rtl' as const : 'ltr' as const),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].metaTitle;
    applyDir(locale);
  }, [locale]);

  const t = useCallback(
    (key: MessageKey) => messages[locale][key],
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, dir }),
    [locale, setLocale, t, dir],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}
