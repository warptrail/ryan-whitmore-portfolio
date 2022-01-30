import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  MobNavContainer,
  Icon,
  CloseIcon,
  MobNaveWrapper,
  MenuUl,
  MenuLi,
  MenuScrollLink,
  MenuRouteLink
} from './MobileNavElements';

const MobileNav = ({ isNavOpen, toggle, handleToggleScrollUp }) => {
  const currentUrl = useLocation();

  const homePageMobNav = () => {
    return (
      <MenuUl>
        <MenuLi>
          <MenuScrollLink to="top" onClick={toggle} smooth={true}>
            Home
          </MenuScrollLink>
        </MenuLi>
        <MenuLi>
          <MenuScrollLink to="about" onClick={toggle} smooth={true}>
            About
          </MenuScrollLink>
        </MenuLi>
        <MenuLi>
          <MenuScrollLink
            to="projects"
            onClick={toggle}
            offset={-50}
            smooth={true}
          >
            Projects
          </MenuScrollLink>
        </MenuLi>
        <MenuLi>
          <MenuScrollLink to="contact" onClick={toggle} smooth={true}>
            Contact
          </MenuScrollLink>
        </MenuLi>
        <MenuLi>Blog</MenuLi>
      </MenuUl>
    );
  };

  const bioPageMobNav = () => {
    return (
      <MenuUl>
        <MenuLi>
          <MenuRouteLink to="/" onClick={() => handleToggleScrollUp()}>
            Home
          </MenuRouteLink>
        </MenuLi>
      </MenuUl>
    );
  };

  const menuSelector = () => {
    if (currentUrl.pathname === '/') {
      return homePageMobNav();
    }
    return bioPageMobNav();
  };

  return (
    <MobNavContainer isNavOpen={isNavOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobNaveWrapper>{menuSelector()}</MobNaveWrapper>
    </MobNavContainer>
  );
};

export default MobileNav;
