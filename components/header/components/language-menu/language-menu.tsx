'use client'

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as S from './styles';
import { i18n } from '@/i18n.config';
import useLanguageStore from "@/hooks/use-language-menu";
import FormatLocaleFlag from "@/utils/format-locale-flag";

import CheckIcon from "@/public/assets/check-icon.svg";

const LanguageMenu = () => {
    const { languageOpen, setLanguageOpen } = useLanguageStore();
    const pathName = usePathname();
    const activeLocale = pathName.substring(1);
    const redirectedPathName = (locale: string) => `/${locale}`;

    return (
        <S.LanguageMenuContainer onMouseLeave={() => setLanguageOpen(false)}>
            <S.LanguageMenuList>
                {i18n.locales.map(lang => {
                    const isActiveLocale = activeLocale === lang;
                    return (
                        <S.LanguageMenuItem key={lang}>
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
    );
}
export default LanguageMenu;