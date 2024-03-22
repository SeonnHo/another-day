import React from 'react';
import * as S from './Header.style';
import { FiShoppingCart, FiEdit2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderLogoBox onClick={() => navigate('/')}>
          <S.HeaderLogoImg src={'/assets/another_day_logo.png'} />
          <S.HeaderLogoH1>Another Day</S.HeaderLogoH1>
        </S.HeaderLogoBox>
        <S.HeaderNav>
          <S.HeaderList>
            <S.HeaderItem>products</S.HeaderItem>
            {user ? (
              <>
                <S.HeaderItem>
                  <S.HeaderIconButton>
                    <FiShoppingCart />
                  </S.HeaderIconButton>
                </S.HeaderItem>

                {user.isAdmin && (
                  <S.HeaderItem>
                    <S.HeaderIconButton
                      onClick={() => {
                        navigate('/products/new');
                      }}
                    >
                      <FiEdit2 />
                    </S.HeaderIconButton>
                  </S.HeaderItem>
                )}

                <S.HeaderUserInfoItem>
                  <S.HeaderUserAvatarImg
                    src={user.photoURL}
                    alt="user profile img"
                  />
                </S.HeaderUserInfoItem>
                <S.HeaderItem>
                  <S.HeaderSignButton onClick={logout}>
                    로그아웃
                  </S.HeaderSignButton>
                </S.HeaderItem>
              </>
            ) : (
              <S.HeaderItem>
                <S.HeaderSignButton onClick={login}>로그인</S.HeaderSignButton>
              </S.HeaderItem>
            )}
          </S.HeaderList>
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
}
