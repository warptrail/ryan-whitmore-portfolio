import React from 'react';

import {
  ProjectContainer,
  ProjectIcon,
  ProjectH3,
  ProjectP,
  ProjectCard,
  ProjectWrapper,
  SpotlightContainer,
  ReturnBtn,
  LinkBox,
  ProjectLink,
  ScreenshotGallery,
  ScreenshotFrame,
  Screenshot
} from './ProjectElements';

const ProjectSpotlight = ({ project, returnToGallery }) => {
  const { name, description, repoLink, demoLink, screenshots } = project;

  return (
    <SpotlightContainer>
      <ReturnBtn onClick={returnToGallery}>Return to Gallery</ReturnBtn>
      <ProjectH3>{name}</ProjectH3>
      <ProjectP spotLight>{description}</ProjectP>

      {/* If links exist, generate them here */}
      <LinkBox>
        {repoLink ? (
          <ProjectLink
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </ProjectLink>
        ) : (
          ''
        )}
        {demoLink ? (
          <ProjectLink
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </ProjectLink>
        ) : (
          ''
        )}
      </LinkBox>
      <ScreenshotGallery>
        {screenshots
          ? screenshots.map((pic) => (
              <ScreenshotFrame>
                <Screenshot src={pic} />
              </ScreenshotFrame>
            ))
          : ''}
      </ScreenshotGallery>
    </SpotlightContainer>
  );
};

export default ProjectSpotlight;
