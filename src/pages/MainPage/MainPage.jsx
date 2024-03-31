import React from 'react';
import * as S from './MainPage.style';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import useProducts from '../../hooks/useProducts';

export default function MainPage() {
  const {
    productsQuery: { isFetching, isLoading, isError, data },
  } = useProducts();

  const navigate = useNavigate();

  const handleMoveToProductPage = (product) => {
    navigate(`/products/${product.id}`, { state: product });
  };

  if (isFetching) return <Loading>Fetching...</Loading>;
  if (isLoading) return <Loading>Loading...</Loading>;
  if (isError) return <Loading>Something is wrong!</Loading>;

  return (
    <S.MainPageLayout>
      <S.MainPageBannerBox>
        <S.MainPageBannerTitleBox>
          <S.MainPageBannerTitle>Another Day</S.MainPageBannerTitle>
          <S.MainPageBannerSubTitle>Another feeling</S.MainPageBannerSubTitle>
        </S.MainPageBannerTitleBox>
      </S.MainPageBannerBox>

      <S.MainPageRecommendMenuBox>
        <S.MainPageRecommendMenuTitle>베스트 메뉴</S.MainPageRecommendMenuTitle>
        <S.MainPageRecommendMenuImg src={'/assets/star.png'} alt="별" />
      </S.MainPageRecommendMenuBox>
      <S.MainPageProductListSection>
        {Object.values(data).map((product, index) => {
          if (index < 4) {
            return (
              <S.MainPageProductCard
                key={product.id}
                onClick={() => handleMoveToProductPage(product)}
              >
                <S.MainPageProductImg src={product.image} />
                <S.MainPageProductInfoBox>
                  <S.MainPageProductTitle>
                    {product.title}
                  </S.MainPageProductTitle>
                  <S.MainPageProductInfoText>
                    {product.description}
                  </S.MainPageProductInfoText>
                </S.MainPageProductInfoBox>
              </S.MainPageProductCard>
            );
          } else {
            return null;
          }
        })}
      </S.MainPageProductListSection>
    </S.MainPageLayout>
  );
}
