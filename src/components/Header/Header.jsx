import React, { useEffect, useState } from 'react';
import * as S from './Header.style';
import { FiShoppingCart, FiEdit2 } from 'react-icons/fi';
import { auth } from '../../firebase';
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isLogined, setIsLogined] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithPopup(auth, provider)
          .then(() => {
            setIsLogined(true);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsLogined(false);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const sessionUserData = () => {
    for (const key of Object.keys(sessionStorage)) {
      if (key.includes('firebase:authUser')) {
        return JSON.parse(sessionStorage.getItem(key));
      }
    }
  };

  useEffect(() => {
    if (sessionUserData()) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, []);

  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderLogoBox onClick={() => navigate('/')}>
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
            {isLogined ? (
              <>
                {sessionUserData().uid === process.env.REACT_APP_ADMIN_UID && (
                  <S.HeaderItem>
                    <S.HeaderIconButton
                      onClick={() => {
                        navigate('/create');
                      }}
                    >
                      <FiEdit2 />
                    </S.HeaderIconButton>
                  </S.HeaderItem>
                )}

                <S.HeaderUserInfoItem>
                  <S.HeaderUserAvatarImg
                    src={sessionUserData().photoURL}
                    alt="user profile img"
                  />
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
