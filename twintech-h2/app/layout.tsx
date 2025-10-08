import type { Metadata } from 'next';
import { Inter, Noto_Kufi_Arabic } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoKufi = Noto_Kufi_Arabic({ subsets: ['arabic'], variable: '--font-noto-kufi' });

export const metadata: Metadata = {
  title: 'TwinTech-H₂ - Digital Twin Prototype',
  description: 'Predictive maintenance digital twin for ACWA Power electrolyzers with bilingual UX.',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params?: { locale?: string };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = params?.locale === 'ar' ? 'ar' : 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${notoKufi.variable}`}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
