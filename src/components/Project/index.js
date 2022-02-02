import React from 'react';

import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  ProjectRow2,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  Heading,
  ProjectText,
  TopLine,
  ProjectLogo,
  LinkContainer,
  ProjectLinkWrapper,
  ProjectLink,
  IconGithub,
  IconPlay,
  ScreenshotGallery,
  ScreenshotFrame,
  Screenshot
} from './ProjectElements';

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectRow>
          <Column1>
            <TextWrapper>
              <TopLine>Project Spotlight</TopLine>
              <Heading lightText> {project.name}</Heading>
              <ProjectLogo src={project.icon} alt="project logo" />
            </TextWrapper>
          </Column1>

          <Column2>
            <LinkContainer>
              <ProjectLinkWrapper>
                <ProjectLink
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo <IconGithub />
                </ProjectLink>
              </ProjectLinkWrapper>
              <ProjectLinkWrapper>
                <ProjectLink
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <IconPlay />{' '}
                </ProjectLink>
              </ProjectLinkWrapper>
            </LinkContainer>
            <TextWrapper>
              {project.detail.map((p, i) => (
                <ProjectText key={`prjtxt-${i}`}>{p}</ProjectText>
              ))}
            </TextWrapper>
          </Column2>
        </ProjectRow>

        <ProjectRow2>
          <Column3>
            <TopLine>Screenshots</TopLine>
            <ScreenshotGallery>
              {project.screenshots.map((img, i) => (
                <ScreenshotFrame key={`scrnsht-${i}`}>
                  <Screenshot src={img} />
                </ScreenshotFrame>
              ))}
            </ScreenshotGallery>
          </Column3>
        </ProjectRow2>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
