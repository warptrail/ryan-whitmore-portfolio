import React, { useState, useRef } from 'react';
import CallToAction from '../CallToAction';

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
  const [cta, setCta] = useState(false);

  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  // run this function from an event handler or an effect to execute scroll

  const onHover = () => {
    setHover(!hover);
  };

  const togglePopup = () => {
    console.log('pop');
    setCta(!cta);
    executeScroll();
  };

  const closePopup = () => {
    setCta(false);
  };

  return (
    <HeroContainer id="home" ref={myRef}>
      <HeroBg cta={cta}>
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
            onClick={togglePopup}
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Let&apos;s Connect{hover ? <ArrowUp /> : <ArrowRight />}
          </Button>
          <CallToAction cta={cta} closePopup={closePopup} />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
