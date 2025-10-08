import Link from 'next/link';
import { LanguageToggle } from './LanguageToggle';
import type { Locale } from '@/lib/demoData';
import { getCopy } from '@/lib/copy';

export function Navbar({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  const links = [
    { href: locale === 'ar' ? '/ar' : '/', label: copy.nav.home },
    { href: locale === 'ar' ? '/ar/solution' : '/solution', label: copy.nav.solution },
    { href: locale === 'ar' ? '/ar/demo' : '/demo', label: copy.nav.demo },
    { href: locale === 'ar' ? '/ar/pilot' : '/pilot', label: copy.nav.pilot },
    { href: locale === 'ar' ? '/ar/security' : '/security', label: copy.nav.security },
    { href: locale === 'ar' ? '/ar/resources' : '/resources', label: copy.nav.resources },
    { href: locale === 'ar' ? '/ar/contact' : '/contact', label: copy.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={locale === 'ar' ? '/ar' : '/'} className="text-xl font-bold text-primary-700">
          TwinTech-H₂
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-neutral-700 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary-700">
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageToggle locale={locale} />
      </div>
    </header>
  );
}
