import React from 'react';

import './ContactDetailed.css';

function ContactDetailed() {
  return (
    <div className="ContactDetailed">
      <div className="ContactDetailed-label">Phone</div>
      <div className="ContactDetailed-data">720-297-9827</div>

      <div className="ContactDetailed-label">Email</div>
      <div className="ContactDetailed-data">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:ryan@whitmorespace.com"
        >
          Ryan@Whitmorespace.com
        </a>
      </div>

      <div className="ContactDetailed-label">LinkedIn</div>
      <div className="ContactDetailed-data">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/whitmorespaceindustries/"
        >
          in/whitmorespaceindustries
        </a>
      </div>

      <div className="ContactDetailed-label">Github</div>
      <div className="ContactDetailed-data">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/warptrail"
        >
          warptrail
        </a>
      </div>

      <div className="ContactDetailed-resume">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1foPrn4M4cXFK5yns_XYXS_7Cyc82bnCtHKrZB9kAfyE/edit?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default ContactDetailed;
