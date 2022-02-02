import React from 'react';
import { useLocation } from 'react-router-dom';
import Socials from '../Socials';

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
          <MenuScrollLink
            to="top"
            smooth={true}
            onClick={() => {
              toggle();
              handleToggleScrollUp();
            }}
          >
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
        <MenuLi>
          <Socials />
        </MenuLi>
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
          <MenuLi>
            <MenuScrollLink
              to="bio"
              smooth={true}
              offset={-80}
              onClick={toggle}
            >
              About
            </MenuScrollLink>
          </MenuLi>

          <MenuLi>
            <MenuScrollLink
              to="myStack"
              smooth={true}
              offset={-80}
              onClick={toggle}
            >
              My Stack
            </MenuScrollLink>
          </MenuLi>

          <MenuLi>
            <MenuScrollLink
              to="background"
              smooth={true}
              offset={-80}
              onClick={toggle}
            >
              Background
            </MenuScrollLink>
          </MenuLi>
          <MenuLi>
            <Socials />
          </MenuLi>
        </MenuLi>
      </MenuUl>
    );
  };

  const menuSelector = () => {
    if (currentUrl.pathname === '/') {
      return homePageMobNav();
    }
    if (currentUrl.pathname === '/bio') {
      return bioPageMobNav();
    }
    return <div>sup</div>;
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
