import React, { useEffect } from 'react';

import {
  MobNavContainer,
  Icon,
  CloseIcon,
  MobNaveWrapper,
  MenuUl,
  MenuLi,
  MenuLink
} from './MobileNavElements';

const MobileNav = ({ isNavOpen, toggle }) => {
  console.log('hello');
  return (
    <MobNavContainer isNavOpen={isNavOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobNaveWrapper>
        <MenuUl>
          <MenuLi>
            <MenuLink to="top" onClick={toggle} smooth={true}>
              Home
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="about" onClick={toggle} smooth={true}>
              About
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="projects" onClick={toggle} offset={-50} smooth={true}>
              Projects
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="contact" onClick={toggle} smooth={true}>
              Contact
            </MenuLink>
          </MenuLi>
          <MenuLi>Blog</MenuLi>
        </MenuUl>
      </MobNaveWrapper>
    </MobNavContainer>
  );
};

export default MobileNav;
