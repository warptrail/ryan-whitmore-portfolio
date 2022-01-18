import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  PhotoBg,
  BackgroundOverlay,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowUp,
  ArrowRight,
  NameBox,
  MyLogo,
  Name
} from './HeroElements';
import { Button } from '../ButtonElement';
import backgroundImage from '../../images/neon-background.png';
import myLogo from '../../images/ryanwhitmore.png';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <BackgroundOverlay />
        {/* <PhotoBg src={backgroundImage} /> */}
      </HeroBg>
      <HeroContent>
        <NameBox>
          <MyLogo src={myLogo} />
        </NameBox>
        <HeroH1>Frontend Web Developer</HeroH1>
        <HeroP>
          Here to help you make the most out of the World (Wide Web)
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Let&apos;s Connect{hover ? <ArrowUp /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
