import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';

export function PilotSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="bg-neutral-100 py-16" aria-labelledby="pilot-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="pilot-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.pilot.title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {copy.pilot.steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <span className="text-sm font-semibold text-primary-600">{step.title}</span>
              <p className="mt-3 text-sm text-neutral-700">{step.body}</p>
            </div>
          ))}
        </div>
        <aside className="mt-10 rounded-3xl border border-primary-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary-700">{copy.pilot.ask.title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {copy.pilot.ask.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-primary-600" aria-hidden>✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
