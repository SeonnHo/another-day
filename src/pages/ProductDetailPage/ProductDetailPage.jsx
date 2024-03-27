import React, { useState } from 'react';
import * as S from './ProductDetailPage.style';
import { useLocation } from 'react-router-dom';

export default function ProductDetailPage() {
  const { state: product } = useLocation();

  const [selected, setSelected] = useState('S');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const addExtraPriceBySize = (price, size) => {
    switch (size) {
      case 'S':
        return price;

      case 'M':
        return price + 500;

      case 'L':
        return price + 1000;

      default:
        return price;
    }
  };

  return (
    <S.ProductDetailPageLayout>
      <S.ProductDetailPageProductImageSection>
        <S.ProductDetailPageProductImg
          src={product.image}
          alt={`${product.title} 사진`}
        />
      </S.ProductDetailPageProductImageSection>

      <S.ProductDetailPageProductInfoSection>
        <S.ProductDetailPageProductTitle>
          {product.title}
        </S.ProductDetailPageProductTitle>
        <S.ProductDetailPageProductDescription>
          {product.description}
        </S.ProductDetailPageProductDescription>
        <S.ProductDetailPageColumnBox>
          <S.ProductDetailPageProductPriceBox>
            <S.ProductDetailPageProductSizeSelect
              value={selected}
              onChange={handleChange}
            >
              <optgroup label="사이즈">
                {product.size.map((size) => {
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })}
              </optgroup>
            </S.ProductDetailPageProductSizeSelect>
            <S.ProductDetailPageProductPrice>
              {addExtraPriceBySize(product.price, selected).toLocaleString(
                'ko-KR'
              )}
              원
            </S.ProductDetailPageProductPrice>
          </S.ProductDetailPageProductPriceBox>

          <S.ProductDetailPageButton>장바구니 추가</S.ProductDetailPageButton>
        </S.ProductDetailPageColumnBox>
      </S.ProductDetailPageProductInfoSection>
    </S.ProductDetailPageLayout>
  );
}
