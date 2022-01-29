import styled, { css, keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 80px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const TopLine = styled.h2`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 20px 0;
`;

export const Heading = styled.h3`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (min-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutText = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const AboutLink = styled.a`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

// ! Contact Button Nav

const breatheAnimation = keyframes`
  0% {background: #24CB34}
  20% {background: #24CBA6}
  40% {background: #BC6DD6}
  60% {background: #8CE4AF}
  80% {background: #24CBA6}
  100% {background: #24CB34}
  `;

export const ContactWrap = styled.div`
  display: flex;
  justify-content: center;
  background: #8fe480;
  position: absolute;
  left: 0;
  width: 100vw;
  z-index: 99;
  animation-name: ${breatheAnimation};
  animation-duration: 16s;
  animation-iteration-count: infinite;

  @media screen and (min-width: 768px) {
    position: static;
    width: 100%;
    border-radius: 10px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  padding: 10px 4px;
  width: 100%;

  > * {
    &:last-child {
      border-right: none;
    }
  }
`;

const contactLinkStyles = css`
  padding: 5px 5px;
  font-size: clamp(1.2rem, -0.3333rem + 6.6667vw, 1.75rem);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  background: none;
  border: none;
  border-right: 1px solid black;
  color: #030808;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  text-align: center;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 4px;
  }

  &:hover {
    color: white;
    background: #37052c;
    border-right: none;
    border-radius: 10px;
  }
`;

export const ContactBtn = styled.button`
  ${contactLinkStyles}
`;

export const ContactBtnScroll = styled(ScrollLink)`
  ${contactLinkStyles}
`;

export const ContactBtnRoute = styled(RouteLink)`
  ${contactLinkStyles}
`;
