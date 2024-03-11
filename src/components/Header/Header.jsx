import React from 'react';
import * as S from './Header.style';
import logo from '../../assets/another_day_logo.png';
import { FiShoppingCart, FiEdit2 } from 'react-icons/fi';

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderLogoBox>
          <S.HeaderLogoImg src={logo} />
          <S.HeaderLogoH1>Another Day</S.HeaderLogoH1>
        </S.HeaderLogoBox>
        <S.HeaderNav>
          <S.HeaderList>
            <S.HeaderItem>products</S.HeaderItem>
            <S.HeaderItem>
              <S.HeaderIconButton>
                <FiShoppingCart />
              </S.HeaderIconButton>
            </S.HeaderItem>
            <S.HeaderItem>
              <S.HeaderIconButton>
                <FiEdit2 />
              </S.HeaderIconButton>
            </S.HeaderItem>
            <S.HeaderItem>
              <S.HeaderSignButton>로그인</S.HeaderSignButton>
            </S.HeaderItem>
          </S.HeaderList>
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
}
