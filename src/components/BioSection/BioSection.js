import React from 'react';
import {
  BioContainer,
  BioTitle,
  BioContent,
  BioList,
  BioListContent
} from './BioSectionElements';
import MyStack from './MyStack';
import { bioData } from '../../Data';

const BioSection = () => {
  return (
    <BioContainer>
      <div id="bio">
        <BioTitle>More About Me</BioTitle>
        <BioContent>{bioData.paragraph1}</BioContent>
        <BioContent>{bioData.paragraph2}</BioContent>
      </div>

      <MyStack />
      <div id="background">
        <BioTitle>Background</BioTitle>
        <BioContent>{bioData.backgroundP1}</BioContent>
        <BioContent>{bioData.backgroundP2}</BioContent>
        <BioContent>{bioData.backgroundP3}</BioContent>
      </div>

      <BioList>
        {bioData.backgroundList.map((step, i) => (
          <BioListContent key={`blc-${i + 1}`}>{step}</BioListContent>
        ))}
      </BioList>
      <BioContent>{bioData.backgroundP4}</BioContent>
      <BioContent>{bioData.backgroundP5}</BioContent>
    </BioContainer>
  );
};

export default BioSection;
