import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import Link from 'next/link';

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-900 py-8 text-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm md:flex-row md:justify-between md:text-left">
        <p>{copy.footer.copy}</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">
            {copy.footer.privacy}
          </Link>
          <Link href="#" className="hover:text-white">
            {copy.footer.terms}
          </Link>
          <Link href="#" className="hover:text-white">
            {copy.footer.download}
          </Link>
        </div>
      </div>
    </footer>
  );
}
