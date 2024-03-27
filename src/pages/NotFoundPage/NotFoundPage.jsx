import React from 'react';
import * as S from './NotFoundPage.style';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <S.NotFoundPageLayout>
      <S.NotFoundPageBox>
        <S.NotFoundPageContent>
          해당 페이지를 찾을 수 없어요 😢
          <br />
          메인 페이지로 이동할까요?
        </S.NotFoundPageContent>
        <S.NotFoundPageButton onClick={handleClick}>
          메인 페이지로 이동
        </S.NotFoundPageButton>
      </S.NotFoundPageBox>
    </S.NotFoundPageLayout>
  );
}
