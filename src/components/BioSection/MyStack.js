import React from 'react';

import { AiFillHtml5 } from 'react-icons/ai';
import { BsTriangleFill } from 'react-icons/bs';
import {
  SiCss3,
  SiJquery,
  SiJavascript,
  SiReact,
  SiStyledComponents,
  SiReactrouter,
  SiPostgresql,
  SiHeroku,
  SiVisualstudiocode,
  SiGit,
  SiAdobephotoshop
} from 'react-icons/si';

import { FaBootstrap, FaNodeJs, FaNpm } from 'react-icons/fa';

import {
  BioTitle,
  IconFrame,
  StackBox,
  StackCell,
  StackList
} from './BioSectionElements';

import ExpressIcon from './ExpressIcon';

const stackData = [
  { name: 'HTML5', icon: <AiFillHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JAVASCRIPT', icon: <SiJavascript /> },
  { name: 'BOOTSTRAP', icon: <FaBootstrap /> },
  { name: 'JQUERY', icon: <SiJquery /> },
  { name: 'REACT', icon: <SiReact /> },
  { name: 'STYLED-COMPONENTS', icon: <SiStyledComponents /> },
  { name: 'REACT-ROUTER', icon: <SiReactrouter /> },
  { name: 'NODE.JS', icon: <FaNodeJs /> },
  { name: 'EXPRESS.JS', icon: <ExpressIcon /> },
  { name: 'POSTGRESQL', icon: <SiPostgresql /> },
  { name: 'NPM', icon: <FaNpm /> },
  { name: 'VERCEL', icon: <BsTriangleFill /> },
  { name: 'HEROKU', icon: <SiHeroku /> },
  { name: 'VISUAL STUDIO CODE', icon: <SiVisualstudiocode /> },
  { name: 'GIT', icon: <SiGit /> },
  { name: 'PHOTOSHOP', icon: <SiAdobephotoshop /> }
];

const MyStack = () => {
  const generateStack = stackData.map((stackItem, i) => (
    <StackCell key={`stack-${i + 1}`} color={i}>
      <IconFrame>{stackItem.icon}</IconFrame>
      {stackItem.name}
    </StackCell>
  ));

  return (
    <StackBox>
      <BioTitle>My Stack</BioTitle>
      <StackList>{generateStack}</StackList>
    </StackBox>
  );
};

export default MyStack;
