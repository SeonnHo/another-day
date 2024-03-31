import React from 'react';
import * as S from './MyCartPage.style';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Loading from '../../components/Loading/Loading';
import useCart from '../../hooks/useCart';

const SHIPPING = 3000;

export default function MyCartPage() {
  const {
    cartQuery: { isLoading, data: itemList },
    addOrUpdateItem,
    removeItem,
  } = useCart();

  const handleMinus = (item) => {
    if (item.quantity < 2) return;
    addOrUpdateItem.mutate({ ...item, quantity: item.quantity - 1 });
  };

  const handlePlus = (item) => {
    addOrUpdateItem.mutate({ ...item, quantity: item.quantity + 1 });
  };

  const handleRemove = (item) => {
    removeItem.mutate(item);
  };

  if (isLoading) return <Loading>Loading...</Loading>;

  const totalPrice =
    itemList &&
    itemList
      .map((itemBySize) =>
        Object.values(itemBySize).reduce(
          (prev, current) => prev + parseInt(current.price) * current.quantity,
          0
        )
      )
      .reduce((prev, current) => prev + current, 0);

  return (
    <S.MyCartPageLayout>
      {itemList.length === 0 ? (
        <S.MyCartPageNotFoundMessageSection>
          <S.MyCartPageNotFoundMessage>
            장바구니에 상품을 담지 않았어요.
          </S.MyCartPageNotFoundMessage>
        </S.MyCartPageNotFoundMessageSection>
      ) : (
        <>
          <S.MyCartPageItemListSection>
            {itemList.map((itemBySize) => {
              return Object.values(itemBySize).map((item) => {
                console.log(item.size);
                return (
                  <S.MyCartPageItemBox key={item.id + item.size}>
                    <S.MyCartPageItemImg
                      src={item.image}
                      alt={`${item.title} 사진`}
                    />
                    <S.MyCartPageItemInfoBox>
                      <S.MyCartPageItemTitle>
                        {item.title}
                      </S.MyCartPageItemTitle>
                      <S.MyCartPageItemSize>{item.size}</S.MyCartPageItemSize>
                      <S.MyCartPageItemPrice>
                        {(item.price * item.quantity).toLocaleString('ko-KR')}원
                      </S.MyCartPageItemPrice>
                    </S.MyCartPageItemInfoBox>

                    <S.MyCartPageItemControlBox>
                      <S.MyCartPageItemControlButton
                        onClick={() => handleMinus(item)}
                      >
                        <FiMinusCircle />
                      </S.MyCartPageItemControlButton>

                      <S.MyCartPageItemCount>
                        {item.quantity}
                      </S.MyCartPageItemCount>

                      <S.MyCartPageItemControlButton
                        onClick={() => handlePlus(item)}
                      >
                        <FiPlusCircle />
                      </S.MyCartPageItemControlButton>

                      <S.MyCartPageItemControlButton
                        onClick={() => handleRemove(item)}
                      >
                        <RiDeleteBin5Fill />
                      </S.MyCartPageItemControlButton>
                    </S.MyCartPageItemControlBox>
                  </S.MyCartPageItemBox>
                );
              });
            })}
          </S.MyCartPageItemListSection>

          <S.MyCartPageOrderSection>
            <S.MyCartPageOrderBox>
              <S.MyCartPageOrderFlexBox>
                <S.MyCartPageOrderPriceText>
                  주문 금액
                </S.MyCartPageOrderPriceText>
                <S.MyCartPageOrderPriceText>
                  {totalPrice.toLocaleString('ko-KR')}원
                </S.MyCartPageOrderPriceText>
              </S.MyCartPageOrderFlexBox>
              <S.MyCartPageOrderFlexBox>
                <S.MyCartPageOrderPriceText>배달비</S.MyCartPageOrderPriceText>
                <S.MyCartPageOrderPriceText>
                  {SHIPPING.toLocaleString('ko-KR')}원
                </S.MyCartPageOrderPriceText>
              </S.MyCartPageOrderFlexBox>

              <S.MyCartPageDivider />

              <S.MyCartPageOrderFlexBox>
                <S.MyCartPageOrderTotalPriceText>
                  결제 금액
                </S.MyCartPageOrderTotalPriceText>
                <S.MyCartPageOrderTotalPriceText>
                  {(totalPrice + SHIPPING).toLocaleString('ko-KR')}원
                </S.MyCartPageOrderTotalPriceText>
              </S.MyCartPageOrderFlexBox>
            </S.MyCartPageOrderBox>
            <S.MyCartPageOrderButton>
              {' '}
              {(totalPrice + SHIPPING).toLocaleString('ko-KR')}
              원&nbsp;•&nbsp;주문하기
            </S.MyCartPageOrderButton>
          </S.MyCartPageOrderSection>
        </>
      )}
    </S.MyCartPageLayout>
  );
}
