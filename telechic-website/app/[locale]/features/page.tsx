import { useTranslations } from 'next-intl';
import { FeatureCard } from '@/components/shared/feature-card';
import { Camera, Scan, Sparkles, Smile, TrendingUp, Image } from 'lucide-react';

export default function FeaturesPage() {
  const t = useTranslations();

  const features = [
    {
      icon: Camera,
      key: 'skinAnalysis',
    },
    {
      icon: Camera,
      key: 'hairAnalysis',
    },
    {
      icon: Image,
      key: 'nailsVTO',
    },
    {
      icon: Smile,
      key: 'smileAnalysis',
    },
    {
      icon: Sparkles,
      key: 'tryOn',
    },
    {
      icon: Scan,
      key: 'scanner',
    },
    {
      icon: TrendingUp,
      key: 'progress',
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('features.title')}
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.key}
              icon={feature.icon}
              title={t(`features.${feature.key}.title`)}
              description={t(`features.${feature.key}.subtitle`)}
              points={[
                t(`features.${feature.key}.points.0`),
                t(`features.${feature.key}.points.1`),
                t(`features.${feature.key}.points.2`),
              ]}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('features.howItWorks.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">
                  {t(`features.howItWorks.steps.${i}.title`)}
                </h3>
                <p className="text-sm text-foreground/70">
                  {t(`features.howItWorks.steps.${i}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
