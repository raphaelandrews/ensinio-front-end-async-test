'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import * as S from './styles';
import { HeaderI18n } from '@/types/i18n';
import useSolutionsStore from '@/hooks/use-solutions-menu';
import useLanguageStore from '@/hooks/use-language-menu';
import FormatLocaleFlag from '@/utils/format-locale-flag';

import PingAnimate from '@/animations/ping-animate';
import ZoomAnimate from '@/animations/zoom-animate';
import FadeInAnimate from '@/animations/fadein-animate';

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
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const controls = useAnimation();

    const activeLocale = pathName.substring(1);

    const rotateSolutions = solutionsOpen ? 180 : 0;
    const rotateLanguage = languageOpen ? 180 : 0;

    const toggleMenu = () => {
        controls.start({ opacity: 0, x: 100 });
        setMenuOpen(!menuOpen);
    };

    return (
        <S.HeaderContainer>
            <S.HeaderWrapper>
                <FadeInAnimate initialX={-50} animateX={0} delay={1}>
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Ensinio Logo"
                        />
                    </Link>
                </FadeInAnimate>
                <S.MenuContainer menuOpen={menuOpen}>
                    <FadeInAnimate initialX={50} animateX={0} delay={1}>
                        <AnimatePresence>
                            {solutionsOpen && (
                                <SolutionsMenu
                                    headerInt={headerInt.headerInt}
                                />
                            )}
                        </AnimatePresence>
                        <nav>
                            <S.NavList>
                                <S.NavItem
                                    onMouseEnter={() => setSolutionsOpen(true)}
                                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                                >
                                    <div className="solutions__menu">
                                        {headerInt.headerInt.navbar.solucoes}

                                        <motion.div
                                            animate={{ rotate: rotateSolutions }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image
                                                src={ChevronsDown}
                                                alt="Chevrons Down"
                                            />
                                        </motion.div>
                                    </div>
                                </S.NavItem>
                                <S.NavItem>
                                    <PingAnimate>
                                        <Link href='https://ndrws.dev' target='_blank'>
                                            {headerInt.headerInt.navbar.preco}
                                        </Link>
                                    </PingAnimate>
                                </S.NavItem>
                                <S.NavItem>
                                    <PingAnimate>
                                        <Link href='https://ndrws.dev' target='_blank'>
                                            {headerInt.headerInt.navbar.academy}
                                        </Link>
                                    </PingAnimate>
                                </S.NavItem>
                                <S.NavItem>
                                    <PingAnimate>
                                        <Link href='https://ndrws.dev' target='_blank'>
                                            {headerInt.headerInt.navbar.blog}
                                        </Link>
                                    </PingAnimate>
                                </S.NavItem>
                                <S.NavItem>
                                    <PingAnimate>
                                        <Link href='https://ndrws.dev' target='_blank'>
                                            {headerInt.headerInt.navbar.contato}
                                        </Link>
                                    </PingAnimate>
                                </S.NavItem>
                            </S.NavList>
                        </nav>
                    </FadeInAnimate>


                    <Separator
                        width="2px"
                        height="1.5rem"
                        backgroundColor="hsla(181, 82%, 78%, .25)"
                        className='header__separator'
                    />

                    <FadeInAnimate initialX={-50} animateX={0} delay={2}>
                        <S.HeaderButtons>
                            <ZoomAnimate>
                                <Button>
                                    <Image
                                        src={PersonIcon}
                                        alt="Person Icon"
                                    />
                                    {headerInt.headerInt.navbar.entrar}
                                </Button>
                            </ZoomAnimate>
                            <ZoomAnimate>
                                <OutlineButton>
                                    {headerInt.headerInt.navbar.comecar}
                                </OutlineButton>
                            </ZoomAnimate>
                            <Button
                                onMouseEnter={() => setLanguageOpen(true)}
                                onClick={() => setLanguageOpen(!languageOpen)}>
                                {FormatLocaleFlag(activeLocale)}
                                {activeLocale.toUpperCase()}
                                <motion.div
                                    animate={{ rotate: rotateLanguage }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Image
                                        src={ChevronsDown}
                                        alt="Chevrons Down"
                                    />
                                </motion.div>
                                <AnimatePresence>
                                    {languageOpen && (
                                        <LanguageMenu />
                                    )}
                                </AnimatePresence>
                            </Button>
                        </S.HeaderButtons>
                    </FadeInAnimate>
                </S.MenuContainer>

                <FadeInAnimate initialX={50} animateX={0} delay={1}>
                    <S.HamburgerMenu onClick={toggleMenu}>
                        <div />
                        <div />
                        <div />
                    </S.HamburgerMenu>
                </FadeInAnimate>
            </S.HeaderWrapper>
        </S.HeaderContainer >
    );
};

export default Header;