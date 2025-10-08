import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import { ModuleCard } from './ModuleCard';

export function SolutionSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="bg-neutral-100 py-16" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="solution-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.solution.title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {copy.solution.modules.map((module, index) => (
            <ModuleCard
              key={module.name}
              name={module.name}
              pain={module.pain}
              capability={module.capability}
              benefit={module.benefit}
              kpi={module.kpi}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
