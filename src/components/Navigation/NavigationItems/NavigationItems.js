import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/auth';
import { StyledUnorderedList, StyledListItem, LogoutButton } from './style';

export default function NavigationItem() {
  const {
    authState: { token },
  } = useAuth();

  return (
    <StyledUnorderedList>
      <StyledListItem>
        <NavLink title="Home" to="/" exact>
          Home
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink title="Make Quiz" to="/make-quiz">
          Make Quiz
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink title="Quizes" to="/library">
          Quizes
        </NavLink>
      </StyledListItem>
      <LogoutButton>
        <NavLink title="Logout" to={token ? '/logout' : '/login'}>
          {token ? 'Logout' : 'Sign In'}
        </NavLink>
      </LogoutButton>
    </StyledUnorderedList>
  );
}
