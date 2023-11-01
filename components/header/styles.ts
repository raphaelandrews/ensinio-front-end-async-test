import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100dvw;
    background-color: var(--header-background);
    backdrop-filter: blur(15px);
    z-index: 1;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    width: 90%;
    max-width: 1280px;
    padding: 1.5rem 0;
    margin: 0 auto;
`

interface MenuContainerProps {
    menuOpen: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    position: absolute;
    top: 100%;
    right: 0;
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem;
    border-radius: .375rem;
    background-color: hsl(224, 64%, 58%);
    box-shadow: rgba(0, 0, 0, 0.16) -4px 4px 14px;

    .header__separator {
        display: none;
    }

     @media screen and (min-width: 1200px) {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 0;
        background-color: transparent;
        box-shadow: none;

        .header__separator {
            display: block;
        }
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    
    @media screen and (min-width: 1200px) {
        position: relative;
        flex-direction: row;
    }
`;

export const NavItem = styled.li`
    .solutions__menu:hover {
        cursor: pointer;
    }
    
    a,
    .solutions__menu  {
        position: relative;
        display: flex;
        align-items: center;
        gap: .75rem;
        font-size: .9375rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.background};
        line-height: 105%;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        gap: 2.5rem;
    }
`

export const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    cursor: pointer;

    @media screen and (min-width: 1200px) {
        display: none;
    }

    div {
        width: 1.5rem;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.background};
    }
`;