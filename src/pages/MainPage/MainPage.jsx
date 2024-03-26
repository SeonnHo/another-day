import React from 'react';
import * as S from './MainPage.style';
import { useQuery } from '@tanstack/react-query';
import { getProductList } from '../../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const { isFetching, isLoading, isError, data } = useQuery({
    queryKey: ['product list'],
    queryFn: () => getProductList(),
    staleTime: 1000 * 60 * 3,
  });

  const navigate = useNavigate();

  const handleMoveToProductPage = (product) => {
    navigate(`/products/${product.title}`, { state: product });
  };

  if (isFetching) return <div>Fetching...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something is wrong!</div>;

  return (
    <S.MainPageLayout>
      <S.MainPageBannerBox>
        <S.MainPageBannerTitleBox>
          <S.MainPageBannerTitle>Another Day</S.MainPageBannerTitle>
          <S.MainPageBannerSubTitle>Another feeling</S.MainPageBannerSubTitle>
        </S.MainPageBannerTitleBox>
      </S.MainPageBannerBox>

      <S.MainPageProductListSection>
        {Object.values(data).map((product) => {
          return (
            <S.MainPageProductCard
              onClick={() => handleMoveToProductPage(product)}
            >
              <S.MainPageProductImg src={product.image} />
              <S.MainPageProductInfoBox>
                <S.MainPageProductTitle>{product.title}</S.MainPageProductTitle>
                <S.MainPageProductInfoText>
                  {product.description}
                </S.MainPageProductInfoText>
              </S.MainPageProductInfoBox>
            </S.MainPageProductCard>
          );
        })}
      </S.MainPageProductListSection>
    </S.MainPageLayout>
  );
}
