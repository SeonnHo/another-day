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
    url('assets/cafe_banner.png');
  background-repeat: no-repeat, no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const MainPageBannerBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 1)
  );
`;

export const MainPageBannerImg = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
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
