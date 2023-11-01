import TrailsIcon from "@/public/assets/trail-icon.svg";
import PlaylistIcon from "@/public/assets/playlist-icon.svg";
import FolderIcon from "@/public/assets/folder-icon.svg";

export const featuresImage = (id: number) => {
    let iconComponent;
    switch (id) {
        case 1:
            iconComponent = TrailsIcon;
            break;
        case 2:
            iconComponent = PlaylistIcon;
            break;
        case 3:
            iconComponent = FolderIcon;
            break;
    }
    return iconComponent;
};