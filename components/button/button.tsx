import { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <S.Button>
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