import { Navbar } from '@/components/Navbar';
import { PilotSection } from '@/components/PilotSection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function PilotPage() {
  const locale = 'en' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <PilotSection locale={locale} />
      <ResourcesSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
