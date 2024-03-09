import React from 'react';
import * as S from './DrawerOverlay.style';

export default function DrawerOverlay({ isCloseDrawer }) {
  return (
    <S.DrawerOverlayLayout
      $isCloseDrawer={isCloseDrawer}
    ></S.DrawerOverlayLayout>
  );
}
