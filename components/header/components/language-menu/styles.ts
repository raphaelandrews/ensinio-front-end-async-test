import styled from 'styled-components';

export const LanguageMenuContainer = styled.div`
    position: absolute;
    top: 100%; /*2rem*/
    right: 0;
    text-align: left;
    transition: display 0.3s ease-in-out;
    z-index: 1;
    @media (min-width: 1200px) {
        right: inherit;
        left: 0;
    }
`

export const LanguageMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.colors.background};
`

export const LanguageMenuItem = styled.li`
    display: flex;
    gap: .625rem;
    font-size: .9375rem;
    font-weight: 500;
    color: hsl(258, 9%, 37%);
    text-transform: uppercase;
    line-height: 105%;
    padding: 1rem 1.5rem;
    .active {
        background: linear-gradient(90deg, hsl(252, 67%, 55%) -880.48%, hsla(252, 67%, 55%, 0) 100%);
    }
`