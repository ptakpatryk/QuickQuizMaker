import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StyledListItem = styled.li`
  margin-left: ${({ theme }) => theme.margin.m};

  a {
    display: inline-block;
    text-align: center;
    margin: 0 10px;
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

export default function NavigationItem() {
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
      <StyledListItem>
        <NavLink title="Logout" to="/logout">
          Logout
        </NavLink>
      </StyledListItem>
    </StyledUnorderedList>
  );
}
