import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// UI Imports
import Button from 'components/UI/Button';

import {
  QuestionStyled,
  NumberInput,
  AnswerWrapper,
  NumberInputWrapper,
  NumberControlWrapper,
  NumberControl,
  LabelStyled,
  InputStyled,
  Message,
} from './style';

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
            type === 'single' ? clickAnswerHandler : clickMultiAnswerHandler
          }
        >
          <InputStyled type="radio" id={el.id} name="drone" value={el.id} />
          <LabelStyled htmlFor={el.id}>{el.value}</LabelStyled>
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
            <InputStyled type="radio" id="true" value="true" name="true" />
            <LabelStyled htmlFor="true">True</LabelStyled>
          </AnswerWrapper>
          <AnswerWrapper
            id="false"
            clicked={clicked.false}
            onClick={clickAnswerHandler}
            userStage={userStage}
          >
            <InputStyled type="radio" id="false" value="false" name="false" />
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
            <NumberControl onClick={() => numberControlHandler('increment')} />
            <NumberControl onClick={() => numberControlHandler('decrement')} />
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
        <Button onClick={() => checkCorrectFn(clicked, type, numberValue)}>
          Check
        </Button>
      );
      break;
    case 'correct':
      button = (
        <>
          <Message type={userStage}>Good answer!</Message>
          <Button color="green" onClick={nextQuestionHandler}>
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
            {type === 'number' && `Correct answer: ${answers[0].value}`}
          </Message>
          <Button color="pink" onClick={nextQuestionHandler}>
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

QuestionsList.propTypes = {
  type: PropTypes.oneOf(['single', 'multiple', 'number', 'boolean']).isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.instanceOf(Array).isRequired,
  userStage: PropTypes.oneOf(['correct', 'wrong', 'selecting']).isRequired,
  checkCorrectFn: PropTypes.func.isRequired,
  nextPageFn: PropTypes.func.isRequired,
};

export default QuestionsList;
