import styled from 'styled-components';

interface SeparatorProps {
    width: string;
    height: string;
    backgroundColor: string;
}

export const Separator = styled.div<SeparatorProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
`