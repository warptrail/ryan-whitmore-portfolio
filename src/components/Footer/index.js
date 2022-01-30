import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLink,
  SocialLogo,
  WebsiteRights,
  CreditsBox
} from './FooterElements';
import Socials from '../Socials';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <Socials />
          <FooterLinksContainer>
            <FooterLinkItems>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/bio">More Info</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksContainer>

          <CreditsBox>
            <SocialLogo to="/" onClick={toggleHome}>
              Warptrail
            </SocialLogo>
            <WebsiteRights>
              warptrail © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </CreditsBox>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
