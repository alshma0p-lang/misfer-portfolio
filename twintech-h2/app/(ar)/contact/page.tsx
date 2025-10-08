import { Navbar } from '@/components/Navbar';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const locale = 'ar' as const;
  return (
    <main>
      <Navbar locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
