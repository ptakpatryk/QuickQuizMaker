import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import { StyledWrapper, StyledNavigation, LogoStyled } from './style';

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
