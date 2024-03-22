import React from 'react';
import * as S from './Modal.style';
import { createPortal } from 'react-dom';

export default function Modal({ content, onClick }) {
  return (
    <>
      {createPortal(
        <S.ModalBackdrop>
          <S.ModalCardBox>
            <S.ModalCard>
              <S.ModalContentBox>
                <S.ModalContent>{content}</S.ModalContent>
              </S.ModalContentBox>
              <S.ModalButtonBox>
                <S.ModalButton onClick={onClick}>확인</S.ModalButton>
              </S.ModalButtonBox>
            </S.ModalCard>
          </S.ModalCardBox>
        </S.ModalBackdrop>,
        document.body
      )}
    </>
  );
}
