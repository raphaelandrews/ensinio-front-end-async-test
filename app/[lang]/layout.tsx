import type { Metadata } from 'next';

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
};

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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
