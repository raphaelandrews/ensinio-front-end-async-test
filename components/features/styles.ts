import styled from 'styled-components';

export const FeaturesContainer = styled.section`
`

export const FeaturesWrapper = styled.div`
    padding: 6rem 0;
    max-width: 1280px;
    margin: 0 auto;

    h2 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 2rem;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.16px;
        margin-top: 1.5rem;
    }
`

export const FeatuesIntro = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};
        line-height: 105%;
        letter-spacing: 2.4px;
        text-transform: uppercase;
    }

    p {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.muted};
        line-height: 150%;
    }

    .features__subtitle {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`

export const FeaturesCards = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4rem 0;
`

export const FeaturesCard = styled.article`
    max-width: 280px;

    h4 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.1px;
        margin-top: 1.5rem;
    }

    p {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.muted};
        line-height: 150%;
        margin-top: .75rem;
    }
`

export const FeaturesFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.25rem 0;

    a {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.tertiary};
        line-height: 125%;
    }
    
    .features__footer___content {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.muted};
        line-height: 150%;
    }
`