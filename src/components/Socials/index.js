/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  IconLinkedin,
  IconGithub,
  IconTwitter,
  IconEmail
} from './SocialsElements';

const Socials = ({ minimal }) => {
  console.log(minimal);
  return (
    <SocialMediaWrap>
      <SocialIcons minimal={minimal}>
        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
          <IconLinkedin />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Github">
          <IconGithub />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
          <IconTwitter />
        </SocialIconLink>
        {/* if minimal = true then do not load email icon */}
        {minimal ? (
          ''
        ) : (
          <SocialIconLink href="/" target="_blank" aria-label="Email">
            <IconEmail />
          </SocialIconLink>
        )}
      </SocialIcons>
    </SocialMediaWrap>
  );
};

export default Socials;
