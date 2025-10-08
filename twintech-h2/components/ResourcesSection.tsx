import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';

export function ResourcesSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="py-16" aria-labelledby="resources-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="resources-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.resources.title}
        </h2>
        <p className="mt-4 text-neutral-700">{copy.resources.deck}</p>
        <div className="mt-8 space-y-4">
          {copy.resources.faq.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer text-sm font-semibold text-primary-700">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
