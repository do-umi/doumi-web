import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full min-w-0">
      <Hero />
      <Partners />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
