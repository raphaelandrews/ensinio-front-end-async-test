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
import DevicesIcon from "@/public/assets/devices-icon.svg";

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