'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type KpiBadgeProps = {
  value: string;
  label: string;
  emphasis?: 'primary' | 'success' | 'accent';
};

const palettes: Record<NonNullable<KpiBadgeProps['emphasis']>, string> = {
  primary: 'bg-primary-50 text-primary-700 border-primary-200',
  success: 'bg-green-50 text-green-700 border-green-200',
  accent: 'bg-rose-50 text-rose-700 border-rose-200',
};

export function KpiBadge({ value, label, emphasis = 'primary' }: KpiBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={clsx(
        'flex flex-col items-center gap-2 rounded-3xl border-2 px-8 py-6 text-center shadow-sm',
        palettes[emphasis],
      )}
    >
      <span className="text-4xl font-bold md:text-5xl">{value}</span>
      <span className="text-sm font-medium uppercase tracking-wide">{label}</span>
    </motion.div>
  );
}
