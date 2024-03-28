import React from 'react';
import * as S from './Modal.style';
import { createPortal } from 'react-dom';

export default function Modal({ children, onConfirm, onCancel }) {
  return (
    <>
      {createPortal(
        <S.ModalBackdrop>
          <S.ModalCardBox>
            <S.ModalCard>
              <S.ModalContentBox>
                <S.ModalContent>{children}</S.ModalContent>
              </S.ModalContentBox>
              <S.ModalButtonBox>
                <S.ModalButton onClick={onConfirm}>확인</S.ModalButton>
                {onCancel && (
                  <S.ModalButton
                    onClick={onCancel}
                    $backgroundColor="#bdbdbd"
                    $hoverBackgroundColor="gray"
                  >
                    취소
                  </S.ModalButton>
                )}
              </S.ModalButtonBox>
            </S.ModalCard>
          </S.ModalCardBox>
        </S.ModalBackdrop>,
        document.body
      )}
    </>
  );
}
