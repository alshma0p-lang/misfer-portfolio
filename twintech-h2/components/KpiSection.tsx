import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import { KpiBadge } from './KpiBadge';

export function KpiSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="py-16" aria-labelledby="kpi-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="kpi-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.kpi.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-neutral-700">{copy.kpi.copy}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {copy.kpi.badges.map((badge, index) => (
            <KpiBadge key={badge.label} value={badge.value} label={badge.label} emphasis={index === 2 ? 'accent' : index === 1 ? 'success' : 'primary'} />
          ))}
        </div>
      </div>
    </section>
  );
}
