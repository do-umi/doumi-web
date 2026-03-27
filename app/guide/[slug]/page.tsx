'use client';

import { notFound, useParams } from 'next/navigation';
import DocStubPage from '@/components/DocStubPage';
import { GUIDE_NAV } from '@/lib/site-nav';

export default function GuideDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = GUIDE_NAV.find((x) => x.slug === slug);
  if (!item) notFound();

  return (
    <DocStubPage
      titleKey={item.msg}
      backHref="/guide"
      backLabelKey="nav_guide"
    />
  );
}
