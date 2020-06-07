import styled, { css } from 'styled-components';

const RadioButton = styled.div`
  position: absolute;
  right: 15px;
  top: 16px;
  width: 16px;
  height: 16px;
  background-color: none;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.secondary};
  cursor: pointer;

  ${({ ticked }) =>
    ticked &&
    css`
      background-color: ${({ theme, activeColor }) =>
        activeColor ? theme[activeColor] : theme.green};
      box-shadow: inset 0px 0px 0px 2px #252c4a;
    `}
`;

export default RadioButton;
