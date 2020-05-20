import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// UI Imports
import Button from 'components/UI/Button';
import doneIcon from 'assets/icons/done.svg';
import arrowIcon from 'assets/icons/select_arrow_down.svg';

const QuestionStyled = styled.p`
  margin: 35px auto;
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.textSize.m};
`;

const NumberInput = styled.input`
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

const AnswerWrapper = styled.div`
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
    border-radius: ${({ multiple }) =>
      multiple ? '5px' : '50px'};
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
  }}
`;

const NumberInputWrapper = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin-bottom: 20px;
`;

const NumberControlWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const NumberControl = styled.div`
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

const LabelStyled = styled.label`
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.textSize.s};
`;
const InputStyled = styled.input`
  :checked,
  :not(checked) {
    position: absolute;
    left: -9999px;
  }

  label {
    color: red;
  }
`;

const Message = styled.p`
  color: ${({ theme }) => theme.green};
  margin-bottom: 15px;

  ${({ type }) =>
    type === 'wrong' &&
    css`
      color: ${({ theme }) => theme.pink};
    `}
`;

const QuestionsList = ({
  type,
  question,
  answers,
  checkCorrectFn,
  nextPageFn,
  userStage,
}) => {
  const [clicked, setClicked] = useState({});
  const [numberValue, setNumberValue] = useState('');
  const [resultCounter, setResultCounter] = useState(0);

  useEffect(() => {
    if (userStage === 'correct') {
      setResultCounter(resultCounter + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setResultCounter, userStage]);

  useEffect(() => {
    setClicked({});
  }, [type]);

  const clickAnswerHandler = (e) => {
    if (clicked[e.target.id]) {
      setClicked({
        [e.target.id]: !clicked[e.target.id],
      });
    } else {
      setClicked({
        [e.target.id]: true,
      });
    }
  };

  const clickMultiAnswerHandler = (e) => {
    if (clicked[e.target.id]) {
      setClicked({
        ...clicked,
        [e.target.id]: !clicked[e.target.id],
      });
    } else {
      setClicked({
        ...clicked,
        [e.target.id]: true,
      });
    }
  };

  const numberInputHandler = (e) => {
    setNumberValue(e.target.value);
  };

  const numberControlHandler = (methodType) => {
    if (methodType === 'increment') {
      setNumberValue(Math.floor(numberValue) + 1);
    } else if (methodType === 'decrement') {
      setNumberValue(Math.floor(numberValue) - 1);
    }
  };

  const nextQuestionHandler = () => {
    setClicked({});
    nextPageFn(resultCounter);
  };

  let answersRender;
  switch (type) {
    case 'single':
    case 'multiple':
      answersRender = answers.map((el) => (
        <AnswerWrapper
          multiple={type === 'multiple'}
          key={el.value}
          id={el.id}
          clicked={clicked[el.id]}
          isCorrect={el.correct}
          userStage={userStage}
          onClick={
            type === 'single'
              ? clickAnswerHandler
              : clickMultiAnswerHandler
          }
        >
          <InputStyled
            type="radio"
            id={el.id}
            name="drone"
            value={el.id}
          />
          <LabelStyled htmlFor={el.id}>
            {el.value}
          </LabelStyled>
        </AnswerWrapper>
      ));
      break;
    case 'boolean':
      answersRender = (
        <>
          <AnswerWrapper
            id="true"
            clicked={clicked.true}
            onClick={clickAnswerHandler}
            userStage={userStage}
          >
            <InputStyled
              type="radio"
              id="true"
              value="true"
              name="true"
            />
            <LabelStyled htmlFor="true">True</LabelStyled>
          </AnswerWrapper>
          <AnswerWrapper
            id="false"
            clicked={clicked.false}
            onClick={clickAnswerHandler}
            userStage={userStage}
          >
            <InputStyled
              type="radio"
              id="false"
              value="false"
              name="false"
            />
            <LabelStyled htmlFor="false">False</LabelStyled>
          </AnswerWrapper>
        </>
      );
      break;
    case 'number':
      answersRender = (
        <NumberInputWrapper>
          <NumberInput
            type="number"
            id="false"
            value={numberValue}
            onChange={numberInputHandler}
            name="false"
            placeholder="Enter value"
            userStage={userStage}
          />
          <NumberControlWrapper>
            <NumberControl
              onClick={() =>
                numberControlHandler('increment')
              }
            />
            <NumberControl
              onClick={() =>
                numberControlHandler('decrement')
              }
            />
          </NumberControlWrapper>
        </NumberInputWrapper>
      );
      break;
    default:
      break;
  }

  let button;
  switch (userStage) {
    case 'selecting':
      button = (
        <Button
          onClick={() =>
            checkCorrectFn(clicked, type, numberValue)
          }
        >
          Check
        </Button>
      );
      break;
    case 'correct':
      button = (
        <>
          <Message type={userStage}>Good answer!</Message>
          <Button
            color="green"
            onClick={nextQuestionHandler}
          >
            Next
          </Button>
        </>
      );
      break;
    case 'wrong':
      button = (
        <>
          <Message type={userStage}>
            Whoops... wrong!
            <br />
            {type === 'number' &&
              `Correct answer: ${answers[0].value}`}
          </Message>
          <Button
            color="pink"
            onClick={nextQuestionHandler}
          >
            Next
          </Button>
        </>
      );
      break;
    default:
      break;
  }
  return (
    <>
      <QuestionStyled>{question}</QuestionStyled>
      {answersRender}
      {button}
    </>
  );
};

export default QuestionsList;
