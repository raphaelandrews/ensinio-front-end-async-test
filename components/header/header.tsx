'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';
import { HeaderI18n } from '@/types/i18n';

import Logo from "@/public/assets/logo.svg";
import ChevronsDown from "@/public/assets/chevrons-down.svg";
import EadIcon from "@/public/assets/ead-icon.svg";
import CommunityIcon from "@/public/assets/community-icon.svg";
import GamificationIcon from "@/public/assets/gamification-icon.svg";
import AppIcon from "@/public/assets/app-icon.svg";
import PersonIcon from "@/public/assets/person-icon.svg";

import Separator from '@/components/separator/separator';
import LanguageMenu from './components/language-menu/language-menu';
import { Button, OutlineButton } from '@/components/button/button';

interface HeaderProps {
    headerInt: HeaderI18n;
}

const Header = (headerInt: HeaderProps) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [languageVisible, setLanguageVisible] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleLanguageMenu = () => {
        setLanguageVisible(!languageVisible);
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
                                onMouseEnter={() => setDropdownVisible(true)}
                                onMouseLeave={() => setDropdownVisible(false)}
                                onClick={() => setDropdownVisible(!dropdownVisible)}
                            >
                                 {headerInt.headerInt.navbar.solucoes}
                                <Image
                                    src={ChevronsDown}
                                    alt="Chevrons Down"
                                />
                                {dropdownVisible && (
                                    <S.DropdownContent>
                                        <>
                                        <h2>{headerInt.headerInt.submenu.titulo}</h2>
                                            <S.DropdownList>
                                                <S.DropdownItem>
                                                    <Image src={EadIcon} alt='Ead Icon' />
                                                    <div>
                                                    <h3>{headerInt.headerInt.submenu.escola}</h3>
                                                        <p>Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                </S.DropdownItem>
                                            </S.DropdownList>
                                            <S.DropdownItem>
                                                <Image src={CommunityIcon} alt='Ead Icon' />
                                                <div>
                                                <h3>{headerInt.headerInt.submenu.comunidade}</h3>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </S.DropdownItem>
                                            <S.DropdownItem>
                                                <Image src={GamificationIcon} alt='Ead Icon' />
                                                <div>
                                                <h3>{headerInt.headerInt.submenu.gamificacao}</h3>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </S.DropdownItem>
                                            <S.DropdownItem>
                                                <Image src={AppIcon} alt='Ead Icon' />
                                                <div>
                                                <h3>{headerInt.headerInt.submenu.aplicativo}</h3>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </S.DropdownItem>
                                        </>
                                    </S.DropdownContent>
                                )}
                            </S.NavItem>
                            <S.NavItem>{headerInt.headerInt.navbar.preco}</S.NavItem>
                            <S.NavItem>{headerInt.headerInt.navbar.academy}</S.NavItem>
                            <S.NavItem>{headerInt.headerInt.navbar.contato}</S.NavItem>
                            <S.NavItem>{headerInt.headerInt.navbar.preco}</S.NavItem>
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
                        <OutlineButton>{headerInt.headerInt.navbar.comecar}</OutlineButton>
                        <Button onClick={toggleLanguageMenu}>
                            PT
                            <Image
                                src={ChevronsDown}
                                alt="Chevrons Down"
                            />
                             {languageVisible && (
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