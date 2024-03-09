import React, { useState } from 'react';
import * as S from './Header.style';
import logo from '../../assets/another_day_logo.png';
import useWindowSize from '../../hooks/useWindowSize';
import { FiMenu } from 'react-icons/fi';
import NavDrawer from '../NavDrawer/NavDrawer';

export default function Header() {
  const windowSize = useWindowSize();
  const [isShowBackdrop, setIsShowBackdrop] = useState(false);
  const [isCloseDrawer, setIsCloseDrawer] = useState(false);

  const openDrawer = () => {
    setIsShowBackdrop(true);
  };

  const closeDrawer = () => {
    setIsCloseDrawer(true);
    setTimeout(() => {
      setIsShowBackdrop(false);
      setIsCloseDrawer(false);
    }, 600);
  };

  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderLogoBox>
          <S.HeaderLogoImg src={logo} />
          <S.HeaderLogoH1>Another Day</S.HeaderLogoH1>
        </S.HeaderLogoBox>
        {windowSize.width > 1024 && (
          <S.HeaderNav>
            <S.HeaderList>
              <S.HeaderItem>home</S.HeaderItem>
              <S.HeaderItem>products</S.HeaderItem>
              <S.HeaderItem>about</S.HeaderItem>
              <S.HeaderItem>my page</S.HeaderItem>
            </S.HeaderList>
          </S.HeaderNav>
        )}

        {windowSize.width < 1024 && (
          <>
            <S.HeaderButton onClick={openDrawer}>
              <FiMenu />
            </S.HeaderButton>
            {isShowBackdrop && (
              <NavDrawer
                isCloseDrawer={isCloseDrawer}
                closeDrawer={closeDrawer}
              />
            )}
          </>
        )}
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
}
