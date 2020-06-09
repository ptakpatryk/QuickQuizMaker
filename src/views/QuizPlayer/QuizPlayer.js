import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useToastify } from 'hooks/useToastify';
import { useQuizes } from 'context/quizes';
import ErrorModal from 'components/ErrorModal/ErrorModal';

// UI Imports
import Spinner from 'components/UI/Spinner';
import QuestionsCounter from 'components/UI/QuestionsCounter';
import QuestionsList from 'components/QuestionsList/QuestionsList';
import { Wrapper, HeadingStyled, ParagraphStyled } from './style';

const QuizPlayer = ({
  match: {
    params: { id },
  },
  history: { push },
}) => {
  // Shows user stage ('selecting'/'wrong'/'correct')
  const [actualStage, setActualStage] = useState('selecting');
  const [actualPage, setActualPage] = useState(0);
  const {
    fetchSingleQuiz,
    quizes,
    quizesState: { loading, error, errorMsg },
    clearError,
  } = useQuizes();
  const { showToast } = useToastify();

  let quiz;
  if (quizes) quiz = quizes.find((el) => el.id === id);
  const currentQuestion = quiz ? quiz.questions[actualPage] : undefined;

  useEffect(() => {
    if (quizes.length === 0) {
      fetchSingleQuiz(id);
    }
  }, [fetchSingleQuiz, id, quizes.length]);

  const nextPageHandler = (result) => {
    if (actualPage === quiz.questions.length - 1) {
      push({
        pathname: '/result',
        state: {
          title: quiz.title,
          result,
          questionsNumber: quiz.questions.length,
        },
      });
    }

    setActualPage(actualPage + 1);
    setActualStage('selecting');
  };

  const checkCorrectHandler = (answers, answerType, numberValue) => {
    let userAnswers;
    let correctAnswers;

    if (Object.keys(answers).length === 0 && !numberValue) {
      showToast('Pass the answer first!', 'error');
      return;
    }

    if (answerType === 'number') {
      userAnswers = numberValue;
      correctAnswers = currentQuestion.answers[0].value;
    } else if (answerType === 'boolean') {
      userAnswers = Object.keys(answers).join('');
      correctAnswers = currentQuestion.answers[0].value;
    } else {
      userAnswers = Object.keys(answers);
      correctAnswers = currentQuestion.answers
        .filter((el) => el.correct === true)
        .map((answerObj) => answerObj.id);
    }

    if (!userAnswers) {
      showToast('Pass the answer first!', 'error');
      return;
    }

    // Check correct answers for single and multiple question
    if (answerType === 'single' || answerType === 'multiple') {
      if (userAnswers.sort().join('') === correctAnswers.sort().join('')) {
        setActualStage('correct');
      } else {
        setActualStage('wrong');
      }

      return;
    }

    // Check correct answers for boolean and number question
    if (`${userAnswers}` === correctAnswers) {
      setActualStage('correct');
    } else {
      setActualStage('wrong');
    }
  };
  const content = quiz ? (
    <>
      <HeadingStyled>{quiz.title}</HeadingStyled>
      <ParagraphStyled>{quiz.description}</ParagraphStyled>
      <QuestionsCounter
        questionNumber={actualPage + 1}
        questionsLength={quiz.questions.length}
      />
      <QuestionsList
        type={currentQuestion.type}
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        checkCorrectFn={checkCorrectHandler}
        nextPageFn={nextPageHandler}
        userStage={actualStage}
      />
    </>
  ) : (
    <Spinner />
  );

  return (
    <Wrapper>
      {error && (
        <ErrorModal closeModalFn={clearError} errorMessage={errorMsg} />
      )}
      {loading ? <Spinner /> : content}
    </Wrapper>
  );
};

QuizPlayer.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string,
};

QuizPlayer.defaultProps = {
  id: undefined,
};

export default QuizPlayer;
