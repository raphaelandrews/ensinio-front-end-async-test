'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

import * as S from './styles';
import { HeaderI18n } from '@/types/i18n';
import useSolutionsStore from '@/hooks/use-solutions-menu';

import EadIcon from "@/public/assets/ead-icon.svg";
import CommunityIcon from "@/public/assets/community-icon.svg";
import GamificationIcon from "@/public/assets/gamification-icon.svg";
import AppIcon from "@/public/assets/app-icon.svg";
import PingAnimate from '@/animations/ping-animate';

interface HeaderProps {
    headerInt: HeaderI18n;
}

const SolutionsMenu = (headerInt: HeaderProps) => {
    const { setSolutionsOpen } = useSolutionsStore();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }} 
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='solutions__animate'
        >
            <S.SolutionsMenuContainer onMouseLeave={() => setSolutionsOpen(false)}>
                <h2>{headerInt.headerInt.submenu.titulo}</h2>
                <S.SolutionsMenuList>
                    <PingAnimate>
                        <S.SolutionsMenuItem>
                            <Image src={EadIcon} alt='Ead Icon' />
                            <div>
                                <h3>{headerInt.headerInt.submenu.escola}</h3>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </S.SolutionsMenuItem>
                    </PingAnimate>
                    <PingAnimate>
                        <S.SolutionsMenuItem>
                            <Image src={CommunityIcon} alt='Ead Icon' />
                            <div>
                                <h3>{headerInt.headerInt.submenu.comunidade}</h3>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </S.SolutionsMenuItem>
                    </PingAnimate>
                    <PingAnimate>
                        <S.SolutionsMenuItem>
                            <Image src={GamificationIcon} alt='Ead Icon' />
                            <div>
                                <h3>{headerInt.headerInt.submenu.gamificacao}</h3>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </S.SolutionsMenuItem>
                    </PingAnimate>
                    <PingAnimate>
                        <S.SolutionsMenuItem>
                            <Image src={AppIcon} alt='Ead Icon' />
                            <div>
                                <h3>{headerInt.headerInt.submenu.aplicativo}</h3>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </S.SolutionsMenuItem>
                    </PingAnimate>
                </S.SolutionsMenuList>
            </S.SolutionsMenuContainer>
        </motion.div>
    );
}

export default SolutionsMenu;