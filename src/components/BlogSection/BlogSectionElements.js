import styled from 'styled-components';

export const BlogContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const BlogH2 = styled.h2`
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 40px;
  color: orange;
  font-size: clamp(2rem, 1.1325rem + 1.8072vw, 2.375rem);
`;

export const BlogContent = styled.article`
  padding: 10px;
`;

export const BlogP = styled.p`
  font-family: 'Merriweather', serif;
  color: #fff;
  font-size: clamp(1.125rem, 0.2575rem + 1.8072vw, 1.5rem);
  line-height: 1.4;
  margin: 30px 0;
`;
