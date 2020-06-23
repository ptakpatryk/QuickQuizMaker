import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useEditQuiz, actionTypes } from 'context/editQuiz';

// UI Imports
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

import { Wrapper, GridWrapper } from './style';

const TitlePage = ({ match: { path }, history: { push } }) => {
  const { dispatch } = useEditQuiz();
  const [questionForm, setQuestionForm] = useState({
    title: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Quiz title...',
        maxLength: '60',
      },
      value: '',
      gridArea: 'title',
    },
    description: {
      elementType: 'textarea',
      elementConfig: {
        type: 'text',
        placeholder: 'Description (max 300 char)...',
        maxLength: '300',
      },
      value: '',
      gridArea: 'description',
    },
  });

  const titleFormArray = Object.entries(questionForm).map((array) => {
    return {
      id: array[0],
      config: { ...array[1] },
    };
  });

  const changeInputHandler = (event, elId) => {
    const questionElement = { ...questionForm[elId] };
    questionElement.value = event.target.value;
    setQuestionForm({
      ...questionForm,
      [elId]: { ...questionElement },
    });
  };

  const pushInfoData = () => {
    dispatch({
      type: actionTypes.SET_INFO,
      title: questionForm.title.value,
      description: questionForm.description.value,
      id: shortid.generate(),
    });
    push(`${path}/question/`);
  };

  return (
    <Wrapper>
      <Heading>Make your own quiz...</Heading>
      <Paragraph>start with filling below form</Paragraph>
      <GridWrapper>
        {titleFormArray.map((el) => (
          <Input
            key={el.id}
            id={el.id}
            type={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            changed={changeInputHandler}
            gridArea={el.config.gridArea ? el.config.gridArea : null}
          />
        ))}
        <Button gridArea="button" onClick={pushInfoData}>
          Next
        </Button>
      </GridWrapper>
    </Wrapper>
  );
};

TitlePage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default TitlePage;
