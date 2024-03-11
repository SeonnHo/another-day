import styled from 'styled-components';

export const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100vw;
  height: 80px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const HeaderLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderLogoImg = styled.img`
  width: 3rem;
  height: 3rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    padding-bottom: 0.5rem;
  }
`;

export const HeaderLogoH1 = styled.h1`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: bold;
  color: #ffbe98;
  margin: 0;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const HeaderItem = styled.li`
  color: #ffbe98;
  font-size: 1.2rem;
  font-family: sans-serif;
  font-weight: bold;
  white-space: nowrap;
  margin-left: 2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #de8286;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;

export const HeaderIconButton = styled.button`
  border: none;
  background-color: transparent;
  color: #ffbe98;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: #de8286;
  }

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    & > svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const HeaderSignButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #ffbe98;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #de8286;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
  }
`;
