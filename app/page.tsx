"use client";

import Link from "next/link";
import { useLocale } from "../components/LocaleProvider";
import ventures from "../content/ventures.json";

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

const LocaleToggle = () => {
  const { locale, toggleLocale } = useLocale();
  return (
    <button
      onClick={toggleLocale}
      className="rounded-md border border-border px-4 py-2 text-sm transition hover:bg-card"
      aria-label="Toggle locale"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
};

const VenturesPage = () => {
  const { locale } = useLocale();
  const items = ventures as unknown as Venture[];
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400">Portfolio</p>
          <h1 className="text-4xl font-bold">{locale === "en" ? "Ventures" : "المشاريع"}</h1>
          <p className="text-slate-300 mt-2 max-w-2xl">
            {locale === "en"
              ? "A curated collection of ventures with concise summaries, focus metrics, and target audiences."
              : "مجموعة مختارة من المشاريع مع ملخصات موجزة، ومؤشرات التركيز، والجمهور المستهدف."}
          </p>
        </div>
        <LocaleToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((v) => (
          <div key={v.name} className="card p-6 flex flex-col gap-3">
            <div>
              <h3 className="text-2xl font-semibold">{v.name}</h3>
              <p className="text-sm text-slate-300">{v.role}</p>
            </div>
            <p className="leading-relaxed text-slate-200 flex-1">
              {locale === "en" ? v.summary_en : v.summary_ar}
            </p>

            {Object.keys(v.metrics || {}).length > 0 && (
              <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-200">
                {Object.entries(v.metrics).map(([k, val]) => (
                  <li key={k} className="flex justify-between rounded border border-border px-3 py-2">
                    <span className="font-medium capitalize">{k.replace(/([A-Z])/g, " $1")}</span>
                    <span className="text-slate-100">{val}</span>
                  </li>
                ))}
              </ul>
            )}

            {v.targets && v.targets.length > 0 && (
              <p className="text-sm text-slate-200">
                <span className="font-medium mr-1">
                  {locale === "en" ? "Targets:" : "العملاء:"}
                </span>
                {v.targets.join(", ")}
              </p>
            )}

            {v.cta && (
              <Link
                href={v.cta.link}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-white transition hover:opacity-90"
              >
                {locale === "en" ? v.cta.label_en : v.cta.label_ar}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenturesPage;
