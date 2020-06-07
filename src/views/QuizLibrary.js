import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useAuth } from 'context/auth';
import { useToastify } from 'hooks/useToastify';
import { useQuizes } from 'context/quizes';

import QuizLibraryItem from 'components/QuizLibraryItem/QuizLibraryItem';

const Wrapper = styled.div`
  padding-top: 90px;
`;

const LibraryControlsWrapper = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 auto 20px;

  & > :nth-child(even) {
    margin: 0 20px;
    display: inline;
  }
`;

const LabelStyled = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 50px;
  width: 90px;
  color: ${({ theme }) => theme.primaryDark};
  text-align: center;
  transition: width 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      width: 150px;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.mainBg};
    `};
`;

const LibraryNavigationItem = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const QuizLibrary = ({ history: { push } }) => {
  const { quizes, fetchQuizes, removeQuiz } = useQuizes();
  const [fetchOnlyUser, setFetchOnlyUser] = useState(false);
  const {
    authState: { token: isAuthenticated, userId },
  } = useAuth();
  const { showToast } = useToastify();

  useEffect(() => {
    fetchQuizes(fetchOnlyUser);
  }, [fetchOnlyUser]);

  const showOnlyUserQuizesHandler = (boolean) => {
    setFetchOnlyUser(boolean);
  };

  const deleteQuizHandler = (serverId) => {
    removeQuiz(serverId);
    showToast('Successfully deleted', 'error');
  };

  const openQuizHandler = (id) => {
    push(`/quiz/${id}`);
  };

  const editQuizHandler = () => {
    showToast("We're working on this function!", 'info');
  };

  const quizesElements = quizes.map((el) => (
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
    />
  ));

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
      {isAuthenticated && libraryControls}
      {quizesElements}
    </Wrapper>
  );
};

export default QuizLibrary;
