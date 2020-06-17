import React from 'react';
import PropTypes from 'prop-types';

// Icons import
import editIcon from 'assets/icons/edit.svg';
import deleteIcon from 'assets/icons/delete.svg';
import arrowGoIcon from 'assets/icons/arrow-go.svg';

// UI Imports
import {
  Wrapper,
  InfoWrapper,
  ButtonWrapperRow,
  ButtonWrapperColumn,
  HeadingStyled,
  ParagraphStyled,
  QuestionsCounter,
  IconButton,
} from './style';

const QuizElement = ({
  title,
  description,
  questionsQuantity,
  id,
  serverId,
  userQuiz,
  isOwner,
  deleteQuizFn,
  openQuizFn,
  editQuizFn,
  numInOrder,
}) => {
  return (
    <Wrapper numInOrder={numInOrder} isOwner={isOwner}>
      <InfoWrapper>
        <HeadingStyled as="h2">{title}</HeadingStyled>
        <ParagraphStyled>{description}</ParagraphStyled>
      </InfoWrapper>
      <QuestionsCounter>
        <h3>{questionsQuantity}</h3>
        <p>questions</p>
      </QuestionsCounter>
      <ButtonWrapperRow>
        {userQuiz || isOwner ? (
          <ButtonWrapperColumn>
            <IconButton
              icon={editIcon}
              color="blue"
              onClick={() => editQuizFn()}
            />
            <IconButton
              onClick={() => deleteQuizFn(serverId)}
              icon={deleteIcon}
              color="red"
            />
          </ButtonWrapperColumn>
        ) : null}
        <IconButton
          onClick={() => openQuizFn(id)}
          icon={arrowGoIcon}
          color="primaryLight"
          big
        />
      </ButtonWrapperRow>
    </Wrapper>
  );
};

QuizElement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  questionsQuantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  serverId: PropTypes.string,
  userQuiz: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  deleteQuizFn: PropTypes.func.isRequired,
  openQuizFn: PropTypes.func.isRequired,
  editQuizFn: PropTypes.func.isRequired,
  numInOrder: PropTypes.number.isRequired,
};

QuizElement.defaultProps = {
  serverId: undefined,
};

export default QuizElement;
