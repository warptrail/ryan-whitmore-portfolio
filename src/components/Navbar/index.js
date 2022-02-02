import React, { useState, useEffect } from 'react';

import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavbarContainer,
  NavLogoScroll,
  NavLogoRouter,
  MobileIcon,
  NavLogoImg,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksR,
  LeftArrowIcon
} from './NavbarElements';

import logo from '../../images/ryanwhitmore.png';

const Navbar = ({ toggle, handleToggleScrollUp }) => {
  const currentURL = useLocation();
  const [scrollNav, setScrollNav] = useState(false);

  // when past a particular point, trigger the transparent nav background

  useEffect(() => {
    const changeNav = () => {
      if (currentURL.pathname === '/bio') {
        if (window.scrollY > 175) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      } else if (currentURL.pathname !== '/') {
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

  const homePageNavBar = () => {
    return (
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogoScroll
            to="top"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            exact="true"
          >
            {scrollNav ? <NavLogoImg src={logo} /> : ''}
          </NavLogoScroll>
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
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    );
  };

  const bioPageNavBar = () => {
    return (
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogoRouter to="/">
            {scrollNav ? <NavLogoImg src={logo} /> : ''}
          </NavLogoRouter>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="bio"
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
              <NavLinks
                to="stack"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                exact="true"
                offset={-80}
              >
                My Stack
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="background"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                exact="true"
                offset={-80}
              >
                Background
              </NavLinks>
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
        <NavLogoRouter onClick={() => handleToggleScrollUp()} to="/">
          <NavLogoImg src={logo} />
        </NavLogoRouter>
      </Nav>
    );
  };

  const projectPageNavBar = () => {
    return (
      <Nav scrollNav={scrollNav} $project>
        <NavbarContainer>
          <NavMenu $project>
            <NavItem>
              <NavLinksR to="/projects">
                <LeftArrowIcon /> Project Gallery
              </NavLinksR>
            </NavItem>
          </NavMenu>
          <NavLogoRouter onClick={() => handleToggleScrollUp()} to="/" $project>
            <NavLogoImg src={logo} />
          </NavLogoRouter>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    );
  };

  const blogPageNavBar = () => {
    return (
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogoRouter onClick={() => handleToggleScrollUp()} to="/">
            <NavLogoImg src={logo} />
          </NavLogoRouter>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    );
  };

  function navChoose() {
    if (currentURL.pathname === '/') {
      return homePageNavBar();
    }
    if (currentURL.pathname === '/bio') {
      return bioPageNavBar();
    }

    if (
      currentURL.pathname === '/projects/us-geography' ||
      currentURL.pathname === '/projects/currency-toolkit' ||
      currentURL.pathname === '/projects/tracker-350' ||
      currentURL.pathname === '/projects/random-neon'
    ) {
      return projectPageNavBar();
    }

    if (currentURL.pathname === '/blog') {
      return blogPageNavBar();
    }
    return contactPageNavBar();
  }

  return (
    <>
      {/* {currentURL.pathname === '/' || currentURL.pathname === '/bio'
        ? homePageNavBar()
        : contactPageNavBar()} */}
      {navChoose()}
    </>
  );
};

export default Navbar;
