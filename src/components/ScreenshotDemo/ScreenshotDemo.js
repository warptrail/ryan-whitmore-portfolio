import React from 'react';

import './ScreenshotDemo.css';

function ScreenshotDemo(props) {
  const { screenshots } = props;
  return (
    <div className="ScreenshotDemo">
      {screenshots.map((screenshot, index) => (
        <img key={index} src={screenshot} alt={`screenshot${index}`} />
      ))}
    </div>
  );
}

export default ScreenshotDemo;
