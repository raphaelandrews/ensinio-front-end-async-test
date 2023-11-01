import Image from "next/image";

import * as S from './hero-icons.styles';

import PlaylistsIcon from "@/public/assets/playlists-icon.svg";
import CertifiedIcon from "@/public/assets/certified-icon.svg";
import PingAnimate from "@/animations/ping-animate";
import ShakeAnimate from "@/animations/shake-animate";
import JumpAnimate from "@/animations/jump-animate";

const HomeIcons = () => {
    return (
        <S.HomeIconsContainer>
            <S.HomeIconsWrapper>
                <PingAnimate hoverY={50} hoverX={50} duration={0.6}>
                    <Image src={PlaylistsIcon} alt="Playlists Icon" />
                </PingAnimate>
                <ShakeAnimate >
                    <Image src={CertifiedIcon} alt="Certified Icon" />
                </ShakeAnimate>
                <JumpAnimate hoverY={50} duration={0.6}>
                    <Image src={PlaylistsIcon} alt="Playlists Icon" />
                </JumpAnimate>
            </S.HomeIconsWrapper>
        </S.HomeIconsContainer>
    );
}

export default HomeIcons;