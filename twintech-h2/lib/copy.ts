import en from '@/i18n/en.json';
import ar from '@/i18n/ar.json';
import type { Locale } from './demoData';

type Copy = typeof en;

const map: Record<Locale, Copy> = {
  en,
  ar: ar as Copy,
};

export function getCopy(locale: Locale = 'en'): Copy {
  return map[locale];
}
