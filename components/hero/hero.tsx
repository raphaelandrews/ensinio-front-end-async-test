'use client'

import Image from "next/image";

import * as S from "./styles";
import { HeroI18n } from "@/types/i18n";

import Man from "@/public/assets/man.png";
import PlayIcon from "@/public/assets/play-icon.svg";
import DevicesIcon from "@/public/assets/devices-icon.svg";

import { Button } from "@/components/button/button";
import ZoomAnimate from "@/animations/zoom-animate";
import FadeInAnimate from "@/animations/fadein-animate";

interface HeroProps {
    heroInt: HeroI18n;
}

const Hero = (heroInt: HeroProps) => {
    return (
        <S.HeroContainer>
            <S.HeroWrapper>
                <FadeInAnimate initialX={-50} animateX={0} className="hero__content">
                    <span>
                        <Image src={DevicesIcon} alt="Devices icon" />
                        <span>{heroInt.heroInt.intro}</span>
                    </span>
                    <h1>{heroInt.heroInt.titulo}</h1>
                    <p>{heroInt.heroInt.subtitulo}</p>
                    <div className="hero__buttons">
                        <ZoomAnimate>
                            <Button className="hero__buttons___cta">
                                {heroInt.heroInt.comecar}
                            </Button>
                        </ZoomAnimate>
                        <ZoomAnimate>
                            <Button className="hero__buttons___play">
                                <Image src={PlayIcon} alt="Play icon" />
                                {heroInt.heroInt.video}
                            </Button>
                        </ZoomAnimate>
                    </div>
                </FadeInAnimate>
                <div className="hero__image">
                    <Image src={Man} alt="Hero image" />
                </div>
            </S.HeroWrapper>

        </S.HeroContainer>
    );
}

export default Hero;