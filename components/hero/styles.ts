import styled from 'styled-components';

export const HeroContainer = styled.div`
    padding-top: 5.75rem;
    background: linear-gradient(to bottom right, hsl(252, 67%, 55%), hsl(195, 67%, 55%));
`

export const HeroWrapper = styled.section`
    display: flex;
    color: ${({ theme }) => theme.colors.background};
    max-width: 1280px;
    margin: 0 auto;
    span {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: 600;
        line-height: 105%;
        letter-spacing: 2.4px;
        text-transform: uppercase;
    }
    h1 {
        font-size: 2.75rem;
        font-weight: 500;
        line-height: 110%;
        letter-spacing: -1.32px;
    }
    p {
        font-weight: 400;
        line-height: 150%;
        max-width: 416px;
        margin-top: 2.75rem;
        opacity: 0.9;
    }
    .hero__buttons {
        display: flex;
        gap: 2.75rem;
        font-weight: 600;
        line-height: 125%;
    }
    .hero__buttons___cta {
        color: ${({ theme }) => theme.colors.primary};
        padding: 1rem 2rem;
        border-radius: 5rem;
        background-color: ${({ theme }) => theme.colors.accent};
    }
    .hero__buttons___play {
        gap: .5rem;
        color: ${({ theme }) => theme.colors.background};
    }
    .hero__image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100%;
    }
`