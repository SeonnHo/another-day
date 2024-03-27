import React from 'react';
import * as S from './ProductListPage.style';
import { getProductList } from '../../api/firebase';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

export default function ProductListPage() {
  const { isFetching, isLoading, isError, data } = useQuery({
    queryKey: ['product list'],
    queryFn: () => getProductList(),
    staleTime: 1000 * 60 * 3,
  });

  const navigate = useNavigate();

  const handleMoveToProductDetailPage = (product) => {
    navigate(`/products/${product.title}`, { state: product });
  };

  if (isFetching) return <Loading>Fetching...</Loading>;
  if (isLoading) return <Loading>Loading...</Loading>;
  if (isError) return <Loading>Something is wrong!</Loading>;

  return (
    <S.ProductListPageLayout>
      <S.ProductListPageProductListSection>
        {Object.values(data).map((product) => {
          return (
            <S.ProductListPageProductCard
              key={product.id}
              onClick={() => handleMoveToProductDetailPage(product)}
            >
              <S.ProductListPageProductImg
                src={product.image}
                alt={`${product.title} 사진`}
              />
              <S.ProductListPageProductInfoBox>
                <S.ProductListPageProductTitle>
                  {product.title}
                </S.ProductListPageProductTitle>
                <S.ProductListPageProductInfoText>
                  {product.description}
                </S.ProductListPageProductInfoText>
              </S.ProductListPageProductInfoBox>
            </S.ProductListPageProductCard>
          );
        })}
      </S.ProductListPageProductListSection>
    </S.ProductListPageLayout>
  );
}
