import React from 'react';
import PropTypes from 'prop-types';

// UI Imports
import Button from 'components/UI/Button';
import {
  Wrapper,
  MainTextWrapper,
  MainText,
  CircleOne,
  CircleTwo,
  CircleThree,
  CircleFour,
  CircleFive,
  HeadingStyled,
  ParagraphStyled,
  ResultStyled,
} from './style';

const Result = ({ location, history: { push } }) => {
  let title;
  let result;
  let questionsNumber;

  if (location.state) {
    title = location.state.title;
    result = location.state.result;
    questionsNumber = location.state.questionsNumber;
  }

  const percent = Math.round((result / questionsNumber) * 100);

  return (
    <Wrapper>
      <MainTextWrapper>
        <MainText>That&apos;s all!</MainText>
        <CircleOne />
        <CircleTwo />
        <CircleThree />
        <CircleFour />
        <CircleFive />
      </MainTextWrapper>
      <ParagraphStyled>You&apos;ve finished the quiz</ParagraphStyled>
      <HeadingStyled>{title}</HeadingStyled>
      <ResultStyled>
        Your result:{' '}
        <strong>
          {result}/{questionsNumber}
        </strong>{' '}
        <span>({percent}%)</span>
      </ResultStyled>
      <Button color="green" onClick={() => push('/')}>
        Finish
      </Button>
    </Wrapper>
  );
};

Result.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Result;
