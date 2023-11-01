import styled from 'styled-components';

export const HomeIconsContainer = styled.div`
    position: absolute;
    top: 2.75rem;
    width: 100dvw;
`

export const HomeIconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;

    div:first-child img {
            width: 82.496px;
            height: 82.496px;
            flex-shrink: 0;
    }

    div:nth-child(2) img {
            margin-top: 1.75rem;
            width: 67.355px;
            height: 67.355px;
            flex-shrink: 0;
    }

    div:last-child img {
            width: 83.625px;
            height: 83.625px;
            flex-shrink: 0;
    }
`