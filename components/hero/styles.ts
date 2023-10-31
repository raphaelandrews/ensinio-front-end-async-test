import styled from 'styled-components';

export const HeroContainer = styled.section`
    padding-top: 5.75rem;
    background: linear-gradient(to bottom right, hsl(252, 67%, 55%), hsl(195, 67%, 55%));
`

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.background};
    width: 90%;
    max-width: 1280px;
    height: auto;
    margin: 0 auto;

    .hero__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        text-align: center;
        padding-top: 3rem;
    }

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: 600;
        line-height: 105%;
        letter-spacing: 2.4px;
        text-transform: uppercase;

        span {
            opacity: .75;
        }
    }

    h1 {
        font-size: 2.75rem;
        font-weight: 500;
        line-height: 110%;
        letter-spacing: -1.32px;
        max-width: 500px;
    }

    p {
        font-weight: 400;
        line-height: 150%;
        max-width: 416px;
        opacity: 0.9;
    }

    .hero__buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        margin-top: 3rem;
        
        img {
            height: auto;
            width: 100%;
            max-width: 41rem;
        }
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;
        height: 30rem;

        .hero__content {
            align-items: inherit;
            text-align: left;
            width: 50%;
            padding-top: 0;
        }

        .hero__buttons {
            flex-direction: row;
        }

        .hero__image {
            width: 50%;
            margin-top: 0;
        }
    }
    
    @media screen and (min-width: 1200px) {
        height: 38rem;
    }
`