import React from 'react';
import * as S from './TextField.style';

export default function TextField({
  id,
  type,
  children,
  fontSize,
  decorationColor,
  textColor,
}) {
  return (
    <S.TextFieldBox>
      <S.TextFieldInput
        id={id}
        type={type}
        $textColor={textColor}
        $fontSize={fontSize}
        $decorationColor={decorationColor}
        required
      />
      <S.TextFieldLabel htmlFor={id} $fontSize={fontSize}>
        {children}
      </S.TextFieldLabel>
      <S.TextFieldSpan $decorationColor={decorationColor}></S.TextFieldSpan>
    </S.TextFieldBox>
  );
}
