import styled, { css } from 'styled-components';

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.small}) {
    position: fixed;
    top: 20px;
    left: 25px;
    height: auto;
    transform: skewX(-40deg);
    transition: opacity 0.15s ease-out 0s;
    opacity: 0;

    ${({ isOpen }) =>
      isOpen &&
      css`
        opacity: 1;
        transition: opacity 0.25s ease-in 0.4s;
        color: red;
      `}
  }
`;

export const StyledListItem = styled.li`
  a {
    display: inline-block;
    text-align: center;
    margin: 10px 0;
    color: ${({ theme }) => theme.primary};
    width: 100%;

    @media (max-width: ${({ theme }) => theme.small}) {
      text-align: right;
      transform: skewX(40deg);
    }

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

  @media (max-width: ${({ theme }) => theme.small}) {
    display: inline-block;
    text-align: right;
    /* margin: 10px 0; */
    color: ${({ theme }) => theme.primary};
    width: 100%;
    font-weight: ${({ theme }) => theme.bold};
    background: none;

    a {
      color: inherit;
    }
  }
`;
