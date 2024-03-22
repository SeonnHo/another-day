import React from 'react';
import * as S from './Loading.style';
import { createPortal } from 'react-dom';

export default function Loading() {
  return (
    <>
      {createPortal(
        <S.LoadingBackdrop>
          <S.LoadingBox>
            <S.LoadingText>상품 등록 중입니다.</S.LoadingText>
            <S.LoadingImg src={'/assets/spinner2.gif'} alt="spinner" />
          </S.LoadingBox>
        </S.LoadingBackdrop>,
        document.body
      )}
    </>
  );
}
