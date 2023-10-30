import styled from 'styled-components';

export const SolutionsMenuContainer = styled.div`
    position: absolute;
    top: 2rem;
    right: -50%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    text-align: left;
    white-space: nowrap;
    padding: 1.5rem 2.5rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.background};
    transition: display 0.3s ease-in-out;
    z-index: 5;
        @media screen and (min-width: 600px) {
        padding: 2.75rem 3rem;
    }
        @media screen and (min-width: 1200px) {
        right: inherit;
        left: 0;
    }
    h2 {
        font-size: .875rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.tertiary};
        letter-spacing: 0.15em;
        line-height: 105%;
        text-transform: uppercase;
    }
`;

export const SolutionsMenuList = styled.ul`
    display: grid;
    gap: 2.5rem;
    @media screen and (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const SolutionsMenuItem = styled.li`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    h3 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: .9375rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: .125rem;
        line-height: 125%;
    }
    p {
        font-size: .8125rem;
        color: ${({ theme }) => theme.colors.muted};
        line-height: 150%;
    }
    @media screen and (min-width: 400px) {
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
    }
`