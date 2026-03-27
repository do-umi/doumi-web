'use client';

import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { I18nProvider } from './I18nProvider';

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </I18nProvider>
  );
}
