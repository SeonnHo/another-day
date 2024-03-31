import React, { useState } from 'react';
import * as S from './ProductDetailPage.style';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import useCart from '../../hooks/useCart';
import { useAuthContext } from '../../context/AuthContext';

export default function ProductDetailPage() {
  const { state: product } = useLocation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [selected, setSelected] = useState('사이즈를 선택해주세요.');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const { addOrUpdateItem } = useCart();

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
    if (!user) {
      setIsGuest(true);
      return;
    }
    if (selected === '사이즈를 선택해주세요.') {
      setIsSelected(true);
      return;
    }
    setIsLoading(true);
    const { id, image, title, price } = product;
    addOrUpdateItem.mutate(
      {
        id,
        image,
        title,
        price: addExtraPriceBySize(price, selected),
        size: selected,
        quantity: 1,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          setIsSuccess(true);
        },
      }
    );
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
                <option value="사이즈를 선택해주세요." disabled>
                  사이즈를 선택해주세요.
                </option>
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
      {isGuest && (
        <Modal
          onConfirm={() => {
            setIsGuest(false);
            navigate('/', { replace: true });
          }}
        >
          로그인이 필요한 서비스입니다.
          <br />
          로그인 후 이용해주세요.
        </Modal>
      )}
      {isSelected && (
        <Modal onConfirm={() => setIsSelected(false)}>
          사이즈를 선택 후 장바구니에 담아주세요.
        </Modal>
      )}
    </>
  );
}
