import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { localeDirections } from '@/lib/i18n/config';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TeleChic - Camera-First Beauty App',
    template: '%s | TeleChic',
  },
  description:
    'Camera-based, non-medical beauty guidance. Scan ingredients, spot risks, track progress.',
  keywords: [
    'beauty',
    'skin analysis',
    'hair analysis',
    'ingredient scanner',
    'AR try-on',
    'beauty app',
    'TeleChic',
  ],
  authors: [{ name: 'TeleChic' }],
  creator: 'TeleChic',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    url: 'https://telechic.app',
    title: 'TeleChic - Camera-First Beauty App',
    description: 'Camera-based, non-medical beauty guidance',
    siteName: 'TeleChic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleChic - Camera-First Beauty App',
    description: 'Camera-based, non-medical beauty guidance',
    creator: '@telechic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const direction = localeDirections[locale as keyof typeof localeDirections] || 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
