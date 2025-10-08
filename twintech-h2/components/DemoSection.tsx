import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import { ChartSvg } from './ChartSvg';
import { ReasonChip } from './ReasonChip';

export function DemoSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const handleWorkOrder = () => {
    if (typeof window !== 'undefined') {
      const message = locale === 'ar'
        ? 'تم إنشاء أمر عمل تجريبي—راجع لوحة العمل الداخلية.'
        : 'Demo work order created—refer to internal work board.';
      alert(message);
    }
  };

  return (
    <section className="bg-neutral-100 py-16" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="demo-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.demo.title}
        </h2>
        <div className="mt-10 space-y-8">
          {copy.demo.charts.map((chart, index) => (
            <div key={chart.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary-700">{chart.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{chart.caption}</p>
              <div className="mt-4">
                <ChartSvg type={index === 0 ? 'cell' : index === 1 ? 'soe' : 'fft'} locale={locale} />
              </div>
            </div>
          ))}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary-700">{copy.demo.reason.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2" id="chart-tooltip" />
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.demo.reason.items.map((item, index) => (
                <ReasonChip
                  key={item}
                  label={item}
                  action={locale === 'ar' ? 'افتح أمر العمل التجريبي' : 'Open pilot work order'}
                  locale={locale}
                  severity={index === 0 ? 'critical' : index === 1 ? 'warning' : 'normal'}
                  onWorkOrder={handleWorkOrder}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
