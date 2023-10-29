'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

import Logo from "@/public/assets/logo.svg";
import ChevronsDown from "@/public/assets/chevrons-down.svg";
import EadIcon from "@/public/assets/ead-icon.svg";
import CommunityIcon from "@/public/assets/community-icon.svg";
import GamificationIcon from "@/public/assets/gamification-icon.svg";
import AppIcon from "@/public/assets/app-icon.svg";
import PersonIcon from "@/public/assets/person-icon.svg";

import { Button, OutlineButton } from '@/components/button/button';
import Separator from '../separator/separator';

const Header: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

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
                                onMouseEnter={() => setDropdownVisible(true)}
                                onMouseLeave={() => setDropdownVisible(false)}
                                onClick={() => setDropdownVisible(!dropdownVisible)}
                            >
                                Soluções
                                <Image
                                    src={ChevronsDown}
                                    alt="Chevrons Down"
                                />
                                {dropdownVisible && (
                                    <S.DropdownContent>
                                        <>
                                            <h2>SOLUÇÕES PRINCIPAIS</h2>
                                            <S.DropdownList>
                                                <S.DropdownItem>
                                                    <Image src={EadIcon} alt='Ead Icon' />
                                                    <div>
                                                        <h3>Crie uma Escola Online</h3>
                                                        <p>Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                </S.DropdownItem>
                                            </S.DropdownList>
                                            <S.DropdownItem>
                                                <Image src={CommunityIcon} alt='Ead Icon' />
                                                <div>
                                                    <h3>Comunidade e rede social</h3>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </S.DropdownItem>
                                            <S.DropdownItem>
                                                <Image src={GamificationIcon} alt='Ead Icon' />
                                                <div>
                                                    <h3>Gamificação</h3>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </S.DropdownItem>
                                            <S.DropdownItem>
                                                <Image src={AppIcon} alt='Ead Icon' />
                                                <div>
                                                    <h3>Aplicativo mobile</h3>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </S.DropdownItem>
                                        </>
                                    </S.DropdownContent>
                                )}
                            </S.NavItem>
                            <S.NavItem>Preços</S.NavItem>
                            <S.NavItem>Academy</S.NavItem>
                            <S.NavItem>Blog</S.NavItem>
                            <S.NavItem>Contato</S.NavItem>
                        </S.NavList>
                    </nav>

                    <Separator
                        width="2px"
                        height="1.5rem"
                        backgroundColor="hsla(181, 82%, 78%, .25)"
                    />

                    <S.HeaderButtons>
                        <Button>
                            <Image
                                src={PersonIcon}
                                alt="Person Icon"
                            />
                            Entrar
                        </Button>
                        <OutlineButton>Começar agora</OutlineButton>
                        <Button>
                            PT
                            <Image
                                src={ChevronsDown}
                                alt="Chevrons Down"
                            />
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