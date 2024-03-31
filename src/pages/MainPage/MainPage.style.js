import styled, { keyframes } from 'styled-components';

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
  grid-auto-rows: max-content;
  column-gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1280px) {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
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
  justify-content: center;
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
    align-items: center;
    height: 200px;
  }
`;

export const MainPageProductImg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: fit-content;
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

export const MainPageProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const MainPageProductInfoText = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const MainPageRecommendMenuBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const MainPageRecommendMenuTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const swing = keyframes`
  0% {
    transform: rotate(25deg);
  }

  50% {
    transform: rotate(0deg) translateX(10px) translateY(10px);
  }

  100% {
    transform: rotate(-25deg) translateX(20px) translateY(10px);
  }
`;

export const MainPageRecommendMenuImg = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: -1rem;
  right: -1.5rem;
  transform: rotate(25deg);
  animation: ${swing} 1.5s linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
    top: -0.8rem;
    right: -0.8rem;
  }
`;
