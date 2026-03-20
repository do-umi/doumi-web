import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '가이드 · 도움이',
  description: 'Doumi 가이드 및 리소스',
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
