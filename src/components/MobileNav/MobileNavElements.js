import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const MobNavContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 90vh;
  -webkit-clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    83% 91%,
    75% 100%,
    31% 92%,
    0 100%
  );
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    83% 91%,
    75% 100%,
    31% 92%,
    0 100%
  );

  background: rgb(6, 33, 0);
  background: linear-gradient(
    0deg,
    rgba(6, 33, 0, 0.95) 0%,
    rgba(32, 73, 23, 0.98) 35%,
    rgba(27, 32, 26, 0.94) 100%
  );
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isNavOpen }) => (isNavOpen ? '100%' : '0%')};
  top: ${({ isNavOpen }) => (isNavOpen ? '0' : '-100%')};
  overflow: hidden;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    color: red;
  }
`;

export const MobNaveWrapper = styled.div`
  color: #fff;
  /* background: black; */
`;

export const MenuUl = styled.ul`
  list-style: none;
  text-align: center;
  font-size: clamp(1.5rem, -1.5rem + 15vw, 2.25rem);
`;
export const MenuLi = styled.li`
  margin: 4.8vh 0;
`;

export const MenuLink = styled(LinkScroll)`
  /* color: red; */
  cursor: pointer;
`;
