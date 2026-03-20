import type { Metadata } from 'next';
import { I18nProvider } from '@/components/I18nProvider';
import './globals.css';

export const metadata: Metadata = {
  title: '도움이 (Doumi) — 디지털 소외계층을 위한 AI 웹 대리인',
  description:
    '고령층·저소득층이 정부24, 건강보험공단, 코레일 등 공공 웹서비스를 이용할 때 AI가 실시간으로 도와드립니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
