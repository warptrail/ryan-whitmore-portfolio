import React from 'react';
import * as FaIcons from 'react-icons/fa';

import ContactForm from '../ContactForm/ContactForm';

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
            <FaIcons.FaLinkedin />
            <span className="hidden">o</span>
          </a>
        </div>
        <div className="Contact-img-frame">
          <a
            href="https://github.com/warptrail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaGithub />
            <span className="hidden">o</span>
          </a>
        </div>
        <div className="Contact-img-frame">
          <a href="mailto:ryan@whitmorespace.com">
            <FaIcons.FaEnvelope />
            <span className="hidden">o</span>
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
