import React, { useState, useRef } from 'react';

import Socials from '../Socials';
import {
  PopupBox,
  PopupFooter,
  PopupP,
  CtaLinkRouter,
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

  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // window.scrollBy(100, 0);
  };

  const onClickQr = () => {
    setQrActive(true);
    executeScroll();
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
        <CtaLinkRouter to="contact">
          <CtaButtonSpan> Send a message</CtaButtonSpan>
          <PaperPlaneIcon />{' '}
        </CtaLinkRouter>
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
    <PopupBox cta={cta} qr={qrActive} ref={myRef}>
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
