import React from 'react';

import './ProjectCard.css';

function ProjectCard(props) {
  const {
    title,
    stack,
    demoLink,
    description,
    githubLink
  } = props.projectsData;
  return (
    <div className="ProjectCard">
      <a target="_blank" rel="noopener noreferrer" href={demoLink}>
        <h3>{title}</h3>
      </a>
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
    </div>
  );
}

export default ProjectCard;
