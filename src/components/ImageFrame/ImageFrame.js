import React from 'react';
import placeholder from '../../img/overlay.png';
import './ImageFrame.css';

function ImageFrame(props) {
  const { headerText, anchorId } = props;

  const filters = [
    'filter1',
    'filter2',
    'filter3',
    'filter4',
    'filter5',
    'filter6',
    'filter7'
  ];

  const randomFilter = () => {
    return filters[Math.floor(Math.random() * filters.length)];
  };

  return (
    <div className={`ImageFrame ${randomFilter()}`} id={anchorId}>
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
