import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
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
  top: ${(props) => (props.qr ? '12vh' : '17vh')};
  min-height: 50vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: black;
  transition: 0.5s ease-in-out;
  opacity: 99%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: bottom;
`;

export const PopupFooter = styled.div`
  margin-top: auto;
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
  margin-top: 20px;
  margin-bottom: ${(props) => (props.extraMargin ? '14px' : '0px')};
  color: #fff;
`;

export const CtaButtonBox = styled.div`
  margin-top: 20px;
`;

const CtaButtonStyles = css`
  display: flex;
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

export const CtaLink = styled(Link)`
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
  height: 100%auto;
  display: flex;
  flex-direction: column;
  position: relative;
  /* display: none; */
`;

export const QRCloseBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 8%;
  width: 8%;
  background: red;
  font-size: 1.4rem;
  font-style: bold;
  color: #fff;
`;

export const QRImage = styled.img`
  width: 70%;
  margin: 0 auto;
`;
