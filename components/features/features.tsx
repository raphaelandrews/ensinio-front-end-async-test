'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Variants, motion } from "framer-motion";

import * as S from "./styles";
import { featuresImage } from '@/utils/format-image';
import { FeaturesData } from '@/types/Features';
import { FeaturesI18n } from '@/types/i18n';

import RocketIcon from "@/public/assets/rocket-icon.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";

import Separator from "@/components/separator/separator";
import PingAnimate from '@/animations/ping-animate';

interface FeaturesProps {
    featuresInt: FeaturesI18n;
    data: FeaturesData;
    lang: string;
}

interface AnimationVariants extends Variants {
    hover: {
        x: number;
        transition: {
            duration: number;
            repeat: number;
            repeatType: 'reverse' | 'loop' | 'mirror';
        };
    };
}

const animationVariants: AnimationVariants = {
    initial: {
        x: 0,
    },
    hover: {
        x: 10,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

const Features = ({ data, featuresInt, lang }: FeaturesProps) => {
    if (!Array.isArray(data)) {
        return null;
    }

    return (
        <S.FeaturesContainer>
            <S.FeaturesWrapper>
                <S.FeatuesIntro>
                    <div className="features__subtitle">
                        <Separator
                            width="40px"
                            height="1px"
                            backgroundColor="hsla(252, 67%, 58%, .5)"
                        />
                        <h3>{featuresInt.detalhes}</h3>
                    </div>
                    <p>{featuresInt.recursos}  ⚡️</p>
                </S.FeatuesIntro>
                <h2>{featuresInt.titulo}</h2>
                <S.FeaturesCards>
                    {data.map((item) => (
                        <PingAnimate key={item.id} hoverY={-10} duration={0.3}>
                            <S.FeaturesCard >
                                <Image src={featuresImage(item.id)} alt='Trails Icon' />
                                <h2>{item.title[lang]}</h2>
                                <p>{item.description[lang]}</p>
                            </S.FeaturesCard>
                        </PingAnimate>
                    ))}
                </S.FeaturesCards>
                <Separator width='100%' height='1px' backgroundColor='hsl(240, 4%, 91%)' />
                <S.FeaturesFooter>
                    <div className='features__footer___content'>
                        <Image src={RocketIcon} alt='Rocket Icon' />
                        <p>{featuresInt.maisRecursos}</p>
                    </div>
                    <motion.div whileHover="hover">
                        <Link href='https://ndrws.dev' target='_blank'>
                            {featuresInt.mais}
                            <motion.div variants={animationVariants} className='features__footer___image'>
                                <Image src={ArrowRightIcon} alt="Arrow Right Icon" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </S.FeaturesFooter>
            </S.FeaturesWrapper>
        </S.FeaturesContainer>
    );
}

export default Features;