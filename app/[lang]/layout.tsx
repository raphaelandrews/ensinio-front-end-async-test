import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { Locale, i18n } from '@/i18n.config';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL('https://ensinio-frontend-challenge-ndrws.vercel.app'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Ensinio',
  ],
  authors: [
    {
      name: 'Raphael Andrews',
      url: 'https://ndrws.dev'
    }
  ],
  creator: 'Raphael Andrews',
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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

const font = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
