import styled from 'styled-components';

export const NotFoundPageLayout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Ownglyph';
`;

export const NotFoundPageBox = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const NotFoundPageContent = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  white-space: pre-wrap;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const NotFoundPageButton = styled.button`
  border: none;
  background-color: #ffbe98;
  color: white;
  border-radius: 0.5rem;
  width: 50%;
  padding: 0.7rem 0;
  font-family: 'Ownglyph';
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fa9a85;
  }
`;
