import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaPlay } from 'react-icons/fa';

export const ProjectContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* background: #010606; */
  background: #37022c;
  padding-top: ${(props) => (props.marginTop ? '20px' : '0')};
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 5px;
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* align-items: center; */
  gap: 16px;
  /* grid-auto-rows: 1fr; */

  @media screen and (min-width: 626px) {
    gap: 12px;
  }

  /* @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    padding: 40px 20px;
  }

  @media screen and (min-width: 968px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
  } */
`;

export const ProjectCard = styled.div`
  background: #dadada;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* min-height: 380px; */

  /* display: grid;
  /* grid-template-rows: repeat(3, 1fr); */

  /* height: auto; */
  padding: 20px;
  width: 98%;
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

  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 940px) {
    font-size: 2.1rem;
  }
`;

export const ProjectP = styled.p`
  font-size: clamp(1rem, 0.3333rem + 3.3333vw, 1.375rem);
  line-height: 1.4;
  text-align: left;
  color: black;
  pointer-events: none;
  margin-bottom: 15px;
`;

export const ProjectBtn = styled.a`
  background: red;
`;

export const LinkBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px 8px;
  grid-template-areas:
    '. .'
    '. .';
  margin-top: auto;
  max-width: 400px;
`;

export const ProjectLink = styled.a`
  background: #37022c;
  color: #fff;
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1.1rem;
`;

export const MoreInfoLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  font-size: clamp(1.3rem, 0.3333rem + 3.3333vw, 1.375rem);
  background: #37052c;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;

  /* margin: 0 auto; */
  grid-column: 1 / span 2;
`;

export const IconGithub = styled(FaGithub)`
  margin-left: 10px;
  font-size: clamp(1.3rem, 0.3333rem + 3.3333vw, 1.375rem);
`;

export const IconPlay = styled(FaPlay)`
  margin-left: 10px;
`;
