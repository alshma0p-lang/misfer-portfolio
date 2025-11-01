import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReportsPage() {
  const t = useTranslations();

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('reports.title')}
            </h1>
            <p className="text-xl text-foreground/70">
              {t('reports.subtitle')}
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{t('reports.description')}</h2>
            <ul className="space-y-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-green-500 mt-1">✓</span>
                  <span>{t(`reports.includes.${i}`)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="bg-sand-50 dark:bg-surface rounded-lg p-6 text-center">
            <p className="text-sm text-foreground/80 mb-4">
              {t('reports.disclaimer')}
            </p>
            <Button>
              <Download className="h-4 w-4 me-2" />
              {t('reports.downloadSample')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
