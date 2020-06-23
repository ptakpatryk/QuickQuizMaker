import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components Import
import ErrorModal from 'components/ErrorModal/ErrorModal';
import MakeQuestion from 'components/MakeQuestion/MakeQuestion';
import TitlePage from 'components/TitlePage/TitlePage';

// It will show <MakeQuestion> and <QuizHistory> to go back and edit particular slides

const QuizBuilder = ({ match: { path } }) => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const closeError = () => {
    setIsError(false);
    setErrorMsg('');
  };

  return (
    <>
      {isError && (
        <ErrorModal closeModalFn={closeError} errorMessage={errorMsg} />
      )}
      <Switch>
        <Route
          path={`${path}/question/`}
          render={(props) => <MakeQuestion {...props} />}
        />
        <Route path={`${path}`} render={(props) => <TitlePage {...props} />} />
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
