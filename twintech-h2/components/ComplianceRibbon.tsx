'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  shield: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-primary-600" aria-hidden>
      <path d="M16 4 26 8v9c0 7-4.2 12.7-10 15-5.8-2.3-10-8-10-15V8l10-4Z" fill="#EBF5FF" stroke="currentColor" strokeWidth="2" />
      <path d="m11 17 3.8 3.8L21 14" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cable: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-primary-600" aria-hidden>
      <path d="M6 10h20v12H6z" fill="#EBF5FF" stroke="currentColor" strokeWidth="2" />
      <path d="M10 16h12" stroke="#3399FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-primary-600" aria-hidden>
      <circle cx="16" cy="16" r="12" fill="#EBF5FF" stroke="currentColor" strokeWidth="2" />
      <path d="M4 16h24M16 4c4 4 4 24 0 24-4-4-4-24 0-24Z" stroke="#3399FF" strokeWidth="2" fill="none" />
    </svg>
  ),
};

export function ComplianceRibbon({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-2xl border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700"
        >
          {index === 0 ? icons.shield : index === 1 ? icons.cable : icons.globe}
          {item}
        </motion.span>
      ))}
    </div>
  );
}
