import React from 'react';

import {
  ProjectSection,
  PrjH1,
  PrjH2,
  PrjContent,
  ScreenshotGallery,
  ScreenshotFrame,
  Screenshot
} from './ProjectElements';

import {
  LinkBox,
  ProjectLink,
  IconGithub,
  IconPlay
} from '../ProjectSection/ProjectSectionElements';
import { RouterButton, IconArrowLeft, ButtonWrap } from '../ButtonElement';

const Project = ({ project }) => {
  return (
    <ProjectSection>
      <ButtonWrap primary dark fixedWidth marginBottom={22} side>
        <RouterButton to="/projects">
          <IconArrowLeft /> Project Gallery
        </RouterButton>
      </ButtonWrap>

      <PrjH1>{project.name}</PrjH1>
      {/* If links exist, generate them here */}
      <LinkBox>
        {project.repoLink ? (
          <ProjectLink
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo <IconGithub />
          </ProjectLink>
        ) : (
          ''
        )}
        {project.demoLink ? (
          <ProjectLink
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo <IconPlay />
          </ProjectLink>
        ) : (
          ''
        )}
      </LinkBox>
      <img src={project.icon} alt="logo" />

      <PrjH2>Screenshots</PrjH2>
      <ScreenshotGallery>
        {project.screenshots
          ? project.screenshots.map((pic, i) => (
              <ScreenshotFrame key={`prjScreenshot-${i + 1}`}>
                <Screenshot src={pic} />
              </ScreenshotFrame>
            ))
          : ''}
      </ScreenshotGallery>
      <PrjH2>More Detail</PrjH2>
      {project.detail.map((p, i) => (
        <PrjContent key={`prjDetail-${i + 1}`}>{p}</PrjContent>
      ))}
    </ProjectSection>
  );
};

export default Project;
