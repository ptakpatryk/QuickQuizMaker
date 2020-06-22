import React, { useContext, useState, useReducer } from 'react';

export const actionTypes = {
  SET_INFO: 'SET_INFO',
};

const EditQuiz = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INFO':
      return {
        ...state,
        title: action.title,
        description: action.description,
        id: action.id,
      };

    default:
      return state;
  }
};

const initState = {
  title: '',
  description: '',
  id: '',
  questions: [],
};

const EditQuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);

  return (
    <EditQuiz.Provider value={{ state, dispatch }}>
      {children}
    </EditQuiz.Provider>
  );
};

export default EditQuizProvider;

export const useEditQuiz = () => useContext(EditQuiz);
