import React, { useState } from 'react';
import * as S from './ProductCreationPage.style';
import { LuImagePlus } from 'react-icons/lu';
import TextField from '../../components/TextField/TextField';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../api/uploader';
import { addNewProduct } from '../../api/firebase';
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/Loading/Loading';

export default function ProductCreationPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductInfo((product) => ({ ...product, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    console.log(e.target.files);
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
    setIsSuccess(false);
    navigate('/', { replace: true });
  };

  const handleCreateProduct = () => {
    setIsLoading(true);
    uploadImage(file).then((url) => {
      addNewProduct(productInfo, url).then(() => {
        setFile(null);
        setPreview(null);
        setProductInfo({});
        setIsLoading(false);
        setIsSuccess(true);
      });
    });
  };

  return (
    <>
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
              onChange={handlePhotoChange}
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
              onChange={handlePhotoChange}
            />
          </S.ProductCreationPageCard>
        )}

        <S.ProductCreationPageInputCard>
          <S.ProductCreationPageInputCardTitle>
            상품 정보
          </S.ProductCreationPageInputCardTitle>
          <TextField
            id={'title'}
            type={'text'}
            name={'title'}
            decorationColor={'#ffbe98'}
            value={productInfo.title ?? ''}
            handleTextChange={handleTextChange}
          >
            상품명
          </TextField>
          <TextField
            id={'size'}
            type={'text'}
            name={'size'}
            decorationColor={'#ffbe98'}
            value={productInfo.size ?? ''}
            handleTextChange={handleTextChange}
          >
            사이즈
          </TextField>
          <TextField
            id={'description'}
            type={'text'}
            name={'description'}
            decorationColor={'#ffbe98'}
            value={productInfo.description ?? ''}
            handleTextChange={handleTextChange}
          >
            상품 설명
          </TextField>
          <TextField
            id={'price'}
            type={'text'}
            name={'price'}
            decorationColor={'#ffbe98'}
            value={productInfo.price ?? ''}
            handleTextChange={handleTextChange}
          >
            가격
          </TextField>
          <S.ProductCreationPageInputCardButtonBox>
            <S.ProductCreationPageInputCardButton onClick={handleCreateProduct}>
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
      {isLoading && <Loading>상품 등록 중입니다.</Loading>}
      {isSuccess && (
        <Modal
          content={
            '상품이 정상적으로 등록되었습니다.\n메인페이지로 이동합니다.'
          }
          onClick={handleModalClick}
        />
      )}
    </>
  );
}
