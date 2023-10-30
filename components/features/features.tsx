'use client'

import Image from 'next/image';

import * as S from "./styles";

import TrailsIcon from "@/public/assets/trail-icon.svg";
import PlaylistsIcon from "@/public/assets/playlists-icon.svg";
import FolderIcon from "@/public/assets/folder-icon.svg";
import RocketIcon from "@/public/assets/rocket-icon.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";

import Separator from "@/components/separator/separator";
import Link from 'next/link';

const Features = () => {
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
                    <S.FeaturesCard>
                        <Image src={TrailsIcon} alt='Trails Icon' />
                        <h4>Trilhas de etapas</h4>
                        <p>
                            Crie planos de estudos especificando aulas e/ou
                            cursos e definindo a ordem que seus alunos devem
                            estudar.
                        </p>
                    </S.FeaturesCard>
                    <S.FeaturesCard>
                        <Image src={PlaylistsIcon} alt='Playlists Icon' />
                        <h4>Playlists</h4>
                        <p>
                            Transforme uma coleção em uma playlist para poder
                            ver vídeos e áudios em sequência offline.
                        </p>
                    </S.FeaturesCard>
                    <S.FeaturesCard>
                        <Image src={FolderIcon} alt='Folder Icon' />
                        <h4>Trilhas de etapas</h4>
                        <p>
                            Crie coleções, adicione conteúdos, reorganize ítens e
                            deixe tudo do seu jeito para melhorar a experiência.
                        </p>
                    </S.FeaturesCard>
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