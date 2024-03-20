import React, { useState } from 'react';
import * as S from './ProductCreationPage.style';
import { LuImagePlus } from 'react-icons/lu';
import TextField from '../../components/TextField/TextField';
import { useNavigate } from 'react-router-dom';
import { getSessionUserData } from '../../utils/seesionUserData';
import Modal from '../../components/Modal/Modal';

export default function ProductCreationPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = (e) => {
      setFile(file);
      setPreview(e.target.result);
    };
  };

  const handleModalClick = () => {
    navigate('/', { replace: true });
  };

  if (!getSessionUserData())
    return (
      <Modal
        content={'로그인이 필요한 서비스입니다.\n로그인 후 이용해주세요.'}
        onClick={handleModalClick}
      />
    );

  if (getSessionUserData().uid !== process.env.REACT_APP_ADMIN_UID)
    return (
      <Modal
        content={'관리자 전용 서비스입니다.\n메인페이지로 이동합니다.'}
        onClick={handleModalClick}
      />
    );

  return (
    <S.ProductCreationPageLayout>
      {file && preview ? (
        <S.ProductCreationPageCard>
          <S.ProductCreationPagePreviewImageLabel htmlFor="input-img">
            <S.ProductCreationPagePreviewImg src={preview} alt="preview" />
          </S.ProductCreationPagePreviewImageLabel>
          <S.ProductCreationPageFileUploadInput
            id="input-img"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </S.ProductCreationPageCard>
      ) : (
        <S.ProductCreationPageCard>
          <S.ProductCreationPageFileUploadLabel htmlFor="input-img">
            <LuImagePlus />
          </S.ProductCreationPageFileUploadLabel>
          <S.ProductCreationPageFileUploadInput
            id="input-img"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </S.ProductCreationPageCard>
      )}

      <S.ProductCreationPageInputCard>
        <S.ProductCreationPageInputCardTitle>
          상품 정보
        </S.ProductCreationPageInputCardTitle>
        <TextField id={'title'} type={'text'} decorationColor={'#ffbe98'}>
          상품명
        </TextField>
        <TextField id={'size'} type={'text'} decorationColor={'#ffbe98'}>
          사이즈
        </TextField>
        <TextField id={'description'} type={'text'} decorationColor={'#ffbe98'}>
          상품 설명
        </TextField>
        <S.ProductCreationPageInputCardButtonBox>
          <S.ProductCreationPageInputCardButton>
            상품 등록
          </S.ProductCreationPageInputCardButton>
          <S.ProductCreationPageInputCardButton
            onClick={() => navigate(-1)}
            $backgroundColor={'#aaa'}
          >
            취소
          </S.ProductCreationPageInputCardButton>
        </S.ProductCreationPageInputCardButtonBox>
      </S.ProductCreationPageInputCard>
    </S.ProductCreationPageLayout>
  );
}
