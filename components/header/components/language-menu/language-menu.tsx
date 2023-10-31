'use client'

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import * as S from './styles';
import { i18n } from '@/i18n.config';
import useLanguageStore from "@/hooks/use-language-menu";
import FormatLocaleFlag from "@/utils/format-locale-flag";

import CheckIcon from "@/public/assets/check-icon.svg";

const LanguageMenu = () => {
    const { setLanguageOpen } = useLanguageStore();

    const pathName = usePathname();
    const activeLocale = pathName.substring(1);
    const redirectedPathName = (locale: string) => `/${locale}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }} 
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="language__animate"
        >
            <S.LanguageMenuContainer onMouseLeave={() => setLanguageOpen(false)}>
                <S.LanguageMenuList>
                    {i18n.locales.map(lang => {
                        const isActiveLocale = activeLocale === lang;
                        return (
                            <S.LanguageMenuItem
                                key={lang}
                                className={isActiveLocale ? 'active' : ''}
                            >
                                <Link href={redirectedPathName(lang)}>
                                    {FormatLocaleFlag(lang)}
                                    {lang}
                                    {isActiveLocale &&
                                        <Image
                                            src={CheckIcon}
                                            alt="Check Icon"
                                        />
                                    }
                                </Link>
                            </S.LanguageMenuItem>
                        )
                    })}
                </S.LanguageMenuList>
            </S.LanguageMenuContainer>
        </motion.div>
    );
}

export default LanguageMenu;