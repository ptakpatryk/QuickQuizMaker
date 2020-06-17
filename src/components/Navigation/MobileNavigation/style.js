import styled, { css } from 'styled-components';
import logo from 'assets/logo.svg';

export const MobileNavWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.mainBg};
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.small}) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 10px auto 5px;
`;

export const LogoStyled = styled.div`
  display: inline-block;
  width: 65px;
  height: 50px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  :hover {
    filter: brightness(1.1);
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  z-index: -9;
  width: 100vw;
  height: 300px;
  background-color: ${({ theme }) => theme.mainBg};
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  border-right: 1.5px solid ${({ theme }) => theme.primary};
  opacity: 0;
  transform: skew(0);
  transform-origin: 100% 100%;
  transition: all 0.4s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: skew(-40deg);
      opacity: 1;
    `}
`;
