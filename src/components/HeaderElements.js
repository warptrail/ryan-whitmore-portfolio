import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin: 10px 0;
  text-align: ${(props) => (props.center ? 'center' : 'left')};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
