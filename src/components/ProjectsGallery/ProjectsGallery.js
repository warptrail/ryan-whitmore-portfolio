import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsData from './ProjectsData';

import './ProjectsGallery.css';

function ProjectsGallery() {
  const renderProjectCards = () => {
    return projectsData.map((project, index) => {
      return <ProjectCard key={index} projectsData={project} />;
    });
  };

  return <section className="ProjectsGallery">{renderProjectCards()}</section>;
}

export default ProjectsGallery;
