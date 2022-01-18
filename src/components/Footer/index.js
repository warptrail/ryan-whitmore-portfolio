import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
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
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/login">How it works</FooterLink>
                <FooterLink to="/login">Testimonials</FooterLink>
                <FooterLink to="/login">Careers</FooterLink>
                <FooterLink to="/login">Investors</FooterLink>
                <FooterLink to="/login">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/login">How it works</FooterLink>
                <FooterLink to="/login">Testimonials</FooterLink>
                <FooterLink to="/login">Careers</FooterLink>
                <FooterLink to="/login">Investors</FooterLink>
                <FooterLink to="/login">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/login">How it works</FooterLink>
                <FooterLink to="/login">Testimonials</FooterLink>
                <FooterLink to="/login">Careers</FooterLink>
                <FooterLink to="/login">Investors</FooterLink>
                <FooterLink to="/login">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/login">How it works</FooterLink>
                <FooterLink to="/login">Testimonials</FooterLink>
                <FooterLink to="/login">Careers</FooterLink>
                <FooterLink to="/login">Investors</FooterLink>
                <FooterLink to="/login">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
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
