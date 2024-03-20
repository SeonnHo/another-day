import React from 'react';
import * as S from './MainPage.style';

export default function MainPage() {
  return (
    <S.MainPageLayout>
      <S.MainPageBannerBox>
        <S.MainPageBannerTitleBox>
          <S.MainPageBannerTitle>Another Day</S.MainPageBannerTitle>
          <S.MainPageBannerSubTitle>Another feeling</S.MainPageBannerSubTitle>
        </S.MainPageBannerTitleBox>
      </S.MainPageBannerBox>
    </S.MainPageLayout>
  );
}
