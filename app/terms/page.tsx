import NavHubPage from '@/components/NavHubPage';
import { TERMS_NAV } from '@/lib/site-nav';

export default function TermsPage() {
  return <NavHubPage titleKey="nav_terms" basePath="/terms" items={TERMS_NAV} />;
}
