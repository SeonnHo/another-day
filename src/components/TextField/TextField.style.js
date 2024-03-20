import styled from 'styled-components';

export const TextFieldBox = styled.div`
  margin: 0.5rem 0.5rem;
  position: relative;
`;

export const TextFieldLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 0;
  bottom: 0.4rem;
  font-size: ${(props) => props.$fontSize || `1rem`};
  transition: all 0.2s;
`;

export const TextFieldSpan = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${(props) => props.$decorationColor || `black`};
  transition: all 0.5s;
`;

export const TextFieldInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid gray;
  border-radius: 0;
  outline: none;
  padding: 0.4rem 0;
  color: ${(props) => props.$textColor || `black`};
  font-size: ${(props) => props.$fontSize || `1rem`};
  line-height: ${(props) => props.$fontSize || 'calc(1rem + 6px)'};

  &:focus ~ ${TextFieldLabel}, &:valid ~ ${TextFieldLabel} {
    font-size: 0.8rem;
    ${(props) =>
      props.fontSize
        ? `
        bottom: calc(${props.$fontSize} + 1rem);
      `
        : `
        bottom: calc(1rem + 1rem);
      `};
    color: ${(props) => props.$decorationColor || `black`};
    font-weight: bold;
  }

  &:focus ~ ${TextFieldSpan}, &:valid ~ ${TextFieldSpan} {
    width: 100%;
  }
`;
