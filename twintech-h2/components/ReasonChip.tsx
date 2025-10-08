'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export type ReasonChipProps = {
  label: string;
  action: string;
  severity: 'normal' | 'warning' | 'critical';
  locale: 'en' | 'ar';
  onWorkOrder?: () => void;
};

const severityClasses = {
  normal: 'bg-green-500 hover:bg-green-600 text-white',
  warning: 'bg-amber-400 hover:bg-amber-500 text-neutral-900',
  critical: 'bg-red-500 hover:bg-red-600 text-white',
};

export function ReasonChip({ label, action, severity, locale, onWorkOrder }: ReasonChipProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setExpanded((prev) => !prev)}
      className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${severityClasses[severity]}`}
    >
      <span aria-hidden>{severity === 'critical' ? '⚠️' : severity === 'warning' ? '⚡' : '⚙️'}</span>
      <span>{label}</span>
      {expanded && (
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          className="flex items-center gap-2 text-xs"
        >
          <span aria-hidden>→</span>
          <span>{action}</span>
          <span
            role="button"
            tabIndex={0}
            onClick={(event) => {
              event.stopPropagation();
              onWorkOrder?.();
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onWorkOrder?.();
              }
            }}
            className="rounded-md bg-white/90 px-2 py-1 text-neutral-900 shadow"
          >
            {locale === 'ar' ? 'إنشاء أمر عمل' : 'Create WO'}
          </span>
        </motion.span>
      )}
    </motion.button>
  );
}
