import { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <S.Button className={className} onClick={onClick}>
            {children}
        </S.Button>
    );
}

export const OutlineButton = ({ children }: ButtonProps) => {
    return (
        <S.OutlineButton>
            {children}
        </S.OutlineButton>
    );
}