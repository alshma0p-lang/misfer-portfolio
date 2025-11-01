import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations();

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{t('terms.title')}</h1>
        <p className="text-foreground/70 mb-8">
          {t('terms.lastUpdated', { date: 'January 1, 2025' })}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>{t('terms.intro')}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using TeleChic, you agree to be bound by these Terms of
            Service and all applicable laws and regulations.
          </p>

          <h2>2. Service Description</h2>
          <p>
            TeleChic provides camera-based beauty and wellness guidance. Our service is
            NOT a medical device and does not provide medical diagnosis, treatment, or
            advice.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and
            for all activities that occur under your account.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            TeleChic provides wellness and beauty guidance based on images only. It is not
            a medical device and should not be used for diagnosis or treatment of any
            medical condition. Always consult with qualified healthcare professionals for
            medical advice.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            TeleChic and its affiliates shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use of the
            service.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the
            service after changes constitutes acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
}
