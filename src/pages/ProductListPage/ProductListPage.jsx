import React from 'react';
import * as S from './ProductListPage.style';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

export default function ProductListPage() {
  const {
    productsQuery: { isFetching, isLoading, isError, data },
  } = useProducts();

  const navigate = useNavigate();

  const handleMoveToProductDetailPage = (product) => {
    navigate(`/products/${product.id}`, { state: product });
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
