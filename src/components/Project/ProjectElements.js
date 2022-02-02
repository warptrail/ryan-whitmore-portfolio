import styled, { css } from 'styled-components';

import { FaPlay, FaGithub } from 'react-icons/fa';

export const ProjectContainer = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const ProjectRow = styled.div`
  display: grid;
  /* grid-auto-columns: minmax(auto, 1fr); */
  grid-template-columns: 1.5fr 2fr;
  /* align-items: center; */

  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }
`;

export const ProjectRow2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'col3 col3';

  @media screen and (max-width: 768px) {
    /* grid-template-areas: 'col3 cfrol3'; */
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  align-self: stretch;
`;
export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  align-self: stretch;
`;

export const Column3 = styled.div`
  padding: 0 15px;
  grid-area: col3;
  align-self: stretch;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export const TopLine = styled.h2`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 20px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 12px;
  font-size: clamp(2rem, 0.75rem + 6.25vw, 2.625rem);
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: clamp(2.625rem, 1.5833rem + 3.4722vw, 3.25rem);
  }

  @media screen and (min-width: 768px) {
    font-size: clamp(2.0625rem, -0.1062rem + 4.5181vw, 3rem);
    text-align: left;
  }
`;

export const ProjectText = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const ProjectLogo = styled.img`
  width: 100%;
  /* border: 1px solid red; */
  margin: 0 auto;

  @media screen and (min-width: 448px) {
    width: 70%;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 30px;
  }
`;

export const ProjectLinkWrapper = styled.div`
  display: flex;
`;

export const ProjectLink = styled.a`
  border: 1px solid #5567ff;
  border-radius: 10px;
  font-size: clamp(1.25rem, 0.3825rem + 1.8072vw, 1.625rem);
  margin: 0 min(2vw, 20px);
  padding: 10px 18px;
  color: #fff;
  text-decoration: none;
  background-color: #12184b;
  display: flex;
  align-items: center;
`;

const iconStyles = css`
  margin-left: 10px;
`;

export const IconGithub = styled(FaGithub)`
  ${iconStyles}
`;
export const IconPlay = styled(FaPlay)`
  ${iconStyles}
`;

export const ScreenshotGallery = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media screen and (min-width: 646px) {
    flex-direction: row;
  }
`;

export const ScreenshotFrame = styled.div`
  margin: 5px 8px;
  /* border: 1px solid red; */
`;

export const Screenshot = styled.img`
  width: 100%;
`;
