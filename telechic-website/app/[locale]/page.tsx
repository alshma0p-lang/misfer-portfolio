import { useTranslations } from 'next-intl';
import { Hero } from '@/components/shared/hero';
import { FeatureCard } from '@/components/shared/feature-card';
import { ProgressRing } from '@/components/shared/progress-ring';
import { Camera, Scan, TrendingUp, Shield } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: Camera,
      title: t('features.skinAnalysis.title'),
      description: t('features.skinAnalysis.subtitle'),
      points: [
        t('features.skinAnalysis.points.0'),
        t('features.skinAnalysis.points.1'),
        t('features.skinAnalysis.points.2'),
      ],
    },
    {
      icon: Scan,
      title: t('features.scanner.title'),
      description: t('features.scanner.subtitle'),
      points: [
        t('features.scanner.points.0'),
        t('features.scanner.points.1'),
        t('features.scanner.points.2'),
      ],
    },
    {
      icon: TrendingUp,
      title: t('features.progress.title'),
      description: t('features.progress.subtitle'),
      points: [
        t('features.progress.points.0'),
        t('features.progress.points.1'),
        t('features.progress.points.2'),
      ],
    },
  ];

  return (
    <>
      <Hero />

      {/* Value Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Progress Strip */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sand-50 to-brand-green-50 dark:from-surface dark:to-brand-green-900/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('features.progress.subtitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              {t('features.progress.points.0')}
            </p>

            {/* Progress visualization */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2"
                >
                  <ProgressRing progress={index + 1} size="sm" animate={false} />
                  <span className="text-sm text-foreground/60">
                    {t('demo.steps.progress.day')} {(index + 1) * 3}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Band */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="container">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-brand-green-500" />
              <span className="text-sm font-medium">PDPL Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-brand-green-500" />
              <span className="text-sm font-medium">Non-Medical Device</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-brand-green-500" />
              <span className="text-sm font-medium">Privacy First</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
