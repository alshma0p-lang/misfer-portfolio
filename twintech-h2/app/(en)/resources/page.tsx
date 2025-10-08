import { Navbar } from '@/components/Navbar';
import { ResourcesSection } from '@/components/ResourcesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function ResourcesPage() {
  const locale = 'en' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <ResourcesSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
