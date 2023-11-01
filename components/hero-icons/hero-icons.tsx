import * as S from './styles';

import Image from "next/image"
import PlaylistsIcon from "@/public/assets/playlists-icon.svg"
import CertifiedIcon from "@/public/assets/certified-icon.svg"

const HomeIcons = () => {
    return (
        <S.HomeIconsContainer>
            <S.HomeIconsWrapper>
                <Image src={PlaylistsIcon} alt="Playlists Icon" />
                <Image src={CertifiedIcon} alt="CerfifiedIcon" />
                <Image src={PlaylistsIcon} alt="Playlists Icon" />
            </S.HomeIconsWrapper>
        </S.HomeIconsContainer>
    );
}

export default HomeIcons;