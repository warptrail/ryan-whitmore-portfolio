import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
// import { Link as RouterLink } from 'react-router-dom';

const colorChange = (scrollNav) => {
  if (scrollNav) {
    return '#030808';
  }

  return 'transparent';
};

export const Nav = styled.nav`
  color: #fff;
  background: ${({ scrollNav }) => {
    return colorChange(scrollNav);
  }};
  height: 80px;
  /* margin-top: ${({ isHomePage }) => (isHomePage ? '-80px' : '0px')}; */
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  position: sticky;
  /* top: ${({ scrollNav }) => (scrollNav ? '60px' : '0')}; */
  top: 0rem;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(ScrollLink)`
  justify-self: flex-start;
  cursor: pointer;
  align-self: center;
  display: flex;
`;

export const NavLogoImg = styled.img`
  width: 100%;
  padding: 0 5px;
  max-width: 400px;
`;

export const NavLogoText = styled.span`
  color: #fff;
  margin-right: 12px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  /* &:hover {
    border-bottom: 2px solid #4b59f7;
  } */
  @media screen and (max-width: 768px) {
    width: 100%;
    /* &:hover {
      border: none;
    } */
  }
`;

export const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
