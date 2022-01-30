import styled from 'styled-components';
import { FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import backgroundImage from '../../images/neon-background.png';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 60px 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  /* opacity: ${(props) => (props.cta ? '30%' : '100%')}; */


  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (min-width: 374px) {
    /* padding: 90px 30px; */
  }
  

  @media screen and (min-width: 768px) {
    justify-content: left;
    padding: 60px 100px;
  }

  @media screen and (min-width: 1100px) {
    padding: 60px 30px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: ${(props) => (props.cta ? 'hue-rotate(290deg)' : '')};
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const PhotoBg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  overflow: hidden;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 800px;
  width: 100%;
  background-color: black;
  height: 100%;
  opacity: 0.6;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  max-width: 1100px;
  z-index: 2;
  margin: 100px auto;
  width: 100%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  max-width: 1100px;
  /* position: absolute; */
  display: flex;
  padding: 8px 5px;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    align-items: inherit;
    margin: auto 0;
    justify-content: left;
  }
`;

export const HeroWords = styled.div`
  opacity: ${(props) => (props.cta ? '0%' : '100%')};
  transition: 0.5s all ease-in-out;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;
export const MyLogo = styled.img`
  width: 100%;
  max-width: 600px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 50vw;
    max-width: 580px;
    z-index: 99;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  /* font-size: 46px; */
  font-size: clamp(2.125rem, 1.125rem + 5vw, 2.625rem);
  text-align: center;
  margin-top: 30px;

  @media screen and (min-width: 375px) {
    font-size: clamp(2.75rem, 0.9643rem + 7.619vw, 3.25rem);
  }

  @media screen and (min-width: 480px) {
    /* padding: 0 10vw; */
  }

  @media screen and (min-width: 768px) {
    /* font-size: clamp(2.5rem, -0.8488rem + 6.9767vw, 3.25rem); */
    font-size: 58px;
    text-align: left;
    max-width: 500px;
    /* padding: 0 30px; */
  }
`;

// https://css-tricks.com/full-width-containers-limited-width-parents/
export const HeroH2 = styled.h2`
  color: #06d932;
  font-size: 20px;
  text-align: center;
  margin-top: 28px;
  background-color: black;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 10px 0;

  @media screen and(min-width: 480px) {
    /* font-size: 38px; */
  }

  @media screen and (min-width: 768px) {
    /* font-size: 40px; */
  }
`;

export const HeroP = styled.p`
  margin-top: 30px;
  color: #fff;
  /* padding: 0 30px; */
  font-size: clamp(1.5rem, 0.75rem + 3.75vw, 1.875rem);
  text-align: center;
  font-family: 'Jost', sans-serif;

  line-height: 1.2;

  @media screen and (min-width: 375px) {
    font-size: clamp(2.125rem, 0.7857rem + 5.7143vw, 2.5rem);
  }

  @media screen and (min-width: 480px) {
    /* padding: 0 9vw; */
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
    text-align: left;
    max-width: 400px;
    /* padding: 0 30px; */
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: left;
    align-items: flex-start;
  }
`;

export const ArrowUp = styled(FaArrowUp)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(FaArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
