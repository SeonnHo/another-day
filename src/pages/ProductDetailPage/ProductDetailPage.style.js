import styled from 'styled-components';

export const ProductDetailPageLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Ownglyph';

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductDetailPageProductImageSection = styled.section`
  width: 400px;
  margin-right: 5rem;

  @media screen and (max-width: 768px) {
    width: 200px;
    margin: 0;
  }
`;

export const ProductDetailPageProductImg = styled.img`
  width: 100%;
`;

export const ProductDetailPageProductInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px dashed #ffbe98;
  width: 400px;
  padding: 1rem;
  height: 400px;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const ProductDetailPageProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
`;

export const ProductDetailPageProductDescription = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin: 1rem 0;
  text-align: center;
`;

export const ProductDetailPageProductPriceBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductDetailPageProductSizeSelect = styled.select`
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  flex-grow: 1;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  color: black;
  background-image: url('/assets/arrow.png');
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
  background-size: 1rem;
`;

export const ProductDetailPageProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: end;
  margin: 0;
  flex-grow: 1;
`;

export const ProductDetailPageColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductDetailPageButton = styled.button`
  border: none;
  padding: 0.7rem 0;
  width: 100%;
  background-color: #ffbe98;
  color: white;
  font-weight: bold;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #fa9a85;
  }
`;
