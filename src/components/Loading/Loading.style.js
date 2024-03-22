import styled from 'styled-components';

export const LoadingBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.h1`
  font-family: 'Ownglyph';
  font-size: 2rem;
  font-weight: bold;
`;

export const LoadingImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
