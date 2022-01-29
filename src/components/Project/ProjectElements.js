import styled from 'styled-components';

export const ProjectSection = styled.div`
  padding-top: 120px;
  /* height: 1000px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const PrjH1 = styled.h1`
  color: white;
  text-align: center;
`;

export const PrjH2 = styled.h2`
  color: white;
  text-align: center;
  font-size: 30px;
`;

export const PrjContent = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 10px 30px;
`;

export const ScreenshotGallery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScreenshotFrame = styled.div`
  padding: 12px 18px;
`;

export const Screenshot = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const ReturnBtn = styled.button`
  background: none;
  color: yellowgreen;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
