import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import {
  FaPaperPlane,
  FaDownload,
  FaPhoneAlt,
  FaAddressCard
} from 'react-icons/fa';

export const PopupBox = styled.div`
  position: absolute;
  left: ${(props) => (props.cta ? '0' : 'calc(100vw + 100%)')};
  /* left: 0; */
  /* bottom: 50px; */
  top: ${(props) => (props.qr ? '10vh' : '16vh')};
  /* min-height: 50vh; */
  width: 100%;
  max-width: 768px;
  /* margin-left: auto;
  margin-right: auto; */
  background: #030808;
  transition: 0.5s all ease-in-out;
  opacity: 99%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: bottom;

  @media screen and (min-width: 768px) {
    left: inherit;
    right: ${(props) =>
      props.cta ? 'calc(20vw - 150px)' : 'calc(100vw + 100%)'};
    top: 30vh;
    border-radius: 10px;
  }

  @media screen and (min-width: 900px) {
    left: ${(props) => (props.cta ? 'calc(30vw - 20%)' : 'calc(100vw + 100%)')};
    top: 33vh;
  }
`;

export const PopupFooter = styled.div`
  /* margin-top: auto; */
  /* height: 30px; */
  width: 100%;
  background: #041144;
  display: flex;
  align-self: flex-end;
  justify-content: right;
`;

export const RetractButton = styled.button`
  color: black;
  background: #00bceb;
  height: 100%;
  padding: 10px 20px;
  font-size: clamp(1.125rem, 0.2361rem + 4.4444vw, 1.625rem);
`;

export const PopupP = styled.p`
  text-align: center;
  font-size: ${(props) =>
    props.extraBig
      ? 'clamp(1.75rem, 0.6389rem + 5.5556vw, 2.375rem);'
      : 'clamp(1.5rem, 1.0556rem + 2.2222vw, 1.75rem)'};
  margin-top: 30px;
  margin-bottom: ${(props) => (props.extraMargin ? '14px' : '0px')};
  color: #fff;
`;

export const CtaButtonBox = styled.div`
  margin-top: 20px;
`;

const CtaButtonStyles = css`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 80%;
  background: white;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  margin: 2% auto;
  color: #000;

  font-size: clamp(1.5rem, 0.1667rem + 6.6667vw, 2.25rem);
  border-radius: 10px;
  align-content: center;
`;

export const CtaLinkRouter = styled(LinkRouter)`
  ${CtaButtonStyles}
`;

export const CtaButton = styled.button`
  ${CtaButtonStyles}
`;

export const CtaAnchorLink = styled.a`
  ${CtaButtonStyles}
`;

export const CtaButtonSpan = styled.span`
  font-family: 'Bebas Neue', cursive;
`;

const IconStyles = css`
  margin-left: 2%;
`;
export const PaperPlaneIcon = styled(FaPaperPlane)`
  ${IconStyles}
`;

export const DownloadIcon = styled(FaDownload)`
  ${IconStyles}
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  ${IconStyles}
`;

export const AddressIcon = styled(FaAddressCard)`
  ${IconStyles}
`;

export const QRBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  border: 1px solid #4d2800;
  border-radius: 10px;
  padding: 4px;

  @media screen and (min-width: 768px) {
    /* height: 400px; */
  }
`;

export const QRCloseBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(7vw + 3px);
  width: calc(7vw + 3px);
  background: red;
  font-size: 0.9rem;
  font-style: bold;
  color: #fff;

  @media screen and (min-width: 768px) {
    /* height: 400px; */
    height: 30px;
    width: 30px;
  }
`;

export const QRImage = styled.img`
  width: 70%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
  }
`;
