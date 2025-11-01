import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const t = useTranslations();

  const plans = [
    {
      key: 'free',
      features: [0, 1, 2, 3],
    },
    {
      key: 'pro',
      features: [0, 1, 2, 3, 4, 5],
      popular: true,
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-foreground/70">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.key}
              className={plan.popular ? 'border-primary border-2' : ''}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-lg">
                  {t('pricing.pro.popular')}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t(`pricing.${plan.key}.title`)}
                </CardTitle>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-bold">
                    {t(`pricing.${plan.key}.price`)}
                  </span>
                  <span className="text-foreground/60">
                    {t(`pricing.${plan.key}.currency`)}
                  </span>
                  <span className="text-sm text-foreground/60">
                    / {t(`pricing.${plan.key}.period`)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">
                        {t(`pricing.${plan.key}.features.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {t(`pricing.${plan.key}.cta`)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
