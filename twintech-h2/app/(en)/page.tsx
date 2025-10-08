import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { KpiSection } from '@/components/KpiSection';
import { DemoSection } from '@/components/DemoSection';
import { SecuritySection } from '@/components/SecuritySection';
import { PilotSection } from '@/components/PilotSection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const locale = 'en' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <ProblemSection locale={locale} />
      <SolutionSection locale={locale} />
      <KpiSection locale={locale} />
      <DemoSection locale={locale} />
      <SecuritySection locale={locale} />
      <PilotSection locale={locale} />
      <ResourcesSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
