import { Navbar } from '@/components/Navbar';
import { SecuritySection } from '@/components/SecuritySection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { Footer } from '@/components/Footer';

export default function SecurityPage() {
  const locale = 'en' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <SecuritySection locale={locale} />
      <ResourcesSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
