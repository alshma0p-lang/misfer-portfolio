import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import { ComplianceRibbon } from './ComplianceRibbon';

export function SecuritySection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="py-16" aria-labelledby="security-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="security-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.security.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-neutral-700">{copy.security.copy}</p>
        <div className="mt-8">
          <ComplianceRibbon items={copy.security.badges} />
        </div>
      </div>
    </section>
  );
}
