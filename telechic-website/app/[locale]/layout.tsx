import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ConsentBanner } from '@/components/shared/consent-banner';
import { Toaster } from '@/components/ui/toaster';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <ConsentBanner />
      <Toaster />
    </>
  );
}
