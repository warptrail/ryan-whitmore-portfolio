import React, { useState } from 'react';
import { Button } from '../ButtonElement';

import trextet from '../../images/trextet.png';
import constructionGif from '../../images/construction.gif';

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
  ArrowRight,
  HeroWrapper,
  DontClick,
  ConstructionFrame,
  Gif
} from './HeroElements';

const BlogHero = () => {
  const [hover, setHover] = useState(false);
  const [dontClick, setDontClick] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <BackgroundOverlay />
      </HeroBg>
      <HeroWrapper>
        <HeroContent>
          <NameBox>
            <MyLogo src={trextet} />
          </NameBox>
          <HeroH1>The Blog</HeroH1>
          <HeroP construction>
            The Blog is currently under construction. Expect an entry in March
            of 2022.
          </HeroP>
          <ConstructionFrame>
            <Gif src={constructionGif} />
          </ConstructionFrame>
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
              onClick={() => setDontClick(!dontClick)}
            >
              Do not click {hover ? <ArrowUp /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
          {dontClick ? (
            <DontClick style={{ marginTop: '20px' }}>
              This button does nothing. Click again to do nothing again.
            </DontClick>
          ) : (
            ''
          )}
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default BlogHero;
