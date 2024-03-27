import styled from 'styled-components';

export const ProductListPageLayout = styled.main`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  font-family: 'Ownglyph';
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, white, #f2e8da);

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const ProductListPageProductListSection = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: max-content;
  column-gap: 4rem;
  row-gap: 4rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1280px) {
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProductListPageProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 gray;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: white;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductListPageProductImg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: auto;
    height: 200px;
  }
`;

export const ProductListPageProductInfoBox = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductListPageProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const ProductListPageProductInfoText = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin: 0;
  text-align: center;
`;
