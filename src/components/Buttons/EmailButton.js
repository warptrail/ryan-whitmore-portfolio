import React from 'react';

import './EmailButton.css';

function EmailButton() {
  return (
    <div className="EmailButton">
      <a href="mailto:ryan@whitmorespace.com">
        <p>Send Me Mail</p>
      </a>
    </div>
  );
}

export default EmailButton;
