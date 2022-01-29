import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Project from '../components/Project';

// Import data and react-router parameter to match the project info through props
import { projectData } from '../Data';

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const param = useParams();
  const projectToDisplay = projectData.find((p) => p.param === param.projectId);

  return (
    <>
      <Project project={projectToDisplay} />
    </>
  );
};

export default ProjectPage;
