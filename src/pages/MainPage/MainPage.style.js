import styled from 'styled-components';

export const MainPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Ownglyph';
`;

export const MainPageBannerBox = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 1)
    ),
    url('/assets/cafe_banner.png');
  background-repeat: no-repeat, no-repeat;
  background-size: cover;
  background-position: 50%;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const MainPageBannerTitleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPageBannerTitle = styled.p`
  margin: 0;
  font-size: 3rem;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainPageBannerSubTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const MainPageProductListSection = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  row-gap: 4rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1280px) {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const MainPageProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 gray;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const MainPageProductImg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: auto;
    height: 200px;
  }
`;

export const MainPageProductInfoBox = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MainPageProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const MainPageProductInfoText = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin: 0;
  text-align: center;
`;
