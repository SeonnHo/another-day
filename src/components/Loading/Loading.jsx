import React from 'react';
import * as S from './Loading.style';
import { createPortal } from 'react-dom';

export default function Loading({ children }) {
  return (
    <>
      {createPortal(
        <S.LoadingBackdrop>
          <S.LoadingBox>
            <S.LoadingText>{children}</S.LoadingText>
            <S.LoadingImg src={'/assets/spinner.gif'} alt="spinner" />
          </S.LoadingBox>
        </S.LoadingBackdrop>,
        document.body
      )}
    </>
  );
}
