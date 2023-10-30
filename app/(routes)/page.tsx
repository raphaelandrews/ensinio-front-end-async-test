import type { Metadata } from 'next';

import { siteConfig } from "@/config/site";
import { getFeatureItem } from '@/actions/get-features-items';

import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Features from '@/components/features/features';

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

export default async function Home() {
    const featuresData = await getFeatureItem();

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features data={featuresData} />
            </main>
        </>
    )
}