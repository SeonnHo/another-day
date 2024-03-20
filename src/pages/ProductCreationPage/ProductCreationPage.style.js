import styled from 'styled-components';

export const ProductCreationPageLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  min-height: calc(100vh - 80px);
  margin-top: 80px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 60px);
    margin-top: 60px;
  }
`;

export const ProductCreationPageCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 gray;
  padding: 1rem;
  transition: all 0.5s;
  margin-right: 4rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem 0 gray;
  }

  @media screen and (max-width: 1024px) {
    margin: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    padding: 0.5rem;
  }
`;

export const ProductCreationPageFileUploadInput = styled.input`
  display: none;
`;

export const ProductCreationPageFileUploadLabel = styled.label`
  height: 400px;
  border: 4px dashed gray;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & > svg {
    width: 3rem;
    height: 3rem;
    color: gray;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
    border: 2px dashed gray;
    border-radius: 1rem;

    & > svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const ProductCreationPagePreviewImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  cursor: pointer;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const ProductCreationPagePreviewImg = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const ProductCreationPageInputCard = styled.section`
  display: flex;
  width: 400px;
  min-height: 400px;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 gray;

  @media screen and (max-width: 1024px) {
    margin: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    min-height: 300px;
  }
`;

export const ProductCreationPageInputCardTitle = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-weight: bold;
  font-family: 'Ownglyph';
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const ProductCreationPageInputCardButton = styled.button`
  border: 0;
  outline: 0;
  background-color: ${(props) => props.$backgroundColor || `#ffbe98`};
  color: ${(props) => props.textColor || `white`};
  font-weight: bold;
  padding: 0.5rem 0;
  flex-basis: 100px;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ProductCreationPageInputCardButtonBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  margin-top: 1rem;
`;
