import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function DocsPage() {
  const t = useTranslations();

  const faqs = [
    {
      q: 'Is TeleChic a medical device?',
      a: 'No, TeleChic is NOT a medical device. It provides camera-based wellness and beauty guidance for informational purposes only. It does not diagnose, treat, or prevent any medical condition. Always consult qualified healthcare professionals for medical advice.',
    },
    {
      q: 'How does the skin analysis work?',
      a: 'TeleChic uses computer vision algorithms to analyze your selfies for various skin characteristics like tone, texture, redness, pores, and spots. The analysis is non-medical and provides general beauty guidance.',
    },
    {
      q: 'Is my data private and secure?',
      a: 'Yes. We are PDPL-compliant and take your privacy seriously. Photos are processed securely and are not stored permanently without your explicit consent. See our Privacy Policy for details.',
    },
    {
      q: 'What is the 30-day progress feature?',
      a: 'The 30-day progress feature helps you track changes in your skin over time by taking photos every 3 days (10 total). The app auto-aligns your photos and generates a comprehensive PDF report with charts.',
    },
    {
      q: 'How does the ingredient scanner work?',
      a: 'You can scan product barcodes or upload photos of ingredient labels. TeleChic matches ingredients against INCI standards and your personal No-List, flagging potential allergens or irritants.',
    },
  ];

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('docs.title')}
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            {t('docs.subtitle')}
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
            <Input
              placeholder={t('docs.searchPlaceholder')}
              className="ps-10"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-start">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/70">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold mb-2">{t('docs.categories.gettingStarted')}</h3>
            <p className="text-sm text-foreground/70">
              Learn the basics of using TeleChic
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">{t('docs.categories.features')}</h3>
            <p className="text-sm text-foreground/70">
              Detailed guides for each feature
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">{t('docs.categories.privacy')}</h3>
            <p className="text-sm text-foreground/70">
              PDPL compliance and data protection
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">{t('docs.categories.troubleshooting')}</h3>
            <p className="text-sm text-foreground/70">
              Solutions to common issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
