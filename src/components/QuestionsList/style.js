import styled, { css } from 'styled-components';
import doneIcon from 'assets/icons/done.svg';
import arrowIcon from 'assets/icons/select_arrow_down.svg';

export const QuestionStyled = styled.p`
  margin: 35px auto;
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.textSize.m};
`;

export const NumberInput = styled.input`
  background-color: #23314f;
  color: ${({ theme }) => theme.lightGrey};
  max-width: 500px;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 15px;
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.1);
  appearance: textarea;

  ${({ userStage, theme }) => {
    if (userStage === 'correct') {
      return css`
        border-color: ${theme.green};
      `;
    }

    if (userStage === 'wrong') {
      return css`
        border-color: ${theme.pink};
      `;
    }

    return undefined;
  }}

  ::-webkit-inner-spin-button {
    appearance: none;
  }

  :hover,
  :focus {
    background-color: #2a3959;
    outline: none;
  }
`;

export const AnswerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #23314f;
  max-width: 500px;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: #2a3959;
  }

  ::before {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    width: 18px;
    height: 18px;
    border-radius: ${({ multiple }) => (multiple ? '5px' : '50px')};
    border: 2px solid ${({ theme }) => theme.secondary};

    ${({ clicked }) =>
      clicked &&
      css`
        background-color: ${({ theme }) => theme.blue};
        background-image: url(${doneIcon});
        background-repeat: no-repeat;
        background-position: center 55%;
        background-size: 65%;
        border: none;
      `}
  }

  ${({ userStage, clicked, isCorrect, theme, id }) => {
    if (userStage === 'correct' && isCorrect) {
      return css`
        border-color: ${theme.green};
      `;
    }

    if (userStage === 'wrong' && clicked && !isCorrect) {
      return css`
        border-color: ${theme.pink};
      `;
    }

    if (userStage === 'wrong' && isCorrect) {
      return css`
        border-color: ${theme.green};
      `;
    }

    // Boolean border after check
    if (id === 'true' || id === 'false') {
      if (userStage === 'correct' && clicked) {
        return css`
          border-color: ${theme.green};
        `;
      }
    }
    return undefined;
  }}
`;

export const NumberInputWrapper = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin-bottom: 20px;
`;

export const NumberControlWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const NumberControl = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${arrowIcon});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;

  :nth-of-type(1) {
    transform: rotate(180deg);
  }
  :hover {
    filter: brightness(1.2);
  }
`;

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.textSize.s};
`;
export const InputStyled = styled.input`
  :checked,
  :not(checked) {
    position: absolute;
    left: -9999px;
  }

  label {
    color: red;
  }
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.green};
  margin-bottom: 15px;

  ${({ type }) =>
    type === 'wrong' &&
    css`
      color: ${({ theme }) => theme.pink};
    `}
`;
