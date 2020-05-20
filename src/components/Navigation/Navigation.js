import React from 'react';
import styled from 'styled-components';

// UI Imports
import logo from 'assets/logo.svg';
import NavigationItems from './NavigationItems/NavigationItems';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 85px;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 80px;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  height: 100%;
`;

const LogoStyled = styled.div`
  width: 150px;
  height: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: left center;
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
