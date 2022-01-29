import React from 'react';
import { Button } from '../ButtonElement';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  AboutText,
  BtnWrap,
  ImgWrap,
  Img,
  AboutLink,
  ContactContainer,
  ContactWrap,
  ContactBtn,
  ContactBtnScroll,
  ContactBtnRoute
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  link,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  const onClickSayHello = () => {
    console.log('Ahoy there!');
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <AboutText darkText={darkText}>
                  {description1}
                  <AboutLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link[1]}
                  >
                    {link[0]}
                  </AboutLink>
                </AboutText>
                <AboutText>{description2}</AboutText>
              </TextWrapper>

              <ContactWrap>
                <ContactContainer>
                  <ContactBtnScroll
                    to="contact"
                    smooth={true}
                    offset={-80}
                    onClick={onClickSayHello}
                  >
                    Say Hello
                  </ContactBtnScroll>
                  <ContactBtnRoute to="/bio">More Info</ContactBtnRoute>
                  <ContactBtnRoute to="/blog">Blog</ContactBtnRoute>
                </ContactContainer>
              </ContactWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
