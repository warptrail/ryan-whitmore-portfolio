import styled, { css } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const buttonStyles = css`
  border-radius: ${(props) => (props.side ? '0px 50px 50px 0' : '50px')};
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
  max-width: ${(props) => (props.fixedWidth ? '240px' : '350px')};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '0'};

  &:hover {
    color: black;
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '##01BF71')};
  }

  @media screen and (min-width: 375px) {
    font-size: ${({ fontBig }) =>
      fontBig ? 'clamp(1.4375rem, 0.0982rem + 5.7143vw, 1.8125rem)' : '16px'};
  }
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const ScrollButton = styled(LinkScroll)`
  ${buttonStyles}
`;

export const ButtonWrap = styled.div`
  ${buttonStyles}
`;

export const RouterButton = styled(LinkRouter)`
  text-decoration: none;
`;

export const IconArrowLeft = styled(FaArrowLeft)`
  margin-right: 8px;
`;
