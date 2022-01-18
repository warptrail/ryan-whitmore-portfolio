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

const Navbar = ({ toggle }) => {
  const currentURL = useLocation();
  const [scrollNav, setScrollNav] = useState(false);

  // when past a particular point, trigger the transparent nav background
  const changeNav = () => {
    if (window.scrollY > 150) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav} isHomePage={currentURL.pathname === '/'}>
        <NavbarContainer>
          <NavLogo to="/">{scrollNav ? <NavLogoImg src={logo} /> : ''}</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
