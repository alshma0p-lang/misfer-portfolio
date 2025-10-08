import { Navbar } from '@/components/Navbar';
import { DemoSection } from '@/components/DemoSection';
import { SecuritySection } from '@/components/SecuritySection';
import { Footer } from '@/components/Footer';

export default function DemoPage() {
  const locale = 'en' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <DemoSection locale={locale} />
      <SecuritySection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
