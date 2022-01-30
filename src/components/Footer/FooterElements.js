import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    /* justify-content: left; */
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 22px auto;
  text-align: left;
  color: #fff;

  @media screen and (min-width: 768px) {
    /* align-items: flex-start; */
    text-align: center;
    margin: 22px 70px;
    flex-direction: row;
  }
`;

export const FooterLink = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: clamp(1.25rem, 0.5227rem + 3.6364vw, 1.375rem);
  text-align: center;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 375px) {
    font-size: clamp(1.375rem, 1.0172rem + 1.5267vw, 1.75rem);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    justify-content: space-around;
    margin: 0 20px;
    font-size: clamp(1.5rem, 0.9217rem + 1.2048vw, 1.75rem);
  }
`;

export const CreditsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
