import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제품 소개 · 도움이',
  description: '도움이(Doumi) — 디지털 소외계층을 위한 AI 웹 대리인 서비스 소개',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
