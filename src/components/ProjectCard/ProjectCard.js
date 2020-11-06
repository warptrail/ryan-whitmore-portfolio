/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import LightBox from '../LightBox/LightBox';

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
    screenshot
  } = props.projectsData;

  const renderDefaultCard = () => {
    return (
      <div className="ProjectCard">
        <div
          className="screenshot-div"
          style={{ backgroundImage: `url(${screenshot})` }}
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
          Toggle Screenshots
        </button>
      </div>
    );
  };

  const renderScreenshotCard = () => {
    return (
      <div className="screenshots">
        <button onClick={showScreenshots}> close</button>
        <p>Stuff and things and stuff and things</p>
        <LightBox />
      </div>
    );
  };

  return <>{open ? renderScreenshotCard() : renderDefaultCard()}</>;
}

export default ProjectCard;
