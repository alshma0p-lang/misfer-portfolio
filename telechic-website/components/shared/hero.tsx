'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProgressRing } from './progress-ring';
import { Camera, Play } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-50 to-sand-50 dark:from-brand-green-900/10 dark:to-surface -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              {t('hero.tagline')}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="gap-2">
                <Link href={`/${locale}/demo`}>
                  <Camera className="h-5 w-5" />
                  {t('hero.primaryCTA')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href={`/${locale}/demo`}>
                  <Play className="h-5 w-5" />
                  {t('hero.secondaryCTA')}
                </Link>
              </Button>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium text-foreground/70">
                {t('hero.downloadOn')}:
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="h-10 px-4 flex items-center justify-center bg-ink text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="h-10 px-4 flex items-center justify-center bg-ink text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Google Play
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Large progress ring with animation */}
            <div className="relative">
              <ProgressRing progress={7} size="lg" animate={true} />
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-green-400 to-brand-green-600 flex items-center justify-center shadow-elevated">
                  <Camera className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 start-10 sparkle"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-12 h-12 rounded-full bg-brand-red-100 dark:bg-brand-red-900/30 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
