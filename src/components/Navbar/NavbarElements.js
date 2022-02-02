import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const colorChange = (scrollNav, project) => {
  if (project) {
    return '#030808';
  }

  if (scrollNav) {
    return '#030808';
  }
  return 'transparent';
};

export const Nav = styled.nav`
  color: #fff;
  background: ${({ scrollNav, $project }) => {
    return colorChange(scrollNav, $project);
  }};
  height: 80px;

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

const NavLogoStyles = css`
  justify-self: flex-start;
  cursor: pointer;
  align-self: center;
  display: flex;
`;

export const NavLogoScroll = styled(ScrollLink)`
  ${NavLogoStyles}
`;

export const NavLogoRouter = styled(RouterLink)`
  ${NavLogoStyles}
  margin-right: 40px;
  @media screen and (min-width: 768px) {
    margin-left: ${({ $project }) => ($project ? '50px' : '0')};
    /* justify-self: ${({ project }) =>
      project ? 'flex-end' : 'flex-start'}; */
  }
`;

export const NavLogoImg = styled.img`
  width: 80%;
  padding: 0 5px;
  max-width: 400px;

  @media screen and (min-width: 500px) {
    width: 100%;
  }
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
  /* border: 1px solid yellow; */
  margin-left: ${({ $project }) => ($project ? '10px' : '0')};

  /* mobile view */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -220%;
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

const NavLinksStyles = css`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavLinks = styled(ScrollLink)`
  ${NavLinksStyles}

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

export const NavLinksR = styled(RouterLink)`
  ${NavLinksStyles}
`;

export const LeftArrowIcon = styled(FaArrowLeft)`
  margin-right: 12px;
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
