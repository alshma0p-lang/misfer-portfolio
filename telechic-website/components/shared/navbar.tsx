'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/lib/stores/theme-store';
import { cn } from '@/lib/utils';
import { ProgressRing } from './progress-ring';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'features', href: '/features' },
  { name: 'demo', href: '/demo' },
  { name: 'scanner', href: '/scanner' },
  { name: 'reports', href: '/reports' },
  { name: 'pricing', href: '/pricing' },
  { name: 'blog', href: '/blog' },
  { name: 'docs', href: '/docs' },
  { name: 'contact', href: '/contact' },
];

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <ProgressRing progress={0} size="sm" animate={false} />
            <span className="text-xl font-bold">{t('common.appName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale}${item.href}`}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-foreground/70'
                  )}
                >
                  {t(`nav.${item.name}`)}
                </Link>
              ))}
            </div>

            {/* Theme & Language */}
            <div className="flex items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                aria-label={t('nav.language')}
              >
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-4">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-base font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground/70'
                    )}
                  >
                    {t(`nav.${item.name}`)}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="justify-start"
                >
                  <Globe className="h-5 w-5 me-2" />
                  {locale === 'ar' ? 'English' : 'العربية'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
