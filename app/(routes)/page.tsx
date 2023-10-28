import type { Metadata } from 'next';

import { siteConfig } from "@/config/site";

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
                url: `${siteConfig.url}/og.webp`,
                width: 1920,
                height: 1080,
            },
        ],
    },
}

export default function Home() {
    return (
        <main>
            Hiii
        </main>
    )
}