import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useToastify } from 'hooks/useToastify';

// UI Imports
import Paragraph from 'components/UI/Paragraph';
import Heading from 'components/UI/Heading';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import RadioButton from 'components/UI/RadioButton';
import ButtonLink from 'components/UI/ButtonLink';
import RelativeWrapper from 'components/UI/RelativeWrapper';
import GridAnswersWrapper from 'components/UI/GridAnswersWrapper';
import FlexRowWrapper from 'components/UI/FlexRowWrapper';
import FlexColumnWrapper from 'components/UI/FlexColumnWrapper';

import * as answersTypes from './answerTypes/answersTypes';

const Wrapper = styled.div`
  padding-top: 90px;
  width: 80%;
  margin: 0 auto;
`;

const MakeQuestion = ({ passQuestionInfo }) => {
  const [moreTHanOneAnswer, setMoreThanOneAnswer] = useState(false);
  const [questionType, setQuestionType] = useState({
    elementType: 'select',
    elementConfig: [
      {
        value: 'single',
        text: 'Single Response',
        default: true,
      },
      { value: 'multiple', text: 'Multiple Response' },
      { value: 'number', text: 'Correct Number' },
      { value: 'boolean', text: 'True or False' },
    ],
    value: 'single',
  });
  const [questionForm, setQuestionForm] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your question',
    },
    value: '',
  });
  const [answers, setAnswers] = useState([]);
  const { showToast } = useToastify();

  const formRef = useRef();

  useEffect(() => {
    switch (questionType.value) {
      case 'single':
      case 'multiple':
        setAnswers([
          {
            id: shortid.generate(),
            ...answersTypes.standard,
          },
          {
            id: shortid.generate(),
            ...answersTypes.standard,
          },
        ]);
        setMoreThanOneAnswer(true);
        break;
      case 'number':
        setAnswers([
          {
            id: shortid.generate(),
            ...answersTypes.number,
          },
        ]);
        setMoreThanOneAnswer(false);
        break;
      case 'boolean':
        setAnswers([
          {
            id: shortid.generate(),
            ...answersTypes.boolean,
          },
        ]);
        setMoreThanOneAnswer(false);
        break;
      default:
        break;
    }
  }, [questionType]);

  const questionInputHandler = (event) => {
    const newQuestionForm = { ...questionForm };
    newQuestionForm.value = event.target.value;
    setQuestionForm(newQuestionForm);
  };

  const questionTypeHandler = (event) => {
    setQuestionType({
      ...questionType,
      value: event.target.value,
    });
  };

  const addOptionHandler = () => {
    setAnswers([
      ...answers,
      {
        id: shortid.generate(),
        ...answersTypes.standard,
      },
    ]);
  };

  const removeOptionHandler = () => {
    const newAnswers = [...answers];
    newAnswers.pop();
    setAnswers(newAnswers);
  };

  const changeAnswerInputHandler = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index].value = event.target.value;
    setAnswers(newAnswers);
  };

  const tickAsTrueHandler = (index) => {
    const newAnswers = [...answers];
    if (questionType.value === 'single') {
      newAnswers.forEach((el, i) => {
        newAnswers[i].correct = false;
      });
    }

    newAnswers[index].correct = !newAnswers[index].correct;
    setAnswers(newAnswers);
  };

  const nextQuestionHandler = (finish) => {
    const questionData = {
      type: questionType.value,
      question: questionForm.value,
      answers: answers.map((el) => ({
        value: el.value,
        correct: el.correct,
        id: shortid.generate(),
      })),
    };
    if (!finish) {
      showToast('Question added!', 'success');
    }
    passQuestionInfo(questionData, finish);
    formRef.current.reset();
    const newAnswers = [...answers];
    newAnswers.forEach((el, i) => {
      newAnswers[i].correct = false;
    });
    setAnswers(newAnswers);
    // Reset question form
    setQuestionType({ ...questionType, value: 'single' });
  };

  return (
    <Wrapper>
      <Heading>Add a fancy question!</Heading>
      <Paragraph>don&apos;t get to fancy though...</Paragraph>
      <form ref={formRef}>
        <Input
          id={questionType.id}
          type={questionType.elementType}
          elementConfig={questionType.elementConfig}
          value={questionType.value}
          changed={(event) => questionTypeHandler(event)}
          gridArea={questionType.gridArea ? questionType.gridArea : null}
        />
        <Input
          key={questionForm.id}
          id={questionForm.id}
          type={questionForm.elementType}
          elementConfig={questionForm.elementConfig}
          value={questionForm.value}
          changed={questionInputHandler}
          gridArea={questionForm.gridArea ? questionForm.gridArea : null}
        />
        <GridAnswersWrapper>
          {answers.map((el, index) => (
            <RelativeWrapper key={el.id}>
              <Input
                id={el.id}
                type={el.elementType}
                elementConfig={el.elementConfig}
                value={el.value}
                changed={(event) => changeAnswerInputHandler(event, index)}
                gridArea={el.gridArea ? el.gridArea : null}
              />
              {el.tickable && (
                <RadioButton
                  onClick={() => tickAsTrueHandler(index)}
                  ticked={el.correct}
                />
              )}
            </RelativeWrapper>
          ))}
        </GridAnswersWrapper>
      </form>
      <FlexRowWrapper>
        <FlexColumnWrapper>
          {moreTHanOneAnswer && (
            <ButtonLink onClick={addOptionHandler}>Add option</ButtonLink>
          )}
          {answers.length > 2 && (
            <ButtonLink onClick={removeOptionHandler}>Remove option</ButtonLink>
          )}
        </FlexColumnWrapper>
        <Button onClick={() => nextQuestionHandler()}>Add Question</Button>
        <Button onClick={() => nextQuestionHandler('final')} color="green">
          Finish Quiz
        </Button>
      </FlexRowWrapper>
    </Wrapper>
  );
};

MakeQuestion.propTypes = {
  passQuestionInfo: PropTypes.func.isRequired,
};

export default MakeQuestion;
