'use client'

import Image from 'next/image';
import Link from 'next/link';

import * as S from "./styles";
import { featuresImage } from '@/utils/format-image';
import { FeaturesData } from '@/types/Features';
import { FeaturesI18n } from '@/types/i18n';

import RocketIcon from "@/public/assets/rocket-icon.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";

import Separator from "@/components/separator/separator";

interface FeaturesProps {
    featuresInt: FeaturesI18n;
    data: FeaturesData;
    lang: string;
}

const Features = ({ data, featuresInt, lang }: FeaturesProps) => {
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
                        <S.FeaturesCard key={item.id}>
                            <Image src={featuresImage(item.id)} alt='Trails Icon' />
                            <h4>{item.title[lang]}</h4>
                            <p>{item.description[lang]}</p>
                        </S.FeaturesCard>
                    ))}
                </S.FeaturesCards>
                <Separator width='100%' height='1px' backgroundColor='hsl(240, 4%, 91%)' />
                <S.FeaturesFooter>
                    <div className='features__footer___content'>
                        <Image src={RocketIcon} alt='Rocket Icon' />
                        <p>{featuresInt.maisRecursos}</p>
                    </div>
                    <Link href='https://ndrws.dev' target='_blank'>
                        {featuresInt.mais}
                        <Image src={ArrowRightIcon} alt='Arrow Right Icon Icon' />
                    </Link>
                </S.FeaturesFooter>
            </S.FeaturesWrapper>
        </S.FeaturesContainer>
    );
}

export default Features;