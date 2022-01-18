import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

import {
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 38px;
`;

export const IconLinkedin = styled(FaLinkedin)``;
export const IconGithub = styled(FaGithub)``;
export const IconTwitter = styled(FaTwitter)``;
export const IconEmail = styled(FaEnvelope)``;
