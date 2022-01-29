import React, { useState } from 'react';
import { Button } from '../ButtonElement';

import myLogo from '../../images/ryanwhitmore.png';

import {
  BackgroundOverlay,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  MyLogo,
  NameBox,
  ArrowUp,
  ArrowRight
} from './HeroElements';

const BlogHero = () => {
  const [hover, setHover] = useState(false);
  const [cta, setCta] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <BackgroundOverlay />
      </HeroBg>
      <HeroContent>
        <NameBox>
          <MyLogo src={myLogo} />
        </NameBox>
        <HeroH1>The Blog</HeroH1>
        <HeroP>Wow, such reading. Very impressed.</HeroP>
        <HeroBtnWrapper>
          <Button
            fontBig
            big
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Read More {hover ? <ArrowUp /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default BlogHero;
