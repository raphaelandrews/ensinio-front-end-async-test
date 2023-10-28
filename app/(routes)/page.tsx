import type { Metadata } from 'next';

import { siteConfig } from "@/config/site";

import Header from '@/components/header/header';

export const metadata: Metadata = {
    title: "Home",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.ogImage}`,
                width: 1920,
                height: 1080,
            },
        ],
    },
}

export default function Home() {
    return (
        <>
            <Header />
            <main>
                Hiii
            </main>
        </>
    )
}