import styled, { css } from 'styled-components';

const Button = styled.button`
  position: relative;
  overflow: hidden;
  width: 145px;
  height: 55px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme, color }) =>
    color ? theme[color] : theme.blue};
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  ${({ gridArea }) =>
    gridArea &&
    css`
      width: 100%;
      height: 100%;
      grid-area: ${gridArea};
    `};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.darkBlue};
    outline: none;
  }

  ${({ color }) =>
    color &&
    (color === 'pink'
      ? css`
          :hover,
          :focus {
            background-color: ${({ theme }) =>
              theme.darkPink};
          }
        `
      : css`
          :hover,
          :focus {
            background-color: ${({ theme }) =>
              theme.darkGreen};
          }
        `)}

  &::before {
    content: '';
    width: 150px;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    position: absolute;
    bottom: -70px;
  }

  &::after {
    content: '';
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    position: absolute;
    top: -30px;
    left: -20px;
  }
`;

export default Button;
