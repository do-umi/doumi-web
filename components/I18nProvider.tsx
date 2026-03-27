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
import { messages, STORAGE_KEY } from '@/lib/i18n-messages';
import type { Locale, MessageKey } from '@/lib/i18n-messages';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const VALID_LOCALES: readonly Locale[] = ['ko', 'en', 'ar', 'ja', 'th', 'zh', 'fr', 'ru', 'asm', 'bin'];

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

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
    /* NOTE: dir is NOT set on <html> — Arabic text renders RTL naturally
       via Unicode bidi algorithm. Setting dir="rtl" globally would flip
       the entire flexbox/grid layout which we don't want. */
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].metaTitle;
  }, [locale]);

  const t = useCallback(
    (key: MessageKey) => messages[locale][key],
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}
