import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/auth';

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 100%;
`;

const StyledListItem = styled.li`
  a {
    display: inline-block;
    text-align: center;
    margin: 10px 0;
    color: ${({ theme }) => theme.primary};
    width: 100%;

    &:hover {
      font-weight: ${({ theme }) => theme.bold};
    }

    ::before {
      display: block;
      content: attr(title);
      height: 0;
      font-weight: ${({ theme }) => theme.bold};
      overflow: hidden;
      visibility: hidden;
    }
  }

  .active {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const LogoutButton = styled(StyledListItem)`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  height: 100px;
  margin-top: auto;

  a {
    color: ${({ theme }) => theme.mainBg};
  }
`;

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
        <NavLink
          title="Logout"
          to={token ? '/logout' : '/login'}
        >
          {token ? 'Logout' : 'Sign In'}
        </NavLink>
      </LogoutButton>
    </StyledUnorderedList>
  );
}
