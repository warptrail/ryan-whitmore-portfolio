import React, { useState, useEffect } from 'react';

import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLogoImg
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
      if (currentURL.pathname === '/contact') {
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
