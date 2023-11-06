import type { Metadata } from 'next';

import { getFeatureItem } from '@/actions/get-feautres-items/get-features-items';
import { siteConfig } from "@/config/site";
import { Locale, i18n } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

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
                url: `https://raw.githubusercontent.com/raphaelandrews/ensinio-frontend-challenge/main/public/og.webp`,
                width: 1128,
                height: 592,
            },
        ],
    },
}

export default async function Home({ params }: { params: { lang: Locale } }) {
    const featuresData = await getFeatureItem();
    const { header } = await getDictionary(params.lang);
    const { hero } = await getDictionary(params.lang);
    const { features } = await getDictionary(params.lang);

    return (
        <>
            <Header headerInt={header} />
            <main>
                <Hero heroInt={hero} />
                <Features
                    lang={params.lang}
                    featuresInt={features}
                    data={featuresData}
                />
            </main>
        </>
    )
}