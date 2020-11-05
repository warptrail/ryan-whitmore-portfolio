import React from 'react';

import linkedInImg from '../../img/linkedin-lg-3.png';
import githubImg from '../../img/github-lg-3.png';
import emailImg from '../../img/email-lg-3.png';

import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <p className="phone-number">720-297-9827</p>
      <div className="Contact-links">
        <div className="Contact-img-frame">
          <a
            href="https://www.linkedin.com/in/whitmorespaceindustries/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInImg} alt="linkedIn link" />
          </a>
        </div>
        <div className="Contact-img-frame">
          <a
            href="https://github.com/warptrail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="linkedIn link" />
          </a>
        </div>
        <div className="Contact-img-frame">
          <a href="mailto:ryan@whitmorespace.com">
            <img src={emailImg} alt="linkedIn link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
