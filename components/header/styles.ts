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
    align-items: center;
    padding: 1.5rem;
    border-radius: .375rem;
    background-color: hsl(224, 64%, 58%);
    box-shadow: rgba(0, 0, 0, 0.16) -4px 4px 14px;
    @media (min-width: 1200px) {
        position: relative;
        display: flex;
        flex-direction: row;
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
  &:hover {
    .dropdown-content {
      display: block;
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
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
    @media (min-width: 1200px) {
        display: flex;
        flex-direction: row;
        right: inherit;
        left: 0;
        padding: 2.75rem 3rem;
    }
    h2 {
        font-size: .875rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.tertiary};
        line-height: 105%;
        white-space: nowrap;
    }
`;

export const DropdownList = styled.ul`
    display: grid;
    gap: 1.5rem;
`

export const DropdownItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    h3 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: .9375rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        line-height: 125%;
        white-space: nowrap;
    }
    p {
        font-size: .8125rem;
        color: ${({ theme }) => theme.colors.muted};
        line-height: 150%;
        white-space: nowrap;
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