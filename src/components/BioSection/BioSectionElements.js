import styled, { css } from 'styled-components';

const colorChooser = (i) => {
  let color;
  const colorCode = i % 5;
  switch (colorCode) {
    case 0:
      color = '#802F2E'; // red
      break;
    case 1:
      color = '#36595A'; // blue
      break;
    case 2:
      color = '#4F2049'; // purple
      break;
    case 3:
      color = '#3C3B28'; // brown
      break;
    case 4:
      color = '#224C32'; // green
      break;
    default:
      color = 'inherent';
  }
  return color;
};

const bioPadding = css`
  padding: 0 calc(4vw + 12px);
`;

export const BioContainer = styled.div`
  /* height: 800px; */
  ${bioPadding}
  background-color: #071200;
  color: #fff;
  padding-bottom: 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const BioTitle = styled.h3`
  /* ${bioPadding} */
  font-size: 22px;
  padding-top: 30px;
  margin-bottom: 50px;
  color: #01bf71;

  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  /* margin: 20px 0; */
`;

export const BioContent = styled.p`
  /* ${bioPadding} */
  font-size: 20px;
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    font-size: clamp(1.2rem, 0.9217rem + 1.2048vw, 1.55rem);
    line-height: 1.5;
    max-width: 700px;
  }
`;

export const BioList = styled.ol`
  padding-left: 2em;
`;
export const BioListContent = styled.li`
  padding-left: 0.5em;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: clamp(1.3rem, 0.9217rem + 1.2048vw, 1.45rem);
  }
`;

export const StackBox = styled.div`
  width: 100%;
`;

export const StackList = styled.ul`
  ${bioPadding}
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StackCell = styled.li`
  display: flex;
  background: #cb3837;
  padding: 5px 6px;
  font-size: 18px;
  background: ${(props) => colorChooser(props.color)};
  margin: 2px 4px;
`;

export const IconFrame = styled.div`
  display: flex;
  margin-right: 6px;
`;
