import React from 'react';
import {
  BackgroundOverlay,
  HeroBg,
  HeroContainer,
  HeroContent,
  NameBox,
  MyLogo,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper
} from './HeroElements';

import myLogo from '../../images/ryanwhitmore.png';
import { Button } from '../ButtonElement';

const AltHero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <BackgroundOverlay />
      </HeroBg>
      <HeroContent>
        <NameBox>
          <MyLogo src={myLogo} />
        </NameBox>
        <HeroH1>More Information</HeroH1>
        <HeroH2>Services Offered</HeroH2>
        <HeroP>Development</HeroP>
        <HeroP>Design</HeroP>
        <HeroP>Data</HeroP>
        <HeroBtnWrapper>
          <Button fontBig big primary dark>
            Learn More
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default AltHero;
