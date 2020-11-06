/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import ScreenshotDemo from '../ScreenshotDemo/ScreenshotDemo';

import './ProjectCard.css';

function ProjectCard(props) {
  const [open, setOpen] = useState(false);

  const showScreenshots = () => setOpen(!open);

  const {
    title,
    stack,
    demoLink,
    description,
    githubLink,
    demoImg,
    screenshots
  } = props.projectsData;

  const renderDefaultCard = () => {
    return (
      <div className="ProjectCard">
        <div
          className="project-header-img"
          style={{ backgroundImage: `url(${demoImg})` }}
        >
          <a target="_blank" rel="noopener noreferrer" href={demoLink}>
            <h3>{title}</h3>
          </a>
        </div>

        <p className="ProjectCard-description">{description}</p>
        <p className="ProjectCard-stack">{stack} </p>
        <div className="ProjectCard-links">
          <a target="_blank" rel="noopener noreferrer" href={demoLink}>
            Demo
          </a>
          <a target="_blank" rel="noopener noreferrer" href={githubLink}>
            Github
          </a>
        </div>
        <button
          className="ProjectCard-toggle-screenshots"
          type="button"
          onClick={showScreenshots}
        >
          Screenshots
        </button>
      </div>
    );
  };

  const renderScreenshotCard = () => {
    return (
      <div className="screenshots">
        <button type="button" onClick={showScreenshots}>
          &#8592; Go back
        </button>
        <h4 className="screenshots-title">{title}</h4>
        <ScreenshotDemo screenshots={screenshots} />
      </div>
    );
  };

  return <>{open ? renderScreenshotCard() : renderDefaultCard()}</>;
}

export default ProjectCard;
