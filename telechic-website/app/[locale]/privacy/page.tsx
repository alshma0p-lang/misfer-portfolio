import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{t('privacy.title')}</h1>
        <p className="text-foreground/70 mb-8">
          {t('privacy.lastUpdated', { date: 'January 1, 2025' })}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>{t('privacy.intro')}</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including when you create
            an account, use our services, or contact us for support.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our
            services, to communicate with you, and to comply with legal obligations.
          </p>

          <h2>3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect
            your personal data in accordance with PDPL (Personal Data Protection Law).
          </p>

          <h2>4. Your Rights</h2>
          <p>
            Under PDPL, you have the right to access, correct, delete, or transfer your
            personal data. You may also object to or restrict certain processing of your
            data.
          </p>

          <h2>5. Image Data</h2>
          <p>
            Photos you take with TeleChic are processed on-device or temporarily in the
            cloud for analysis only. We do not store or use your images for training or
            other purposes without explicit consent.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            For any questions about this privacy policy or to exercise your rights,
            please contact us at privacy@telechic.app
          </p>
        </div>
      </div>
    </div>
  );
}
