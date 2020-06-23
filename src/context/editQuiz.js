import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useQuizes } from 'context/quizes';

export const actionTypes = {
  SET_INFO: 'SET_INFO',
  SET_QUESTION: 'SET_QUESTION',
  FINISH_QUIZ: 'FINISH_QUIZ',
};

const EditQuiz = React.createContext();

const initState = {
  title: '',
  description: '',
  id: '',
  questions: [],
};

const EditQuizProvider = ({ children }) => {
  const { postQuiz } = useQuizes();

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_INFO:
        return {
          ...initState,
          title: action.title,
          description: action.description,
          id: action.id,
        };
      case actionTypes.SET_QUESTION:
        return {
          ...state,
          questions: [...state.questions, action.question],
        };
      case actionTypes.FINISH_QUIZ:
        postQuiz(state);
        return {
          initState,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <EditQuiz.Provider value={{ state, dispatch }}>
      {children}
    </EditQuiz.Provider>
  );
};

EditQuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditQuizProvider;

export const useEditQuiz = () => useContext(EditQuiz);
