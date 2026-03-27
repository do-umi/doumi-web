import NavHubPage from '@/components/NavHubPage';
import { GUIDE_NAV } from '@/lib/site-nav';

export default function GuidePage() {
  return <NavHubPage titleKey="nav_guide" basePath="/guide" items={GUIDE_NAV} />;
}
