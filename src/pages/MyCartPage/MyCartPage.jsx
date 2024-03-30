import React, { useEffect, useState } from 'react';
import * as S from './MyCartPage.style';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const MINUS = 'minus';
const PLUS = 'plus';

export default function MyCartPage() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const storageItem = localStorage.getItem('cartItem');
    if (storageItem) {
      setItemList(JSON.parse(storageItem));
    }
  }, []);

  const handleItemCount = (type, cartItem) => {
    switch (type) {
      case MINUS:
        setItemList((prev) =>
          prev.map((item, index) => {
            if (
              item.title === cartItem.title &&
              item.size === cartItem.size &&
              cartItem.count > 1
            ) {
              const storageItemList = JSON.parse(
                localStorage.getItem('cartItem')
              );
              storageItemList[index].count = item.count - 1;
              storageItemList[index].totalPrice = item.price * (item.count - 1);
              localStorage.setItem('cartItem', JSON.stringify(storageItemList));
              return {
                ...item,
                count: item.count - 1,
                totalPrice: item.price * (item.count - 1),
              };
            }
            return item;
          })
        );
        break;

      case PLUS:
        setItemList((prev) =>
          prev.map((item, index) => {
            if (item.title === cartItem.title && item.size === cartItem.size) {
              const storageItemList = JSON.parse(
                localStorage.getItem('cartItem')
              );
              storageItemList[index].count = item.count + 1;
              storageItemList[index].totalPrice = item.price * (item.count + 1);
              localStorage.setItem('cartItem', JSON.stringify(storageItemList));
              return {
                ...item,
                count: item.count + 1,
                totalPrice: item.price * (item.count + 1),
              };
            }
            return item;
          })
        );
        break;

      default:
        return;
    }
  };

  const handleRemoveItem = (cartItem) => {
    setItemList((prev) =>
      prev.filter((item, index) => {
        if (item.title !== cartItem && item.size !== cartItem.size) {
          return true;
        }
        const storageItemList = JSON.parse(localStorage.getItem('cartItem'));
        console.log(storageItemList);
        const filterList = storageItemList.filter((_, idx) => index !== idx);
        localStorage.setItem('cartItem', JSON.stringify(filterList));
        return false;
      })
    );
  };

  const calculateTotalPrice = () => {
    const priceList = itemList.map((item) => item.totalPrice);
    console.log(priceList);
    let total = 0;
    for (const price of priceList) {
      total = total + price;
      console.log(total);
    }

    return total;
  };

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
            {itemList.map((item) => {
              return (
                <S.MyCartPageItemBox key={item.id + item.size}>
                  <S.MyCartPageItemImg
                    src={item.image}
                    alt={`${item.title} 사진`}
                  />
                  <S.MyCartPageItemInfoBox>
                    <S.MyCartPageItemTitle>{item.title}</S.MyCartPageItemTitle>
                    <S.MyCartPageItemSize>{item.size}</S.MyCartPageItemSize>
                    <S.MyCartPageItemPrice>
                      {item.totalPrice?.toLocaleString('ko-KR')}원
                    </S.MyCartPageItemPrice>
                  </S.MyCartPageItemInfoBox>

                  <S.MyCartPageItemControlBox>
                    <S.MyCartPageItemControlButton
                      onClick={() => handleItemCount(MINUS, item)}
                    >
                      <FiMinusCircle />
                    </S.MyCartPageItemControlButton>

                    <S.MyCartPageItemCount>{item.count}</S.MyCartPageItemCount>

                    <S.MyCartPageItemControlButton
                      onClick={() => handleItemCount(PLUS, item)}
                    >
                      <FiPlusCircle />
                    </S.MyCartPageItemControlButton>

                    <S.MyCartPageItemControlButton
                      onClick={() => handleRemoveItem(item)}
                    >
                      <RiDeleteBin5Fill />
                    </S.MyCartPageItemControlButton>
                  </S.MyCartPageItemControlBox>
                </S.MyCartPageItemBox>
              );
            })}
          </S.MyCartPageItemListSection>

          <S.MyCartPageOrderSection>
            <S.MyCartPageOrderBox>
              <S.MyCartPageOrderFlexBox>
                <S.MyCartPageOrderPriceText>
                  주문 금액
                </S.MyCartPageOrderPriceText>
                <S.MyCartPageOrderPriceText>
                  {calculateTotalPrice().toLocaleString('ko-KR')}원
                </S.MyCartPageOrderPriceText>
              </S.MyCartPageOrderFlexBox>
              <S.MyCartPageOrderFlexBox>
                <S.MyCartPageOrderPriceText>배달비</S.MyCartPageOrderPriceText>
                <S.MyCartPageOrderPriceText>
                  {(3000).toLocaleString('ko-KR')}원
                </S.MyCartPageOrderPriceText>
              </S.MyCartPageOrderFlexBox>

              <S.MyCartPageDivider />

              <S.MyCartPageOrderFlexBox>
                <S.MyCartPageOrderTotalPriceText>
                  결제 금액
                </S.MyCartPageOrderTotalPriceText>
                <S.MyCartPageOrderTotalPriceText>
                  {(calculateTotalPrice() + 3000).toLocaleString('ko-KR')}원
                </S.MyCartPageOrderTotalPriceText>
              </S.MyCartPageOrderFlexBox>
            </S.MyCartPageOrderBox>
            <S.MyCartPageOrderButton>
              {' '}
              {(calculateTotalPrice() + 3000).toLocaleString('ko-KR')}
              원&nbsp;•&nbsp;주문하기
            </S.MyCartPageOrderButton>
          </S.MyCartPageOrderSection>
        </>
      )}
    </S.MyCartPageLayout>
  );
}
