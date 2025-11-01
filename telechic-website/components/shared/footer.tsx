'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ProgressRing } from './progress-ring';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  product: ['features', 'demo', 'scanner', 'reports', 'pricing'],
  company: ['blog', 'docs', 'contact'],
  legal: ['privacy', 'terms'],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <ProgressRing progress={3} size="sm" animate={false} />
              <span className="text-xl font-bold">{t('common.appName')}</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-4 max-w-sm">
              {t('footer.tagline')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.links.product')}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${locale}/${item}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.links.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${locale}/${item}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.links.legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${locale}/${item}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {t(`${item}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-sand-50 dark:bg-surface rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground/80 text-center">
              {t('footer.disclaimer')}
            </p>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-foreground/60">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
