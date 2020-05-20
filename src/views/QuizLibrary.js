import React from 'react';
import { useQuizes } from 'context/QuizesContext';

import QuizLibraryItem from 'components/QuizLibraryItem/QuizLibraryItem';

const QuizLibrary = ({ history: { push } }) => {
  const { quizes, setQuizes } = useQuizes();

  const deleteQuizHandler = (id) => {
    const newQuizes = quizes.filter((el) => el.id !== id);
    setQuizes(newQuizes);
  };

  const openQuizHandler = (id) => {
    push(`/quiz/${id}`);
  };

  return quizes.map((el) => (
    <QuizLibraryItem
      key={el.id}
      id={el.id}
      title={el.title}
      description={el.description}
      questionsQuantity={el.questions.length}
      deleteQuizFn={deleteQuizHandler}
      openQuizFn={openQuizHandler}
    />
  ));
};

export default QuizLibrary;
