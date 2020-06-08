import styled from 'styled-components';

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 100%;
`;

export const StyledListItem = styled.li`
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

export const LogoutButton = styled(StyledListItem)`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  height: 100px;
  margin-top: auto;

  a {
    color: ${({ theme }) => theme.mainBg};
  }
`;
