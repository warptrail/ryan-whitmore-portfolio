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
  HeroList,
  HeroListItem,
  HeroP,
  HeroBtnWrapper,
  HeroWrapper,
  MyLogoLinkFrame
} from './HeroElements';

import myLogo from '../../images/ryanwhitmore.png';
import { ScrollButton } from '../ButtonElement';

const AltHero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <BackgroundOverlay />
      </HeroBg>
      <HeroWrapper>
        <HeroContent>
          <MyLogoLinkFrame to="/">
            <NameBox>
              <MyLogo src={myLogo} />
            </NameBox>
          </MyLogoLinkFrame>

          <HeroH1>Services Offered:</HeroH1>

          <HeroList>
            <HeroListItem>Development</HeroListItem>
            <HeroListItem>Design</HeroListItem>
            <HeroListItem>Data</HeroListItem>
          </HeroList>
          <HeroBtnWrapper>
            <ScrollButton
              fontBig
              big
              primary
              dark
              to="bio"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              exact="true"
              offset={-80}
            >
              Learn More
            </ScrollButton>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default AltHero;
