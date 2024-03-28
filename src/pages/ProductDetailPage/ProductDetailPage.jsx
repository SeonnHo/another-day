import React, { useState } from 'react';
import * as S from './ProductDetailPage.style';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';

export default function ProductDetailPage() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  const [selected, setSelected] = useState('S');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleAddToMyCart = () => {
    setIsLoading(true);

    const storageItem = localStorage.getItem('cartItem');
    const { id, image, title, price } = product;
    if (!storageItem) {
      localStorage.setItem(
        'cartItem',
        JSON.stringify([
          {
            id,
            image,
            title,
            price: addExtraPriceBySize(price, selected),
            totalPrice: addExtraPriceBySize(price, selected),
            size: selected,
            count: 1,
          },
        ])
      );
    } else {
      const item = JSON.parse(storageItem);
      item.push({
        id,
        image,
        title,
        price: addExtraPriceBySize(price, selected),
        totalPrice: addExtraPriceBySize(price, selected),
        size: selected,
        count: 1,
      });
      const data = JSON.stringify(item);
      localStorage.setItem('cartItem', data);
    }
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleMoveToMyCartPage = () => {
    navigate('/carts', { replace: true });
  };

  return (
    <>
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

            <S.ProductDetailPageButton onClick={handleAddToMyCart}>
              장바구니 추가
            </S.ProductDetailPageButton>
          </S.ProductDetailPageColumnBox>
        </S.ProductDetailPageProductInfoSection>
      </S.ProductDetailPageLayout>
      {isLoading && <Loading>장바구니에 담고 있어요.</Loading>}
      {isSuccess && (
        <Modal
          onConfirm={handleMoveToMyCartPage}
          onCancel={() => setIsSuccess(false)}
        >
          장바구니에 잘 담았어요!
          <br />
          장바구니 페이지로 이동할까요?
        </Modal>
      )}
    </>
  );
}
