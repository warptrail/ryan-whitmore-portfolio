import React from 'react';
// import { scroller } from 'react-scroll';

import { H2 } from '../HeaderElements';

import {
  ProjectContainer,
  ProjectIcon,
  ProjectH3,
  ProjectP,
  ProjectCard,
  ProjectWrapper,
  LinkBox,
  ProjectLink,
  IconGithub,
  IconPlay,
  MoreInfoLink
} from './ProjectSectionElements';

import { projectData } from '../../Data';

const headerText = 'Project Gallery';

const ProjectSection = ({ marginTop }) => {
  // const scrollToSection = () => {
  //   scroller.scrollTo('projects', {
  //     duration: 50,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //     offset: -70
  //   });
  // };

  const renderProjectSection = () => {
    const cards = projectData.map((project, i) => {
      const key = `${project.id}`;
      return (
        <ProjectCard id={key} key={key}>
          <ProjectIcon src={project.icon} />

          <ProjectH3>{project.name}</ProjectH3>

          <ProjectP>{project.description}</ProjectP>

          <LinkBox>
            <MoreInfoLink to={project.link}>More Info</MoreInfoLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href={project.repoLink}
            >
              Repo
              <IconGithub />
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href={project.demoLink}
            >
              Demo <IconPlay />
            </ProjectLink>
          </LinkBox>
        </ProjectCard>
      );
    });
    return <ProjectWrapper>{cards}</ProjectWrapper>;
  };

  return (
    <ProjectContainer id="projects" className="projects" marginTop>
      <H2 wideText center>
        {headerText}
      </H2>
      {renderProjectSection()}
    </ProjectContainer>
  );
};

export default ProjectSection;
