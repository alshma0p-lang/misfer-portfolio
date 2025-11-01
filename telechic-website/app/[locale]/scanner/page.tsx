import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Scan } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ScannerPage() {
  const t = useTranslations();

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Scan className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('scanner.title')}
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              {t('scanner.subtitle')}
            </p>
            <Button asChild size="lg">
              <Link href="/demo">{t('demo.startDemo')}</Link>
            </Button>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              {t('features.scanner.title')}
            </h2>
            <ul className="space-y-3">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-green-500">✓</span>
                  <span>{t(`features.scanner.points.${i}`)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
