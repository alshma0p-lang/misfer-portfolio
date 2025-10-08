import { motion } from 'framer-motion';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import Link from 'next/link';

export function Hero({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const pilotHref = locale === 'ar' ? '/ar/pilot' : '/pilot';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight md:text-5xl"
        >
          {copy.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-lg text-white/90"
        >
          {copy.hero.subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Link
            href={pilotHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-700"
          >
            {copy.hero.cta}
          </Link>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 end-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent)] md:block" aria-hidden />
    </section>
  );
}
