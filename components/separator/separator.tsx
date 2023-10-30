import * as S from './styles';

interface SeparatorProps {
    width: string;
    height: string;
    backgroundColor: string;
    className?: string;
}

const Separator = ({ width, height, backgroundColor, className }: SeparatorProps) => {
    return (
        <S.Separator
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            className={className}
        />
    );
}

export default Separator;