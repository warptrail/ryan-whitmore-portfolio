import React from 'react';
import { BioContainer, BioTitle, BioContent } from './BioSectionElements';
import MyStack from './MyStack';
import { bioData } from '../../Data';

const BioSection = () => {
  return (
    <BioContainer>
      <BioTitle>More About Me</BioTitle>
      <BioContent>{bioData.paragraph1}</BioContent>
      <BioContent>{bioData.paragraph2}</BioContent>
      <MyStack />
    </BioContainer>
  );
};

export default BioSection;
