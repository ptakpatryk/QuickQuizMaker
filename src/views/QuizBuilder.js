import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQuizes } from 'context/QuizesContext';

// Components Import
import ErrorModal from 'components/ErrorModal/ErrorModal';
import MakeQuestion from 'components/MakeQuestion/MakeQuestion';
import TitlePage from 'components/UI/TitlePage';

// It will show <MakeQuestion> and <QuizHistory> to go back and edit particular slides

const QuizBuilder = ({
  match: { path },
  history: { push },
}) => {
  const [quizInfo, setQuizInfo] = useState({
    title: '',
    description: '',
    questions: [],
  });

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [finish, setFinish] = useState(false);

  const { quizes, setQuizes } = useQuizes();

  const closeError = () => {
    setIsError(false);
    setErrorMsg('');
  };

  const getTitleInfoHandler = (titlePageData) => {
    if (
      titlePageData.title === '' ||
      titlePageData.description === ''
    ) {
      setIsError(true);
      setErrorMsg('You forgot to fill the inputs!');
      return;
    }
    console.log(quizes);
    push(`${path}/question/`);
    setQuizInfo({
      ...quizInfo,
      ...titlePageData,
    });
  };

  const getQuestionInfoHandler = (
    questionData,
    isFinish,
  ) => {
    const newAnswers = [...quizInfo.questions];
    console.log(questionData);
    newAnswers.push(questionData);
    setQuizInfo({
      ...quizInfo,
      questions: newAnswers,
    });
    if (isFinish) {
      setFinish(true);
    }
  };

  useEffect(() => {
    if (finish) {
      const finishQuizHandler = () => {
        const newQuizes = [...quizes];
        newQuizes.push(quizInfo);
        setQuizes(newQuizes);
        push(`/library`);
      };
      finishQuizHandler();
    }
  }, [quizInfo, finish, push, setQuizes, quizes]);

  return (
    <>
      {isError && (
        <ErrorModal
          closeModalFn={closeError}
          errorMessage={errorMsg}
        />
      )}
      <Switch>
        <Route
          path={`${path}/question/`}
          render={(props) => (
            <MakeQuestion
              {...props}
              passQuestionInfo={getQuestionInfoHandler}
              // finishQuiz={finishQuizHandler}
            />
          )}
        />
        <Route
          path={`${path}`}
          render={(props) => (
            <TitlePage
              {...props}
              passInfoToBuilder={getTitleInfoHandler}
            />
          )}
        />
      </Switch>
    </>
  );
};

QuizBuilder.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.string,
  history: PropTypes.instanceOf(Object).isRequired,
  push: PropTypes.func,
};

QuizBuilder.defaultProps = {
  path: null,
  push: null,
};

export default QuizBuilder;
