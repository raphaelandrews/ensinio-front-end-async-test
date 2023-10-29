import * as S from './styles';

interface SeparatorProps {
    width: string;
    height: string;
    backgroundColor: string;
}

const Separator = ({ width, height, backgroundColor }: SeparatorProps) => {
    return (
        <S.Separator
            width={width}
            height={height}
            backgroundColor={backgroundColor}
        />
    );
}

export default Separator;