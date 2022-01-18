import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

import {
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  IconLinkedin,
  IconGithub,
  IconTwitter,
  IconEmail,
  IconResume
} from './SocialsElements';

const Socials = () => {
  return (
    <SocialMedia>
      <SocialMediaWrap>
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
            <IconLinkedin />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Github">
            <IconGithub />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <IconTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Email">
            <IconEmail />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </SocialMedia>
  );
};

export default Socials;
