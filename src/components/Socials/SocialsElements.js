import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

import { FaGithub, FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

// export const SocialMedia = styled.section`
//   max-width: 1000px;
//   width: 100%;
//
//   border: 1px solid lightblue;
// `;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  background: #061143;
  justify-content: center;
  justify-content: space-evenly;
  /* align-content: center; */
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  & > * {
    margin: 4px ${(props) => (props.minimal ? '18px' : '10px')};
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 38px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: clamp(2.925rem, 0.1906rem + 13.2222vw, 4rem);
  display: flex;

  /* align-items: center; */

  @media screen and (min-width: 768px) {
    margin: 4px 19px;
  }
`;

export const IconLinkedin = styled(FaLinkedin)``;
export const IconGithub = styled(FaGithub)``;
export const IconTwitter = styled(FaTwitter)``;
export const IconEmail = styled(FaEnvelope)``;
