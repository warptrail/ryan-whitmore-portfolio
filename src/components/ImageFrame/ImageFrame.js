import React from 'react';
import placeholder from '../../img/overlay.png';
import './ImageFrame.css';

function ImageFrame(props) {
  const { headerText, anchorId } = props;

  return (
    <div className="ImageFrame" id={anchorId}>
      <img
        src={placeholder}
        alt="h2 sub-header overlay for color-changing effect"
      />
      <div className="img-header">
        <h2>{headerText}</h2>
      </div>
    </div>
  );
}

export default ImageFrame;
