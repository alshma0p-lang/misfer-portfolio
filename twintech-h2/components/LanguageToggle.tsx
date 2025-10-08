'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function LanguageToggle({ locale }: { locale: 'en' | 'ar' }) {
  const router = useRouter();
  const pathname = usePathname();

  const targetHref = useMemo(() => {
    if (locale === 'en') {
      return pathname.startsWith('/ar') ? pathname.replace('/ar', '') || '/' : `/ar${pathname === '/' ? '' : pathname}`;
    }
    return pathname.replace('/ar', '') || '/';
  }, [locale, pathname]);

  const label = locale === 'en' ? 'عربي' : 'English';

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => router.push(targetHref)}
      className="inline-flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700"
    >
      <span aria-hidden>🌐</span>
      {label}
    </motion.button>
  );
}
