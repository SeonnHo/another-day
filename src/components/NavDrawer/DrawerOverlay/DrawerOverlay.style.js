import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const close = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(-100%);
}
`;

export const DrawerOverlayLayout = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  z-index: 2;
  background-color: white;
  animation: ${({ $isCloseDrawer }) => ($isCloseDrawer ? close : slide)} 0.5s
    ease-in-out forwards;
`;
