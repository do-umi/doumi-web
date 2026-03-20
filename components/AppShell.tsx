'use client';

import type { ReactNode } from 'react';
import Header from './Header';
import { I18nProvider } from './I18nProvider';

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <Header />
      {children}
    </I18nProvider>
  );
}
