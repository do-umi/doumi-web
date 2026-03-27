import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 · 도움이',
  description: 'Doumi 약관 및 정책',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
