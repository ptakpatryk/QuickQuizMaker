import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 90px;
`;

export const LibraryControlsWrapper = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 auto 30px;

  & > :nth-child(even) {
    margin: 0 20px;
    display: inline;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 50px;
  width: 90px;
  color: ${({ theme }) => theme.primaryDark};
  text-align: center;
  transition: width 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      width: 150px;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.mainBg};
    `};
`;

export const LibraryNavigationItem = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
