'use client'

import Image from "next/image";

import * as S from "./styles";

import Man from "@/public/assets/man.png";
import PlayIcon from "@/public/assets/play-icon.svg";
import DevicesIcon from "@/public/assets/devices-icon.svg";

import { Button } from "@/components/button/button";

const Hero = () => {
    return (
        <S.HeroContainer>
            <S.HeroWrapper>
                <div className="hero__content">
                    <span>
                        <Image src={DevicesIcon} alt="Devices icon" />
                        PLATAFORMA ALL IN ONE
                    </span>
                    <h1>Sua escola online poderosa e lucrativa</h1>
                    <p>
                        Tenha sua própria escola online 100% white label com rede social,
                        gamificação, clube de assinaturas, ecommerce e sistema EAD
                        completo.
                    </p>
                    <div className="hero__buttons">
                        <Button className="hero__buttons___cta">
                            Começar agora
                        </Button>
                        <Button className="hero__buttons___play">
                            <Image src={PlayIcon} alt="Play icon" />
                            Ver vídeo
                        </Button>
                    </div>
                </div>
                <div className="hero__image">
                    <Image src={Man} alt="Hero image" />
                </div>
            </S.HeroWrapper>

        </S.HeroContainer>
    );
}

export default Hero;