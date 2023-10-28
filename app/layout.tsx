import type { Metadata } from 'next';

import Providers from '@/app/providers';
import GlobalStyles from '@/styles/global-styles';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
