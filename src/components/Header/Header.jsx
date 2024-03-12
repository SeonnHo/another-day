import React, { useState } from 'react';
import * as S from './Header.style';
import { FiShoppingCart, FiEdit2 } from 'react-icons/fi';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };

  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderLogoBox>
          <S.HeaderLogoImg src={'assets/another_day_logo.png'} />
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
            {user ? (
              <>
                <S.HeaderItem>
                  <S.HeaderIconButton>
                    <FiEdit2 />
                  </S.HeaderIconButton>
                </S.HeaderItem>
                <S.HeaderUserInfoItem>
                  <S.HeaderUserAvatarImg
                    src={user.photoURL}
                    alt="user profile img"
                  />
                  {user.displayName}
                </S.HeaderUserInfoItem>
                <S.HeaderItem>
                  <S.HeaderSignButton onClick={handleGoogleSignOut}>
                    로그아웃
                  </S.HeaderSignButton>
                </S.HeaderItem>
              </>
            ) : (
              <S.HeaderItem>
                <S.HeaderSignButton onClick={handleGoogleSignIn}>
                  로그인
                </S.HeaderSignButton>
              </S.HeaderItem>
            )}
          </S.HeaderList>
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
}
