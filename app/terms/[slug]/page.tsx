'use client';

import { notFound, useParams } from 'next/navigation';
import DocStubPage from '@/components/DocStubPage';
import { TERMS_NAV } from '@/lib/site-nav';

export default function TermsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = TERMS_NAV.find((x) => x.slug === slug);
  if (!item) notFound();

  return (
    <DocStubPage
      titleKey={item.msg}
      backHref="/terms"
      backLabelKey="nav_terms"
    />
  );
}
