'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressRing } from '@/components/shared/progress-ring';
import { ChevronLeft, ChevronRight, RotateCcw, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Import demo data
import skinData from '@/app/demo/data/skin.json';
import hairData from '@/app/demo/data/hair.json';
import ingredientsData from '@/app/demo/data/ingredients.json';

const steps = ['skin', 'hair', 'tryOn', 'scan', 'progress'];

export default function DemoPage() {
  const t = useTranslations();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setCurrentStep(currentStep + 1);
      }, 1500);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnalyzing(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href + '?autoplay=1');
    setCopied(true);
    toast({
      title: t('demo.linkCopied'),
      variant: 'success',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const renderMetric = (label: string, value: number, rating: string) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-sand-200 dark:bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <span className="text-xs text-foreground/60">{t(`metrics.${rating}`)}</span>
    </div>
  );

  const renderStepContent = () => {
    const stepKey = steps[currentStep];

    if (analyzing) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <ProgressRing progress={5} size="lg" animate={true} />
          <p className="mt-6 text-lg">{t(`demo.steps.${stepKey}.analyzing`)}</p>
        </motion.div>
      );
    }

    switch (stepKey) {
      case 'skin':
        return (
          <motion.div
            key="skin"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('features.skinAnalysis.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(skinData.analysis).map(([key, data]) => (
                    <div key={key}>{renderMetric(t(`metrics.${key}`), data.value, data.rating)}</div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {skinData.recommendations.map((rec, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-brand-green-500">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        );

      case 'hair':
        return (
          <motion.div
            key="hair"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>{t('features.hairAnalysis.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(hairData.analysis).map(([key, data]) => (
                  <div key={key}>{renderMetric(t(`metrics.${key}`), data.value, data.rating)}</div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        );

      case 'scan':
        return (
          <motion.div
            key="scan"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>{ingredientsData.productName}</CardTitle>
                <p className="text-sm text-foreground/60">Barcode: {ingredientsData.barcode}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ingredientsData.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-start justify-between p-3 bg-surface rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{ing.name}</div>
                        <div className="text-sm text-foreground/60">{ing.description}</div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ing.riskLevel === 'safe'
                            ? 'bg-brand-green-100 text-brand-green-800 dark:bg-brand-green-900/20 dark:text-brand-green-400'
                            : ing.riskLevel === 'caution'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                            : 'bg-brand-red-100 text-brand-red-800 dark:bg-brand-red-900/20 dark:text-brand-red-400'
                        }`}
                      >
                        {t(`scanner.${ing.riskLevel}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 'progress':
        return (
          <motion.div
            key="progress"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">{t('features.progress.title')}</h3>
              <p className="text-foreground/70">{t('features.progress.subtitle')}</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <ProgressRing progress={i + 1} size="sm" animate={false} />
                  <span className="text-xs text-foreground/60 mt-2">Day {(i + 1) * 3}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return <div>Try-On demo coming soon</div>;
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{t('demo.title')}</h1>
          <p className="text-xl text-foreground/70 mb-6">{t('demo.subtitle')}</p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 me-2" />
              {t('demo.resetDemo')}
            </Button>
            <Button variant="outline" onClick={handleCopyLink}>
              {copied ? <Check className="h-4 w-4 me-2" /> : <Copy className="h-4 w-4 me-2" />}
              {t('demo.copyLink')}
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((step, i) => (
            <button
              key={step}
              onClick={() => setCurrentStep(i)}
              className={`w-12 h-2 rounded-full transition-all ${
                i === currentStep
                  ? 'bg-primary w-16'
                  : i < currentStep
                  ? 'bg-primary/50'
                  : 'bg-sand-200 dark:bg-border'
              }`}
              aria-label={t(`demo.steps.${step}.title`)}
            />
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-8">
          <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 me-2" />
            {t('demo.previousStep')}
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? t('demo.finish') : t('demo.nextStep')}
            <ChevronRight className="h-4 w-4 ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
