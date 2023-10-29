import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: hsl(0, 0%, 0%, 0.03);
  backdrop-filter: blur(30px);
`;

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    max-width: 1280px;
    padding: 1.5rem;
    margin: 0 auto;
`

interface MenuContainerProps {
    visible: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    position: absolute;
    top: 100%;
    right: 0;
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    border-radius: .375rem;
    background-color: hsl(224, 64%, 58%);
    box-shadow: rgba(0, 0, 0, 0.16) -4px 4px 14px;

    @media (min-width: 1200px) {
        position: relative;
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
    }
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: .75rem;
  font-size: .9375rem;
  font-weight: 500;
  line-height: 105%;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%; /*2rem*/
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: left;
  padding: 1.5rem 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: display 0.3s ease-in-out;
  z-index: 1;

    @media (min-width: 400px) {
        white-space: nowrap;
    }

    @media (min-width: 600px) {
        padding: 2.75rem 3rem;
    }

    @media (min-width: 1200px) {
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

export const DropdownList = styled.ul`
    display: grid;
    gap: 2.5rem;

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const DropdownItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
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
`

export const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    cursor: pointer;

    @media (min-width: 1200px) {
        display: none;
    }

    div {
        width: 1.5rem;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    
    @media (min-width: 1200px) {
        position: relative;
        flex-direction: row;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    gap: 2.5rem;
`