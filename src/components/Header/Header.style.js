import styled from 'styled-components';

export const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffbe98;
  width: 100vw;
  height: 80px;
`;

export const HeaderContainer = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 1rem;
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

  @media screen and (max-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const HeaderLogoH1 = styled.h1`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  margin: 0;
  white-space: nowrap;

  @media screen and (max-width: 1024px) {
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
  justify-content: space-between;
  align-items: center;
`;

export const HeaderItem = styled.li`
  color: #f2e8da;
  font-size: 1.2rem;
  font-family: sans-serif;
  font-weight: bold;
  white-space: nowrap;
  margin-left: 2rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #de8286;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const HeaderButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  padding: 0;
  margin-right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  flex-shrink: 0;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    width: 1.2rem;
    height: 1.2rem;

    & > svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
