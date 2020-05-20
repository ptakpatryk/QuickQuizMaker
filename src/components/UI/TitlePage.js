import React, { useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// UI Imports
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

const GridWrapper = styled.div`
  display: grid;
  max-width: 800px;
  height: 230px;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr 3fr;
  grid-gap: 20px;
  grid-template-areas:
    'title title button'
    'description description button';
`;

const TitlePage = ({ passInfoToBuilder }) => {
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
        placeholder:
          'Quiz description (max 300 characters)...',
        maxLength: '300',
      },
      value: '',
      gridArea: 'description',
    },
  });

  const titleFormArray = [];
  for (let key in questionForm) {
    titleFormArray.push({
      id: key,
      config: questionForm[key],
    });
  }

  const changeInputHandler = (event, elId) => {
    const questionElement = { ...questionForm[elId] };
    questionElement.value = event.target.value;
    setQuestionForm({
      ...questionForm,
      [elId]: { ...questionElement },
    });
  };

  const titleData = {
    title: questionForm.title.value,
    description: questionForm.description.value,
    id: shortid.generate(),
  };

  return (
    <>
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
            gridArea={
              el.config.gridArea ? el.config.gridArea : null
            }
          />
        ))}
        <Button
          gridArea="button"
          onClick={() => passInfoToBuilder(titleData)}
        >
          Next
        </Button>
      </GridWrapper>
    </>
  );
};

TitlePage.propTypes = {
  passInfoToBuilder: PropTypes.func.isRequired,
};

export default TitlePage;
