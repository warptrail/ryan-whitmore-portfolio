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
        <SocialIconLink
          href="https://www.linkedin.com/in/ryanwhitmoredev/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <IconLinkedin />
        </SocialIconLink>
        <SocialIconLink
          href="https://github.com/warptrail"
          target="_blank"
          aria-label="Github"
        >
          <IconGithub />
        </SocialIconLink>
        <SocialIconLink
          href="https://twitter.com/whitmorespace"
          target="_blank"
          aria-label="Twitter"
        >
          <IconTwitter />
        </SocialIconLink>
        {/* if minimal = true then do not load email icon */}
        {minimal ? (
          ''
        ) : (
          <SocialIconLink
            href="https://gist.githubusercontent.com/warptrail/e8719df085ccb891310ccb5c80618b54/raw/6410274344a22517d39738847522bbb9bec0be85/gistfile1.txt"
            target="_blank"
            aria-label="Email"
          >
            <IconEmail />
          </SocialIconLink>
        )}
      </SocialIcons>
    </SocialMediaWrap>
  );
};

export default Socials;
