import { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <S.Button onClick={onClick}>
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