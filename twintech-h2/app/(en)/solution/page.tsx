import { Navbar } from '@/components/Navbar';
import { SolutionSection } from '@/components/SolutionSection';
import { PilotSection } from '@/components/PilotSection';
import { Footer } from '@/components/Footer';

export default function SolutionPage() {
  const locale = 'en' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <SolutionSection locale={locale} />
      <PilotSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
