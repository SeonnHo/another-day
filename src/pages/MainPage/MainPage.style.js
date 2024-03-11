import styled from 'styled-components';

export const MainPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const MainPageBannerBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const MainPageBannerBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MainPageBannerImg = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-family: sans-serif;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainPageBannerSubTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-family: sans-serif;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
