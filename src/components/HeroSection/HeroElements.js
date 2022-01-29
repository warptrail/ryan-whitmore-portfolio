import styled from 'styled-components';
import { FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import backgroundImage from '../../images/neon-background.png';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 100px 30px;
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

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MyLogo = styled.img`
  width: 100%;
  max-width: 700px;
`;
export const Name = styled.p`
  color: #fff;
  padding-left: 12px;
  font-size: 1.5rem;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 46px;
  text-align: center;
  margin-top: 24px;

  @media screen and(min-width: 480px) {
    font-size: 38px;
  }

  @media screen and (min-width: 768px) {
    font-size: 68px;
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
  margin-top: 2rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  font-family: 'Jost', sans-serif;

  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    padding: 30px;
  }

  @media screen and(min-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowUp = styled(FaArrowUp)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(FaArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
