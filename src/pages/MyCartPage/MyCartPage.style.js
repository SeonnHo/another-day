import styled from 'styled-components';

export const MyCartPageLayout = styled.main`
  width: 100%;
  min-height: calc(100vh - 100px);
  font-family: 'Ownglyph';

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 80px);
  }
`;

export const MyCartPageNotFoundMessageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyCartPageNotFoundMessage = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const MyCartPageItemListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const MyCartPageItemBox = styled.div`
  display: flex;
  margin: 1.5rem 0 0 0;
  width: 800px;

  &:first-child {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

export const MyCartPageItemImg = styled.img`
  width: 180px;
  background-color: #f2e8da;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

export const MyCartPageItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const MyCartPageItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MyCartPageItemSize = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffb2a5;
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MyCartPageItemPrice = styled.p`
  font-size: 1.2rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MyCartPageItemControlButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:last-child {
    margin-left: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;

    & > svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const MyCartPageItemControlBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const MyCartPageItemCount = styled.p`
  font-size: 1rem;
  margin: 0 1rem;
`;

export const MyCartPageOrderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyCartPageOrderBox = styled.div`
  width: 800px;
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    width: calc(100% - 2rem);
    margin-bottom: 100px;
  }
`;

export const MyCartPageOrderFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MyCartPageOrderPriceText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const MyCartPageOrderTotalPriceText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MyCartPageDivider = styled.div`
  border: 1px solid #eee;
`;

export const MyCartPageOrderButton = styled.button`
  width: 500px;
  border: none;
  border-radius: 0.5rem;
  background-color: #ffbe93;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  padding: 1rem 0;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background-color: #fa9a85;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 2rem);
    font-size: 0.8rem;
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0;
  }
`;
