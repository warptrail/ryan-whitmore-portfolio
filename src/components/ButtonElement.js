import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#06D932' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '13px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#071200' : '#fff')};
  font-size: ${({ fontBig }) =>
    fontBig ? 'clamp(1.3125rem, 0.9792rem + 1.6667vw, 1.5rem)' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: black;
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '##01BF71')};
  }
`;
