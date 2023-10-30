'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as S from './styles';
import { HeaderI18n } from '@/types/i18n';
import useSolutionsStore from '@/hooks/use-solutions-menu';
import useLanguageStore from '@/hooks/use-language-menu';

import Logo from "@/public/assets/logo.svg";
import ChevronsDown from "@/public/assets/chevrons-down.svg";
import PersonIcon from "@/public/assets/person-icon.svg";

import Separator from '@/components/separator/separator';
import LanguageMenu from './components/language-menu/language-menu';
import { Button, OutlineButton } from '@/components/button/button';
import SolutionsMenu from './components/solutions-menu/solutions-menu';

interface HeaderProps {
    headerInt: HeaderI18n;
}

const Header = (headerInt: HeaderProps) => {
    const { solutionsOpen, setSolutionsOpen } = useSolutionsStore();
    const { languageOpen, setLanguageOpen } = useLanguageStore();
    const [languageVisible, setLanguageVisible] = useState(true);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const pathName = usePathname();

    const activeLocale = pathName.substring(1);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <S.HeaderContainer>
            <S.HeaderWrapper>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Ensinio Logo"
                    />
                </Link>

                <S.MenuContainer visible={menuVisible}>
                    <nav>
                        <S.NavList>
                            <S.NavItem
                                onMouseEnter={() => setSolutionsOpen(true)}
                                onClick={() => setSolutionsOpen(!solutionsOpen)}
                            >
                                {headerInt.headerInt.navbar.solucoes}
                                <Image
                                    src={ChevronsDown}
                                    alt="Chevrons Down"
                                />
                                {solutionsOpen && (
                                    <SolutionsMenu
                                        headerInt={headerInt.headerInt}
                                    />
                                )}
                            </S.NavItem>
                            <S.NavItem>
                                {headerInt.headerInt.navbar.preco}
                            </S.NavItem>
                            <S.NavItem>
                                {headerInt.headerInt.navbar.academy}
                            </S.NavItem>
                            <S.NavItem>
                                {headerInt.headerInt.navbar.blog}
                            </S.NavItem>
                            <S.NavItem>
                                {headerInt.headerInt.navbar.contato}
                            </S.NavItem>
                        </S.NavList>
                    </nav>

                    <Separator
                        width="2px"
                        height="1.5rem"
                        backgroundColor="hsla(181, 82%, 78%, .25)"
                        className='header__separator'
                    />

                    <S.HeaderButtons>
                        <Button>
                            <Image
                                src={PersonIcon}
                                alt="Person Icon"
                            />
                            {headerInt.headerInt.navbar.entrar}
                        </Button>
                        <OutlineButton>
                            {headerInt.headerInt.navbar.comecar}
                        </OutlineButton>
                        <Button
                            onMouseEnter={() => setLanguageOpen(true)}
                            onClick={() => setLanguageOpen(!languageOpen)}>
                            {activeLocale.toUpperCase()}
                            <Image
                                src={ChevronsDown}
                                alt="Chevrons Down"
                            />
                            {languageOpen && (
                                <LanguageMenu />
                            )}
                        </Button>
                    </S.HeaderButtons>
                </S.MenuContainer>

                <S.HamburgerMenu onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </S.HamburgerMenu>
            </S.HeaderWrapper>
        </S.HeaderContainer>
    );
};

export default Header;