import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const ModalCardBox = styled.div`
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.div`
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1rem 0 gray;
  padding: 1rem;
  box-sizing: border-box;
  animation: 0.5s ${scale} ease;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 200px;
    padding: 0.5rem;
  }
`;

export const ModalContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

export const ModalContent = styled.p`
  font-family: 'Ownglyph';
  font-size: 1.5rem;
  margin: 0;
  white-space: pre-wrap;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ModalButtonBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : '#ffbe98'};
  padding: 0.5rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: ${(props) =>
      props.$hoverBackgroundColor ? props.$hoverBackgroundColor : '#de8286'};
  }

  @media screen and (max-width: 768px) {
    padding: 0.4rem 1.5rem;
    font-size: 0.7rem;
  }
`;
