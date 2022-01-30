import React, { useState, useRef } from 'react';

import Socials from '../Socials';
import {
  PopupBox,
  PopupFooter,
  PopupP,
  CtaLink,
  CtaButton,
  RetractButton,
  PaperPlaneIcon,
  DownloadIcon,
  PhoneIcon,
  AddressIcon,
  QRBox,
  QRImage,
  QRCloseBtn,
  CtaButtonSpan,
  CtaButtonBox,
  CtaAnchorLink
} from './CallToActionElements';

import qrImg from '../../images/qr.png';

const CallToAction = ({ cta, closePopup }) => {
  const [qrActive, setQrActive] = useState(false);
  const topRef = useRef(null);
  const onClickQr = () => {
    setQrActive(true);
    window.scrollBy({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  };

  const renderCtaPanel = () => {
    if (qrActive) {
      return (
        <QRBox>
          <QRCloseBtn onClick={() => setQrActive(false)}>X</QRCloseBtn>
          <PopupP small>Scan to add to your contacts</PopupP>
          <QRImage src={qrImg} />
          <PopupP small>Or download the .vcf file</PopupP>

          <CtaAnchorLink href="https://protected-crag-63612.herokuapp.com/download">
            <CtaButtonSpan>VCF</CtaButtonSpan> <AddressIcon />
          </CtaAnchorLink>
        </QRBox>
      );
    }
    return (
      <CtaButtonBox>
        <CtaLink to="contact">
          <CtaButtonSpan> Send a message</CtaButtonSpan>
          <PaperPlaneIcon />{' '}
        </CtaLink>
        <CtaAnchorLink href="https://protected-crag-63612.herokuapp.com/download/resume">
          <CtaButtonSpan>My Resume</CtaButtonSpan>
          <DownloadIcon />
        </CtaAnchorLink>
        <CtaButton onClick={onClickQr}>
          <CtaButtonSpan>Add to contacts</CtaButtonSpan>
          <PhoneIcon />
        </CtaButton>
      </CtaButtonBox>
    );
  };

  return (
    <PopupBox ref={topRef} cta={cta} qr={qrActive}>
      {qrActive ? (
        ''
      ) : (
        <PopupP extraMargin extraBig>
          Find me on the Web
        </PopupP>
      )}

      <Socials minimal tiny={qrActive} />
      {renderCtaPanel()}
      <PopupFooter>
        <RetractButton onClick={closePopup}>Retract &#x2192;</RetractButton>
      </PopupFooter>
    </PopupBox>
  );
};

export default CallToAction;
