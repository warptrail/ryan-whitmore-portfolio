import React, { useState, useEffect } from 'react';

import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLogoImg,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

import logo from '../../images/ryanwhitmore.png';

const Navbar = ({ toggle, toggleScrollUp, handleToggleScrollUp }) => {
  const currentURL = useLocation();
  const [scrollNav, setScrollNav] = useState(false);

  // when past a particular point, trigger the transparent nav background

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  useEffect(() => {
    const changeNav = () => {
      if (currentURL.pathname !== '/') {
        if (window.scrollY > 30) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      } else if (window.scrollY > 150) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener('scroll', changeNav);
    return () => {
      document.removeEventListener('scroll', changeNav);
    };
  }, [currentURL.pathname]);
  const location = useLocation();
  console.log(location);

  const homePageNavBar = () => {
    return (
      <Nav scrollNav={scrollNav} isHomePage={currentURL.pathname === '/'}>
        <NavbarContainer>
          <NavLogo to="/">{scrollNav ? <NavLogoImg src={logo} /> : ''}</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    );
  };

  const contactPageNavBar = () => {
    return (
      <Nav scrollNav={scrollNav} isHomePage={currentURL.pathname === '/'}>
        <NavLogo onClick={() => handleToggleScrollUp()} to="/">
          <NavLogoImg src={logo} />
        </NavLogo>
      </Nav>
    );
  };

  return (
    <>
      {currentURL.pathname === '/' || currentURL.pathname === '/bio'
        ? homePageNavBar()
        : contactPageNavBar()}
    </>
  );
};

export default Navbar;
