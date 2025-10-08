'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export type ModuleCardProps = {
  name: string;
  pain: string;
  capability: string;
  benefit: string;
  kpi: string;
  icon?: ReactNode;
  delay?: number;
};

export function ModuleCard({ name, pain, capability, benefit, kpi, icon, delay = 0 }: ModuleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true, margin: '-40px' }}
      className="flex h-full flex-col gap-3 rounded-3xl border border-primary-100 bg-white p-6 shadow"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
          {icon ?? <span className="text-lg" aria-hidden>⚙️</span>}
        </div>
        <h3 className="text-xl font-semibold text-primary-700">{name}</h3>
      </div>
      <p className="text-sm text-neutral-600">{pain}</p>
      <p className="text-neutral-700">{capability}</p>
      <p className="text-neutral-700 font-semibold">{benefit}</p>
      <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
        {kpi}
      </span>
    </motion.article>
  );
}
