import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'context/auth';
import { useToastify } from 'hooks/useToastify';
import { useQuizes } from 'context/quizes';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import QuizLibraryItem from 'components/QuizLibraryItem/QuizLibraryItem';
import Spinner from 'components/UI/Spinner';
import {
  Wrapper,
  LibraryControlsWrapper,
  LabelStyled,
  LibraryNavigationItem,
} from './style';

const QuizLibrary = ({ history: { push } }) => {
  const {
    quizes,
    fetchQuizes,
    removeQuiz,
    quizesState: { loading, error, errorMsg },
    clearError,
  } = useQuizes();
  const [fetchOnlyUser, setFetchOnlyUser] = useState(false);
  const {
    authState: { token: isAuthenticated, userId },
  } = useAuth();
  const { showToast } = useToastify();

  useEffect(() => {
    fetchQuizes(fetchOnlyUser);
  }, [fetchOnlyUser, fetchQuizes]);

  const showOnlyUserQuizesHandler = (boolean) => {
    setFetchOnlyUser(boolean);
  };

  const deleteQuizHandler = (serverId) => {
    removeQuiz(serverId, fetchOnlyUser);
    showToast('Successfully deleted', 'error');
  };

  const openQuizHandler = (id) => {
    push(`/quiz/${id}`);
  };

  const editQuizHandler = () => {
    showToast("We're working on this function!", 'info');
  };

  const content = loading ? (
    <Spinner />
  ) : (
    quizes.map((el, index) => (
      <QuizLibraryItem
        key={el.id}
        id={el.id}
        title={el.title}
        description={el.description}
        questionsQuantity={el.questions.length}
        deleteQuizFn={deleteQuizHandler}
        openQuizFn={openQuizHandler}
        userQuiz={fetchOnlyUser}
        serverId={el.serverId}
        editQuizFn={editQuizHandler}
        isOwner={el.userId === userId}
        numInOrder={index}
      />
    ))
  );

  const libraryControls = (
    <LibraryControlsWrapper>
      <LabelStyled htmlFor="onlyUser" active={!fetchOnlyUser}>
        <LibraryNavigationItem
          type="radio"
          id="onlyUser"
          name="onlyUser"
          onClick={() => showOnlyUserQuizesHandler(false)}
        />
        All Quizes
      </LabelStyled>
      <p>|</p>
      <LabelStyled htmlFor="allUsers" active={fetchOnlyUser}>
        <LibraryNavigationItem
          type="radio"
          id="allUsers"
          name="allUsers"
          onClick={() => showOnlyUserQuizesHandler(true)}
        />
        User Quizes
      </LabelStyled>
    </LibraryControlsWrapper>
  );

  return (
    <Wrapper>
      {error && (
        <ErrorModal closeModalFn={clearError} errorMessage={errorMsg} />
      )}
      {isAuthenticated && libraryControls}
      {content}
    </Wrapper>
  );
};

QuizLibrary.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default QuizLibrary;
