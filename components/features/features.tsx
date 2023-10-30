'use client'

import Image from 'next/image';
import Link from 'next/link';

import * as S from "./styles";
import { featuresImage } from '@/utils/format-image';
import { FeaturesData } from '@/types/Features';

import RocketIcon from "@/public/assets/rocket-icon.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";

import Separator from "@/components/separator/separator";

const Features = ({ data }: FeaturesData) => {
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
                        <h3>Pensamos em cada detalhe</h3>
                    </div>
                    <p>Conheça alguns dos nossos recursos  ⚡️</p>
                </S.FeatuesIntro>
                <h2>
                    Queremos que o aluno se sinta confortável enquanto aprende
                </h2>
                <S.FeaturesCards>
                    {data.map((item) => (
                        <S.FeaturesCard key={item.id}>
                            <Image src={featuresImage(item.id)} alt='Trails Icon' />
                            <h4>{item.title.pt}</h4>
                            <p>{item.description.pt}</p>
                        </S.FeaturesCard>
                    ))}
                </S.FeaturesCards>
                <Separator width='100%' height='1px' backgroundColor='hsl(240, 4%, 91%)' />
                <S.FeaturesFooter>
                    <div className='features__footer___content'>
                        <Image src={RocketIcon} alt='Rocket Icon' />
                        <p>
                            Veja todos os outros recursos disponíveis para te ajudar
                        </p>
                    </div>
                    <Link href='https://ndrws.dev' target='_blank'>
                        Ver mais
                        <Image src={ArrowRightIcon} alt='Arrow Right Icon Icon' />
                    </Link>
                </S.FeaturesFooter>
            </S.FeaturesWrapper>
        </S.FeaturesContainer>
    );
}

export default Features;