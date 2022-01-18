import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaPlay } from 'react-icons/fa';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */
  background: #37022c;
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 40px 5px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;

  /* background: #8fe480; */

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    padding: 40px 20px;
  }

  @media screen and (min-width: 968px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: #dadada;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: auto;
  /* max-height: 380px; */
  padding: 30px;
  width: 95%;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border: none;
  box-shadow: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  pointer-events: none;
`;

export const ProjectH3 = styled.h3`
  font-size: 1.5rem;
  color: #030808;
  margin-bottom: 10px;
  text-align: center;
  pointer-events: none;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectP = styled.p`
  font-size: clamp(1rem, 0.3333rem + 3.3333vw, 1.375rem);
  text-align: left;
  color: black;
  pointer-events: none;
`;

export const ProjectBtn = styled.a`
  background: red;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  & > * {
    margin: 10px;
    padding: 10px;
  }
`;

export const ProjectLink = styled.a`
  background: #37022c;
  color: #fff;
  display: flex;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  font-size: 1.1rem;
`;

export const MoreInfoLink = styled(Link)`
  text-decoration: none;
  margin-top: 15px;
  font-size: clamp(1.3rem, 0.3333rem + 3.3333vw, 1.375rem);
  color: #37052c;
`;

export const IconGithub = styled(FaGithub)`
  margin-left: 10px;
  font-size: clamp(1.3rem, 0.3333rem + 3.3333vw, 1.375rem);
`;

export const IconPlay = styled(FaPlay)`
  margin-left: 10px;
`;

// ! Project Spotlight Section

export const SpotlightContainer = styled.div`
  min-height: 84vh;
  background: #dadada;
  width: 100%;
`;

export const ReturnBtn = styled.button`
  background: none;
  color: yellowgreen;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ScreenshotGallery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScreenshotFrame = styled.div`
  padding: 12px 18px;
`;

export const Screenshot = styled.img`
  width: 100%;
  border-radius: 12px;
`;
