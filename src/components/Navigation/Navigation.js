import React from 'react';
import styled from 'styled-components';

// UI Imports
import logo from 'assets/logo.svg';
import NavigationItems from './NavigationItems/NavigationItems';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.mainBg};
  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.1);
  width: 180px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.primary};
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 0;
  width: 100%;
  max-width: 1024px;
  height: 100%;
`;

const LogoStyled = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 100px;

  :hover {
    filter: brightness(1.1);
  }
`;

export default function Navigation() {
  return (
    <StyledWrapper>
      <StyledNavigation>
        <LogoStyled />
        <NavigationItems />
      </StyledNavigation>
    </StyledWrapper>
  );
}
