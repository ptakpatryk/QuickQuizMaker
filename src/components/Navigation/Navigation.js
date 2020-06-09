import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import { StyledWrapper, StyledNavigation, LogoStyled } from './style';

export default function Navigation() {
  return (
    <StyledWrapper>
      <StyledNavigation>
        <Link to="/">
          <LogoStyled />
        </Link>
        <NavigationItems />
      </StyledNavigation>
    </StyledWrapper>
  );
}
