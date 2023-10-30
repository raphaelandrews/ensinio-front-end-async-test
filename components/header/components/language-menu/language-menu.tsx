'use client'

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as S from './styles';
import { i18n } from '@/i18n.config';

import CheckIcon from "@/public/assets/check-icon.svg";
import FormatLocaleFlag from "@/utils/format-locale-flag";

const LanguageMenu = () => {
    const pathName = usePathname();
    const activeLocale = pathName.substring(1);
    const redirectedPathName = (locale: string) => `/${locale}`;

    return (
        <S.LanguageMenuContainer>
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
                                        className="language__menu___item-icon"
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