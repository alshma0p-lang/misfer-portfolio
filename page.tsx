"use client";

import ventures from '../../content/ventures.json';
import { useLocale } from '../../components/LocaleProvider';
import Link from 'next/link';

type Venture = {
  name: string;
  role: string;
  summary_en: string;
  summary_ar: string;
  metrics: Record<string, string>;
  targets: string[];
  cta: {
    label_en: string;
    label_ar: string;
    link: string;
  } | null;
};

const VenturesPage = () => {
  const { locale } = useLocale();
  const items = ventures as unknown as Venture[];
  return (
    <div className="container px-4 py-8 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        {locale === 'en' ? 'Ventures' : 'المشاريع'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((v) => (
          <div key={v.name} className="bg-card border border-border p-4 rounded-lg shadow flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{v.name}</h3>
            <p className="text-sm mb-1 opacity-80">{v.role}</p>
            <p className="mt-2 flex-1">
              {locale === 'en' ? v.summary_en : v.summary_ar}
            </p>
            {Object.keys(v.metrics || {}).length > 0 && (
              <ul className="mt-2 text-sm space-y-1">
                {Object.entries(v.metrics).map(([k, val]) => (
                  <li key={k} className="flex justify-between">
                    <span className="font-medium capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            )}
            {v.targets && v.targets.length > 0 && (
              <p className="mt-2 text-sm">
                <span className="font-medium mr-1">{locale === 'en' ? 'Targets:' : 'العملاء:'}</span>
                {v.targets.join(', ')}
              </p>
            )}
            {v.cta && (
              <Link href={v.cta.link} className="mt-4 inline-block bg-brand text-white px-4 py-2 rounded-md text-center">
                {locale === 'en' ? v.cta.label_en : v.cta.label_ar}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenturesPage;